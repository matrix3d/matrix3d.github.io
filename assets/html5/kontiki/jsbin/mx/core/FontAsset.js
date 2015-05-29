/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.FontAsset = function() {
	flash.text.Font.call(this);
};


$inherit(mx.core.FontAsset, flash.text.Font);

mx.core.FontAsset.className = "mx.core.FontAsset";

mx.core.FontAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.FontAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.FontAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.text.Font.injectionPoints(t);
			break;
		case 2:
			p = flash.text.Font.injectionPoints(t);
			break;
		case 3:
			p = flash.text.Font.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

