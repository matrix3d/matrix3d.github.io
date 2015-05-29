/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.describeType = function(value) {
	return avmplus.describeType(value, FLASH10_FLAGS);
}

flash.utils.describeType.className = "flash.utils.describeType";

flash.utils.describeType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.describeType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.describeType.injectionPoints = function(t) {
	return [];
};
