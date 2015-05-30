/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */


FlashAPILoggeer = function() {
	
};

FlashAPILoggeer.logger;

FlashAPILoggeer.log = function(msg) {
	trace(FlashAPILoggeer.getTimestamp() + "[FAPI]" + msg + "");
	if (FlashAPILoggeer.logger)
		FlashAPILoggeer.logger(FlashAPILoggeer.getTimestamp() + "[FAPI]" + msg + "");
};

FlashAPILoggeer.getTimestamp = function() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var millis = date.getMilliseconds();
	return "[" + hours < 10 ? "0" : "" + hours + ":" + minutes < 10 ? "0" : "" + minutes + ":" + seconds < 10 ? "0" : "" + seconds + "." + millis < 10 ? "00" : millis < 100 ? "0" : "" + millis + "] ";
};


FlashAPILoggeer.className = "FlashAPILoggeer";

FlashAPILoggeer.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	return p;
};

FlashAPILoggeer.getStaticDependencies = function(t) {
	var p;
	return [];
};

FlashAPILoggeer.injectionPoints = function(t) {
	return [];
};
