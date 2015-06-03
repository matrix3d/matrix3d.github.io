/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.Embed = function(metadata) {
	this.mimeType = "";
	this.source = "";
	this.metadata = metadata;
	if (metadata.source)
		this.source = metadata.source;
	if (metadata.mimeType)
		this.source = metadata.mimeType;
};

flash.utils.Embed.createClass = function(metadata) {
	return metadata;
};


flash.utils.Embed.className = "flash.utils.Embed";

flash.utils.Embed.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Embed.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.Embed.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'metadata', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

