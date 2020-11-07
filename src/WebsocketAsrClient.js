/* global window */
    
var hark = require('hark');

var WebsocketAsrClient = function(config) {
        var PorcupineManager = require('./porcupine/porcupine_manager')
        console.log(['PORK',PorcupineManager,window.PorcupineManager])
        var KeywordData =  require('./porcupine/keyword_data_edison')
        try {
            window.PorcupineManager = PorcupineManager
        } catch(e) {} 
        var client = null
        var isRecording = false
        var isSending = false
        //var isPlaying = false
        //var isConnected = false
        var speaking = false
        
        var hotwordInitialised = false
        var hotwordStarted = false
        var hotwordReady = false      
        
        var speakingTimeout = null
        
        // default volumes
        var inputvolume = 1.0  // TODO also hotword volume?
        var outputvolume = 1.0
        
        let audioContext = window.AudioContext || window.webkitAudioContext;
        let microphoneContext = null
        var microphoneGainNode = null
        var microphoneAudioBuffer = []
        var bufferSource = null
        var currentVolume = null      
        var onCallbacks = {}
        
        var SENSITIVITIES = new Float32Array([
                0.9 //, // "Hey Edison"
                //0.5, // "Hot Pink"
                //0.5, // "Deep Pink"
                //0.5, // "Fire Brick"
                //0.5, // "Papaya Whip"
                //0.5, // "Peach Puff"
                //0.5, // "Sandy Brown"
                //0.5, // "Lime Green"
                //0.5, // "Forest Green"
                //0.5, // "Midnight Blue"
                //0.5, // "Magenta"
                //0.5, // "White Smoke"
                //0.5, // "Lavender Blush"
                //0.5 // "Dim Gray"
            ])
        
        
        function concat_arrays(arrays) {
            // sum of individual array lengths
            let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

            if (!arrays.length) return null;
            let result = new Uint8Array(totalLength);
            // for each array - copy it over result
            // next array is copied right after the previous one
            let length = 0;
            for(let array of arrays) {
                result.set(array, length);
                length += array.length;
            }

            return result;
        }
        
        
        function setVolume(volume) {
            if (speakerGainNode && speakerGainNode.gain) speakerGainNode.gain.value = volume/100;
        }
        
        // event functions
        // accept callback for trigger on lifecycle events
        function bind(key,callback) {
            onCallbacks[key] = callback;
        } 
         
        function unbind(key) {
            delete onCallbacks[key]
        } 
         
        function startHotword() {
            if (onCallbacks.hasOwnProperty('hotwordStart')) {
                onCallbacks['hotwordStart']()
            }
            hotwordStarted = true;
            if (!hotwordInitialised) {
                let processCallback = function (keyword) {
                    if (keyword && hotwordStarted) {
                        startMicrophone()
                        // TODO ??sendMessage('hermod/'+config.site+'/hotword/detected',{})
                        if (onCallbacks.hasOwnProperty('hotwordDetected')) {
                            onCallbacks['hotwordDetected'](keyword)
                        }
                        console.log('hotword DETECT')
                    }
                };
                let readyCallback = function() {
                    console.log('hotword ready')
                    hotwordReady = true;
                    if (onCallbacks.hasOwnProperty('hotwordReady')) {
                        onCallbacks['hotwordReady']()
                    }
                }
 
                
                let audioManagerErrorCallback = function (ex) {
                    console.log(ex);
                };

                //if (!porcupineManager) {
                    //console.log('CREATE NEW porc WORKER')
                //var webpack = false ;
                ////console.log(config.javascript_environment)
                ////console.log(config)
                //if (config.javascript_environment === 'react') {
                    //webpack = true
                //} 
                var porcupineManager = PorcupineManager("./porcupine/porcupine_worker.js",true  );
                //}
                console.log(['PORK how',PorcupineManager,window.PorcupineManager,porcupineManager])
                if (porcupineManager) {
                    porcupineManager.start(KeywordData, SENSITIVITIES, processCallback, audioManagerErrorCallback, readyCallback);
                    
                    console.log(    'HOW STARYTED')
                } else {
                    console.log(    'Hw no strart failed instant manager')
                }
                hotwordInitialised = true;
            }
        };

        function stopHotword() {
            if (onCallbacks.hasOwnProperty('hotwordStop')) {
                onCallbacks['hotwordStop']()
            }
            hotwordStarted = false;
        };
        

        /**
         * HELPER FUNCTIONS
         */
           
        /**
         * Bind silence recognition events to set speaking state
         */ 
        function bindSpeakingEvents() {
             if (!navigator.getUserMedia) {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
             }
             try {
                if (navigator.getUserMedia) {
                  navigator.getUserMedia({audio:true}, function(stream) {
                    var options = {};
                    var speechEvents = hark(stream, options);
                    speechEvents.on('speaking', function() {
                      clearTimeout(speakingTimeout)
                      speaking = true
                      if (onCallbacks.hasOwnProperty('speaking')) {
                        onCallbacks['speaking']()
                      }
                    });

                    speechEvents.on('stopped_speaking', function() {
                      // send an extra second of silence for ASR
                      speakingTimeout = setTimeout(function() {
                             clearTimeout(speakingTimeout)
                             speaking = false
                             if (onCallbacks.hasOwnProperty('stopspeaking')) {
                                onCallbacks['stopspeaking']()
                             }
                      },600);
                    });    
                      
                  }, function(e) {
                    console.log(['MIC Error capturing audio.',e]);
                  });
                } else {
                    console.log('MIC getUserMedia not supported in this browser.');
                }
             }   catch (e) {
                 console.log(e);
             }
        };
        
        function bufferAudio(audio) {
            //console.log('buffer')
            microphoneAudioBuffer.push(audio);
            if (microphoneAudioBuffer.length > 30) {
                microphoneAudioBuffer.shift();
            }
        }
        
        function sendAudioBuffer() {
            
            if (client && client.readyState === client.OPEN) {
                //console.log('sendbuffer')
                for (var a in microphoneAudioBuffer) {
                    sendAudio(microphoneAudioBuffer[a]);
                }
                microphoneAudioBuffer = [];
            } else {
                //console.log('sendbuffer not ready')
            }
        }
        
        function sendAudio(data) {
             //console.log('WebSocket send audio');
            if (client && client.readyState === client.OPEN) {
                //console.log('WebSocket send audio');
                client.send(data);
            }
        }
        
        
        function startMicrophone() {
            isSending = true
            client = new WebSocket(config.server, 'asr-audio');
            client.onerror = function() {
                console.log('Connection Error');
            };
            client.onopen = function() {
                console.log('WebSocket Client Connected');
                //isConnected = true;
            
            };
            client.onclose = function() {
                console.log('echo-protocol Client Closed');
                //isConnected = false
            };
            client.onmessage = function(e) {
                console.log(["Received ee: ",e])
                if (typeof e.data === 'string') {
                    console.log("Received: '" + e.data + "'");
                    stopMicrophone()
                    if (onCallbacks.hasOwnProperty('speaking')) {
                        onCallbacks['message'](e.data)
                    }
                }
            };
            
            if (onCallbacks.hasOwnProperty('microphoneStart')) {
                onCallbacks['microphoneStart']()
            }
        }
        
            
        function gotDevices(deviceInfos,site) {
          // TODO https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js
          // Handles being called several times to update labels. Preserve values.
          var device = 'default'
          var devices={}
          for (let i = 0; i !== deviceInfos.length; ++i) {
            const deviceInfo = deviceInfos[i];
            if (deviceInfo.kind === 'audioinput') {
                devices[deviceInfo.label] = deviceInfo.deviceId
                if (deviceInfo.label && deviceInfo.label.toLowerCase().indexOf('speakerphone') !== -1) {
                    device = deviceInfo.deviceId
                }
            }
            devices['FINAL'] = device
          }
          console.log(['FOUND DEVICES ',devices,' USING ',device])
          activateRecording(device)
        }

        function handleError(error) {
          console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
        }
        
        
        function activateRecording(deviceId) {
            if (isRecording) return;
            isRecording = true;
            
            console.log(['activate recording '])        
            //// init websocket client
            //client = new WebSocket(config.server, 'asr-audio');
            //client.onerror = function() {
                //console.log('Connection Error');
            //};
            //client.onopen = function() {
                //console.log('WebSocket Client Connected');
            //};
            //client.onclose = function() {
                //console.log('echo-protocol Client Closed');
            //};
            //client.onmessage = function(e) {
                //console.log(["Received ee: ",e])
                //if (typeof e.data === 'string') {
                    //console.log("Received: '" + e.data + "'");
                //}
            //};
            
            
             
            
            if (!navigator.getUserMedia) {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia;
            }
            
            try {
                if (navigator.getUserMedia) {
                  navigator.getUserMedia({audio:true}, success, function(e) {
                    console.log(['dMIC Error capturing audio.',e]);
                  });
                } else {
                    console.log('MIC getUserMedia not supported in this browser.');
                }
             }   catch (e) {
                 console.log(e);
             }
            function success(e) {
                console.log(['activate recording success '])        
                  microphoneContext = new audioContext();
                  microphoneGainNode = microphoneContext.createGain();
                  microphoneGainNode.gain.value = inputvolume;
                  
                  var audioInput = microphoneContext.createMediaStreamSource(e);
                  
                  var bufferSize = 4096;
                  
                    function convertFloat32ToInt16(buffer) {
                      if (buffer) {
                          let l = buffer.length;
                          let buf = new Int16Array(l);
                          while (l--) {
                            buf[l] = Math.min(1, buffer[l])*0x7FFF;
                          }
                          return buf.buffer;
                      }
                    }
                    
                    function resample(sourceAudioBuffer,TARGET_SAMPLE_RATE,onComplete) {
                          var offlineCtx = new OfflineAudioContext(sourceAudioBuffer.numberOfChannels, sourceAudioBuffer.duration * sourceAudioBuffer.numberOfChannels * TARGET_SAMPLE_RATE, TARGET_SAMPLE_RATE);
                          var buffer = offlineCtx.createBuffer(sourceAudioBuffer.numberOfChannels, sourceAudioBuffer.length, sourceAudioBuffer.sampleRate);
                          // Copy the source data into the offline AudioBuffer
                          for (var channel = 0; channel < sourceAudioBuffer.numberOfChannels; channel++) {
                              buffer.copyToChannel(sourceAudioBuffer.getChannelData(channel), channel);
                          }
                          // Play it from the beginning.
                          var source = offlineCtx.createBufferSource();
                          source.buffer = sourceAudioBuffer;
                          source.connect(offlineCtx.destination); 
                          source.start(0);
                          offlineCtx.oncomplete = function(e) {
                            // `resampled` contains an AudioBuffer resampled at 16000Hz.
                            // use resampled.getChannelData(x) to get an Float32Array for channel x.
                            var resampled = e.renderedBuffer;
                            var leftFloat32Array = resampled.getChannelData(0);
                            // use this float32array to send the samples to the server or whatever
                            onComplete(leftFloat32Array);
                          }
                          offlineCtx.startRendering();
                    }
         
                  let recorderTimeout = null;  
                  let recorder = microphoneContext.createScriptProcessor(bufferSize, 1, 1);
                  recorder.onaudioprocess = function(e){
                      //console.log(['activate recording onaudioprocess',isRecording,isSending,speaking])
                      if (isRecording && isSending) { // && speaking) {
                          resample(e.inputBuffer,16000,function(res) {
                            //if (! isPlaying) { 
                                if (client && client.readyState === client.OPEN && isRecording  && isSending) {
                                    if (recorderTimeout) clearTimeout(recorderTimeout)
                                    //sendAudio(Buffer.from(convertFloat32ToInt16(res)))
                                    bufferAudio(Buffer.from(convertFloat32ToInt16(res)));
                                    sendAudioBuffer() 
                      
                                } else {
                                    if (!recorderTimeout) recorderTimeout = setTimeout(function() {sendAudioBuffer(); stopMicrophone(); startHotword(); },300)
                                    bufferAudio(Buffer.from(convertFloat32ToInt16(res)));
                                }
                            //} 
                          });
                      }
                  }
                  
                microphoneGainNode.connect(recorder);
                audioInput.connect(microphoneGainNode);
                recorder.connect(microphoneContext.destination);                         
            }
        }
        
        
        function stopMicrophone() {
            isSending = false;
            // close websocket
            if (client) client.close()
            client = null
            if (onCallbacks.hasOwnProperty('microphoneStop')) {
                onCallbacks['microphoneStop']()
            }
            
        }
        
        function stopAll() {
            stopHotword()
            stopMicrophone()
        }   
        
        function init() {
            if (navigator && navigator.mediaDevices) {
                navigator.mediaDevices.enumerateDevices().then(function(info){ gotDevices(info,config.site)} ).catch(handleError);
                bindSpeakingEvents()
            }
        }
        
        init()
             
        return {stopAll:stopAll, bind:bind,unbind:unbind,startMicrophone: startMicrophone, stopMicrophone: stopMicrophone,startHotword:startHotword,stopHotword:stopHotword}
}


export default WebsocketAsrClient 
try {
    if (window) {
        window.WebsocketAsrClient = WebsocketAsrClient
    }
} catch (e) {}
