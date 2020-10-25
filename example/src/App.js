import React,{Fragment, useState,useEffect} from 'react'

import { ChatUIComponent } from 'chatui'
//import 'chatui/dist/index.css'

import DialogManager from 'voicedialogjs'

var config = require('./config')


const App = () => {
    var d = null
    var [ready,setReady] = useState(false)
    var [chat,setChat] = useState(null)
    console.log(['DM',d,ready,config])
    useEffect(() => {
        console.log(['DM init'])
        d = DialogManager(config)
        d.init().then(function() {
            console.log(['dm initied',d])
            function sendUserMessage(message) {
                console.log(['dm send msg',message])
                return new Promise(function(resolve,reject) {
                    //if (ready) {
                        console.log(['dm msg',message])
                        return d.run(message).then(function(response) {
                            console.log(['RES',response])
                            resolve(response)
                        })
                    //} else {
                        //resolve({})
                    //}
                })
            }
            // avoid recreating instance
            setChat(<ChatUIComponent sendUserMessage={sendUserMessage} />)
            setReady(true)
            //d.pushIntent()
            //console.log(d.predict())
            //,entities:[{name:'name',value:'Fred'}
            
        })
    },[])
    

  return <>
  
    {<span style={{display:(ready ? 'block' : 'none')}} >{chat}</span>}
    {!ready && <b>Loading</b>}
    </>
}

export default App
