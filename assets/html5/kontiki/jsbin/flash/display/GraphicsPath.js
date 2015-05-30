/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */

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

