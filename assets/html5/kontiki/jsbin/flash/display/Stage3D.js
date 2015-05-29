/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Stage3D = function() {
	this._context3D = null;
	this._x = 0;
	this._y = 0;
	flash.events.EventDispatcher.call(this);
};

flash.display.Stage3D.prototype.get_context3D = function() {
	return this._context3D;
};

flash.display.Stage3D.prototype.get_x = function() {
	return this._x;
};

flash.display.Stage3D.prototype.set_x = function(value) {
	this._x = value;
};

flash.display.Stage3D.prototype.get_y = function() {
	return this._y;
};

flash.display.Stage3D.prototype.set_y = function(value) {
	this._y = value;
};

flash.display.Stage3D.prototype.requestContext3D = function(context3DRenderMode, profile) {
	trace("Stage3D");
	var canvas = document.getElementById("stage3d");
	try {
		var context = canvas.getContext("webgl", {alpha:false}) || canvas.getContext("experimental-webgl", {alpha:false});
	} catch (error) {
	}
	if (context) {
		this._context3D = new flash.display3D.Context3D();
		this._context3D.canvas = canvas;
		flash.utils.FlashTimingEngine.setupStageInteractionEvents(canvas);
		this._context3D.webglContext = context;
		document.body.appendChild(canvas);
		setTimeout($createStaticDelegate(this, this.sendCreateEvent), 10);
	} else {
		this.dispatchEvent(new flash.events.ErrorEvent("error", false, false, "No Context Available", 0));
	}
};

flash.display.Stage3D.prototype.sendCreateEvent = function() {
	this.dispatchEvent(new flash.events.Event("context3DCreate", false, false));
};

Object.defineProperty(flash.display.Stage3D.prototype, 'context3D', {
  get: function() { return this.get_context3D(); },
  set: function(value) { return this.set_context3D(value); }
});
Object.defineProperty(flash.display.Stage3D.prototype, 'x', {
  get: function() { return this.get_x(); },
  set: function(value) { return this.set_x(value); }
});
Object.defineProperty(flash.display.Stage3D.prototype, 'y', {
  get: function() { return this.get_y(); },
  set: function(value) { return this.set_y(value); }
});

$inherit(flash.display.Stage3D, flash.events.EventDispatcher);

flash.display.Stage3D.className = "flash.display.Stage3D";

flash.display.Stage3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.display3D.Context3D');
	p.push('flash.events.ErrorEvent');
	p.push('flash.events.Event');
	return p;
};

flash.display.Stage3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Stage3D.injectionPoints = function(t) {
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

