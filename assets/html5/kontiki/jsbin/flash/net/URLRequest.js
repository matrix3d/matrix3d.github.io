/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLRequest = function(url) {
	this.method = "get";
	this.url = url;
};


flash.net.URLRequest.className = "flash.net.URLRequest";

flash.net.URLRequest.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequest.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLRequest.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'url', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

