/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */


ArgumentError = function(message) {
	Error.call(this, message, 0);
};


$inherit(ArgumentError, Error);

ArgumentError.className = "ArgumentError";

ArgumentError.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

ArgumentError.getStaticDependencies = function(t) {
	var p;
	return [];
};

ArgumentError.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'message', t:'Object'});
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

