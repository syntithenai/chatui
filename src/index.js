/* global window */
import React,{useState, useEffect} from 'react'

//import styles from './styles.module.css'


//const mespeak = require('./mespeak.js')


export const ChatUIComponent = (props) => {
    
    var [voices,setVoices] = useState(null)
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
            if (Array.isArray(entry.bot)) {
                if (!Array.isArray(current.bot)) current.bot = []
                entry.bot.map(function(entry) { current.bot.push(entry)})
            }
        })
        if (Object.keys(current).length > 0) {
            collated.push(current)
        }
        console.log(['ch',collated])
        setCollatedHistory(collated)
    }
    
    useEffect(() => {
        collateHistory()
        if (meSpeak) meSpeak.loadVoice('en/en-us');
        //initSpeechSynthesis()
        setTimeout(function() {
            meSpeak.speak('hello world');

            //.say('help me') 
        },300)
    },[])
    
    function sendUserMessage(message) {
        var newHistory = history
        newHistory.push({user:message})
        if (props.sendUserMessage) {
            props.sendUserMessage(message).then(function(response) {
                console.log(['chat msg resp',response])
                if (response) {
                    newHistory.push({bot:response})
                    // sequential handling of audio outputs
                    // utterances
                    var speechParts=[]
                    if (Array.isArray(response)) response.map(function(utterance) {
                       if (utterance.utterance)  speechParts.push({text:utterance.utterance})
                    })
                    console.log(['SPEECHPARTS',speechParts])
                    meSpeak.speakMultipart(speechParts,function() {
                        console.log('finished speaking utterances')
                        // audio (auto play true)
                        
                        // video (auto play true, fullscreen)
                        
                    });
                    
                    
                    
                    setHistory(newHistory)
                    collateHistory()
                    setUserMessage(' ')
                }
            })
        } else {
            var response = {bot:{utterance:'Missing property sendUserMessage',buttons:[{text:'Try again'}]}}
            newHistory.push({bot:response})
            setHistory(newHistory)
            collateHistory()
            setUserMessage(' ')
        }
    }
    
    
 
   ///**
     //* Synthesise speech from text and send to to audio output
     //*/ 
    //function say(text, voice='default') {
            //console.log(['TTS SAY',text]);
            
            ////if (voice === "default") {
                ////// js generated fallback
                ////speak(text,{
                    ////amplitude : !isNaN(parseFloat(this.props.config.voicevolume)) ? parseFloat(this.props.config.voicevolume) : 70,
                    ////pitch: !isNaN(parseFloat(this.props.config.voicepitch)) ? parseFloat(this.props.config.voicepitch) : 50,
                    ////speed : !isNaN(parseFloat(this.props.config.voicerate)) ? parseFloat(this.props.config.voicerate) * 2.2 : 175
                ////});
            ////} else {
                //// Create a new instance of SpeechSynthesisUtterance.
                //var msg = new SpeechSynthesisUtterance();
                //msg.text = text;
                //msg.volume = 100 //!isNaN(parseFloat(this.props.config.voicevolume)) ? parseFloat(this.props.config.voicevolume) : 50;
                //msg.rate = 0.5 // !isNaN(parseFloat(this.props.config.voicerate)) ? parseFloat(this.props.config.voicerate)/100 : 50/100;
                //msg.pitch = 50 //!isNaN(parseFloat(this.props.config.voicepitch)) ? parseFloat(this.props.config.voicepitch) : 50;
                //var voices = speechSynthesis.getVoices();
      
              //// Loop through each of the voices.
                //voices.forEach(function(voiceItem, i) {
                    //if (voiceItem.name === voice) msg.voice = voiceItem;
                    //window.speechSynthesis.speak(msg);
                //});
            ////}
            
       //// }
    //}
    
    //function initSpeechSynthesis() {
        //let that = this;
        //if ('speechSynthesis' in window) {
            //// Fetch the list of voices and populate the voice options.
            //function loadVoices() {
              //// Fetch the available voices.
                //var voices = speechSynthesis.getVoices();
              
              //// Loop through each of the voices
                //let voiceOptions=[];
                //voices.forEach(function(voice, i) {
                //// Create a new option element.
                    //voiceOptions.push({'name':voice.name,label:voice.name});
                //});
                //voiceOptions.push({'name':'default',label:'Browser Generated'});
                //setVoices(voiceOptions);
            //}

            //// Execute loadVoices.
            //loadVoices();

            //// Chrome loads voices asynchronously.
            //window.speechSynthesis.onvoiceschanged = function(e) {
              //loadVoices();
            //};
            
        //} else {
            //let voiceOptions=[];
            //voiceOptions.push({'name':'default',label:'Browser Generated'});
            //setVoices(voiceOptions);
        //}
        //console.log(['LOADED VOICES',voices]);
    //};

    
    
  return <div style={{border:'1px solid black', padding:'1em', width:'100%'}}>
    <button onClick={function(e) { setUserMessage('next track') ; sendUserMessage('next track')}} >Next track</button>
    <button onClick={function(e) { setUserMessage('play some jazz'); sendUserMessage('play some jazz')}} >JAZZ</button>
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
                {false &&  JSON.stringify(entry)}
                    {entry.user && <span style={{ marginBottom:'1em',marginTop:'1em',padding:'0.2em', width:'100%'}}><hr/><b>User: </b><i>{entry.user}</i></span>} 
                    {entry.bot && <div>
                    {entry.bot.map(function(botEntry,okey) {
                         return (<div  key={okey}  >
                                {botEntry.utterance && <div><b>Bot: </b><span>{botEntry.utterance}</span></div>}
                                
                                {botEntry.buttons && <div style={{ margin:'0.5em'}}>{botEntry.buttons.map(function(button,key) {
                                    return <button key={key} onClick={function(e) {
                                           e.preventDefault() 
                                           sendUserMessage(button.text ? button.text : button.label)
                                        }} >{button.label}</button>
                                })}</div>}
                                
                                {botEntry.images && <div style={{ margin:'0.5em'}} >
                                    {botEntry.images.map(function(image,key) {
                                        return <img  key={key}  src={image} />
                                    })}
                                </div>}
                                
                                {botEntry.texts && <div style={{ margin:'0.5em'}} >
                                    {botEntry.texts.map(function(text,key) {
                                        return <div  key={key} >{text.text}</div>
                                    })}
                                </div>}
                                
                                {botEntry.audio && <div style={{ margin:'0.5em'}} >
                                    {botEntry.audio.map(function(audioFile,key) {
                                        return <audio  key={key}  src={audioFile.href} controls  />
                                    })}
                                </div>}
                                
                                {botEntry.video && <div style={{ margin:'0.5em'}} >
                                    {botEntry.video.map(function(video,key) {
                                        return <video  style={{height:'150px'}}  key={key}  src={video.href} controls />
                                    })}
                                </div>}
                                
                                {botEntry.frames && <div style={{ margin:'0.5em'}} >
                                    {botEntry.frames.map(function(frame,key) {
                                        return <iframe  style={{width:'100%', height: '400px'}} key={key}  src={frame.href} />
                                    })}
                                </div>}
                                
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




