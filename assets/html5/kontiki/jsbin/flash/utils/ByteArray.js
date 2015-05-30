/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.ByteArray = function() {
	this.shareable = false;
	this._bytesAvailable = 0;
	this.tempUnalignedBuffer = null;
	this.position = 0;
	this._endian = "littleEndian";
	this.rawBytes = null;
	this.rawBytes = new ArrayBuffer(16);
	this.tempUnalignedBuffer = new ArrayBuffer(16);
	this._bytesAvailable = 0;
	this._endian = (new Int8Array(new Int16Array([1]).buffer)[0] > 0) ? "littleEndian" : "bigEndian";
};

flash.utils.ByteArray.RESIZE_FACTOR = 2;

flash.utils.ByteArray.prototype.setValueByPosition = function(index, value) {
	var oldPosition = this.position;
	this.position = index;
	this.writeByte(value);
	this.position = oldPosition;
};

flash.utils.ByteArray.prototype.getValueByPosition = function(index) {
	var oldPosition = this.position;
	this.position = index;
	var ret = this.readByte();
	this.position = oldPosition;
	return ret;
};

flash.utils.ByteArray.prototype.get_bytesAvailable = function() {
	return this._bytesAvailable;
};

flash.utils.ByteArray.prototype.get_length = function() {
	return this.rawBytes.byteLength;
};

flash.utils.ByteArray.prototype.set_length = function(value) {
	if (this.rawBytes.byteLength < value) {
		this.checkAndResizeBuffer(0, value, false);
	}
	else if (value == 0)
		this.clear();
};

flash.utils.ByteArray.prototype.getArrayBuffer = function() {
	return this.rawBytes;
};

flash.utils.ByteArray.prototype.clear = function() {
	this.rawBytes = new ArrayBuffer(16);
	this._bytesAvailable = 0;
	this.position = 0;
};

flash.utils.ByteArray.prototype.checkAndResizeBuffer = function(neededSpace, specificLength, positionCheck) {
	if ((positionCheck && this.position + neededSpace <= this.rawBytes.byteLength) || (specificLength == -1 && specificLength > this.rawBytes.byteLength))
		return;
	var neededLength = (this.position + neededSpace >= this.rawBytes.byteLength * 2) ? this.position + neededSpace : this.rawBytes.byteLength * 2;
	var newLength = (specificLength == -1) ? neededLength : specificLength;
	if (newLength == 0)
		newLength = 128;
	var newBuffer = new ArrayBuffer(newLength);
	var view = new Uint8Array(this.rawBytes, 0, this.get_length());
	var newview = new Uint8Array(newBuffer, 0, this.get_length());
	newview.set(view);
	this.rawBytes = newBuffer;
};

flash.utils.ByteArray.prototype.compress = function(algorithm) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.compress() $$$$");
};

flash.utils.ByteArray.prototype.uncompress = function(algorithm) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.uncompress() $$$$");
};

flash.utils.ByteArray.prototype.writeByte = function(value) {
	this.checkAndResizeBuffer(1, -1, true);
	var view = new Int8Array(this.rawBytes);
	view[this.position++] = ~~(value);
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readByte = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Int8Array(this.rawBytes);
	return view[this.position++];
};

flash.utils.ByteArray.prototype.writeUnsignedByte = function(value) {
	this.checkAndResizeBuffer(1, -1, true);
	var view = new Uint8Array(this.rawBytes);
	view[this.position++] = ~~(value) & 0xff;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readUnsignedByte = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Uint8Array(this.rawBytes);
	return view[this.position++];
};

flash.utils.ByteArray.prototype.writeBoolean = function(value) {
	this.checkAndResizeBuffer(1, -1, true);
	var view = new Int8Array(this.rawBytes);
	view[this.position++] = value ? 1 : 0;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readBoolean = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Int8Array(this.rawBytes);
	return view[this.position++] == 1;
};

flash.utils.ByteArray.prototype.writeShort = function(value) {
	this.checkAndResizeBuffer(2, -1, true);
	var view = new Int16Array(this.rawBytes);
	if ((this.position & 1) == 0) {
		view[this.position >> 1] = ~~(value);
	} else {
		var view3 = new Int16Array(this.tempUnalignedBuffer, 0, 1);
		view3[0] = ~~(value);
		var viewA = new Uint8Array(this.rawBytes, this.position, 2);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 2);
		viewA.set(viewB);
	}
	this.position += 2;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readShort = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Int16Array(this.rawBytes);
	var r;
	if ((this.position & 1) == 0) {
		var np = this.position >> 1;
		r = view[np];
	} else {
		var view3 = new Int16Array(this.tempUnalignedBuffer, 0, 1);
		var viewA = new Uint8Array(this.rawBytes, this.position, 2);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 2);
		viewB.set(viewA);
		r = view3[0];
	}
	this.position += 2;
	return r;
};

flash.utils.ByteArray.prototype.writeUnsignedShort = function(value) {
	this.checkAndResizeBuffer(2, -1, true);
	var view = new Uint16Array(this.rawBytes);
	if ((this.position & 1) == 0) {
		view[this.position >> 1] = ~~(value) & 0xffff;
	} else {
		var view3 = new Uint16Array(this.tempUnalignedBuffer, 0, 1);
		view3[0] = ~~(value) & 0xffff;
		var viewA = new Uint8Array(this.rawBytes, this.position, 2);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 2);
		viewA.set(viewB);
	}
	this.position += 2;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readUnsignedShort = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Uint16Array(this.rawBytes);
	var r;
	if ((this.position & 1) == 0) {
		var np = this.position >> 1;
		r = view[np];
	} else {
		var view3 = new Uint16Array(this.tempUnalignedBuffer, 0, 1);
		var viewA = new Uint8Array(this.rawBytes, this.position, 2);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 2);
		viewB.set(viewA);
		r = view3[0];
	}
	this.position += 2;
	return r;
};

flash.utils.ByteArray.prototype.writeInt = function(value) {
	this.checkAndResizeBuffer(4, -1, true);
	var view = new Int32Array(this.rawBytes);
	if ((this.position & 3) == 0) {
		view[this.position >> 2] = ~~(value);
	} else {
		var view3 = new Int32Array(this.tempUnalignedBuffer, 0, 1);
		view3[0] = ~~(value);
		var viewA = new Uint8Array(this.rawBytes, this.position, 4);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 4);
		viewA.set(viewB);
	}
	this.position += 4;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readInt = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Int32Array(this.rawBytes);
	var r;
	if ((this.position & 3) == 0) {
		var np = this.position >> 2;
		r = view[np];
	} else {
		var view3 = new Int32Array(this.tempUnalignedBuffer, 0, 1);
		var viewA = new Uint8Array(this.rawBytes, this.position, 4);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 4);
		viewB.set(viewA);
		r = view3[0];
	}
	this.position += 4;
	return r;
};

flash.utils.ByteArray.prototype.writeUnsignedInt = function(value) {
	this.checkAndResizeBuffer(4, -1, true);
	var view = new Uint32Array(this.rawBytes);
	if ((this.position & 3) == 0) {
		view[this.position >> 2] = ~~(value) & 0xffffffff;
	} else {
		var view3 = new Uint32Array(this.tempUnalignedBuffer, 0, 1);
		view3[0] = ~~(value) & 0xffffffff;
		var viewA = new Uint8Array(this.rawBytes, this.position, 4);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 4);
		viewA.set(viewB);
	}
	this.position += 4;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readUnsignedInt = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Uint32Array(this.rawBytes);
	var r;
	if ((this.position & 3) == 0) {
		var np = this.position >> 2;
		r = view[np];
	} else {
		var view3 = new Uint32Array(this.tempUnalignedBuffer, 0, 1);
		var viewA = new Uint8Array(this.rawBytes, this.position, 4);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 4);
		viewB.set(viewA);
		r = view3[0];
	}
	this.position += 4;
	return r;
};

flash.utils.ByteArray.prototype.writeFloat = function(value) {
	this.checkAndResizeBuffer(4, -1, true);
	var view = new Float32Array(this.rawBytes);
	if ((this.position & 3) == 0) {
		view[this.position >> 2] = value;
	} else {
		var view3 = new Float32Array(this.tempUnalignedBuffer, 0, 1);
		view3[0] = value;
		var viewA = new Uint8Array(this.rawBytes, this.position, 4);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 4);
		viewA.set(viewB);
	}
	this.position += 4;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.writeDouble = function(value) {
	this.checkAndResizeBuffer(8, -1, true);
	var view = new Float64Array(this.rawBytes);
	if ((this.position & 7) == 0) {
		view[this.position >> 3] = value;
	} else {
		var view3 = new Float64Array(this.tempUnalignedBuffer, 0, 1);
		view3[0] = value;
		var viewA = new Uint8Array(this.rawBytes, this.position, 8);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 8);
		viewA.set(viewB);
	}
	this.position += 8;
	if (this.position > this.get_length())
		this.set_length(this.position);
};

flash.utils.ByteArray.prototype.readFloat = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Float32Array(this.rawBytes);
	var r;
	if ((this.position & 3) == 0) {
		var np = this.position >> 2;
		r = view[np];
	} else {
		var view3 = new Float32Array(this.tempUnalignedBuffer, 0, 1);
		var viewA = new Uint8Array(this.rawBytes, this.position, 4);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 4);
		viewB.set(viewA);
		r = view3[0];
	}
	this.position += 4;
	return r;
};

flash.utils.ByteArray.prototype.readDouble = function() {
	if (this.position >= this.get_length())
		throw new Error("ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.get_length(), 0);
	var view = new Float64Array(this.rawBytes);
	var r;
	if ((this.position & 7) == 0) {
		var np = this.position >> 3;
		r = view[np];
	} else {
		var view3 = new Float64Array(this.tempUnalignedBuffer, 0, 1);
		var viewA = new Uint8Array(this.rawBytes, this.position, 8);
		var viewB = new Uint8Array(this.tempUnalignedBuffer, 0, 8);
		viewB.set(viewA);
		r = view3[0];
	}
	this.position += 8;
	return r;
};

flash.utils.ByteArray.prototype.readMultiByte = function(length, charSet) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readMultiByte() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readUTF = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTF() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readUTFBytes = function(length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readUTFBytes() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readObject = function() {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readObject() $$$$");
	return null;
};

flash.utils.ByteArray.prototype.readBytes = function(bytes, offset, length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.readBytes() $$$$");
};

flash.utils.ByteArray.prototype.get_objectEncoding = function() {
	return 0;
};

flash.utils.ByteArray.prototype.set_objectEncoding = function(version) {
};

flash.utils.ByteArray.prototype.get_endian = function() {
	return this._endian;
};

flash.utils.ByteArray.prototype.set_endian = function(type) {
	this._endian = type;
};

flash.utils.ByteArray.prototype.writeBytes = function(bytes, offset, length) {
	length = (length == 0) ? bytes.get_length() : length;
	this.checkAndResizeBuffer(length, -1, true);
	var writeTo = new Uint8Array(this.rawBytes, this.position, length);
	var readFrom = new Uint8Array(bytes.rawBytes, offset, length);
	writeTo.set(readFrom);
};

flash.utils.ByteArray.prototype.writeMultiByte = function(value, charSet) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeMultiByte() $$$$");
};

flash.utils.ByteArray.prototype.writeUTF = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTF() $$$$");
};

flash.utils.ByteArray.prototype.writeUTFBytes = function(value) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeUTFBytes() $$$$");
};

flash.utils.ByteArray.prototype.writeObject = function(object) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: ByteArray.writeObject() $$$$");
};

Object.defineProperty(flash.utils.ByteArray.prototype, 'length', {
  get: function() { return this.get_length(); },
  set: function(value) { return this.set_length(value); }
});
Object.defineProperty(flash.utils.ByteArray.prototype, 'objectEncoding', {
  get: function() { return this.get_objectEncoding(); },
  set: function(value) { return this.set_objectEncoding(value); }
});
Object.defineProperty(flash.utils.ByteArray.prototype, 'endian', {
  get: function() { return this.get_endian(); },
  set: function(value) { return this.set_endian(value); }
});
Object.defineProperty(flash.utils.ByteArray.prototype, 'bytesAvailable', {
  get: function() { return this.get_bytesAvailable(); },
  set: function(value) { return this.set_bytesAvailable(value); }
});

flash.utils.ByteArray.className = "flash.utils.ByteArray";

flash.utils.ByteArray.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.utils.ByteArray.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.ByteArray.injectionPoints = function(t) {
	return [];
};
