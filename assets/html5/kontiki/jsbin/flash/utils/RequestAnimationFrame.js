/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.RequestAnimationFrame = function() {
	
};

flash.utils.RequestAnimationFrame.prototype.request = function(callback) {
	var w = Window;
	var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame || function(callback) {
		setTimeout(callback, 1000 / 60);
	};
	requestAnimationFrame($createStaticDelegate(this, callback));
};


flash.utils.RequestAnimationFrame.className = "flash.utils.RequestAnimationFrame";

flash.utils.RequestAnimationFrame.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.RequestAnimationFrame.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.RequestAnimationFrame.injectionPoints = function(t) {
	return [];
};
