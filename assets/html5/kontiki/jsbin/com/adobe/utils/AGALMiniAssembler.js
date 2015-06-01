/** Compiled by the Randori compiler v0.2.6.5_renaun on Mon Jun 01 12:16:15 CST 2015 */

if (typeof com == "undefined")
	var com = {};
if (typeof com.adobe == "undefined")
	com.adobe = {};
if (typeof com.adobe.utils == "undefined")
	com.adobe.utils = {};

com.adobe.utils.AGALMiniAssembler = function(debugging) {
	this.initialized = false;
	this._agalcode = null;
	this.verbose = false;
	this.debugEnabled = false;
	this._error = "";
	this.debugEnabled = debugging;
	if (!com.adobe.utils.AGALMiniAssembler.initialized)
		com.adobe.utils.AGALMiniAssembler.init();
};

com.adobe.utils.AGALMiniAssembler.USE_NEW_SYNTAX = false;

com.adobe.utils.AGALMiniAssembler.REGEXP_OUTER_SPACES = /^\s+|\s+$/g;

com.adobe.utils.AGALMiniAssembler.initialized = false;

com.adobe.utils.AGALMiniAssembler.prototype.get_error = function() {
	return this._error;
};

com.adobe.utils.AGALMiniAssembler.prototype.get_agalcode = function() {
	return this._agalcode;
};

com.adobe.utils.AGALMiniAssembler.prototype.assemble = function(mode, source) {
	var start = flash.utils.getTimer();
	this._agalcode = new flash.utils.ByteArray();
	this._error = "";
	var isFrag = false;
	if (mode == "fragment")
		isFrag = true;
	else if (mode != "vertex")
		this._error = "ERROR: mode needs to be \"" + "fragment" + "\" or \"" + "vertex" + "\" but is \"" + mode + "\".";
	this.get_agalcode().set_endian("littleEndian");
	this.get_agalcode().writeByte(0xa0);
	this.get_agalcode().writeUnsignedInt(0x1);
	this.get_agalcode().writeByte(0xa1);
	this.get_agalcode().writeByte(isFrag ? 1 : 0);
	var lines = source.replace(/[\f\n\r\v]+/g, "\n").split("\n", 4.294967295E9);
	var nest = 0;
	var nops = 0;
	var i;
	var lng = lines.length;
	for (i = 0; i < lng && this._error == ""; i++) {
		var line = new String(lines[i]);
		line = line.replace(/^\s+|\s+$/g, "");
		var startcomment = line.search("\/\/");
		if (startcomment != -1)
			line = line.slice(0, startcomment);
		var optsi = line.search(/<.*>/g);
		var opts;
		if (optsi != -1) {
			opts = line.slice(optsi, 2147483647).match(/([\w\.\-\+]+)/gi);
			line = line.slice(0, optsi);
		}
		var opCode = line.match(/^\w{3}/ig);
		if (!opCode) {
			if (line.length >= 3)
				trace("warning: bad line " + i + ": " + lines[i]);
			continue;
		}
		var opFound = com.adobe.utils.AGALMiniAssembler.OPMAP[opCode[0]];
		if (this.debugEnabled)
			trace(opFound);
		if (opFound == null) {
			if (line.length >= 3)
				trace("warning: bad line " + i + ": " + lines[i]);
			continue;
		}
		line = line.slice(line.search(opFound.get_name()) + opFound.get_name().length, 2147483647);
		if (opFound.get_flags() & 4) {
			nest--;
			if (nest < 0) {
				this._error = "error: conditional closes without open.";
				break;
			}
		}
		if (opFound.get_flags() & 2) {
			nest++;
			if (nest > 4) {
				this._error = "error: nesting to deep, maximum allowed is " + 4 + ".";
				break;
			}
		}
		if ((opFound.get_flags() & 32) && !isFrag) {
			this._error = "error: opcode is only allowed in fragment programs.";
			break;
		}
		if (this.verbose)
			trace("emit opcode=" + opFound);
		this.get_agalcode().writeUnsignedInt(opFound.get_emitCode());
		nops++;
		if (nops > 256) {
			this._error = "error: too many opcodes. maximum is " + 256 + ".";
			break;
		}
		var regs;
		if (false)
			regs = line.match(/vc\[([vif][acost]?)(\d*)?(\.[xyzw](\+\d{1,3})?)?\](\.[xyzw]{1,4})?|([vif][acost]?)(\d*)?(\.[xyzw]{1,4})?/gi);
		else
			regs = line.match(/vc\[([vof][actps]?)(\d*)?(\.[xyzw](\+\d{1,3})?)?\](\.[xyzw]{1,4})?|([vof][actps]?)(\d*)?(\.[xyzw]{1,4})?/gi);
		if (!regs || regs.length != opFound.get_numRegister()) {
			this._error = "error: wrong number of operands. found " + regs.length + " but expected " + opFound.get_numRegister() + ".";
			break;
		}
		var badreg = false;
		var pad = 64 + 64 + 32;
		var regLength = regs.length;
		for (var j = 0; j < regLength; j++) {
			var isRelative = false;
			var relreg = regs[j].match(/\[.*\]/ig);
			if (relreg && relreg.length > 0) {
				regs[j] = regs[j].replace(relreg[0], "0");
				if (this.verbose)
					trace("IS REL");
				isRelative = true;
			}
			var res = regs[j].match(/^\b[A-Za-z]{1,2}/ig);
			if (!res) {
				this._error = "error: could not parse operand " + j + " (" + regs[j] + ").";
				badreg = true;
				break;
			}
			var regFound = com.adobe.utils.AGALMiniAssembler.REGMAP[res[0]];
			if (this.debugEnabled)
				trace(regFound);
			if (regFound == null) {
				this._error = "error: could not parse operand " + j + " (" + regs[j] + ").";
				badreg = true;
				break;
			}
			if (isFrag) {
				if (!(regFound.get_flags() & 32)) {
					this._error = "error: register operand " + j + " (" + regs[j] + ") only allowed in vertex programs.";
					badreg = true;
					break;
				}
				if (isRelative) {
					this._error = "error: register operand " + j + " (" + regs[j] + ") relative adressing not allowed in fragment programs.";
					badreg = true;
					break;
				}
			} else {
				if (!(regFound.get_flags() & 64)) {
					this._error = "error: register operand " + j + " (" + regs[j] + ") only allowed in fragment programs.";
					badreg = true;
					break;
				}
			}
			regs[j] = regs[j].slice(regs[j].search(regFound.get_name()) + regFound.get_name().length);
			var idxmatch = isRelative ? relreg[0].match(/\d+/) : regs[j].match(/\d+/);
			var regidx = 0;
			if (idxmatch)
				regidx = idxmatch[0];
			if (regFound.get_range() < regidx) {
				this._error = "error: register operand " + j + " (" + regs[j] + ") index exceeds limit of " + (regFound.get_range() + 1) + ".";
				badreg = true;
				break;
			}
			var regmask = 0;
			var maskmatch = regs[j].match(/(\.[xyzw]{1,4})/);
			var isDest = (j == 0 && !(opFound.get_flags() & 128));
			var isSampler = (j == 2 && (opFound.get_flags() & 8));
			var reltype = 0;
			var relsel = 0;
			var reloffset = 0;
			if (isDest && isRelative) {
				this._error = "error: relative can not be destination";
				badreg = true;
				break;
			}
			if (maskmatch) {
				regmask = 0;
				var cv;
				var maskLength = maskmatch[0].length;
				for (var k = 1; k < maskLength; k++) {
					cv = maskmatch[0].charCodeAt(k) - "x".charCodeAt(0);
					if (cv > 2)
						cv = 3;
					if (isDest)
						regmask |= 1 << cv;
					else
						regmask |= cv << ((k - 1) << 1);
				}
				if (!isDest)
					for (; k <= 4; k++)
						regmask |= cv << ((k - 1) << 1);
			} else {
				regmask = isDest ? 0xf : 0xe4;
			}
			if (isRelative) {
				var relname = relreg[0].match(/[A-Za-z]{1,2}/ig);
				var regFoundRel = com.adobe.utils.AGALMiniAssembler.REGMAP[relname[0]];
				if (regFoundRel == null) {
					this._error = "error: bad index register";
					badreg = true;
					break;
				}
				reltype = regFoundRel.get_emitCode();
				var selmatch = relreg[0].match(/(\.[xyzw]{1,1})/);
				if (selmatch.length == 0) {
					this._error = "error: bad index register select";
					badreg = true;
					break;
				}
				relsel = selmatch[0].charCodeAt(1) - "x".charCodeAt(0);
				if (relsel > 2)
					relsel = 3;
				var relofs = relreg[0].match(/\+\d{1,3}/ig);
				if (relofs.length > 0)
					reloffset = relofs[0];
				if (reloffset < 0 || reloffset > 255) {
					this._error = "error: index offset " + reloffset + " out of bounds. [0..255]";
					badreg = true;
					break;
				}
				if (this.verbose)
					trace("RELATIVE: type=" + reltype + "==" + relname[0] + " sel=" + relsel + "==" + selmatch[0] + " idx=" + regidx + " offset=" + reloffset);
			}
			if (this.verbose)
				trace("  emit argcode=" + regFound + "[" + regidx + "][" + regmask + "]");
			if (isDest) {
				this.get_agalcode().writeShort(regidx);
				this.get_agalcode().writeByte(regmask);
				this.get_agalcode().writeByte(regFound.get_emitCode());
				pad -= 32;
			} else {
				if (isSampler) {
					if (this.verbose)
						trace("  emit sampler");
					var samplerbits = 5;
					var optsLength = opts == null ? 0 : opts.length;
					var bias = 0;
					for (k = 0; k < optsLength; k++) {
						if (this.verbose)
							trace("    opt: " + opts[k]);
						var optfound = com.adobe.utils.AGALMiniAssembler.SAMPLEMAP[opts[k]];
						if (optfound == null) {
							bias = opts[k];
							if (this.verbose)
								trace("    bias: " + bias);
						} else {
							if (optfound.get_flag() != 16)
								samplerbits &= ~(0xf << optfound.get_flag());
							samplerbits |= optfound.get_mask() << optfound.get_flag();
						}
					}
					this.get_agalcode().writeShort(regidx);
					this.get_agalcode().writeByte(~~(bias * 8.0));
					this.get_agalcode().writeByte(0);
					this.get_agalcode().writeUnsignedInt(samplerbits);
					if (this.verbose)
						trace("    bits: " + (samplerbits - 5));
					pad -= 64;
				} else {
					if (j == 0) {
						this.get_agalcode().writeUnsignedInt(0);
						pad -= 32;
					}
					this.get_agalcode().writeShort(regidx);
					this.get_agalcode().writeByte(reloffset);
					this.get_agalcode().writeByte(regmask);
					this.get_agalcode().writeByte(regFound.get_emitCode());
					this.get_agalcode().writeByte(reltype);
					this.get_agalcode().writeShort(isRelative ? (relsel | (1 << 15)) : 0);
					pad -= 64;
				}
			}
		}
		for (j = 0; j < pad; j += 8)
			this.get_agalcode().writeByte(0);
		if (badreg)
			break;
	}
	if (this._error != "") {
		this._error += "\n  at line " + i + " " + lines[i];
		this.get_agalcode().set_length(0);
		trace(this._error);
	}
	if (this.debugEnabled) {
		var dbgLine = "generated bytecode:";
		var agalLength = this.get_agalcode().get_length();
		for (var index = 0; index < agalLength; index++) {
			if (!(index % 16))
				dbgLine += "\n";
			if (!(index % 4))
				dbgLine += " ";
			var byteStr = this.get_agalcode().getValueByPosition(index).toString(16);
			if (byteStr.length < 2)
				byteStr = "0" + byteStr;
			dbgLine += byteStr;
		}
		trace(dbgLine);
	}
	if (this.verbose)
		trace("AGALMiniAssembler.assemble time: " + ((flash.utils.getTimer() - start) / 1000) + "s");
	return this.get_agalcode();
};

com.adobe.utils.AGALMiniAssembler.init = function() {
	com.adobe.utils.AGALMiniAssembler.initialized = true;
	com.adobe.utils.AGALMiniAssembler.OPMAP["mov"] = new com.adobe.utils.AGALMiniAssembler$OpCode("mov", 2, 0x00, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["add"] = new com.adobe.utils.AGALMiniAssembler$OpCode("add", 3, 0x01, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sub"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sub", 3, 0x02, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["mul"] = new com.adobe.utils.AGALMiniAssembler$OpCode("mul", 3, 0x03, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["div"] = new com.adobe.utils.AGALMiniAssembler$OpCode("div", 3, 0x04, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["rcp"] = new com.adobe.utils.AGALMiniAssembler$OpCode("rcp", 2, 0x05, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["min"] = new com.adobe.utils.AGALMiniAssembler$OpCode("min", 3, 0x06, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["max"] = new com.adobe.utils.AGALMiniAssembler$OpCode("max", 3, 0x07, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["frc"] = new com.adobe.utils.AGALMiniAssembler$OpCode("frc", 2, 0x08, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sqt"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sqt", 2, 0x09, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["rsq"] = new com.adobe.utils.AGALMiniAssembler$OpCode("rsq", 2, 0x0a, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["pow"] = new com.adobe.utils.AGALMiniAssembler$OpCode("pow", 3, 0x0b, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["log"] = new com.adobe.utils.AGALMiniAssembler$OpCode("log", 2, 0x0c, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["exp"] = new com.adobe.utils.AGALMiniAssembler$OpCode("exp", 2, 0x0d, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["nrm"] = new com.adobe.utils.AGALMiniAssembler$OpCode("nrm", 2, 0x0e, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sin"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sin", 2, 0x0f, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["cos"] = new com.adobe.utils.AGALMiniAssembler$OpCode("cos", 2, 0x10, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["crs"] = new com.adobe.utils.AGALMiniAssembler$OpCode("crs", 3, 0x11, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["dp3"] = new com.adobe.utils.AGALMiniAssembler$OpCode("dp3", 3, 0x12, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["dp4"] = new com.adobe.utils.AGALMiniAssembler$OpCode("dp4", 3, 0x13, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["abs"] = new com.adobe.utils.AGALMiniAssembler$OpCode("abs", 2, 0x14, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["neg"] = new com.adobe.utils.AGALMiniAssembler$OpCode("neg", 2, 0x15, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sat"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sat", 2, 0x16, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["m33"] = new com.adobe.utils.AGALMiniAssembler$OpCode("m33", 3, 0x17, 16);
	com.adobe.utils.AGALMiniAssembler.OPMAP["m44"] = new com.adobe.utils.AGALMiniAssembler$OpCode("m44", 3, 0x18, 16);
	com.adobe.utils.AGALMiniAssembler.OPMAP["m34"] = new com.adobe.utils.AGALMiniAssembler$OpCode("m34", 3, 0x19, 16);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ifz"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ifz", 1, 0x1a, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["inz"] = new com.adobe.utils.AGALMiniAssembler$OpCode("inz", 1, 0x1b, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ife"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ife", 2, 0x1c, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ine"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ine", 2, 0x1d, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ifg"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ifg", 2, 0x1e, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ifl"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ifl", 2, 0x1f, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["ieg"] = new com.adobe.utils.AGALMiniAssembler$OpCode("ieg", 2, 0x20, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["iel"] = new com.adobe.utils.AGALMiniAssembler$OpCode("iel", 2, 0x21, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["els"] = new com.adobe.utils.AGALMiniAssembler$OpCode("els", 0, 0x22, 128 | 2 | 4);
	com.adobe.utils.AGALMiniAssembler.OPMAP["eif"] = new com.adobe.utils.AGALMiniAssembler$OpCode("eif", 0, 0x23, 128 | 4);
	com.adobe.utils.AGALMiniAssembler.OPMAP["rep"] = new com.adobe.utils.AGALMiniAssembler$OpCode("rep", 1, 0x24, 128 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.OPMAP["erp"] = new com.adobe.utils.AGALMiniAssembler$OpCode("erp", 0, 0x25, 128 | 4);
	com.adobe.utils.AGALMiniAssembler.OPMAP["brk"] = new com.adobe.utils.AGALMiniAssembler$OpCode("brk", 0, 0x26, 128);
	com.adobe.utils.AGALMiniAssembler.OPMAP["kil"] = new com.adobe.utils.AGALMiniAssembler$OpCode("kil", 1, 0x27, 128 | 32);
	com.adobe.utils.AGALMiniAssembler.OPMAP["tex"] = new com.adobe.utils.AGALMiniAssembler$OpCode("tex", 3, 0x28, 32 | 8);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sge"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sge", 3, 0x29, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["slt"] = new com.adobe.utils.AGALMiniAssembler$OpCode("slt", 3, 0x2a, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sgn"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sgn", 2, 0x2b, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["seq"] = new com.adobe.utils.AGALMiniAssembler$OpCode("seq", 3, 0x2c, 0);
	com.adobe.utils.AGALMiniAssembler.OPMAP["sne"] = new com.adobe.utils.AGALMiniAssembler$OpCode("sne", 3, 0x2d, 0);
	com.adobe.utils.AGALMiniAssembler.REGMAP["va"] = new com.adobe.utils.AGALMiniAssembler$Register("va", "vertex attribute", 0x0, 7, 64 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["vc"] = new com.adobe.utils.AGALMiniAssembler$Register("vc", "vertex constant", 0x1, 127, 64 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["vt"] = new com.adobe.utils.AGALMiniAssembler$Register("vt", "vertex temporary", 0x2, 7, 64 | 1 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP[com.adobe.utils.AGALMiniAssembler.VO] = new com.adobe.utils.AGALMiniAssembler$Register(com.adobe.utils.AGALMiniAssembler.VO, "vertex output", 0x3, 0, 64 | 1);
	com.adobe.utils.AGALMiniAssembler.REGMAP[com.adobe.utils.AGALMiniAssembler.I] = new com.adobe.utils.AGALMiniAssembler$Register(com.adobe.utils.AGALMiniAssembler.I, "varying", 0x4, 7, 64 | 32 | 2 | 1);
	com.adobe.utils.AGALMiniAssembler.REGMAP["fc"] = new com.adobe.utils.AGALMiniAssembler$Register("fc", "fragment constant", 0x1, 27, 32 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["ft"] = new com.adobe.utils.AGALMiniAssembler$Register("ft", "fragment temporary", 0x2, 7, 32 | 1 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP["fs"] = new com.adobe.utils.AGALMiniAssembler$Register("fs", "texture sampler", 0x5, 7, 32 | 2);
	com.adobe.utils.AGALMiniAssembler.REGMAP[com.adobe.utils.AGALMiniAssembler.FO] = new com.adobe.utils.AGALMiniAssembler$Register(com.adobe.utils.AGALMiniAssembler.FO, "fragment output", 0x3, 0, 32 | 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["rgba"] = new com.adobe.utils.AGALMiniAssembler$Sampler("rgba", 8, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["dxt1"] = new com.adobe.utils.AGALMiniAssembler$Sampler("dxt1", 8, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["dxt5"] = new com.adobe.utils.AGALMiniAssembler$Sampler("dxt5", 8, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["2d"] = new com.adobe.utils.AGALMiniAssembler$Sampler("2d", 12, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["3d"] = new com.adobe.utils.AGALMiniAssembler$Sampler("3d", 12, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["cube"] = new com.adobe.utils.AGALMiniAssembler$Sampler("cube", 12, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["mipnearest"] = new com.adobe.utils.AGALMiniAssembler$Sampler("mipnearest", 24, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["miplinear"] = new com.adobe.utils.AGALMiniAssembler$Sampler("miplinear", 24, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["mipnone"] = new com.adobe.utils.AGALMiniAssembler$Sampler("mipnone", 24, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["nomip"] = new com.adobe.utils.AGALMiniAssembler$Sampler("nomip", 24, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["nearest"] = new com.adobe.utils.AGALMiniAssembler$Sampler("nearest", 28, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["linear"] = new com.adobe.utils.AGALMiniAssembler$Sampler("linear", 28, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic2x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic2x", 28, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic4x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic4x", 28, 3);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic8x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic8x", 28, 4);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["anisotropic16x"] = new com.adobe.utils.AGALMiniAssembler$Sampler("anisotropic16x", 28, 5);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["centroid"] = new com.adobe.utils.AGALMiniAssembler$Sampler("centroid", 16, 1 << 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["single"] = new com.adobe.utils.AGALMiniAssembler$Sampler("single", 16, 1 << 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["depth"] = new com.adobe.utils.AGALMiniAssembler$Sampler("depth", 16, 1 << 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["repeat"] = new com.adobe.utils.AGALMiniAssembler$Sampler("repeat", 20, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["wrap"] = new com.adobe.utils.AGALMiniAssembler$Sampler("wrap", 20, 1);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["clamp"] = new com.adobe.utils.AGALMiniAssembler$Sampler("clamp", 20, 0);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["clamp_u_repeat_v"] = new com.adobe.utils.AGALMiniAssembler$Sampler("clamp_u_repeat_v", 20, 2);
	com.adobe.utils.AGALMiniAssembler.SAMPLEMAP["repeat_u_clamp_v"] = new com.adobe.utils.AGALMiniAssembler$Sampler("repeat_u_clamp_v", 20, 3);
};

com.adobe.utils.AGALMiniAssembler.OPMAP = new flash.utils.Dictionary(false);

com.adobe.utils.AGALMiniAssembler.REGMAP = new flash.utils.Dictionary(false);

com.adobe.utils.AGALMiniAssembler.SAMPLEMAP = new flash.utils.Dictionary(false);

com.adobe.utils.AGALMiniAssembler.MAX_NESTING = 4;

com.adobe.utils.AGALMiniAssembler.MAX_OPCODES = 256;

com.adobe.utils.AGALMiniAssembler.FRAGMENT = "fragment";

com.adobe.utils.AGALMiniAssembler.VERTEX = "vertex";

com.adobe.utils.AGALMiniAssembler.SAMPLER_TYPE_SHIFT = 8;

com.adobe.utils.AGALMiniAssembler.SAMPLER_DIM_SHIFT = 12;

com.adobe.utils.AGALMiniAssembler.SAMPLER_SPECIAL_SHIFT = 16;

com.adobe.utils.AGALMiniAssembler.SAMPLER_REPEAT_SHIFT = 20;

com.adobe.utils.AGALMiniAssembler.SAMPLER_MIPMAP_SHIFT = 24;

com.adobe.utils.AGALMiniAssembler.SAMPLER_FILTER_SHIFT = 28;

com.adobe.utils.AGALMiniAssembler.REG_WRITE = 0x1;

com.adobe.utils.AGALMiniAssembler.REG_READ = 0x2;

com.adobe.utils.AGALMiniAssembler.REG_FRAG = 0x20;

com.adobe.utils.AGALMiniAssembler.REG_VERT = 0x40;

com.adobe.utils.AGALMiniAssembler.OP_SCALAR = 0x1;

com.adobe.utils.AGALMiniAssembler.OP_INC_NEST = 0x2;

com.adobe.utils.AGALMiniAssembler.OP_DEC_NEST = 0x4;

com.adobe.utils.AGALMiniAssembler.OP_SPECIAL_TEX = 0x8;

com.adobe.utils.AGALMiniAssembler.OP_SPECIAL_MATRIX = 0x10;

com.adobe.utils.AGALMiniAssembler.OP_FRAG_ONLY = 0x20;

com.adobe.utils.AGALMiniAssembler.OP_NO_DEST = 0x80;

com.adobe.utils.AGALMiniAssembler.MOV = "mov";

com.adobe.utils.AGALMiniAssembler.ADD = "add";

com.adobe.utils.AGALMiniAssembler.SUB = "sub";

com.adobe.utils.AGALMiniAssembler.MUL = "mul";

com.adobe.utils.AGALMiniAssembler.DIV = "div";

com.adobe.utils.AGALMiniAssembler.RCP = "rcp";

com.adobe.utils.AGALMiniAssembler.MIN = "min";

com.adobe.utils.AGALMiniAssembler.MAX = "max";

com.adobe.utils.AGALMiniAssembler.FRC = "frc";

com.adobe.utils.AGALMiniAssembler.SQT = "sqt";

com.adobe.utils.AGALMiniAssembler.RSQ = "rsq";

com.adobe.utils.AGALMiniAssembler.POW = "pow";

com.adobe.utils.AGALMiniAssembler.LOG = "log";

com.adobe.utils.AGALMiniAssembler.EXP = "exp";

com.adobe.utils.AGALMiniAssembler.NRM = "nrm";

com.adobe.utils.AGALMiniAssembler.SIN = "sin";

com.adobe.utils.AGALMiniAssembler.COS = "cos";

com.adobe.utils.AGALMiniAssembler.CRS = "crs";

com.adobe.utils.AGALMiniAssembler.DP3 = "dp3";

com.adobe.utils.AGALMiniAssembler.DP4 = "dp4";

com.adobe.utils.AGALMiniAssembler.ABS = "abs";

com.adobe.utils.AGALMiniAssembler.NEG = "neg";

com.adobe.utils.AGALMiniAssembler.SAT = "sat";

com.adobe.utils.AGALMiniAssembler.M33 = "m33";

com.adobe.utils.AGALMiniAssembler.M44 = "m44";

com.adobe.utils.AGALMiniAssembler.M34 = "m34";

com.adobe.utils.AGALMiniAssembler.IFZ = "ifz";

com.adobe.utils.AGALMiniAssembler.INZ = "inz";

com.adobe.utils.AGALMiniAssembler.IFE = "ife";

com.adobe.utils.AGALMiniAssembler.INE = "ine";

com.adobe.utils.AGALMiniAssembler.IFG = "ifg";

com.adobe.utils.AGALMiniAssembler.IFL = "ifl";

com.adobe.utils.AGALMiniAssembler.IEG = "ieg";

com.adobe.utils.AGALMiniAssembler.IEL = "iel";

com.adobe.utils.AGALMiniAssembler.ELS = "els";

com.adobe.utils.AGALMiniAssembler.EIF = "eif";

com.adobe.utils.AGALMiniAssembler.REP = "rep";

com.adobe.utils.AGALMiniAssembler.ERP = "erp";

com.adobe.utils.AGALMiniAssembler.BRK = "brk";

com.adobe.utils.AGALMiniAssembler.KIL = "kil";

com.adobe.utils.AGALMiniAssembler.TEX = "tex";

com.adobe.utils.AGALMiniAssembler.SGE = "sge";

com.adobe.utils.AGALMiniAssembler.SLT = "slt";

com.adobe.utils.AGALMiniAssembler.SGN = "sgn";

com.adobe.utils.AGALMiniAssembler.SEQ = "seq";

com.adobe.utils.AGALMiniAssembler.SNE = "sne";

com.adobe.utils.AGALMiniAssembler.VA = "va";

com.adobe.utils.AGALMiniAssembler.VC = "vc";

com.adobe.utils.AGALMiniAssembler.VT = "vt";

com.adobe.utils.AGALMiniAssembler.VO = false ? "vo" : "op";

com.adobe.utils.AGALMiniAssembler.I = false ? "i" : "v";

com.adobe.utils.AGALMiniAssembler.FC = "fc";

com.adobe.utils.AGALMiniAssembler.FT = "ft";

com.adobe.utils.AGALMiniAssembler.FS = "fs";

com.adobe.utils.AGALMiniAssembler.FO = false ? "fo" : "oc";

com.adobe.utils.AGALMiniAssembler.D2 = "2d";

com.adobe.utils.AGALMiniAssembler.D3 = "3d";

com.adobe.utils.AGALMiniAssembler.CUBE = "cube";

com.adobe.utils.AGALMiniAssembler.MIPNEAREST = "mipnearest";

com.adobe.utils.AGALMiniAssembler.MIPLINEAR = "miplinear";

com.adobe.utils.AGALMiniAssembler.MIPNONE = "mipnone";

com.adobe.utils.AGALMiniAssembler.NOMIP = "nomip";

com.adobe.utils.AGALMiniAssembler.NEAREST = "nearest";

com.adobe.utils.AGALMiniAssembler.LINEAR = "linear";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC2X = "anisotropic2x";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC4X = "anisotropic4x";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC8X = "anisotropic8x";

com.adobe.utils.AGALMiniAssembler.ANISOTROPIC16X = "anisotropic16x";

com.adobe.utils.AGALMiniAssembler.CENTROID = "centroid";

com.adobe.utils.AGALMiniAssembler.SINGLE = "single";

com.adobe.utils.AGALMiniAssembler.DEPTH = "depth";

com.adobe.utils.AGALMiniAssembler.REPEAT = "repeat";

com.adobe.utils.AGALMiniAssembler.WRAP = "wrap";

com.adobe.utils.AGALMiniAssembler.CLAMP = "clamp";

com.adobe.utils.AGALMiniAssembler.REPEAT_U_CLAMP_V = "repeat_u_clamp_v";

com.adobe.utils.AGALMiniAssembler.CLAMP_U_REPEAT_V = "clamp_u_repeat_v";

com.adobe.utils.AGALMiniAssembler.RGBA = "rgba";

com.adobe.utils.AGALMiniAssembler.DXT1 = "dxt1";

com.adobe.utils.AGALMiniAssembler.DXT5 = "dxt5";

Object.defineProperty(com.adobe.utils.AGALMiniAssembler.prototype, 'agalcode', {
  get: function() { return this.get_agalcode(); },
  set: function(value) { return this.set_agalcode(value); }
});
Object.defineProperty(com.adobe.utils.AGALMiniAssembler.prototype, 'error', {
  get: function() { return this.get_error(); },
  set: function(value) { return this.set_error(value); }
});

com.adobe.utils.AGALMiniAssembler.className = "com.adobe.utils.AGALMiniAssembler";

com.adobe.utils.AGALMiniAssembler.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('trace');
	p.push('flash.utils.ByteArray');
	p.push('flash.utils.getTimer');
	return p;
};

com.adobe.utils.AGALMiniAssembler.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	return p;
};

com.adobe.utils.AGALMiniAssembler.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'debugging', t:'Boolean'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

com.adobe.utils.AGALMiniAssembler$OpCode = function(name, numRegister, emitCode, flags) {
	this._numRegister = 0;
	this._flags = 0;
	this._name = null;
	this._emitCode = 0;
	this._name = name;
	this._numRegister = numRegister;
	this._emitCode = emitCode;
	this._flags = flags;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_emitCode = function() {
	return this._emitCode;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_flags = function() {
	return this._flags;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_name = function() {
	return this._name;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.get_numRegister = function() {
	return this._numRegister;
};

com.adobe.utils.AGALMiniAssembler$OpCode.prototype.toString = function() {
	return "[OpCode name=\"" + this._name + "\", numRegister=" + this._numRegister + ", emitCode=" + this._emitCode + ", flags=" + this._flags + "]";
};

com.adobe.utils.AGALMiniAssembler$Register = function(name, longName, emitCode, range, flags) {
	this._name = null;
	this._flags = 0;
	this._emitCode = 0;
	this._range = 0;
	this._longName = null;
	this._name = name;
	this._longName = longName;
	this._emitCode = emitCode;
	this._range = range;
	this._flags = flags;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_emitCode = function() {
	return this._emitCode;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_longName = function() {
	return this._longName;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_name = function() {
	return this._name;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_flags = function() {
	return this._flags;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.get_range = function() {
	return this._range;
};

com.adobe.utils.AGALMiniAssembler$Register.prototype.toString = function() {
	return "[Register name=\"" + this._name + "\", longName=\"" + this._longName + "\", emitCode=" + this._emitCode + ", range=" + this._range + ", flags=" + this._flags + "]";
};

com.adobe.utils.AGALMiniAssembler$Sampler = function(name, flag, mask) {
	this._flag = 0;
	this._name = null;
	this._mask = 0;
	this._name = name;
	this._flag = flag;
	this._mask = mask;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.get_flag = function() {
	return this._flag;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.get_mask = function() {
	return this._mask;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.get_name = function() {
	return this._name;
};

com.adobe.utils.AGALMiniAssembler$Sampler.prototype.toString = function() {
	return "[Sampler name=\"" + this._name + "\", flag=\"" + this._flag + "\", mask=" + this.get_mask() + "]";
};

