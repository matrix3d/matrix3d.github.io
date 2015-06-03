/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.net == "undefined")
	flash.net = {};

flash.net.URLLoader = function(request) {
	this.data = null;
	flash.events.EventDispatcher.call(this);
	if (request)
		this.load(request);
};

flash.net.URLLoader.prototype.load = function(request) {
	FlashAPILoggeer.log("URLLoader::load[" + request.method + "] - url: " + request.url);
	FlashAPILoggeer.log("URLLoader::load - vars: " + request.data);
	var event = new flash.events.Event("complete", false, false);
	event.target = this;
	var sent = false;
	if (request.url.indexOf("http:", 0) == -1) {
		try {
		} catch (error) {
			FlashAPILoggeer.log("URLLoader::cat error: " + error.message);
		}
		if (this.data.length > 50)
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data.substr(0, 50));
		else
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data);
		sent = (this.data != null);
	} else {
		var args = "";
		if (request.method == "get")
			args = "-G";
		try {
		} catch (error) {
			FlashAPILoggeer.log("URLLoader::curl error: " + error.message);
		}
		if (this.data.length > 50)
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data.substr(0, 50));
		else
			FlashAPILoggeer.log("URLLoader::load - output: " + this.data);
		sent = (this.data != null);
	}
	if (sent)
		this.dispatchEvent(event);
};

flash.net.URLLoader.prototype.verifyAndLoadFile = function(file) {
	return true;
};


$inherit(flash.net.URLLoader, flash.events.EventDispatcher);

flash.net.URLLoader.className = "flash.net.URLLoader";

flash.net.URLLoader.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('FlashAPILoggeer');
	p.push('flash.events.Event');
	return p;
};

flash.net.URLLoader.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.net.URLLoader.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'request', t:'flash.net.URLRequest'});
			break;
		case 1:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 2:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		case 3:
			p = flash.events.EventDispatcher.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

