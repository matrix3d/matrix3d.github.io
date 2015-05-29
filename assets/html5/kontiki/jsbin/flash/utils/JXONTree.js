/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.JXONTree = function(oXMLParent) {
	this.keyValue = null;
	this.keyAttributes = null;
	this.keyLength = 0;
	this.nLength = 0;
	this.nAttrLen = 0;
	this._localName = null;
	this.nAttrLen = 0;
	this.nLength = 0;
	var sCollectedTxt = "";
	this._localName = oXMLParent.localName;
	if (oXMLParent.hasChildNodes()) {
		var oNode;
		var sProp;
		var vContent;
		for (var nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
			oNode = oXMLParent.childNodes.item(nItem);
			if ((oNode.nodeType - 1 | 1) === 3) {
				sCollectedTxt += (oNode.nodeType === 3) ? oNode.nodeValue.trim() : oNode.nodeValue;
			} else if (oNode.nodeType === 1 && !oNode.prefix) {
				sProp = oNode.nodeName;
				vContent = new flash.utils.JXONTree(oNode);
				if (this.hasOwnProperty(sProp)) {
					if (this[sProp].constructor !== Array) {
						this[sProp] = [this[sProp]];
					}
					this[sProp].push(vContent);
				} else {
					this[sProp] = vContent;
					this.nLength++;
				}
			}
		}
		this.keyValue = this.parseText(sCollectedTxt);
	} else {
		this.keyValue = null;
	}
	if (oXMLParent.hasAttributes()) {
		var oAttrib;
		this.keyAttributes = {};
		for (this.nAttrLen; this.nAttrLen < oXMLParent.attributes.length; this.nAttrLen++) {
			oAttrib = oXMLParent.attributes.item(this.nAttrLen);
			this.keyAttributes[oAttrib.name] = this.parseText(oAttrib.value.trim());
		}
	}
};

flash.utils.JXONTree.prototype.parseText = function(sValue) {
	if (/^\s*$/.test(sValue)) {
		return null;
	}
	if (/^(?:true|false)$/i.test(sValue)) {
		return sValue.toLowerCase() === "true";
	}
	if (isFinite(sValue)) {
		return parseFloat(sValue);
	}
	if (isFinite(Date.parse(sValue))) {
		return new Date(sValue);
	}
	return sValue;
};

flash.utils.JXONTree.prototype.valueOf = function() {
	return this.keyValue;
};

flash.utils.JXONTree.prototype.toString = function() {
	return this.keyValue;
};

flash.utils.JXONTree.prototype.getItem = function(nItem) {
	if (this.nLength === 0) {
		return null;
	}
	var nCount = 0;
	for (var sKey in this) {
		if (nCount === nItem) {
			return this[sKey];
		}
		nCount++;
	}
	return null;
};

flash.utils.JXONTree.prototype.localName = function() {
	return this._localName;
};

flash.utils.JXONTree.prototype.attribute = function(nAttrId) {
	if (this.nAttrLen === 0 || nAttrId + 1 > this.nAttrLen) {
		return null;
	}
	for (var sAttrName in this.keyAttributes) {
		if (sAttrName === nAttrId) {
			return this.keyAttributes[sAttrName];
		}
	}
	return null;
};

flash.utils.JXONTree.prototype.hasChildren = function() {
	return this.keyLength > 0;
};


flash.utils.JXONTree.className = "flash.utils.JXONTree";

flash.utils.JXONTree.getRuntimeDependencies = function(t) {
	var p;
	return [];
};

flash.utils.JXONTree.getStaticDependencies = function(t) {
	var p;
	return [];
};

flash.utils.JXONTree.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'oXMLParent', t:'Element'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

