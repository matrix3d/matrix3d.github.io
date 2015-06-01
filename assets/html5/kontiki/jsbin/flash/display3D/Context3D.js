/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3D = function() {
	this.currentProgram = null;
	this.indexBufferList = [];
	this.enableErrorChecking = false;
	this.webglContext = null;
	this.canvas = null;
	this.isDrawing = false;
	this.projectionMatrix = null;
	this.vertexBufferList = [];
	this.hasBlendFactors = false;
	this.blendSourceFactor = null;
	this.blendDestinationFactor = null;
	this.textureList = [];
	this.lastVertexBuffer = null;
	this.programList = [];
	flash.events.EventDispatcher.call(this);
};

flash.display3D.Context3D.prototype.get_driverInfo = function() {
	return "WebGL Port In Progress";
};

flash.display3D.Context3D.prototype.clear = function(red, green, blue, alpha, depth, stencil, mask) {
	if (mask == 0xffffff)
		mask = flash.display3D.Context3DClearMask.ALL;
	if (!this.isDrawing) {
		this.updateBlendStatus();
		this.isDrawing = true;
	}
	this.webglContext.clearColor(red, green, blue, alpha);
	this.webglContext.clearDepth(depth);
	this.webglContext.clearStencil(stencil);
	this.webglContext.clear(mask);
};

flash.display3D.Context3D.prototype.updateBlendStatus = function() {
	if (this.hasBlendFactors) {
		this.webglContext.enable(3042);
		this.webglContext.blendEquation(32774);
		this.webglContext.blendFunc(this.blendSourceFactor, this.blendDestinationFactor);
	} else {
		this.webglContext.disable(3042);
	}
};

flash.display3D.Context3D.prototype.configureBackBuffer = function(width, height, antiAlias, enableDepthAndStencil, wantsBestResolution) {
	trace("Context3D CHANGE BACK BUFFER (OR VIEWPORT?) w\/h: " + width + "\/" + height);
	if (enableDepthAndStencil) {
		this.webglContext.enable(2960);
		this.webglContext.enable(2929);
	}
	this.canvas.width = width;
	this.canvas.height = height;
	this.webglContext.viewport(0, 0, width, height);
};

flash.display3D.Context3D.prototype.createIndexBuffer = function(numIndices) {
	var indexBuffer = new flash.display3D.IndexBuffer3D(this, numIndices);
	this.indexBufferList.push(indexBuffer);
	return indexBuffer;
};

flash.display3D.Context3D.prototype.createProgram = function() {
	var program = new flash.display3D.Program3D(this);
	this.programList.push(program);
	return program;
};

flash.display3D.Context3D.prototype.createTexture = function(width, height, format, optimizeForRenderToTexture, streamingLevels) {
	var texture = new flash.display3D.textures.Texture();
	texture.context3D = this;
	return texture;
};

flash.display3D.Context3D.prototype.createVertexBuffer = function(numVertices, data32PerVertex) {
	var vertexBuffer = new flash.display3D.VertexBuffer3D(this, numVertices, data32PerVertex);
	this.webglContext.bindBuffer(34962, vertexBuffer.buffer);
	return vertexBuffer;
};

flash.display3D.Context3D.prototype.dispose = function() {
	var i;
	for (i = 0; i < this.indexBufferList.length; ++i) {
		this.indexBufferList[i].dispose();
	}
	this.indexBufferList = null;
	for (i = 0; i < this.vertexBufferList.length; ++i) {
		this.vertexBufferList[i].dispose();
	}
	this.vertexBufferList = null;
	for (i = 0; i < this.textureList.length; ++i) {
		this.textureList[i].dispose();
	}
	this.textureList = null;
	for (i = 0; i < this.programList.length; ++i) {
		this.programList[i].dispose();
	}
	this.programList = null;
};

flash.display3D.Context3D.prototype.drawTriangles = function(indexBuffer, firstIndex, numTriangles) {
	if (!this.isDrawing)
		throw new Error("Need to clear before drawing if the buffer has not been cleared sinceu the last present() call", 0);
	var numIndices = 0;
	if (numTriangles == -1)
		numIndices = indexBuffer.numIndices;
	else
		numIndices = numTriangles * 3;
	this.webglContext.bindBuffer(34963, indexBuffer.buffer);
	this.webglContext.drawElements(4, numIndices, 5123, firstIndex);
};

flash.display3D.Context3D.prototype.present = function() {
	this.isDrawing = false;
	this.webglContext.useProgram(null);
};

flash.display3D.Context3D.prototype.setBlendFactors = function(sourceFactor, destinationFactor) {
	this.hasBlendFactors = true;
	trace("Context3D::setBlendFactors NOT SETTING HARD CODED");
	switch (sourceFactor) {
		case "one":
			this.blendSourceFactor = 1;
			break;
		case "destinationAlpha":
			this.blendSourceFactor = 772;
			break;
		case "destinationColor":
			this.blendSourceFactor = 774;
			break;
		case "one":
			this.blendSourceFactor = 1;
			break;
		case "oneMinusDestinationAlpha":
			this.blendSourceFactor = 773;
			break;
		case "oneMinusDestinationColor":
			this.blendSourceFactor = 775;
			break;
		case "oneMinusSourceAlpha":
			this.blendSourceFactor = 771;
			break;
		case "oneMinusSourceColor":
			this.blendSourceFactor = 769;
			break;
		case "sourceAlpha":
			this.blendSourceFactor = 770;
			break;
		case "sourceColor":
			this.blendSourceFactor = 768;
			break;
		case "zero":
			this.blendSourceFactor = 0;
			break;
		default:
			throw new Error("Unknown blend source factor", 0);
			break;
	}
	switch (destinationFactor) {
		case "one":
			this.blendDestinationFactor = 1;
			break;
		case "destinationAlpha":
			this.blendDestinationFactor = 772;
			break;
		case "destinationColor":
			this.blendDestinationFactor = 774;
			break;
		case "one":
			this.blendDestinationFactor = 1;
			break;
		case "oneMinusDestinationAlpha":
			this.blendDestinationFactor = 773;
			break;
		case "oneMinusDestinationColor":
			this.blendDestinationFactor = 775;
			break;
		case "oneMinusSourceAlpha":
			this.blendDestinationFactor = 771;
			break;
		case "oneMinusSourceColor":
			this.blendDestinationFactor = 769;
			break;
		case "sourceAlpha":
			this.blendDestinationFactor = 770;
			break;
		case "sourceColor":
			this.blendDestinationFactor = 768;
			break;
		case "zero":
			this.blendDestinationFactor = 0;
			break;
		default:
			throw new Error("Unknown blend destination factor", 0);
			break;
	}
	this.updateBlendStatus();
};

flash.display3D.Context3D.prototype.setColorMask = function(red, green, blue, alpha) {
	this.webglContext.colorMask(red, green, blue, alpha);
};

flash.display3D.Context3D.prototype.setCulling = function(triangleFaceToCull) {
	if (triangleFaceToCull == "none") {
		this.webglContext.disable(2884);
	} else {
		this.webglContext.enable(2884);
		switch (triangleFaceToCull) {
			case "front":
				this.webglContext.cullFace(1028);
				break;
			case "back":
				this.webglContext.cullFace(1029);
				break;
			case "fontAndBack":
				this.webglContext.cullFace(1032);
				break;
			default:
				throw new Error("Unknown Context3DTriangleFace type.", 0);
		}
	}
};

flash.display3D.Context3D.prototype.setDepthTest = function(depthMask, passCompareMode) {
	switch (passCompareMode) {
		case "always":
			this.webglContext.depthFunc(519);
			break;
		case "equal":
			this.webglContext.depthFunc(514);
			break;
		case "greater":
			this.webglContext.depthFunc(516);
			break;
		case "greaterEqual":
			this.webglContext.depthFunc(518);
			break;
		case "less":
			this.webglContext.depthFunc(513);
			break;
		case "lessEqual":
			this.webglContext.depthFunc(515);
			break;
		case "never":
			this.webglContext.depthFunc(512);
			break;
		case "notEqual":
			this.webglContext.depthFunc(517);
			break;
		default:
			throw new Error("Unknown Context3DCompareMode type.", 0);
			break;
	}
	this.webglContext.depthMask(depthMask);
};

flash.display3D.Context3D.prototype.setProgram = function(program) {
	trace("Context3D::setProgram: program: " + program);
	this.currentProgram = program;
	program.focusProgram();
};

flash.display3D.Context3D.prototype.getUniformLocationNameFromAgalRegisterIndex = function(programType, firstRegister) {
	switch (programType) {
		case "vertex":
			return "vc" + firstRegister;
			break;
		case "fragment":
			return "fc" + firstRegister;
			break;
		default:
			throw new Error("Program Type " + programType + " not supported", 0);
	}
};

flash.display3D.Context3D.prototype.setProgramConstantsFromMatrix = function(programType, firstRegister, matrix, transposedMatrix) {
	var locationName = this.getUniformLocationNameFromAgalRegisterIndex(programType, firstRegister);
	var uniformLocation = this.webglContext.getUniformLocation(this.currentProgram.shaderProgram, locationName);
	this.webglContext.uniformMatrix4fv(uniformLocation, !transposedMatrix, new Float32Array(matrix.rawData));
};

flash.display3D.Context3D.prototype.setProgramConstantsFromVector = function(programType, firstRegister, data, numRegisters) {
	var currentIndex = 0;
	var locationName = "";
	var uniformLocation;
	for (var i = 0; i < numRegisters; ++i) {
		currentIndex = i * 4;
		locationName = this.getUniformLocationNameFromAgalRegisterIndex(programType, firstRegister + i);
		uniformLocation = this.webglContext.getUniformLocation(this.currentProgram.shaderProgram, locationName);
		this.webglContext.uniform4f(uniformLocation, data[currentIndex], data[currentIndex + 1], data[currentIndex + 2], data[currentIndex + 3]);
	}
};

flash.display3D.Context3D.prototype.setRenderToBackBuffer = function() {
};

flash.display3D.Context3D.prototype.setRenderToTexture = function(texture, enableDepthAndStencil, antiAlias, surfaceSelector) {
};

flash.display3D.Context3D.prototype.setScissorRectangle = function(rectangle) {
	if (!rectangle) {
		this.webglContext.disable(3089);
		return;
	}
	this.webglContext.enable(3089);
	this.webglContext.scissor(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
};

flash.display3D.Context3D.prototype.setTextureAt = function(sampler, texture) {
	var locationName = "fs" + sampler;
	if (!texture) {
		this.webglContext.activeTexture(33984 + sampler);
		this.webglContext.bindTexture(3553, null);
		return;
	}
	var location = this.webglContext.getUniformLocation(this.currentProgram.shaderProgram, locationName);
	switch (sampler) {
		case 0:
			this.webglContext.activeTexture(33984);
			break;
		case 1:
			this.webglContext.activeTexture(33985);
			break;
		case 2:
			this.webglContext.activeTexture(33986);
			break;
		case 3:
			this.webglContext.activeTexture(33987);
			break;
		case 4:
			this.webglContext.activeTexture(33988);
			break;
		case 5:
			this.webglContext.activeTexture(33989);
			break;
		case 6:
			this.webglContext.activeTexture(33990);
			break;
		case 7:
			this.webglContext.activeTexture(33991);
			break;
		default:
			throw new Error("Texture " + sampler + " is out of bounds.", 0);
	}
	this.webglContext.bindTexture(3553, texture._webglTexture);
	this.webglContext.uniform1i(location, sampler);
};

flash.display3D.Context3D.prototype.setVertexBufferAt = function(index, buffer, bufferOffset, format) {
	var locationName = "va" + index;
	var location = this.webglContext.getAttribLocation(this.currentProgram.shaderProgram, locationName);
	if (!buffer) {
		if (location > -1)
			this.webglContext.disableVertexAttribArray(location);
		return;
	}
	this.webglContext.bindBuffer(34962, buffer.buffer);
	var numBytes = 4;
	var dimension;
	switch (format) {
		case "bytes4":
			dimension = 4;
			this.webglContext.enableVertexAttribArray(location);
			this.webglContext.vertexAttribPointer(location, dimension, 5121, true, buffer.data32PerVertex * numBytes, bufferOffset * numBytes);
			return;
			break;
		case "float1":
			dimension = 1;
			break;
		case "float2":
			dimension = 2;
			break;
		case "float3":
			dimension = 3;
			break;
		case "float4":
			dimension = 4;
			break;
		default:
			throw new Error("Buffer format " + format + " is not supported.", 0);
	}
	this.webglContext.enableVertexAttribArray(location);
	this.webglContext.vertexAttribPointer(location, dimension, 5126, false, buffer.data32PerVertex * numBytes, bufferOffset * numBytes);
};

flash.display3D.Context3D.prototype.drawToBitmapData = function(destination) {
	throw new Error("API NOT IMPLEMENTED -- Context3D.drawToBitmapData", 0);
};

Object.defineProperty(flash.display3D.Context3D.prototype, 'driverInfo', {
  get: function() { return this.get_driverInfo(); },
  set: function(value) { return this.set_driverInfo(value); }
});

$inherit(flash.display3D.Context3D, flash.events.EventDispatcher);

flash.display3D.Context3D.className = "flash.display3D.Context3D";

flash.display3D.Context3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display3D.IndexBuffer3D');
	p.push('trace');
	p.push('flash.geom.Rectangle');
	p.push('flash.display3D.Context3DClearMask');
	p.push('flash.display3D.VertexBuffer3D');
	p.push('flash.display3D.textures.Texture');
	p.push('flash.display3D.textures.TextureBase');
	p.push('flash.display3D.Program3D');
	return p;
};

flash.display3D.Context3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3D.injectionPoints = function(t) {
	var p;
	switch (t) {
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

