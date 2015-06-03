/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextFormat = function(font, size, color, bold, italic, underline, url, target, align, leftMargin, rightMargin, indent, leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};


flash.text.TextFormat.className = "flash.text.TextFormat";

flash.text.TextFormat.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormat.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextFormat.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'font', t:'String'});
			p.push({n:'size', t:'Object'});
			p.push({n:'color', t:'Object'});
			p.push({n:'bold', t:'Object'});
			p.push({n:'italic', t:'Object'});
			p.push({n:'underline', t:'Object'});
			p.push({n:'url', t:'String'});
			p.push({n:'target', t:'String'});
			p.push({n:'align', t:'String'});
			p.push({n:'leftMargin', t:'Object'});
			p.push({n:'rightMargin', t:'Object'});
			p.push({n:'indent', t:'Object'});
			p.push({n:'leading', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

