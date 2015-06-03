/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Loader = function() {
	this.image = null;
	this.contentLoaderInfo = null;
	this.content = null;
	this.contentLoaderInfo = new flash.display.LoaderInfo();
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Loader.prototype.close = function() {
};

flash.display.Loader.prototype.load = function(request, context) {
	this.contentLoaderInfo.url = request.url;
	this.image = new Image();
	this.image.addEventListener("load", $createStaticDelegate(this, this.onload));
	this.image.src = request.url;
};

flash.display.Loader.prototype.onload = function(e) {
	var bitmap = new flash.display.Bitmap(new flash.display.BitmapData(0, 9, true, 0), "auto", false);
	bitmap.set_width(this.image.width);
	bitmap.set_height(this.image.height);
	bitmap.bitmapData.image = this.image;
	bitmap.bitmapData.width = this.image.width;
	bitmap.bitmapData.height = this.image.height;
	bitmap.bitmapData.updatePatern();
	this.content = bitmap;
	this.contentLoaderInfo.dispatchEvent(new flash.events.Event("complete", false, false));
};

flash.display.Loader.prototype.loadBytes = function(bytes, context) {
};

flash.display.Loader.prototype.unload = function() {
};

flash.display.Loader.prototype.unloadAndStop = function(gc) {
};


$inherit(flash.display.Loader, flash.display.DisplayObjectContainer);

flash.display.Loader.className = "flash.display.Loader";

flash.display.Loader.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.LoaderInfo');
	p.push('flash.display.Bitmap');
	p.push('flash.display.BitmapData');
	p.push('flash.events.Event');
	return p;
};

flash.display.Loader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Loader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

