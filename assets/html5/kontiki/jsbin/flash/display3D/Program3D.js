/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Program3D = function(context3D) {
	this.shaderFragmentSrc = null;
	this.shaderFragment = null;
	this.colorAttribute = null;
	this.shaderVertexSrc = null;
	this.shaderVertex = null;
	this.textureCoordAttribute = null;
	this.shaderProgram = null;
	this.samplerUniform = null;
	this.mvMatrixUniform = null;
	this.vertexPositionAttribute = null;
	this.context3D = context3D;
	this.shaderProgram = context3D.webglContext.createProgram();
};

flash.display3D.Program3D.prototype.dispose = function() {
	this.context3D.webglContext.deleteShader(this.shaderVertex);
	this.context3D.webglContext.deleteShader(this.shaderFragment);
	this.context3D.webglContext.deleteProgram(this.shaderProgram);
};

flash.display3D.Program3D.prototype.upload = function(vertexProgram, fragmentProgram) {
	this.shaderVertexSrc = vertexProgram;
	this.shaderFragmentSrc = fragmentProgram;
	var shaderVertex = this.compileShader(this.shaderVertexSrc, 35633);
	var shaderFragment = this.compileShader(this.shaderFragmentSrc, 35632);
	this.context3D.webglContext.attachShader(this.shaderProgram, shaderVertex);
	this.context3D.webglContext.attachShader(this.shaderProgram, shaderFragment);
	this.context3D.webglContext.linkProgram(this.shaderProgram);
	if (!this.context3D.webglContext.getProgramParameter(this.shaderProgram, 35714)) {
		throw new Error("Could not initialize shaders", 0);
	}
};

flash.display3D.Program3D.prototype.compileShader = function(shaderSrc, shaderType) {
	var src = shaderSrc.join("\n");
	var shader = this.context3D.webglContext.createShader(shaderType);
	this.context3D.webglContext.shaderSource(shader, src);
	this.context3D.webglContext.compileShader(shader);
	if (!this.context3D.webglContext.getShaderParameter(shader, 35713)) {
		trace(this.context3D.webglContext.getShaderInfoLog(shader));
		return null;
	}
	return shader;
};

flash.display3D.Program3D.prototype.focusProgram = function() {
	this.context3D.webglContext.useProgram(this.shaderProgram);
};


flash.display3D.Program3D.className = "flash.display3D.Program3D";

flash.display3D.Program3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

flash.display3D.Program3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Program3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'context3D', t:'flash.display3D.Context3D'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

