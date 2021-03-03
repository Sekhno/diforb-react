import Sound from "../models/library"
import { fromEvent } from "rxjs"

fromEvent(document, 'click').subscribe(
    () => {
        init()
    }
)
const TEST_SOUNDS = ['Glass_01.wav','Digital_01.wav', 'Natural_10.wav']

async function init() {
    let sound1 = new Sound(TEST_SOUNDS[0])
    // let sound2 = new Sound(TEST_SOUNDS[1])
    await sound1.setAudioBuffer()
    // await sound2.setAudioBuffer()
    sound1.playAudio()
    // sound2.playAudio()
    console.log(sound1)
    
}


export default { }

