/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TouchEvent = function(type, bubbles, cancelable, touchPointID, isPrimaryTouchPoint, localX, localY, sizeX, sizeY, pressure, relatedObject, ctrlKey, altKey, shiftKey, commandKey, controlKey, timestamp, touchIntent, samples, isTouchPointCanceled) {
	this.stageY = 0;
	this.stageX = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.pressure = pressure;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.touchPointID = touchPointID;
	this.isPrimaryTouchPoint = isPrimaryTouchPoint;
};

flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";

flash.events.TouchEvent.TOUCH_END = "touchEnd";

flash.events.TouchEvent.TOUCH_MOVE = "touchMove";


$inherit(flash.events.TouchEvent, flash.events.Event);

flash.events.TouchEvent.className = "flash.events.TouchEvent";

flash.events.TouchEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TouchEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TouchEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'touchPointID', t:'int'});
			p.push({n:'isPrimaryTouchPoint', t:'Boolean'});
			p.push({n:'localX', t:'Number'});
			p.push({n:'localY', t:'Number'});
			p.push({n:'sizeX', t:'Number'});
			p.push({n:'sizeY', t:'Number'});
			p.push({n:'pressure', t:'Number'});
			p.push({n:'relatedObject', t:'flash.display.InteractiveObject'});
			p.push({n:'ctrlKey', t:'Boolean'});
			p.push({n:'altKey', t:'Boolean'});
			p.push({n:'shiftKey', t:'Boolean'});
			p.push({n:'commandKey', t:'Boolean'});
			p.push({n:'controlKey', t:'Boolean'});
			p.push({n:'timestamp', t:'Number'});
			p.push({n:'touchIntent', t:'String'});
			p.push({n:'samples', t:'flash.utils.ByteArray'});
			p.push({n:'isTouchPointCanceled', t:'Boolean'});
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

