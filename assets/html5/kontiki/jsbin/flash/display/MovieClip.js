/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.MovieClip = function() {
this.currentFrame = 0;
flash.display.Sprite.call(this);
};

flash.display.MovieClip.prototype.gotoAndPlay = function(frame, scene) {
};

flash.display.MovieClip.prototype.gotoAndStop = function(frame, scene) {
};

flash.display.MovieClip.prototype.play = function() {
};

flash.display.MovieClip.prototype.stop = function() {
};

flash.display.MovieClip.prototype.nextFrame = function() {
};


$inherit(flash.display.MovieClip, flash.display.Sprite);

flash.display.MovieClip.className = "flash.display.MovieClip";

flash.display.MovieClip.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.MovieClip.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.MovieClip.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

