/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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

