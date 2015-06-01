/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

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

