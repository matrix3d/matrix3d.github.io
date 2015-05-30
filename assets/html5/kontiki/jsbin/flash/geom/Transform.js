/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Transform = function() {
this.matrix = new flash.geom.Matrix(1, 0, 0, 1, 0, 0);
this.worldMatrix = new flash.geom.Matrix(1, 0, 0, 1, 0, 0);
this.target = null;
this.colorTransform = null;
};


flash.geom.Transform.className = "flash.geom.Transform";

flash.geom.Transform.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Transform.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Matrix');
	return p;
};

flash.geom.Transform.injectionPoints = function(t) {
	return [];
};
