/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.VertexBuffer3D = function(context3D, numVertices, data32PerVertex) {
	this.buffer = null;
	this.verticies = null;
	this.context3D = context3D;
	this.buffer = context3D.webglContext.createBuffer();
	this.numVertices = numVertices;
	this.data32PerVertex = data32PerVertex;
};

flash.display3D.VertexBuffer3D.prototype.uploadFromVector = function(data, startVertex, numVertices) {
	trace("VertexBuffer3D.uploadFromVector: " + data.length + " startVertex: " + startVertex + " nV: " + numVertices + "  data32PerVertex: " + this.data32PerVertex);
	this.verticies = new ArrayBuffer(data.length * 4);
	var floatArr = new Float32Array(this.verticies);
	for (var i = 0; i < data.length; i++) {
		floatArr[i] = data[i];
	}
	this.context3D.webglContext.bindBuffer(34962, this.buffer);
	this.context3D.webglContext.bufferData(34962, this.verticies, 35044);
	this.context3D.lastVertexBuffer = this;
};

flash.display3D.VertexBuffer3D.prototype.uploadFromByteArray = function(data, byteArrayOffset, startVertex, numVertices) {
	trace("VertexBuffer3D.uploadFromByteArray: " + data.get_length() + " startVertex: " + startVertex + " nV: " + numVertices + "  byteArrayOffset: " + byteArrayOffset);
	this.verticies = data.getArrayBuffer();
	this.context3D.webglContext.bindBuffer(34962, this.buffer);
	this.context3D.webglContext.bufferData(34962, this.verticies, 35044);
	this.context3D.lastVertexBuffer = this;
};

flash.display3D.VertexBuffer3D.prototype.uploadLast = function() {
	this.context3D.webglContext.bindBuffer(34962, this.buffer);
	this.context3D.webglContext.bufferData(34962, this.verticies, 35048);
	this.context3D.lastVertexBuffer = this;
};

flash.display3D.VertexBuffer3D.prototype.dispose = function() {
};


flash.display3D.VertexBuffer3D.className = "flash.display3D.VertexBuffer3D";

flash.display3D.VertexBuffer3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

flash.display3D.VertexBuffer3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.VertexBuffer3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'context3D', t:'flash.display3D.Context3D'});
			p.push({n:'numVertices', t:'int'});
			p.push({n:'data32PerVertex', t:'int'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

