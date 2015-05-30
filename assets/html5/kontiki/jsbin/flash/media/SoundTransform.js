/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundTransform = function(vol, panning) {
	this.soundID = null;
	this._volume = 0;
	this.transforms = null;
	this.buffer = null;
	this.pan = null;
	this.soundID = "SoundTransform" + Math.floor(Math.random() * 0xffff);
};

flash.media.SoundTransform.prototype.get_volume = function() {
	return this._volume;
};

flash.media.SoundTransform.prototype.set_volume = function(value) {
	this._volume = value;
};

flash.media.SoundTransform.prototype.addTransform = function(transform) {
	if (!this.transforms)
		this.transforms = new flash.utils.Dictionary(false);
	this.transforms[transform] = transform;
};

flash.media.SoundTransform.prototype.removeTransform = function(transform) {
	if (!this.transforms)
		return;
	this.transforms[transform] = null;
	delete this.transforms[transform];
};

flash.media.SoundTransform.prototype.toString = function() {
	return this.soundID;
};

Object.defineProperty(flash.media.SoundTransform.prototype, 'volume', {
  get: function() { return this.get_volume(); },
  set: function(value) { return this.set_volume(value); }
});

flash.media.SoundTransform.className = "flash.media.SoundTransform";

flash.media.SoundTransform.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.media.SoundTransform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundTransform.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'vol', t:'Number'});
			p.push({n:'panning', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

