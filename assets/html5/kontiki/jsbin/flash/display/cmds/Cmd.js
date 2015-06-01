/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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

