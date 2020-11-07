import React,{Fragment, useState,useEffect} from 'react'

import {ChatPage} from 'chatui'
//import 'chatui/dist/index.css'

var config = require('./config')

if (window.skill) config = window.skill
console.log(['CHAT APP ',config])

const App = () => {
    return <div><ChatPage currentSkill={config}  isFullScreen={true}   /></div>
   
}

export default App
/* global window */
