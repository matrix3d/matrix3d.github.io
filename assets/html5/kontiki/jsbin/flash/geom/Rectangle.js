/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Rectangle = function(x, y, width, height) {
	this._right = 0;
	this.sizePoint = new flash.geom.Point(0, 0);
	this.topLeftPoint = new flash.geom.Point(0, 0);
	this._bottom = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

flash.geom.Rectangle.prototype.clone = function() {
	return new flash.geom.Rectangle(this.x, this.y, this.width, this.height);
};

flash.geom.Rectangle.prototype.copyFrom = function(sourceRect) {
	this.x = sourceRect.x;
	this.y = sourceRect.y;
	this.width = sourceRect.width;
	this.height = sourceRect.height;
};

flash.geom.Rectangle.prototype.union = function(toUnion) {
	if (toUnion.width == 0 || toUnion.height == 0)
		return this;
	var leftX = Math.min(this.x, toUnion.x);
	var leftY = Math.min(this.y, toUnion.y);
	var newW = Math.max(this.x + this.width, toUnion.x + toUnion.width) - leftX;
	var newH = Math.max(this.y + this.height, toUnion.y + toUnion.height) - leftY;
	return new flash.geom.Rectangle(leftX, leftY, newW, newH);
};

flash.geom.Rectangle.prototype.inflate = function(dx, dy) {
	this.x -= dx;
	this.width += 2 * dx;
	this.y -= dy;
	this.height += 2 * dy;
};

flash.geom.Rectangle.prototype.get_left = function() {
	return this.x;
};

flash.geom.Rectangle.prototype.set_left = function(value) {
	this.x = value;
};

flash.geom.Rectangle.prototype.get_top = function() {
	return this.y;
};

flash.geom.Rectangle.prototype.set_top = function(value) {
	this.y = value;
};

flash.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
};

flash.geom.Rectangle.prototype.set_right = function(value) {
	this.width = value - this.x;
};

flash.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
};

flash.geom.Rectangle.prototype.set_bottom = function(value) {
	this.height = value - this.y;
};

flash.geom.Rectangle.prototype.get_topLeft = function() {
	this.topLeftPoint.x = this.x;
	this.topLeftPoint.y = this.y;
	return this.topLeftPoint;
};

flash.geom.Rectangle.prototype.set_topLeft = function(value) {
	this.x = value.x;
	this.y = value.y;
};

flash.geom.Rectangle.prototype.contains = function(cx, cy) {
	return (cx >= this.x && cx <= this.get_right() && cy >= this.y && cy <= this.get_bottom());
};

flash.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x, point.y);
};

flash.geom.Rectangle.prototype.get_size = function() {
	this.sizePoint.x = this.width;
	this.sizePoint.y = this.height;
	return this.sizePoint;
};

flash.geom.Rectangle.prototype.set_size = function(value) {
	this.width = value.x;
	this.height = value.y;
};

flash.geom.Rectangle.prototype.offset = function(dx, dy) {
	this.x += dx;
	this.y += dy;
};

flash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	return !(toIntersect.get_left() > this.get_right() || toIntersect.get_right() < this.get_left() || toIntersect.get_top() > this.get_bottom() || toIntersect.get_bottom() < this.get_top());
};

flash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var rect = new flash.geom.Rectangle(0, 0, 0, 0);
	if (this.intersects(toIntersect)) {
		if (toIntersect.get_left() <= this.get_right()) {
			rect.x = toIntersect.get_left();
			rect.width = this.get_right() - rect.x;
		} else {
			rect.x = this.get_left();
			rect.width = toIntersect.get_right() - rect.x;
		}
		rect.y = (toIntersect.get_top() < this.get_top()) ? this.get_top() : toIntersect.get_top();
		rect.height = (toIntersect.get_bottom() < this.get_bottom()) ? toIntersect.get_bottom() : this.get_bottom();
		rect.height = rect.height - rect.y;
	}
	return rect;
};

flash.geom.Rectangle.prototype.isEmpty = function() {
	return this.width <= 0 || this.height <= 0;
};

flash.geom.Rectangle.prototype.setEmpty = function() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
};

flash.geom.Rectangle.prototype.setTo = function(xa, ya, widtha, heighta) {
	this.x = xa;
	this.y = ya;
	this.width = widtha;
	this.height = heighta;
};

Object.defineProperty(flash.geom.Rectangle.prototype, 'top', {
  get: function() { return this.get_top(); },
  set: function(value) { return this.set_top(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'size', {
  get: function() { return this.get_size(); },
  set: function(value) { return this.set_size(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'left', {
  get: function() { return this.get_left(); },
  set: function(value) { return this.set_left(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'bottom', {
  get: function() { return this.get_bottom(); },
  set: function(value) { return this.set_bottom(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'topLeft', {
  get: function() { return this.get_topLeft(); },
  set: function(value) { return this.set_topLeft(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'right', {
  get: function() { return this.get_right(); },
  set: function(value) { return this.set_right(value); }
});

flash.geom.Rectangle.className = "flash.geom.Rectangle";

flash.geom.Rectangle.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Point');
	return p;
};

flash.geom.Rectangle.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Point');
	return p;
};

flash.geom.Rectangle.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			p.push({n:'width', t:'Number'});
			p.push({n:'height', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

