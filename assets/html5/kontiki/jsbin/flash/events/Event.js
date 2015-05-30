/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.Event = function(type, bubbles, cancelable) {
	this._bubbles = null;
	this._cancelable = null;
	this._type = "";
	this.target = null;
	this.currentTarget = null;
	this._type = type;
	this._bubbles = bubbles;
	this._cancelable = cancelable;
};

flash.events.Event.ACTIVATE = "activate";

flash.events.Event.ADDED_TO_STAGE = "addedToStage";

flash.events.Event.CLOSE = "close";

flash.events.Event.OPEN = "open";

flash.events.Event.COMPLETE = "complete";

flash.events.Event.CONNECT = "connect";

flash.events.Event.CHANGE = "change";

flash.events.Event.ADDED = "added";

flash.events.Event.ENTER_FRAME = "enterFrame";

flash.events.Event.FULLSCREEN = "fullScreen";

flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";

flash.events.Event.REMOVED = "removed";

flash.events.Event.RENDER = "render";

flash.events.Event.RESIZE = "resize";

flash.events.Event.MOUSE_LEAVE = "mouseLeave";

flash.events.Event.SOUND_COMPLETE = "soundComplete";

flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";

flash.events.Event.prototype.get_type = function() {
	return this._type;
};

flash.events.Event.prototype.get_bubbles = function() {
	return this._bubbles;
};

flash.events.Event.prototype.get_cancelable = function() {
	return this._cancelable;
};

flash.events.Event.prototype.clone = function() {
	return new flash.events.Event(this.get_type(), false, false);
};

flash.events.Event.prototype.preventDefault = function() {
};

flash.events.Event.prototype.toString = function() {
	return "";
};

Object.defineProperty(flash.events.Event.prototype, 'cancelable', {
  get: function() { return this.get_cancelable(); },
  set: function(value) { return this.set_cancelable(value); }
});
Object.defineProperty(flash.events.Event.prototype, 'bubbles', {
  get: function() { return this.get_bubbles(); },
  set: function(value) { return this.set_bubbles(value); }
});
Object.defineProperty(flash.events.Event.prototype, 'type', {
  get: function() { return this.get_type(); },
  set: function(value) { return this.set_type(value); }
});

flash.events.Event.className = "flash.events.Event";

flash.events.Event.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.Event.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.Event.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

