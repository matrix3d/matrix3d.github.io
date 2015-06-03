/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Dictionary = function(weakReference) {
};


flash.utils.Dictionary.className = "flash.utils.Dictionary";

flash.utils.Dictionary.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Dictionary.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Dictionary.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'weakReference', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

