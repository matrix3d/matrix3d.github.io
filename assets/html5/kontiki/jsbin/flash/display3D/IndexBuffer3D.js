/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.IndexBuffer3D = function(context3D, numIndices) {
	this.buffer = null;
	this.context3D = context3D;
	this.numIndices = numIndices;
	this.buffer = context3D.webglContext.createBuffer();
};

flash.display3D.IndexBuffer3D.prototype.uploadFromVector = function(data, startOffset, count) {
	trace("IndexBuffer3D.uploadFromVector: " + data.length);
	var indices = new ArrayBuffer(data.length * 2);
	var shortArr = new Uint16Array(indices);
	for (var i = 0; i < data.length; i++) {
		shortArr[i] = data[i];
	}
	this.context3D.webglContext.bindBuffer(34963, this.buffer);
	this.context3D.webglContext.bufferData(34963, indices, 35044);
};

flash.display3D.IndexBuffer3D.prototype.dispose = function() {
	this.context3D.webglContext.deleteBuffer(this.buffer);
};


flash.display3D.IndexBuffer3D.className = "flash.display3D.IndexBuffer3D";

flash.display3D.IndexBuffer3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

flash.display3D.IndexBuffer3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.IndexBuffer3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'context3D', t:'flash.display3D.Context3D'});
			p.push({n:'numIndices', t:'int'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

