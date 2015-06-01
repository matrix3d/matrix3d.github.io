/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Matrix3D = function(v) {
	this.rawData = null;
	this.rawData = v;
};

flash.geom.Matrix3D.prototype.copyRawDataFrom = function(vector, index, transpose) {
	if (!this.rawData)
		this.rawData = [];
	for (var i = 0; i < vector.length; i++)
		this.rawData[i + index] = vector[i];
};


flash.geom.Matrix3D.className = "flash.geom.Matrix3D";

flash.geom.Matrix3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'v', t:'Array'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

