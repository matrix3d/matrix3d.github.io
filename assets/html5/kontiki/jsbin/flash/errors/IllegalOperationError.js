/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:16 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.errors == "undefined")
	flash.errors = {};

flash.errors.IllegalOperationError = function(message, id) {
	Error.call(this, message, id);
};


$inherit(flash.errors.IllegalOperationError, Error);

flash.errors.IllegalOperationError.className = "flash.errors.IllegalOperationError";

flash.errors.IllegalOperationError.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.errors.IllegalOperationError.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.errors.IllegalOperationError.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'message', t:'Object'});
			p.push({n:'id', t:'Object'});
			break;
		case 1:
			p = Error.injectionPoints(t);
			break;
		case 2:
			p = Error.injectionPoints(t);
			break;
		case 3:
			p = Error.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

