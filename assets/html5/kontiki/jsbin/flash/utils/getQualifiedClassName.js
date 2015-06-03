/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getQualifiedClassName = function(value) {
	if (value.className != undefined)
		return value.className;
	var tmp = new value();
	return tmp.constructor.className;
}

flash.utils.getQualifiedClassName.className = "flash.utils.getQualifiedClassName";

flash.utils.getQualifiedClassName.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getQualifiedClassName.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getQualifiedClassName.injectionPoints = function(t) {
	return [];
};
