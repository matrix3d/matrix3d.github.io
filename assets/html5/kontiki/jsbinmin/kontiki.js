/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat Jun 06 14:16:10 CST 2015 */


// ====================================================
// flash.utils.setTimeout
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.setTimeout = function(closure, delay, args) {
	setTimeout($createStaticDelegate(this, closure), delay);
	return 1;
}

flash.utils.setTimeout.className = "flash.utils.setTimeout";

flash.utils.setTimeout.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setTimeout.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setTimeout.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.getClassByAlias
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.getClassByAlias = function() {
}

flash.net.getClassByAlias.className = "flash.net.getClassByAlias";

flash.net.getClassByAlias.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.getClassByAlias.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.getClassByAlias.injectionPoints = function(t) {
	return [];
};

// ====================================================
// trace
// ====================================================


trace = function(s) {
	if (arguments.length > 1)
		console.log(arguments);
	else
		console.log(arguments[0]);
}

trace.className = "trace";

trace.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

trace.getStaticDependencies = function(t) {
	var p;
	return [];
};

trace.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.navigateToURL
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.navigateToURL = function(request, window) {
}

flash.net.navigateToURL.className = "flash.net.navigateToURL";

flash.net.navigateToURL.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.navigateToURL.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.navigateToURL.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.getQualifiedClassName
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getQualifiedClassName = function(value) {
	if (value.className != undefined)
		return value.className;
	var tmp = new value();
	return tmp.constructor.className;
}

flash.utils.getQualifiedClassName.className = "flash.utils.getQualifiedClassName";

flash.utils.getQualifiedClassName.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getQualifiedClassName.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getQualifiedClassName.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.getTimer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getTimer = function() {
	return new Date().getTime() - flash.utils.FlashTimingEngine.currentTime;
}

flash.utils.getTimer.className = "flash.utils.getTimer";

flash.utils.getTimer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.utils.getTimer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getTimer.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.describeType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.describeType = function(value) {
	return avmplus.describeType(value, FLASH10_FLAGS);
}

flash.utils.describeType.className = "flash.utils.describeType";

flash.utils.describeType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.describeType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.describeType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.clearInterval
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.clearInterval = function(id) {
}

flash.utils.clearInterval.className = "flash.utils.clearInterval";

flash.utils.clearInterval.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearInterval.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearInterval.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.setInterval
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.setInterval = function(closure, delay, args) {
	return 1;
}

flash.utils.setInterval.className = "flash.utils.setInterval";

flash.utils.setInterval.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setInterval.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.setInterval.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.getDefinitionByName
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.getDefinitionByName = function(value) {
	var parts = value.split(".");
	var obj = window[parts[0]];
	for (var i = 1; i < parts.length; i++) {
		obj = obj[parts[i]];
	}
	return obj;
}

flash.utils.getDefinitionByName.className = "flash.utils.getDefinitionByName";

flash.utils.getDefinitionByName.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getDefinitionByName.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.getDefinitionByName.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.fscommand
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.fscommand = function(command, args) {
}

flash.system.fscommand.className = "flash.system.fscommand";

flash.system.fscommand.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.fscommand.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.fscommand.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.clearTimeout
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.clearTimeout = function(id) {
}

flash.utils.clearTimeout.className = "flash.utils.clearTimeout";

flash.utils.clearTimeout.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearTimeout.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.clearTimeout.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.AntiAliasType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.AntiAliasType = function() {
	
};

flash.text.AntiAliasType.ADVANCED = "advanced";

flash.text.AntiAliasType.NORMAL = "normal";


flash.text.AntiAliasType.className = "flash.text.AntiAliasType";

flash.text.AntiAliasType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.AntiAliasType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.AntiAliasType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.TextFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFormat = function(font, size, color, bold, italic, underline, url, target, align, leftMargin, rightMargin, indent, leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};


flash.text.TextFormat.className = "flash.text.TextFormat";

flash.text.TextFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormat.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'font', t:'String'});
			p.push({n:'size', t:'Object'});
			p.push({n:'color', t:'Object'});
			p.push({n:'bold', t:'Object'});
			p.push({n:'italic', t:'Object'});
			p.push({n:'underline', t:'Object'});
			p.push({n:'url', t:'String'});
			p.push({n:'target', t:'String'});
			p.push({n:'align', t:'String'});
			p.push({n:'leftMargin', t:'Object'});
			p.push({n:'rightMargin', t:'Object'});
			p.push({n:'indent', t:'Object'});
			p.push({n:'leading', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.HTTPStatusEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.HTTPStatusEvent = function(type, bubbles, cancelable, status) {
	this.status = status;
};

flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";


flash.events.HTTPStatusEvent.className = "flash.events.HTTPStatusEvent";

flash.events.HTTPStatusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.HTTPStatusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.HTTPStatusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'status', t:'int'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.StyleSheet
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.StyleSheet = function() {
};


flash.text.StyleSheet.className = "flash.text.StyleSheet";

flash.text.StyleSheet.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.StyleSheet.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.StyleSheet.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DVertexBufferFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DVertexBufferFormat = function() {
};

flash.display3D.Context3DVertexBufferFormat.BYTES_4 = "bytes4";

flash.display3D.Context3DVertexBufferFormat.FLOAT_1 = "float1";

flash.display3D.Context3DVertexBufferFormat.FLOAT_2 = "float2";

flash.display3D.Context3DVertexBufferFormat.FLOAT_3 = "float3";

flash.display3D.Context3DVertexBufferFormat.FLOAT_4 = "float4";


flash.display3D.Context3DVertexBufferFormat.className = "flash.display3D.Context3DVertexBufferFormat";

flash.display3D.Context3DVertexBufferFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DVertexBufferFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DVertexBufferFormat.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.media.SoundTransform
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundTransform = function(vol, panning) {
	this.soundID = null;
	this._volume = 0;
	this.transforms = null;
	this.buffer = null;
	this.pan = null;
	this.soundID = "SoundTransform" + Math.floor(Math.random() * 0xffff);
};

flash.media.SoundTransform.prototype.get_volume = function() {
	return this._volume;
};

flash.media.SoundTransform.prototype.set_volume = function(value) {
	this._volume = value;
};

flash.media.SoundTransform.prototype.addTransform = function(transform) {
	if (!this.transforms)
		this.transforms = new flash.utils.Dictionary(false);
	this.transforms[transform] = transform;
};

flash.media.SoundTransform.prototype.removeTransform = function(transform) {
	if (!this.transforms)
		return;
	this.transforms[transform] = null;
	delete this.transforms[transform];
};

flash.media.SoundTransform.prototype.toString = function() {
	return this.soundID;
};

Object.defineProperty(flash.media.SoundTransform.prototype, 'volume', {
  get: function() { return this.get_volume(); },
  set: function(value) { return this.set_volume(value); }
});

flash.media.SoundTransform.className = "flash.media.SoundTransform";

flash.media.SoundTransform.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.media.SoundTransform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundTransform.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'vol', t:'Number'});
			p.push({n:'panning', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// ArgumentError
// ====================================================


ArgumentError = function(message) {
	Error.call(this, message, 0);
};


$inherit(ArgumentError, Error);

ArgumentError.className = "ArgumentError";

ArgumentError.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

ArgumentError.getStaticDependencies = function(t) {
	var p;
	return [];
};

ArgumentError.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'message', t:'Object'});
			break;
		case 1:
			p = Error.injectionPoints(t);
			break;
		case 2:
			p = Error.injectionPoints(t);
			break;
		case 3:
			p = Error.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.errors.IllegalOperationError
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.errors == "undefined")
	flash.errors = {};

flash.errors.IllegalOperationError = function(message, id) {
	Error.call(this, message, id);
};


$inherit(flash.errors.IllegalOperationError, Error);

flash.errors.IllegalOperationError.className = "flash.errors.IllegalOperationError";

flash.errors.IllegalOperationError.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.errors.IllegalOperationError.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.errors.IllegalOperationError.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'message', t:'Object'});
			p.push({n:'id', t:'Object'});
			break;
		case 1:
			p = Error.injectionPoints(t);
			break;
		case 2:
			p = Error.injectionPoints(t);
			break;
		case 3:
			p = Error.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.Font
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.Font = function() {
};


flash.text.Font.className = "flash.text.Font";

flash.text.Font.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.Font.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.Font.injectionPoints = function(t) {
	return [];
};

// ====================================================
// mx.core.FontAsset
// ====================================================

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


// ====================================================
// flash.display.cmds.Cmd
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};
if (typeof flash.display.cmds == "undefined")
	flash.display.cmds = {};

flash.display.cmds.Cmd = function(cmd, args) {
	this._ctx = null;
	this.cmd = cmd;
	this.args = args;
};

flash.display.cmds.Cmd._ctx;

flash.display.cmds.Cmd.prototype.update = function() {
	this.cmd.apply(flash.display.cmds.Cmd.get_ctx(), this.args);
};

flash.display.cmds.Cmd.get_ctx = function() {
	if (flash.display.cmds.Cmd._ctx == null) {
		var g = new flash.display.Graphics();
		flash.display.cmds.Cmd._ctx = g.getCanvas();
	}
	return flash.display.cmds.Cmd._ctx;
};


flash.display.cmds.Cmd.className = "flash.display.cmds.Cmd";

flash.display.cmds.Cmd.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.cmds.Cmd.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.cmds.Cmd.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'cmd', t:'Function'});
			p.push({n:'args', t:'Array'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.cmds.SetAttribCmd
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};
if (typeof flash.display.cmds == "undefined")
	flash.display.cmds = {};

flash.display.cmds.SetAttribCmd = function(target, name, value) {
	flash.display.cmds.Cmd.call(this, null, null);
	this.target = target;
	this.name = name;
	this.value = value;
	this.update();
};

flash.display.cmds.SetAttribCmd.prototype.update = function() {
	this.target[this.name] = this.value;
};


$inherit(flash.display.cmds.SetAttribCmd, flash.display.cmds.Cmd);

flash.display.cmds.SetAttribCmd.className = "flash.display.cmds.SetAttribCmd";

flash.display.cmds.SetAttribCmd.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.cmds.SetAttribCmd.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.cmds.SetAttribCmd.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'Object'});
			p.push({n:'name', t:'String'});
			p.push({n:'value', t:'Object'});
			break;
		case 1:
			p = flash.display.cmds.Cmd.injectionPoints(t);
			break;
		case 2:
			p = flash.display.cmds.Cmd.injectionPoints(t);
			break;
		case 3:
			p = flash.display.cmds.Cmd.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.cmds.SetColorAttribCmd
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};
if (typeof flash.display.cmds == "undefined")
	flash.display.cmds = {};

flash.display.cmds.SetColorAttribCmd = function(target, name, color, alpha, sprite) {
	this.color = color;
	this.alpha = alpha;
	this.sprite = sprite;
	flash.display.cmds.SetAttribCmd.call(this, target, name, null);
};

flash.display.cmds.SetColorAttribCmd.prototype.update = function() {
	this.value = "rgba(" + (this.color >> 16 & 0xff) + "," + (this.color >> 8 & 0xff) + "," + (this.color & 0xff) + "," + this.alpha * this.sprite.alpha + ")";
	flash.display.cmds.SetAttribCmd.prototype.update.call(this);
};


$inherit(flash.display.cmds.SetColorAttribCmd, flash.display.cmds.SetAttribCmd);

flash.display.cmds.SetColorAttribCmd.className = "flash.display.cmds.SetColorAttribCmd";

flash.display.cmds.SetColorAttribCmd.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.cmds.SetColorAttribCmd.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.cmds.SetColorAttribCmd.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'Object'});
			p.push({n:'name', t:'String'});
			p.push({n:'color', t:'uint'});
			p.push({n:'alpha', t:'Number'});
			p.push({n:'sprite', t:'flash.display.DisplayObject'});
			break;
		case 1:
			p = flash.display.cmds.SetAttribCmd.injectionPoints(t);
			break;
		case 2:
			p = flash.display.cmds.SetAttribCmd.injectionPoints(t);
			break;
		case 3:
			p = flash.display.cmds.SetAttribCmd.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.cmds.SetBitmapAttribCmd
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};
if (typeof flash.display.cmds == "undefined")
	flash.display.cmds = {};

flash.display.cmds.SetBitmapAttribCmd = function(target, name, bmd, matrix, repeat, sprite) {
	this.worldMatrix = null;
	this.bmd = bmd;
	this.sprite = sprite;
	this.matrix = matrix;
	this.worldMatrix = new flash.geom.Matrix(1, 0, 0, 1, 0, 0);
	this.repeat = repeat;
	flash.display.cmds.SetAttribCmd.call(this, target, name, null);
};

flash.display.cmds.SetBitmapAttribCmd.prototype.update = function() {
	this.value = this.bmd.noRepeatPatern;
	flash.display.cmds.SetAttribCmd.prototype.update.call(this);
};


$inherit(flash.display.cmds.SetBitmapAttribCmd, flash.display.cmds.SetAttribCmd);

flash.display.cmds.SetBitmapAttribCmd.className = "flash.display.cmds.SetBitmapAttribCmd";

flash.display.cmds.SetBitmapAttribCmd.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Matrix');
	return p;
};

flash.display.cmds.SetBitmapAttribCmd.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.cmds.SetBitmapAttribCmd.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'Object'});
			p.push({n:'name', t:'String'});
			p.push({n:'bmd', t:'flash.display.BitmapData'});
			p.push({n:'matrix', t:'Object'});
			p.push({n:'repeat', t:'Boolean'});
			p.push({n:'sprite', t:'flash.display.DisplayObject'});
			break;
		case 1:
			p = flash.display.cmds.SetAttribCmd.injectionPoints(t);
			break;
		case 2:
			p = flash.display.cmds.SetAttribCmd.injectionPoints(t);
			break;
		case 3:
			p = flash.display.cmds.SetAttribCmd.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Graphics
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Graphics = function() {
this.cmds = [];
this.sprite = null;
this.canvas = null;
this.lineing = null;
this.fillingBmdCmd = null;
this.filling = null;
};

flash.display.Graphics.prototype.getCanvas = function() {
	if (!this.canvas) {
		this.canvas = document.getElementById("stage");
	}
	return this.canvas.getContext("2d");
};

flash.display.Graphics.prototype.beginFill = function(color, alpha) {
	this.cmds.push(new flash.display.cmds.SetColorAttribCmd(this.getCanvas(), "fillStyle", color, alpha, this.sprite), new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().beginPath), null), new flash.display.cmds.SetAttribCmd(this, "filling", true), new flash.display.cmds.SetAttribCmd(this, "fillingBmdCmd", null));
};

flash.display.Graphics.prototype.beginBitmapFill = function(bitmap, matrix, repeat, smooth) {
	var cmd = new flash.display.cmds.SetBitmapAttribCmd(this.getCanvas(), "fillStyle", bitmap, matrix, repeat, this.sprite);
	this.cmds.push(cmd, new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().beginPath), null), new flash.display.cmds.SetAttribCmd(this, "filling", true), new flash.display.cmds.SetAttribCmd(this, "fillingBmdCmd", cmd));
};

flash.display.Graphics.prototype.beginGradientFill = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginGradientFill() $$$$");
};

flash.display.Graphics.prototype.clear = function() {
	this.filling = false;
	this.lineing = false;
	this.cmds = [];
};

flash.display.Graphics.prototype.drawCircle = function(x, y, radius) {
	this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().beginPath), null), new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().arc), [x, y, radius, 0, 3.141592653589793 * 2]), new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().closePath), null), new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().fill), null));
};

flash.display.Graphics.prototype.drawRect = function(x, y, width, height) {
	this.moveTo(x, y);
	this.lineTo(x + width, y);
	this.lineTo(x + width, y + height);
	this.lineTo(x, y + height);
	this.lineTo(x, y);
};

flash.display.Graphics.prototype.drawRoundRect = function(x, y, width, height, ellipseWidth, ellipseHeight) {
};

flash.display.Graphics.prototype.drawGraphicsData = function(graphicsData) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawGraphicsData() $$$$");
};

flash.display.Graphics.prototype.endFill = function() {
	this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().closePath), null), new flash.display.cmds.SetAttribCmd(this, "filling", false));
	if (this.filling) {
		this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().fill), null));
	}
};

flash.display.Graphics.prototype.lineStyle = function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit) {
	if (this.lineing)
		this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().stroke), null));
	this.cmds.push(new flash.display.cmds.SetAttribCmd(this.getCanvas(), "lineWidth", thickness), new flash.display.cmds.SetColorAttribCmd(this.getCanvas(), "strokeStyle", color, alpha, this.sprite), new flash.display.cmds.SetAttribCmd(this, "lineing", !isNaN(thickness)));
};

flash.display.Graphics.prototype.lineGradientStyle = function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineGradientStyle() $$$$");
};

flash.display.Graphics.prototype.lineTo = function(x, y) {
	this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().lineTo), [x, y]));
};

flash.display.Graphics.prototype.moveTo = function(x, y) {
	this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().moveTo), [x, y]));
};

flash.display.Graphics.prototype.drawEllipse = function(x, y, width, height) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawEllipse() $$$$");
};

flash.display.Graphics.prototype.copyFrom = function(g) {
	this.cmds = g.cmds.concat();
};

flash.display.Graphics.prototype.curveTo = function(controlX, controlY, anchorX, anchorY) {
	this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().quadraticCurveTo), [controlX, controlY, anchorX, anchorY]));
};

flash.display.Graphics.prototype.cubicCurveTo = function(controlX1, controlY1, controlX2, controlY2, anchorX, anchorY) {
	this.cmds.push(new flash.display.cmds.Cmd($createStaticDelegate(this.getCanvas(), this.getCanvas().bezierCurveTo), [controlX1, controlY1, controlX2, controlY2, anchorX, anchorY]));
};

flash.display.Graphics.prototype.updateGraphics = function() {
	var m = this.sprite.transform.worldMatrix;
	this.getCanvas().setTransform(m.a, m.b, m.c, m.d, m.tx, m.ty);
	this.lineing = false;
	this.filling = false;
	if (!this.filling)
		this.getCanvas().beginPath();
	var $n0;
	for (var $v0 in ($n0 = this.cmds)) {
		var cmd = $n0[$v0];
		cmd.update()
	}
	this.getCanvas().closePath();
	if (this.filling) {
		if (this.fillingBmdCmd != null && this.fillingBmdCmd.matrix != null) {
		} else {
			this.getCanvas().fill();
		}
	}
	if (this.lineing)
		this.getCanvas().stroke();
};


flash.display.Graphics.className = "flash.display.Graphics";

flash.display.Graphics.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.cmds.Cmd');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.geom.Matrix');
	p.push('flash.display.cmds.SetAttribCmd');
	p.push('flash.display.cmds.SetColorAttribCmd');
	p.push('flash.display.cmds.SetBitmapAttribCmd');
	return p;
};

flash.display.Graphics.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Graphics.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.JXONTree
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.JXONTree = function(oXMLParent) {
	this.keyValue = null;
	this.keyAttributes = null;
	this.keyLength = 0;
	this.nLength = 0;
	this.nAttrLen = 0;
	this._localName = null;
	this.nAttrLen = 0;
	this.nLength = 0;
	var sCollectedTxt = "";
	this._localName = oXMLParent.localName;
	if (oXMLParent.hasChildNodes()) {
		var oNode;
		var sProp;
		var vContent;
		for (var nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
			oNode = oXMLParent.childNodes.item(nItem);
			if ((oNode.nodeType - 1 | 1) === 3) {
				sCollectedTxt += (oNode.nodeType === 3) ? oNode.nodeValue.trim() : oNode.nodeValue;
			} else if (oNode.nodeType === 1 && !oNode.prefix) {
				sProp = oNode.nodeName;
				vContent = new flash.utils.JXONTree(oNode);
				if (this.hasOwnProperty(sProp)) {
					if (this[sProp].constructor !== Array) {
						this[sProp] = [this[sProp]];
					}
					this[sProp].push(vContent);
				} else {
					this[sProp] = vContent;
					this.nLength++;
				}
			}
		}
		this.keyValue = this.parseText(sCollectedTxt);
	} else {
		this.keyValue = null;
	}
	if (oXMLParent.hasAttributes()) {
		var oAttrib;
		this.keyAttributes = {};
		for (this.nAttrLen; this.nAttrLen < oXMLParent.attributes.length; this.nAttrLen++) {
			oAttrib = oXMLParent.attributes.item(this.nAttrLen);
			this.keyAttributes[oAttrib.name] = this.parseText(oAttrib.value.trim());
		}
	}
};

flash.utils.JXONTree.prototype.parseText = function(sValue) {
	if (/^\s*$/.test(sValue)) {
		return null;
	}
	if (/^(?:true|false)$/i.test(sValue)) {
		return sValue.toLowerCase() === "true";
	}
	if (isFinite(sValue)) {
		return parseFloat(sValue);
	}
	if (isFinite(Date.parse(sValue))) {
		return new Date(sValue);
	}
	return sValue;
};

flash.utils.JXONTree.prototype.valueOf = function() {
	return this.keyValue;
};

flash.utils.JXONTree.prototype.toString = function() {
	return this.keyValue;
};

flash.utils.JXONTree.prototype.getItem = function(nItem) {
	if (this.nLength === 0) {
		return null;
	}
	var nCount = 0;
	for (var sKey in this) {
		if (nCount === nItem) {
			return this[sKey];
		}
		nCount++;
	}
	return null;
};

flash.utils.JXONTree.prototype.localName = function() {
	return this._localName;
};

flash.utils.JXONTree.prototype.attribute = function(nAttrId) {
	if (this.nAttrLen === 0 || nAttrId + 1 > this.nAttrLen) {
		return null;
	}
	for (var sAttrName in this.keyAttributes) {
		if (sAttrName === nAttrId) {
			return this.keyAttributes[sAttrName];
		}
	}
	return null;
};

flash.utils.JXONTree.prototype.hasChildren = function() {
	return this.keyLength > 0;
};


flash.utils.JXONTree.className = "flash.utils.JXONTree";

flash.utils.JXONTree.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.JXONTree.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.JXONTree.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'oXMLParent', t:'Element'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3DCompareMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DCompareMode = function() {
};

flash.display3D.Context3DCompareMode.ALWAYS = "always";

flash.display3D.Context3DCompareMode.EQUAL = "equal";

flash.display3D.Context3DCompareMode.GREATER = "greater";

flash.display3D.Context3DCompareMode.GREATER_EQUAL = "greaterEqual";

flash.display3D.Context3DCompareMode.LESS = "less";

flash.display3D.Context3DCompareMode.LESS_EQUAL = "lessEqual";

flash.display3D.Context3DCompareMode.NEVER = "never";

flash.display3D.Context3DCompareMode.NOT_EQUAL = "notEqual";


flash.display3D.Context3DCompareMode.className = "flash.display3D.Context3DCompareMode";

flash.display3D.Context3DCompareMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DCompareMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DCompareMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.Keyboard
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.Keyboard = function() {
};

flash.ui.Keyboard.A = 65;

flash.ui.Keyboard.B = 66;

flash.ui.Keyboard.BACKQUOTE = 192;

flash.ui.Keyboard.BACKSPACE = 8;

flash.ui.Keyboard.BACKSLASH = 220;

flash.ui.Keyboard.C = 67;

flash.ui.Keyboard.D = 68;

flash.ui.Keyboard.E = 69;

flash.ui.Keyboard.END = 35;

flash.ui.Keyboard.F = 70;

flash.ui.Keyboard.G = 71;

flash.ui.Keyboard.H = 72;

flash.ui.Keyboard.HOME = 36;

flash.ui.Keyboard.I = 73;

flash.ui.Keyboard.J = 74;

flash.ui.Keyboard.K = 75;

flash.ui.Keyboard.L = 76;

flash.ui.Keyboard.M = 77;

flash.ui.Keyboard.N = 78;

flash.ui.Keyboard.NUMBER_0 = 48;

flash.ui.Keyboard.NUMBER_9 = 57;

flash.ui.Keyboard.O = 79;

flash.ui.Keyboard.P = 80;

flash.ui.Keyboard.Q = 81;

flash.ui.Keyboard.R = 82;

flash.ui.Keyboard.S = 83;

flash.ui.Keyboard.SPACE = 32;

flash.ui.Keyboard.T = 84;

flash.ui.Keyboard.U = 85;

flash.ui.Keyboard.V = 86;

flash.ui.Keyboard.W = 87;

flash.ui.Keyboard.X = 88;

flash.ui.Keyboard.Y = 89;

flash.ui.Keyboard.Z = 90;

flash.ui.Keyboard.ENTER = 13;

flash.ui.Keyboard.RIGHT = 39;

flash.ui.Keyboard.LEFT = 37;

flash.ui.Keyboard.DOWN = 40;

flash.ui.Keyboard.UP = 38;

flash.ui.Keyboard.TAB = 9;

flash.ui.Keyboard.CONTROL = 17;

flash.ui.Keyboard.ESCAPE = 27;

flash.ui.Keyboard.capsLock = false;

flash.ui.Keyboard.numLock = false;

flash.ui.Keyboard.hasVirtualKeyboard = false;


flash.ui.Keyboard.className = "flash.ui.Keyboard";

flash.ui.Keyboard.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Keyboard.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Keyboard.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.FileReference
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.FileReference = function() {
this.name = "";
};


flash.net.FileReference.className = "flash.net.FileReference";

flash.net.FileReference.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.FileReference.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.FileReference.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DClearMask
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DClearMask = function() {
	
};

flash.display3D.Context3DClearMask.COLOR = 16384;

flash.display3D.Context3DClearMask.DEPTH = 256;

flash.display3D.Context3DClearMask.STENCIL = 1024;

flash.display3D.Context3DClearMask.ALL = ~~(16384) | ~~(256) | ~~(1024);


flash.display3D.Context3DClearMask.className = "flash.display3D.Context3DClearMask";

flash.display3D.Context3DClearMask.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DClearMask.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DClearMask.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.Dictionary
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Dictionary = function(weakReference) {
};


flash.utils.Dictionary.className = "flash.utils.Dictionary";

flash.utils.Dictionary.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Dictionary.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Dictionary.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'weakReference', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.profiler.showRedrawRegions
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.profiler == "undefined")
	flash.profiler = {};

flash.profiler.showRedrawRegions = function() {
};


flash.profiler.showRedrawRegions.className = "flash.profiler.showRedrawRegions";

flash.profiler.showRedrawRegions.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.profiler.showRedrawRegions.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.profiler.showRedrawRegions.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DProgramType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DProgramType = function() {
};

flash.display3D.Context3DProgramType.FRAGMENT = "fragment";

flash.display3D.Context3DProgramType.VERTEX = "vertex";


flash.display3D.Context3DProgramType.className = "flash.display3D.Context3DProgramType";

flash.display3D.Context3DProgramType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DProgramType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DProgramType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Context3DBlendFactor
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DBlendFactor = function() {
};

flash.display3D.Context3DBlendFactor.DESTINATION_ALPHA = "destinationAlpha";

flash.display3D.Context3DBlendFactor.DESTINATION_COLOR = "destinationColor";

flash.display3D.Context3DBlendFactor.ONE = "one";

flash.display3D.Context3DBlendFactor.ONE_MINUS_DESTINATION_ALPHA = "oneMinusDestinationAlpha";

flash.display3D.Context3DBlendFactor.ONE_MINUS_DESTINATION_COLOR = "oneMinusDestinationColor";

flash.display3D.Context3DBlendFactor.ONE_MINUS_SOURCE_ALPHA = "oneMinusSourceAlpha";

flash.display3D.Context3DBlendFactor.ONE_MINUS_SOURCE_COLOR = "oneMinusSourceColor";

flash.display3D.Context3DBlendFactor.SOURCE_ALPHA = "sourceAlpha";

flash.display3D.Context3DBlendFactor.SOURCE_COLOR = "sourceColor";

flash.display3D.Context3DBlendFactor.ZERO = "zero";


flash.display3D.Context3DBlendFactor.className = "flash.display3D.Context3DBlendFactor";

flash.display3D.Context3DBlendFactor.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DBlendFactor.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DBlendFactor.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Orientation3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Orientation3D = function() {
};


flash.geom.Orientation3D.className = "flash.geom.Orientation3D";

flash.geom.Orientation3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Orientation3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Orientation3D.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.Program3D
// ====================================================

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


// ====================================================
// flash.display3D.Context3DTextureFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DTextureFormat = function() {
};

flash.display3D.Context3DTextureFormat.BGRA = "bgra";

flash.display3D.Context3DTextureFormat.COMPRESSED = "compress";

flash.display3D.Context3DTextureFormat.COMPRESSED_ALPHA = "compressedAlpha";


flash.display3D.Context3DTextureFormat.className = "flash.display3D.Context3DTextureFormat";

flash.display3D.Context3DTextureFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTextureFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTextureFormat.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.Multitouch
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.Multitouch = function() {
};

flash.ui.Multitouch.inputMode;


flash.ui.Multitouch.className = "flash.ui.Multitouch";

flash.ui.Multitouch.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Multitouch.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Multitouch.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.GraphicsPath
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GraphicsPath = function(commands, data, winding) {
};


flash.display.GraphicsPath.className = "flash.display.GraphicsPath";

flash.display.GraphicsPath.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPath.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPath.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'commands', t:'Array'});
			p.push({n:'data', t:'Array'});
			p.push({n:'winding', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.StageAlign
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageAlign = function() {
};

flash.display.StageAlign.TOP_LEFT = "topLeft";


flash.display.StageAlign.className = "flash.display.StageAlign";

flash.display.StageAlign.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageAlign.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageAlign.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.events.EventDispatcher
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.EventDispatcher = function(target) {
	this.listeners = new flash.utils.Dictionary(false);
	this._name = "";
	this.queueEvents = new flash.utils.Dictionary(false);
	this._target = null;
	this._target = target;
	this._name = "instanceED" + flash.events.EventDispatcher.count++;
};

flash.events.EventDispatcher.fireGlobalEvent = function(event) {
	if (!flash.events.EventDispatcher.staticListeners)
		flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
	if (flash.events.EventDispatcher.staticListeners[event.get_type()]) {
		var arr = flash.events.EventDispatcher.staticListeners[event.get_type()];
		if (arr == null)
			return;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].listener != null) {
				arr[i].listener.apply(arr[i].instance, [event]);
			}
			if (event.get_bubbles() && arr[i].instance instanceof flash.display.DisplayObjectContainer) {
				var doc = arr[i].instance;
				doc.bubbleEvent(event);
			}
		}
	}
};

flash.events.EventDispatcher.staticListeners;

flash.events.EventDispatcher.count = 1;

flash.events.EventDispatcher.prototype.addEventListener = function(type, listener, useCapture, priority, useWeakReference) {
	if (!this.listeners[type]) {
		this.listeners[type] = [];
	}
	if (type == "enterFrame") {
		if (!flash.events.EventDispatcher.staticListeners)
			flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
		if (!flash.events.EventDispatcher.staticListeners[type])
			flash.events.EventDispatcher.staticListeners[type] = [];
		flash.events.EventDispatcher.staticListeners[type].push({instance:this, listener:listener, priority:priority});
	}
	var l;
	var i;
	var indexOfPriority = 0;
	l = this.listeners[type].length;
	for (i = 0; i < l; i++) {
		if (this.listeners[type][i].priority >= priority)
			indexOfPriority = i + 1;
		if (this.listeners[type][i].listener == listener)
			return;
	}
	if (indexOfPriority < l)
		this.listeners[type].splice(indexOfPriority, 0, {listener:listener, priority:priority});
	else
		this.listeners[type].push({listener:listener, priority:priority});
	if (this.queueEvents[type]) {
		while (this.queueEvents[type].length > 0)
			this.dispatchEvent(this.queueEvents[type].shift());
	}
};

flash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.listeners[type] && this.listeners[type].length > 0;
};

flash.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.listeners[type] && this.listeners[type].length > 0;
};

flash.events.EventDispatcher.prototype.removeEventListener = function(type, listener, useCapture) {
	if (!flash.events.EventDispatcher.staticListeners)
		flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
	if (!this.listeners[type]) {
		return;
	}
	var l;
	var i;
	if (type == "enterFrame") {
		l = flash.events.EventDispatcher.staticListeners[type].length;
		for (i = 0; i < l; i++) {
			if (flash.events.EventDispatcher.staticListeners[type][i].listener == listener) {
				flash.events.EventDispatcher.staticListeners[type].splice(i, 1);
				break;
			}
		}
	}
	l = this.listeners[type].length;
	for (i = 0; i < l; i++) {
		if (this.listeners[type][i].listener == listener) {
			this.listeners[type].splice(i, 1);
			return;
		}
	}
};

flash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if (this.listeners[event.get_type()]) {
		var arr = this.listeners[event.get_type()];
		if (arr == null)
			return false;
		if (!event.target)
			event.target = this;
		event.currentTarget = this;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].listener != null)
				arr[i].listener.apply(this, [event]);
			if (event.get_bubbles() && this instanceof flash.display.DisplayObjectContainer) {
				var doc = this;
				doc.bubbleEvent(event);
			}
		}
	} else {
		if (!this.queueEvents[event.get_type()])
			this.queueEvents[event.get_type()] = [];
		this.queueEvents[event.get_type()].push(event);
	}
	return true;
};

flash.events.EventDispatcher.prototype.toString = function() {
	return this._name;
};


flash.events.EventDispatcher.className = "flash.events.EventDispatcher";

flash.events.EventDispatcher.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.events.EventDispatcher.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.events.EventDispatcher.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.DisplayObject
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.DisplayObject = function() {
	this.domElement = null;
	this.loaderInfo = new flash.display.LoaderInfo();
	this._parent2 = null;
	this.scaleX = 1;
	this.scaleY = 1;
	this.rect = new flash.geom.Rectangle(0, 0, 0, 0);
	this.transform = null;
	this._visible = true;
	this.alpha = 1.0;
	this.root = null;
	this.cacheAsBitmap = false;
	this._width = 0;
	this.mask = null;
	this._rotation = 0;
	this.filters = [];
	this._height = 0;
	this._mouseY = 0;
	this.p = new flash.geom.Point(0, 0);
	this._mouseX = 0;
	this.name = "";
	this._x = 0;
	this._y = 0;
	flash.events.EventDispatcher.call(this);
	this.name = "Instance" + flash.display.DisplayObject.instanceCounter++;
	this.transform = new flash.geom.Transform();
	this.transform.target = this;
};

flash.display.DisplayObject.prototype.get_visible = function() {
	return this._visible;
};

flash.display.DisplayObject.prototype.set_visible = function(value) {
	this._visible = value;
};

flash.display.DisplayObject.instanceCounter = 0;

flash.display.DisplayObject.prototype.get_mouseY = function() {
	return this._mouseY;
};

flash.display.DisplayObject.prototype.set_mouseY = function(value) {
	this._mouseY = value;
};

flash.display.DisplayObject.prototype.get_mouseX = function() {
	return this._mouseX;
};

flash.display.DisplayObject.prototype.set_mouseX = function(value) {
	this._mouseX = value;
};

flash.display.DisplayObject.prototype.get_parent = function() {
	return this._parent2;
};

flash.display.DisplayObject.prototype.get_rotation = function() {
	return this._rotation;
};

flash.display.DisplayObject.prototype.set_rotation = function(value) {
	this._rotation = value;
};

flash.display.DisplayObject.prototype.get_stage = function() {
	return flash.utils.FlashTimingEngine.stageInstance;
};

flash.display.DisplayObject.prototype.get_width = function() {
	return this._width;
};

flash.display.DisplayObject.prototype.set_width = function(value) {
	this._width = value;
};

flash.display.DisplayObject.prototype.get_height = function() {
	return this._height;
};

flash.display.DisplayObject.prototype.set_height = function(value) {
	this._height = value;
};

flash.display.DisplayObject.prototype.get_x = function() {
	return this._x;
};

flash.display.DisplayObject.prototype.set_x = function(value) {
	this._x = value;
};

flash.display.DisplayObject.prototype.get_y = function() {
	return this._y;
};

flash.display.DisplayObject.prototype.set_y = function(value) {
	this._y = value;
};

flash.display.DisplayObject.prototype.getRect = function(targetCoordinateSpace) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getRect() $$$$");
	return new flash.geom.Rectangle(0, 0, 10, 10);
};

flash.display.DisplayObject.prototype.localToGlobal = function(point) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.localToGlobal() $$$$");
	return this.p;
};

flash.display.DisplayObject.prototype.getBounds = function(targetCoordinateSpace) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getBounds() $$$$");
	return this.rect;
};

flash.display.DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.hitTestPoint() $$$$");
	return true;
};

flash.display.DisplayObject.prototype.toString = function() {
	return this.name;
};

flash.display.DisplayObject.prototype.updateGraphics = function() {
	this.transform.matrix.identity();
	this.transform.matrix.scale(this.scaleX, this.scaleY);
	this.transform.matrix.rotate(this.get_rotation() * 3.141592653589793 / 180);
	this.transform.matrix.translate(this.get_x(), this.get_y());
	if (this.get_parent()) {
		this.transform.worldMatrix.copyFrom(this.get_parent().transform.worldMatrix);
		this.transform.worldMatrix.concat(this.transform.matrix);
	} else {
		this.transform.worldMatrix.copyFrom(this.transform.matrix);
	}
};

Object.defineProperty(flash.display.DisplayObject.prototype, 'mouseX', {
  get: function() { return this.get_mouseX(); },
  set: function(value) { return this.set_mouseX(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'parent', {
  get: function() { return this.get_parent(); },
  set: function(value) { return this.set_parent(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'visible', {
  get: function() { return this.get_visible(); },
  set: function(value) { return this.set_visible(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'stage', {
  get: function() { return this.get_stage(); },
  set: function(value) { return this.set_stage(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'mouseY', {
  get: function() { return this.get_mouseY(); },
  set: function(value) { return this.set_mouseY(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'rotation', {
  get: function() { return this.get_rotation(); },
  set: function(value) { return this.set_rotation(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'width', {
  get: function() { return this.get_width(); },
  set: function(value) { return this.set_width(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'x', {
  get: function() { return this.get_x(); },
  set: function(value) { return this.set_x(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'y', {
  get: function() { return this.get_y(); },
  set: function(value) { return this.set_y(value); }
});
Object.defineProperty(flash.display.DisplayObject.prototype, 'height', {
  get: function() { return this.get_height(); },
  set: function(value) { return this.set_height(value); }
});

$inherit(flash.display.DisplayObject, flash.events.EventDispatcher);

flash.display.DisplayObject.className = "flash.display.DisplayObject";

flash.display.DisplayObject.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Transform');
	p.push('flash.geom.Rectangle');
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display.DisplayObject.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.LoaderInfo');
	p.push('flash.geom.Rectangle');
	p.push('flash.geom.Point');
	return p;
};

flash.display.DisplayObject.injectionPoints = function(t) {
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


// ====================================================
// flash.display.InteractiveObject
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.InteractiveObject = function() {
this.mouseEnabled = false;
this.tabEnabled = false;
flash.display.DisplayObject.call(this);
};


$inherit(flash.display.InteractiveObject, flash.display.DisplayObject);

flash.display.InteractiveObject.className = "flash.display.InteractiveObject";

flash.display.InteractiveObject.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.InteractiveObject.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.InteractiveObject.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.DisplayObjectContainer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.DisplayObjectContainer = function() {
this.children = [];
this.tabChildren = false;
this.mouseChildren = false;
flash.display.InteractiveObject.call(this);
};

flash.display.DisplayObjectContainer.prototype.get_numChildren = function() {
	return this.children.length;
};

flash.display.DisplayObjectContainer.prototype.addChild = function(child) {
	child._parent2 = this;
	this.addChildAt(child, this.children.length);
	return child;
};

flash.display.DisplayObjectContainer.prototype.addChildAt = function(child, index) {
	if (!child.root)
		child.root = flash.utils.FlashTimingEngine.root;
	if (child.get_parent())
		child.get_parent().removeChild(child);
	child._parent2 = this;
	this.children.splice(index, 0, child);
	if (child.domElement) {
		var element = (!this.domElement || !this.get_parent()) ? document.body : this.domElement;
		element.appendChild(child.domElement);
	}
	return child;
};

flash.display.DisplayObjectContainer.prototype.getChildAt = function(index) {
	return this.children[index];
};

flash.display.DisplayObjectContainer.prototype.getChildIndex = function(child) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] == child)
			return i;
	}
	return -1;
};

flash.display.DisplayObjectContainer.prototype.getChildByName = function(name) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.getChildByName() $$$$");
	return null;
};

flash.display.DisplayObjectContainer.prototype.setChildIndex = function(child, index) {
	this.removeChild(child);
	this.addChildAt(child, index);
};

flash.display.DisplayObjectContainer.prototype.swapChildren = function(child1, child2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildren() $$$$");
};

flash.display.DisplayObjectContainer.prototype.swapChildrenAt = function(index1, index2) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObjectContainer.swapChildrenAt() $$$$");
};

flash.display.DisplayObjectContainer.prototype.contains = function(child) {
	return this.getChildIndex(child) > -1;
};

flash.display.DisplayObjectContainer.prototype.removeChild = function(child) {
	child._parent2 = null;
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] == child) {
			return this.removeChildAt(i);
		}
	}
	return child;
};

flash.display.DisplayObjectContainer.prototype.removeChildAt = function(index) {
	var c = this.children[index];
	c._parent2 = null;
	this.children.splice(index, 1);
	return c;
};

flash.display.DisplayObjectContainer.prototype.bubbleEvent = function(event) {
	for (var i = 0; i < this.children.length; i++) {
		if (this.children[i] instanceof flash.events.EventDispatcher)
			this.children[i].dispatchEvent(event);
	}
};

flash.display.DisplayObjectContainer.prototype.updateGraphics = function() {
	flash.display.InteractiveObject.prototype.updateGraphics.call(this);
	var $n0;
	for (var $v0 in ($n0 = this.children)) {
		var c = $n0[$v0];
		c.updateGraphics()
	}
};

Object.defineProperty(flash.display.DisplayObjectContainer.prototype, 'numChildren', {
  get: function() { return this.get_numChildren(); },
  set: function(value) { return this.set_numChildren(value); }
});

$inherit(flash.display.DisplayObjectContainer, flash.display.InteractiveObject);

flash.display.DisplayObjectContainer.className = "flash.display.DisplayObjectContainer";

flash.display.DisplayObjectContainer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.DisplayObject');
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.display.DisplayObjectContainer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.DisplayObjectContainer.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Loader
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Loader = function() {
	this.image = null;
	this.contentLoaderInfo = null;
	this.content = null;
	this.contentLoaderInfo = new flash.display.LoaderInfo();
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Loader.prototype.close = function() {
};

flash.display.Loader.prototype.load = function(request, context) {
	this.contentLoaderInfo.url = request.url;
	this.image = new Image();
	this.image.addEventListener("load", $createStaticDelegate(this, this.onload));
	this.image.src = request.url;
};

flash.display.Loader.prototype.onload = function(e) {
	var bitmap = new flash.display.Bitmap(new flash.display.BitmapData(0, 9, true, 0), "auto", false);
	bitmap.set_width(this.image.width);
	bitmap.set_height(this.image.height);
	bitmap.bitmapData.image = this.image;
	bitmap.bitmapData.width = this.image.width;
	bitmap.bitmapData.height = this.image.height;
	bitmap.bitmapData.updatePatern();
	this.content = bitmap;
	this.contentLoaderInfo.dispatchEvent(new flash.events.Event("complete", false, false));
};

flash.display.Loader.prototype.loadBytes = function(bytes, context) {
};

flash.display.Loader.prototype.unload = function() {
};

flash.display.Loader.prototype.unloadAndStop = function(gc) {
};


$inherit(flash.display.Loader, flash.display.DisplayObjectContainer);

flash.display.Loader.className = "flash.display.Loader";

flash.display.Loader.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.LoaderInfo');
	p.push('flash.display.Bitmap');
	p.push('flash.display.BitmapData');
	p.push('flash.events.Event');
	return p;
};

flash.display.Loader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Loader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Sprite
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Sprite = function() {
	this.hitArea = null;
	this.useHandCursor = false;
	this.buttonMode = false;
	this._graphics = null;
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Sprite.prototype.get_graphics = function() {
	if (!this._graphics) {
		this._graphics = new flash.display.Graphics();
		this._graphics.sprite = this;
	}
	return this._graphics;
};

flash.display.Sprite.prototype.updateGraphics = function() {
	flash.display.DisplayObjectContainer.prototype.updateGraphics.call(this);
	this.get_graphics().updateGraphics();
};

Object.defineProperty(flash.display.Sprite.prototype, 'graphics', {
  get: function() { return this.get_graphics(); },
  set: function(value) { return this.set_graphics(value); }
});

$inherit(flash.display.Sprite, flash.display.DisplayObjectContainer);

flash.display.Sprite.className = "flash.display.Sprite";

flash.display.Sprite.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Sprite.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Sprite.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.MovieClip
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.MovieClip = function() {
this.currentFrame = 0;
flash.display.Sprite.call(this);
};

flash.display.MovieClip.prototype.gotoAndPlay = function(frame, scene) {
};

flash.display.MovieClip.prototype.gotoAndStop = function(frame, scene) {
};

flash.display.MovieClip.prototype.play = function() {
};

flash.display.MovieClip.prototype.stop = function() {
};

flash.display.MovieClip.prototype.nextFrame = function() {
};


$inherit(flash.display.MovieClip, flash.display.Sprite);

flash.display.MovieClip.className = "flash.display.MovieClip";

flash.display.MovieClip.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.MovieClip.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.MovieClip.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// Main
// ====================================================


Main = function() {
	this.context3D = null;
	this.ss = [];
	this.shape = null;
	this.texture = null;
	this.loader = null;
	this.indexBuffer = null;
	this.stage3D = null;
	this.program = null;
	this.vertexBuffer = null;
	flash.display.Sprite.call(this);
	if (this.get_stage()) {
		this.init(null);
	} else {
		this.addEventListener("addedToStage", $createStaticDelegate(this, this.init), false, 0, false);
	}
};

Main.prototype.init = function(e) {
	this.removeEventListener("addedToStage", $createStaticDelegate(this, this.init), false);
	this.stage3D = this.get_stage().get_stage3Ds()[0];
	this.stage3D.addEventListener("context3DCreate", $createStaticDelegate(this, this.stage3D_context3dCreate), false, 0, false);
	this.stage3D.requestContext3D("auto", "baseline");
	this.shape = new flash.display.Sprite();
	this.shape.get_graphics().beginFill(0xff0000, 1.0);
	this.shape.get_graphics().drawRect(-50, -50, 100, 100);
	this.addChild(this.shape);
	this.loader = new flash.display.Loader();
	this.loader.contentLoaderInfo.addEventListener("complete", $createStaticDelegate(this, this.loader_complete), false, 0, false);
	this.loader.load(new flash.net.URLRequest("..\/assets\/rockman.png"));
	this.addEventListener("enterFrame", $createStaticDelegate(this, this.enterFrame), false, 0, false);
};

Main.prototype.loader_complete = function(e) {
	this.addChild(this.loader.content);
};

Main.prototype.stage3D_context3dCreate = function(e) {
	this.context3D = this.stage3D.get_context3D();
	this.context3D.enableErrorChecking = true;
	this.context3D.configureBackBuffer(400, 400, 0, true, false);
	this.program = this.context3D.createProgram();
	if (flash.system.Capabilities.playerType != "js") {
		var minia = new com.adobe.utils.AGALMiniAssembler(false);
		this.program.upload(minia.assemble("vertex", "m44 op, va0, vc0"), minia.assemble("fragment", "mov oc,fc0"));
	} else {
		var vsh = ["attribute vec4 va0;void main(){gl_Position = va0;}"];
		var fsh = ["void main(){gl_FragColor=vec4(1.,0.,0.,1.);}"];
		this.program.upload(vsh, fsh);
	}
	this.vertexBuffer = this.context3D.createVertexBuffer(4, 3);
	this.vertexBuffer.uploadFromVector([-.5, -.5, 0, .5, -.5, 0, -.5, .5, 0, .5, .5, 0], 0, 4);
	this.indexBuffer = this.context3D.createIndexBuffer(6);
	this.indexBuffer.uploadFromVector([0, 1, 2, 1, 3, 2], 0, 6);
	var s = new Main$Sprite3D();
	this.ss.push(s);
	s.color = [1, 0, 0, 1];
	s = new Main$Sprite3D();
	s.x = 50;
	this.ss.push(s);
};

Main.prototype.enterFrame = function(e) {
	this.shape.set_x(200 * (Math.sin(flash.utils.getTimer() / 3000) + 1));
	this.shape.set_y(200 * (Math.cos(flash.utils.getTimer() / 1000) + 1));
	this.shape.set_rotation(this.shape.get_rotation() + 1);
	if (this.context3D) {
		this.context3D.clear(0, 0, 0, 0, 1, 0, 16777215);
		for (var i = 0; i < this.ss.length; i++) {
			var s = this.ss[i];
			s.rotation++;
			this.context3D.setDepthTest(true, "lessEqual");
			if (i == 0) {
			} else {
			}
			this.context3D.setProgram(this.program);
			this.context3D.setVertexBufferAt(0, this.vertexBuffer, 0, "float3");
			this.draw(s);
		}
		this.context3D.present();
	}
};

Main.prototype.draw = function(s) {
	var matr = new flash.geom.Matrix3D();
	this.context3D.setProgramConstantsFromVector("fragment", 0, s.color, -1);
	this.context3D.setProgramConstantsFromMatrix("vertex", 0, matr, true);
	this.context3D.drawTriangles(this.indexBuffer, 0, -1);
};


$inherit(Main, flash.display.Sprite);

Main.className = "Main";

Main.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Loader');
	p.push('com.adobe.utils.AGALMiniAssembler');
	p.push('flash.display3D.Context3DCompareMode');
	p.push('flash.display.Sprite');
	p.push('flash.net.URLRequest');
	p.push('flash.system.Capabilities');
	p.push('flash.display3D.Context3DProgramType');
	p.push('flash.utils.getTimer');
	p.push('flash.events.Event');
	p.push('flash.display3D.Context3DVertexBufferFormat');
	p.push('flash.geom.Matrix3D');
	return p;
};

Main.getStaticDependencies = function(t) {
	var p;
	return [];
};

Main.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

Main$Sprite3D = function() {
	this.color = [1, 1, 1, 1];
	this.rotation = 0;
	this.x = 0;
	this.width = 100;
	this.y = 0;
	this.height = 100;
	
};


// ====================================================
// flash.display.Stage
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Stage = function() {
	this.stageWidth = 0;
	this.stageHeight = 0;
	this._stage3Ds = null;
	flash.display.DisplayObjectContainer.call(this);
};

flash.display.Stage.prototype.get_stage3Ds = function() {
	if (!this._stage3Ds) {
		this._stage3Ds = [];
		this._stage3Ds.push(new flash.display.Stage3D());
	}
	return this._stage3Ds;
};

Object.defineProperty(flash.display.Stage.prototype, 'stage3Ds', {
  get: function() { return this.get_stage3Ds(); },
  set: function(value) { return this.set_stage3Ds(value); }
});

$inherit(flash.display.Stage, flash.display.DisplayObjectContainer);

flash.display.Stage.className = "flash.display.Stage";

flash.display.Stage.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Stage3D');
	return p;
};

flash.display.Stage.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Stage.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.SimpleButton
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.SimpleButton = function() {
	flash.display.DisplayObjectContainer.call(this);
};


$inherit(flash.display.SimpleButton, flash.display.DisplayObjectContainer);

flash.display.SimpleButton.className = "flash.display.SimpleButton";

flash.display.SimpleButton.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.SimpleButton.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.SimpleButton.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObjectContainer.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.TextField
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextField = function() {
	this.selectionBeginIndex = 0;
	this.borderColor = 0;
	this.wordWrap = false;
	this.selectable = false;
	this.type = "";
	this.restrict = "";
	this.autoSize = "";
	this.maxChars = 0;
	this.htmlText = "";
	this.border = false;
	this.backgroundColor = 0;
	this.antiAliasType = "";
	this._textWidth = 0;
	this.defaultTextFormat = null;
	this.textColor = 0;
	this._textHeight = 0;
	this.embedFonts = false;
	this.background = false;
	this.multiline = false;
	this.selectionEndIndex = 0;
	this._text = "";
	flash.display.InteractiveObject.call(this);
	this.domElement = document.createElement("div");
	this.domElement.style.setProperty("position", "absolute");
	this.domElement.style.setProperty("width", "auto");
	this.domElement.style.setProperty("height", "auto");
};

flash.text.TextField.prototype.get_textWidth = function() {
	return this._textWidth;
};

flash.text.TextField.prototype.set_textWidth = function(value) {
	this._textWidth = value;
};

flash.text.TextField.prototype.get_textHeight = function() {
	return this._textHeight;
};

flash.text.TextField.prototype.set_textHeight = function(value) {
	this._textHeight = value;
};

flash.text.TextField.prototype.get_text = function() {
	return this._text;
};

flash.text.TextField.prototype.set_text = function(value) {
	this._text = value;
	this.domElement.innerHTML = this._text;
	this.calculateTextBounds(this.defaultTextFormat);
};

flash.text.TextField.prototype.getTextFormat = function(beginIndex, endIndex) {
	return new flash.text.TextFormat();
};

flash.text.TextField.prototype.setTextFormat = function(format, beginIndex, endIndex) {
	this.calculateTextBounds(format);
};

flash.text.TextField.prototype.setSelection = function(beginIndex, endIndex) {
};

flash.text.TextField.prototype.appendText = function(newText) {
	this.set_text(this.get_text() + newText);
};

flash.text.TextField.prototype.calculateTextBounds = function(format) {
	if (!format)
		return;
	var vis = this.domElement.style.getPropertyValue("visibility");
	vis = vis ? vis : "visible";
	this.domElement.style.setProperty("fontFamily", format.font);
	this.domElement.style.setProperty("fontSize", format.size + "");
	document.body.appendChild(this.domElement);
	this.set_textWidth(this.domElement.clientWidth);
	this.set_textHeight(this.domElement.clientHeight);
	document.body.removeChild(this.domElement);
	this.domElement.style.setProperty("visibility", vis);
};

Object.defineProperty(flash.text.TextField.prototype, 'textHeight', {
  get: function() { return this.get_textHeight(); },
  set: function(value) { return this.set_textHeight(value); }
});
Object.defineProperty(flash.text.TextField.prototype, 'textWidth', {
  get: function() { return this.get_textWidth(); },
  set: function(value) { return this.set_textWidth(value); }
});
Object.defineProperty(flash.text.TextField.prototype, 'text', {
  get: function() { return this.get_text(); },
  set: function(value) { return this.set_text(value); }
});

$inherit(flash.text.TextField, flash.display.InteractiveObject);

flash.text.TextField.className = "flash.text.TextField";

flash.text.TextField.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.text.TextFormat');
	return p;
};

flash.text.TextField.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextField.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.media.Video
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.Video = function() {
flash.display.DisplayObject.call(this);
};

flash.media.Video.prototype.attachNetStream = function(netStream) {
};


$inherit(flash.media.Video, flash.display.DisplayObject);

flash.media.Video.className = "flash.media.Video";

flash.media.Video.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.media.Video.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.Video.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.Bitmap
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Bitmap = function(bitmapData, pixelSnapping, smoothing) {
	this.blendMode = "";
	this.pixelsnapping = "";
	this._g = null;
	this.bitmapData = bitmapData;
	flash.display.DisplayObject.call(this);
};

flash.display.Bitmap.prototype.updateGraphics = function() {
	flash.display.DisplayObject.prototype.updateGraphics.call(this);
	if (this.bitmapData) {
		this.get_g().updateGraphics();
	}
};

flash.display.Bitmap.prototype.get_g = function() {
	if (this._g == null) {
		this._g = new flash.display.Graphics();
		this._g.sprite = this;
		this._g.beginBitmapFill(this.bitmapData, null, false, this.smoothing);
		this._g.drawRect(0, 0, this.bitmapData.width, this.bitmapData.height);
	}
	return this._g;
};

Object.defineProperty(flash.display.Bitmap.prototype, 'g', {
  get: function() { return this.get_g(); },
  set: function(value) { return this.set_g(value); }
});

$inherit(flash.display.Bitmap, flash.display.DisplayObject);

flash.display.Bitmap.className = "flash.display.Bitmap";

flash.display.Bitmap.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.BitmapData');
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Bitmap.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Bitmap.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bitmapData', t:'flash.display.BitmapData'});
			p.push({n:'pixelSnapping', t:'String'});
			p.push({n:'smoothing', t:'Boolean'});
			break;
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// mx.core.BitmapAsset
// ====================================================

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


// ====================================================
// flash.display.Shape
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Shape = function() {
this._graphics = null;
flash.display.DisplayObject.call(this);
};

flash.display.Shape.prototype.get_graphics = function() {
	if (!this._graphics)
		this._graphics = new flash.display.Graphics();
	return this._graphics;
};

Object.defineProperty(flash.display.Shape.prototype, 'graphics', {
  get: function() { return this.get_graphics(); },
  set: function(value) { return this.set_graphics(value); }
});

$inherit(flash.display.Shape, flash.display.DisplayObject);

flash.display.Shape.className = "flash.display.Shape";

flash.display.Shape.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.display.Graphics');
	return p;
};

flash.display.Shape.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shape.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.DisplayObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3D
// ====================================================

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


// ====================================================
// flash.display3D.textures.TextureBase
// ====================================================

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


// ====================================================
// flash.display3D.textures.Texture
// ====================================================

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


// ====================================================
// flash.net.SharedObject
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.SharedObject = function(target) {
	this.data = {};
	this.client = null;
	flash.events.EventDispatcher.call(this, target);
};

flash.net.SharedObject.prototype.flush = function(minDiskSpace) {
	return "flushed";
};


$inherit(flash.net.SharedObject, flash.events.EventDispatcher);

flash.net.SharedObject.className = "flash.net.SharedObject";

flash.net.SharedObject.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.SharedObject.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.SharedObject.injectionPoints = function(t) {
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


// ====================================================
// flash.media.SoundChannel
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundChannel = function() {
	this.position = 0;
	this.soundTransform = null;
	flash.events.EventDispatcher.call(this);
	this.soundTransform = new flash.media.SoundTransform(1, 0);
	flash.media.SoundMixer.get_soundTransform().addTransform(this.soundTransform);
};

flash.media.SoundChannel.prototype.stop = function() {
	if (this.soundTransform.buffer)
		this.soundTransform.buffer.stop(0);
};


$inherit(flash.media.SoundChannel, flash.events.EventDispatcher);

flash.media.SoundChannel.className = "flash.media.SoundChannel";

flash.media.SoundChannel.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundMixer');
	p.push('flash.media.SoundTransform');
	return p;
};

flash.media.SoundChannel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundChannel.injectionPoints = function(t) {
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


// ====================================================
// flash.net.URLStream
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLStream = function() {
	this.connected = true;
	flash.events.EventDispatcher.call(this);
};

flash.net.URLStream.prototype.load = function(request) {
};

flash.net.URLStream.prototype.close = function() {
};


$inherit(flash.net.URLStream, flash.events.EventDispatcher);

flash.net.URLStream.className = "flash.net.URLStream";

flash.net.URLStream.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLStream.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLStream.injectionPoints = function(t) {
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


// ====================================================
// flash.net.NetStream
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.NetStream = function(target) {
	this.inBufferSeek = false;
	this.bytesLoaded = 0;
	this.client = null;
	this.soundTransform = new flash.media.SoundTransform(1, 0);
	this.time = 0;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this, target);
};

flash.net.NetStream.prototype.attach = function(connection) {
};

flash.net.NetStream.prototype.play = function(args) {
};

flash.net.NetStream.prototype.seek = function(offset) {
};

flash.net.NetStream.prototype.close = function() {
};


$inherit(flash.net.NetStream, flash.events.EventDispatcher);

flash.net.NetStream.className = "flash.net.NetStream";

flash.net.NetStream.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetStream.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundTransform');
	return p;
};

flash.net.NetStream.injectionPoints = function(t) {
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


// ====================================================
// flash.media.Sound
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.Sound = function(urlRequest, context) {
	this.xhr = null;
	this.length = 0;
	this.isLoaded = false;
	this.url = null;
	this.node = null;
	this.bytesLoaded = 0;
	this.soundChannel = null;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this);
	flash.media.SoundMixer.get_soundTransform();
	if (urlRequest)
		this.load(urlRequest, context);
};

flash.media.Sound.prototype.load = function(stream, context) {
	this.url = stream.url;
	if (flash.media.SoundMixer.cache[this.url]) {
		this.dispatchEvent(new flash.events.Event("complete", false, false));
		return;
	}
	if (flash.media.SoundMixer.usingWebAudio) {
		this.xhr = new XMLHttpRequest();
		this.xhr.open("GET", stream.url, true);
		this.xhr.responseType = "arraybuffer";
		this.xhr.onload = $createStaticDelegate(this, this.completeHandler);
		try {
			this.xhr.send();
		} catch (error) {
			this.xhr.onerror();
		}
	} else {
	}
};

flash.media.Sound.prototype.completeHandler = function() {
	var that = this;
	try {
		flash.media.SoundMixer.ctx.decodeAudioData(this.xhr.response, function(buffer) {
			if (buffer) {
				that.loadSound(buffer);
			}
		});
	} catch (error) {
		this.dispatchEvent(new flash.events.Event("complete", false, false));
		this.isLoaded = true;
	}
};

flash.media.Sound.prototype.loadSound = function(buffer) {
	console.log("url: " + this.url);
	flash.media.SoundMixer.cache[this.url] = buffer;
	this.length = buffer.duration;
	this.dispatchEvent(new flash.events.Event("complete", false, false));
	this.isLoaded = true;
};

flash.media.Sound.prototype.loadCompressedDataFromByteArray = function(bytes, length) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Sound.loadCompressedDataFromByteArray() $$$$");
};

flash.media.Sound.prototype.play = function(startTime, loops, sndTransform) {
	if (!this.soundChannel)
		this.soundChannel = new flash.media.SoundChannel();
	else
		this.soundChannel.stop();
	if (!flash.media.SoundMixer.cache[this.url])
		return this.soundChannel;
	if (flash.media.SoundMixer.usingWebAudio) {
		if (!this.node) {
			this.node = flash.media.SoundMixer.getGainNode();
			this.node.connect(flash.media.SoundMixer.ctx.destination);
		}
		if (this.node.bufferSource && this.node.bufferSource.loop)
			this.node.bufferSource.stop(0);
		this.node.bufferSource = flash.media.SoundMixer.ctx.createBufferSource();
		if (!this.node.bufferSource)
			return this.soundChannel;
		this.node.bufferSource.connect(this.node);
		this.node.bufferSource.loop = (loops > 0);
		this.node.bufferSource.buffer = flash.media.SoundMixer.cache[this.url];
		this.node.bufferSource.connect(flash.media.SoundMixer.ctx.destination);
		this.node.gain.value = 1;
		this.node.bufferSource.start(startTime);
		this.soundChannel.soundTransform.buffer = this.node.bufferSource;
	}
	return this.soundChannel;
};

flash.media.Sound.prototype.close = function() {
};


$inherit(flash.media.Sound, flash.events.EventDispatcher);

flash.media.Sound.className = "flash.media.Sound";

flash.media.Sound.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundMixer');
	p.push('flash.media.SoundChannel');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.net.URLRequest');
	p.push('flash.events.Event');
	return p;
};

flash.media.Sound.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.Sound.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'urlRequest', t:'flash.net.URLRequest'});
			p.push({n:'context', t:'flash.media.SoundLoaderContext'});
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


// ====================================================
// flash.display.LoaderInfo
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.LoaderInfo = function() {
	this.url = "redshell";
	this.parameters = {};
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	flash.events.EventDispatcher.call(this);
};


$inherit(flash.display.LoaderInfo, flash.events.EventDispatcher);

flash.display.LoaderInfo.className = "flash.display.LoaderInfo";

flash.display.LoaderInfo.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.LoaderInfo.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.LoaderInfo.injectionPoints = function(t) {
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


// ====================================================
// flash.display.Stage3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Stage3D = function() {
	this._context3D = null;
	this._x = 0;
	this._y = 0;
	flash.events.EventDispatcher.call(this);
};

flash.display.Stage3D.prototype.get_context3D = function() {
	return this._context3D;
};

flash.display.Stage3D.prototype.get_x = function() {
	return this._x;
};

flash.display.Stage3D.prototype.set_x = function(value) {
	this._x = value;
};

flash.display.Stage3D.prototype.get_y = function() {
	return this._y;
};

flash.display.Stage3D.prototype.set_y = function(value) {
	this._y = value;
};

flash.display.Stage3D.prototype.requestContext3D = function(context3DRenderMode, profile) {
	trace("Stage3D");
	var canvas = document.getElementById("stage3d");
	try {
		var context = canvas.getContext("webgl", {alpha:false}) || canvas.getContext("experimental-webgl", {alpha:false});
	} catch (error) {
	}
	if (context) {
		this._context3D = new flash.display3D.Context3D();
		this._context3D.canvas = canvas;
		flash.utils.FlashTimingEngine.setupStageInteractionEvents(canvas);
		this._context3D.webglContext = context;
		document.body.appendChild(canvas);
		setTimeout($createStaticDelegate(this, this.sendCreateEvent), 10);
	} else {
		this.dispatchEvent(new flash.events.ErrorEvent("error", false, false, "No Context Available", 0));
	}
};

flash.display.Stage3D.prototype.sendCreateEvent = function() {
	this.dispatchEvent(new flash.events.Event("context3DCreate", false, false));
};

Object.defineProperty(flash.display.Stage3D.prototype, 'context3D', {
  get: function() { return this.get_context3D(); },
  set: function(value) { return this.set_context3D(value); }
});
Object.defineProperty(flash.display.Stage3D.prototype, 'x', {
  get: function() { return this.get_x(); },
  set: function(value) { return this.set_x(value); }
});
Object.defineProperty(flash.display.Stage3D.prototype, 'y', {
  get: function() { return this.get_y(); },
  set: function(value) { return this.set_y(value); }
});

$inherit(flash.display.Stage3D, flash.events.EventDispatcher);

flash.display.Stage3D.className = "flash.display.Stage3D";

flash.display.Stage3D.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.display3D.Context3D');
	p.push('flash.events.ErrorEvent');
	p.push('flash.events.Event');
	return p;
};

flash.display.Stage3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Stage3D.injectionPoints = function(t) {
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


// ====================================================
// flash.net.NetConnection
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.NetConnection = function(target) {
	flash.events.EventDispatcher.call(this, target);
};

flash.net.NetConnection.prototype.connect = function(command, args) {
};

flash.net.NetConnection.prototype.close = function() {
};


$inherit(flash.net.NetConnection, flash.events.EventDispatcher);

flash.net.NetConnection.className = "flash.net.NetConnection";

flash.net.NetConnection.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetConnection.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.NetConnection.injectionPoints = function(t) {
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


// ====================================================
// flash.utils.Timer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Timer = function(delay, repeatCount) {
	this.id = 0;
	flash.events.EventDispatcher.call(this);
	this.delay = delay;
	this.repeatCount = repeatCount;
};

flash.utils.Timer.prototype.start = function() {
	this.id = 1;
};

flash.utils.Timer.prototype.stop = function() {
};


$inherit(flash.utils.Timer, flash.events.EventDispatcher);

flash.utils.Timer.className = "flash.utils.Timer";

flash.utils.Timer.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Timer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Timer.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'delay', t:'Number'});
			p.push({n:'repeatCount', t:'int'});
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


// ====================================================
// flash.net.URLLoader
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLLoader = function(request) {
	this.data = null;
	flash.events.EventDispatcher.call(this);
	if (request)
		this.load(request);
};

flash.net.URLLoader.prototype.load = function(request) {
	FlashAPILoggeer.log("URLLoader::load[" + request.method + "] - url: " + request.url);
	FlashAPILoggeer.log("URLLoader::load - vars: " + request.data);
	var event = new flash.events.Event("complete", false, false);
	event.target = this;
	var sent = false;
	if (request.url.indexOf("http:", 0) == -1) {
		try {
		} catch (error) {
			FlashAPILoggeer.log("URLLoader::cat error: " + error.message);
		}
		if (this.data.length > 50)
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data.substr(0, 50));
		else
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data);
		sent = (this.data != null);
	} else {
		var args = "";
		if (request.method == "get")
			args = "-G";
		try {
		} catch (error) {
			FlashAPILoggeer.log("URLLoader::curl error: " + error.message);
		}
		if (this.data.length > 50)
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data.substr(0, 50));
		else
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data);
		sent = (this.data != null);
	}
	if (sent)
		this.dispatchEvent(event);
};

flash.net.URLLoader.prototype.verifyAndLoadFile = function(file) {
	return true;
};


$inherit(flash.net.URLLoader, flash.events.EventDispatcher);

flash.net.URLLoader.className = "flash.net.URLLoader";

flash.net.URLLoader.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('FlashAPILoggeer');
	p.push('flash.events.Event');
	return p;
};

flash.net.URLLoader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'request', t:'flash.net.URLRequest'});
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


// ====================================================
// flash.ui.ContextMenuItem
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.ContextMenuItem = function(caption, separatorBefore, enabled, visible) {
	flash.events.EventDispatcher.call(this);
};


$inherit(flash.ui.ContextMenuItem, flash.events.EventDispatcher);

flash.ui.ContextMenuItem.className = "flash.ui.ContextMenuItem";

flash.ui.ContextMenuItem.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenuItem.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenuItem.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'caption', t:'String'});
			p.push({n:'separatorBefore', t:'Boolean'});
			p.push({n:'enabled', t:'Boolean'});
			p.push({n:'visible', t:'Boolean'});
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


// ====================================================
// flash.ui.ContextMenu
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.ContextMenu = function() {
	this.customItems = [];
	flash.events.EventDispatcher.call(this);
};

flash.ui.ContextMenu.prototype.hideBuiltInItems = function() {
};


$inherit(flash.ui.ContextMenu, flash.events.EventDispatcher);

flash.ui.ContextMenu.className = "flash.ui.ContextMenu";

flash.ui.ContextMenu.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenu.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.ContextMenu.injectionPoints = function(t) {
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


// ====================================================
// flash.utils.Endian
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Endian = function() {
	
};

flash.utils.Endian.BIG_ENDIAN = "bigEndian";

flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";


flash.utils.Endian.className = "flash.utils.Endian";

flash.utils.Endian.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Endian.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Endian.injectionPoints = function(t) {
	return [];
};

// ====================================================
// com.adobe.utils.AGALMiniAssembler
// ====================================================

if (typeof com == "undefined")
	var com = {};
if (typeof com.adobe == "undefined")
	com.adobe = {};
if (typeof com.adobe.utils == "undefined")
	com.adobe.utils = {};

com.adobe.utils.AGALMiniAssembler = function(debugging) {
	this.initialized = false;
	this._agalcode = null;
	this.verbose = false;
	this.debugEnabled = false;
	this._error = "";
	this.debugEnabled = debugging;
	if (!com.adobe.utils.AGALMiniAssembler.initialized)
		com.adobe.utils.AGALMiniAssembler.init();
};

com.adobe.utils.AGALMiniAssembler.USE_NEW_SYNTAX = false;

com.adobe.utils.AGALMiniAssembler.REGEXP_OUTER_SPACES = /^\s+|\s+$/g;

com.adobe.utils.AGALMiniAssembler.initialized = false;

com.adobe.utils.AGALMiniAssembler.prototype.get_error = function() {
	return this._error;
};

com.adobe.utils.AGALMiniAssembler.prototype.get_agalcode = function() {
	return this._agalcode;
};

com.adobe.utils.AGALMiniAssembler.prototype.assemble = function(mode, source) {
	var start = flash.utils.getTimer();
	this._agalcode = new flash.utils.ByteArray();
	this._error = "";
	var isFrag = false;
	if (mode == "fragment")
		isFrag = true;
	else if (mode != "vertex")
		this._error = "ERROR: mode needs to be \"" + "fragment" + "\" or \"" + "vertex" + "\" but is \"" + mode + "\".";
	this.get_agalcode().set_endian("littleEndian");
	this.get_agalcode().writeByte(0xa0);
	this.get_agalcode().writeUnsignedInt(0x1);
	this.get_agalcode().writeByte(0xa1);
	this.get_agalcode().writeByte(isFrag ? 1 : 0);
	var lines = source.replace(/[\f\n\r\v]+/g, "\n").split("\n", 4.294967295E9);
	var nest = 0;
	var nops = 0;
	var i;
	var lng = lines.length;
	for (i = 0; i < lng && this._error == ""; i++) {
		var line = new String(lines[i]);
		line = line.replace(/^\s+|\s+$/g, "");
		var startcomment = line.search("\/\/");
		if (startcomment != -1)
			line = line.slice(0, startcomment);
		var optsi = line.search(/<.*>/g);
		var opts;
		if (optsi != -1) {
			opts = line.slice(optsi, 2147483647).match(/([\w\.\-\+]+)/gi);
			line = line.slice(0, optsi);
		}
		var opCode = line.match(/^\w{3}/ig);
		if (!opCode) {
			if (line.length >= 3)
				trace("warning: bad line " + i + ": " + lines[i]);
			continue;
		}
		var opFound = com.adobe.utils.AGALMiniAssembler.OPMAP[opCode[0]];
		if (this.debugEnabled)
			trace(opFound);
		if (opFound == null) {
			if (line.length >= 3)
				trace("warning: bad line " + i + ": " + lines[i]);
			continue;
		}
		line = line.slice(line.search(opFound.get_name()) + opFound.get_name().length, 2147483647);
		if (opFound.get_flags() & 4) {
			nest--;
			if (nest < 0) {
				this._error = "error: conditional closes without open.";
				break;
			}
		}
		if (opFound.get_flags() & 2) {
			nest++;
			if (nest > 4) {
				this._error = "error: nesting to deep, maximum allowed is " + 4 + ".";
				break;
			}
		}
		if ((opFound.get_flags() & 32) && !isFrag) {
			this._error = "error: opcode is only allowed in fragment programs.";
			break;
		}
		if (this.verbose)
			trace("emit opcode=" + opFound);
		this.get_agalcode().writeUnsignedInt(opFound.get_emitCode());
		nops++;
		if (nops > 256) {
			this._error = "error: too many opcodes. maximum is " + 256 + ".";
			break;
		}
		var regs;
		if (false)
			regs = line.match(/vc\[([vif][acost]?)(\d*)?(\.[xyzw](\+\d{1,3})?)?\](\.[xyzw]{1,4})?|([vif][acost]?)(\d*)?(\.[xyzw]{1,4})?/gi);
		else
			regs = line.match(/vc\[([vof][actps]?)(\d*)?(\.[xyzw](\+\d{1,3})?)?\](\.[xyzw]{1,4})?|([vof][actps]?)(\d*)?(\.[xyzw]{1,4})?/gi);
		if (!regs || regs.length != opFound.get_numRegister()) {
			this._error = "error: wrong number of operands. found " + regs.length + " but expected " + opFound.get_numRegister() + ".";
			break;
		}
		var badreg = false;
		var pad = 64 + 64 + 32;
		var regLength = regs.length;
		for (var j = 0; j < regLength; j++) {
			var isRelative = false;
			var relreg = regs[j].match(/\[.*\]/ig);
			if (relreg && relreg.length > 0) {
				regs[j] = regs[j].replace(relreg[0], "0");
				if (this.verbose)
					trace("IS REL");
				isRelative = true;
			}
			var res = regs[j].match(/^\b[A-Za-z]{1,2}/ig);
			if (!res) {
				this._error = "error: could not parse operand " + j + " (" + regs[j] + ").";
				badreg = true;
				break;
			}
			var regFound = com.adobe.utils.AGALMiniAssembler.REGMAP[res[0]];
			if (this.debugEnabled)
				trace(regFound);
			if (regFound == null) {
				this._error = "error: could not parse operand " + j + " (" + regs[j] + ").";
				badreg = true;
				break;
			}
			if (isFrag) {
				if (!(regFound.get_flags() & 32)) {
					this._error = "error: register operand " + j + " (" + regs[j] + ") only allowed in vertex programs.";
					badreg = true;
					break;
				}
				if (isRelative) {
					this._error = "error: register operand " + j + " (" + regs[j] + ") relative adressing not allowed in fragment programs.";
					badreg = true;
					break;
				}
			} else {
				if (!(regFound.get_flags() & 64)) {
					this._error = "error: register operand " + j + " (" + regs[j] + ") only allowed in fragment programs.";
					badreg = true;
					break;
				}
			}
			regs[j] = regs[j].slice(regs[j].search(regFound.get_name()) + regFound.get_name().length);
			var idxmatch = isRelative ? relreg[0].match(/\d+/) : regs[j].match(/\d+/);
			var regidx = 0;
			if (idxmatch)
				regidx = idxmatch[0];
			if (regFound.get_range() < regidx) {
				this._error = "error: register operand " + j + " (" + regs[j] + ") index exceeds limit of " + (regFound.get_range() + 1) + ".";
				badreg = true;
				break;
			}
			var regmask = 0;
			var maskmatch = regs[j].match(/(\.[xyzw]{1,4})/);
			var isDest = (j == 0 && !(opFound.get_flags() & 128));
			var isSampler = (j == 2 && (opFound.get_flags() & 8));
			var reltype = 0;
			var relsel = 0;
			var reloffset = 0;
			if (isDest && isRelative) {
				this._error = "error: relative can not be destination";
				badreg = true;
				break;
			}
			if (maskmatch) {
				regmask = 0;
				var cv;
				var maskLength = maskmatch[0].length;
				for (var k = 1; k < maskLength; k++) {
					cv = maskmatch[0].charCodeAt(k) - "x".charCodeAt(0);
					if (cv > 2)
						cv = 3;
					if (isDest)
						regmask |= 1 << cv;
					else
						regmask |= cv << ((k - 1) << 1);
				}
				if (!isDest)
					for (; k <= 4; k++)
						regmask |= cv << ((k - 1) << 1);
			} else {
				regmask = isDest ? 0xf : 0xe4;
			}
			if (isRelative) {
				var relname = relreg[0].match(/[A-Za-z]{1,2}/ig);
				var regFoundRel = com.adobe.utils.AGALMiniAssembler.REGMAP[relname[0]];
				if (regFoundRel == null) {
					this._error = "error: bad index register";
					badreg = true;
					break;
				}
				reltype = regFoundRel.get_emitCode();
				var selmatch = relreg[0].match(/(\.[xyzw]{1,1})/);
				if (selmatch.length == 0) {
					this._error = "error: bad index register select";
					badreg = true;
					break;
				}
				relsel = selmatch[0].charCodeAt(1) - "x".charCodeAt(0);
				if (relsel > 2)
					relsel = 3;
				var relofs = relreg[0].match(/\+\d{1,3}/ig);
				if (relofs.length > 0)
					reloffset = relofs[0];
				if (reloffset < 0 || reloffset > 255) {
					this._error = "error: index offset " + reloffset + " out of bounds. [0..255]";
					badreg = true;
					break;
				}
				if (this.verbose)
					trace("RELATIVE: type=" + reltype + "==" + relname[0] + " sel=" + relsel + "==" + selmatch[0] + " idx=" + regidx + " offset=" + reloffset);
			}
			if (this.verbose)
				trace("  emit argcode=" + regFound + "[" + regidx + "][" + regmask + "]");
			if (isDest) {
				this.get_agalcode().writeShort(regidx);
				this.get_agalcode().writeByte(regmask);
				this.get_agalcode().writeByte(regFound.get_emitCode());
				pad -= 32;
			} else {
				if (isSampler) {
					if (this.verbose)
						trace("  emit sampler");
					var samplerbits = 5;
					var optsLength = opts == null ? 0 : opts.length;
					var bias = 0;
					for (k = 0; k < optsLength; k++) {
						if (this.verbose)
							trace("    opt: " + opts[k]);
						var optfound = com.adobe.utils.AGALMiniAssembler.SAMPLEMAP[opts[k]];
						if (optfound == null) {
							bias = opts[k];
							if (this.verbose)
								trace("    bias: " + bias);
						} else {
							if (optfound.get_flag() != 16)
								samplerbits &= ~(0xf << optfound.get_flag());
							samplerbits |= optfound.get_mask() << optfound.get_flag();
						}
					}
					this.get_agalcode().writeShort(regidx);
					this.get_agalcode().writeByte(~~(bias * 8.0));
					this.get_agalcode().writeByte(0);
					this.get_agalcode().writeUnsignedInt(samplerbits);
					if (this.verbose)
						trace("    bits: " + (samplerbits - 5));
					pad -= 64;
				} else {
					if (j == 0) {
						this.get_agalcode().writeUnsignedInt(0);
						pad -= 32;
					}
					this.get_agalcode().writeShort(regidx);
					this.get_agalcode().writeByte(reloffset);
					this.get_agalcode().writeByte(regmask);
					this.get_agalcode().writeByte(regFound.get_emitCode());
					this.get_agalcode().writeByte(reltype);
					this.get_agalcode().writeShort(isRelative ? (relsel | (1 << 15)) : 0);
					pad -= 64;
				}
			}
		}
		for (j = 0; j < pad; j += 8)
			this.get_agalcode().writeByte(0);
		if (badreg)
			break;
	}
	if (this._error != "") {
		this._error += "\n  at line " + i + " " + lines[i];
		this.get_agalcode().set_length(0);
		trace(this._error);
	}
	if (this.debugEnabled) {
		var dbgLine = "generated bytecode:";
		var agalLength = this.get_agalcode().get_length();
		for (var index = 0; index < agalLength; index++) {
			if (!(index % 16))
				dbgLine += "\n";
			if (!(index % 4))
				dbgLine += " ";
			var byteStr = this.get_agalcode().getValueByPosition(index).toString(16);
			if (byteStr.length < 2)
				byteStr = "0" + byteStr;
			dbgLine += byteStr;
		}
		trace(dbgLine);
	}
	if (this.verbose)
		trace("AGALMiniAssembler.assemble time: " + ((flash.utils.getTimer() - start) / 1000) + "s");
	return this.get_agalcode();
};

com.adobe.utils.AGALMiniAssembler.init = function() {
	com.adobe.utils.AGALMiniAssembler.initialized = true;
	com.adobe.utils.AGALMiniAssembler.OPMAP["mov"] = new com.adobe.utils.AGALMiniAssembler$OpCode("mov", 2, 0x00, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["add"] = new com.adobe.utils.AGALMiniAssembler$OpCode("add", 3, 0x01, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sub"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sub", 3, 0x02, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["mul"] = new com.adobe.utils.AGALMiniAssembler$OpCode("mul", 3, 0x03, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["div"] = new com.adobe.utils.AGALMiniAssembler$OpCode("div", 3, 0x04, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["rcp"] = new com.adobe.utils.AGALMiniAssembler$OpCode("rcp", 2, 0x05, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["min"] = new com.adobe.utils.AGALMiniAssembler$OpCode("min", 3, 0x06, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["max"] = new com.adobe.utils.AGALMiniAssembler$OpCode("max", 3, 0x07, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["frc"] = new com.adobe.utils.AGALMiniAssembler$OpCode("frc", 2, 0x08, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sqt"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sqt", 2, 0x09, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["rsq"] = new com.adobe.utils.AGALMiniAssembler$OpCode("rsq", 2, 0x0a, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["pow"] = new com.adobe.utils.AGALMiniAssembler$OpCode("pow", 3, 0x0b, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["log"] = new com.adobe.utils.AGALMiniAssembler$OpCode("log", 2, 0x0c, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["exp"] = new com.adobe.utils.AGALMiniAssembler$OpCode("exp", 2, 0x0d, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["nrm"] = new com.adobe.utils.AGALMiniAssembler$OpCode("nrm", 2, 0x0e, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sin"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sin", 2, 0x0f, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["cos"] = new com.adobe.utils.AGALMiniAssembler$OpCode("cos", 2, 0x10, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["crs"] = new com.adobe.utils.AGALMiniAssembler$OpCode("crs", 3, 0x11, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["dp3"] = new com.adobe.utils.AGALMiniAssembler$OpCode("dp3", 3, 0x12, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["dp4"] = new com.adobe.utils.AGALMiniAssembler$OpCode("dp4", 3, 0x13, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["abs"] = new com.adobe.utils.AGALMiniAssembler$OpCode("abs", 2, 0x14, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["neg"] = new com.adobe.utils.AGALMiniAssembler$OpCode("neg", 2, 0x15, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sat"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sat", 2, 0x16, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["m33"] = new com.adobe.utils.AGALMiniAssembler$OpCode("m33", 3, 0x17, 16);
	com.adobe.utils.AGALMiniAssembler.OPMAP["m44"] = new com.adobe.utils.AGALMiniAssembler$OpCode("m44", 3, 0x18, 16);
	com.adobe.utils.AGALMiniAssembler.OPMAP["m34"] = new com.adobe.utils.AGALMiniAssembler$OpCode("m34", 3, 0x19, 16);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ifz"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ifz", 1, 0x1a, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["inz"] = new com.adobe.utils.AGALMiniAssembler$OpCode("inz", 1, 0x1b, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ife"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ife", 2, 0x1c, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ine"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ine", 2, 0x1d, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ifg"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ifg", 2, 0x1e, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ifl"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ifl", 2, 0x1f, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ieg"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ieg", 2, 0x20, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["iel"] = new com.adobe.utils.AGALMiniAssembler$OpCode("iel", 2, 0x21, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["els"] = new com.adobe.utils.AGALMiniAssembler$OpCode("els", 0, 0x22, 128 | 2 | 4);
	com.adobe.utils.AGALMiniAssembler.OPMAP["eif"] = new com.adobe.utils.AGALMiniAssembler$OpCode("eif", 0, 0x23, 128 | 4);
	com.adobe.utils.AGALMiniAssembler.OPMAP["rep"] = new com.adobe.utils.AGALMiniAssembler$OpCode("rep", 1, 0x24, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["erp"] = new com.adobe.utils.AGALMiniAssembler$OpCode("erp", 0, 0x25, 128 | 4);
	com.adobe.utils.AGALMiniAssembler.OPMAP["brk"] = new com.adobe.utils.AGALMiniAssembler$OpCode("brk", 0, 0x26, 128);
	com.adobe.utils.AGALMiniAssembler.OPMAP["kil"] = new com.adobe.utils.AGALMiniAssembler$OpCode("kil", 1, 0x27, 128 | 32);
	com.adobe.utils.AGALMiniAssembler.OPMAP["tex"] = new com.adobe.utils.AGALMiniAssembler$OpCode("tex", 3, 0x28, 32 | 8);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sge"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sge", 3, 0x29, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["slt"] = new com.adobe.utils.AGALMiniAssembler$OpCode("slt", 3, 0x2a, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sgn"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sgn", 2, 0x2b, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["seq"] = new com.adobe.utils.AGALMiniAssembler$OpCode("seq", 3, 0x2c, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sne"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sne", 3, 0x2d, 0);
	com.adobe.utils.AGALMiniAssembler.REGMAP["va"] = new com.adobe.utils.AGALMiniAssembler$Register("va", "vertex attribute", 0x0, 7, 64 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["vc"] = new com.adobe.utils.AGALMiniAssembler$Register("vc", "vertex constant", 0x1, 127, 64 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["vt"] = new com.adobe.utils.AGALMiniAssembler$Register("vt", "vertex temporary", 0x2, 7, 64 | 1 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP[com.adobe.utils.AGALMiniAssembler.VO] = new com.adobe.utils.AGALMiniAssembler$Register(com.adobe.utils.AGALMiniAssembler.VO, "vertex output", 0x3, 0, 64 | 1);
	com.adobe.utils.AGALMiniAssembler.REGMAP[com.adobe.utils.AGALMiniAssembler.I] = new com.adobe.utils.AGALMiniAssembler$Register(com.adobe.utils.AGALMiniAssembler.I, "varying", 0x4, 7, 64 | 32 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.REGMAP["fc"] = new com.adobe.utils.AGALMiniAssembler$Register("fc", "fragment constant", 0x1, 27, 32 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["ft"] = new com.adobe.utils.AGALMiniAssembler$Register("ft", "fragment temporary", 0x2, 7, 32 | 1 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["fs"] = new com.adobe.utils.AGALMiniAssembler$Register("fs", "texture sampler", 0x5, 7, 32 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP[com.adobe.utils.AGALMiniAssembler.FO] = new com.adobe.utils.AGALMiniAssembler$Register(com.adobe.utils.AGALMiniAssembler.FO, "fragment output", 0x3, 0, 32 | 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["rgba"] = new com.adobe.utils.AGALMiniAssembler$Sampler("rgba", 8, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["dxt1"] = new com.adobe.utils.AGALMiniAssembler$Sampler("dxt1", 8, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["dxt5"] = new com.adobe.utils.AGALMiniAssembler$Sampler("dxt5", 8, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["2d"] = new com.adobe.utils.AGALMiniAssembler$Sampler("2d", 12, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["3d"] = new com.adobe.utils.AGALMiniAssembler$Sampler("3d", 12, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["cube"] = new com.adobe.utils.AGALMiniAssembler$Sampler("cube", 12, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["mipnearest"] = new com.adobe.utils.AGALMiniAssembler$Sampler("mipnearest", 24, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["miplinear"] = new com.adobe.utils.AGALMiniAssembler$Sampler("miplinear", 24, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["mipnone"] = new com.adobe.utils.AGALMiniAssembler$Sampler("mipnone", 24, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["nomip"] = new com.adobe.utils.AGALMiniAssembler$Sampler("nomip", 24, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["nearest"] = new com.adobe.utils.AGALMiniAssembler$Sampler("nearest", 28, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["linear"] = new com.adobe.utils.AGALMiniAssembler$Sampler("linear", 28, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic2x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic2x", 28, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic4x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic4x", 28, 3);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic8x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic8x", 28, 4);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic16x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic16x", 28, 5);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["centroid"] = new com.adobe.utils.AGALMiniAssembler$Sampler("centroid", 16, 1 << 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["single"] = new com.adobe.utils.AGALMiniAssembler$Sampler("single", 16, 1 << 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["depth"] = new com.adobe.utils.AGALMiniAssembler$Sampler("depth", 16, 1 << 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["repeat"] = new com.adobe.utils.AGALMiniAssembler$Sampler("repeat", 20, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["wrap"] = new com.adobe.utils.AGALMiniAssembler$Sampler("wrap", 20, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["clamp"] = new com.adobe.utils.AGALMiniAssembler$Sampler("clamp", 20, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["clamp_u_repeat_v"] = new com.adobe.utils.AGALMiniAssembler$Sampler("clamp_u_repeat_v", 20, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["repeat_u_clamp_v"] = new com.adobe.utils.AGALMiniAssembler$Sampler("repeat_u_clamp_v", 20, 3);
};

com.adobe.utils.AGALMiniAssembler.OPMAP = new flash.utils.Dictionary(false);

com.adobe.utils.AGALMiniAssembler.REGMAP = new flash.utils.Dictionary(false);

com.adobe.utils.AGALMiniAssembler.SAMPLEMAP = new flash.utils.Dictionary(false);

com.adobe.utils.AGALMiniAssembler.MAX_NESTING = 4;

com.adobe.utils.AGALMiniAssembler.MAX_OPCODES = 256;

com.adobe.utils.AGALMiniAssembler.FRAGMENT = "fragment";

com.adobe.utils.AGALMiniAssembler.VERTEX = "vertex";

com.adobe.utils.AGALMiniAssembler.SAMPLER_TYPE_SHIFT = 8;

com.adobe.utils.AGALMiniAssembler.SAMPLER_DIM_SHIFT = 12;

com.adobe.utils.AGALMiniAssembler.SAMPLER_SPECIAL_SHIFT = 16;

com.adobe.utils.AGALMiniAssembler.SAMPLER_REPEAT_SHIFT = 20;

com.adobe.utils.AGALMiniAssembler.SAMPLER_MIPMAP_SHIFT = 24;

com.adobe.utils.AGALMiniAssembler.SAMPLER_FILTER_SHIFT = 28;

com.adobe.utils.AGALMiniAssembler.REG_WRITE = 0x1;

com.adobe.utils.AGALMiniAssembler.REG_READ = 0x2;

com.adobe.utils.AGALMiniAssembler.REG_FRAG = 0x20;

com.adobe.utils.AGALMiniAssembler.REG_VERT = 0x40;

com.adobe.utils.AGALMiniAssembler.OP_SCALAR = 0x1;

com.adobe.utils.AGALMiniAssembler.OP_INC_NEST = 0x2;

com.adobe.utils.AGALMiniAssembler.OP_DEC_NEST = 0x4;

com.adobe.utils.AGALMiniAssembler.OP_SPECIAL_TEX = 0x8;

com.adobe.utils.AGALMiniAssembler.OP_SPECIAL_MATRIX = 0x10;

com.adobe.utils.AGALMiniAssembler.OP_FRAG_ONLY = 0x20;

com.adobe.utils.AGALMiniAssembler.OP_NO_DEST = 0x80;

com.adobe.utils.AGALMiniAssembler.MOV = "mov";

com.adobe.utils.AGALMiniAssembler.ADD = "add";

com.adobe.utils.AGALMiniAssembler.SUB = "sub";

com.adobe.utils.AGALMiniAssembler.MUL = "mul";

com.adobe.utils.AGALMiniAssembler.DIV = "div";

com.adobe.utils.AGALMiniAssembler.RCP = "rcp";

com.adobe.utils.AGALMiniAssembler.MIN = "min";

com.adobe.utils.AGALMiniAssembler.MAX = "max";

com.adobe.utils.AGALMiniAssembler.FRC = "frc";

com.adobe.utils.AGALMiniAssembler.SQT = "sqt";

com.adobe.utils.AGALMiniAssembler.RSQ = "rsq";

com.adobe.utils.AGALMiniAssembler.POW = "pow";

com.adobe.utils.AGALMiniAssembler.LOG = "log";

com.adobe.utils.AGALMiniAssembler.EXP = "exp";

com.adobe.utils.AGALMiniAssembler.NRM = "nrm";

com.adobe.utils.AGALMiniAssembler.SIN = "sin";

com.adobe.utils.AGALMiniAssembler.COS = "cos";

com.adobe.utils.AGALMiniAssembler.CRS = "crs";

com.adobe.utils.AGALMiniAssembler.DP3 = "dp3";

com.adobe.utils.AGALMiniAssembler.DP4 = "dp4";

com.adobe.utils.AGALMiniAssembler.ABS = "abs";

com.adobe.utils.AGALMiniAssembler.NEG = "neg";

com.adobe.utils.AGALMiniAssembler.SAT = "sat";

com.adobe.utils.AGALMiniAssembler.M33 = "m33";

com.adobe.utils.AGALMiniAssembler.M44 = "m44";

com.adobe.utils.AGALMiniAssembler.M34 = "m34";

com.adobe.utils.AGALMiniAssembler.IFZ = "ifz";

com.adobe.utils.AGALMiniAssembler.INZ = "inz";

com.adobe.utils.AGALMiniAssembler.IFE = "ife";

com.adobe.utils.AGALMiniAssembler.INE = "ine";

com.adobe.utils.AGALMiniAssembler.IFG = "ifg";

com.adobe.utils.AGALMiniAssembler.IFL = "ifl";

com.adobe.utils.AGALMiniAssembler.IEG = "ieg";

com.adobe.utils.AGALMiniAssembler.IEL = "iel";

com.adobe.utils.AGALMiniAssembler.ELS = "els";

com.adobe.utils.AGALMiniAssembler.EIF = "eif";

com.adobe.utils.AGALMiniAssembler.REP = "rep";

com.adobe.utils.AGALMiniAssembler.ERP = "erp";

com.adobe.utils.AGALMiniAssembler.BRK = "brk";

com.adobe.utils.AGALMiniAssembler.KIL = "kil";

com.adobe.utils.AGALMiniAssembler.TEX = "tex";

com.adobe.utils.AGALMiniAssembler.SGE = "sge";

com.adobe.utils.AGALMiniAssembler.SLT = "slt";

com.adobe.utils.AGALMiniAssembler.SGN = "sgn";

com.adobe.utils.AGALMiniAssembler.SEQ = "seq";

com.adobe.utils.AGALMiniAssembler.SNE = "sne";

com.adobe.utils.AGALMiniAssembler.VA = "va";

com.adobe.utils.AGALMiniAssembler.VC = "vc";

com.adobe.utils.AGALMiniAssembler.VT = "vt";

com.adobe.utils.AGALMiniAssembler.VO = false ? "vo" : "op";

com.adobe.utils.AGALMiniAssembler.I = false ? "i" : "v";

com.adobe.utils.AGALMiniAssembler.FC = "fc";

com.adobe.utils.AGALMiniAssembler.FT = "ft";

com.adobe.utils.AGALMiniAssembler.FS = "fs";

com.adobe.utils.AGALMiniAssembler.FO = false ? "fo" : "oc";

com.adobe.utils.AGALMiniAssembler.D2 = "2d";

com.adobe.utils.AGALMiniAssembler.D3 = "3d";

com.adobe.utils.AGALMiniAssembler.CUBE = "cube";

com.adobe.utils.AGALMiniAssembler.MIPNEAREST = "mipnearest";

com.adobe.utils.AGALMiniAssembler.MIPLINEAR = "miplinear";

com.adobe.utils.AGALMiniAssembler.MIPNONE = "mipnone";

com.adobe.utils.AGALMiniAssembler.NOMIP = "nomip";

com.adobe.utils.AGALMiniAssembler.NEAREST = "nearest";

com.adobe.utils.AGALMiniAssembler.LINEAR = "linear";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC2X = "anisotropic2x";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC4X = "anisotropic4x";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC8X = "anisotropic8x";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC16X = "anisotropic16x";

com.adobe.utils.AGALMiniAssembler.CENTROID = "centroid";

com.adobe.utils.AGALMiniAssembler.SINGLE = "single";

com.adobe.utils.AGALMiniAssembler.DEPTH = "depth";

com.adobe.utils.AGALMiniAssembler.REPEAT = "repeat";

com.adobe.utils.AGALMiniAssembler.WRAP = "wrap";

com.adobe.utils.AGALMiniAssembler.CLAMP = "clamp";

com.adobe.utils.AGALMiniAssembler.REPEAT_U_CLAMP_V = "repeat_u_clamp_v";

com.adobe.utils.AGALMiniAssembler.CLAMP_U_REPEAT_V = "clamp_u_repeat_v";

com.adobe.utils.AGALMiniAssembler.RGBA = "rgba";

com.adobe.utils.AGALMiniAssembler.DXT1 = "dxt1";

com.adobe.utils.AGALMiniAssembler.DXT5 = "dxt5";

Object.defineProperty(com.adobe.utils.AGALMiniAssembler.prototype, 'agalcode', {
  get: function() { return this.get_agalcode(); },
  set: function(value) { return this.set_agalcode(value); }
});
Object.defineProperty(com.adobe.utils.AGALMiniAssembler.prototype, 'error', {
  get: function() { return this.get_error(); },
  set: function(value) { return this.set_error(value); }
});

com.adobe.utils.AGALMiniAssembler.className = "com.adobe.utils.AGALMiniAssembler";

com.adobe.utils.AGALMiniAssembler.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.utils.ByteArray');
	p.push('flash.utils.getTimer');
	return p;
};

com.adobe.utils.AGALMiniAssembler.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

com.adobe.utils.AGALMiniAssembler.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'debugging', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

com.adobe.utils.AGALMiniAssembler$OpCode = function(name, numRegister, emitCode, flags) {
	this._numRegister = 0;
	this._flags = 0;
	this._name = null;
	this._emitCode = 0;
	this._name = name;
	this._numRegister = numRegister;
	this._emitCode = emitCode;
	this._flags = flags;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_emitCode = function() {
	return this._emitCode;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_flags = function() {
	return this._flags;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_name = function() {
	return this._name;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_numRegister = function() {
	return this._numRegister;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.toString = function() {
	return "[OpCode name=\"" + this._name + "\", numRegister=" + this._numRegister + ", emitCode=" + this._emitCode + ", flags=" + this._flags + "]";
};

com.adobe.utils.AGALMiniAssembler$Register = function(name, longName, emitCode, range, flags) {
	this._name = null;
	this._flags = 0;
	this._emitCode = 0;
	this._range = 0;
	this._longName = null;
	this._name = name;
	this._longName = longName;
	this._emitCode = emitCode;
	this._range = range;
	this._flags = flags;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_emitCode = function() {
	return this._emitCode;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_longName = function() {
	return this._longName;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_name = function() {
	return this._name;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_flags = function() {
	return this._flags;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_range = function() {
	return this._range;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.toString = function() {
	return "[Register name=\"" + this._name + "\", longName=\"" + this._longName + "\", emitCode=" + this._emitCode + ", range=" + this._range + ", flags=" + this._flags + "]";
};

com.adobe.utils.AGALMiniAssembler$Sampler = function(name, flag, mask) {
	this._flag = 0;
	this._name = null;
	this._mask = 0;
	this._name = name;
	this._flag = flag;
	this._mask = mask;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.get_flag = function() {
	return this._flag;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.get_mask = function() {
	return this._mask;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.get_name = function() {
	return this._name;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.toString = function() {
	return "[Sampler name=\"" + this._name + "\", flag=\"" + this._flag + "\", mask=" + this.get_mask() + "]";
};


// ====================================================
// flash.media.SoundMixer
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundMixer = function() {
};

flash.media.SoundMixer.stopAll = function() {
	var $n0;
	for (var $v0 in ($n0 = flash.media.SoundMixer.soundTransformInstance.transforms)){
		var transform = $n0[$v0];
		if (transform.buffer)
			transform.buffer.stop(0);
	}
};

flash.media.SoundMixer.cache = {};

flash.media.SoundMixer.ctx = null;

flash.media.SoundMixer.usingWebAudio = true;

flash.media.SoundMixer.noAudio = false;

flash.media.SoundMixer.codecs = {};

flash.media.SoundMixer.masterGain;

flash.media.SoundMixer.soundTransformInstance;

flash.media.SoundMixer.get_soundTransform = function() {
	if (!flash.media.SoundMixer.soundTransformInstance) {
		if (typeof(AudioContext) !== "undefined") {
			flash.media.SoundMixer.ctx = new webkitAudioContext();
		} else if (typeof(webkitAudioContext) !== "undefined") {
			flash.media.SoundMixer.ctx = new webkitAudioContext();
		} else if (typeof(Audio) !== "undefined") {
			flash.media.SoundMixer.usingWebAudio = false;
		} else {
			flash.media.SoundMixer.usingWebAudio = false;
			flash.media.SoundMixer.noAudio = true;
		}
		if (flash.media.SoundMixer.usingWebAudio) {
			flash.media.SoundMixer.masterGain = (typeof(flash.media.SoundMixer.ctx.createGain) === "undefined") ? flash.media.SoundMixer.ctx.createGainNode() : flash.media.SoundMixer.ctx.createGain();
			flash.media.SoundMixer.masterGain.gain.value = 1;
			flash.media.SoundMixer.masterGain.connect(flash.media.SoundMixer.ctx.destination);
		}
		var audioTest = null;
		if (!flash.media.SoundMixer.noAudio) {
			audioTest = new Audio();
			flash.media.SoundMixer.codecs = {mp3:!!audioTest.canPlayType("audio\/mpeg;").replace(/^no$/, ""), opus:!!audioTest.canPlayType("audio\/ogg; codecs=\"opus\"").replace(/^no$/, ""), ogg:!!audioTest.canPlayType("audio\/ogg; codecs=\"vorbis\"").replace(/^no$/, ""), wav:!!audioTest.canPlayType("audio\/wav; codecs=\"1\"").replace(/^no$/, ""), m4a:!!(audioTest.canPlayType("audio\/x-m4a;") || audioTest.canPlayType("audio\/aac;")).replace(/^no$/, ""), webm:!!audioTest.canPlayType("audio\/webm; codecs=\"vorbis\"").replace(/^no$/, "")};
		}
		flash.media.SoundMixer.soundTransformInstance = new flash.media.SoundTransform(1, 0);
	}
	return flash.media.SoundMixer.soundTransformInstance;
};

flash.media.SoundMixer.getGainNode = function() {
	var node = (typeof(flash.media.SoundMixer.ctx.createGain) === "undefined") ? flash.media.SoundMixer.ctx.createGainNode() : flash.media.SoundMixer.ctx.createGain();
	return node;
};


flash.media.SoundMixer.className = "flash.media.SoundMixer";

flash.media.SoundMixer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.SoundTransform');
	return p;
};

flash.media.SoundMixer.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundMixer.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Point
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Point = function(x, y) {
	this.x = x;
	this.y = y;
};

flash.geom.Point.interpolate = function(pt1, pt2, f) {
	var xDis = (pt2.x - pt1.x);
	var yDis = (pt2.y - pt1.y);
	return new flash.geom.Point(pt1.x + (xDis * f), pt1.y + (xDis * f));
};

flash.geom.Point.distance = function(pt1, pt2) {
	var a = pt1.x - pt2.x;
	var b = pt1.y - pt2.y;
	return Math.sqrt(a * a + b * b);
};

flash.geom.Point.prototype.clone = function() {
	return new flash.geom.Point(this.x, this.y);
};

flash.geom.Point.prototype.normalize = function(thickness) {
};

flash.geom.Point.prototype.get_length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

flash.geom.Point.prototype.add = function(v) {
	return new flash.geom.Point(this.x + v.x, this.y + v.y);
};

flash.geom.Point.prototype.subtract = function(v) {
	return new flash.geom.Point(this.x - v.x, this.y - v.y);
};

flash.geom.Point.prototype.equals = function(toCompare) {
	return (this.x == toCompare.x && this.y == toCompare.y);
};

flash.geom.Point.prototype.toString = function() {
	return "Point";
};

flash.geom.Point.prototype.setTo = function(xa, ya) {
	this.x = xa;
	this.y = ya;
};

Object.defineProperty(flash.geom.Point.prototype, 'length', {
  get: function() { return this.get_length(); },
  set: function(value) { return this.set_length(value); }
});

flash.geom.Point.className = "flash.geom.Point";

flash.geom.Point.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Point.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Point.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.GraphicsGradientFill
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GraphicsGradientFill = function() {
this.colors = null;
this.matrix = null;
};


flash.display.GraphicsGradientFill.className = "flash.display.GraphicsGradientFill";

flash.display.GraphicsGradientFill.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsGradientFill.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsGradientFill.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.Capabilities
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.Capabilities = function() {
};

flash.system.Capabilities.version = "1.0.0";

flash.system.Capabilities.os = "mockapi";

flash.system.Capabilities.screenDPI = 1;

flash.system.Capabilities.screenResolutionX = 100;

flash.system.Capabilities.screenResolutionY = 100;

flash.system.Capabilities.isDebugger = false;

flash.system.Capabilities.playerType = "js";

flash.system.Capabilities.manufacturer = "Unknown OS";


flash.system.Capabilities.className = "flash.system.Capabilities";

flash.system.Capabilities.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.Capabilities.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.Capabilities.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Transform
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Transform = function() {
this.matrix = new flash.geom.Matrix(1, 0, 0, 1, 0, 0);
this.worldMatrix = new flash.geom.Matrix(1, 0, 0, 1, 0, 0);
this.target = null;
this.colorTransform = null;
};


flash.geom.Transform.className = "flash.geom.Transform";

flash.geom.Transform.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Transform.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Matrix');
	return p;
};

flash.geom.Transform.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.BitmapDataChannel
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.BitmapDataChannel = function() {
	
};

flash.display.BitmapDataChannel.ALPHA = 8;

flash.display.BitmapDataChannel.BLUE = 4;

flash.display.BitmapDataChannel.GREEN = 2;

flash.display.BitmapDataChannel.RED = 1;


flash.display.BitmapDataChannel.className = "flash.display.BitmapDataChannel";

flash.display.BitmapDataChannel.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.BitmapDataChannel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.BitmapDataChannel.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.events.Event
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.Event = function(type, bubbles, cancelable) {
	this._bubbles = null;
	this._cancelable = null;
	this._type = "";
	this.target = null;
	this.currentTarget = null;
	this._type = type;
	this._bubbles = bubbles;
	this._cancelable = cancelable;
};

flash.events.Event.ACTIVATE = "activate";

flash.events.Event.ADDED_TO_STAGE = "addedToStage";

flash.events.Event.CLOSE = "close";

flash.events.Event.OPEN = "open";

flash.events.Event.COMPLETE = "complete";

flash.events.Event.CONNECT = "connect";

flash.events.Event.CHANGE = "change";

flash.events.Event.ADDED = "added";

flash.events.Event.ENTER_FRAME = "enterFrame";

flash.events.Event.FULLSCREEN = "fullScreen";

flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";

flash.events.Event.REMOVED = "removed";

flash.events.Event.RENDER = "render";

flash.events.Event.RESIZE = "resize";

flash.events.Event.MOUSE_LEAVE = "mouseLeave";

flash.events.Event.SOUND_COMPLETE = "soundComplete";

flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";

flash.events.Event.prototype.get_type = function() {
	return this._type;
};

flash.events.Event.prototype.get_bubbles = function() {
	return this._bubbles;
};

flash.events.Event.prototype.get_cancelable = function() {
	return this._cancelable;
};

flash.events.Event.prototype.clone = function() {
	return new flash.events.Event(this.get_type(), false, false);
};

flash.events.Event.prototype.preventDefault = function() {
};

flash.events.Event.prototype.toString = function() {
	return "";
};

Object.defineProperty(flash.events.Event.prototype, 'cancelable', {
  get: function() { return this.get_cancelable(); },
  set: function(value) { return this.set_cancelable(value); }
});
Object.defineProperty(flash.events.Event.prototype, 'bubbles', {
  get: function() { return this.get_bubbles(); },
  set: function(value) { return this.set_bubbles(value); }
});
Object.defineProperty(flash.events.Event.prototype, 'type', {
  get: function() { return this.get_type(); },
  set: function(value) { return this.set_type(value); }
});

flash.events.Event.className = "flash.events.Event";

flash.events.Event.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.Event.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.Event.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ErrorEvent = function(type, bubbles, cancelable, text, id) {
	this._errorID = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
	this._errorID = id;
};

flash.events.ErrorEvent.ERROR = "error";

flash.events.ErrorEvent.prototype.get_errorID = function() {
	return this._errorID;
};

Object.defineProperty(flash.events.ErrorEvent.prototype, 'errorID', {
  get: function() { return this.get_errorID(); },
  set: function(value) { return this.set_errorID(value); }
});

$inherit(flash.events.ErrorEvent, flash.events.Event);

flash.events.ErrorEvent.className = "flash.events.ErrorEvent";

flash.events.ErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.SecurityErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.SecurityErrorEvent = function(type, bubbles, cancelable, text, id) {
	flash.events.ErrorEvent.call(this, type, bubbles, cancelable, text, id);
};

flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";


$inherit(flash.events.SecurityErrorEvent, flash.events.ErrorEvent);

flash.events.SecurityErrorEvent.className = "flash.events.SecurityErrorEvent";

flash.events.SecurityErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.SecurityErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.SecurityErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.AsyncErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.AsyncErrorEvent = function(type, bubbles, cancelable, text, id) {
	flash.events.ErrorEvent.call(this, type, bubbles, cancelable, text, id);
};

flash.events.AsyncErrorEvent.ASYNC_ERROR = "asyncError";


$inherit(flash.events.AsyncErrorEvent, flash.events.ErrorEvent);

flash.events.AsyncErrorEvent.className = "flash.events.AsyncErrorEvent";

flash.events.AsyncErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.AsyncErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.AsyncErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ErrorEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.KeyboardEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.KeyboardEvent = function(type, bubbles, cancelable, charCodeValue, keyCodeValue, keyLocationValue, ctrlKeyValue, altKeyValue, shiftKeyValue, controlKeyValue, commandKeyValue) {
	this.keyCode = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.keyCode = keyCodeValue;
};

flash.events.KeyboardEvent.KEY_UP = "keyUp";

flash.events.KeyboardEvent.KEY_DOWN = "keyDown";


$inherit(flash.events.KeyboardEvent, flash.events.Event);

flash.events.KeyboardEvent.className = "flash.events.KeyboardEvent";

flash.events.KeyboardEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.KeyboardEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.KeyboardEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'charCodeValue', t:'uint'});
			p.push({n:'keyCodeValue', t:'uint'});
			p.push({n:'keyLocationValue', t:'uint'});
			p.push({n:'ctrlKeyValue', t:'Boolean'});
			p.push({n:'altKeyValue', t:'Boolean'});
			p.push({n:'shiftKeyValue', t:'Boolean'});
			p.push({n:'controlKeyValue', t:'Boolean'});
			p.push({n:'commandKeyValue', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.TextEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TextEvent = function(type, bubbles, cancelable, text) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
};

flash.events.TextEvent.LINK = "link";

flash.events.TextEvent.TEXT_INPUT = "textInput";


$inherit(flash.events.TextEvent, flash.events.Event);

flash.events.TextEvent.className = "flash.events.TextEvent";

flash.events.TextEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TextEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TextEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.NetStatusEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.NetStatusEvent = function(type, bubbles, cancelable) {
	this.info = {};
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.NetStatusEvent.NET_STATUS = "netStatus";


$inherit(flash.events.NetStatusEvent, flash.events.Event);

flash.events.NetStatusEvent.className = "flash.events.NetStatusEvent";

flash.events.NetStatusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.NetStatusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.NetStatusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ContextMenuEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ContextMenuEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.ContextMenuEvent.MENU_ITEM_SELECT = "menuItemSelect";


$inherit(flash.events.ContextMenuEvent, flash.events.Event);

flash.events.ContextMenuEvent.className = "flash.events.ContextMenuEvent";

flash.events.ContextMenuEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ContextMenuEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ContextMenuEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ActivityEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ActivityEvent = function(type, bubbles, cancelable, activating) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};


$inherit(flash.events.ActivityEvent, flash.events.Event);

flash.events.ActivityEvent.className = "flash.events.ActivityEvent";

flash.events.ActivityEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ActivityEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ActivityEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'activating', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.FullScreenEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.FullScreenEvent = function(type, bubbles, cancelable, fullScreen) {
	flash.events.ActivityEvent.call(this, type, bubbles, cancelable, false);
};

flash.events.FullScreenEvent.FULL_SCREEN = "fullScreen";


$inherit(flash.events.FullScreenEvent, flash.events.ActivityEvent);

flash.events.FullScreenEvent.className = "flash.events.FullScreenEvent";

flash.events.FullScreenEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.FullScreenEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.FullScreenEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'fullScreen', t:'Boolean'});
			break;
		case 1:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		case 2:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		case 3:
			p = flash.events.ActivityEvent.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.IOErrorEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.IOErrorEvent = function(type, bubbles, cancelable, text, id) {
	this._errorID = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
	this._errorID = id;
};

flash.events.IOErrorEvent.IO_ERROR = "ioError";

flash.events.IOErrorEvent.NETWORK_ERROR = "networkError";

flash.events.IOErrorEvent.prototype.get_errorID = function() {
	return this._errorID;
};

Object.defineProperty(flash.events.IOErrorEvent.prototype, 'errorID', {
  get: function() { return this.get_errorID(); },
  set: function(value) { return this.set_errorID(value); }
});

$inherit(flash.events.IOErrorEvent, flash.events.Event);

flash.events.IOErrorEvent.className = "flash.events.IOErrorEvent";

flash.events.IOErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.IOErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.IOErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.TimerEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TimerEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.TimerEvent.TIMER = "timer";

flash.events.TimerEvent.TIMER_COMPLETE = "timerComplete";


$inherit(flash.events.TimerEvent, flash.events.Event);

flash.events.TimerEvent.className = "flash.events.TimerEvent";

flash.events.TimerEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TimerEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TimerEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.TouchEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.TouchEvent = function(type, bubbles, cancelable, touchPointID, isPrimaryTouchPoint, localX, localY, sizeX, sizeY, pressure, relatedObject, ctrlKey, altKey, shiftKey, commandKey, controlKey, timestamp, touchIntent, samples, isTouchPointCanceled) {
	this.stageY = 0;
	this.stageX = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.pressure = pressure;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.touchPointID = touchPointID;
	this.isPrimaryTouchPoint = isPrimaryTouchPoint;
};

flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";

flash.events.TouchEvent.TOUCH_END = "touchEnd";

flash.events.TouchEvent.TOUCH_MOVE = "touchMove";


$inherit(flash.events.TouchEvent, flash.events.Event);

flash.events.TouchEvent.className = "flash.events.TouchEvent";

flash.events.TouchEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.TouchEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.TouchEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'touchPointID', t:'int'});
			p.push({n:'isPrimaryTouchPoint', t:'Boolean'});
			p.push({n:'localX', t:'Number'});
			p.push({n:'localY', t:'Number'});
			p.push({n:'sizeX', t:'Number'});
			p.push({n:'sizeY', t:'Number'});
			p.push({n:'pressure', t:'Number'});
			p.push({n:'relatedObject', t:'flash.display.InteractiveObject'});
			p.push({n:'ctrlKey', t:'Boolean'});
			p.push({n:'altKey', t:'Boolean'});
			p.push({n:'shiftKey', t:'Boolean'});
			p.push({n:'commandKey', t:'Boolean'});
			p.push({n:'controlKey', t:'Boolean'});
			p.push({n:'timestamp', t:'Number'});
			p.push({n:'touchIntent', t:'String'});
			p.push({n:'samples', t:'flash.utils.ByteArray'});
			p.push({n:'isTouchPointCanceled', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.MouseEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.localX = localX;
	this.localY = localY;
};

flash.events.MouseEvent.CLICK = "click";

flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";

flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";

flash.events.MouseEvent.MOUSE_UP = "mouseUp";

flash.events.MouseEvent.MOUSE_OVER = "mouseOver";

flash.events.MouseEvent.MOUSE_OUT = "mouseOut";

flash.events.MouseEvent.ROLL_OVER = "rollOver";

flash.events.MouseEvent.ROLL_OUT = "rollOut";

flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";

flash.events.MouseEvent.prototype.get_stageX = function() {
	return this.localX;
};

flash.events.MouseEvent.prototype.get_stageY = function() {
	return this.localY;
};

Object.defineProperty(flash.events.MouseEvent.prototype, 'stageY', {
  get: function() { return this.get_stageY(); },
  set: function(value) { return this.set_stageY(value); }
});
Object.defineProperty(flash.events.MouseEvent.prototype, 'stageX', {
  get: function() { return this.get_stageX(); },
  set: function(value) { return this.set_stageX(value); }
});

$inherit(flash.events.MouseEvent, flash.events.Event);

flash.events.MouseEvent.className = "flash.events.MouseEvent";

flash.events.MouseEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.MouseEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.MouseEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'localX', t:'Number'});
			p.push({n:'localY', t:'Number'});
			p.push({n:'relatedObject', t:'flash.display.InteractiveObject'});
			p.push({n:'ctrlKey', t:'Boolean'});
			p.push({n:'altKey', t:'Boolean'});
			p.push({n:'shiftKey', t:'Boolean'});
			p.push({n:'buttonDown', t:'Boolean'});
			p.push({n:'delta', t:'int'});
			p.push({n:'commandKey', t:'Boolean'});
			p.push({n:'controlKey', t:'Boolean'});
			p.push({n:'clickCount', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.FocusEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.FocusEvent = function(type, bubbles, cancelable) {
	flash.events.Event.call(this, type, bubbles, cancelable);
};

flash.events.FocusEvent.FOCUS_IN = "focusIn";

flash.events.FocusEvent.FOCUS_OUT = "focusOut";


$inherit(flash.events.FocusEvent, flash.events.Event);

flash.events.FocusEvent.className = "flash.events.FocusEvent";

flash.events.FocusEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.FocusEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.FocusEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.events.ProgressEvent
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ProgressEvent = function(type, bubbles, cancelable, bytesLoaded, bytesTotal) {
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};

flash.events.ProgressEvent.PROGRESS = "progress";

flash.events.ProgressEvent.SOCKET_DATA = "socketData";


$inherit(flash.events.ProgressEvent, flash.events.Event);

flash.events.ProgressEvent.className = "flash.events.ProgressEvent";

flash.events.ProgressEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ProgressEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ProgressEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'bytesLoaded', t:'Number'});
			p.push({n:'bytesTotal', t:'Number'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// GuiceInjectorBootstrap
// ====================================================


GuiceInjectorBootstrap = function(mainClassName, dynamicClassBaseUrl) {
	this.mainClassName = mainClassName;
	this.dynamicClassBaseUrl = dynamicClassBaseUrl;
};

GuiceInjectorBootstrap.prototype.launch = function(bgcolor, width, height, frameRate) {
	var urlRewriter = new guice.loader.URLRewriterBase(false);
	var loader = new guice.loader.SynchronousClassLoader(new XMLHttpRequest(), urlRewriter, this.dynamicClassBaseUrl);
	var guiceJs = new guice.GuiceJs(loader);
	var injector = guiceJs.createInjector(null);
	var classBuilder = injector.getInstance(guice.InjectionClassBuilder);
	var obj2 = classBuilder.buildClass("flash.utils.FlashEmbed");
	var obj = classBuilder.buildClass(this.mainClassName);
	if (bgcolor && bgcolor.indexOf("#", 0) > -1)
		bgcolor = "0x" + bgcolor.substring(1, bgcolor.length);
	flash.utils.FlashTimingEngine.start(obj, frameRate, width, height, bgcolor);
};


GuiceInjectorBootstrap.className = "GuiceInjectorBootstrap";

GuiceInjectorBootstrap.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('guice.loader.SynchronousClassLoader');
	p.push('flash.utils.FlashTimingEngine');
	p.push('guice.loader.URLRewriterBase');
	p.push('guice.GuiceJs');
	p.push('guice.InjectionClassBuilder');
	return p;
};

GuiceInjectorBootstrap.getStaticDependencies = function(t) {
	var p;
	return [];
};

GuiceInjectorBootstrap.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'mainClassName', t:'String'});
			p.push({n:'dynamicClassBaseUrl', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.utils.Embed
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Embed = function(metadata) {
	this.mimeType = "";
	this.source = "";
	this.metadata = metadata;
	if (metadata.source)
		this.source = metadata.source;
	if (metadata.mimeType)
		this.source = metadata.mimeType;
};

flash.utils.Embed.createClass = function(metadata) {
	return metadata;
};


flash.utils.Embed.className = "flash.utils.Embed";

flash.utils.Embed.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Embed.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Embed.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'metadata', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.globalization.DateTimeFormatter
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.globalization == "undefined")
	flash.globalization = {};

flash.globalization.DateTimeFormatter = function(requestedLocaleIDName, dateStyle, timeStyle) {
};

flash.globalization.DateTimeFormatter.prototype.getMonthNames = function(nameStyle, context) {
	var months = [];
	months.push("January");
	months.push("February");
	months.push("March");
	months.push("April");
	months.push("May");
	months.push("June");
	months.push("July");
	months.push("August");
	months.push("Spetember");
	months.push("October");
	months.push("November");
	months.push("December");
	return months;
};


flash.globalization.DateTimeFormatter.className = "flash.globalization.DateTimeFormatter";

flash.globalization.DateTimeFormatter.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.globalization.DateTimeFormatter.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.globalization.DateTimeFormatter.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'requestedLocaleIDName', t:'String'});
			p.push({n:'dateStyle', t:'String'});
			p.push({n:'timeStyle', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.LineScaleMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.LineScaleMode = function() {
};

flash.display.LineScaleMode.NONE = "none";


flash.display.LineScaleMode.className = "flash.display.LineScaleMode";

flash.display.LineScaleMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.LineScaleMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.LineScaleMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.GraphicsPathCommand
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GraphicsPathCommand = function() {
};

flash.display.GraphicsPathCommand.MOVE_TO = 1;

flash.display.GraphicsPathCommand.LINE_TO = 2;


flash.display.GraphicsPathCommand.className = "flash.display.GraphicsPathCommand";

flash.display.GraphicsPathCommand.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPathCommand.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GraphicsPathCommand.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.System
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.System = function() {
};

flash.system.System.freeMemory = 0;

flash.system.System.privateMemory = 0;

flash.system.System.totalMemory = 0;

flash.system.System.setClipboard = function(message) {
};

flash.system.System.gc = function() {
};

flash.system.System.disposeXML = function(node) {
};

flash.system.System.pauseForGCIfCollectionImminent = function(imminence) {
};


flash.system.System.className = "flash.system.System";

flash.system.System.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.System.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.System.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.StageDisplayState
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageDisplayState = function() {
};

flash.display.StageDisplayState.FULL_SCREEN = "fullScreen";

flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = "fullScreenInteractive";

flash.display.StageDisplayState.NORMAL = "normal";


flash.display.StageDisplayState.className = "flash.display.StageDisplayState";

flash.display.StageDisplayState.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageDisplayState.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageDisplayState.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.Shader
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.Shader = function(code) {
};


flash.display.Shader.className = "flash.display.Shader";

flash.display.Shader.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.Shader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'code', t:'flash.utils.ByteArray'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.BitmapData
// ====================================================

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


// ====================================================
// flash.display.GradientType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.GradientType = function() {
};

flash.display.GradientType.LINEAR = "linear";

flash.display.GradientType.RADIAL = "radial";


flash.display.GradientType.className = "flash.display.GradientType";

flash.display.GradientType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.GradientType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.GradientType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.BlendMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.BlendMode = function() {
};

flash.display.BlendMode.NORMAL = "normal";

flash.display.BlendMode.MULTIPLY = "MULTIPLY";

flash.display.BlendMode.ADD = "add";

flash.display.BlendMode.SUBTRACT = "subtract";

flash.display.BlendMode.OVERLAY = "overlay";


flash.display.BlendMode.className = "flash.display.BlendMode";

flash.display.BlendMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.BlendMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.BlendMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.URLVariables
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLVariables = function(source) {
};

flash.net.URLVariables.prototype.toString = function() {
	var vars = "";
	var v = 0;
	for (var key in this) {
		if (v++ > 0)
			vars += "&";
		vars += key + "=" + escape(this[key]);
	}
	return vars;
};


flash.net.URLVariables.className = "flash.net.URLVariables";

flash.net.URLVariables.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLVariables.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLVariables.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'source', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.StageScaleMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageScaleMode = function() {
};

flash.display.StageScaleMode.NO_SCALE = "noScale";

flash.display.StageScaleMode.SHOW_ALL = "showAll";


flash.display.StageScaleMode.className = "flash.display.StageScaleMode";

flash.display.StageScaleMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageScaleMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageScaleMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.FrameLabel
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.FrameLabel = function() {
};


flash.display.FrameLabel.className = "flash.display.FrameLabel";

flash.display.FrameLabel.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.FrameLabel.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.FrameLabel.injectionPoints = function(t) {
	return [];
};

// ====================================================
// mx.core.MovieClipAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.MovieClipAsset = function() {
};


mx.core.MovieClipAsset.className = "mx.core.MovieClipAsset";

mx.core.MovieClipAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.MovieClipAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.MovieClipAsset.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display.StageQuality
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.StageQuality = function() {
	
};

flash.display.StageQuality.BEST = "best";

flash.display.StageQuality.HIGH = "high";

flash.display.StageQuality.HIGH_16X16 = "16x16";

flash.display.StageQuality.HIGH_16X16_LINEAR = "16x16linear";

flash.display.StageQuality.HIGH_8X8 = "8x8";

flash.display.StageQuality.HIGH_8X8_LINEAR = "8x8linear";

flash.display.StageQuality.LOW = "low";

flash.display.StageQuality.MEDIUM = "medium";


flash.display.StageQuality.className = "flash.display.StageQuality";

flash.display.StageQuality.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageQuality.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.StageQuality.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.media.SoundLoaderContext
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.media == "undefined")
	flash.media = {};

flash.media.SoundLoaderContext = function(bufferTime, checkPolicyFile) {
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};


flash.media.SoundLoaderContext.className = "flash.media.SoundLoaderContext";

flash.media.SoundLoaderContext.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundLoaderContext.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.media.SoundLoaderContext.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'bufferTime', t:'Number'});
			p.push({n:'checkPolicyFile', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.URLLoaderDataFormat
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLLoaderDataFormat = function() {
};

flash.net.URLLoaderDataFormat.TEXT = "text";

flash.net.URLLoaderDataFormat.BINARY = "binary";


flash.net.URLLoaderDataFormat.className = "flash.net.URLLoaderDataFormat";

flash.net.URLLoaderDataFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoaderDataFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoaderDataFormat.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Matrix
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Matrix = function(a, b, c, d, tx, ty) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};

flash.geom.Matrix.prototype.identity = function() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 1;
	this.tx = 0;
	this.ty = 0;
};

flash.geom.Matrix.prototype.setTo = function(aa, ba, ca, da, txa, tya) {
	this.a = aa;
	this.b = ba;
	this.c = ca;
	this.d = da;
	this.tx = txa;
	this.ty = tya;
};

flash.geom.Matrix.prototype.concat = function(m) {
	var aT = this.a;
	var cT = this.c;
	var txT = this.tx;
	this.a = aT * m.a + this.b * m.c;
	this.b = aT * m.b + this.b * m.d;
	this.c = cT * m.a + this.d * m.c;
	this.d = cT * m.b + this.d * m.d;
	this.tx = txT * m.a + this.ty * m.c + m.tx;
	this.ty = txT * m.b + this.ty * m.d + m.ty;
};

flash.geom.Matrix.prototype.copyFrom = function(sourceMatrix) {
	this.a = sourceMatrix.a;
	this.b = sourceMatrix.b;
	this.c = sourceMatrix.c;
	this.d = sourceMatrix.d;
	this.tx = sourceMatrix.tx;
	this.ty = sourceMatrix.ty;
};

flash.geom.Matrix.prototype.invert = function() {
	var b01 = this.d;
	var b11 = -1 * this.c;
	var b21 = this.ty * this.c - this.d * this.tx;
	var det = this.a * b01 + this.b * b11;
	det = 1.0 / det;
	this.a = b01 * det;
	this.b = (-1 * this.b) * det;
	this.c = b11 * det;
	this.d = (1 * this.a) * det;
	this.tx = b21 * det;
	this.ty = (-this.ty * this.a + this.b * this.tx) * det;
};

flash.geom.Matrix.prototype.rotate = function(angle) {
	var s = Math.sin(angle);
	var c = Math.cos(angle);
	var m = new flash.geom.Matrix(c, s, -s, c, 0, 0);
	this.concat(m);
};

flash.geom.Matrix.prototype.scale = function(sx, sy) {
	var m = new flash.geom.Matrix(sx, 0, 0, sy, 0, 0);
	this.concat(m);
};

flash.geom.Matrix.prototype.translate = function(dx, dy) {
	this.tx = dx;
	this.ty = dy;
};

flash.geom.Matrix.prototype.createGradientBox = function(width, height, rotation, tx, ty) {
	flash.utils.FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Matrix.createGradientBox() $$$$");
};


flash.geom.Matrix.className = "flash.geom.Matrix";

flash.geom.Matrix.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.FlashTimingEngine');
	return p;
};

flash.geom.Matrix.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'a', t:'Number'});
			p.push({n:'b', t:'Number'});
			p.push({n:'c', t:'Number'});
			p.push({n:'d', t:'Number'});
			p.push({n:'tx', t:'Number'});
			p.push({n:'ty', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.system.LoaderContext
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.LoaderContext = function(checkPolicyFile, applicationDomain, securityDomain) {
};


flash.system.LoaderContext.className = "flash.system.LoaderContext";

flash.system.LoaderContext.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.LoaderContext.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.LoaderContext.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'checkPolicyFile', t:'Boolean'});
			p.push({n:'applicationDomain', t:'Object'});
			p.push({n:'securityDomain', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display3D.Context3DTriangleFace
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display3D == "undefined")
	flash.display3D = {};

flash.display3D.Context3DTriangleFace = function() {
};

flash.display3D.Context3DTriangleFace.BACK = "back";

flash.display3D.Context3DTriangleFace.FRONT = "front";

flash.display3D.Context3DTriangleFace.FRONT_AND_BACK = "fontAndBack";

flash.display3D.Context3DTriangleFace.NONE = "none";


flash.display3D.Context3DTriangleFace.className = "flash.display3D.Context3DTriangleFace";

flash.display3D.Context3DTriangleFace.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTriangleFace.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display3D.Context3DTriangleFace.injectionPoints = function(t) {
	return [];
};

// ====================================================
// JSON
// ====================================================


JSON = function() {
	
};

JSON.parse = function(text, reviver) {
	throw new Error("API NOT IMPLEMENTED -- JSON.parse", 0);
};

JSON.stringify = function(value, replacer, space) {
	throw new Error("API NOT IMPLEMENTED -- JSON.stringify", 0);
};


JSON.className = "JSON";

JSON.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

JSON.getStaticDependencies = function(t) {
	var p;
	return [];
};

JSON.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.Mouse
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.Mouse = function() {
};

flash.ui.Mouse.hide = function() {
};

flash.ui.Mouse.registerCursor = function(name, cursor) {
};

flash.ui.Mouse.show = function() {
};

flash.ui.Mouse.cursor = "";

flash.ui.Mouse.supportsCursor = true;


flash.ui.Mouse.className = "flash.ui.Mouse";

flash.ui.Mouse.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Mouse.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.Mouse.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Rectangle
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Rectangle = function(x, y, width, height) {
	this._right = 0;
	this.sizePoint = new flash.geom.Point(0, 0);
	this.topLeftPoint = new flash.geom.Point(0, 0);
	this._bottom = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

flash.geom.Rectangle.prototype.clone = function() {
	return new flash.geom.Rectangle(this.x, this.y, this.width, this.height);
};

flash.geom.Rectangle.prototype.copyFrom = function(sourceRect) {
	this.x = sourceRect.x;
	this.y = sourceRect.y;
	this.width = sourceRect.width;
	this.height = sourceRect.height;
};

flash.geom.Rectangle.prototype.union = function(toUnion) {
	if (toUnion.width == 0 || toUnion.height == 0)
		return this;
	var leftX = Math.min(this.x, toUnion.x);
	var leftY = Math.min(this.y, toUnion.y);
	var newW = Math.max(this.x + this.width, toUnion.x + toUnion.width) - leftX;
	var newH = Math.max(this.y + this.height, toUnion.y + toUnion.height) - leftY;
	return new flash.geom.Rectangle(leftX, leftY, newW, newH);
};

flash.geom.Rectangle.prototype.inflate = function(dx, dy) {
	this.x -= dx;
	this.width += 2 * dx;
	this.y -= dy;
	this.height += 2 * dy;
};

flash.geom.Rectangle.prototype.get_left = function() {
	return this.x;
};

flash.geom.Rectangle.prototype.set_left = function(value) {
	this.x = value;
};

flash.geom.Rectangle.prototype.get_top = function() {
	return this.y;
};

flash.geom.Rectangle.prototype.set_top = function(value) {
	this.y = value;
};

flash.geom.Rectangle.prototype.get_right = function() {
	return this.x + this.width;
};

flash.geom.Rectangle.prototype.set_right = function(value) {
	this.width = value - this.x;
};

flash.geom.Rectangle.prototype.get_bottom = function() {
	return this.y + this.height;
};

flash.geom.Rectangle.prototype.set_bottom = function(value) {
	this.height = value - this.y;
};

flash.geom.Rectangle.prototype.get_topLeft = function() {
	this.topLeftPoint.x = this.x;
	this.topLeftPoint.y = this.y;
	return this.topLeftPoint;
};

flash.geom.Rectangle.prototype.set_topLeft = function(value) {
	this.x = value.x;
	this.y = value.y;
};

flash.geom.Rectangle.prototype.contains = function(cx, cy) {
	return (cx >= this.x && cx <= this.get_right() && cy >= this.y && cy <= this.get_bottom());
};

flash.geom.Rectangle.prototype.containsPoint = function(point) {
	return this.contains(point.x, point.y);
};

flash.geom.Rectangle.prototype.get_size = function() {
	this.sizePoint.x = this.width;
	this.sizePoint.y = this.height;
	return this.sizePoint;
};

flash.geom.Rectangle.prototype.set_size = function(value) {
	this.width = value.x;
	this.height = value.y;
};

flash.geom.Rectangle.prototype.offset = function(dx, dy) {
	this.x += dx;
	this.y += dy;
};

flash.geom.Rectangle.prototype.intersects = function(toIntersect) {
	return !(toIntersect.get_left() > this.get_right() || toIntersect.get_right() < this.get_left() || toIntersect.get_top() > this.get_bottom() || toIntersect.get_bottom() < this.get_top());
};

flash.geom.Rectangle.prototype.intersection = function(toIntersect) {
	var rect = new flash.geom.Rectangle(0, 0, 0, 0);
	if (this.intersects(toIntersect)) {
		if (toIntersect.get_left() <= this.get_right()) {
			rect.x = toIntersect.get_left();
			rect.width = this.get_right() - rect.x;
		} else {
			rect.x = this.get_left();
			rect.width = toIntersect.get_right() - rect.x;
		}
		rect.y = (toIntersect.get_top() < this.get_top()) ? this.get_top() : toIntersect.get_top();
		rect.height = (toIntersect.get_bottom() < this.get_bottom()) ? toIntersect.get_bottom() : this.get_bottom();
		rect.height = rect.height - rect.y;
	}
	return rect;
};

flash.geom.Rectangle.prototype.isEmpty = function() {
	return this.width <= 0 || this.height <= 0;
};

flash.geom.Rectangle.prototype.setEmpty = function() {
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
};

flash.geom.Rectangle.prototype.setTo = function(xa, ya, widtha, heighta) {
	this.x = xa;
	this.y = ya;
	this.width = widtha;
	this.height = heighta;
};

Object.defineProperty(flash.geom.Rectangle.prototype, 'top', {
  get: function() { return this.get_top(); },
  set: function(value) { return this.set_top(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'size', {
  get: function() { return this.get_size(); },
  set: function(value) { return this.set_size(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'left', {
  get: function() { return this.get_left(); },
  set: function(value) { return this.set_left(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'bottom', {
  get: function() { return this.get_bottom(); },
  set: function(value) { return this.set_bottom(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'topLeft', {
  get: function() { return this.get_topLeft(); },
  set: function(value) { return this.set_topLeft(value); }
});
Object.defineProperty(flash.geom.Rectangle.prototype, 'right', {
  get: function() { return this.get_right(); },
  set: function(value) { return this.set_right(value); }
});

flash.geom.Rectangle.className = "flash.geom.Rectangle";

flash.geom.Rectangle.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Point');
	return p;
};

flash.geom.Rectangle.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.geom.Point');
	return p;
};

flash.geom.Rectangle.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			p.push({n:'width', t:'Number'});
			p.push({n:'height', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.net.URLRequest
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLRequest = function(url) {
	this.method = "get";
	this.url = url;
};


flash.net.URLRequest.className = "flash.net.URLRequest";

flash.net.URLRequest.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequest.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequest.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'url', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.geom.Matrix3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Matrix3D = function(v) {
	this.rawData = null;
	if (v == null) {
		v = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	}
	this.rawData = v;
};

flash.geom.Matrix3D.prototype.copyRawDataFrom = function(vector, index, transpose) {
	if (!this.rawData)
		this.rawData = [];
	for (var i = 0; i < vector.length; i++)
		this.rawData[i + index] = vector[i];
};


flash.geom.Matrix3D.className = "flash.geom.Matrix3D";

flash.geom.Matrix3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Matrix3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'v', t:'Array'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// FlashAPILoggeer
// ====================================================


FlashAPILoggeer = function() {
	
};

FlashAPILoggeer.logger;

FlashAPILoggeer.log = function(msg) {
	trace(FlashAPILoggeer.getTimestamp() + "[FAPI]" + msg + "");
	if (FlashAPILoggeer.logger)
		FlashAPILoggeer.logger(FlashAPILoggeer.getTimestamp() + "[FAPI]" + msg + "");
};

FlashAPILoggeer.getTimestamp = function() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var millis = date.getMilliseconds();
	return "[" + hours < 10 ? "0" : "" + hours + ":" + minutes < 10 ? "0" : "" + minutes + ":" + seconds < 10 ? "0" : "" + seconds + "." + millis < 10 ? "00" : millis < 100 ? "0" : "" + millis + "] ";
};


FlashAPILoggeer.className = "FlashAPILoggeer";

FlashAPILoggeer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

FlashAPILoggeer.getStaticDependencies = function(t) {
	var p;
	return [];
};

FlashAPILoggeer.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.net.URLRequestMethod
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLRequestMethod = function() {
};

flash.net.URLRequestMethod.GET = "get";

flash.net.URLRequestMethod.POST = "post";


flash.net.URLRequestMethod.className = "flash.net.URLRequestMethod";

flash.net.URLRequestMethod.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequestMethod.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequestMethod.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.TextFieldAutoSize
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFieldAutoSize = function() {
};

flash.text.TextFieldAutoSize.CENTER = "center";

flash.text.TextFieldAutoSize.LEFT = "left";

flash.text.TextFieldAutoSize.NONE = "none";

flash.text.TextFieldAutoSize.RIGHT = "right";


flash.text.TextFieldAutoSize.className = "flash.text.TextFieldAutoSize";

flash.text.TextFieldAutoSize.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldAutoSize.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldAutoSize.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.FlashEmbed
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.FlashEmbed = function() {
};

flash.utils.FlashEmbed.getEmbed = function(type, properties) {
	var embedClass;
	if (type == "flash.display.Bitmap") {
		flash.utils.FlashTimingEngine.getEmbed(properties.source);
		embedClass = function() {
			this.source = properties.source;
			this.bitmapData = flash.utils.FlashTimingEngine.getEmbed(this.source);
		};
	} else if (type == "XML") {
		embedClass = function() {
			this.source = properties.source;
			this.mimeType = properties.mimeType;
			var xmlHTTP = new XMLHttpRequest();
			try {
				xmlHTTP.open("GET", this.source, false);
				xmlHTTP.send(null);
			} catch (e) {
				window.alert("Unable to load the requested file.");
				return;
			}
			var oParser = new DOMParser();
			var oDOM = oParser.parseFromString(xmlHTTP.responseText, "text\/xml");
			var jxon = new flash.utils.JXONTree(oDOM.documentElement);
			for (var property in jxon) {
				if (jxon.hasOwnProperty(property)) {
					this[property] = jxon[property];
				}
			}
		};
		$inherit(embedClass, flash.utils.JXONTree);
	} else if (type == "flash.media.Sound") {
		flash.utils.FlashTimingEngine.getSoundEmbed(properties.source);
		embedClass = function() {
			this.source = properties.source;
			flash.media.Sound.call(this, new flash.net.URLRequest(properties.source));
		};
		$inherit(embedClass, flash.media.Sound);
	}
	if (embedClass) {
		embedClass.filename = properties.source.match(/[\w\-. ]+$/g)[0].split(".")[0];
		embedClass.classType = type;
	}
	return embedClass;
};


flash.utils.FlashEmbed.className = "flash.utils.FlashEmbed";

flash.utils.FlashEmbed.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.Sound');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.utils.JXONTree');
	p.push('flash.net.URLRequest');
	return p;
};

flash.utils.FlashEmbed.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.FlashEmbed.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.RequestAnimationFrame
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.RequestAnimationFrame = function() {
	
};

flash.utils.RequestAnimationFrame.prototype.request = function(callback) {
	var w = Window;
	var requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame || function(callback) {
		setTimeout(callback, 1000 / 60);
	};
	requestAnimationFrame($createStaticDelegate(this, callback));
};


flash.utils.RequestAnimationFrame.className = "flash.utils.RequestAnimationFrame";

flash.utils.RequestAnimationFrame.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.RequestAnimationFrame.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.RequestAnimationFrame.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.TextFieldType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFieldType = function() {
};

flash.text.TextFieldType.INPUT = "input";

flash.text.TextFieldType.DYNAMIC = "dynamic";


flash.text.TextFieldType.className = "flash.text.TextFieldType";

flash.text.TextFieldType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFieldType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.VertexBuffer3D
// ====================================================

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


// ====================================================
// flash.utils.ByteArray
// ====================================================

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

// ====================================================
// mx.core.ByteArrayAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.ByteArrayAsset = function() {
flash.utils.ByteArray.call(this);
};


$inherit(mx.core.ByteArrayAsset, flash.utils.ByteArray);

mx.core.ByteArrayAsset.className = "mx.core.ByteArrayAsset";

mx.core.ByteArrayAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.ByteArrayAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.ByteArrayAsset.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		case 2:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		case 3:
			p = flash.utils.ByteArray.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.external.ExternalInterface
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.external == "undefined")
	flash.external = {};

flash.external.ExternalInterface = function() {
	
};

flash.external.ExternalInterface.available = false;

flash.external.ExternalInterface.objectID = "null";

flash.external.ExternalInterface.addCallback = function(functionName, closure) {
};

flash.external.ExternalInterface.call = function(functionName, args) {
	return "";
};


flash.external.ExternalInterface.className = "flash.external.ExternalInterface";

flash.external.ExternalInterface.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.external.ExternalInterface.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.external.ExternalInterface.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.MultitouchInputMode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.MultitouchInputMode = function() {
};

flash.ui.MultitouchInputMode.GESTURE = "gesture";

flash.ui.MultitouchInputMode.NONE = "none";

flash.ui.MultitouchInputMode.TOUCH_POINT = "touchPoint";


flash.ui.MultitouchInputMode.className = "flash.ui.MultitouchInputMode";

flash.ui.MultitouchInputMode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MultitouchInputMode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MultitouchInputMode.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.ImageDecodingPolicy
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.ImageDecodingPolicy = function() {
};

flash.system.ImageDecodingPolicy.ON_LOAD = "onLoad";


flash.system.ImageDecodingPolicy.className = "flash.system.ImageDecodingPolicy";

flash.system.ImageDecodingPolicy.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.ImageDecodingPolicy.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.ImageDecodingPolicy.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.ui.MouseCursorData
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.MouseCursorData = function() {
this.hotSpot = null;
this.data = null;
};


flash.ui.MouseCursorData.className = "flash.ui.MouseCursorData";

flash.ui.MouseCursorData.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursorData.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursorData.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.Security
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.Security = function() {
};

flash.system.Security.allowDomain = function(domains) {
};

flash.system.Security.allowInsecureDomain = function(domains) {
};

flash.system.Security.loadPolicyFile = function(url) {
};


flash.system.Security.className = "flash.system.Security";

flash.system.Security.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.Security.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.Security.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.Vector3D
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.Vector3D = function(x, y, z, w) {
};


flash.geom.Vector3D.className = "flash.geom.Vector3D";

flash.geom.Vector3D.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Vector3D.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.Vector3D.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'x', t:'Number'});
			p.push({n:'y', t:'Number'});
			p.push({n:'z', t:'Number'});
			p.push({n:'w', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.text.GridFitType
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.GridFitType = function() {
};


flash.text.GridFitType.className = "flash.text.GridFitType";

flash.text.GridFitType.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.GridFitType.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.GridFitType.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.geom.ColorTransform
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.geom == "undefined")
	flash.geom = {};

flash.geom.ColorTransform = function(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
};


flash.geom.ColorTransform.className = "flash.geom.ColorTransform";

flash.geom.ColorTransform.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.geom.ColorTransform.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.geom.ColorTransform.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'redMultiplier', t:'Number'});
			p.push({n:'greenMultiplier', t:'Number'});
			p.push({n:'blueMultiplier', t:'Number'});
			p.push({n:'alphaMultiplier', t:'Number'});
			p.push({n:'redOffset', t:'Number'});
			p.push({n:'greenOffset', t:'Number'});
			p.push({n:'blueOffset', t:'Number'});
			p.push({n:'alphaOffset', t:'Number'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.system.ApplicationDomain
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.ApplicationDomain = function(parentDomain) {
};

flash.system.ApplicationDomain.get_MIN_DOMAIN_MEMORY_LENGTH = function() {
	return 0;
};

flash.system.ApplicationDomain.cD;

flash.system.ApplicationDomain.get_currentDomain = function() {
	return {};
};

flash.system.ApplicationDomain.prototype.get_domainMemory = function() {
	return new flash.utils.ByteArray();
};

flash.system.ApplicationDomain.prototype.set_domainMemory = function(value) {
	FlashAPILoggeer.log("ApplicationDomain::set domainMemory: " + value);
	FlashAPILoggeer.log("ApplicationDomain::set domainMemory: " + value.get_length());
};

flash.system.ApplicationDomain.prototype.hasDefinition = function(name) {
	return true;
};

flash.system.ApplicationDomain.prototype.getDefinition = function(name) {
	return {};
};

Object.defineProperty(flash.system.ApplicationDomain.prototype, 'domainMemory', {
  get: function() { return this.get_domainMemory(); },
  set: function(value) { return this.set_domainMemory(value); }
});

flash.system.ApplicationDomain.className = "flash.system.ApplicationDomain";

flash.system.ApplicationDomain.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.ByteArray');
	p.push('FlashAPILoggeer');
	return p;
};

flash.system.ApplicationDomain.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.ApplicationDomain.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'parentDomain', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.display.SpreadMethod
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.SpreadMethod = function() {
};

flash.display.SpreadMethod.PAD = "pad";

flash.display.SpreadMethod.REFLECT = "reflect";

flash.display.SpreadMethod.REPEAT = "repeat";


flash.display.SpreadMethod.className = "flash.display.SpreadMethod";

flash.display.SpreadMethod.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.SpreadMethod.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.SpreadMethod.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.display3D.IndexBuffer3D
// ====================================================

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


// ====================================================
// flash.display.PixelSnapping
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.display == "undefined")
	flash.display = {};

flash.display.PixelSnapping = function() {
};

flash.display.PixelSnapping.NEVER = "never";

flash.display.PixelSnapping.AUTO = "auto";


flash.display.PixelSnapping.className = "flash.display.PixelSnapping";

flash.display.PixelSnapping.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.display.PixelSnapping.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.display.PixelSnapping.injectionPoints = function(t) {
	return [];
};

// ====================================================
// mx.core.SoundAsset
// ====================================================

if (typeof mx == "undefined")
	var mx = {};
if (typeof mx.core == "undefined")
	mx.core = {};

mx.core.SoundAsset = function() {
};


mx.core.SoundAsset.className = "mx.core.SoundAsset";

mx.core.SoundAsset.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

mx.core.SoundAsset.getStaticDependencies = function(t) {
	var p;
	return [];
};

mx.core.SoundAsset.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.text.TextFormatAlign
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFormatAlign = function() {
};

flash.text.TextFormatAlign.CENTER = "center";

flash.text.TextFormatAlign.LEFT = "left";

flash.text.TextFormatAlign.RIGHT = "right";


flash.text.TextFormatAlign.className = "flash.text.TextFormatAlign";

flash.text.TextFormatAlign.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormatAlign.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormatAlign.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.utils.FlashTimingEngine
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.FlashTimingEngine = function() {
	this.framePerSecond = 0;
	this.startFrameTime = 0;
	this.ENTER_EVENT = new flash.events.Event("enterFrame", false, false);
	this.stopFlag = false;
	this.frameTime = 0;
	this.lastID = 0;
	this.currentTimers = new flash.utils.Dictionary(false);
	this.TIMER_COMPLETE_EVENT = new flash.events.TimerEvent("timerComplete", false, false);
	this.availableObjects = [];
	this.lastFrameTime = 0;
	this.TIMER_EVENT = new flash.events.TimerEvent("timer", false, false);
	
};

flash.utils.FlashTimingEngine.stageInstance;

flash.utils.FlashTimingEngine.frameHandler;

flash.utils.FlashTimingEngine.embedLoadingObjects = [];

flash.utils.FlashTimingEngine.embedBitmapDatas = [];

flash.utils.FlashTimingEngine.embedSounds = [];

flash.utils.FlashTimingEngine.getEmbed = function(source) {
	if (!flash.utils.FlashTimingEngine.embedBitmapDatas[source]) {
		var bitmapData = new flash.display.BitmapData(0, 0, true, 0);
		bitmapData.embedImage(source);
		flash.utils.FlashTimingEngine.embedBitmapDatas[source] = bitmapData;
	}
	return flash.utils.FlashTimingEngine.embedBitmapDatas[source];
};

flash.utils.FlashTimingEngine.getSoundEmbed = function(source) {
	if (!flash.utils.FlashTimingEngine.embedSounds[source]) {
		var snd = new flash.media.Sound(new flash.net.URLRequest(source));
		flash.utils.FlashTimingEngine.embedLoadingObjects.push(snd);
		flash.utils.FlashTimingEngine.embedSounds[source] = snd;
	}
	return flash.utils.FlashTimingEngine.embedSounds[source];
};

flash.utils.FlashTimingEngine.setupStageInteractionEvents = function(canvas) {
	canvas.addEventListener("mousedown", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	canvas.addEventListener("mousemove", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	canvas.addEventListener("mouseup", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	if ("ontouchstart" in document.documentElement) {
		canvas.addEventListener("touchstart", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
		canvas.addEventListener("touchmove", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
		canvas.addEventListener("touchend", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
	}
};

flash.utils.FlashTimingEngine.captureEventHandler = function(event) {
	if (!flash.utils.FlashTimingEngine.stageInstance)
		return;
	var type = "mouseDown";
	if (event.type == "mousedown")
		type = "mouseDown";
	else if (event.type == "mousemove")
		type = "mouseMove";
	else if (event.type == "mouseup")
		type = "mouseUp";
	var me = new flash.events.MouseEvent(type, false, false, event.offsetX, event.offsetY, null, false, false, false, false, 0, false, false, 0);
	flash.utils.FlashTimingEngine.stageInstance.dispatchEvent(me);
};

flash.utils.FlashTimingEngine.captureTouchEventHandler = function(event) {
	if (!flash.utils.FlashTimingEngine.stageInstance)
		return;
	var type = "touchBegin";
	if (event.type == "touchstart")
		type = "touchBegin";
	else if (event.type == "touchmove")
		type = "touchMove";
	else if (event.type == "touchend")
		type = "touchEnd";
};

flash.utils.FlashTimingEngine.start = function(root, framePerSecond, stageWidth, stageHeight, color) {
	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win", 0) != -1)
		OSName = "Windows";
	else if (navigator.appVersion.indexOf("Mac", 0) != -1)
		OSName = "Macintosh";
	else if (navigator.appVersion.indexOf("X11", 0) != -1)
		OSName = "UNIX";
	else if (navigator.appVersion.indexOf("Linux", 0) != -1)
		OSName = "Linux";
	flash.system.Capabilities.manufacturer = OSName;
	try {
		flash.utils.FlashTimingEngine.frameHandler = new flash.utils.RequestAnimationFrame();
	} catch (error) {
	}
	if (!flash.utils.FlashTimingEngine.stageInstance)
		flash.utils.FlashTimingEngine.stageInstance = new flash.display.Stage();
	flash.utils.FlashTimingEngine.stageInstance.stageWidth = stageWidth;
	flash.utils.FlashTimingEngine.stageInstance.stageHeight = stageHeight;
	flash.utils.FlashTimingEngine.stageInstance.color = color;
	flash.utils.FlashTimingEngine.root = root;
	root.root = root;
	flash.utils.FlashTimingEngine.stopFlag = false;
	flash.utils.FlashTimingEngine.framePerSecond = framePerSecond;
	flash.utils.FlashTimingEngine.frameTime = ~~(1000 / framePerSecond);
	flash.utils.FlashTimingEngine.currentTime = new Date().getTime();
	if (flash.utils.FlashTimingEngine.embedLoadingObjects.length == 0) {
		flash.utils.FlashTimingEngine.tick();
		root.dispatchEvent(new flash.events.Event("addedToStage", false, false));
	}
	else
		flash.utils.FlashTimingEngine.embedWait();
};

flash.utils.FlashTimingEngine.embedWait = function() {
	var allComplete = true;
	for (var i = 0; i < flash.utils.FlashTimingEngine.embedLoadingObjects.length; i++) {
		allComplete = allComplete && flash.utils.FlashTimingEngine.embedLoadingObjects[i].isLoaded;
	}
	trace("allComplete: " + allComplete);
	if (allComplete) {
		flash.utils.FlashTimingEngine.tick();
		flash.utils.FlashTimingEngine.root.dispatchEvent(new flash.events.Event("addedToStage", false, false));
	}
	else
		setTimeout($createStaticDelegate(this, flash.utils.FlashTimingEngine.embedWait), 50);
};

flash.utils.FlashTimingEngine.tick = function() {
	var c = flash.utils.FlashTimingEngine.root.get_graphics().getCanvas();
	c.clearRect(0, 0, 1000, 1000);
	flash.utils.FlashTimingEngine.root.updateGraphics();
	flash.utils.FlashTimingEngine.startFrameTime = new Date().getTime();
	flash.events.EventDispatcher.fireGlobalEvent(flash.utils.FlashTimingEngine.ENTER_EVENT);
	var timerObject;
	var $n0;
	for (var $v0 in ($n0 = flash.utils.FlashTimingEngine.currentTimers)) {
		timerObject = $n0[$v0];
		if (!timerObject)
			continue;
		if (timerObject.timeLeft - flash.utils.FlashTimingEngine.lastFrameTime < 0) {
			if (timerObject.repeat >= 0)
				timerObject.repeat--;
			timerObject.timeLeft = timerObject.time;
			timerObject.callBack.dispatchEvent(flash.utils.FlashTimingEngine.TIMER_EVENT);
			if (timerObject.repeat == -1) {
				timerObject.callBack.dispatchEvent(flash.utils.FlashTimingEngine.TIMER_COMPLETE_EVENT);
				flash.utils.FlashTimingEngine.addToPool(timerObject);
				flash.utils.FlashTimingEngine.currentTimers[timerObject.id] = null;
				delete flash.utils.FlashTimingEngine.currentTimers[timerObject.id];
			}
		} else {
			timerObject.timeLeft -= flash.utils.FlashTimingEngine.lastFrameTime;
		}
	}
	flash.utils.FlashTimingEngine.lastFrameTime = (new Date().getTime() - flash.utils.FlashTimingEngine.startFrameTime);
	if (flash.utils.FlashTimingEngine.frameTime - flash.utils.FlashTimingEngine.lastFrameTime > 0) {
		setTimeout($createStaticDelegate(this, flash.utils.FlashTimingEngine.tick), (flash.utils.FlashTimingEngine.frameTime - flash.utils.FlashTimingEngine.lastFrameTime));
		return;
	}
	if (flash.utils.FlashTimingEngine.lastFrameTime < flash.utils.FlashTimingEngine.frameTime)
		flash.utils.FlashTimingEngine.lastFrameTime = flash.utils.FlashTimingEngine.frameTime;
	if (!flash.utils.FlashTimingEngine.stopFlag)
		flash.utils.FlashTimingEngine.frameHandler.request($createStaticDelegate(this, flash.utils.FlashTimingEngine.tick));
};

flash.utils.FlashTimingEngine.stop = function() {
	flash.utils.FlashTimingEngine.stopFlag = true;
};

flash.utils.FlashTimingEngine.createTimer = function(time, repeat, callBack) {
	flash.utils.FlashTimingEngine.lastID++;
	if (flash.utils.FlashTimingEngine.availableObjects.length == 0)
		flash.utils.FlashTimingEngine.availableObjects.push(new flash.utils.FlashTimingEngine$TimerObject(flash.utils.FlashTimingEngine.lastID, time, repeat, callBack));
	var t = flash.utils.FlashTimingEngine.availableObjects.pop();
	t.id = flash.utils.FlashTimingEngine.lastID;
	t.time = time;
	t.timeLeft = time;
	t.repeat = repeat;
	t.callBack = callBack;
	flash.utils.FlashTimingEngine.currentTimers[flash.utils.FlashTimingEngine.lastID] = t;
	return flash.utils.FlashTimingEngine.lastID;
};

flash.utils.FlashTimingEngine.addToPool = function(timerObject) {
	flash.utils.FlashTimingEngine.availableObjects.push(timerObject);
};

flash.utils.FlashTimingEngine.stopTimer = function(key) {
	flash.utils.FlashTimingEngine.addToPool(flash.utils.FlashTimingEngine.currentTimers[key]);
	flash.utils.FlashTimingEngine.currentTimers[key] = null;
	delete flash.utils.FlashTimingEngine.currentTimers[key];
};

flash.utils.FlashTimingEngine.logAPIWarning = function(msg) {
	if (flash.utils.FlashTimingEngine.showAPIWarnings) {
		console.log(msg + "\n" + new Error("", 0).stack);
	}
};

flash.utils.FlashTimingEngine.ENTER_EVENT = new flash.events.Event("enterFrame", false, false);

flash.utils.FlashTimingEngine.TIMER_EVENT = new flash.events.TimerEvent("timer", false, false);

flash.utils.FlashTimingEngine.TIMER_COMPLETE_EVENT = new flash.events.TimerEvent("timerComplete", false, false);

flash.utils.FlashTimingEngine.root;

flash.utils.FlashTimingEngine.frameTime;

flash.utils.FlashTimingEngine.framePerSecond;

flash.utils.FlashTimingEngine.startFrameTime = 0;

flash.utils.FlashTimingEngine.lastFrameTime = 0;

flash.utils.FlashTimingEngine.currentTimers = new flash.utils.Dictionary(false);

flash.utils.FlashTimingEngine.stopFlag = false;

flash.utils.FlashTimingEngine.lastID = 0;

flash.utils.FlashTimingEngine.availableObjects = [];

flash.utils.FlashTimingEngine.currentTime = 0;

flash.utils.FlashTimingEngine.showAPIWarnings = true;


flash.utils.FlashTimingEngine.className = "flash.utils.FlashTimingEngine";

flash.utils.FlashTimingEngine.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.events.MouseEvent');
	p.push('trace');
	p.push('flash.media.Sound');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.utils.RequestAnimationFrame');
	p.push('flash.display.Stage');
	p.push('flash.net.URLRequest');
	p.push('flash.system.Capabilities');
	p.push('flash.display.BitmapData');
	p.push('flash.events.EventDispatcher');
	p.push('flash.events.Event');
	return p;
};

flash.utils.FlashTimingEngine.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	p.push('flash.events.Event');
	p.push('flash.events.TimerEvent');
	return p;
};

flash.utils.FlashTimingEngine.injectionPoints = function(t) {
	return [];
};
flash.utils.FlashTimingEngine$TimerObject = function(id, time, repeat, callBack) {
	this.timeLeft = 0;
	this.time = time;
	this.timeLeft = time;
	this.repeat = repeat;
	this.callBack = callBack;
};


// ====================================================
// flash.ui.MouseCursor
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.ui == "undefined")
	flash.ui = {};

flash.ui.MouseCursor = function() {
};

flash.ui.MouseCursor.AUTO = "auto";

flash.ui.MouseCursor.BUTTON = "button";

flash.ui.MouseCursor.ARROW = "arrow";

flash.ui.MouseCursor.HAND = "hand";


flash.ui.MouseCursor.className = "flash.ui.MouseCursor";

flash.ui.MouseCursor.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursor.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.ui.MouseCursor.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.system.SecurityDomain
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.SecurityDomain = function() {
};

flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();


flash.system.SecurityDomain.className = "flash.system.SecurityDomain";

flash.system.SecurityDomain.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.SecurityDomain.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.SecurityDomain.injectionPoints = function(t) {
	return [];
};

// ====================================================
// flash.xml.XMLNode
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.xml == "undefined")
	flash.xml = {};

flash.xml.XMLNode = function(type, value) {
};


flash.xml.XMLNode.className = "flash.xml.XMLNode";

flash.xml.XMLNode.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLNode.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLNode.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'uint'});
			p.push({n:'value', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};


// ====================================================
// flash.xml.XMLDocument
// ====================================================

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.xml == "undefined")
	flash.xml = {};

flash.xml.XMLDocument = function(source) {
	flash.xml.XMLNode.call(this, 1, source);
};


$inherit(flash.xml.XMLDocument, flash.xml.XMLNode);

flash.xml.XMLDocument.className = "flash.xml.XMLDocument";

flash.xml.XMLDocument.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLDocument.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.xml.XMLDocument.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'source', t:'String'});
			break;
		case 1:
			p = flash.xml.XMLNode.injectionPoints(t);
			break;
		case 2:
			p = flash.xml.XMLNode.injectionPoints(t);
			break;
		case 3:
			p = flash.xml.XMLNode.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

