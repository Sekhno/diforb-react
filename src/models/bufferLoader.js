/**
 * @class BufferLoader
 * @constructor
 * @param {AudioContext} context
 */
class BufferLoader {
	constructor(context){
		this.context = context;
		this.loadCount = 0;

		this.Left = null;
		this.Right = null;

		this.reverSound = null;
		this.reverSounds = [];
		this.reverSounds["Hall"] = null;
		this.reverSounds["Noise"] = null;
		this.reverSounds["Glass_hit"] = null;
	}

	loadBuffer(url, callBackFunc) 
	{
		var request = new XMLHttpRequest()
		request.open('GET', url)
		request.responseType = 'arraybuffer'
		request.onload = () => {
			this.context.decodeAudioData(
				request.response,
				(buffer) => {
					if (!buffer) {
						return console.error('error decoding file data: ' + url)
					}
					callBackFunc(buffer)
				},
				(error) => {
					console.error('decodeAudioData error', error);
				}
			);
		}
		request.onerror = () => {
			console.error('BufferLoader: XHR error')
		}
	
		request.send()
	}
}

export default BufferLoader
