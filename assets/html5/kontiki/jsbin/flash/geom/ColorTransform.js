/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.ColorTransform = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
};


flash.geom.ColorTransform.className = "flash.geom.ColorTransform";

flash.geom.ColorTransform.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.ColorTransform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.ColorTransform.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'redMultiplier', t:'Number'});
			p.push({n:'greenMultiplier', t:'Number'});
			p.push({n:'blueMultiplier', t:'Number'});
			p.push({n:'alphaMultiplier', t:'Number'});
			p.push({n:'redOffset', t:'Number'});
			p.push({n:'greenOffset', t:'Number'});
			p.push({n:'blueOffset', t:'Number'});
			p.push({n:'alphaOffset', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

