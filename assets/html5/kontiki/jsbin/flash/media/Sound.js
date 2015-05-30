/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.Sound = function(urlRequest, context) {
	this.xhr = null;
	this.length = 0;
	this.isLoaded = false;
	this.url = null;
	this.node = null;
	this.bytesLoaded = 0;
	this.soundChannel = null;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this);
	flash.media.SoundMixer.get_soundTransform();
	if (urlRequest)
		this.load(urlRequest, context);
};

flash.media.Sound.prototype.load = function(stream, context) {
	this.url = stream.url;
	if (flash.media.SoundMixer.cache[this.url]) {
		this.dispatchEvent(new flash.events.Event("complete", false, false));
		return;
	}
	if (flash.media.SoundMixer.usingWebAudio) {
		this.xhr = new XMLHttpRequest();
		this.xhr.open("GET", stream.url, true);
		this.xhr.responseType = "arraybuffer";
		this.xhr.onload = $createStaticDelegate(this, this.completeHandler);
		try {
			this.xhr.send();
		} catch (error) {
			this.xhr.onerror();
		}
	} else {
	}
};

flash.media.Sound.prototype.completeHandler = function() {
	var that = this;
	try {
		flash.media.SoundMixer.ctx.decodeAudioData(this.xhr.response, function(buffer) {
			if (buffer) {
				that.loadSound(buffer);
			}
		});
	} catch (error) {
		this.dispatchEvent(new flash.events.Event("complete", false, false));
		this.isLoaded = true;
	}
};

flash.media.Sound.prototype.loadSound = function(buffer) {
	console.log("url: " + this.url);
	flash.media.SoundMixer.cache[this.url] = buffer;
	this.length = buffer.duration;
	this.dispatchEvent(new flash.events.Event("complete", false, false));
	this.isLoaded = true;
};

flash.media.Sound.prototype.loadCompressedDataFromByteArray = function(bytes, length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Sound.loadCompressedDataFromByteArray() $$$$");
};

flash.media.Sound.prototype.play = function(startTime, loops, sndTransform) {
	if (!this.soundChannel)
		this.soundChannel = new flash.media.SoundChannel();
	else
		this.soundChannel.stop();
	if (!flash.media.SoundMixer.cache[this.url])
		return this.soundChannel;
	if (flash.media.SoundMixer.usingWebAudio) {
		if (!this.node) {
			this.node = flash.media.SoundMixer.getGainNode();
			this.node.connect(flash.media.SoundMixer.ctx.destination);
		}
		if (this.node.bufferSource && this.node.bufferSource.loop)
			this.node.bufferSource.stop(0);
		this.node.bufferSource = flash.media.SoundMixer.ctx.createBufferSource();
		if (!this.node.bufferSource)
			return this.soundChannel;
		this.node.bufferSource.connect(this.node);
		this.node.bufferSource.loop = (loops > 0);
		this.node.bufferSource.buffer = flash.media.SoundMixer.cache[this.url];
		this.node.bufferSource.connect(flash.media.SoundMixer.ctx.destination);
		this.node.gain.value = 1;
		this.node.bufferSource.start(startTime);
		this.soundChannel.soundTransform.buffer = this.node.bufferSource;
	}
	return this.soundChannel;
};

flash.media.Sound.prototype.close = function() {
};


$inherit(flash.media.Sound, flash.events.EventDispatcher);

flash.media.Sound.className = "flash.media.Sound";

flash.media.Sound.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundMixer');
	p.push('flash.media.SoundChannel');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.net.URLRequest');
	p.push('flash.events.Event');
	return p;
};

flash.media.Sound.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.Sound.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'urlRequest', t:'flash.net.URLRequest'});
			p.push({n:'context', t:'flash.media.SoundLoaderContext'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

