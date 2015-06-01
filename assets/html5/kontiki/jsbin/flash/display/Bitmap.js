/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Bitmap = function(bitmapData, pixelSnapping, smoothing) {
	this.blendMode = "";
	this.pixelsnapping = "";
	this._g = null;
	this.bitmapData = bitmapData;
	flash.display.DisplayObject.call(this);
};

flash.display.Bitmap.prototype.updateGraphics = function() {
	flash.display.DisplayObject.prototype.updateGraphics.call(this);
	if (this.bitmapData) {
		this.get_g().updateGraphics();
	}
};

flash.display.Bitmap.prototype.get_g = function() {
	if (this._g == null) {
		this._g = new flash.display.Graphics();
		this._g.sprite = this;
		this._g.beginBitmapFill(this.bitmapData, null, false, this.smoothing);
		this._g.drawRect(0, 0, this.bitmapData.width, this.bitmapData.height);
	}
	return this._g;
};

Object.defineProperty(flash.display.Bitmap.prototype, 'g', {
  get: function() { return this.get_g(); },
  set: function(value) { return this.set_g(value); }
});

$inherit(flash.display.Bitmap, flash.display.DisplayObject);

flash.display.Bitmap.className = "flash.display.Bitmap";

flash.display.Bitmap.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.BitmapData');
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

