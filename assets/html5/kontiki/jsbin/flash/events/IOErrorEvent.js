/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.IOErrorEvent = function(type, bubbles, cancelable, text, id) {
	this._errorID = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
	this._errorID = id;
};

flash.events.IOErrorEvent.IO_ERROR = "ioError";

flash.events.IOErrorEvent.NETWORK_ERROR = "networkError";

flash.events.IOErrorEvent.prototype.get_errorID = function() {
	return this._errorID;
};

Object.defineProperty(flash.events.IOErrorEvent.prototype, 'errorID', {
  get: function() { return this.get_errorID(); },
  set: function(value) { return this.set_errorID(value); }
});

$inherit(flash.events.IOErrorEvent, flash.events.Event);

flash.events.IOErrorEvent.className = "flash.events.IOErrorEvent";

flash.events.IOErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.IOErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.IOErrorEvent.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'type', t:'String'});
			p.push({n:'bubbles', t:'Boolean'});
			p.push({n:'cancelable', t:'Boolean'});
			p.push({n:'text', t:'String'});
			p.push({n:'id', t:'int'});
			break;
		case 1:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 2:
			p = flash.events.Event.injectionPoints(t);
			break;
		case 3:
			p = flash.events.Event.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

