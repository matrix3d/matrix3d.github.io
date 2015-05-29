/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.ErrorEvent = function(type, bubbles, cancelable, text, id) {
	this._errorID = 0;
	flash.events.Event.call(this, type, bubbles, cancelable);
	this.text = text;
	this._errorID = id;
};

flash.events.ErrorEvent.ERROR = "error";

flash.events.ErrorEvent.prototype.get_errorID = function() {
	return this._errorID;
};

Object.defineProperty(flash.events.ErrorEvent.prototype, 'errorID', {
  get: function() { return this.get_errorID(); },
  set: function(value) { return this.set_errorID(value); }
});

$inherit(flash.events.ErrorEvent, flash.events.Event);

flash.events.ErrorEvent.className = "flash.events.ErrorEvent";

flash.events.ErrorEvent.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.events.ErrorEvent.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.events.ErrorEvent.injectionPoints = function(t) {
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

