/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Point = function(x, y) {
	this.x = x;
	this.y = y;
};

flash.geom.Point.interpolate = function(pt1, pt2, f) {
	var xDis = (pt2.x - pt1.x);
	var yDis = (pt2.y - pt1.y);
	return new flash.geom.Point(pt1.x + (xDis * f), pt1.y + (xDis * f));
};

flash.geom.Point.distance = function(pt1, pt2) {
	var a = pt1.x - pt2.x;
	var b = pt1.y - pt2.y;
	return Math.sqrt(a * a + b * b);
};

flash.geom.Point.prototype.clone = function() {
	return new flash.geom.Point(this.x, this.y);
};

flash.geom.Point.prototype.normalize = function(thickness) {
};

flash.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

flash.geom.Point.prototype.add = function(v) {
	return new flash.geom.Point(this.x + v.x, this.y + v.y);
};

flash.geom.Point.prototype.subtract = function(v) {
	return new flash.geom.Point(this.x - v.x, this.y - v.y);
};

flash.geom.Point.prototype.equals = function(toCompare) {
	return (this.x == toCompare.x && this.y == toCompare.y);
};

flash.geom.Point.prototype.toString = function() {
	return "Point";
};

flash.geom.Point.prototype.setTo = function(xa, ya) {
	this.x = xa;
	this.y = ya;
};

Object.defineProperty(flash.geom.Point.prototype, 'length', {
  get: function() { return this.get_length(); },
  set: function(value) { return this.set_length(value); }
});

flash.geom.Point.className = "flash.geom.Point";

flash.geom.Point.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Point.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Point.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

