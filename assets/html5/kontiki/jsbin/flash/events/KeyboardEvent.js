/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.KeyboardEvent = function(type, bubbles, cancelable, charCodeValue, keyCodeValue, keyLocationValue, ctrlKeyValue, altKeyValue, shiftKeyValue, controlKeyValue, commandKeyValue) {
	this.keyCode = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.keyCode = keyCodeValue;
};

flash.events.KeyboardEvent.KEY_UP = "keyUp";

flash.events.KeyboardEvent.KEY_DOWN = "keyDown";


$inherit(flash.events.KeyboardEvent, flash.events.Event);

flash.events.KeyboardEvent.className = "flash.events.KeyboardEvent";

flash.events.KeyboardEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.KeyboardEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.KeyboardEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'charCodeValue', t:'uint'});
			p.push({n:'keyCodeValue', t:'uint'});
			p.push({n:'keyLocationValue', t:'uint'});
			p.push({n:'ctrlKeyValue', t:'Boolean'});
			p.push({n:'altKeyValue', t:'Boolean'});
			p.push({n:'shiftKeyValue', t:'Boolean'});
			p.push({n:'controlKeyValue', t:'Boolean'});
			p.push({n:'commandKeyValue', t:'Boolean'});
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

