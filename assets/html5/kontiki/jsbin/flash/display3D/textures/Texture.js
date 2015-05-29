/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};
if (typeof flash.display3D.textures == "undefined")
	flash.display3D.textures = {};

flash.display3D.textures.Texture = function() {
	flash.display3D.textures.TextureBase.call(this);
};

flash.display3D.textures.Texture.prototype.uploadCompressedTextureFromByteArray = function(data, byteArrayOffset, async) {
};

flash.display3D.textures.Texture.prototype.uploadFromBitmapData = function(source, miplevel) {
	trace("Stage3D Texture.uploadFromBitmapData TEXTURE");
	if (miplevel > 0)
		return;
	if (!this._webglTexture)
		this._webglTexture = this.context3D.webglContext.createTexture();
	if (!source.image) {
		flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Texture.uploadFromBitmapData() - NO IMAGE DATA $$$$");
	}
	var gl = this.context3D.webglContext;
	gl.bindTexture(3553, this._webglTexture);
	gl.pixelStorei(37441, true);
	gl.texImage2D(3553, 0, 6408, 6408, 5121, source.image);
	gl.texParameteri(3553, 10240, 9729);
	gl.texParameteri(3553, 10241, 9729);
	gl.texParameteri(3553, 10242, 10497);
	gl.texParameteri(3553, 10243, 10497);
	gl.bindTexture(3553, null);
};


$inherit(flash.display3D.textures.Texture, flash.display3D.textures.TextureBase);

flash.display3D.textures.Texture.className = "flash.display3D.textures.Texture";

flash.display3D.textures.Texture.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.display.BitmapData');
	return p;
};

flash.display3D.textures.Texture.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.textures.Texture.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display3D.textures.TextureBase.injectionPoints(t);
			break;
		case 2:
			p = flash.display3D.textures.TextureBase.injectionPoints(t);
			break;
		case 3:
			p = flash.display3D.textures.TextureBase.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

