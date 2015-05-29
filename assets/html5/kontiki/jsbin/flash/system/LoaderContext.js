/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.system == "undefined")
	flash.system = {};

flash.system.LoaderContext = function(checkPolicyFile, applicationDomain, securityDomain) {
};


flash.system.LoaderContext.className = "flash.system.LoaderContext";

flash.system.LoaderContext.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.system.LoaderContext.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.system.LoaderContext.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'checkPolicyFile', t:'Boolean'});
			p.push({n:'applicationDomain', t:'Object'});
			p.push({n:'securityDomain', t:'Object'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

