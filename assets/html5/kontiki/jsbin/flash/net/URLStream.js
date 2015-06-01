/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLStream = function() {
	this.connected = true;
	flash.events.EventDispatcher.call(this);
};

flash.net.URLStream.prototype.load = function(request) {
};

flash.net.URLStream.prototype.close = function() {
};


$inherit(flash.net.URLStream, flash.events.EventDispatcher);

flash.net.URLStream.className = "flash.net.URLStream";

flash.net.URLStream.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLStream.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLStream.injectionPoints = function(t) {
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

