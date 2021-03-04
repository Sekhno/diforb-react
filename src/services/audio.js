// import Sound from "../models/library"
import { fromEvent } from "rxjs"
// import { switchMap } from 'rxjs/operators';

class First {
    constructor(){
        this.volume = 1
    }
}

var audioContext = new (window.AudioContext || window.webkitAudioContext)()
var startTime = audioContext.currentTime + 0.2

fromEvent(document, 'click').subscribe(
    () => {
        var a = new First()

        First.prototype.some = function(){}
        console.log(a)
        // init()

        // getSample('./src/assets/audio/Glass_01.wav', function play (buffer) {
        //     var player = audioContext.createBufferSource()
        //     player.buffer = buffer
            
            
        //     getSample('./src/assets/audio/Reverbs/irHall.ogg', function(impulse){
        //         var convolver = audioContext.createConvolver()
        //         convolver.buffer = impulse

        //         // myAudioSample is fetched and created before
            
        //         player.connect(convolver)
        //         convolver.connect(audioContext.destination)
        //         player.start(startTime)
        //     })
        // })
    }
)
// const TEST_SOUNDS = ['Glass_01.wav','Digital_01.wav', 'Natural_10.wav']

// async function init() {
//     let sound1 = new Sound(TEST_SOUNDS[0])
//     // let sound2 = new Sound(TEST_SOUNDS[1])
//     await sound1.setAudioBuffer()
//     // await sound2.setAudioBuffer()
//     sound1.playAudio()
//     // sound2.playAudio()
//     console.log(sound1)
    
// }

function getSample (url, cb) {
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = 'arraybuffer'
    request.onload = function () {
        audioContext.decodeAudioData(request.response, cb)
    }
    request.send()
}


export default { }

