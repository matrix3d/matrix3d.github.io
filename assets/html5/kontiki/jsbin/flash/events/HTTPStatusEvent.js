/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.HTTPStatusEvent = function(type, bubbles, cancelable, status) {
	this.status = status;
};

flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";


flash.events.HTTPStatusEvent.className = "flash.events.HTTPStatusEvent";

flash.events.HTTPStatusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.HTTPStatusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.HTTPStatusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'status', t:'int'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

