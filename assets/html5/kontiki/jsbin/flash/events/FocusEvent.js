/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.FocusEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.FocusEvent.FOCUS_IN = "focusIn";

flash.events.FocusEvent.FOCUS_OUT = "focusOut";


$inherit(flash.events.FocusEvent, flash.events.Event);

flash.events.FocusEvent.className = "flash.events.FocusEvent";

flash.events.FocusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.FocusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.FocusEvent.injectionPoints = function(t) {
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

