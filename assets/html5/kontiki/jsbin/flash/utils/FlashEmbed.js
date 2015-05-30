/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:59 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.FlashEmbed = function() {
};

flash.utils.FlashEmbed.getEmbed = function(type, properties) {
	var embedClass;
	if (type == "flash.display.Bitmap") {
		flash.utils.FlashTimingEngine.getEmbed(properties.source);
		embedClass = function() {
			this.source = properties.source;
			this.bitmapData = flash.utils.FlashTimingEngine.getEmbed(this.source);
		};
	} else if (type == "XML") {
		embedClass = function() {
			this.source = properties.source;
			this.mimeType = properties.mimeType;
			var xmlHTTP = new XMLHttpRequest();
			try {
				xmlHTTP.open("GET", this.source, false);
				xmlHTTP.send(null);
			} catch (e) {
				window.alert("Unable to load the requested file.");
				return;
			}
			var oParser = new DOMParser();
			var oDOM = oParser.parseFromString(xmlHTTP.responseText, "text\/xml");
			var jxon = new flash.utils.JXONTree(oDOM.documentElement);
			for (var property in jxon) {
				if (jxon.hasOwnProperty(property)) {
					this[property] = jxon[property];
				}
			}
		};
		$inherit(embedClass, flash.utils.JXONTree);
	} else if (type == "flash.media.Sound") {
		flash.utils.FlashTimingEngine.getSoundEmbed(properties.source);
		embedClass = function() {
			this.source = properties.source;
			flash.media.Sound.call(this, new flash.net.URLRequest(properties.source));
		};
		$inherit(embedClass, flash.media.Sound);
	}
	if (embedClass) {
		embedClass.filename = properties.source.match(/[\w\-. ]+$/g)[0].split(".")[0];
		embedClass.classType = type;
	}
	return embedClass;
};


flash.utils.FlashEmbed.className = "flash.utils.FlashEmbed";

flash.utils.FlashEmbed.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.media.Sound');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.utils.JXONTree');
	p.push('flash.net.URLRequest');
	return p;
};

flash.utils.FlashEmbed.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.FlashEmbed.injectionPoints = function(t) {
	return [];
};
