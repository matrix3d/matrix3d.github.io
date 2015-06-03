/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.BitmapAsset = function(bitmapData, pixelSnapping, smoothing) {
	flash.display.Bitmap.call(this, (bitmapData == null) ? new flash.display.BitmapData(11, 11, true, 0) : bitmapData, pixelSnapping, smoothing);
};


$inherit(mx.core.BitmapAsset, flash.display.Bitmap);

mx.core.BitmapAsset.className = "mx.core.BitmapAsset";

mx.core.BitmapAsset.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.BitmapData');
	return p;
};

mx.core.BitmapAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.BitmapAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bitmapData', t:'flash.display.BitmapData'});
			p.push({n:'pixelSnapping', t:'String'});
			p.push({n:'smoothing', t:'Boolean'});
			break;
		case 1:
			p = flash.display.Bitmap.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Bitmap.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Bitmap.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

