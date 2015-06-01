/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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

