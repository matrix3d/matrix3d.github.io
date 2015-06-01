/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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
