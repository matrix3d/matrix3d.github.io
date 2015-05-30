/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.NetStatusEvent = function(type, bubbles, cancelable) {
	this.info = {};
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.NetStatusEvent.NET_STATUS = "netStatus";


$inherit(flash.events.NetStatusEvent, flash.events.Event);

flash.events.NetStatusEvent.className = "flash.events.NetStatusEvent";

flash.events.NetStatusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.NetStatusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.NetStatusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

