/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ProgressEvent = function(type, bubbles, cancelable, bytesLoaded, bytesTotal) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};

flash.events.ProgressEvent.PROGRESS = "progress";

flash.events.ProgressEvent.SOCKET_DATA = "socketData";


$inherit(flash.events.ProgressEvent, flash.events.Event);

flash.events.ProgressEvent.className = "flash.events.ProgressEvent";

flash.events.ProgressEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ProgressEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ProgressEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'bytesLoaded', t:'Number'});
			p.push({n:'bytesTotal', t:'Number'});
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

