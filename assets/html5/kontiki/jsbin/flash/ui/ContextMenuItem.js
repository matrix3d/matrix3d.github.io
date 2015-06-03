/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.ContextMenuItem = function(caption, separatorBefore, enabled, visible) {
	flash.events.EventDispatcher.call(this);
};


$inherit(flash.ui.ContextMenuItem, flash.events.EventDispatcher);

flash.ui.ContextMenuItem.className = "flash.ui.ContextMenuItem";

flash.ui.ContextMenuItem.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenuItem.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenuItem.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'caption', t:'String'});
			p.push({n:'separatorBefore', t:'Boolean'});
			p.push({n:'enabled', t:'Boolean'});
			p.push({n:'visible', t:'Boolean'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

