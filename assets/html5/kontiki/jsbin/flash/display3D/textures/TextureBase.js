/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};
if (typeof flash.display3D.textures == "undefined")
	flash.display3D.textures = {};

flash.display3D.textures.TextureBase = function(target) {
	this.context3D = null;
	this._webglTexture = null;
	flash.events.EventDispatcher.call(this, target);
};

flash.display3D.textures.TextureBase.prototype.dispose = function() {
};


$inherit(flash.display3D.textures.TextureBase, flash.events.EventDispatcher);

flash.display3D.textures.TextureBase.className = "flash.display3D.textures.TextureBase";

flash.display3D.textures.TextureBase.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.textures.TextureBase.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.textures.TextureBase.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
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

