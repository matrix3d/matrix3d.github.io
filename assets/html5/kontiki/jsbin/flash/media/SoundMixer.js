/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundMixer = function() {
};

flash.media.SoundMixer.stopAll = function() {
	var $n0;
	for (var $v0 in ($n0 = flash.media.SoundMixer.soundTransformInstance.transforms)){
		var transform = $n0[$v0];
		if (transform.buffer)
			transform.buffer.stop(0);
	}
};

flash.media.SoundMixer.cache = {};

flash.media.SoundMixer.ctx = null;

flash.media.SoundMixer.usingWebAudio = true;

flash.media.SoundMixer.noAudio = false;

flash.media.SoundMixer.codecs = {};

flash.media.SoundMixer.masterGain;

flash.media.SoundMixer.soundTransformInstance;

flash.media.SoundMixer.get_soundTransform = function() {
	if (!flash.media.SoundMixer.soundTransformInstance) {
		if (typeof(AudioContext) !== "undefined") {
			flash.media.SoundMixer.ctx = new webkitAudioContext();
		} else if (typeof(webkitAudioContext) !== "undefined") {
			flash.media.SoundMixer.ctx = new webkitAudioContext();
		} else if (typeof(Audio) !== "undefined") {
			flash.media.SoundMixer.usingWebAudio = false;
		} else {
			flash.media.SoundMixer.usingWebAudio = false;
			flash.media.SoundMixer.noAudio = true;
		}
		if (flash.media.SoundMixer.usingWebAudio) {
			flash.media.SoundMixer.masterGain = (typeof(flash.media.SoundMixer.ctx.createGain) === "undefined") ? flash.media.SoundMixer.ctx.createGainNode() : flash.media.SoundMixer.ctx.createGain();
			flash.media.SoundMixer.masterGain.gain.value = 1;
			flash.media.SoundMixer.masterGain.connect(flash.media.SoundMixer.ctx.destination);
		}
		var audioTest = null;
		if (!flash.media.SoundMixer.noAudio) {
			audioTest = new Audio();
			flash.media.SoundMixer.codecs = {mp3:!!audioTest.canPlayType("audio\/mpeg;").replace(/^no$/, ""), opus:!!audioTest.canPlayType("audio\/ogg; codecs=\"opus\"").replace(/^no$/, ""), ogg:!!audioTest.canPlayType("audio\/ogg; codecs=\"vorbis\"").replace(/^no$/, ""), wav:!!audioTest.canPlayType("audio\/wav; codecs=\"1\"").replace(/^no$/, ""), m4a:!!(audioTest.canPlayType("audio\/x-m4a;") || audioTest.canPlayType("audio\/aac;")).replace(/^no$/, ""), webm:!!audioTest.canPlayType("audio\/webm; codecs=\"vorbis\"").replace(/^no$/, "")};
		}
		flash.media.SoundMixer.soundTransformInstance = new flash.media.SoundTransform(1, 0);
	}
	return flash.media.SoundMixer.soundTransformInstance;
};

flash.media.SoundMixer.getGainNode = function() {
	var node = (typeof(flash.media.SoundMixer.ctx.createGain) === "undefined") ? flash.media.SoundMixer.ctx.createGainNode() : flash.media.SoundMixer.ctx.createGain();
	return node;
};


flash.media.SoundMixer.className = "flash.media.SoundMixer";

flash.media.SoundMixer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundTransform');
	return p;
};

flash.media.SoundMixer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundMixer.injectionPoints = function(t) {
	return [];
};
