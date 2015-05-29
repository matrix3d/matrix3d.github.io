/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Sprite = function() {
	this.hitArea = null;
	this.useHandCursor = false;
	this.buttonMode = false;
	this._graphics = null;
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Sprite.prototype.get_graphics = function() {
	if (!this._graphics) {
		this._graphics = new flash.display.Graphics();
		this._graphics.sprite = this;
	}
	return this._graphics;
};

flash.display.Sprite.prototype.updateGraphics = function() {
	flash.display.DisplayObjectContainer.prototype.updateGraphics.call(this);
	this.get_graphics().updateGraphics();
};

Object.defineProperty(flash.display.Sprite.prototype, 'graphics', {
  get: function() { return this.get_graphics(); },
  set: function(value) { return this.set_graphics(value); }
});

$inherit(flash.display.Sprite, flash.display.DisplayObjectContainer);

flash.display.Sprite.className = "flash.display.Sprite";

flash.display.Sprite.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Sprite.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Sprite.injectionPoints = function(t) {
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

