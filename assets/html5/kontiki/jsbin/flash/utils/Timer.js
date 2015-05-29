/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Timer = function(delay, repeatCount) {
	this.id = 0;
	flash.events.EventDispatcher.call(this);
	this.delay = delay;
	this.repeatCount = repeatCount;
};

flash.utils.Timer.prototype.start = function() {
	this.id = 1;
};

flash.utils.Timer.prototype.stop = function() {
};


$inherit(flash.utils.Timer, flash.events.EventDispatcher);

flash.utils.Timer.className = "flash.utils.Timer";

flash.utils.Timer.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Timer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Timer.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'delay', t:'Number'});
			p.push({n:'repeatCount', t:'int'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

