/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Loader = function() {
	this.contentLoaderInfo = null;
	this.content = null;
	this.contentLoaderInfo = new flash.display.LoaderInfo();
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Loader.prototype.close = function() {
};

flash.display.Loader.prototype.load = function(request, context) {
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

