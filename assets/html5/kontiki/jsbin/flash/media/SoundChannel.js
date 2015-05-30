/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundChannel = function() {
	this.position = 0;
	this.soundTransform = null;
	flash.events.EventDispatcher.call(this);
	this.soundTransform = new flash.media.SoundTransform(1, 0);
	flash.media.SoundMixer.get_soundTransform().addTransform(this.soundTransform);
};

flash.media.SoundChannel.prototype.stop = function() {
	if (this.soundTransform.buffer)
		this.soundTransform.buffer.stop(0);
};


$inherit(flash.media.SoundChannel, flash.events.EventDispatcher);

flash.media.SoundChannel.className = "flash.media.SoundChannel";

flash.media.SoundChannel.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundMixer');
	p.push('flash.media.SoundTransform');
	return p;
};

flash.media.SoundChannel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundChannel.injectionPoints = function(t) {
	var p;
	switch (t) {
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

