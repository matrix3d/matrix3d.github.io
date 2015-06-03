/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.SimpleButton = function() {
	flash.display.DisplayObjectContainer.call(this);
};


$inherit(flash.display.SimpleButton, flash.display.DisplayObjectContainer);

flash.display.SimpleButton.className = "flash.display.SimpleButton";

flash.display.SimpleButton.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.SimpleButton.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.SimpleButton.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

