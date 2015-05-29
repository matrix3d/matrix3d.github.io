/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getDefinitionByName = function(value) {
	var parts = value.split(".");
	var obj = window[parts[0]];
	for (var i = 1; i < parts.length; i++) {
		obj = obj[parts[i]];
	}
	return obj;
}

flash.utils.getDefinitionByName.className = "flash.utils.getDefinitionByName";

flash.utils.getDefinitionByName.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getDefinitionByName.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getDefinitionByName.injectionPoints = function(t) {
	return [];
};
