/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Bitmap = function(bitmapData, pixelSnapping, smoothing) {
	this._ctx = null;
	this.blendMode = "";
	this.pixelsnapping = "";
	this.bitmapData = bitmapData;
	flash.display.DisplayObject.call(this);
};

flash.display.Bitmap._ctx;

flash.display.Bitmap.prototype.updateGraphics = function() {
	flash.display.DisplayObject.prototype.updateGraphics.call(this);
	if (this.bitmapData) {
		var m = this.transform.worldMatrix;
		flash.display.Bitmap.get_ctx().setTransform(m.a, m.b, m.c, m.d, m.tx, m.ty);
	}
};

flash.display.Bitmap.get_ctx = function() {
	if (flash.display.Bitmap._ctx == null) {
		var g = new flash.display.Graphics();
		flash.display.Bitmap._ctx = g.getCanvas();
	}
	return flash.display.Bitmap._ctx;
};


$inherit(flash.display.Bitmap, flash.display.DisplayObject);

flash.display.Bitmap.className = "flash.display.Bitmap";

flash.display.Bitmap.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Matrix');
	p.push('flash.display.Graphics');
	return p;
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

