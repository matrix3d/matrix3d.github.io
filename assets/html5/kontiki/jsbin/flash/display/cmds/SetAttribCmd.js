/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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

