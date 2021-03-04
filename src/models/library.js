import { ajax } from "rxjs/ajax"

const BASE_AUDIO_URL = './src/assets/audio/'
let actx, compressor, reverbs = []

try {
    actx = new (window.AudioContext || window.webkitAudioContext)()
    compressor = actx.createDynamicsCompressor()
    compressor.connect(actx.destination)
    setupReverbs()
    
} catch(e) {
    alert("Error")
}

const SoundProto = {
    actx: actx,
    compressor: compressor
}

class Sound {
    constructor(name) {
        // PART Constructor
        Object.setPrototypeOf(this, SoundProto)
        this.url = BASE_AUDIO_URL + name
        this.playing = false
        this.startedAt = 0
        this.pausedAt = null
        this.asource = null
        this.audioBuffer = null
        this.gainNode = this.actx.createGain()
        this.gainNode.gain.value = 3
        // this.reverbgainNode = this.actx.createGain()
        // this.reverbgainNode.gain.value = 0
        
        
        // this.convolver = this.actx.createConvolver()
        // this.convolver.buffer = reverbs[0]

        // PART Init
        this.gainNode.connect(compressor)
        
        // PART METHODs

        this.playAudio =  () => {
            this.playing = true
            this.startedAt = this.pausedAt ? Date.now() - this.pausedAt : Date.now()
            this.asource = this.actx.createBufferSource()
            this.asource.buffer = this.audioBuffer
            this.asource.loop = true
            this.asource.connect(this.gainNode)
            this.asource.start()
        }
    
        this.pauseAudio = () => {
            this.playing = false
            this.pausedAt = Date.now() - this.startedAt
            this.asource.stop()
        }
        
        this.setAudioBuffer = async () => {
            this.audioBuffer = await fetchSound(this.url)
        }
    }
}

async function fetchSound (url) {
    const response = await fetch(url, {
        responseType: 'blob',
        mode: 'no-cors'
    })
    const blob = await response.blob()
    const buffer = await blob.arrayBuffer()
    const audio = await actx.decodeAudioData(buffer)

    return audio
}

async function setupReverbs() {
    let reverb1 = await fetchSound(BASE_AUDIO_URL + 'Reverbs/irHall.ogg')
    let reverb2 = await fetchSound(BASE_AUDIO_URL + 'Reverbs/noise.ogg')
    let reverb3 = await fetchSound(BASE_AUDIO_URL + 'Reverbs/glass-hit.ogg')
    reverbs.push(reverb1)
    reverbs.push(reverb2)
    reverbs.push(reverb3)
    
    // ajax({
    //     url: BASE_AUDIO_URL + 'Reverbs/irHall.ogg',
    //     method: 'GET',
    //     headers: {
    //         responseType: 'blob',
    //         mode: 'no-cors'
    //     },
    //     responseType: 'blob'
    // }).subscribe(
    //     res => console.log(res),
    //     err => console.log(err),
    //     ___ => console.log("Complete!")
    // )
}


export default Sound