import React,{Fragment, useState,useEffect} from 'react'

import { ChatUIComponent } from 'chatui'
//import 'chatui/dist/index.css'

import DialogManager from 'voicedialogjs'

var config = require('./config')


const App = () => {
    var d = DialogManager(config)
    var [ready,setReady]= useState(false)
    
    useEffect(() => {
        d.init().then(function() {
            console.log('dm initied')
            //d.pushIntent()
            //console.log(d.predict())
            //,entities:[{name:'name',value:'Fred'}
            
        })
    },[])
    
    function sendUserMessage(message) {
        return new Promise(function(resolve,reject) {
            if (ready) {
                return d.run(message).then(function(response) {
                    console.log(['RES',response])
                    resolve(response)
                })
            } else {
                resolve({})
            }
        })
    }

  return <>
    {ready && <ChatUIComponent sendUserMessage={sendUserMessage} />}
    {!ready && <b>Loading</b>}
    </>
}

export default App
