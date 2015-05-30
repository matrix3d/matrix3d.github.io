/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */


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
