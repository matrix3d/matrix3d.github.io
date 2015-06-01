/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.AsyncErrorEvent = function(type, bubbles, cancelable, text, id) {
	flash.events.ErrorEvent.call(this, type, bubbles, cancelable, text, id);
};

flash.events.AsyncErrorEvent.ASYNC_ERROR = "asyncError";


$inherit(flash.events.AsyncErrorEvent, flash.events.ErrorEvent);

flash.events.AsyncErrorEvent.className = "flash.events.AsyncErrorEvent";

flash.events.AsyncErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.AsyncErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.AsyncErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

