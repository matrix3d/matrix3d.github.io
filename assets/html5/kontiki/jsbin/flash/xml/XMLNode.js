/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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
