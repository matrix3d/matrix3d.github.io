/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.setTimeout = function(closure, delay, args) {
	setTimeout($createStaticDelegate(this, closure), delay);
	return 1;
}

flash.utils.setTimeout.className = "flash.utils.setTimeout";

flash.utils.setTimeout.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setTimeout.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setTimeout.injectionPoints = function(t) {
	return [];
};
