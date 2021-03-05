import { WebApiBase, ConvolverBuffer, Convolver, Library } from '../models/sound'
import BufferLoader from '../models/bufferLoader'
import { fromEvent, timer } from 'rxjs'


const BASE_AUDIO_URL = './src/assets/audio/'
const DiforbConstans = {
    ConvolverBufferPath: {
        stadium: BASE_AUDIO_URL + 'Reverbs/irHall.ogg',
        hall: BASE_AUDIO_URL + 'Reverbs/noise.ogg',
        room: BASE_AUDIO_URL + 'Reverbs/glass-hit.ogg'
    }
}
// const Event = {
//     CLICK: 'click'
// }

/**
 * @class WebAudioService
 */
class WebAudioService {
    constructor()
    {
        this.audioCtxt = new (window.AudioContext || window.webkitAudioContext)()
        this.library = null
        this.soundNamePrefix = ''
        
        WebApiBase.prototype.Context  = this.audioCtxt
        WebApiBase.prototype.BasePath = BASE_AUDIO_URL
        WebApiBase.prototype.BaseFilePath = BASE_AUDIO_URL
        WebApiBase.prototype.BufferLoader = new BufferLoader(this.audioCtxt)

        var locAnalyser
        locAnalyser = this.audioCtxt.createAnalyser()
        locAnalyser.fftSize = 1024
        locAnalyser.smoothingTimeConstant = 0.5
        WebApiBase.prototype.GeneralAnalyser = locAnalyser

        var locJavaScriptNode = null
        if (!this.audioCtxt.createScriptProcessor) {
            locJavaScriptNode = this.audioCtxt.createJavaScriptNode(1024, 2, 2)
        } else {
            locJavaScriptNode = this.audioCtxt.createScriptProcessor(1024, 2, 2)
        }

        WebApiBase.prototype.WaveNode = locJavaScriptNode
        WebApiBase.prototype.IsRecording = false

        Convolver.prototype.Buffers = {
            Stadium: new ConvolverBuffer(DiforbConstans.ConvolverBufferPath.stadium),
            Hall: new ConvolverBuffer(DiforbConstans.ConvolverBufferPath.hall),
            Room: new ConvolverBuffer(DiforbConstans.ConvolverBufferPath.room)
        }

        Convolver.prototype.FillBuffers = function() {
            var instance = this

            instance.BufferLoader.loadBuffer(instance.Buffers.Stadium.Url, (buffer) => {
                instance.Buffers.Stadium.Buffer = buffer
                instance.BufferLoader.loadBuffer(instance.Buffers.Hall.Url, (buffer) => {
                    instance.Buffers.Hall.Buffer = buffer
                    instance.BufferLoader.loadBuffer(instance.Buffers.Room.Url, (buffer) => {
                        instance.Buffers.Room.Buffer = buffer

                    })
                })
            })
        }

        Convolver.prototype.FillBuffers()
    }

    setLibrary(name)
    {
        this.library = new Library(name)
    }

    addLeftSound(name)
    {
        this.library.LeftSide.AddSound(name)
    }

    addRightSound(name)
    {
        this.library.RightSide.AddSound(name)
    }

    setSoundNamePrefix(soumdNamePrefix)
    {
        this.soundNamePrefix = soumdNamePrefix
    }
}


const webAudioService = new WebAudioService()
const SoundGroups = ['Designed', 'Extra', 'Main', 'Music', 'PopUp', 'Swish']


// timer(2000).subscribe(() => {
//     webAudioService.setLibrary('[library] test')
//     // webAudioService.library.SoundAnalizer.AddVisualizer(drawAudioWave.handleChannelData)
//     SoundGroups.forEach(groupeName => {
//         webAudioService.addLeftSound(groupeName)
//         webAudioService.addRightSound(groupeName)
//     })
// })

// fromEvent(document, Event.CLICK).subscribe(() => {
//     const side = webAudioService.library.LeftSide

//     console.log(webAudioService)

//     const webAudioSound = side.Sounds[SoundGroups[0]]

//     webAudioSound.AddFiles('', [{ id: 'Interface/Designed/Digital/Complex_01.wav'}] )
// 	webAudioSound.Read()

//     // setTimeout(() => {
//     //     webAudioService.library.Stop()
// 	// 	webAudioService.library.Play()
//     // }, 0)
// })

export default { webAudioService }

