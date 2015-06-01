/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.Video = function() {
flash.display.DisplayObject.call(this);
};

flash.media.Video.prototype.attachNetStream = function(netStream) {
};


$inherit(flash.media.Video, flash.display.DisplayObject);

flash.media.Video.className = "flash.media.Video";

flash.media.Video.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.media.Video.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.Video.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

