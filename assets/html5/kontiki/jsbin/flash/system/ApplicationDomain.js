/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.ApplicationDomain = function(parentDomain) {
};

flash.system.ApplicationDomain.get_MIN_DOMAIN_MEMORY_LENGTH = function() {
	return 0;
};

flash.system.ApplicationDomain.cD;

flash.system.ApplicationDomain.get_currentDomain = function() {
	return {};
};

flash.system.ApplicationDomain.prototype.get_domainMemory = function() {
	return new flash.utils.ByteArray();
};

flash.system.ApplicationDomain.prototype.set_domainMemory = function(value) {
	FlashAPILoggeer.log("ApplicationDomain::set domainMemory: " + value);
	FlashAPILoggeer.log("ApplicationDomain::set domainMemory: " + value.get_length());
};

flash.system.ApplicationDomain.prototype.hasDefinition = function(name) {
	return true;
};

flash.system.ApplicationDomain.prototype.getDefinition = function(name) {
	return {};
};

Object.defineProperty(flash.system.ApplicationDomain.prototype, 'domainMemory', {
  get: function() { return this.get_domainMemory(); },
  set: function(value) { return this.set_domainMemory(value); }
});

flash.system.ApplicationDomain.className = "flash.system.ApplicationDomain";

flash.system.ApplicationDomain.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.ByteArray');
	p.push('FlashAPILoggeer');
	return p;
};

flash.system.ApplicationDomain.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.ApplicationDomain.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'parentDomain', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

