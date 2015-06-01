/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ContextMenuEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.ContextMenuEvent.MENU_ITEM_SELECT = "menuItemSelect";


$inherit(flash.events.ContextMenuEvent, flash.events.Event);

flash.events.ContextMenuEvent.className = "flash.events.ContextMenuEvent";

flash.events.ContextMenuEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ContextMenuEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ContextMenuEvent.injectionPoints = function(t) {
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

