/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.DisplayObject = function() {
	this.domElement = null;
	this.loaderInfo = new flash.display.LoaderInfo();
	this._parent2 = null;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rect = new flash.geom.Rectangle(0, 0, 0, 0);
	this.transform = null;
	this._visible = true;
	this.alpha = 1.0;
	this.root = null;
	this.cacheAsBitmap = false;
	this._width = 0;
	this.mask = null;
	this._rotation = 0;
	this.filters = [];
	this._height = 0;
	this._mouseY = 0;
	this.p = new flash.geom.Point(0, 0);
	this._mouseX = 0;
	this.name = "";
	this._x = 0;
	this._y = 0;
	flash.events.EventDispatcher.call(this);
	this.name = "Instance" + flash.display.DisplayObject.instanceCounter++;
	this.transform = new flash.geom.Transform();
	this.transform.target = this;
};

flash.display.DisplayObject.prototype.get_visible = function() {
	return this._visible;
};

flash.display.DisplayObject.prototype.set_visible = function(value) {
	this._visible = value;
};

flash.display.DisplayObject.instanceCounter = 0;

flash.display.DisplayObject.prototype.get_mouseY = function() {
	return this._mouseY;
};

flash.display.DisplayObject.prototype.set_mouseY = function(value) {
	this._mouseY = value;
};

flash.display.DisplayObject.prototype.get_mouseX = function() {
	return this._mouseX;
};

flash.display.DisplayObject.prototype.set_mouseX = function(value) {
	this._mouseX = value;
};

flash.display.DisplayObject.prototype.get_parent = function() {
	return this._parent2;
};

flash.display.DisplayObject.prototype.get_rotation = function() {
	return this._rotation;
};

flash.display.DisplayObject.prototype.set_rotation = function(value) {
	this._rotation = value;
};

flash.display.DisplayObject.prototype.get_stage = function() {
	return flash.utils.FlashTimingEngine.stageInstance;
};

flash.display.DisplayObject.prototype.get_width = function() {
	return this._width;
};

flash.display.DisplayObject.prototype.set_width = function(value) {
	this._width = value;
};

flash.display.DisplayObject.prototype.get_height = function() {
	return this._height;
};

flash.display.DisplayObject.prototype.set_height = function(value) {
	this._height = value;
};

flash.display.DisplayObject.prototype.get_x = function() {
	return this._x;
};

flash.display.DisplayObject.prototype.set_x = function(value) {
	this._x = value;
};

flash.display.DisplayObject.prototype.get_y = function() {
	return this._y;
};

flash.display.DisplayObject.prototype.set_y = function(value) {
	this._y = value;
};

flash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getRect() $$$$");
	return new flash.geom.Rectangle(0, 0, 10, 10);
};

flash.display.DisplayObject.prototype.localToGlobal = function(point) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.localToGlobal() $$$$");
	return this.p;
};

flash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getBounds() $$$$");
	return this.rect;
};

flash.display.DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.hitTestPoint() $$$$");
	return true;
};

flash.display.DisplayObject.prototype.toString = function() {
	return this.name;
};

flash.display.DisplayObject.prototype.updateGraphics = function() {
	this.transform.matrix.identity();
	this.transform.matrix.scale(this.scaleX, this.scaleY);
	this.transform.matrix.rotate(this.get_rotation() * 3.141592653589793 / 180);
	this.transform.matrix.translate(this.get_x(), this.get_y());
	if (this.get_parent()) {
		this.transform.worldMatrix.copyFrom(this.get_parent().transform.worldMatrix);
		this.transform.worldMatrix.concat(this.transform.matrix);
	} else {
		this.transform.worldMatrix.copyFrom(this.transform.matrix);
	}
};

Object.defineProperty(flash.display.DisplayObject.prototype, 'mouseX', {
  get: function() { return this.get_mouseX(); },
  set: function(value) { return this.set_mouseX(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'parent', {
  get: function() { return this.get_parent(); },
  set: function(value) { return this.set_parent(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'visible', {
  get: function() { return this.get_visible(); },
  set: function(value) { return this.set_visible(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'stage', {
  get: function() { return this.get_stage(); },
  set: function(value) { return this.set_stage(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'mouseY', {
  get: function() { return this.get_mouseY(); },
  set: function(value) { return this.set_mouseY(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'rotation', {
  get: function() { return this.get_rotation(); },
  set: function(value) { return this.set_rotation(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'width', {
  get: function() { return this.get_width(); },
  set: function(value) { return this.set_width(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'x', {
  get: function() { return this.get_x(); },
  set: function(value) { return this.set_x(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'y', {
  get: function() { return this.get_y(); },
  set: function(value) { return this.set_y(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'height', {
  get: function() { return this.get_height(); },
  set: function(value) { return this.set_height(value); }
});

$inherit(flash.display.DisplayObject, flash.events.EventDispatcher);

flash.display.DisplayObject.className = "flash.display.DisplayObject";

flash.display.DisplayObject.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Transform');
	p.push('flash.geom.Rectangle');
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display.DisplayObject.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.LoaderInfo');
	p.push('flash.geom.Rectangle');
	p.push('flash.geom.Point');
	return p;
};

flash.display.DisplayObject.injectionPoints = function(t) {
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

