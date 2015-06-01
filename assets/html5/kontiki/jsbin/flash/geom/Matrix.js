/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Matrix = function(a, b, c, d, tx, ty) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};

flash.geom.Matrix.prototype.identity = function() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
};

flash.geom.Matrix.prototype.setTo = function(aa, ba, ca, da, txa, tya) {
	this.a = aa;
	this.b = ba;
	this.c = ca;
	this.d = da;
	this.tx = txa;
	this.ty = tya;
};

flash.geom.Matrix.prototype.concat = function(m) {
	var aT = this.a;
	var cT = this.c;
	var txT = this.tx;
	this.a = aT * m.a + this.b * m.c;
	this.b = aT * m.b + this.b * m.d;
	this.c = cT * m.a + this.d * m.c;
	this.d = cT * m.b + this.d * m.d;
	this.tx = txT * m.a + this.ty * m.c + m.tx;
	this.ty = txT * m.b + this.ty * m.d + m.ty;
};

flash.geom.Matrix.prototype.copyFrom = function(sourceMatrix) {
	this.a = sourceMatrix.a;
	this.b = sourceMatrix.b;
	this.c = sourceMatrix.c;
	this.d = sourceMatrix.d;
	this.tx = sourceMatrix.tx;
	this.ty = sourceMatrix.ty;
};

flash.geom.Matrix.prototype.invert = function() {
	var b01 = this.d;
	var b11 = -1 * this.c;
	var b21 = this.ty * this.c - this.d * this.tx;
	var det = this.a * b01 + this.b * b11;
	det = 1.0 / det;
	this.a = b01 * det;
	this.b = (-1 * this.b) * det;
	this.c = b11 * det;
	this.d = (1 * this.a) * det;
	this.tx = b21 * det;
	this.ty = (-this.ty * this.a + this.b * this.tx) * det;
};

flash.geom.Matrix.prototype.rotate = function(angle) {
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var m = new flash.geom.Matrix(c, s, -s, c, 0, 0);
	this.concat(m);
};

flash.geom.Matrix.prototype.scale = function(sx, sy) {
	var m = new flash.geom.Matrix(sx, 0, 0, sy, 0, 0);
	this.concat(m);
};

flash.geom.Matrix.prototype.translate = function(dx, dy) {
	this.tx = dx;
	this.ty = dy;
};

flash.geom.Matrix.prototype.createGradientBox = function(width, height, rotation, tx, ty) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Matrix.createGradientBox() $$$$");
};


flash.geom.Matrix.className = "flash.geom.Matrix";

flash.geom.Matrix.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.geom.Matrix.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'a', t:'Number'});
			p.push({n:'b', t:'Number'});
			p.push({n:'c', t:'Number'});
			p.push({n:'d', t:'Number'});
			p.push({n:'tx', t:'Number'});
			p.push({n:'ty', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

