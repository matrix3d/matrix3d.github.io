/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

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

