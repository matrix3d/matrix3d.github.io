/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.BitmapData = function(width, height, transparent, fillColor) {
	this.imageData = null;
	this.isLoaded = false;
	this.checkTable = null;
	this.image = null;
	this.noRepeatPatern = null;
	this._rect = null;
	this.repeatPatern = null;
	this.bitmapBytes = null;
	this.width = width;
	this.height = height;
	this.transparent = transparent;
	this.fillColor = fillColor;
	var len = width * height;
	if (len > 0) {
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		this.imageData = ctx.createImageData(width, height);
		if (transparent && fillColor == 0)
			len = 0;
		for (var i = 0; i < len; i++) {
			var index = i * 4;
			this.imageData.data[index + 0] = fillColor >> 16 & 0xFF;
			this.imageData.data[index + 1] = fillColor >> 8 & 0xFF;
			this.imageData.data[index + 2] = fillColor >> 0 & 0xFF;
			this.imageData.data[index + 3] = transparent ? (fillColor >> 24 & 0xFF) : 0xFF;
		}
		ctx.putImageData(this.imageData, 0, 0);
		this.image = canvas;
		this.updatePatern();
	}
	this._rect = new flash.geom.Rectangle(0, 0, width, height);
};

flash.display.BitmapData.prototype.updatePatern = function() {
	var g = new flash.display.Graphics();
	var ctx = g.getCanvas();
	this.repeatPatern = ctx.createPattern(this.image, "repeat");
	this.noRepeatPatern = ctx.createPattern(this.image, "no-repeat");
};

flash.display.BitmapData.prototype.embedImage = function(source) {
	this.image = new Image();
	var request = new XMLHttpRequest();
	request.open("get", source, false);
	request.overrideMimeType("text\/plain; charset=x-user-defined");
	request.send();
	var byteMe = "";
	var len = request.responseText.length;
	for (var i = 0; i <= len - 1; i++)
		byteMe += String.fromCharCode(request.responseText.charCodeAt(i) & 0xff);
	this.image.onerror = function() {
		trace("ImageError");
	};
	var that = this;
	this.image.onload = function() {
		trace("ONLOAD Here: " + this.width + " - " + this.height + " - " + this.complete + " - " + that.image.width);
		that.width = that.image.width;
		that.height = that.image.height;
		that.isLoaded = true;
	};
	this.image.src = "data:image\/png;base64," + window.btoa(byteMe);
	trace("ImageLoaded Here: " + this.image.width + " - " + this.image.height + " source:" + source + " - " + this.image.complete);
	if (this.image.complete) {
		this.width = this.image.width;
		this.height = this.image.height;
	} else {
		this.isLoaded = false;
		flash.utils.FlashTimingEngine.embedLoadingObjects.push(this);
	}
};

flash.display.BitmapData.prototype.get_rect = function() {
	return this._rect;
};

flash.display.BitmapData.prototype.lock = function() {
};

flash.display.BitmapData.prototype.unlock = function() {
};

flash.display.BitmapData.prototype.colorTransform = function(rect, colorTransform) {
};

flash.display.BitmapData.prototype.copyPixels = function(sourceBitmapData, sourceRect, destPoint, alphaBitmapData, alphaPoint, mergeAlpha) {
	if (sourceBitmapData.image) {
		var canvas = document.createElement("canvas");
		canvas.width = this.width;
		canvas.height = this.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(sourceBitmapData.image, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height);
		this.image = canvas;
	} else {
		flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: NON IMAGE BitmapData.copyPixels() $$$$");
	}
};

flash.display.BitmapData.prototype.getPixel = function(x, y) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	return this.bitmapBytes.readUnsignedInt();
};

flash.display.BitmapData.prototype.getPixel32 = function(x, y) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	return this.bitmapBytes.readUnsignedInt();
};

flash.display.BitmapData.prototype.getPixels = function(rect) {
	return new flash.utils.ByteArray();
};

flash.display.BitmapData.prototype.setPixel = function(x, y, color) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	this.bitmapBytes.writeUnsignedInt(color);
};

flash.display.BitmapData.prototype.setPixel32 = function(x, y, color) {
	this.bitmapBytes.position = (x + (y * this.width)) * 4;
	this.bitmapBytes.writeUnsignedInt(color);
};

flash.display.BitmapData.prototype.setPixels = function(rect, inputByteArray) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.setPixels() $$$$");
};

flash.display.BitmapData.prototype.getColorBoundsRect = function(color1, color2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.getColorBoundsRect() $$$$");
	return new flash.geom.Rectangle(0, 0, 10, 10);
};

flash.display.BitmapData.prototype.applyFilter = function(sourceBitmapData, sourceRect, destPoint, filter) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.applyFilter() $$$$");
};

flash.display.BitmapData.prototype.noise = function(randomSeed, low, high, channelOptions, grayScale) {
	for (var i = 0; i < this.bitmapBytes.get_length(); i += 4) {
		this.bitmapBytes.position = i;
		this.bitmapBytes.writeUnsignedInt(Math.random() * 0xffffffff);
	}
};

flash.display.BitmapData.prototype.scroll = function(x, y) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.scroll() $$$$");
};

flash.display.BitmapData.prototype.fillRect = function(rect, color) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.fillRect() $$$$");
};

flash.display.BitmapData.prototype.floodFill = function(x, y, color) {
	var pos = (x + (y * this.width));
	var pixelColor = this.getPixel(x, y);
	this.setPixel(x, y, color);
	this.checkTable = new flash.utils.Dictionary(false);
	this.checkTable[pos] = true;
	this.recFloodFill(x, y, color, pixelColor);
};

flash.display.BitmapData.prototype.recFloodFill = function(x, y, fillColor, checkColor) {
	var pos = (x + (y * this.width));
	if (pos < 0 || pos > (this.width * this.height) || this.checkTable[pos] == true || this.getPixel(x, y) != checkColor)
		return;
	if (!this.checkTable[pos]) {
		this.setPixel(x, y, fillColor);
		this.checkTable[pos] = true;
	}
	this.recFloodFill(x - 1, y - 1, fillColor, checkColor);
	this.recFloodFill(x + 0, y - 1, fillColor, checkColor);
	this.recFloodFill(x + 1, y - 1, fillColor, checkColor);
	this.recFloodFill(x - 1, y + 0, fillColor, checkColor);
	this.recFloodFill(x + 1, y + 0, fillColor, checkColor);
	this.recFloodFill(x - 1, y + 1, fillColor, checkColor);
	this.recFloodFill(x + 0, y + 1, fillColor, checkColor);
	this.recFloodFill(x + 1, y + 1, fillColor, checkColor);
};

flash.display.BitmapData.prototype.dispose = function() {
	if (this.image) {
		this.imageData = null;
		this.image = null;
	} else {
		flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.dispose() $$$$");
	}
};

flash.display.BitmapData.prototype.draw = function(source, matrix, colorTransform, blendMode, clipRect, smoothing) {
	var sourceBitmapData = source;
	if (!sourceBitmapData || !this.image)
		return;
	var ctx;
	if (sourceBitmapData.constructor.className == "flash.text.TextField") {
		var text = sourceBitmapData;
		var format = text.defaultTextFormat;
		ctx = this.image.getContext("2d");
		ctx.font = format.size + "px " + format.font;
		ctx.fillText(text.get_text(), matrix.tx, matrix.ty);
	}
	try {
		var shape = source;
		if (shape.get_graphics() && shape.get_graphics().canvas) {
			this.image = shape.get_graphics().canvas;
		}
	} catch (error) {
	}
	if (!sourceBitmapData.image)
		return;
	ctx = this.image.getContext("2d");
	ctx.drawImage(sourceBitmapData.image, 0, 0, sourceBitmapData.image.width * matrix.a, sourceBitmapData.image.height * matrix.d);
};

flash.display.BitmapData.prototype.paletteMap = function(sourceBitmapData, sourceRect, destPoint, redArray, greenArray, blueArray, alphaArray) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.paletteMap() $$$$");
};

flash.display.BitmapData.prototype.perlinNoise = function(baseX, baseY, numOctaves, randomSeed, stitch, fractalNoise, channelOptions, grayScale, offsets) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.perlinNoise() $$$$");
};

flash.display.BitmapData.prototype.threshold = function(sourceBitmapData, sourceRect, destPoint, operation, threshold, color, mask, copySource) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.threshold() $$$$");
	return 0;
};

flash.display.BitmapData.prototype.hitTest = function(firstPoint, firstAlphaThreshold, secondObject, secondBitmapDataPoint, secondAlphaThreshold) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: NON IMAGE BitmapData.hitTest() $$$$");
	return false;
};

flash.display.BitmapData.prototype.clone = function() {
	return new flash.display.BitmapData(this.width, this.height, true, 0);
};

Object.defineProperty(flash.display.BitmapData.prototype, 'rect', {
  get: function() { return this.get_rect(); },
  set: function(value) { return this.set_rect(value); }
});

flash.display.BitmapData.className = "flash.display.BitmapData";

flash.display.BitmapData.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.utils.ByteArray');
	p.push('flash.geom.Rectangle');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.utils.Dictionary');
	p.push('flash.display.Graphics');
	return p;
};

flash.display.BitmapData.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.BitmapData.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'width', t:'int'});
			p.push({n:'height', t:'int'});
			p.push({n:'transparent', t:'Boolean'});
			p.push({n:'fillColor', t:'uint'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

