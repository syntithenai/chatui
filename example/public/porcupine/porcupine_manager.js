/*
    Copyright 2018 Picovoice Inc.

    You may not use this file except in compliance with the license. A copy of the license is located in the "LICENSE"
    file accompanying this source.

    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
    an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
*/

//var work = require('webworkify');
var WebVoiceProcessor = require('./web_voice_processor')

PorcupineManager = (function (porcupineWorkerScript, webpack = false) {
    let porcupineWorker;
    
    let start = function (keywordIDs, sensitivities, detectionCallback, errorCallback, readyCallback) {
        porcupineWorker = new Worker(porcupineWorkerScript); //
        //porcupineWorker = work(require('./porcupine_worker.js')) //window.PorcupineWorker);
        porcupineWorker.postMessage({
            command: "init",
            keywordIDs: keywordIDs,
            sensitivities: sensitivities
        }); 

        porcupineWorker.onmessage = function (e) {
            
            if (e.data.ready) {
                console.log('WORKER MSG')
                console.log(e.data)
                readyCallback()
            } else { 
                detectionCallback(e.data.keyword);
            }
        };

       WebVoiceProcessor.start([this], errorCallback, webpack);
    };

    let stop = function () {
        WebVoiceProcessor.stop();
        porcupineWorker.postMessage({command: "release"});
    };

    let processFrame = function (frame) {
        porcupineWorker.postMessage({command: "process", inputFrame: frame});
    };

    return {start: start, processFrame: processFrame, stop: stop}
});
try {
    module.exports = PorcupineManager
} catch (e) {}

try {
    window.PorcupineManager = PorcupineManager
} catch (e) {}
