/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */


trace = function(s) {
	if (arguments.length > 1)
		console.log(arguments);
	else
		console.log(arguments[0]);
}

trace.className = "trace";

trace.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

trace.getStaticDependencies = function(t) {
	var p;
	return [];
};

trace.injectionPoints = function(t) {
	return [];
};