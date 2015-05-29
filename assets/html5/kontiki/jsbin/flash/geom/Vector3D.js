/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Vector3D = function(x, y, z, w) {
};


flash.geom.Vector3D.className = "flash.geom.Vector3D";

flash.geom.Vector3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Vector3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Vector3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			p.push({n:'z', t:'Number'});
			p.push({n:'w', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

