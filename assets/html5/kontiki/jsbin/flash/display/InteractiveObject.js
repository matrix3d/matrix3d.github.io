/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.InteractiveObject = function() {
this.mouseEnabled = false;
this.tabEnabled = false;
flash.display.DisplayObject.call(this);
};


$inherit(flash.display.InteractiveObject, flash.display.DisplayObject);

flash.display.InteractiveObject.className = "flash.display.InteractiveObject";

flash.display.InteractiveObject.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.InteractiveObject.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.InteractiveObject.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

