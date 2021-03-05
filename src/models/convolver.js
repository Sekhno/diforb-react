/**
 * @class Convolver
 * @constructor
 * @param {AudioContext} context
 */
class Convolver {
	constructor(context) {
		this.context = context
		this.source = null
		this.volume = 1.0
		this.muted = false

		this.instance = null
		this.convolverGainNode = null
		this.isOn = false

		this.init()
	}

	init() {
		this.instance = this.context.createConvolver();
		this.gainNode = this.context.createGain();
		this.instance.connect(this.gainNode);
		this.setGainVolume();    
	}

	setBuffer(buffer) {
		if(!this.instance)
		{
			return;
		}

		if(buffer === "")
		{
			this.isOn = false;
			this.instance.buffer
		} else
		{
			this.isOn = true;
			this.instance.buffer = buffer;
		}
	}

	mute () {
		this.muted = true;
		this.setGainVolume();
	}

	unmute () {
		this.muted = false;
		this.setGainVolume();
	}

 	setVolume (val) {
		this.volume = val;
		this.setGainVolume();
	}

	setGainVolume () {
		if(this.gainNode)
		{
			this.gainNode.gain.value = this.muted ? 0 : this.volume;
		}
	}
}

export default Convolver
