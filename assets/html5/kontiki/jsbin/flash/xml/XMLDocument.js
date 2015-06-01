/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

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

