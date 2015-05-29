/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ActivityEvent = function(type, bubbles, cancelable, activating) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};


$inherit(flash.events.ActivityEvent, flash.events.Event);

flash.events.ActivityEvent.className = "flash.events.ActivityEvent";

flash.events.ActivityEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ActivityEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ActivityEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'activating', t:'Boolean'});
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

