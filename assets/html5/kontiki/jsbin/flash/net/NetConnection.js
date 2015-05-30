/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.NetConnection = function(target) {
	flash.events.EventDispatcher.call(this, target);
};

flash.net.NetConnection.prototype.connect = function(command, args) {
};

flash.net.NetConnection.prototype.close = function() {
};


$inherit(flash.net.NetConnection, flash.events.EventDispatcher);

flash.net.NetConnection.className = "flash.net.NetConnection";

flash.net.NetConnection.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetConnection.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetConnection.injectionPoints = function(t) {
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

