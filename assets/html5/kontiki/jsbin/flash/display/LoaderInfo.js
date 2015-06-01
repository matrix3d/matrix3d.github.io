/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.LoaderInfo = function() {
	this.url = "redshell";
	this.parameters = {};
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this);
};


$inherit(flash.display.LoaderInfo, flash.events.EventDispatcher);

flash.display.LoaderInfo.className = "flash.display.LoaderInfo";

flash.display.LoaderInfo.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.LoaderInfo.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.LoaderInfo.injectionPoints = function(t) {
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

