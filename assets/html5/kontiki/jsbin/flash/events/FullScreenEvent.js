/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.FullScreenEvent = function(type, bubbles, cancelable, fullScreen) {
	flash.events.ActivityEvent.call(this, type, bubbles, cancelable, false);
};

flash.events.FullScreenEvent.FULL_SCREEN = "fullScreen";


$inherit(flash.events.FullScreenEvent, flash.events.ActivityEvent);

flash.events.FullScreenEvent.className = "flash.events.FullScreenEvent";

flash.events.FullScreenEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.FullScreenEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.FullScreenEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'fullScreen', t:'Boolean'});
			break;
		case 1:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

