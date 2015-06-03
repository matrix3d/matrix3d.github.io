/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getTimer = function() {
	return new Date().getTime() - flash.utils.FlashTimingEngine.currentTime;
}

flash.utils.getTimer.className = "flash.utils.getTimer";

flash.utils.getTimer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.utils.getTimer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getTimer.injectionPoints = function(t) {
	return [];
};
