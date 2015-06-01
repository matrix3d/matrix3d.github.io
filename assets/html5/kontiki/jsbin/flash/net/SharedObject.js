/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.SharedObject = function(target) {
	this.data = {};
	this.client = null;
	flash.events.EventDispatcher.call(this, target);
};

flash.net.SharedObject.prototype.flush = function(minDiskSpace) {
	return "flushed";
};


$inherit(flash.net.SharedObject, flash.events.EventDispatcher);

flash.net.SharedObject.className = "flash.net.SharedObject";

flash.net.SharedObject.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.SharedObject.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.SharedObject.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
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

