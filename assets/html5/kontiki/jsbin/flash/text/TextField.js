/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.text == "undefined")
	flash.text = {};

flash.text.TextField = function() {
	this.selectionBeginIndex = 0;
	this.borderColor = 0;
	this.wordWrap = false;
	this.selectable = false;
	this.type = "";
	this.restrict = "";
	this.autoSize = "";
	this.maxChars = 0;
	this.htmlText = "";
	this.border = false;
	this.backgroundColor = 0;
	this.antiAliasType = "";
	this._textWidth = 0;
	this.defaultTextFormat = null;
	this.textColor = 0;
	this._textHeight = 0;
	this.embedFonts = false;
	this.background = false;
	this.multiline = false;
	this.selectionEndIndex = 0;
	this._text = "";
	flash.display.InteractiveObject.call(this);
	this.domElement = document.createElement("div");
	this.domElement.style.setProperty("position", "absolute");
	this.domElement.style.setProperty("width", "auto");
	this.domElement.style.setProperty("height", "auto");
};

flash.text.TextField.prototype.get_textWidth = function() {
	return this._textWidth;
};

flash.text.TextField.prototype.set_textWidth = function(value) {
	this._textWidth = value;
};

flash.text.TextField.prototype.get_textHeight = function() {
	return this._textHeight;
};

flash.text.TextField.prototype.set_textHeight = function(value) {
	this._textHeight = value;
};

flash.text.TextField.prototype.get_text = function() {
	return this._text;
};

flash.text.TextField.prototype.set_text = function(value) {
	this._text = value;
	this.domElement.innerHTML = this._text;
	this.calculateTextBounds(this.defaultTextFormat);
};

flash.text.TextField.prototype.getTextFormat = function(beginIndex, endIndex) {
	return new flash.text.TextFormat();
};

flash.text.TextField.prototype.setTextFormat = function(format, beginIndex, endIndex) {
	this.calculateTextBounds(format);
};

flash.text.TextField.prototype.setSelection = function(beginIndex, endIndex) {
};

flash.text.TextField.prototype.appendText = function(newText) {
	this.set_text(this.get_text() + newText);
};

flash.text.TextField.prototype.calculateTextBounds = function(format) {
	if (!format)
		return;
	var vis = this.domElement.style.getPropertyValue("visibility");
	vis = vis ? vis : "visible";
	this.domElement.style.setProperty("fontFamily", format.font);
	this.domElement.style.setProperty("fontSize", format.size + "");
	document.body.appendChild(this.domElement);
	this.set_textWidth(this.domElement.clientWidth);
	this.set_textHeight(this.domElement.clientHeight);
	document.body.removeChild(this.domElement);
	this.domElement.style.setProperty("visibility", vis);
};

Object.defineProperty(flash.text.TextField.prototype, 'textHeight', {
  get: function() { return this.get_textHeight(); },
  set: function(value) { return this.set_textHeight(value); }
});
Object.defineProperty(flash.text.TextField.prototype, 'textWidth', {
  get: function() { return this.get_textWidth(); },
  set: function(value) { return this.set_textWidth(value); }
});
Object.defineProperty(flash.text.TextField.prototype, 'text', {
  get: function() { return this.get_text(); },
  set: function(value) { return this.set_text(value); }
});

$inherit(flash.text.TextField, flash.display.InteractiveObject);

flash.text.TextField.className = "flash.text.TextField";

flash.text.TextField.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.text.TextFormat');
	return p;
};

flash.text.TextField.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.text.TextField.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 2:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		case 3:
			p = flash.display.InteractiveObject.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

