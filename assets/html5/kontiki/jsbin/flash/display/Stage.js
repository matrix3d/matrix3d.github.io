/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Stage = function() {
	this.stageWidth = 0;
	this.stageHeight = 0;
	this._stage3Ds = null;
	flash.display.DisplayObjectContainer.call(this);
	this.addEventListener("enterFrame", $createStaticDelegate(this, this.enterFrame), false, 0, false);
};

flash.display.Stage.prototype.enterFrame = function(e) {
	var c = flash.utils.FlashTimingEngine.root.get_graphics().getCanvas();
	c.clearRect(0, 0, 1000, 1000);
	flash.utils.FlashTimingEngine.root.updateGraphics();
};

flash.display.Stage.prototype.get_stage3Ds = function() {
	if (!this._stage3Ds) {
		this._stage3Ds = [];
		this._stage3Ds.push(new flash.display.Stage3D());
	}
	return this._stage3Ds;
};

Object.defineProperty(flash.display.Stage.prototype, 'stage3Ds', {
  get: function() { return this.get_stage3Ds(); },
  set: function(value) { return this.set_stage3Ds(value); }
});

$inherit(flash.display.Stage, flash.display.DisplayObjectContainer);

flash.display.Stage.className = "flash.display.Stage";

flash.display.Stage.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Stage3D');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.events.Event');
	return p;
};

flash.display.Stage.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Stage.injectionPoints = function(t) {
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

