/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundLoaderContext = function(bufferTime, checkPolicyFile) {
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};


flash.media.SoundLoaderContext.className = "flash.media.SoundLoaderContext";

flash.media.SoundLoaderContext.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundLoaderContext.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundLoaderContext.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bufferTime', t:'Number'});
			p.push({n:'checkPolicyFile', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

