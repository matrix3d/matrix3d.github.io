/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Shape = function() {
this._graphics = null;
flash.display.DisplayObject.call(this);
};

flash.display.Shape.prototype.get_graphics = function() {
	if (!this._graphics)
		this._graphics = new flash.display.Graphics();
	return this._graphics;
};

Object.defineProperty(flash.display.Shape.prototype, 'graphics', {
  get: function() { return this.get_graphics(); },
  set: function(value) { return this.set_graphics(value); }
});

$inherit(flash.display.Shape, flash.display.DisplayObject);

flash.display.Shape.className = "flash.display.Shape";

flash.display.Shape.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Shape.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shape.injectionPoints = function(t) {
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

