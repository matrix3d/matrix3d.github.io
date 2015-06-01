/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.ContextMenu = function() {
	this.customItems = [];
	flash.events.EventDispatcher.call(this);
};

flash.ui.ContextMenu.prototype.hideBuiltInItems = function() {
};


$inherit(flash.ui.ContextMenu, flash.events.EventDispatcher);

flash.ui.ContextMenu.className = "flash.ui.ContextMenu";

flash.ui.ContextMenu.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenu.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenu.injectionPoints = function(t) {
	var p;
	switch (t) {
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

