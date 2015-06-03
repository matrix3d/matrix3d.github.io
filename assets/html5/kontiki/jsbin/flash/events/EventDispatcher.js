/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:51 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.events == "undefined")
	flash.events = {};

flash.events.EventDispatcher = function(target) {
	this.listeners = new flash.utils.Dictionary(false);
	this._name = "";
	this.queueEvents = new flash.utils.Dictionary(false);
	this._target = null;
	this._target = target;
	this._name = "instanceED" + flash.events.EventDispatcher.count++;
};

flash.events.EventDispatcher.fireGlobalEvent = function(event) {
	if (!flash.events.EventDispatcher.staticListeners)
		flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
	if (flash.events.EventDispatcher.staticListeners[event.get_type()]) {
		var arr = flash.events.EventDispatcher.staticListeners[event.get_type()];
		if (arr == null)
			return;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].listener != null) {
				arr[i].listener.apply(arr[i].instance, [event]);
			}
			if (event.get_bubbles() && arr[i].instance instanceof flash.display.DisplayObjectContainer) {
				var doc = arr[i].instance;
				doc.bubbleEvent(event);
			}
		}
	}
};

flash.events.EventDispatcher.staticListeners;

flash.events.EventDispatcher.count = 1;

flash.events.EventDispatcher.prototype.addEventListener = function(type, listener, useCapture, priority, useWeakReference) {
	if (!this.listeners[type]) {
		this.listeners[type] = [];
	}
	if (type == "enterFrame") {
		if (!flash.events.EventDispatcher.staticListeners)
			flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
		if (!flash.events.EventDispatcher.staticListeners[type])
			flash.events.EventDispatcher.staticListeners[type] = [];
		flash.events.EventDispatcher.staticListeners[type].push({instance:this, listener:listener, priority:priority});
	}
	var l;
	var i;
	var indexOfPriority = 0;
	l = this.listeners[type].length;
	for (i = 0; i < l; i++) {
		if (this.listeners[type][i].priority >= priority)
			indexOfPriority = i + 1;
		if (this.listeners[type][i].listener == listener)
			return;
	}
	if (indexOfPriority < l)
		this.listeners[type].splice(indexOfPriority, 0, {listener:listener, priority:priority});
	else
		this.listeners[type].push({listener:listener, priority:priority});
	if (this.queueEvents[type]) {
		while (this.queueEvents[type].length > 0)
			this.dispatchEvent(this.queueEvents[type].shift());
	}
};

flash.events.EventDispatcher.prototype.hasEventListener = function(type) {
	return this.listeners[type] && this.listeners[type].length > 0;
};

flash.events.EventDispatcher.prototype.willTrigger = function(type) {
	return this.listeners[type] && this.listeners[type].length > 0;
};

flash.events.EventDispatcher.prototype.removeEventListener = function(type, listener, useCapture) {
	if (!flash.events.EventDispatcher.staticListeners)
		flash.events.EventDispatcher.staticListeners = new flash.utils.Dictionary(false);
	if (!this.listeners[type]) {
		return;
	}
	var l;
	var i;
	if (type == "enterFrame") {
		l = flash.events.EventDispatcher.staticListeners[type].length;
		for (i = 0; i < l; i++) {
			if (flash.events.EventDispatcher.staticListeners[type][i].listener == listener) {
				flash.events.EventDispatcher.staticListeners[type].splice(i, 1);
				break;
			}
		}
	}
	l = this.listeners[type].length;
	for (i = 0; i < l; i++) {
		if (this.listeners[type][i].listener == listener) {
			this.listeners[type].splice(i, 1);
			return;
		}
	}
};

flash.events.EventDispatcher.prototype.dispatchEvent = function(event) {
	if (this.listeners[event.get_type()]) {
		var arr = this.listeners[event.get_type()];
		if (arr == null)
			return false;
		if (!event.target)
			event.target = this;
		event.currentTarget = this;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].listener != null)
				arr[i].listener.apply(this, [event]);
			if (event.get_bubbles() && this instanceof flash.display.DisplayObjectContainer) {
				var doc = this;
				doc.bubbleEvent(event);
			}
		}
	} else {
		if (!this.queueEvents[event.get_type()])
			this.queueEvents[event.get_type()] = [];
		this.queueEvents[event.get_type()].push(event);
	}
	return true;
};

flash.events.EventDispatcher.prototype.toString = function() {
	return this._name;
};


flash.events.EventDispatcher.className = "flash.events.EventDispatcher";

flash.events.EventDispatcher.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.events.EventDispatcher.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

flash.events.EventDispatcher.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'target', t:'flash.events.IEventDispatcher'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

