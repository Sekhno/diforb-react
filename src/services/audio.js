

let context;

try {
    context = new (window.AudioContext || window.webkitAudioContext)()
} catch (error) {
    window.alert('Извините, но ваш браузер не поддерживает Web Audio API!')
}

if (context !== undefined) {
    /* Наш код здесь */
    fetchSound('./src/assets/audio/Tizers/Birds_tizer.mp3')
    
    
}

async function fetchSound(url) {
    const response = await fetch(url, {
        responseType: 'blob',
        mode: 'no-cors'
    })
    const blob = await response.blob()
    const buffer = await blob.arrayBuffer()
    const audio = await context.decodeAudioData(buffer)
    console.log(audio)
    document.addEventListener('click', () => {
        playSound(audio)
    }, { once: true })
}    

function playSound(audio) {
    const source = context.createBufferSource();
    source.buffer = audio;
    source.connect(context.destination);
    source.start(0);
}

export default {
    playSound
}