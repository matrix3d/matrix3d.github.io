/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.NetStream = function(target) {
	this.inBufferSeek = false;
	this.bytesLoaded = 0;
	this.client = null;
	this.soundTransform = new flash.media.SoundTransform(1, 0);
	this.time = 0;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this, target);
};

flash.net.NetStream.prototype.attach = function(connection) {
};

flash.net.NetStream.prototype.play = function(args) {
};

flash.net.NetStream.prototype.seek = function(offset) {
};

flash.net.NetStream.prototype.close = function() {
};


$inherit(flash.net.NetStream, flash.events.EventDispatcher);

flash.net.NetStream.className = "flash.net.NetStream";

flash.net.NetStream.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetStream.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundTransform');
	return p;
};

flash.net.NetStream.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
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

