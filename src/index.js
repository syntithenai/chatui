import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'

export const ChatUIComponent = (props) => {
    
    var [collatedHistory,setCollatedHistory] = useState([])
    var [history,setHistory] = useState([])
        //{user:'hi there'},
        //{
            //bot:{
                //utterance:'hi back',
                //images:['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Biological_cell.svg/250px-Biological_cell.svg.png']
            //}
        //},
        //{
            //bot:{
                //utterance:'how ARE you',
                //buttons:[{text:'Good'},{text:'Bad'}]
            //}
        //},
        //{user:'I am good'}
    //])
    var [userMessage,setUserMessage] = useState('')
    
    function collateHistory()  {
        var collated = []
        var current = {};
        [].concat(history).slice(0,40).map(function(entry) {
            if (entry.user) {
                if (Object.keys(current).length > 0) {
                    collated.push(current)
                    current = {}
                }
                current.user = entry.user
            }
            if (entry.bot) {
                if (!current.bot) current.bot = []
                current.bot.push(entry.bot)
            }
        })
        if (Object.keys(current).length > 0) {
            collated.push(current)
        }
        setCollatedHistory(collated)
    }
    
    useEffect(() => {
        collateHistory()
    },[])
    
    function sendUserMessage(message) {
        var newHistory = history
        newHistory.push({user:message})
        if (props.sendUserMessage) {
            props.sendUserMessage(userMessage).then(function(response) {
                newHistory.push(response)
                setHistory(newHistory)
                collateHistory()
                setUserMessage(' ')
            })
        } else {
            var response = {bot:{utterance:'Missing property sendUserMessage',buttons:[{text:'Try again'}]}}
            newHistory.push(response)
            setHistory(newHistory)
            collateHistory()
            setUserMessage(' ')
        }
    }
    
  return <div style={{border:'1px solid black', padding:'1em', width:'100%'}}>
    
        <form onSubmit={function(e) {
            e.preventDefault(); 
            sendUserMessage(userMessage)
        }} >
            <input type='text' size='100' value={userMessage} placeholder={'Start a conversation'} onChange={function(e) {setUserMessage(e.target.value)}} />
        </form>
        {collatedHistory.length > 0 && <div className="history" style={{padding:'0.5em', width:'100%', marginTop:'0.5em'}} >
          {[].concat(collatedHistory).reverse().map(function(entry,ookey) {
           return (
                <div style={{ marginTop:'0.1em',padding:'0.2em', width:'100%'}}  key={ookey} >
                    {entry.user && <b style={{ marginBottom:'1em',marginTop:'1em',padding:'0.2em', width:'100%'}}><hr/>{entry.user}</b>} 
                    {entry.bot && <div>
                    {entry.bot.map(function(botEntry,okey) {
                         return (<div  key={okey}  >
                                {botEntry.utterance && <i>{botEntry.utterance}</i>}
                                {botEntry.images && <div style={{ margin:'0.5em'}} >
                                    {botEntry.images.map(function(image,key) {
                                        return <img  key={key}  src={image} />
                                    })}
                                </div>}
                                {botEntry.buttons && <div style={{ margin:'0.5em'}}>{botEntry.buttons.map(function(button,key) {
                                    return <button key={key} onClick={function(e) {
                                           e.preventDefault() 
                                           sendUserMessage(button.text)
                                        }} >{button.text}</button>
                                })}</div>}
                            </div>
                        )
                    })}    
                    </div>}
               </div>
            )
            })}
        </div>}
  </div>
}




