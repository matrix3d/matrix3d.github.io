/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.localX = localX;
	this.localY = localY;
};

flash.events.MouseEvent.CLICK = "click";

flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";

flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";

flash.events.MouseEvent.MOUSE_UP = "mouseUp";

flash.events.MouseEvent.MOUSE_OVER = "mouseOver";

flash.events.MouseEvent.MOUSE_OUT = "mouseOut";

flash.events.MouseEvent.ROLL_OVER = "rollOver";

flash.events.MouseEvent.ROLL_OUT = "rollOut";

flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";

flash.events.MouseEvent.prototype.get_stageX = function() {
	return this.localX;
};

flash.events.MouseEvent.prototype.get_stageY = function() {
	return this.localY;
};

Object.defineProperty(flash.events.MouseEvent.prototype, 'stageY', {
  get: function() { return this.get_stageY(); },
  set: function(value) { return this.set_stageY(value); }
});
Object.defineProperty(flash.events.MouseEvent.prototype, 'stageX', {
  get: function() { return this.get_stageX(); },
  set: function(value) { return this.set_stageX(value); }
});

$inherit(flash.events.MouseEvent, flash.events.Event);

flash.events.MouseEvent.className = "flash.events.MouseEvent";

flash.events.MouseEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.MouseEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.MouseEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'localX', t:'Number'});
			p.push({n:'localY', t:'Number'});
			p.push({n:'relatedObject', t:'flash.display.InteractiveObject'});
			p.push({n:'ctrlKey', t:'Boolean'});
			p.push({n:'altKey', t:'Boolean'});
			p.push({n:'shiftKey', t:'Boolean'});
			p.push({n:'buttonDown', t:'Boolean'});
			p.push({n:'delta', t:'int'});
			p.push({n:'commandKey', t:'Boolean'});
			p.push({n:'controlKey', t:'Boolean'});
			p.push({n:'clickCount', t:'int'});
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

