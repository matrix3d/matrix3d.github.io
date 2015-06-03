/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TextEvent = function(type, bubbles, cancelable, text) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
};

flash.events.TextEvent.LINK = "link";

flash.events.TextEvent.TEXT_INPUT = "textInput";


$inherit(flash.events.TextEvent, flash.events.Event);

flash.events.TextEvent.className = "flash.events.TextEvent";

flash.events.TextEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TextEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TextEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
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

