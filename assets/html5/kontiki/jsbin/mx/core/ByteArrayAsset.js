/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.ByteArrayAsset = function() {
flash.utils.ByteArray.call(this);
};


$inherit(mx.core.ByteArrayAsset, flash.utils.ByteArray);

mx.core.ByteArrayAsset.className = "mx.core.ByteArrayAsset";

mx.core.ByteArrayAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.ByteArrayAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.ByteArrayAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		case 2:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		case 3:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

