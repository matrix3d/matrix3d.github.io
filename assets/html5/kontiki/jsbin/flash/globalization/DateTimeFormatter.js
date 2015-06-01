/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.globalization == "undefined")
	flash.globalization = {};

flash.globalization.DateTimeFormatter = function(requestedLocaleIDName, dateStyle, timeStyle) {
};

flash.globalization.DateTimeFormatter.prototype.getMonthNames = function(nameStyle, context) {
	var months = [];
	months.push("January");
	months.push("February");
	months.push("March");
	months.push("April");
	months.push("May");
	months.push("June");
	months.push("July");
	months.push("August");
	months.push("Spetember");
	months.push("October");
	months.push("November");
	months.push("December");
	return months;
};


flash.globalization.DateTimeFormatter.className = "flash.globalization.DateTimeFormatter";

flash.globalization.DateTimeFormatter.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.globalization.DateTimeFormatter.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.globalization.DateTimeFormatter.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'requestedLocaleIDName', t:'String'});
			p.push({n:'dateStyle', t:'String'});
			p.push({n:'timeStyle', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

