/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.DisplayObjectContainer = function() {
this.children = [];
this.tabChildren = false;
this.mouseChildren = false;
flash.display.InteractiveObject.call(this);
};

flash.display.DisplayObjectContainer.prototype.get_numChildren = function() {
	return this.children.length;
};

flash.display.DisplayObjectContainer.prototype.addChild = function(child) {
	child._parent2 = this;
	this.addChildAt(child, this.children.length);
	return child;
};

flash.display.DisplayObjectContainer.prototype.addChildAt = function(child, index) {
	if (!child.root)
		child.root = flash.utils.FlashTimingEngine.root;
	if (child.get_parent())
		child.get_parent().removeChild(child);
	child._parent2 = this;
	this.children.splice(index, 0, child);
	if (child.domElement) {
		var element = (!this.domElement || !this.get_parent()) ? document.body : this.domElement;
		element.appendChild(child.domElement);
	}
	return child;
};

flash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	return this.children[index];
};

flash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] == child)
			return i;
	}
	return -1;
};

flash.display.DisplayObjectContainer.prototype.getChildByName = function(name) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.getChildByName() $$$$");
	return null;
};

flash.display.DisplayObjectContainer.prototype.setChildIndex = function(child, index) {
	this.removeChild(child);
	this.addChildAt(child, index);
};

flash.display.DisplayObjectContainer.prototype.swapChildren = function(child1, child2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildren() $$$$");
};

flash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(index1, index2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildrenAt() $$$$");
};

flash.display.DisplayObjectContainer.prototype.contains = function(child) {
	return this.getChildIndex(child) > -1;
};

flash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	child._parent2 = null;
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] == child) {
			return this.removeChildAt(i);
		}
	}
	return child;
};

flash.display.DisplayObjectContainer.prototype.removeChildAt = function(index) {
	var c = this.children[index];
	c._parent2 = null;
	this.children.splice(index, 1);
	return c;
};

flash.display.DisplayObjectContainer.prototype.bubbleEvent = function(event) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] instanceof flash.events.EventDispatcher)
			this.children[i].dispatchEvent(event);
	}
};

flash.display.DisplayObjectContainer.prototype.updateGraphics = function() {
	flash.display.InteractiveObject.prototype.updateGraphics.call(this);
	var $n0;
	for (var $v0 in ($n0 = this.children)) {
		var c = $n0[$v0];
		c.updateGraphics()
	}
};

Object.defineProperty(flash.display.DisplayObjectContainer.prototype, 'numChildren', {
  get: function() { return this.get_numChildren(); },
  set: function(value) { return this.set_numChildren(value); }
});

$inherit(flash.display.DisplayObjectContainer, flash.display.InteractiveObject);

flash.display.DisplayObjectContainer.className = "flash.display.DisplayObjectContainer";

flash.display.DisplayObjectContainer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.DisplayObject');
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display.DisplayObjectContainer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.DisplayObjectContainer.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

