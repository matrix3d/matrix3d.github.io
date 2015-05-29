/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Bitmap = function(bitmapData, pixelSnapping, smoothing) {
	this.pixelsnapping = "";
	this.blendMode = "";
	this.bitmapData = bitmapData;
	flash.display.DisplayObject.call(this);
};


$inherit(flash.display.Bitmap, flash.display.DisplayObject);

flash.display.Bitmap.className = "flash.display.Bitmap";

flash.display.Bitmap.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.Bitmap.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Bitmap.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bitmapData', t:'flash.display.BitmapData'});
			p.push({n:'pixelSnapping', t:'String'});
			p.push({n:'smoothing', t:'Boolean'});
			break;
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

