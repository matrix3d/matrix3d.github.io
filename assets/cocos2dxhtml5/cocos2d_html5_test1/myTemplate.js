function b(a) {
	throw a;
}
var h = void 0, m = !0, p = null, q = !1;
function u() {
	return function (a) {
		return a
	}
}
function x() {
	return function () {}

}
function z(a) {
	return function (c) {
		this[a] = c
	}
}
function C(a) {
	return function () {
		return this[a]
	}
}
function M(a) {
	return function () {
		return a
	}
}
var Q, R = R || {};
function S() {
	return arguments.callee.name || arguments.callee.toString().match(/^function ([^(]+)/)[1]
}
S.id = 0 | 998 * Math.random();
S.rU = function (a, c, d) {
	for (var e = a.toString(), f = e.substring(e.indexOf("(") + 1, e.indexOf(")")), f = f.trim(), e = e.substring(e.indexOf("{") + 1, e.lastIndexOf("}")); -1 != e.indexOf("this._super"); )
		var g = e.indexOf("this._super"), k = e.indexOf("(", g), l = e.substring(k + 1, e.indexOf(")", k)), l = (l = l.trim()) ? "," : "", n = arguments.callee.w_(), e = e.substring(0, g) + n + "[" + d + "]." + c + ".call(this" + l + e.substring(k + 1);
	return Function(f, e)
};
S.rU.w_ = S;
S.N9 = function () {
	return this.id++
};
(function () {
	var a = /\b_super\b/,
	c = document.ccConfig && document.ccConfig.CLASS_RELEASE_MODE ? document.ccConfig.CLASS_RELEASE_MODE : p;
	c && console.log("release Mode");
	R.D = x();
	R.D.extend = function (d) {
		function e() {
			this.ctor && this.ctor.apply(this, arguments)
		}
		var f = this.prototype,
		g = Object.create(f),
		k = S.N9();
		S[k] = f;
		var l = {
			writable : m,
			enumerable : q,
			configurable : m
		},
		n;
		for (n in d)
			c && "function" == typeof d[n] && "function" == typeof f[n] && a.test(d[n]) ? (l.value = S.rU(d[n], n, k), Object.defineProperty(g, n, l)) : "function" == typeof d[n] &&
			"function" == typeof f[n] && a.test(d[n]) ? (l.value = function (a, c) {
				return function () {
					var d = this._super;
					this._super = f[a];
					var e = c.apply(this, arguments);
					this._super = d;
					return e
				}
			}
				(n, d[n]), Object.defineProperty(g, n, l)) : "function" == typeof d[n] ? (l.value = d[n], Object.defineProperty(g, n, l)) : g[n] = d[n];
		e.id = k;
		l.value = k;
		Object.defineProperty(g, "__pid", l);
		e.prototype = g;
		l.value = e;
		Object.defineProperty(e.prototype, "constructor", l);
		e.extend = arguments.callee;
		e.eua = function (a) {
			for (var c in a)
				g[c] = a[c]
		};
		return e
	};
	Function.prototype.bind =
		Function.prototype.bind || function (a) {
		var c = this;
		return function () {
			var f = Array.prototype.slice.call(arguments);
			return c.apply(a || p, f)
		}
	}
})();
R.fua = function (a, c) {
	function d() {}

	d.prototype = c.prototype;
	a.bG = c.prototype;
	a.prototype = new d;
	a.prototype.constructor = a
};
R.$la = function (a, c, d) {
	var e = arguments.callee.caller;
	if (e.bG)
		return ret = e.bG.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
	for (var f = Array.prototype.slice.call(arguments, 2), g = q, k = a.constructor; k; k = k.bG && k.bG.constructor)
		if (k.prototype[c] === e)
			g = m;
		else if (g)
			return k.prototype[c].apply(a, f);
	if (a[c] === e)
		return a.constructor.prototype[c].apply(a, f);
	b(Error("cc.base called from a method of one name to a method of a different name"))
};
R.wma = function (a, c) {
	a || (a = {});
	for (var d in c)
		a[d] = c[d];
	return a
};
R.Dg = function (a, c) {
	this.x = a || 0;
	this.y = c || 0
};
R.Via = function (a, c) {
	R.log("cc.PointMake will be deprecated sooner or later. Use cc.p instead.");
	return new R.Dg(a, c)
};
R.b = function (a, c) {
	return new R.Dg(a, c)
};
R.Yka = R.b;
R.Nb = function () {
	return R.b(0, 0)
};
Object.defineProperties(R, {
	rH : {
		get : function () {
			return R.b(0, 0)
		}
	},
	Q1 : {
		get : function () {
			return R.size(0, 0)
		}
	},
	Yia : {
		get : function () {
			return R.rect(0, 0, 0, 0)
		}
	}
});
R.iv = function (a, c) {
	return !a || !c ? q : a.x === c.x && a.y === c.y
};
R.sm = function (a, c) {
	this.width = a || 0;
	this.height = c || 0
};
R.yja = function (a, c) {
	R.log("cc.SizeMake will be deprecated sooner or later. Use cc.size instead.");
	return R.size(a, c)
};
R.size = function (a, c) {
	return new R.sm(a, c)
};
R.kla = R.size;
R.kd = function () {
	return R.size(0, 0)
};
R.cO = function (a, c) {
	return !a || !c ? q : a.width == c.width && a.height == c.height
};
R.Xi = function (a, c, d, e) {
	switch (arguments.length) {
	case 0:
		this.origin = R.b(0, 0);
		this.size = R.size(0, 0);
		break;
	case 1:
		a ? a instanceof R.Xi ? (this.origin = R.b(a.origin.x, a.origin.y), this.size = R.size(a.size.width, a.size.height)) : b("unknown argument type") : (this.origin = R.b(0, 0), this.size = R.size(0, 0));
		break;
	case 2:
		this.origin = a ? R.b(a.x, a.y) : R.b(0, 0);
		this.size = c ? R.size(c.width, c.height) : R.size(0, 0);
		break;
	case 4:
		this.origin = R.b(a || 0, c || 0);
		this.size = R.size(d || 0, e || 0);
		break;
	default:
		b("unknown argument type")
	}
};
R.eja = function (a, c, d, e) {
	R.log("cc.RectMake will be deprecated sooner or later. Use cc.rect instead.");
	return R.rect(a, c, d, e)
};
R.rect = function (a, c, d, e) {
	return new R.Xi(a, c, d, e)
};
R.sb = R.rect;
R.Oc = function () {
	return R.rect(0, 0, 0, 0)
};
R.eX = function (a, c) {
	return !a || !c ? q : R.iv(a.origin, c.origin) && R.cO(a.size, c.size)
};
R.Oq = function (a) {
	return !a ? q : 0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height
};
R.Kya = function (a, c) {
	return !a || !c ? q : !(a.x >= c.x || a.y >= c.y || a.x + a.width <= c.x + c.width || a.y + a.height <= c.y + c.height)
};
R.Lj = function (a) {
	return a.x + a.width
};
R.Lya = function (a) {
	return a.x + a.width / 2
};
R.Oi = function (a) {
	return a.x
};
R.Mj = function (a) {
	return a.y + a.height
};
R.Mya = function (a) {
	return a.y + a.height / 2
};
R.Pi = function (a) {
	return a.y
};
R.Yr = function (a, c) {
	return c.x >= R.Oi(a) && c.x <= R.Lj(a) && c.y >= R.Pi(a) && c.y <= R.Mj(a)
};
R.Jca = function (a, c) {
	return !(R.Lj(a) < R.Oi(c) || R.Lj(c) < R.Oi(a) || R.Mj(a) < R.Pi(c) || R.Mj(c) < R.Pi(a))
};
R.Nya = function (a, c) {
	return !(a.x + a.width < c.x || c.x + c.width < a.x || a.y + a.height < c.y || c.y + c.height < a.y)
};
R.rN = function (a, c) {
	var d = R.rect(0, 0, 0, 0);
	d.x = Math.min(a.x, c.x);
	d.y = Math.min(a.y, c.y);
	d.width = Math.max(a.x + a.width, c.x + c.width) - d.x;
	d.height = Math.max(a.y + a.height, c.y + c.height) - d.y;
	return d
};
R.Ica = function (a, c) {
	var d = R.rect(Math.max(R.Oi(a), R.Oi(c)), Math.max(R.Pi(a), R.Pi(c)), 0, 0);
	d.width = Math.min(R.Lj(a), R.Lj(c)) - R.Oi(d);
	d.height = Math.min(R.Mj(a), R.Mj(c)) - R.Pi(d);
	return d
};
R.Xi.prototype.Su = function () {
	return this.size.width
};
R.Xi.prototype.sY = function (a) {
	this.size.width = a
};
R.Xi.prototype.Pu = function () {
	return this.size.height
};
Object.defineProperties(R.Xi.prototype, {
	x : {
		get : function () {
			return this.origin.x
		},
		set : function (a) {
			this.origin.x = a
		},
		enumerable : m,
		configurable : m
	},
	y : {
		get : function () {
			return this.origin.y
		},
		set : function (a) {
			this.origin.y = a
		},
		enumerable : m,
		configurable : m
	},
	width : {
		get : function () {
			return this.Su()
		},
		set : function (a) {
			this.sY(a)
		},
		enumerable : m,
		configurable : m
	},
	height : {
		get : function () {
			return this.Pu()
		},
		set : function (a) {
			this.size.height = a
		},
		enumerable : m,
		configurable : m
	}
});
var T = T || {};
try {
	T.localStorage = window.localStorage
} catch (ba) {
	"SECURITY_ERR" === ba.name && R.log("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"),
	T.localStorage = x()
}
Object.defineProperties(T, {
	qU : {
		get : function () {
			var a = {
				canvas : m
			};
			R.ua.tc && (a.opengl = m);
			"ontouchstart" in document.documentElement || window.navigator.msPointerEnabled ? a.touches = m : "onmouseup" in document.documentElement && (a.mouse = m);
			"onkeyup" in document.documentElement && (a.keyboard = m);
			if (window.DeviceMotionEvent || window.DeviceOrientationEvent)
				a.accelerometer = m;
			return a
		},
		enumerable : m,
		configurable : m
	},
	Wxa : {
		get : function () {
			var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? m : q,
			c = navigator.userAgent.match(/android/i) ||
				navigator.platform.match(/android/i) ? m : q,
			d = navigator.appVersion;
			-1 != navigator.appVersion.indexOf("Win") ? d = "Windows" : -1 != navigator.appVersion.indexOf("Mac") ? d = "OS X" : -1 != navigator.appVersion.indexOf("X11") ? d = "UNIX" : -1 != navigator.appVersion.indexOf("Linux") ? d = "Linux" : a ? d = "iOS" : c && (d = "Android");
			return d
		},
		enumerable : m,
		configurable : m
	},
	platform : {
		get : M("browser"),
		enumerable : m,
		configurable : m
	},
	version : {
		get : function () {
			return R.mA
		},
		enumerable : m,
		configurable : m
	}
});
T.Gna = x();
T.ena = x();
T.oza = x();
R.mA = "Cocos2d-html5-v2.2";
R.uA = 0;
R.rP = R.b(0, 0);
R.H_ = 0.5;
R.$ga = 1;
R.R1 = 1;
R.c1 = 0;
R.KQ = 0;
R.WH = 0;
R.Cja = 0;
R.aja = 1;
R.$ia = "-hd";
R.y2 = 1;
R.Yn = 0;
R.rja = 0;
R.G0 = 0;
R.F0 = 0;
R.$G = 1;
R.sha = R.mA + "-canvas";
R.Hy = {
	platform : T.platform
};
R.dna = function () {
	for (var a in T)
		R.log(a + " \x3d " + T[a])
};
R.lA = 1;
R.Rj = 1;
R.A = function (a) {
	var c = a.constructor ? new a.constructor : {},
	d;
	for (d in a) {
		var e = a[d];
		c[d] = "object" == typeof e && e && !(e instanceof R.r) && !(e instanceof HTMLElement) ? R.A(e) : e
	}
	return c
};
R.Yla = x();
R.xP = R.xP || q;
R.K4 = function (a) {
	var c = document.getElementById("logInfoList");
	if (!c) {
		var d = document.createElement("Div");
		d.setAttribute("id", "logInfoDiv");
		R.canvas.parentNode.appendChild(d);
		d.setAttribute("width", "300");
		d.setAttribute("height", R.canvas.height);
		d.style.zIndex = "99999";
		d.style.position = "absolute";
		d.style.top = "0";
		d.style.left = "0";
		c = document.createElement("ul");
		d.appendChild(c);
		c.setAttribute("id", "logInfoList");
		c.style.height = "450px";
		c.style.color = "#fff";
		c.style.textAlign = "left";
		c.style.listStyle = "disc outside";
		c.style.fontSize = "12px";
		c.style.fontFamily = "arial";
		c.style.padding = "0 0 0 20px";
		c.style.margin = "0";
		c.style.textShadow = "0 0 3px #000";
		c.style.zIndex = "99998";
		c.style.position = "absolute";
		c.style.top = "0";
		c.style.left = "0";
		c.style.overflowY = "hidden";
		var e = document.createElement("Div");
		d.appendChild(e);
		e.style.width = "300px";
		e.style.height = R.canvas.height + "px";
		e.style.opacity = "0.1";
		e.style.background = "#fff";
		e.style.border = "1px solid #dfdfdf";
		e.style.cma = "8px"
	}
	d = document.createElement("li");
	d.innerHTML = a;
	0 == c.childNodes.length ? c.appendChild(d) : c.insertBefore(d, c.childNodes[0])
};
R.log = function (a) {
	R.xP ? R.K4(a) : console.log(a)
};
R.xia = function (a) {
	console.log(a)
};
R.e = function (a, c) {
	console.assert ? console.assert(a, c) : a || c && alert(c)
};
R.z$ = function () {
	0 == R.qs ? (R.log = x(), R.xW = x(), R.wW = x(), R.e = x()) : 1 == R.qs ? (R.xW = R.log, R.wW = x()) : 1 < R.qs && (R.xW = R.log, R.wW = R.log)
};
R.J0 = 0;
R.I0 = 1;
R.K0 = 2;
R.N0 = 3;
R.L0 = 4;
R.U0 = 5;
R.T0 = 6;
R.P0 = 7;
R.O0 = 8;
R.M0 = 9;
R.S0 = 10;
R.H0 = 11;
R.Q0 = 12;
R.R0 = 13;
R.wU = function (a, c) {
	for (var d = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = p, f = 0; f < d.length; ++f) {
		try {
			e = a.getContext(d[f], c)
		} catch (g) {}

		if (e)
			break
	}
	return e
};
R.ua = {};
(function () {
	R.ua.fG = navigator.userAgent.toLowerCase();
	R.ua.platform = navigator.platform.toLowerCase();
	R.ua.$l = -1 != R.ua.fG.indexOf("mobile") || -1 != R.ua.fG.indexOf("android");
	R.ua.type = function () {
		var a = R.ua.fG.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baidubrowser|maxthon|ie|opera|firefox/) || R.ua.fG.match(/chrome|safari/);
		return a && 0 < a.length ? (a = a[0], "micromessenger" == a ? "wechat" : a) : "unknow"
	}
	();
	R.ua.mode = "ie" == R.ua.type && document.documentMode;
	document.ccConfig || (document.ccConfig = {});
	R.mL = parseInt(document.ccConfig.renderMode) || 0;
	if (1 === R.mL || 0 === R.mL && R.ua.$l)
		R.ua.tc = q;
	else {
		R.ua.tc = window.lka != p;
		var a = document.createElement("Canvas"),
		a = R.wU(a, {
				stencil : m,
				preserveDrawingBuffer : m
			});
		R.ua.tc = a != p
	}
	2 === R.mL && !R.ua.tc && (R.tI = m);
	var a = R.ua,
	c;
	try {
		c = new(window.wZ || window.wga || window.Jaa) ? m : q
	} catch (d) {
		c = q
	}
	a.Sfa = c;
	R.ua.Txa = function (a) {
		if (this.$l) {
			var c = R.o.d().$,
			d = c.width + "px",
			c = c.height + "px",
			k = R.jm("div");
			k.style.backgroundColor = "#ffffff";
			k.style.width = d;
			k.style.height = c;
			k.style.Aga =
				1E3;
			k.style.position = "absolute";
			k.style.top = "0px";
			k.style.left = "0px";
			k.id = "cocos2d-browser";
			var l = R.jm("iframe");
			l.src = a;
			l.style.width = d;
			l.style.height = c;
			l.setAttribute("frameborder", "no");
			l.setAttribute("scrolling", "no");
			k.appendChild(l);
			l.onload = function () {
				var a = new Image;
				a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OERBMEM3OUQzRTMxMUUyODg2Q0RFNjU1QkU1RjlFQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OERBMEM3QUQzRTMxMUUyODg2Q0RFNjU1QkU1RjlFQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk4REEwQzc3RDNFMzExRTI4ODZDREU2NTVCRTVGOUVBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk4REEwQzc4RDNFMzExRTI4ODZDREU2NTVCRTVGOUVBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NwBuoAAAA/tJREFUeNrEWF0sW3EUb6+28zFhbGadsBaNhazV+kpDYhFWKRGWbHvwFV5IvPiIFw9evElEPEiWSUgsIWoIglhmUomPxj6aKC0zKVJjtPU5o9j5J7dLdbf33jKc5Jfc3v+v5/+755x7/j1lMoiNBRDh4AO88HvO2m+ACbAC+AJQAyz2JCbBFyMBWQA/xv+3DUAXLuivudhcY4BMwCuAB+NqDPmNAnAAOsCZvQgk4BnjeiwEwAbM2YoQA14yrteQEANgDcML7gXjZgw9OAuJkADu3JAIb7Q/hr+GtCwuLs6LDq+iooLvhBAREhFEl11ZWRne0tIiIeNIpVKv4uJi4dTUVApNt0EY3ohILSIiwqO7u1sql8vD8vLyJJ2dnXH2HDabzczPz3/Y1taWzOfz78XExDxSq9Vyd3d3jMK9F2pWr6lEtLa2RmVnZ4tt7w0NDWlTU1OVtkK7urqSQ0NDzzW5hYWFjcTExAGDwXDkyD+VSkZ7e3tsWlpamP19mUwWplQqk9B1UlKST3NzczxE4K49D4mCiDwn24PyPMjIyHjs6urKIVpLSEgInp6eZsM6Kzw8nEvEMZvNBxC1BbI9KCMhkUgUy8vLRpL1QIFA4EcSyZmcnJzpS4mYnZ3dj46O7p2fn193xIGi/CeiFovlFIp5pqGhYZ5qD1qFiQxCjk1OTsqEQmEAFReloL+/X0sVAadFWE2n02VA+O+TcVZXV01QkO8ODw9P6fjEnO2zvb2936g4XC7XG4rWm65P2iL8/f05kN8nBQUFQkqnGMYcGBjIys3N5dLxjY7ydDrE6urqsNLSUqmbmxuH1tOBkMzMTIHRaNxSqVTmS4soKyvjFRUViTw9PV2dTR901WAOh7M/MjKyeeHCbGpqEhcWFkY5Wl9aWtpUKBRaONziSbsii/Xm5OTk7EIdU6/X7zpaW1xc/Al5HxkfH9/e2dk5rqmpeUrE6+vr06ADzpEIlI5kMjFwPhh5PB5DJBKdK7KDg4Oj2tpaVUdHxw/0eWxszIjyj8Jvy4N60FdVVX2Grnt4dkaowYJESAG3yaLR09Oz5uvrexwbGxuAR2erpKTkI6RqxW5DM6RnLT09PQQV5vDwsDYlJWUU+I4EIDMhEQLAA6q0DA4OrqMCg/c/qL6+XtXY2Kgn4sGJuavRaFbFYrFPeXn5FIj6ReFa64KnIpJOpaMK39vbM9XV1X13lF9kc3Nz+xMTEwZo89s03A4ycRE1N/RjF/WPKgyfDRU39Gu7w1qYyNYAtwDB1yhgGPDBfgzU4bMi7xoEjAI6iWZRdGMGH80Cr2goRlP5W8B7qwBHfw1YO6kEH4yC8EnJ5QKbnuDFh17nr4BPRP9P/BFgAHo7ZNgI9EbHAAAAAElFTkSuQmCC";
				k.appendChild(a);
				a.style.Aga = 1E3;
				a.style.position = "absolute";
				a.style.bottom = "10px";
				a.style.right = "10px";
				a.onclick = function () {
					k.remove()
				}
			};
			(a = document.getElementById(document.ccConfig.GCa).parentNode) && a.appendChild(k)
		} else
			window.open(a)
	}
})();
R.fja = function () {
	return "undefined" === R.tI ? q : R.tI
};
R.Wb = function (a) {
	var c = this == R ? document : this;
	if (a = a instanceof HTMLElement ? a : c.querySelector(a))
		a.find = a.find || R.Wb, a.sM = a.sM || function (a) {
			return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
		},
	a.XT = a.XT || function (a) {
		this.sM(a) || (this.className && (this.className += " "), this.className += a);
		return this
	},
	a.Tca = a.Tca || function (a) {
		this.sM(a) && (this.className = this.className.replace(a, ""));
		return this
	},
	a.remove = a.remove || function () {
		this.parentNode && this.parentNode.removeChild(this);
		return this
	},
	a.tr = a.tr ||
	function (a) {
		a.appendChild(this);
		return this
	},
	a.rca = a.rca || function (a) {
		a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
		return this
	},
	a.xp = a.xp || function () {
		this.style[R.Wb.Xfa] = R.Wb.translate(this.position) + R.Wb.rotate(this.rotation) + R.Wb.scale(this.scale) + R.Wb.Kn(this.Kn);
		return this
	},
	a.position = a.position || {
		x : 0,
		y : 0
	},
	a.rotation = a.rotation || 0,
	a.scale = a.scale || {
		x : 1,
		y : 1
	},
	a.Kn = a.Kn || {
		x : 0,
		y : 0
	},
	a.Pz = function (a, c) {
		this.position.x = a;
		this.position.y = c;
		this.xp()
	},
	a.rotate = function (a) {
		this.rotation =
			a;
		this.xp();
		return this
	},
	a.em = function (a, c) {
		this.scale.x = a;
		this.scale.y = c;
		this.xp();
		return this
	},
	a.hY = function (a, c) {
		this.Kn.x = a;
		this.Kn.y = c;
		this.xp()
	};
	return a
};
switch (R.ua.type) {
case "firefox":
	R.Wb.gv = "Moz";
	R.Wb.Tu = m;
	break;
case "chrome":
case "safari":
	R.Wb.gv = "webkit";
	R.Wb.Tu = m;
	break;
case "opera":
	R.Wb.gv = "O";
	R.Wb.Tu = q;
	break;
case "ie":
	R.Wb.gv = "ms";
	R.Wb.Tu = q;
	break;
default:
	R.Wb.gv = "webkit",
	R.Wb.Tu = m
}
R.Wb.Xfa = R.Wb.gv + "Transform";
R.Wb.translate = R.Wb.Tu ? function (a) {
	return "translate3d(" + a.x + "px, " + a.y + "px, 0) "
}
 : function (a) {
	return "translate(" + a.x + "px, " + a.y + "px) "
};
R.Wb.rotate = R.Wb.Tu ? function (a) {
	return "rotateZ(" + a + "deg) "
}
 : function (a) {
	return "rotate(" + a + "deg) "
};
R.Wb.scale = function (a) {
	return "scale(" + a.x + ", " + a.y + ") "
};
R.Wb.Kn = function (a) {
	return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};
R.jm = function (a) {
	return R.Wb(document.createElement(a))
};
R.Wb.Dna = function (a) {
	var c = 0,
	d = 0;
	do
		c += a.offsetLeft, d += a.offsetTop;
	while (a = a.offsetParent);
	return {
		x : c,
		y : d
	}
};
R.Ia = {
	name : "Jacob__Codec"
};
R.fga = function () {
	return R.Ia.eb.vE.apply(R.Ia.eb, arguments)
};
R.gga = function () {
	var a = R.Ia.Bp.EU.apply(R.Ia.Bp, arguments);
	return R.Ia.eb.vE.apply(R.Ia.eb, [a])
};
R.QY = function (a, c) {
	c = c || 1;
	var d = this.gga(a),
	e = [],
	f,
	g,
	k;
	f = 0;
	for (k = d.length / c; f < k; f++) {
		e[f] = 0;
		for (g = c - 1; 0 <= g; --g)
			e[f] += d.charCodeAt(f * c + g) << 8 * g
	}
	return e
};
R.OCa = function (a, c) {
	c = c || 1;
	var d = this.fga(a),
	e = [],
	f,
	g,
	k;
	f = 0;
	for (k = d.length / c; f < k; f++) {
		e[f] = 0;
		for (g = c - 1; 0 <= g; --g)
			e[f] += d.charCodeAt(f * c + g) << 8 * g
	}
	return e
};
R.Bja = function (a) {
	a = a.split(",");
	var c = [],
	d;
	for (d = 0; d < a.length; d++)
		c.push(parseInt(a[d]));
	return c
};
R.Ia.Bp = {
	name : "Jacob__Codec__Base64"
};
R.Ia.Bp.vC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";
R.Ia.Bp.EU = function (a) {
	var c = [],
	d,
	e,
	f,
	g,
	k,
	l = 0;
	for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < a.length; )
		d = this.vC.indexOf(a.charAt(l++)), e = this.vC.indexOf(a.charAt(l++)), g = this.vC.indexOf(a.charAt(l++)), k = this.vC.indexOf(a.charAt(l++)), d = d << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | k, c.push(String.fromCharCode(d)), 64 != g && c.push(String.fromCharCode(e)), 64 != k && c.push(String.fromCharCode(f));
	return c = c.join("")
};
R.Ia.Bp.FU = function (a, c) {
	var d = this.EU(a),
	e = [],
	f,
	g,
	k;
	f = 0;
	for (k = d.length / c; f < k; f++) {
		e[f] = 0;
		for (g = c - 1; 0 <= g; --g)
			e[f] += d.charCodeAt(f * c + g) << 8 * g
	}
	return e
};
R.aga = function (a) {
	if (0 != a.length % 4)
		return p;
	for (var c = a.length / 4, d = window.dka ? new Uint32Array(c) : [], e = 0; e < c; e++) {
		var f = 4 * e;
		d[e] = a[f] + 256 * a[f + 1] + 65536 * a[f + 2] + 16777216 * a[f + 3]
	}
	return d
};
R.Ia.eb = function (a) {
	this.data = a;
	this.debug = q;
	this.qn = h;
	this.files = 0;
	this.hG = [];
	this.NL = Array(32768);
	this.zk = 0;
	this.dF = q;
	this.nU = 0;
	this.Rl = 1;
	this.yu = 0;
	this.dv = [];
	this.XU = h;
	this.gz = Array(R.Ia.eb.V0);
	this.Fr = Array(32);
	this.Qz = 0;
	this.vH = p;
	this.Kk = 0;
	this.Ju = Array(17);
	this.Ju[0] = 0;
	this.bV = this.aV = h
};
R.Ia.eb.vE = function (a) {
	return (new R.Ia.eb(a)).vE()[0][0]
};
R.Ia.eb.ZG = function () {
	this.RD = this.QD = 0;
	this.MM = p;
	this.caa = -1
};
R.Ia.eb.V0 = 288;
R.Ia.eb.PP = 256;
R.Ia.eb.KL = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145,
	81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47, 175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255];
R.Ia.eb.uU = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
R.Ia.eb.vU = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99];
R.Ia.eb.tU = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
R.Ia.eb.Cu = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
R.Ia.eb.border = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
R.Ia.eb.prototype.vE = function () {
	this.nz = [];
	ca(this);
	return this.hG
};
R.Ia.eb.prototype.Q = function () {
	this.yu += 8;
	return this.nU < this.data.length ? this.data.charCodeAt(this.nU++) : -1
};
function da(a) {
	var c;
	a.yu++;
	c = a.Rl & 1;
	a.Rl >>= 1;
	0 == a.Rl && (a.Rl = a.Q(), c = a.Rl & 1, a.Rl = a.Rl >> 1 | 128);
	return c
}
function X(a, c) {
	for (var d = 0, e = c; e--; )
		d = d << 1 | da(a);
	c && (d = R.Ia.eb.KL[d] >> 8 - c);
	return d
}
function ea(a, c) {
	a.NL[a.zk++] = c;
	a.nz.push(String.fromCharCode(c));
	32768 == a.zk && (a.zk = 0)
}
function fa(a) {
	for (; ; ) {
		if (a.Ju[a.Kk] >= a.bV)
			return -1;
		if (a.aV[a.Ju[a.Kk]] == a.Kk)
			return a.Ju[a.Kk]++;
		a.Ju[a.Kk]++
	}
}
function ga(a) {
	var c = a.vH[a.Qz],
	d;
	if (17 == a.Kk)
		return -1;
	a.Qz++;
	a.Kk++;
	d = fa(a);
	if (0 <= d)
		c.QD = d;
	else if (c.QD = 32768, ga(a))
		return -1;
	d = fa(a);
	if (0 <= d)
		c.RD = d, c.MM = p;
	else if (c.RD = 32768, c.MM = a.vH[a.Qz], c.caa = a.Qz, ga(a))
		return -1;
	a.Kk--;
	return 0
}
function ia(a, c, d, e) {
	a.vH = c;
	a.Qz = 0;
	a.aV = e;
	a.bV = d;
	for (c = 0; 17 > c; c++)
		a.Ju[c] = 0;
	a.Kk = 0;
	return ga(a) ? -1 : 0
}
function ma(a, c) {
	for (var d, e, f = 0, g = c[f]; ; )
		if (d = da(a)) {
			if (!(g.RD & 32768))
				return g.RD;
			g = g.MM;
			d = c.length;
			for (e = 0; e < d; e++)
				if (c[e] === g) {
					f = e;
					break
				}
		} else {
			if (!(g.QD & 32768))
				return g.QD;
			f++;
			g = c[f]
		}
	return -1
}
function na(a) {
	var c,
	d,
	e,
	f,
	g;
	do
		if (c = da(a), e = X(a, 2), 0 == e) {
			a.Rl = 1;
			e = a.Q();
			e |= a.Q() << 8;
			d = a.Q();
			d |= a.Q() << 8;
			for ((e^~d) & 65535 && document.write("BlockLen checksum mismatch\n"); e--; )
				d = a.Q(), ea(a, d)
		} else if (1 == e)
			for (; ; )
				if (e = R.Ia.eb.KL[X(a, 7)] >> 1, 23 < e ? (e = e << 1 | da(a), 199 < e ? (e -= 128, e = e << 1 | da(a)) : (e -= 48, 143 < e && (e += 136))) : e += 256, 256 > e)
					ea(a, e);
				else if (256 == e)
					break;
				else {
					var k;
					e -= 257;
					g = X(a, R.Ia.eb.vU[e]) + R.Ia.eb.uU[e];
					e = R.Ia.eb.KL[X(a, 5)] >> 3;
					8 < R.Ia.eb.Cu[e] ? (k = X(a, 8), k |= X(a, R.Ia.eb.Cu[e] - 8) << 8) : k = X(a, R.Ia.eb.Cu[e]);
					k += R.Ia.eb.tU[e];
					for (e = 0; e < g; e++)
						d = a.NL[a.zk - k & 32767], ea(a, d)
				}
		else if (2 == e) {
			var l = Array(320);
			d = 257 + X(a, 5);
			k = 1 + X(a, 5);
			f = 4 + X(a, 4);
			for (e = 0; 19 > e; e++)
				l[e] = 0;
			for (e = 0; e < f; e++)
				l[R.Ia.eb.border[e]] = X(a, 3);
			g = a.Fr.length;
			for (f = 0; f < g; f++)
				a.Fr[f] = new R.Ia.eb.ZG;
			if (ia(a, a.Fr, 19, l)) {
				a.zk = 0;
				return
			}
			g = d + k;
			f = 0;
			for (var n = -1; f < g; )
				if (n++, e = ma(a, a.Fr), 16 > e)
					l[f++] = e;
				else if (16 == e) {
					var r;
					e = 3 + X(a, 2);
					if (f + e > g) {
						a.zk = 0;
						return
					}
					for (r = f ? l[f - 1] : 0; e--; )
						l[f++] = r
				} else {
					e = 17 == e ? 3 + X(a, 3) : 11 + X(a, 7);
					if (f + e > g) {
						a.zk = 0;
						return
					}
					for (; e--; )
						l[f++] =
							0
				}
			g = a.gz.length;
			for (f = 0; f < g; f++)
				a.gz[f] = new R.Ia.eb.ZG;
			if (ia(a, a.gz, d, l)) {
				a.zk = 0;
				return
			}
			g = a.gz.length;
			for (f = 0; f < g; f++)
				a.Fr[f] = new R.Ia.eb.ZG;
			e = [];
			for (f = d; f < l.length; f++)
				e[f - d] = l[f];
			if (ia(a, a.Fr, k, e)) {
				a.zk = 0;
				return
			}
			for (; ; )
				if (e = ma(a, a.gz), 256 <= e) {
					e -= 256;
					if (0 == e)
						break;
					e--;
					g = X(a, R.Ia.eb.vU[e]) + R.Ia.eb.uU[e];
					e = ma(a, a.Fr);
					8 < R.Ia.eb.Cu[e] ? (k = X(a, 8), k |= X(a, R.Ia.eb.Cu[e] - 8) << 8) : k = X(a, R.Ia.eb.Cu[e]);
					for (k += R.Ia.eb.tU[e]; g--; )
						d = a.NL[a.zk - k & 32767], ea(a, d)
				} else
					ea(a, e)
		}
	while (!c);
	a.zk = 0;
	a.Rl = 1
}
function ca(a) {
	a.nz = [];
	a.dF = q;
	var c = [];
	c[0] = a.Q();
	c[1] = a.Q();
	120 == c[0] && 218 == c[1] && (na(a), a.hG[a.files] = [a.nz.join(""), "geonext.gxt"], a.files++);
	31 == c[0] && 139 == c[1] && (oa(a), a.hG[a.files] = [a.nz.join(""), "file"], a.files++);
	if (80 == c[0] && 75 == c[1] && (a.dF = m, c[2] = a.Q(), c[3] = a.Q(), 3 == c[2] && 4 == c[3])) {
		c[0] = a.Q();
		c[1] = a.Q();
		a.qn = a.Q();
		a.qn |= a.Q() << 8;
		c = a.Q();
		c |= a.Q() << 8;
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		var d = a.Q(),
		d = d | a.Q() << 8,
		e = a.Q(),
		e = e | a.Q() << 8,
		f = 0;
		for (a.dv = []; d--; ) {
			var g =
				a.Q();
			"/" == g | ":" == g ? f = 0 : f < R.Ia.eb.PP - 1 && (a.dv[f++] = String.fromCharCode(g))
		}
		a.XU || (a.XU = a.dv);
		for (var f = 0; f < e; )
			a.Q(), f++;
		8 == c && (na(a), a.hG[a.files] = [a.nz.join(""), a.dv.join("")], a.files++);
		oa(a)
	}
}
function oa(a) {
	var c = [],
	d;
	a.qn & 8 && (c[0] = a.Q(), c[1] = a.Q(), c[2] = a.Q(), c[3] = a.Q(), a.Q(), a.Q(), a.Q(), a.Q(), a.Q(), a.Q(), a.Q(), a.Q());
	a.dF && ca(a);
	c[0] = a.Q();
	if (8 == c[0]) {
		a.qn = a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		if (a.qn & 4) {
			c[0] = a.Q();
			c[2] = a.Q();
			a.Kk = c[0] + 256 * c[1];
			for (c = 0; c < a.Kk; c++)
				a.Q()
		}
		if (a.qn & 8) {
			c = 0;
			for (a.dv = []; d = a.Q(); ) {
				if ("7" == d || ":" == d)
					c = 0;
				c < R.Ia.eb.PP - 1 && (a.dv[c++] = d)
			}
		}
		if (a.qn & 16)
			for (; a.Q(); );
		a.qn & 2 && (a.Q(), a.Q());
		na(a);
		a.Q();
		a.Q();
		a.Q();
		a.Q();
		a.dF && ca(a)
	}
};
R.Vn = -1;
R.PI = Math.PI;
R.c0 = parseFloat("3.402823466e+38F");
R.y1 = R.PI / 180;
R.G_ = 180 / R.PI;
R.yR = 4294967295;
R.uja = function (a, c, d) {
	if ("object" == typeof d && "undefined" != typeof d.x && "undefined" != typeof d.y) {
		var e = d[a];
		d[a] = d[c];
		d[c] = e
	} else
		R.e(q, "CC_SWAP is being modified from original macro, please check usage")
};
R.zaa = function (a) {
	return a + 0.5 * (1 - a)
};
R.z1 = function () {
	return 2 * (Math.random() - 0.5)
};
R.Xia = function () {
	return Math.random()
};
R.Ud = function (a) {
	return a * R.y1
};
R.Xn = function (a) {
	return a * R.G_
};
R.Is = Number.MAX_VALUE - 1;
R.Ac = R.c1 ? 1 : 770;
R.zc = 771;
R.Ip = function (a) {
	a.Yb && (a.Yb.Sd(), a.Yb.hh())
};
R.Mha = x();
R.zha = x();
R.Qh = function () {
	R.Ci += 1
};
R.vA = 1.192092896E-7;
R.xa = R.$G ? function () {
	return R.o.d().bi
}
 : M(1);
R.j1 = function (a) {
	return R.b(a.x * R.xa(), a.y * R.xa())
};
R.KH = function (a) {
	return R.size(a.width * R.xa(), a.height * R.xa())
};
R.kw = function (a) {
	return R.size(a.width / R.xa(), a.height / R.xa())
};
R.Jp = function (a) {
	return R.b(a.x / R.xa(), a.y / R.xa())
};
R.dl = R.$G ? function (a) {
	return R.rect(a.x / R.xa(), a.y / R.xa(), a.width / R.xa(), a.height / R.xa())
}
 : u();
R.HA = R.$G ? function (a) {
	return R.rect(a.x * R.xa(), a.y * R.xa(), a.width * R.xa(), a.height * R.xa())
}
 : u();
if (!R.ua.tc)
	var pa = pa || {};
R.bA = function () {
	var a = R.u.getError();
	a && R.log("WebGL error " + a)
};
R.kja = 0;
R.jja = 1;
R.hja = 2;
R.ija = 3;
R.lja = 4;
R.mja = 5;
R.gja = 6;
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
	var qa = document.createElement("script");
	qa.type = "text/vbscript";
	qa.textContent = '\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr \x3d CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex \x3d LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last \x3d Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last \x3d ""\r\n   End If\r\nEnd Function\r\n';
	document.body.appendChild(qa);
	R.dS = function (a) {
		for (var c = {}, d = 0; 256 > d; d++)
			for (var e = 0; 256 > e; e++)
				c[String.fromCharCode(d + 256 * e)] = String.fromCharCode(d) + String.fromCharCode(e);
		d = IEBinaryToArray_ByteStr(a);
		a = IEBinaryToArray_ByteStr_Last(a);
		return d.replace(/[\s\S]/g, function (a) {
			return c[a]
		}) + a
	}
}
R.cc = R.D.extend({
		Jm : p,
		dr : p,
		B3 : p,
		tJ : p,
		bu : p,
		sk : p,
		Sw : "",
		ctor : function () {
			this.Jm = {};
			this.dr = {};
			this.sk = [];
			this.sk.push(this.Sw);
			this.bu = [];
			this.bu.push("")
		},
		Dya : function () {
			this.sk = []
		},
		oV : function (a) {
			a = this.Kd(a);
			return this.Jm.hasOwnProperty(a) ? this.Jm[a] : this.H4(a)
		},
		hC : function () {
			return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
		},
		bga : function (a) {
			this.Jm.hasOwnProperty(a) && delete this.Jm[a]
		},
		mca : function (a) {
			a = this.Kd(a);
			var c = this,
			d = this.hC();
			d.open("GET", a, m);
			/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (d.setRequestHeader("Accept-Charset", "x-user-defined"), d.onreadystatechange = function () {
				if (4 == d.readyState) {
					if (200 == d.status) {
						var e = R.dS(d.responseBody);
						e && (c.Jm[a] = c.oD(e))
					} else
						R.dc.d().mp(a);
					R.dc.d().Li()
				}
			}) : (d.overrideMimeType && d.overrideMimeType("text/plain; charset\x3dx-user-defined"), d.onreadystatechange = function () {
				if (4 == d.readyState) {
					if (200 == d.status) {
						var e = d.responseText;
						e && (c.Jm[a] = c.oD(e))
					} else
						R.dc.d().mp(a);
					R.dc.d().Li()
				}
			});
			d.send(p)
		},
		H4 : function (a) {
			var c = this.hC();
			c.open("GET", a, q);
			var d = p;
			if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
				c.setRequestHeader("Accept-Charset", "x-user-defined");
				c.send(p);
				if (200 != c.status)
					return p;
				if (c = R.dS(c.responseBody))
					d = this.oD(c), this.Jm[a] = d
			} else {
				c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dx-user-defined");
				c.send(p);
				if (200 != c.status)
					return p;
				d = this.oD(c.responseText);
				this.Jm[a] = d
			}
			return d
		},
		oD : function (a) {
			if (!a)
				return p;
			for (var c = new Uint8Array(a.length),
				d = 0; d < a.length; d++)
				c[d] = a.charCodeAt(d) & 255;
			return c
		},
		dga : function (a) {
			this.dr.hasOwnProperty(a) && delete this.dr[a]
		},
		qca : function (a) {
			a = this.Kd(a);
			var c = this,
			d = this.hC();
			d.open("GET", a, m);
			/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? d.setRequestHeader("Accept-Charset", "utf-8") : d.overrideMimeType && d.overrideMimeType("text/plain; charset\x3dutf-8");
			d.onreadystatechange = function () {
				if (4 == d.readyState) {
					if (200 == d.status) {
						var e = d.responseText;
						e && (c.dr[a] = e)
					} else
						R.dc.d().mp(a);
					R.dc.d().Li()
				}
			};
			d.send(p)
		},
		J4 : function (a) {
			var c = this.hC();
			c.open("GET", a, q);
			var d = p;
			/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? c.setRequestHeader("Accept-Charset", "utf-8") : c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dutf-8");
			c.send(p);
			if (200 != c.status)
				return p;
			(d = c.responseText) && (this.dr[a] = d);
			return d
		},
		rE : function (a) {
			return this.dr.hasOwnProperty(a) ? this.dr[a] : this.J4(a)
		},
		Lpa : x(),
		jza : x(),
		YW : m,
		hV : u(),
		Kd : function (a) {
			var c = q;
			a = this.a4(a);
			var d;
			if (a && 1 < a.length && 1 == a.indexOf(":"))
				return a;
			for (var e = 0; e < this.sk.length; e++) {
				for (var f = this.sk[e], g = 0; g < this.bu.length; g++)
					if (d = this.b4(a, this.bu[g], f)) {
						c = m;
						break
					}
				if (c)
					break
			}
			return c ? d : a
		},
		gxa : function (a) {
			var c = this.Kd(a);
			if (0 < c.length) {
				var c = R.Zi.d().parse(c),
				d = parseInt(c.metadata.version);
				1 != d ? R.log("cocos2d: ERROR: Invalid filenameLookup dictionary version: " + d + ". Filename: " + a) : this.jea(c.filenames)
			}
		},
		jea : z("tJ"),
		iE : function (a, c) {
			var d;
			if (a)
				return d = c.substring(0, c.lastIndexOf("/") + 1), d + a;
			d = c.substring(0, c.lastIndexOf("."));
			return d + ".png"
		},
		afa : z("bu"),
		msa : C("bu"),
		uBa : z("sk"),
		ksa : C("sk"),
		Xra : C("B3"),
		Uea : x(),
		Sma : function (a) {
			R.log("dictionaryWithContentsOfFile is deprecated. Use createDictionaryWithContentsOfFile instead");
			return this.i8(a)
		},
		i8 : function (a) {
			return R.Zi.d().parse(a)
		},
		Usa : function (a) {
			return this.rE(a)
		},
		Fu : function (a) {
			return R.Zi.d().parse(a)
		},
		Ota : M(""),
		eBa : function (a) {
			R.YW = a
		},
		Vua : function () {
			return R.YW
		},
		FK : "",
		Yra : C("FK"),
		pBa : z("FK"),
		a4 : function (a) {
			var c = p,
			c = this.tJ ? this.tJ[a] : p;
			!c || 0 === c.length ? c = a : R.log("FOUND NEW FILE NAME: " +
					c);
			return c
		},
		b4 : function (a, c, d) {
			var e;
			e = this.FK;
			a && 0 < a.length && (0 === a.indexOf("/") || 0 === a.indexOf("\\")) ? e = "" : 0 < e.length && "\\" != e[e.length - 1] && "/" != e[e.length - 1] && (e += "/");
			var f = a,
			g = "",
			k = a.lastIndexOf("/");
			-1 != k && (g = a.substr(0, k + 1), f = a.substr(k + 1));
			a = d;
			0 < a.length && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
			a = a + g + c;
			0 < a.length && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
			a += f;
			return e += a
		},
		Eka : x(),
		$ea : function (a) {
			var c = q;
			this.sk = [];
			for (var d = 0; d < a.length; d++) {
				var e = a[d],
				f;
				this.XV(e) || (f = this.Sw);
				e = f + e;
				0 < e.length && "/" != e[e.length - 1] && (e += "/");
				!c && e == this.Sw && (c = m);
				this.sk.push(e)
			}
			c || this.sk.push(this.Sw)
		},
		Kla : function (a) {
			var c;
			this.XV(a) || (c = this.Sw);
			a = c + a;
			0 < a.length && "/" != a[a.length - 1] && (a += "/");
			this.sk.push(a)
		},
		lsa : x(),
		XV : function (a) {
			return "/" == a[0]
		}
	});
R.DN = p;
R.cc.d = function () {
	R.DN == p && (R.DN = new R.cc);
	return R.DN
};
R.mc = function (a, c, d) {
	switch (arguments.length) {
	case 0:
		this.c = this.h = this.i = 0;
		break;
	case 1:
		a && a instanceof R.mc ? (this.i = 0 | a.i || 0, this.h = 0 | a.h || 0, this.c = 0 | a.c || 0) : this.c = this.h = this.i = 0;
		break;
	case 3:
		this.i = 0 | a || 0;
		this.h = 0 | c || 0;
		this.c = 0 | d || 0;
		break;
	default:
		b("unknown argument type")
	}
};
R.ce = function (a, c, d) {
	return new R.mc(a, c, d)
};
R.qua = function (a) {
	a = a || 0;
	var c = new R.mc;
	c.i = a & 255;
	c.h = a >> 8 & 255;
	c.c = a >> 16 & 255;
	return c
};
R.Gy = R.ce;
R.dma = function (a, c) {
	return a.i === c.i && a.h === c.h && a.c === c.c
};
Object.defineProperties(R, {
	Yf : {
		get : function () {
			return R.ce(255, 255, 255)
		}
	},
	mka : {
		get : function () {
			return R.ce(255, 255, 0)
		}
	},
	Sga : {
		get : function () {
			return R.ce(0, 0, 255)
		}
	},
	Uha : {
		get : function () {
			return R.ce(0, 255, 0)
		}
	},
	Zia : {
		get : function () {
			return R.ce(255, 0, 0)
		}
	},
	pia : {
		get : function () {
			return R.ce(255, 0, 255)
		}
	},
	Pga : {
		get : function () {
			return R.ce(0, 0, 0)
		}
	},
	Gia : {
		get : function () {
			return R.ce(255, 127, 0)
		}
	},
	aw : {
		get : function () {
			return R.ce(166, 166, 166)
		}
	}
});
R.Td = function () {
	return new R.mc(255, 255, 255)
};
R.dDa = function () {
	return new R.mc(255, 255, 0)
};
R.blue = function () {
	return new R.mc(0, 0, 255)
};
R.green = function () {
	return new R.mc(0, 255, 0)
};
R.red = function () {
	return new R.mc(255, 0, 0)
};
R.ixa = function () {
	return new R.mc(255, 0, 255)
};
R.O7 = function () {
	return new R.mc(0, 0, 0)
};
R.Vxa = function () {
	return new R.mc(255, 127, 0)
};
R.p$ = function () {
	return new R.mc(166, 166, 166)
};
R.Cb = function (a, c, d, e) {
	this.i = 0 | a;
	this.h = 0 | c;
	this.c = 0 | d;
	this.g = 0 | e
};
R.VD = function (a, c, d, e) {
	return new R.Cb(a, c, d, e)
};
R.QL = R.VD;
R.Uc = function (a, c, d, e) {
	this.i = a;
	this.h = c;
	this.c = d;
	this.g = e
};
R.Ak = function (a, c, d, e) {
	return new R.Uc(a, c, d, e)
};
R.UD = function (a) {
	return new R.Uc(a.i / 255, a.h / 255, a.c / 255, 1)
};
R.gma = function (a) {
	return new R.Uc(a.i / 255, a.h / 255, a.c / 255, a.g / 255)
};
R.ema = function (a) {
	return new R.Cb(0 | 255 * a.i, 0 | 255 * a.h, 0 | 255 * a.c, 0 | 255 * a.g)
};
R.fma = function (a, c) {
	return a.i == c.i && a.h == c.h && a.c == c.c && a.g == c.g
};
R.Ob = function (a, c) {
	this.x = a || 0;
	this.y = c || 0
};
R.nB = function (a, c) {
	return new R.Ob(a, c)
};
R.Pb = function (a, c, d) {
	this.x = a || 0;
	this.y = c || 0;
	this.f = d || 0
};
R.YCa = function (a, c, d) {
	return new R.Pb(a, c, d)
};
R.dd = function (a, c) {
	this.Ka = a || 0;
	this.ca = c || 0
};
R.ICa = function (a, c) {
	return new R.dd(a, c)
};
R.Wia = function (a, c, d) {
	this.pb = a || new R.Ob(0, 0);
	this.color = c || new R.Cb(0, 0, 0, 0);
	this.size = d || 0
};
R.FA = function (a, c, d, e) {
	this.N = a || new R.Ob(0, 0);
	this.M = c || new R.Ob(0, 0);
	this.J = d || new R.Ob(0, 0);
	this.O = e || new R.Ob(0, 0)
};
R.GA = function (a, c, d, e) {
	this.J = a || new R.Pb(0, 0, 0);
	this.O = c || new R.Pb(0, 0, 0);
	this.N = d || new R.Pb(0, 0, 0);
	this.M = e || new R.Pb(0, 0, 0)
};
R.k0 = function (a, c) {
	this.x = a;
	this.y = c
};
R.h = function (a, c) {
	return new R.k0(a, c)
};
R.oc = function (a, c, d) {
	this.l = a || new R.Ob(0, 0);
	this.v = c || new R.Cb(0, 0, 0, 0);
	this.s = d || new R.dd(0, 0)
};
R.jB = function () {
	this.l = new R.Ob(0, 0);
	this.v = new R.Uc(0, 0, 0, 0);
	this.s = new R.dd(0, 0)
};
R.Xc = function (a, c, d) {
	this.l = a || new R.Pb(0, 0, 0);
	this.v = c || new R.Cb(0, 0, 0, 0);
	this.s = d || new R.dd(0, 0)
};
R.md = function (a, c, d) {
	this.g = a || new R.oc;
	this.c = c || new R.oc;
	this.C = d || new R.oc
};
R.z2 = function () {
	var a = new R.oc(new R.Ob(0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)),
	c = new R.oc(new R.Ob(0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)),
	d = new R.oc(new R.Ob(0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)),
	e = new R.oc(new R.Ob(0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0));
	this.J = a || new R.oc;
	this.O = c || new R.oc;
	this.N = d || new R.oc;
	this.M = e || new R.oc
};
R.eka = function () {
	return new R.z2
};
R.ec = function (a, c, d, e) {
	this.N = a || new R.Xc;
	this.J = c || new R.Xc;
	this.M = d || new R.Xc;
	this.O = e || new R.Xc
};
R.kB = function () {
	return new R.ec(new R.Xc(new R.Pb(0, 0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)), new R.Xc(new R.Pb(0, 0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)), new R.Xc(new R.Pb(0, 0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)), new R.Xc(new R.Pb(0, 0, 0), new R.Cb(0, 0, 0, 255), new R.dd(0, 0)))
};
R.oI = function (a) {
	return !a ? R.kB() : new R.ec(new R.Xc(new R.Pb(a.N.l.x, a.N.l.y, a.N.l.f), new R.Cb(a.N.v.i, a.N.v.h, a.N.v.c, a.N.v.g), new R.dd(a.N.s.Ka, a.N.s.ca)), new R.Xc(new R.Pb(a.J.l.x, a.J.l.y, a.J.l.f), new R.Cb(a.J.v.i, a.J.v.h, a.J.v.c, a.J.v.g), new R.dd(a.J.s.Ka, a.J.s.ca)), new R.Xc(new R.Pb(a.M.l.x, a.M.l.y, a.M.l.f), new R.Cb(a.M.v.i, a.M.v.h, a.M.v.c, a.M.v.g), new R.dd(a.M.s.Ka, a.M.s.ca)), new R.Xc(new R.Pb(a.O.l.x, a.O.l.y, a.O.l.f), new R.Cb(a.O.v.i, a.O.v.h, a.O.v.c, a.O.v.g), new R.dd(a.O.s.Ka, a.O.s.ca)))
};
R.gka = function (a) {
	if (!a)
		return [];
	for (var c = [], d = 0; d < a.length; d++)
		c.push(R.oI(a[d]));
	return c
};
R.fka = function (a, c, d, e) {
	this.J = a || new R.jB;
	this.O = c || new R.jB;
	this.N = d || new R.jB;
	this.M = e || new R.jB
};
R.Pj = function (a, c) {
	this.src = a;
	this.da = c
};
R.Uga = function () {
	return new R.Pj(1, 0)
};
R.dp = function (a) {
	var c = a.i.toString(16),
	d = a.h.toString(16),
	e = a.c.toString(16);
	return "#" + (16 > a.i ? "0" + c : c) + (16 > a.h ? "0" + d : d) + (16 > a.c ? "0" + e : e)
};
R.ua.tc && (R.Cb = function (a, c, d, e, f, g) {
	this.hc = f || new ArrayBuffer(R.Cb.BYTES_PER_ELEMENT);
	this.Jb = g || 0;
	f = this.hc;
	g = this.Jb;
	var k = Uint8Array.BYTES_PER_ELEMENT;
	this.yK = new Uint8Array(f, g, 1);
	this.zJ = new Uint8Array(f, g + k, 1);
	this.FI = new Uint8Array(f, g + 2 * k, 1);
	this.vI = new Uint8Array(f, g + 3 * k, 1);
	this.yK[0] = a || 0;
	this.zJ[0] = c || 0;
	this.FI[0] = d || 0;
	this.vI[0] = e || 0
}, R.Cb.BYTES_PER_ELEMENT = 4, Object.defineProperties(R.Cb.prototype, {
		i : {
			get : function () {
				return this.yK[0]
			},
			set : function (a) {
				this.yK[0] = a
			},
			enumerable : m
		},
		h : {
			get : function () {
				return this.zJ[0]
			},
			set : function (a) {
				this.zJ[0] = a
			},
			enumerable : m
		},
		c : {
			get : function () {
				return this.FI[0]
			},
			set : function (a) {
				this.FI[0] = a
			},
			enumerable : m
		},
		g : {
			get : function () {
				return this.vI[0]
			},
			set : function (a) {
				this.vI[0] = a
			},
			enumerable : m
		}
	}), R.Uc = function (a, c, d, e, f, g) {
	this.hc = f || new ArrayBuffer(R.Uc.BYTES_PER_ELEMENT);
	this.Jb = g || 0;
	f = this.hc;
	g = this.Jb;
	var k = Float32Array.BYTES_PER_ELEMENT;
	this.xK = new Float32Array(f, g, 1);
	this.xK[0] = a || 0;
	this.yJ = new Float32Array(f, g + k, 1);
	this.yJ[0] = c || 0;
	this.EI = new Float32Array(f, g + 2 * k, 1);
	this.EI[0] =
		d || 0;
	this.uI = new Float32Array(f, g + 3 * k, 1);
	this.uI[0] = e || 0
}, R.Uc.BYTES_PER_ELEMENT = 16, Object.defineProperties(R.Uc.prototype, {
		i : {
			get : function () {
				return this.xK[0]
			},
			set : function (a) {
				this.xK[0] = a
			},
			enumerable : m
		},
		h : {
			get : function () {
				return this.yJ[0]
			},
			set : function (a) {
				this.yJ[0] = a
			},
			enumerable : m
		},
		c : {
			get : function () {
				return this.EI[0]
			},
			set : function (a) {
				this.EI[0] = a
			},
			enumerable : m
		},
		g : {
			get : function () {
				return this.uI[0]
			},
			set : function (a) {
				this.uI[0] = a
			},
			enumerable : m
		}
	}), R.Ob = function (a, c, d, e) {
	this.hc = d || new ArrayBuffer(R.Ob.BYTES_PER_ELEMENT);
	this.Jb = e || 0;
	this.or = new Float32Array(this.hc, this.Jb, 1);
	this.pr = new Float32Array(this.hc, this.Jb + 4, 1);
	this.or[0] = a || 0;
	this.pr[0] = c || 0
}, R.Ob.BYTES_PER_ELEMENT = 8, Object.defineProperties(R.Ob.prototype, {
		x : {
			get : function () {
				return this.or[0]
			},
			set : function (a) {
				this.or[0] = a
			},
			enumerable : m
		},
		y : {
			get : function () {
				return this.pr[0]
			},
			set : function (a) {
				this.pr[0] = a
			},
			enumerable : m
		}
	}), R.Pb = function (a, c, d, e, f) {
	this.hc = e || new ArrayBuffer(R.Pb.BYTES_PER_ELEMENT);
	this.Jb = f || 0;
	e = this.hc;
	f = this.Jb;
	this.or = new Float32Array(e,
			f, 1);
	this.or[0] = a || 0;
	this.pr = new Float32Array(e, f + Float32Array.BYTES_PER_ELEMENT, 1);
	this.pr[0] = c || 0;
	this.zL = new Float32Array(e, f + 2 * Float32Array.BYTES_PER_ELEMENT, 1);
	this.zL[0] = d || 0
}, R.Pb.BYTES_PER_ELEMENT = 12, Object.defineProperties(R.Pb.prototype, {
		x : {
			get : function () {
				return this.or[0]
			},
			set : function (a) {
				this.or[0] = a
			},
			enumerable : m
		},
		y : {
			get : function () {
				return this.pr[0]
			},
			set : function (a) {
				this.pr[0] = a
			},
			enumerable : m
		},
		f : {
			get : function () {
				return this.zL[0]
			},
			set : function (a) {
				this.zL[0] = a
			},
			enumerable : m
		}
	}), R.dd = function (a,
		c, d, e) {
	this.hc = d || new ArrayBuffer(R.dd.BYTES_PER_ELEMENT);
	this.Jb = e || 0;
	this.gL = new Float32Array(this.hc, this.Jb, 1);
	this.nL = new Float32Array(this.hc, this.Jb + 4, 1);
	this.gL[0] = a || 0;
	this.nL[0] = c || 0
}, R.dd.BYTES_PER_ELEMENT = 8, Object.defineProperties(R.dd.prototype, {
		Ka : {
			get : function () {
				return this.gL[0]
			},
			set : function (a) {
				this.gL[0] = a
			},
			enumerable : m
		},
		ca : {
			get : function () {
				return this.nL[0]
			},
			set : function (a) {
				this.nL[0] = a
			},
			enumerable : m
		}
	}), R.FA = function (a, c, d, e, f, g) {
	this.hc = f || new ArrayBuffer(R.FA.BYTES_PER_ELEMENT);
	this.Jb = g || 0;
	f = this.hc;
	g = R.Ob.BYTES_PER_ELEMENT;
	this.nu = a ? new R.Ob(a.x, a.y, f, 0) : new R.Ob(0, 0, f, 0);
	this.ru = c ? new R.Ob(c.x, c.y, f, g) : new R.Ob(0, 0, f, g);
	this.at = d ? new R.Ob(d.x, d.y, f, 2 * g) : new R.Ob(0, 0, f, 2 * g);
	this.et = e ? new R.Ob(e.x, e.y, f, 3 * g) : new R.Ob(0, 0, f, 3 * g)
}, R.FA.BYTES_PER_ELEMENT = 32, Object.defineProperties(R.FA.prototype, {
		N : {
			get : C("nu"),
			set : function (a) {
				this.nu.x = a.x;
				this.nu.y = a.y
			},
			enumerable : m
		},
		M : {
			get : C("ru"),
			set : function (a) {
				this.ru.x = a.x;
				this.ru.y = a.y
			},
			enumerable : m
		},
		J : {
			get : C("at"),
			set : function (a) {
				this.at.x =
					a.x;
				this.at.y = a.y
			},
			enumerable : m
		},
		O : {
			get : C("et"),
			set : function (a) {
				this.et.x = a.x;
				this.et.y = a.y
			},
			enumerable : m
		}
	}), R.Xc = function (a, c, d, e, f) {
	this.hc = e || new ArrayBuffer(R.Xc.BYTES_PER_ELEMENT);
	this.Jb = f || 0;
	e = this.hc;
	f = this.Jb;
	var g = R.Pb.BYTES_PER_ELEMENT;
	this.tb = a ? new R.Pb(a.x, a.y, a.f, e, f) : new R.Pb(0, 0, 0, e, f);
	this.Ow = c ? new R.Cb(c.i, c.h, c.c, c.g, e, f + g) : new R.Cb(0, 0, 0, 0, e, f + g);
	this.vi = d ? new R.dd(d.Ka, d.ca, e, f + g + R.Cb.BYTES_PER_ELEMENT) : new R.dd(0, 0, e, f + g + R.Cb.BYTES_PER_ELEMENT)
}, R.Xc.BYTES_PER_ELEMENT = 24, Object.defineProperties(R.Xc.prototype, {
		l : {
			get : C("tb"),
			set : function (a) {
				var c = this.tb;
				c.x = a.x;
				c.y = a.y;
				c.f = a.f
			},
			enumerable : m
		},
		v : {
			get : C("Ow"),
			set : function (a) {
				var c = this.Ow;
				c.i = a.i;
				c.h = a.h;
				c.c = a.c;
				c.g = a.g
			},
			enumerable : m
		},
		s : {
			get : C("vi"),
			set : function (a) {
				this.vi.Ka = a.Ka;
				this.vi.ca = a.ca
			},
			enumerable : m
		}
	}), R.ec = function (a, c, d, e, f, g) {
	this.hc = f || new ArrayBuffer(R.ec.BYTES_PER_ELEMENT);
	this.Jb = g || 0;
	f = this.hc;
	g = this.Jb;
	var k = R.Xc.BYTES_PER_ELEMENT;
	this.nu = a ? new R.Xc(a.l, a.v, a.s, f, g) : new R.Xc(p, p, p, f, g);
	this.at = c ? new R.Xc(c.l, c.v, c.s, f, g + k) : new R.Xc(p,
			p, p, f, g + k);
	this.ru = d ? new R.Xc(d.l, d.v, d.s, f, g + 2 * k) : new R.Xc(p, p, p, f, g + 2 * k);
	this.et = e ? new R.Xc(e.l, e.v, e.s, f, g + 3 * k) : new R.Xc(p, p, p, f, g + 3 * k)
}, R.ec.BYTES_PER_ELEMENT = 96, Object.defineProperties(R.ec.prototype, {
		N : {
			get : C("nu"),
			set : function (a) {
				var c = this.nu;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		},
		J : {
			get : C("at"),
			set : function (a) {
				var c = this.at;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		},
		M : {
			get : C("ru"),
			set : function (a) {
				var c = this.ru;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		},
		O : {
			get : C("et"),
			set : function (a) {
				var c = this.et;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		},
		JL : {
			get : C("hc"),
			enumerable : m
		}
	}), R.kB = function () {
	return new R.ec
}, R.oI = function (a) {
	if (!a)
		return R.kB();
	var c = a.N,
	d = a.J,
	e = a.M;
	a = a.O;
	return {
		N : {
			l : {
				x : c.l.x,
				y : c.l.y,
				f : c.l.f
			},
			v : {
				i : c.v.i,
				h : c.v.h,
				c : c.v.c,
				g : c.v.g
			},
			s : {
				Ka : c.s.Ka,
				ca : c.s.ca
			}
		},
		J : {
			l : {
				x : d.l.x,
				y : d.l.y,
				f : d.l.f
			},
			v : {
				i : d.v.i,
				h : d.v.h,
				c : d.v.c,
				g : d.v.g
			},
			s : {
				Ka : d.s.Ka,
				ca : d.s.ca
			}
		},
		M : {
			l : {
				x : e.l.x,
				y : e.l.y,
				f : e.l.f
			},
			v : {
				i : e.v.i,
				h : e.v.h,
				c : e.v.c,
				g : e.v.g
			},
			s : {
				Ka : e.s.Ka,
				ca : e.s.ca
			}
		},
		O : {
			l : {
				x : a.l.x,
				y : a.l.y,
				f : a.l.f
			},
			v : {
				i : a.v.i,
				h : a.v.h,
				c : a.v.c,
				g : a.v.g
			},
			s : {
				Ka : a.s.Ka,
				ca : a.s.ca
			}
		}
	}
}, R.oc = function (a, c, d, e, f) {
	this.hc = e || new ArrayBuffer(R.oc.BYTES_PER_ELEMENT);
	this.Jb = f || 0;
	e = this.hc;
	f = this.Jb;
	var g = R.Ob.BYTES_PER_ELEMENT;
	this.tb = a ? new R.Ob(a.x, a.y, e, f) : new R.Ob(0, 0, e, f);
	this.Ow = c ? new R.Cb(c.i, c.h, c.c, c.g, e, f + g) : new R.Cb(0, 0, 0, 0, e, f + g);
	this.vi = d ? new R.dd(d.Ka, d.ca, e, f + g + R.Cb.BYTES_PER_ELEMENT) : new R.dd(0, 0, e, f + g + R.Cb.BYTES_PER_ELEMENT)
}, R.oc.BYTES_PER_ELEMENT = 20, Object.defineProperties(R.oc.prototype, {
		l : {
			get : C("tb"),
			set : function (a) {
				this.tb.x =
					a.x;
				this.tb.y = a.y
			},
			enumerable : m
		},
		v : {
			get : C("Ow"),
			set : function (a) {
				var c = this.Ow;
				c.i = a.i;
				c.h = a.h;
				c.c = a.c;
				c.g = a.g
			},
			enumerable : m
		},
		s : {
			get : C("vi"),
			set : function (a) {
				this.vi.Ka = a.Ka;
				this.vi.ca = a.ca
			},
			enumerable : m
		}
	}), R.md = function (a, c, d, e, f) {
	this.hc = e || new ArrayBuffer(R.md.BYTES_PER_ELEMENT);
	this.Jb = f || 0;
	e = this.hc;
	f = this.Jb;
	var g = R.oc.BYTES_PER_ELEMENT;
	this.FR = a ? new R.oc(a.l, a.v, a.s, e, f) : new R.oc(p, p, p, e, f);
	this.OR = c ? new R.oc(c.l, c.v, c.s, e, f + g) : new R.oc(p, p, p, e, f + g);
	this.UR = d ? new R.oc(d.l, d.v, d.s, e, f + 2 * g) : new R.oc(p,
			p, p, e, f + 2 * g)
}, R.md.BYTES_PER_ELEMENT = 60, Object.defineProperties(R.md.prototype, {
		g : {
			get : C("FR"),
			set : function (a) {
				var c = this.FR;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		},
		c : {
			get : C("OR"),
			set : function (a) {
				var c = this.OR;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		},
		C : {
			get : C("UR"),
			set : function (a) {
				var c = this.UR;
				c.l = a.l;
				c.v = a.v;
				c.s = a.s
			},
			enumerable : m
		}
	}));
R.zma = function (a) {
	a = a.substr(1).split("");
	return new R.mc(parseInt("0x" + a[0] + a[1]), parseInt("0x" + a[2] + a[3]), parseInt("0x" + a[4] + a[5]))
};
R.Qp = 0;
R.Uj = 1;
R.LQ = 2;
R.Up = 0;
R.mB = 1;
R.pI = 2;
R.Vp = R.D.extend({
		Mt : p,
		uy : p,
		rI : 0,
		ctor : function () {
			this.Mt = {};
			this.uy = {};
			this.rI = 2 << (0 | 10 * Math.random())
		},
		H2 : function () {
			this.rI++;
			return "key_" + this.rI
		},
		Ok : function (a, c) {
			if (c != p) {
				var d = this.H2();
				this.Mt[d] = c;
				this.uy[d] = a
			}
		},
		Jj : function (a) {
			if (a == p)
				return p;
			var c = this.Mt,
			d;
			for (d in c)
				if (c[d] === a)
					return this.uy[d];
			return p
		},
		XCa : function (a) {
			return this.Jj(a)
		},
		vN : function (a) {
			if (a != p) {
				var c = this.Mt,
				d;
				for (d in c)
					if (c[d] === a) {
						delete this.uy[d];
						delete c[d];
						break
					}
			}
		},
		dza : function (a) {
			if (a != p)
				for (var c = 0; c < a.length; c++)
					this.vN(a[c])
		},
		vu : function () {
			var a = [],
			c = this.Mt,
			d;
			for (d in c)
				a.push(c[d]);
			return a
		},
		Uya : function () {
			this.Mt = {};
			this.uy = {}

		},
		count : function () {
			return this.vu().length
		}
	});
R.h0 = function () {
	this.Jr = "Arial";
	this.fontSize = 12;
	this.cV = R.Uj;
	this.dV = R.Up;
	this.eV = R.Yf;
	this.Oy = R.size(0, 0);
	this.gO = q;
	this.strokeColor = R.Yf;
	this.GY = 1;
	this.vY = q;
	this.wY = R.size(0, 0);
	this.shadowBlur = 0;
	this.xY = 1
};
R.n2 = -90;
R.o2 = 90;
R.p2 = 180;
R.aka = 0;
R.sZ = function () {
	this.timestamp = this.f = this.y = this.x = 0
};
R.tZ = R.D.extend({
		dh : function (a) {
			R.Uz.d().rr(a)
		},
		BF : function (a) {
			R.Uz.d().BF(a)
		}
	});
R.Uz = R.D.extend({
		vb : p,
		Wd : p,
		Xw : p,
		li : 0,
		ZJ : 1,
		m : function () {
			this.Wd = new R.sZ;
			this.Xw = window.DeviceMotionEvent || window.DeviceOrientationEvent;
			var a = navigator.userAgent;
			if (/Android/.test(a) || /Adr/.test(a) && "ucbrowser" == R.ua.type)
				this.ZJ = -1;
			"mqqbrowser" == R.ua.type && (this.Xw = window.DeviceOrientationEvent);
			return m
		},
		$b : C("vb"),
		rr : function (a) {
			this.vb = a;
			a = this.L8.bind(this);
			this.vb ? this.Xw == window.DeviceMotionEvent ? window.addEventListener("devicemotion", a, q) : window.addEventListener("deviceorientation", a, q) : this.Xw ==
			window.DeviceMotionEvent ? window.removeEventListener("devicemotion", a) : window.removeEventListener("deviceorientation", a)
		},
		BF : function (a) {
			this.li !== a && (this.li = a)
		},
		L8 : function (a) {
			if (this.vb && !((Date.now() - this.Wd.timestamp) / 1E3 < this.li)) {
				this.Xw == window.DeviceMotionEvent ? (a = a.accelerationIncludingGravity, this.Wd.x = 0.1 * this.ZJ * a.x, this.Wd.y = 0.1 * this.ZJ * a.y, this.Wd.f = 0.1 * a.f) : (this.Wd.x = 0.981 * (a.gamma / 90), this.Wd.y = 0.981 *  - (a.beta / 90), this.Wd.f = 0.981 * (a.alpha / 90));
				this.Wd.timestamp = Date.now();
				a = this.Wd.x;
				switch (window.orientation) {
				case R.o2:
					this.Wd.x = -this.Wd.y;
					this.Wd.y = a;
					break;
				case R.n2:
					this.Wd.x = this.Wd.y;
					this.Wd.y = -a;
					break;
				case R.p2:
					this.Wd.x = -this.Wd.x,
					this.Wd.y = -this.Wd.y
				}
				this.vb.Raa(this.Wd)
			}
		}
	});
R.Uz.d = function () {
	this.Da || (this.Da = new R.Uz, this.Da.m());
	return this.Da
};
R.el = {
	Oha : 0,
	pH : 1,
	JH : 2,
	m0 : 3,
	A2 : 4,
	AR : 5
};
R.iB = [];
R.sw = {};
R.uc = R.D.extend({
		vb : p,
		Rc : p,
		Ke : p,
		Tf : p,
		wL : "",
		ia : 1,
		ra : 1,
		ox : 0,
		SS : 5,
		Jo : R.el.AR,
		CS : q,
		vka : q,
		ula : p,
		wS : p,
		xS : p,
		L2 : p,
		lla : q,
		XI : p,
		Wka : p,
		vla : p,
		$B : p,
		gi : 1,
		ctor : function () {
			this.$B = R.qg.parentNode === document.body ? document.documentElement : R.qg.parentNode;
			this.wL = "Cocos2dHTML5";
			this.Ke = R.kd();
			this.Tf = R.Oc();
			this.vb = R.o.d().rf;
			this.XI = {
				left : 0,
				top : 0
			};
			this.Rc = R.kd();
			this.wS = R.canvas;
			this.xS = R.u;
			this.AS()
		},
		T$ : function () {
			this.oT();
			this.CS = m;
			var a = this.JR.bind(this);
			window.addEventListener("resize", a, q);
			R.ua.$l ? setTimeout(a,
				300) : this.JR()
		},
		oT : function () {
			R.ua.$l && (R.canvas.height = this.$B.clientHeight + 500, window.location.href = "#bottom")
		},
		AS : function () {
			this.Rc.width = this.$B.clientWidth;
			this.Rc.height = this.$B.clientHeight;
			navigator.userAgent.match(/iPhone/i) && (this.Rc.height += 60 * (this.Rc.width / 320))
		},
		JR : function () {
			this.oT();
			this.AS();
			R.canvas.width = this.Rc.width;
			R.canvas.height = this.Rc.height;
			"opengl" in T.qU || R.u.translate(0, R.canvas.height);
			var a = document.querySelector("#" + document.ccConfig.tag).parentNode;
			a && (a.style.width =
					R.canvas.width + "px", a.style.height = R.canvas.height + "px");
			if (a = document.body)
				a.style.padding = "0px", a.style.border = "0px", a.style.margin = "0px";
			this.HN()
		},
		rka : function () {
			"opengl" in T.qU || R.u.translate(0, R.canvas.height);
			this.Rc = R.size(R.canvas.width, R.canvas.height);
			this.HN()
		},
		end : x(),
		Sua : function () {
			return this.wS != p && this.xS != p
		},
		pAa : function (a) {
			this.gi = a;
			R.o.d().wv(R.o.d().Xm)
		},
		vCa : x(),
		tAa : x(),
		Yza : function (a, c) {
			this.XI = {
				left : a,
				top : c
			}
		},
		Noa : C("XI"),
		Tpa : C("Rc"),
		oAa : function (a, c) {
			this.Ke = this.Rc = R.size(a,
					c);
			R.o.d().wv(R.o.d().Xm)
		},
		kma : x(),
		Cza : z("L2"),
		oM : function () {
			return this.Jo === R.el.pH ? R.size(this.Rc.width / this.ia, this.Rc.height / this.ra) : this.Ke
		},
		FV : function () {
			return this.Jo === R.el.pH ? R.b((this.Ke.width - this.Rc.width / this.ia) / 2, (this.Ke.height - this.Rc.height / this.ra) / 2) : R.b(0, 0)
		},
		hma : M(m),
		HN : function (a, c, d) {
			R.e(d !== R.el.AR, "should set resolutionPolicy");
			if (!(0 == a || 0 == c))
				if (a != p && c != p && (this.Ke = R.size(a, c)), d != p && (this.Jo = d), this.CS) {
					this.ia = this.Rc.width / this.Ke.width;
					this.ra = this.Rc.height / this.Ke.height;
					this.Jo === R.el.pH && (this.ia = this.ra = Math.max(this.ia, this.ra));
					this.Jo === R.el.JH && (this.ia = this.ra = Math.min(this.ia, this.ra));
					this.Jo === R.el.m0 && (this.ia = this.ra, this.Ke.width = Math.ceil(this.Rc.width / this.ia));
					this.Jo == R.el.A2 && (this.ra = this.ia, this.Ke.height = Math.ceil(this.Rc.height / this.ra));
					a = this.Ke.width * this.ia;
					c = this.Ke.height * this.ra;
					this.Tf = R.rect((this.Rc.width - a) / 2, (this.Rc.height - c) / 2, a, c);
					d = R.o.d();
					d.$ = this.Ke;
					if (R.T === R.Ab) {
						var e = d = 0;
						if (this.Jo === R.el.JH) {
							d = (this.Rc.width - a) / 2;
							var e =
								 - (this.Rc.height - c) / 2,
							f = R.u;
							f.beginPath();
							f.rect(d, -c + e, a, c);
							f.clip();
							f.closePath()
						}
						R.u.translate(d, e);
						R.u.scale(this.ia, this.ra)
					} else
						d.qt(), d.MX();
					R.Vc.J5()
				} else
					this.T$()
		},
		fpa : C("Ke"),
		TBa : z("vb"),
		Cfa : function (a, c, d, e) {
			R.u.viewport(a * this.ia * this.gi + this.Tf.x * this.gi, c * this.ra * this.gi + this.Tf.y * this.gi, d * this.ia * this.gi, e * this.ra * this.gi)
		},
		PN : function (a, c, d, e) {
			R.u.scissor(a * this.ia * this.gi + this.Tf.x * this.gi, c * this.ra * this.gi + this.Tf.y * this.gi, d * this.ia * this.gi, e * this.ra * this.gi)
		},
		$$ : function () {
			var a =
				R.u;
			return a.isEnabled(a.SCISSOR_TEST)
		},
		W9 : function () {
			var a = R.u,
			c = this.ia,
			a = a.getParameter(a.SCISSOR_BOX);
			return R.rect((a[0] - this.Tf.x) / c, (a[1] - this.Tf.y) / this.ra, a[2] / c, a[3] / this.ra)
		},
		jCa : function (a) {
			a != p && 0 < a.length && (this.wL = a)
		},
		Jta : C("wL"),
		Kta : C("Tf"),
		U9 : C("ia"),
		V9 : C("ra"),
		gn : function (a, c, d) {
			return {
				x : a - d.left,
				y : d.top + d.height - c
			}
		},
		q$ : function (a, c, d, e) {
			for (var f = [], g = 0; g < a; ++g) {
				var k = c[g],
				l = d[g],
				n = e[g],
				r = 0;
				if (R.sw[k] == p)
					if (r = this.d4(), -1 == r)
						R.log("The touches is more than MAX_TOUCHES, nUnusedIndex \x3d " +
							r);
					else {
						var s = R.iB[r] = new R.Fg;
						s.YN(r, (l - this.Tf.x) / this.ia, (n - this.Tf.y) / this.ra);
						R.sw[k] = 0 | r;
						f.push(s)
					}
			}
			0 != f.length && this.vb.dG(f, p)
		},
		t$ : function (a, c, d, e) {
			for (var f = [], g = 0; g < a; ++g) {
				var k = d[g],
				l = e[g],
				n = R.sw[c[g]];
				if (n != p) {
					var r = R.iB[n];
					if (r)
						r.YN(n, (k - this.Tf.x) / this.ia, (l - this.Tf.y) / this.ra), f.push(r);
					else
						return
				}
			}
			0 != f.length && this.vb.eG(f, p)
		},
		s$ : function (a, c, d, e) {
			var f = [];
			this.CV(f, a, c, d, e);
			this.vb.Nz(f, p)
		},
		r$ : function (a, c, d, e) {
			var f = [];
			this.CV(f, a, c, d, e);
			this.vb.kO(f, p)
		},
		CV : function (a, c, d, e, f) {
			for (var g =
					0; g < c; ++g) {
				var k = d[g],
				l = e[g],
				n = f[g],
				r = R.sw[k];
				if (r != p) {
					var s = R.iB[r];
					if (s)
						s.YN(r, (l - this.Tf.x) / this.ia, (n - this.Tf.y) / this.ra), a.push(s), R.iB[r] = p, this.H5(r), delete R.sw[k];
					else
						break
				}
			}
		},
		d4 : function () {
			var a,
			c = this.ox;
			for (a = 0; a < this.SS; a++) {
				if (!(c & 1))
					return this.ox |= 1 << a, a;
				c >>= 1
			}
			return -1
		},
		H5 : function (a) {
			0 > a || a >= this.SS || (a = ~(1 << a), this.ox &= a)
		},
		dG : function (a) {
			for (var c = [], d = [], e = [], f = 0, g = 0; g < a.length; g++)
				c[f] = g, d[f] = a[g].Ic.x, e[f] = a[g].Ic.y, ++f;
			this.q$(f, c, d, e)
		},
		eG : function (a) {
			for (var c = [], d = [], e = [],
				f = 0, g = 0; g < a.length; g++)
				c[f] = g, d[f] = a[g].Ic.x, e[f] = a[g].Ic.y, ++f;
			this.t$(f, c, d, e)
		},
		Nz : function (a) {
			for (var c = [], d = [], e = [], f = 0, g = 0; g < a.length; g++)
				c[f] = g, d[f] = a[g].Ic.x, e[f] = a[g].Ic.y, ++f;
			this.s$(f, c, d, e)
		},
		kO : function (a) {
			for (var c = [], d = [], e = [], f = 0, g = 0; g < a.length; g++)
				c[f] = g, d[f] = a[g].Ic.x, e[f] = a[g].Ic.y, ++f;
			this.r$(f, c, d, e)
		}
	});
R.uc.d = function () {
	this.Da || (this.Da = new R.uc);
	return this.Da
};
R.d0 = 0;
R.wA = 1;
R.sP = 2;
R.Rha = 3;
R.e0 = 4;
R.SG = 5;
R.jZ = 51;
R.mZ = 19;
R.oZ = 18;
R.lZ = 50;
R.iZ = 34;
R.gZ = 35;
R.hZ = 33;
R.kZ = 49;
R.nZ = 17;
R.Tfa = function () {
	this.data = h;
	this.offset = this.size = 0
};
R.sya = function (a, c, d) {
	var e = new R.Tfa,
	e = R.uya(a);
	e.offset + d <= e.size ? (R.jxa(c, e.data + e.offset, d), e.offset += d) : R.tya(a, "pngReaderCallback failed")
};
R.E9 = function (a) {
	return 8 < a.length && 137 == a[0] && 80 == a[1] && 78 == a[2] && 71 == a[3] && 13 == a[4] && 10 == a[5] && 26 == a[6] && 10 == a[7] ? R.wA : 2 < a.length && (73 == a[0] && 73 == a[1] || 77 == a[0] && 77 == a[1] || 255 == a[0] && 216 == a[1]) ? R.sP : R.SG
};
R.yP = R.D.extend({
		cp : 0,
		Nm : 0,
		RR : 0,
		If : 0,
		yS : q,
		cT : q,
		G$ : function (a) {
			R.cc.d().Kpa(a, "rb");
			return q
		},
		jua : function (a, c) {
			return this.G$(a, c)
		},
		iua : M(q),
		getData : C("If"),
		Xoa : function () {
			return this.cp * this.Nm
		},
		bua : C("yS"),
		Wua : C("cT"),
		Su : C("cp"),
		Pu : C("Nm"),
		coa : C("RR"),
		kda : function () {
			R.log("doesn't support saveToFile on Cocos2d-Html5");
			return q
		},
		Lka : M(q),
		Mka : M(q),
		Oka : M(q),
		Nka : M(q),
		hla : M(q),
		gla : M(q),
		xd : M(q)
	});
/*
zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function () {
	function a(a) {
		b(a)
	}
	function c(a, c) {
		var d = a.split("."),
		e = E;
		!(d[0]in e) && e.execScript && e.execScript("var " + d[0]);
		for (var f; d.length && (f = d.shift()); )
			!d.length && c !== J ? e[f] = c : e = e[f] ? e[f] : e[f] = {}

	}
	function d(a) {
		if ("string" === typeof a) {
			a = a.split("");
			var c,
			d;
			c = 0;
			for (d = a.length; c < d; c++)
				a[c] = (a[c].charCodeAt(0) & 255) >>> 0
		}
		c = 1;
		d = 0;
		for (var e = a.length, f, g = 0; 0 < e; ) {
			f = 1024 < e ? 1024 : e;
			e -= f;
			do
				c += a[g++], d += c;
			while (--f);
			c %= 65521;
			d %= 65521
		}
		return (d << 16 | c) >>> 0
	}
	function e(c, d) {
		this.index = "number" === typeof d ? d : 0;
		this.Wy = 0;
		this.buffer = c instanceof(F ? Uint8Array : Array) ? c : new(F ? Uint8Array : Array)(32768);
		2 * this.buffer.length <= this.index && a(Error("invalid index"));
		this.buffer.length <= this.index && this.Dk()
	}
	function f(a) {
		this.buffer = new(F ? Uint16Array : Array)(2 * a);
		this.length = 0
	}
	function g(a) {
		var c = a.length,
		d = 0,
		e = Number.POSITIVE_INFINITY,
		f,
		g,
		k,
		l,
		n,
		r,
		s,
		t,
		v;
		for (t = 0; t < c; ++t)
			a[t] > d && (d = a[t]), a[t] < e && (e = a[t]);
		f = 1 << d;
		g = new(F ? Uint32Array : Array)(f);
		k = 1;
		l = 0;
		for (n = 2; k <= d; ) {
			for (t = 0; t < c; ++t)
				if (a[t] === k) {
					r = 0;
					s = l;
					for (v = 0; v < k; ++v)
						r =
							r << 1 | s & 1, s >>= 1;
					for (v = r; v < f; v += n)
						g[v] = k << 16 | t;
					++l
				}
			++k;
			l <<= 1;
			n <<= 1
		}
		return [g, d, e]
	}
	function k(a, c) {
		this.fe = Y;
		this.P = 0;
		this.input = a;
		this.c = 0;
		c && (c.xaa && (this.P = c.xaa), "number" === typeof c.XL && (this.fe = c.XL), c.jF && (this.g = F && c.jF instanceof Array ? new Uint8Array(c.jF) : c.jF), "number" === typeof c.rba && (this.c = c.rba));
		this.g || (this.g = new(F ? Uint8Array : Array)(32768))
	}
	function l(a, c) {
		this.length = a;
		this.i0 = c
	}
	function n() {
		var c = W;
		switch (K) {
		case 3 === c:
			return [257, c - 3, 0];
		case 4 === c:
			return [258, c - 4, 0];
		case 5 === c:
			return [259,
				c - 5, 0];
		case 6 === c:
			return [260, c - 6, 0];
		case 7 === c:
			return [261, c - 7, 0];
		case 8 === c:
			return [262, c - 8, 0];
		case 9 === c:
			return [263, c - 9, 0];
		case 10 === c:
			return [264, c - 10, 0];
		case 12 >= c:
			return [265, c - 11, 1];
		case 14 >= c:
			return [266, c - 13, 1];
		case 16 >= c:
			return [267, c - 15, 1];
		case 18 >= c:
			return [268, c - 17, 1];
		case 22 >= c:
			return [269, c - 19, 2];
		case 26 >= c:
			return [270, c - 23, 2];
		case 30 >= c:
			return [271, c - 27, 2];
		case 34 >= c:
			return [272, c - 31, 2];
		case 42 >= c:
			return [273, c - 35, 3];
		case 50 >= c:
			return [274, c - 43, 3];
		case 58 >= c:
			return [275, c - 51, 3];
		case 66 >= c:
			return [276,
				c - 59, 3];
		case 82 >= c:
			return [277, c - 67, 4];
		case 98 >= c:
			return [278, c - 83, 4];
		case 114 >= c:
			return [279, c - 99, 4];
		case 130 >= c:
			return [280, c - 115, 4];
		case 162 >= c:
			return [281, c - 131, 5];
		case 194 >= c:
			return [282, c - 163, 5];
		case 226 >= c:
			return [283, c - 195, 5];
		case 257 >= c:
			return [284, c - 227, 5];
		case 258 === c:
			return [285, c - 258, 0];
		default:
			a("invalid length: " + c)
		}
	}
	function r(c, d) {
		function e(c, d) {
			var f = c.i0,
			g = [],
			k = 0,
			l;
			l = aa[c.length];
			g[k++] = l & 65535;
			g[k++] = l >> 16 & 255;
			g[k++] = l >> 24;
			var n;
			switch (K) {
			case 1 === f:
				n = [0, f - 1, 0];
				break;
			case 2 === f:
				n = [1, f -
					2, 0];
				break;
			case 3 === f:
				n = [2, f - 3, 0];
				break;
			case 4 === f:
				n = [3, f - 4, 0];
				break;
			case 6 >= f:
				n = [4, f - 5, 1];
				break;
			case 8 >= f:
				n = [5, f - 7, 1];
				break;
			case 12 >= f:
				n = [6, f - 9, 2];
				break;
			case 16 >= f:
				n = [7, f - 13, 2];
				break;
			case 24 >= f:
				n = [8, f - 17, 3];
				break;
			case 32 >= f:
				n = [9, f - 25, 3];
				break;
			case 48 >= f:
				n = [10, f - 33, 4];
				break;
			case 64 >= f:
				n = [11, f - 49, 4];
				break;
			case 96 >= f:
				n = [12, f - 65, 5];
				break;
			case 128 >= f:
				n = [13, f - 97, 5];
				break;
			case 192 >= f:
				n = [14, f - 129, 6];
				break;
			case 256 >= f:
				n = [15, f - 193, 6];
				break;
			case 384 >= f:
				n = [16, f - 257, 7];
				break;
			case 512 >= f:
				n = [17, f - 385, 7];
				break;
			case 768 >= f:
				n = [18, f - 513, 8];
				break;
			case 1024 >= f:
				n = [19, f - 769, 8];
				break;
			case 1536 >= f:
				n = [20, f - 1025, 9];
				break;
			case 2048 >= f:
				n = [21, f - 1537, 9];
				break;
			case 3072 >= f:
				n = [22, f - 2049, 10];
				break;
			case 4096 >= f:
				n = [23, f - 3073, 10];
				break;
			case 6144 >= f:
				n = [24, f - 4097, 11];
				break;
			case 8192 >= f:
				n = [25, f - 6145, 11];
				break;
			case 12288 >= f:
				n = [26, f - 8193, 12];
				break;
			case 16384 >= f:
				n = [27, f - 12289, 12];
				break;
			case 24576 >= f:
				n = [28, f - 16385, 13];
				break;
			case 32768 >= f:
				n = [29, f - 24577, 13];
				break;
			default:
				a("invalid distance")
			}
			l = n;
			g[k++] = l[0];
			g[k++] = l[1];
			g[k++] = l[2];
			f = 0;
			for (k = g.length; f < k; ++f)
				v[w++] = g[f];
			A[g[0]]++;
			B[g[3]]++;
			y = c.length + d - 1;
			t = p
		}
		var f,
		g,
		k,
		n,
		r,
		s = {},
		t,
		v = F ? new Uint16Array(2 * d.length) : [],
		w = 0,
		y = 0,
		A = new(F ? Uint32Array : Array)(286),
		B = new(F ? Uint32Array : Array)(30),
		D = c.P,
		G;
		if (!F) {
			for (k = 0; 285 >= k; )
				A[k++] = 0;
			for (k = 0; 29 >= k; )
				B[k++] = 0
		}
		A[256] = 1;
		f = 0;
		for (g = d.length; f < g; ++f) {
			k = r = 0;
			for (n = 3; k < n && f + k !== g; ++k)
				r = r << 8 | d[f + k];
			s[r] === J && (s[r] = []);
			k = s[r];
			if (!(0 < y--)) {
				for (; 0 < k.length && 32768 < f - k[0]; )
					k.shift();
				if (f + 3 >= g) {
					t && e(t, -1);
					k = 0;
					for (n = g - f; k < n; ++k)
						G = d[f + k], v[w++] = G, ++A[G];
					break
				}
				if (0 < k.length) {
					r = n = J;
					var H = 0,
					I = J,
					E = J,
					L = I = J,
					O = d.length,
					E = 0,
					L = k.length;
					a : for (; E < L; E++) {
						n = k[L - E - 1];
						I = 3;
						if (3 < H) {
							for (I = H; 3 < I; I--)
								if (d[n + I - 1] !== d[f + I - 1])
									continue a;
							I = H
						}
						for (; 258 > I && f + I < O && d[n + I] === d[f + I]; )
							++I;
						I > H && (r = n, H = I);
						if (258 === I)
							break
					}
					n = new l(H, f - r);
					t ? t.length < n.length ? (G = d[f - 1], v[w++] = G, ++A[G], e(n, 0)) : e(t, -1) : n.length < D ? t = n : e(n, 0)
				} else
					t ? e(t, -1) : (G = d[f], v[w++] = G, ++A[G])
			}
			k.push(f)
		}
		v[w++] = 256;
		A[256]++;
		c.E0 = A;
		c.w0 = B;
		return F ? v.subarray(0, w) : v
	}
	function s(a, c) {
		function d(a) {
			var c = v[a][w[a]];
			c ===
			s ? (d(a + 1), d(a + 1)) : --t[c];
			++w[a]
		}
		var e = a.length,
		g = new f(572),
		k = new(F ? Uint8Array : Array)(e),
		l,
		n,
		r;
		if (!F)
			for (n = 0; n < e; n++)
				k[n] = 0;
		for (n = 0; n < e; ++n)
			0 < a[n] && g.push(n, a[n]);
		e = Array(g.length / 2);
		l = new(F ? Uint32Array : Array)(g.length / 2);
		if (1 === e.length)
			return k[g.pop().index] = 1, k;
		n = 0;
		for (r = g.length / 2; n < r; ++n)
			e[n] = g.pop(), l[n] = e[n].value;
		var s = l.length;
		n = new(F ? Uint16Array : Array)(c);
		var g = new(F ? Uint8Array : Array)(c),
		t = new(F ? Uint8Array : Array)(s);
		r = Array(c);
		var v = Array(c),
		w = Array(c),
		y = (1 << c) - s,
		A = 1 << c - 1,
		B,
		D,
		G;
		n[c -
			1] = s;
		for (B = 0; B < c; ++B)
			y < A ? g[B] = 0 : (g[B] = 1, y -= A), y <<= 1, n[c - 2 - B] = (n[c - 1 - B] / 2 | 0) + s;
		n[0] = g[0];
		r[0] = Array(n[0]);
		v[0] = Array(n[0]);
		for (B = 1; B < c; ++B)
			n[B] > 2 * n[B - 1] + g[B] && (n[B] = 2 * n[B - 1] + g[B]), r[B] = Array(n[B]), v[B] = Array(n[B]);
		for (y = 0; y < s; ++y)
			t[y] = c;
		for (A = 0; A < n[c - 1]; ++A)
			r[c - 1][A] = l[A], v[c - 1][A] = A;
		for (y = 0; y < c; ++y)
			w[y] = 0;
		1 === g[c - 1] && (--t[0], ++w[c - 1]);
		for (B = c - 2; 0 <= B; --B) {
			D = y = 0;
			G = w[B + 1];
			for (A = 0; A < n[B]; A++)
				D = r[B + 1][G] + r[B + 1][G + 1], D > l[y] ? (r[B][A] = D, v[B][A] = s, G += 2) : (r[B][A] = l[y], v[B][A] = y, ++y);
			w[B] = 0;
			1 === g[B] && d(B)
		}
		l =
			t;
		n = 0;
		for (r = e.length; n < r; ++n)
			k[e[n].index] = l[n];
		return k
	}
	function t(c) {
		var d = new(F ? Uint16Array : Array)(c.length),
		e = [],
		f = [],
		g = 0,
		k,
		l,
		n;
		k = 0;
		for (l = c.length; k < l; k++)
			e[c[k]] = (e[c[k]] | 0) + 1;
		k = 1;
		for (l = 16; k <= l; k++)
			f[k] = g, g += e[k] | 0, g > 1 << k && a("overcommitted"), g <<= 1;
		65536 > g && a("undercommitted");
		k = 0;
		for (l = c.length; k < l; k++) {
			g = f[c[k]];
			f[c[k]] += 1;
			e = d[k] = 0;
			for (n = c[k]; e < n; e++)
				d[k] = d[k] << 1 | g & 1, g >>>= 1
		}
		return d
	}
	function v(a, c) {
		this.input = a;
		this.g = new(F ? Uint8Array : Array)(32768);
		this.fe = L.ME;
		var d = {},
		e;
		if ((c || !(c = {})) &&
			"number" === typeof c.XL)
			this.fe = c.XL;
		for (e in c)
			d[e] = c[e];
		d.jF = this.g;
		this.f = new k(this.input, d)
	}
	function w(c, d) {
		this.NE = [];
		this.$E = 32768;
		this.Bj = this.h = this.C = this.sF = 0;
		this.input = F ? new Uint8Array(c) : c;
		this.Qi = q;
		this.aF = ja;
		this.yO = q;
		if (d || !(d = {}))
			d.index && (this.C = d.index), d.OL && (this.$E = d.OL), d.PL && (this.aF = d.PL), d.em && (this.yO = d.em);
		switch (this.aF) {
		case ua:
			this.c = 32768;
			this.g = new(F ? Uint8Array : Array)(32768 + this.$E + 258);
			break;
		case ja:
			this.c = 0;
			this.g = new(F ? Uint8Array : Array)(this.$E);
			this.Dk = this.v0;
			this.iO = this.l0;
			this.iF = this.r0;
			break;
		default:
			a(Error("invalid inflate mode"))
		}
	}
	function y(c, d) {
		for (var e = c.h, f = c.Bj, g = c.input, k = c.C, l; f < d; )
			l = g[k++], l === J && a(Error("input buffer is broken")), e |= l << f, f += 8;
		c.h = e >>> d;
		c.Bj = f - d;
		c.C = k;
		return e & (1 << d) - 1
	}
	function A(c, d) {
		for (var e = c.h, f = c.Bj, g = c.input, k = c.C, l = d[0], n = d[1], r; f < n; )
			r = g[k++], r === J && a(Error("input buffer is broken")), e |= r << f, f += 8;
		g = l[e & (1 << n) - 1];
		l = g >>> 16;
		c.h = e >> l;
		c.Bj = f - l;
		c.C = k;
		return g & 65535
	}
	function D(a) {
		function c(a, d, e) {
			var f,
			g,
			k,
			l;
			for (l = 0; l <
				a; )
				switch (f = A(this, d), f) {
				case 16:
					for (k = 3 + y(this, 2); k--; )
						e[l++] = g;
					break;
				case 17:
					for (k = 3 + y(this, 3); k--; )
						e[l++] = 0;
					g = 0;
					break;
				case 18:
					for (k = 11 + y(this, 7); k--; )
						e[l++] = 0;
					g = 0;
					break;
				default:
					g = e[l++] = f
				}
			return e
		}
		var d = y(a, 5) + 257,
		e = y(a, 5) + 1,
		f = y(a, 4) + 4,
		k = new(F ? Uint8Array : Array)(Da.length),
		l;
		for (l = 0; l < f; ++l)
			k[Da[l]] = y(a, 3);
		f = g(k);
		k = new(F ? Uint8Array : Array)(d);
		l = new(F ? Uint8Array : Array)(e);
		a.iF(g(c.call(a, d, f, k)), g(c.call(a, e, f, l)))
	}
	function H(c, d) {
		var e,
		f;
		this.input = c;
		this.C = 0;
		if (d || !(d = {}))
			d.index && (this.C = d.index),
			d.$Y && (this.W0 = d.$Y);
		e = c[this.C++];
		f = c[this.C++];
		switch (e & 15) {
		case ha:
			this.method = ha;
			break;
		default:
			a(Error("unsupported compression method"))
		}
		0 !== ((e << 8) + f) % 31 && a(Error("invalid fcheck flag:" + ((e << 8) + f) % 31));
		f & 32 && a(Error("fdict flag is not supported"));
		this.uO = new w(c, {
				index : this.C,
				OL : d.OL,
				PL : d.PL,
				em : d.em
			})
	}
	var J = h,
	K = m,
	E = this,
	F = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array;
	e.prototype.Dk = function () {
		var a = this.buffer,
		c,
		d = a.length,
		e = new(F ? Uint8Array :
				Array)(d << 1);
		if (F)
			e.set(a);
		else
			for (c = 0; c < d; ++c)
				e[c] = a[c];
		return this.buffer = e
	};
	e.prototype.F = function (a, c, d) {
		var e = this.buffer,
		f = this.index,
		g = this.Wy,
		k = e[f];
		d && 1 < c && (a = 8 < c ? (N[a & 255] << 24 | N[a >>> 8 & 255] << 16 | N[a >>> 16 & 255] << 8 | N[a >>> 24 & 255]) >> 32 - c : N[a] >> 8 - c);
		if (8 > c + g)
			k = k << c | a, g += c;
		else
			for (d = 0; d < c; ++d)
				k = k << 1 | a >> c - d - 1 & 1, 8 === ++g && (g = 0, e[f++] = N[k], k = 0, f === e.length && (e = this.Dk()));
		e[f] = k;
		this.buffer = e;
		this.Wy = g;
		this.index = f
	};
	e.prototype.finish = function () {
		var a = this.buffer,
		c = this.index,
		d;
		0 < this.Wy && (a[c] <<=
			8 - this.Wy, a[c] = N[a[c]], c++);
		F ? d = a.subarray(0, c) : (a.length = c, d = a);
		return d
	};
	var G = new(F ? Uint8Array : Array)(256),
	B;
	for (B = 0; 256 > B; ++B) {
		for (var I = B, O = I, P = 7, I = I >>> 1; I; I >>>= 1)
			O <<= 1, O |= I & 1, --P;
		G[B] = (O << P & 255) >>> 0
	}
	var N = G,
	G = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636,
		335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374,
		3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776,
		2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
		2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567,
		2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
	F && new Uint32Array(G);
	f.prototype.getParent = function (a) {
		return 2 * ((a - 2) /
			4 | 0)
	};
	f.prototype.push = function (a, c) {
		var d,
		e,
		f = this.buffer,
		g;
		d = this.length;
		f[this.length++] = c;
		for (f[this.length++] = a; 0 < d; )
			if (e = this.getParent(d), f[d] > f[e])
				g = f[d], f[d] = f[e], f[e] = g, g = f[d + 1], f[d + 1] = f[e + 1], f[e + 1] = g, d = e;
			else
				break;
		return this.length
	};
	f.prototype.pop = function () {
		var a,
		c,
		d = this.buffer,
		e,
		f,
		g;
		c = d[0];
		a = d[1];
		this.length -= 2;
		d[0] = d[this.length];
		d[1] = d[this.length + 1];
		for (g = 0; ; ) {
			f = 2 * g + 2;
			if (f >= this.length)
				break;
			f + 2 < this.length && d[f + 2] > d[f] && (f += 2);
			if (d[f] > d[g])
				e = d[g], d[g] = d[f], d[f] = e, e = d[g + 1], d[g +
					1] = d[f + 1], d[f + 1] = e;
			else
				break;
			g = f
		}
		return {
			index : a,
			value : c,
			length : this.length
		}
	};
	var Y = 2,
	G = {
		NONE : 0,
		i : 1,
		ME : Y,
		zia : 3
	},
	U = [];
	for (B = 0; 288 > B; B++)
		switch (K) {
		case 143 >= B:
			U.push([B + 48, 8]);
			break;
		case 255 >= B:
			U.push([B - 144 + 400, 9]);
			break;
		case 279 >= B:
			U.push([B - 256 + 0, 7]);
			break;
		case 287 >= B:
			U.push([B - 280 + 192, 8]);
			break;
		default:
			a("invalid literal: " + B)
		}
	k.prototype.cv = function () {
		var c,
		d,
		f,
		g,
		k = this.input;
		switch (this.fe) {
		case 0:
			f = 0;
			for (g = k.length; f < g; ) {
				d = F ? k.subarray(f, f + 65535) : k.slice(f, f + 65535);
				f += d.length;
				var l = f === g,
				n =
					J,
				v = n = J,
				v = n = J,
				w = this.g,
				y = this.c;
				if (F) {
					for (w = new Uint8Array(this.g.buffer); w.length <= y + d.length + 5; )
						w = new Uint8Array(w.length << 1);
					w.set(this.g)
				}
				n = l ? 1 : 0;
				w[y++] = n | 0;
				n = d.length;
				v = ~n + 65536 & 65535;
				w[y++] = n & 255;
				w[y++] = n >>> 8 & 255;
				w[y++] = v & 255;
				w[y++] = v >>> 8 & 255;
				if (F)
					w.set(d, y), y += d.length, w = w.subarray(0, y);
				else {
					n = 0;
					for (v = d.length; n < v; ++n)
						w[y++] = d[n];
					w.length = y
				}
				this.c = y;
				this.g = w
			}
			break;
		case 1:
			f = new e(new Uint8Array(this.g.buffer), this.c);
			f.F(1, 1, K);
			f.F(1, 2, K);
			k = r(this, k);
			d = 0;
			for (l = k.length; d < l; d++)
				if (g = k[d], e.prototype.F.apply(f,
						U[g]), 256 < g)
					f.F(k[++d], k[++d], K), f.F(k[++d], 5), f.F(k[++d], k[++d], K);
				else if (256 === g)
					break;
			this.g = f.finish();
			this.c = this.g.length;
			break;
		case Y:
			g = new e(new Uint8Array(this.g), this.c);
			var A,
			B,
			D,
			G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
			I,
			H,
			n = Array(19),
			E,
			w = Y;
			g.F(1, 1, K);
			g.F(w, 2, K);
			k = r(this, k);
			v = s(this.E0, 15);
			I = t(v);
			w = s(this.w0, 7);
			y = t(w);
			for (A = 286; 257 < A && 0 === v[A - 1]; A--);
			for (B = 30; 1 < B && 0 === w[B - 1]; B--);
			var L = A,
			O = B;
			c = new(F ? Uint32Array : Array)(L + O);
			var N = new(F ? Uint32Array : Array)(316),
			P,
			V;
			H = new(F ?
					Uint8Array : Array)(19);
			for (E = D = 0; E < L; E++)
				c[D++] = v[E];
			for (E = 0; E < O; E++)
				c[D++] = w[E];
			if (!F) {
				E = 0;
				for (O = H.length; E < O; ++E)
					H[E] = 0
			}
			E = P = 0;
			for (O = c.length; E < O; E += D) {
				for (D = 1; E + D < O && c[E + D] === c[E]; ++D);
				L = D;
				if (0 === c[E])
					if (3 > L)
						for (; 0 < L--; )
							N[P++] = 0, H[0]++;
					else
						for (; 0 < L; )
							V = 138 > L ? L : 138, V > L - 3 && V < L && (V = L - 3), 10 >= V ? (N[P++] = 17, N[P++] = V - 3, H[17]++) : (N[P++] = 18, N[P++] = V - 11, H[18]++), L -= V;
				else if (N[P++] = c[E], H[c[E]]++, L--, 3 > L)
					for (; 0 < L--; )
						N[P++] = c[E], H[c[E]]++;
				else
					for (; 0 < L; )
						V = 6 > L ? L : 6, V > L - 3 && V < L && (V = L - 3), N[P++] = 16, N[P++] = V - 3, H[16]++,
						L -= V
			}
			c = F ? N.subarray(0, P) : N.slice(0, P);
			H = s(H, 7);
			for (E = 0; 19 > E; E++)
				n[E] = H[G[E]];
			for (D = 19; 4 < D && 0 === n[D - 1]; D--);
			G = t(H);
			g.F(A - 257, 5, K);
			g.F(B - 1, 5, K);
			g.F(D - 4, 4, K);
			for (E = 0; E < D; E++)
				g.F(n[E], 3, K);
			E = 0;
			for (n = c.length; E < n; E++)
				if (d = c[E], g.F(G[d], H[d], K), 16 <= d) {
					E++;
					switch (d) {
					case 16:
						l = 2;
						break;
					case 17:
						l = 3;
						break;
					case 18:
						l = 7;
						break;
					default:
						a("invalid code: " + d)
					}
					g.F(c[E], l, K)
				}
			l = [I, v];
			y = [y, w];
			d = l[0];
			l = l[1];
			w = y[0];
			I = y[1];
			y = 0;
			for (n = k.length; y < n; ++y)
				if (f = k[y], g.F(d[f], l[f], K), 256 < f)
					g.F(k[++y], k[++y], K), v = k[++y], g.F(w[v],
						I[v], K), g.F(k[++y], k[++y], K);
				else if (256 === f)
					break;
			this.g = g.finish();
			this.c = this.g.length;
			break;
		default:
			a("invalid compression type")
		}
		return this.g
	};
	B = [];
	var W;
	for (W = 3; 258 >= W; W++)
		I = n(), B[W] = I[2] << 24 | I[1] << 16 | I[0];
	var aa = F ? new Uint32Array(B) : B,
	L = G;
	v.prototype.cv = function () {
		var c,
		e,
		f,
		g,
		k = 0;
		g = this.g;
		c = ha;
		switch (c) {
		case ha:
			e = Math.LOG2E * Math.log(32768) - 8;
			break;
		default:
			a(Error("invalid compression method"))
		}
		e = e << 4 | c;
		g[k++] = e;
		switch (c) {
		case ha:
			switch (this.fe) {
			case L.NONE:
				f = 0;
				break;
			case L.i:
				f = 1;
				break;
			case L.ME:
				f =
					2;
				break;
			default:
				a(Error("unsupported compression type"))
			}
			break;
		default:
			a(Error("invalid compression method"))
		}
		c = f << 6 | 0;
		g[k++] = c | 31 - (256 * e + c) % 31;
		c = d(this.input);
		this.f.c = k;
		g = this.f.cv();
		k = g.length;
		F && (g = new Uint8Array(g.buffer), g.length <= k + 4 && (this.g = new Uint8Array(g.length + 4), this.g.set(g), g = this.g), g = g.subarray(0, k + 4));
		g[k++] = c >> 24 & 255;
		g[k++] = c >> 16 & 255;
		g[k++] = c >> 8 & 255;
		g[k++] = c & 255;
		return g
	};
	c("Zlib.Deflate", v);
	c("Zlib.Deflate.compress", function (a, c) {
		return (new v(a, c)).cv()
	});
	c("Zlib.Deflate.CompressionType",
		L);
	c("Zlib.Deflate.CompressionType.NONE", L.NONE);
	c("Zlib.Deflate.CompressionType.FIXED", L.i);
	c("Zlib.Deflate.CompressionType.DYNAMIC", L.ME);
	var ua = 0,
	ja = 1,
	G = {
		F_ : ua,
		GZ : ja
	};
	w.prototype.b = function () {
		for (; !this.Qi; ) {
			var c = y(this, 3);
			c & 1 && (this.Qi = K);
			c >>>= 1;
			switch (c) {
			case 0:
				var c = this.input,
				d = this.C,
				e = this.g,
				f = this.c,
				g = J,
				k = J,
				l = J,
				n = e.length,
				g = J;
				this.Bj = this.h = 0;
				g = c[d++];
				g === J && a(Error("invalid uncompressed block header: LEN (first byte)"));
				k = g;
				g = c[d++];
				g === J && a(Error("invalid uncompressed block header: LEN (second byte)"));
				k |= g << 8;
				g = c[d++];
				g === J && a(Error("invalid uncompressed block header: NLEN (first byte)"));
				l = g;
				g = c[d++];
				g === J && a(Error("invalid uncompressed block header: NLEN (second byte)"));
				l |= g << 8;
				k === ~l && a(Error("invalid uncompressed block header: length verify"));
				d + k > c.length && a(Error("input buffer is broken"));
				switch (this.aF) {
				case ua:
					for (; f + k > e.length; ) {
						g = n - f;
						k -= g;
						if (F)
							e.set(c.subarray(d, d + g), f), f += g, d += g;
						else
							for (; g--; )
								e[f++] = c[d++];
						this.c = f;
						e = this.Dk();
						f = this.c
					}
					break;
				case ja:
					for (; f + k > e.length; )
						e = this.Dk({
								ca : 2
							});
					break;
				default:
					a(Error("invalid inflate mode"))
				}
				if (F)
					e.set(c.subarray(d, d + k), f), f += k, d += k;
				else
					for (; k--; )
						e[f++] = c[d++];
				this.C = d;
				this.c = f;
				this.g = e;
				break;
			case 1:
				this.iF(Oa, Pa);
				break;
			case 2:
				D(this);
				break;
			default:
				a(Error("unknown BTYPE: " + c))
			}
		}
		return this.iO()
	};
	B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	var Da = F ? new Uint16Array(B) : B;
	B = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
	var Ea = F ? new Uint16Array(B) : B;
	B = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2,
		3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
	var ka = F ? new Uint8Array(B) : B;
	B = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
	var Fa = F ? new Uint16Array(B) : B;
	B = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	var la = F ? new Uint8Array(B) : B;
	B = new(F ? Uint8Array : Array)(288);
	I = 0;
	for (O = B.length; I < O; ++I)
		B[I] = 143 >= I ? 8 : 255 >= I ? 9 : 279 >= I ? 7 : 8;
	var Oa = g(B);
	B = new(F ? Uint8Array : Array)(30);
	I = 0;
	for (O = B.length; I < O; ++I)
		B[I] = 5;
	var Pa = g(B);
	w.prototype.iF =
	function (a, c) {
		var d = this.g,
		e = this.c;
		this.Ka = a;
		for (var f = d.length - 258, g, k, l; 256 !== (g = A(this, a)); )
			if (256 > g)
				e >= f && (this.c = e, d = this.Dk(), e = this.c), d[e++] = g;
			else {
				g -= 257;
				l = Ea[g];
				0 < ka[g] && (l += y(this, ka[g]));
				g = A(this, c);
				k = Fa[g];
				0 < la[g] && (k += y(this, la[g]));
				for (e >= f && (this.c = e, d = this.Dk(), e = this.c); l--; )
					d[e] = d[e++ - k]
			}
		for (; 8 <= this.Bj; )
			this.Bj -= 8, this.C--;
		this.c = e
	};
	w.prototype.r0 = function (a, c) {
		var d = this.g,
		e = this.c;
		this.Ka = a;
		for (var f = d.length, g, k, l; 256 !== (g = A(this, a)); )
			if (256 > g)
				e >= f && (d = this.Dk(), f = d.length),
				d[e++] = g;
			else {
				g -= 257;
				l = Ea[g];
				0 < ka[g] && (l += y(this, ka[g]));
				g = A(this, c);
				k = Fa[g];
				0 < la[g] && (k += y(this, la[g]));
				for (e + l > f && (d = this.Dk(), f = d.length); l--; )
					d[e] = d[e++ - k]
			}
		for (; 8 <= this.Bj; )
			this.Bj -= 8, this.C--;
		this.c = e
	};
	w.prototype.Dk = function () {
		var a = new(F ? Uint8Array : Array)(this.c - 32768),
		c = this.c - 32768,
		d,
		e,
		f = this.g;
		if (F)
			a.set(f.subarray(32768, a.length));
		else {
			d = 0;
			for (e = a.length; d < e; ++d)
				a[d] = f[d + 32768]
		}
		this.NE.push(a);
		this.sF += a.length;
		if (F)
			f.set(f.subarray(c, c + 32768));
		else
			for (d = 0; 32768 > d; ++d)
				f[d] = f[c + d];
		this.c =
			32768;
		return f
	};
	w.prototype.v0 = function (a) {
		var c,
		d = this.input.length / this.C + 1 | 0,
		e,
		f,
		g,
		k = this.input,
		l = this.g;
		a && ("number" === typeof a.ca && (d = a.ca), "number" === typeof a.b0 && (d += a.b0));
		2 > d ? (e = (k.length - this.C) / this.Ka[2], g = 258 * (e / 2) | 0, f = g < l.length ? l.length + g : l.length << 1) : f = l.length * d;
		F ? (c = new Uint8Array(f), c.set(l)) : c = l;
		return this.g = c
	};
	w.prototype.iO = function () {
		var a = 0,
		c = this.g,
		d = this.NE,
		e,
		f = new(F ? Uint8Array : Array)(this.sF + (this.c - 32768)),
		g,
		k,
		l,
		n;
		if (0 === d.length)
			return F ? this.g.subarray(32768, this.c) :
			this.g.slice(32768, this.c);
		g = 0;
		for (k = d.length; g < k; ++g) {
			e = d[g];
			l = 0;
			for (n = e.length; l < n; ++l)
				f[a++] = e[l]
		}
		g = 32768;
		for (k = this.c; g < k; ++g)
			f[a++] = c[g];
		this.NE = [];
		return this.buffer = f
	};
	w.prototype.l0 = function () {
		var a,
		c = this.c;
		F ? this.yO ? (a = new Uint8Array(c), a.set(this.g.subarray(0, c))) : a = this.g.subarray(0, c) : (this.g.length > c && (this.g.length = c), a = this.g);
		return this.buffer = a
	};
	H.prototype.b = function () {
		var c = this.input,
		e,
		f;
		e = this.uO.b();
		this.C = this.uO.C;
		this.W0 && (f = (c[this.C++] << 24 | c[this.C++] << 16 | c[this.C++] <<
				8 | c[this.C++]) >>> 0, f !== d(e) && a(Error("invalid adler-32 checksum")));
		return e
	};
	c("Zlib.Inflate", H);
	c("Zlib.Inflate.BufferType", G);
	G.Bga = G.GZ;
	G.Rga = G.F_;
	c("Zlib.Inflate.prototype.decompress", H.prototype.b);
	G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
	F && new Uint16Array(G);
	G = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
	F && new Uint16Array(G);
	G = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
	F && new Uint8Array(G);
	G = [1, 2, 3, 4, 5, 7, 9,
		13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
	F && new Uint16Array(G);
	G = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
	F && new Uint8Array(G);
	G = new(F ? Uint8Array : Array)(288);
	B = 0;
	for (I = G.length; B < I; ++B)
		G[B] = 143 >= B ? 8 : 255 >= B ? 9 : 279 >= B ? 7 : 8;
	g(G);
	G = new(F ? Uint8Array : Array)(30);
	B = 0;
	for (I = G.length; B < I; ++B)
		G[B] = 5;
	g(G);
	var ha = 8
}).call(this);
R.aG = function (a) {
	var c;
	if (a && 0 != a.length) {
		var d = a.indexOf("{"),
		e = a.indexOf("}");
		if (!(-1 == d || -1 == e) && !(d > e))
			a = a.substr(d + 1, e - d - 1), 0 != a.length && (d = a.indexOf("}"), -1 != a.indexOf("{") || -1 != d || (c = a.split(",")))
	}
	return c
};
R.sQ = function (a) {
	var c = R.Oc();
	if (a) {
		var d = a.indexOf("{") + 1,
		e = a.lastIndexOf("}", a.length);
		-1 == d || -1 == e || (a = a.substring(d, e), d = a.indexOf("}"), -1 != d && (d = a.indexOf(",", d), -1 != d && (c = R.aG(a.substr(0, d)), a = R.aG(a.substr(d + 1, a.length - d)), c = R.rect(parseFloat(c[0]), parseFloat(c[1]), parseFloat(a[0]), parseFloat(a[1])))))
	}
	return c
};
R.rQ = function (a) {
	var c = R.Nb();
	try {
		if ("" == a)
			return c;
		var d = R.aG(a),
		c = R.b(parseFloat(d[0]), parseFloat(d[1]))
	} catch (e) {}

	return c
};
R.OH = function (a) {
	var c = R.kd();
	try {
		if ("" == a)
			return c;
		var d = R.aG(a),
		c = R.size(parseFloat(d[0]), parseFloat(d[1]))
	} catch (e) {}

	return c
};
R.Ks = R.D.extend({
		ctor : function (a) {
			this.kc = a ? [].concat(a.kc) : []
		},
		copy : function () {
			return new R.Ks(this)
		},
		oxa : function () {
			return this.copy()
		},
		count : function () {
			return this.kc.length
		},
		PD : function (a) {
			R.mm(this.kc, a) || (this.kc.push(a), this.kc.sort(function (a, d) {
					return a - d
				}))
		},
		kX : function (a) {
			for (var c = 0, d = 0, e = 0; d < this.kc.length; d++)
				this.kc[d] != a && (this.kc[e++] = this.kc[d], c++);
			this.kc.length = c
		},
		Dh : function () {
			return this.kc && 0 < this.kc.length ? this.kc[0] : p
		},
		end : function () {
			return this.kc && 0 < this.kc.length ? this.kc[this.kc.length -
				1] : p
		},
		b8 : function (a) {
			return R.mm(this.kc, a)
		},
		Sla : function () {
			return this.kc && 0 < this.kc.length ? this.kc[0] : p
		},
		xla : function (a) {
			a.Y(this)
		},
		kc : p
	});
R.Dia = R.Ks;
R.Ks.create = function () {
	return new R.Ks
};
R.Jk = function () {
	this.y = this.x = 0
};
R.Ewa = function (a, c, d) {
	a.x = c;
	a.y = d;
	return a
};
R.VE = function (a) {
	return Math.sqrt(R.Nd(a.x) + R.Nd(a.y))
};
R.Fwa = function (a) {
	return R.Nd(a.x) + R.Nd(a.y)
};
R.taa = function (a, c) {
	var d = 1 / R.VE(c),
	e = new R.Jk;
	e.x = c.x * d;
	e.y = c.y * d;
	a.x = e.x;
	a.y = e.y
};
R.Bwa = function (a, c, d) {
	a.x = c.x + d.x;
	a.y = c.y + d.y;
	return a
};
R.Dwa = function (a, c) {
	return a.x * c.x + a.y * c.y
};
R.WE = function (a, c, d) {
	a.x = c.x - d.x;
	a.y = c.y - d.y;
	return a
};
R.Hwa = function (a, c, d) {
	var e = new R.Jk;
	e.x = c.x * d.a[0] + c.y * d.a[3] + d.a[6];
	e.y = c.x * d.a[1] + c.y * d.a[4] + d.a[7];
	a.x = e.x;
	a.y = e.y;
	return a
};
R.Iwa = M(p);
R.Gwa = function (a, c, d) {
	a.x = c.x * d;
	a.y = c.y * d;
	return a
};
R.Cwa = function (a, c) {
	return a.x < c.x + R.Va && a.x > c.x - R.Va && a.y < c.y + R.Va && a.y > c.y - R.Va
};
R.lc = function (a, c, d) {
	this.x = a || 0;
	this.y = c || 0;
	this.f = d || 0
};
R.av = function (a, c, d, e) {
	if (!a)
		return new R.lc(c, d, e);
	a.x = c;
	a.y = d;
	a.f = e;
	return a
};
R.pW = function (a) {
	return Math.sqrt(R.Nd(a.x) + R.Nd(a.y) + R.Nd(a.f))
};
R.qW = function (a) {
	return R.Nd(a.x) + R.Nd(a.y) + R.Nd(a.f)
};
R.Jh = function (a, c) {
	var d = 1 / R.pW(c);
	a.x = c.x * d;
	a.y = c.y * d;
	a.f = c.f * d
};
R.kp = function (a, c, d) {
	a.x = c.y * d.f - c.f * d.y;
	a.y = c.f * d.x - c.x * d.f;
	a.f = c.x * d.y - c.y * d.x
};
R.RM = function (a, c) {
	return a.x * c.x + a.y * c.y + a.f * c.f
};
R.oW = function (a, c, d) {
	a.x = c.x + d.x;
	a.y = c.y + d.y;
	a.f = c.f + d.f
};
R.XE = function (a, c, d) {
	a.x = c.x - d.x;
	a.y = c.y - d.y;
	a.f = c.f - d.f
};
R.Nwa = function (a, c, d) {
	a.x = c.x * d.a[0] + c.y * d.a[4] + c.f * d.a[8] + d.a[12];
	a.y = c.x * d.a[1] + c.y * d.a[5] + c.f * d.a[9] + d.a[13];
	a.f = c.x * d.a[2] + c.y * d.a[6] + c.f * d.a[10] + d.a[14];
	return a
};
R.Owa = function (a, c, d) {
	a.x = c.x * d.a[0] + c.y * d.a[4] + c.f * d.a[8];
	a.y = c.x * d.a[1] + c.y * d.a[5] + c.f * d.a[9];
	a.f = c.x * d.a[2] + c.y * d.a[6] + c.f * d.a[10];
	return a
};
R.rW = function (a, c, d) {
	var e = new R.sW,
	f = new R.sW;
	R.uaa(f, c.x, c.y, c.f);
	R.tW(e, f, d);
	a.x = e.x / e.P;
	a.y = e.y / e.P;
	a.f = e.f / e.P
};
R.SM = function (a, c, d) {
	a.x = c.x * d;
	a.y = c.y * d;
	a.f = c.f * d;
	return a
};
R.Jwa = function (a, c) {
	return a.x < c.x + R.Va && a.x > c.x - R.Va && a.y < c.y + R.Va && a.y > c.y - R.Va && a.f < c.f + R.Va && a.f > c.f - R.Va ? 1 : 0
};
R.Kwa = function (a, c, d) {
	c = new R.lc(c.x - d.a[12], c.y - d.a[13], c.f - d.a[14]);
	a.x = c.x * d.a[0] + c.y * d.a[1] + c.f * d.a[2];
	a.y = c.x * d.a[4] + c.y * d.a[5] + c.f * d.a[6];
	a.f = c.x * d.a[8] + c.y * d.a[9] + c.f * d.a[10];
	return a
};
R.Lwa = function (a, c, d) {
	a.x = c.x * d.a[0] + c.y * d.a[1] + c.f * d.a[2];
	a.y = c.x * d.a[4] + c.y * d.a[5] + c.f * d.a[6];
	a.f = c.x * d.a[8] + c.y * d.a[9] + c.f * d.a[10];
	return a
};
R.fz = function (a, c) {
	a != c && (a.x = c.x, a.y = c.y, a.f = c.f)
};
R.Pwa = function (a) {
	a.x = 0;
	a.y = 0;
	a.f = 0;
	return a
};
R.Mwa = function (a) {
	if (!a)
		return p;
	var c = new Float32Array(3);
	c[0] = a.x;
	c[1] = a.y;
	c[2] = a.f;
	return c
};
R.sW = function () {
	this.P = this.f = this.y = this.x = 0
};
R.uaa = function (a, c, d, e) {
	a.x = c;
	a.y = d;
	a.f = e;
	a.P = 1
};
R.Qwa = function (a, c, d) {
	a.x = c.x + d.x;
	a.y = c.y + d.y;
	a.f = c.f + d.f;
	a.P = c.P + d.P;
	return a
};
R.Twa = function (a, c) {
	return a.x * c.x + a.y * c.y + a.f * c.f + a.P * c.P
};
R.vaa = function (a) {
	return Math.sqrt(R.Nd(a.x) + R.Nd(a.y) + R.Nd(a.f) + R.Nd(a.P))
};
R.Uwa = function (a) {
	return R.Nd(a.x) + R.Nd(a.y) + R.Nd(a.f) + R.Nd(a.P)
};
R.Vwa = u();
R.waa = function (a, c) {
	var d = 1 / R.vaa(c);
	a.x *= d;
	a.y *= d;
	a.f *= d;
	a.P *= d
};
R.Wwa = function (a, c, d) {
	R.waa(a, c);
	a.x *= d;
	a.y *= d;
	a.f *= d;
	a.P *= d;
	return a
};
R.Xwa = function (a, c, d) {
	a.x = c.x - d.x;
	a.y = c.y - d.y;
	a.f = c.f - d.f;
	a.P = c.P - d.P;
	return a
};
R.tW = function (a, c, d) {
	a.x = c.x * d.a[0] + c.y * d.a[4] + c.f * d.a[8] + c.P * d.a[12];
	a.y = c.x * d.a[1] + c.y * d.a[5] + c.f * d.a[9] + c.P * d.a[13];
	a.f = c.x * d.a[2] + c.y * d.a[6] + c.f * d.a[10] + c.P * d.a[14];
	a.P = c.x * d.a[3] + c.y * d.a[7] + c.f * d.a[11] + c.P * d.a[15]
};
R.Zwa = function (a, c, d, e, f, g) {
	for (var k = 0; k < g; )
		R.tW(a + k * c, d + k * e, f), ++k;
	return a
};
R.Rwa = function (a, c) {
	return a.x < c.x + R.Va && a.x > c.x - R.Va && a.y < c.y + R.Va && a.y > c.y - R.Va && a.f < c.f + R.Va && a.f > c.f - R.Va && a.P < c.P + R.Va && a.P > c.P - R.Va
};
R.Swa = function (a, c) {
	R.e(a != c, "same object!");
	a.x = c.x;
	a.y = c.y;
	a.f = c.f;
	a.P = c.P;
	return a
};
R.Ywa = function (a) {
	if (!a)
		return p;
	var c = new Float32Array(4);
	c[0] = a.x;
	c[1] = a.y;
	c[2] = a.f;
	c[3] = a.P;
	return c
};
R.Awa = Number;
R.qva = Number;
R.rva = Number;
R.As = 0;
R.Bs = 1;
R.PM = 3.141592;
R.maa = 0.017453;
R.naa = 57.295779;
R.Va = 0.015625;
R.Nd = function (a) {
	return a * a
};
R.ez = function (a) {
	return a * R.maa
};
R.vwa = function (a) {
	return a * R.naa
};
R.SE = function (a, c) {
	return a < c ? a : c
};
R.RE = function (a, c) {
	return a > c ? a : c
};
R.pva = function (a, c) {
	return a + R.Va > c && a - R.Va < c
};
R.wwa = function (a) {
	this.start = a || new R.Jk;
	this.start = a || new R.Jk
};
R.xwa = function (a, c, d, e, f) {
	a.start.x = c;
	a.start.y = d;
	a.dir.x = e;
	a.dir.y = f
};
R.QM = function (a, c, d, e) {
	var f = a.start.x,
	g = a.start.y,
	k = a.start.x + a.dir.x;
	a = a.start.y + a.dir.y;
	var l = c.x,
	n = c.y,
	r = d.x,
	s = d.y,
	t = (s - n) * (k - f) - (r - l) * (a - g);
	if (t > -R.Va && t < R.Va)
		return R.As;
	n = ((r - l) * (g - n) - (s - n) * (f - l)) / t;
	l = f + n * (k - f);
	n = g + n * (a - g);
	if (l < R.SE(c.x, d.x) - R.Va || l > R.RE(c.x, d.x) + R.Va || n < R.SE(c.y, d.y) - R.Va || n > R.RE(c.y, d.y) + R.Va || l < R.SE(f, k) - R.Va || l > R.RE(f, k) + R.Va || n < R.SE(g, a) - R.Va || n > R.RE(g, a) + R.Va)
		return R.As;
	e.x = l;
	e.y = n;
	return R.Bs
};
R.RL = function (a, c, d) {
	var e = new R.Jk;
	R.WE(e, c, a);
	d.x = -e.y;
	d.y = e.x;
	R.taa(d, d)
};
R.zwa = function (a, c, d, e, f, g) {
	var k = new R.Jk,
	l = new R.Jk,
	n = new R.Jk,
	r = 1E4,
	s = R.As,
	t;
	R.QM(a, c, d, k) && (t = new R.Jk, s = R.Bs, t = R.VE(R.WE(t, k, a.start)), t < r && (l.x = k.x, l.y = k.y, r = t, R.RL(c, d, n)));
	R.QM(a, d, e, k) && (t = new R.Jk, s = R.Bs, t = R.VE(R.WE(t, k, a.start)), t < r && (l.x = k.x, l.y = k.y, r = t, R.RL(d, e, n)));
	R.QM(a, e, c, k) && (t = new R.Jk, s = R.Bs, t = R.VE(R.WE(t, k, a.start)), t < r && (l.x = k.x, l.y = k.y, R.RL(e, c, n)));
	s && (f.x = l.x, f.y = l.y, g && (g.x = n.x, g.y = n.y));
	return s
};
R.ywa = function () {
	R.e(0, "Not implemented");
	return 0
};
var Float32Array = Float32Array || Array;
R.QE = function () {
	this.a = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])
};
R.zva = function (a, c) {
	for (var d = 0; 9 > d; d++)
		a.a[d] = c;
	return a
};
R.faa = function (a, c) {
	a.a[0] = c.a[4] * c.a[8] - c.a[5] * c.a[7];
	a.a[1] = c.a[2] * c.a[7] - c.a[1] * c.a[8];
	a.a[2] = c.a[1] * c.a[5] - c.a[2] * c.a[4];
	a.a[3] = c.a[5] * c.a[6] - c.a[3] * c.a[8];
	a.a[4] = c.a[0] * c.a[8] - c.a[2] * c.a[6];
	a.a[5] = c.a[2] * c.a[3] - c.a[0] * c.a[5];
	a.a[6] = c.a[3] * c.a[7] - c.a[4] * c.a[6];
	a.a[8] = c.a[0] * c.a[4] - c.a[1] * c.a[3]
};
R.gW = function (a) {
	a.a[1] = a.a[2] = a.a[3] = a.a[5] = a.a[6] = a.a[7] = 0;
	a.a[0] = a.a[4] = a.a[8] = 1
};
R.Ava = function (a, c, d) {
	var e = new R.QE;
	if (0 === c)
		return p;
	c = 1 / c;
	R.faa(e, d);
	R.gaa(a, e, c);
	return a
};
R.QE.KJ = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
R.Bva = function (a) {
	for (var c = 0; 9 > c; c++)
		if (R.QE.KJ[c] !== a.a[c])
			return q;
	return m
};
R.Mva = function (a, c) {
	var d,
	e;
	for (d = 0; 3 > d; ++d)
		for (e = 0; 3 > e; ++e)
			a.a[3 * d + e] = c.a[3 * e + d];
	return a
};
R.yva = function (a) {
	var c;
	c = a.a[0] * a.a[4] * a.a[8] + a.a[1] * a.a[5] * a.a[6] + a.a[2] * a.a[3] * a.a[7];
	return c -= a.a[2] * a.a[4] * a.a[6] + a.a[0] * a.a[5] * a.a[7] + a.a[1] * a.a[3] * a.a[8]
};
R.Cva = function (a, c, d) {
	c = c.a;
	d = d.a;
	a.a[0] = c[0] * d[0] + c[3] * d[1] + c[6] * d[2];
	a.a[1] = c[1] * d[0] + c[4] * d[1] + c[7] * d[2];
	a.a[2] = c[2] * d[0] + c[5] * d[1] + c[8] * d[2];
	a.a[3] = c[0] * d[3] + c[3] * d[4] + c[6] * d[5];
	a.a[4] = c[1] * d[3] + c[4] * d[4] + c[7] * d[5];
	a.a[5] = c[2] * d[3] + c[5] * d[4] + c[8] * d[5];
	a.a[6] = c[0] * d[6] + c[3] * d[7] + c[6] * d[8];
	a.a[7] = c[1] * d[6] + c[4] * d[7] + c[7] * d[8];
	a.a[8] = c[2] * d[6] + c[5] * d[7] + c[8] * d[8];
	return a
};
R.gaa = function (a, c, d) {
	for (var e = 0; 9 > e; e++)
		a.a[e] = c.a[e] * d
};
R.Eva = function (a, c, d) {
	var e = Math.cos(d);
	d = Math.sin(d);
	a.a[0] = e + c.x * c.x * (1 - e);
	a.a[1] = c.f * d + c.y * c.x * (1 - e);
	a.a[2] = -c.y * d + c.f * c.x * (1 - e);
	a.a[3] = -c.f * d + c.x * c.y * (1 - e);
	a.a[4] = e + c.y * c.y * (1 - e);
	a.a[5] = c.x * d + c.f * c.y * (1 - e);
	a.a[6] = c.y * d + c.x * c.f * (1 - e);
	a.a[7] = -c.x * d + c.y * c.f * (1 - e);
	a.a[8] = e + c.f * c.f * (1 - e);
	return a
};
R.xva = function (a, c) {
	R.e(a != c, "Is same object");
	for (var d = 0; 9 > d; d++)
		a.a[d] = c.a[d];
	return a
};
R.wva = function (a, c) {
	if (a == c)
		return m;
	for (var d = 0; 9 > d; ++d)
		if (!(a.a[d] + R.Va > c.a[d] && a.a[d] - R.Va < c.a[d]))
			return q;
	return m
};
R.Hva = function (a, c) {
	a.a[0] = 1;
	a.a[1] = 0;
	a.a[2] = 0;
	a.a[3] = 0;
	a.a[4] = Math.cos(c);
	a.a[5] = Math.sin(c);
	a.a[6] = 0;
	a.a[7] = -Math.sin(c);
	a.a[8] = Math.cos(c);
	return a
};
R.Iva = function (a, c) {
	a.a[0] = Math.cos(c);
	a.a[1] = 0;
	a.a[2] = -Math.sin(c);
	a.a[3] = 0;
	a.a[4] = 1;
	a.a[5] = 0;
	a.a[6] = Math.sin(c);
	a.a[7] = 0;
	a.a[8] = Math.cos(c);
	return a
};
R.Jva = function (a, c) {
	a.a[0] = Math.cos(c);
	a.a[1] = -Math.sin(c);
	a.a[2] = 0;
	a.a[3] = Math.sin(c);
	a.a[4] = Math.cos(c);
	a.a[5] = 0;
	a.a[6] = 0;
	a.a[7] = 0;
	a.a[8] = 1;
	return a
};
R.Dva = function (a, c) {
	a.a[0] = Math.cos(c);
	a.a[1] = Math.sin(c);
	a.a[2] = 0;
	a.a[3] = -Math.sin(c);
	a.a[4] = Math.cos(c);
	a.a[5] = 0;
	a.a[6] = 0;
	a.a[7] = 0;
	a.a[8] = 1;
	return a
};
R.Kva = function (a, c, d) {
	R.gW(a);
	a.a[0] = c;
	a.a[4] = d;
	return a
};
R.Lva = function (a, c, d) {
	R.gW(a);
	a.a[6] = c;
	a.a[7] = d;
	return a
};
R.Fva = function (a, c) {
	if (!c || !a)
		return p;
	a.a[0] = 1 - 2 * (c.y * c.y + c.f * c.f);
	a.a[1] = 2 * (c.x * c.y - c.P * c.f);
	a.a[2] = 2 * (c.x * c.f + c.P * c.y);
	a.a[3] = 2 * (c.x * c.y + c.P * c.f);
	a.a[4] = 1 - 2 * (c.x * c.x + c.f * c.f);
	a.a[5] = 2 * (c.y * c.f - c.P * c.x);
	a.a[6] = 2 * (c.x * c.f - c.P * c.y);
	a.a[7] = 2 * (c.y * c.f + c.P * c.x);
	a.a[8] = 1 - 2 * (c.x * c.x + c.y * c.y);
	return a
};
R.Gva = function (a, c, d) {
	R.mW(h, d);
	R.nW(h, a);
	return a
};
R.wa = function () {
	this.a = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
};
R.Pva = function (a, c) {
	a.a[0] = a.a[1] = a.a[2] = a.a[3] = a.a[4] = a.a[5] = a.a[6] = a.a[7] = a.a[8] = a.a[9] = a.a[10] = a.a[11] = a.a[12] = a.a[13] = a.a[14] = a.a[15] = c
};
R.Rr = function (a) {
	a.a[1] = a.a[2] = a.a[3] = a.a[4] = a.a[6] = a.a[7] = a.a[8] = a.a[9] = a.a[11] = a.a[12] = a.a[13] = a.a[14] = 0;
	a.a[0] = a.a[5] = a.a[10] = a.a[15] = 1
};
R.wa.hi = function (a, c, d) {
	return a.a[c + 4 * d]
};
R.wa.kc = function (a, c, d, e) {
	a.a[c + 4 * d] = e
};
R.wa.Uo = function (a, c, d, e, f) {
	var g = R.wa.hi(a, c, d);
	R.wa.kc(a, c, d, R.wa.hi(a, e, f));
	R.wa.kc(a, e, f, g)
};
R.wa.Q3 = function (a, c) {
	var d,
	e = 0,
	f = 0,
	g,
	k,
	l,
	n = [0, 0, 0, 0],
	r = [0, 0, 0, 0],
	s = [0, 0, 0, 0];
	for (d = 0; 4 > d; d++) {
		for (g = l = 0; 4 > g; g++)
			if (1 != s[g])
				for (k = 0; 4 > k; k++)
					0 == s[k] && Math.abs(R.wa.hi(a, g, k)) >= l && (l = Math.abs(R.wa.hi(a, g, k)), f = g, e = k);
		++s[e];
		if (f != e) {
			for (g = 0; 4 > g; g++)
				R.wa.Uo(a, f, g, e, g);
			for (g = 0; 4 > g; g++)
				R.wa.Uo(c, f, g, e, g)
		}
		r[d] = f;
		n[d] = e;
		if (0 == R.wa.hi(a, e, e))
			return R.As;
		k = 1 / R.wa.hi(a, e, e);
		R.wa.kc(a, e, e, 1);
		for (g = 0; 4 > g; g++)
			R.wa.kc(a, e, g, R.wa.hi(a, e, g) * k);
		for (g = 0; 4 > g; g++)
			R.wa.kc(c, e, g, R.wa.hi(c, e, g) * k);
		for (k = 0; 4 > k; k++)
			if (k !=
				e) {
				l = R.wa.hi(a, k, e);
				R.wa.kc(a, k, e, 0);
				for (g = 0; 4 > g; g++)
					R.wa.kc(a, k, g, R.wa.hi(a, k, g) - R.wa.hi(a, e, g) * l);
				for (g = 0; 4 > g; g++)
					R.wa.kc(c, k, g, R.wa.hi(a, k, g) - R.wa.hi(c, e, g) * l)
			}
	}
	for (g = 3; 0 <= g; g--)
		if (r[g] != n[g])
			for (k = 0; 4 > k; k++)
				R.wa.Uo(a, k, r[g], k, n[g]);
	return R.Bs
};
R.wa.KJ = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
R.iaa = function (a, c) {
	var d = new R.wa,
	e = new R.wa;
	R.un(d, c);
	R.Rr(e);
	R.wa.Q3(d, e) != R.As && R.un(a, d)
};
R.Tva = function (a) {
	for (var c = 0; 16 > c; c++)
		if (R.wa.KJ[c] != a.a[c])
			return q;
	return m
};
R.awa = function (a, c) {
	var d,
	e,
	f = a.a,
	g = c.a;
	for (e = 0; 4 > e; ++e)
		for (d = 0; 4 > d; ++d)
			f[4 * e + d] = g[4 * d + e];
	return a
};
R.vn = function (a, c, d) {
	a = a.a;
	var e = c.a[0],
	f = c.a[1],
	g = c.a[2],
	k = c.a[3],
	l = c.a[4],
	n = c.a[5],
	r = c.a[6],
	s = c.a[7],
	t = c.a[8],
	v = c.a[9],
	w = c.a[10],
	y = c.a[11],
	A = c.a[12],
	D = c.a[13],
	H = c.a[14];
	c = c.a[15];
	var J = d.a[0],
	K = d.a[1],
	E = d.a[2],
	F = d.a[3],
	G = d.a[4],
	B = d.a[5],
	I = d.a[6],
	O = d.a[7],
	P = d.a[8],
	N = d.a[9],
	Y = d.a[10],
	U = d.a[11],
	W = d.a[12],
	aa = d.a[13],
	L = d.a[14];
	d = d.a[15];
	a[0] = J * e + K * l + E * t + F * A;
	a[1] = J * f + K * n + E * v + F * D;
	a[2] = J * g + K * r + E * w + F * H;
	a[3] = J * k + K * s + E * y + F * c;
	a[4] = G * e + B * l + I * t + O * A;
	a[5] = G * f + B * n + I * v + O * D;
	a[6] = G * g + B * r + I * w + O * H;
	a[7] = G * k + B * s + I * y + O *
		c;
	a[8] = P * e + N * l + Y * t + U * A;
	a[9] = P * f + N * n + Y * v + U * D;
	a[10] = P * g + N * r + Y * w + U * H;
	a[11] = P * k + N * s + Y * y + U * c;
	a[12] = W * e + aa * l + L * t + d * A;
	a[13] = W * f + aa * n + L * v + d * D;
	a[14] = W * g + aa * r + L * w + d * H;
	a[15] = W * k + aa * s + L * y + d * c
};
R.I9 = function () {
	var a = R.pp.top.a,
	c = R.yn.top.a,
	d = new Float32Array(16);
	d[0] = a[0] * c[0] + a[4] * c[1] + a[8] * c[2] + a[12] * c[3];
	d[1] = a[1] * c[0] + a[5] * c[1] + a[9] * c[2] + a[13] * c[3];
	d[2] = a[2] * c[0] + a[6] * c[1] + a[10] * c[2] + a[14] * c[3];
	d[3] = a[3] * c[0] + a[7] * c[1] + a[11] * c[2] + a[15] * c[3];
	d[4] = a[0] * c[4] + a[4] * c[5] + a[8] * c[6] + a[12] * c[7];
	d[5] = a[1] * c[4] + a[5] * c[5] + a[9] * c[6] + a[13] * c[7];
	d[6] = a[2] * c[4] + a[6] * c[5] + a[10] * c[6] + a[14] * c[7];
	d[7] = a[3] * c[4] + a[7] * c[5] + a[11] * c[6] + a[15] * c[7];
	d[8] = a[0] * c[8] + a[4] * c[9] + a[8] * c[10] + a[12] * c[11];
	d[9] = a[1] * c[8] +
		a[5] * c[9] + a[9] * c[10] + a[13] * c[11];
	d[10] = a[2] * c[8] + a[6] * c[9] + a[10] * c[10] + a[14] * c[11];
	d[11] = a[3] * c[8] + a[7] * c[9] + a[11] * c[10] + a[15] * c[11];
	d[12] = a[0] * c[12] + a[4] * c[13] + a[8] * c[14] + a[12] * c[15];
	d[13] = a[1] * c[12] + a[5] * c[13] + a[9] * c[14] + a[13] * c[15];
	d[14] = a[2] * c[12] + a[6] * c[13] + a[10] * c[14] + a[14] * c[15];
	d[15] = a[3] * c[12] + a[7] * c[13] + a[11] * c[14] + a[15] * c[15];
	return d
};
R.Hqa = function (a, c, d) {
	a = a.a;
	c = c.a;
	var e = d.a;
	e[0] = a[0] * c[0] + a[4] * c[1] + a[8] * c[2] + a[12] * c[3];
	e[1] = a[1] * c[0] + a[5] * c[1] + a[9] * c[2] + a[13] * c[3];
	e[2] = a[2] * c[0] + a[6] * c[1] + a[10] * c[2] + a[14] * c[3];
	e[3] = a[3] * c[0] + a[7] * c[1] + a[11] * c[2] + a[15] * c[3];
	e[4] = a[0] * c[4] + a[4] * c[5] + a[8] * c[6] + a[12] * c[7];
	e[5] = a[1] * c[4] + a[5] * c[5] + a[9] * c[6] + a[13] * c[7];
	e[6] = a[2] * c[4] + a[6] * c[5] + a[10] * c[6] + a[14] * c[7];
	e[7] = a[3] * c[4] + a[7] * c[5] + a[11] * c[6] + a[15] * c[7];
	e[8] = a[0] * c[8] + a[4] * c[9] + a[8] * c[10] + a[12] * c[11];
	e[9] = a[1] * c[8] + a[5] * c[9] + a[9] * c[10] + a[13] *
		c[11];
	e[10] = a[2] * c[8] + a[6] * c[9] + a[10] * c[10] + a[14] * c[11];
	e[11] = a[3] * c[8] + a[7] * c[9] + a[11] * c[10] + a[15] * c[11];
	e[12] = a[0] * c[12] + a[4] * c[13] + a[8] * c[14] + a[12] * c[15];
	e[13] = a[1] * c[12] + a[5] * c[13] + a[9] * c[14] + a[13] * c[15];
	e[14] = a[2] * c[12] + a[6] * c[13] + a[10] * c[14] + a[14] * c[15];
	e[15] = a[3] * c[12] + a[7] * c[13] + a[11] * c[14] + a[15] * c[15];
	return d.a
};
R.un = function (a, c) {
	if (a != c) {
		var d = a.a,
		e = c.a;
		d[0] = e[0];
		d[1] = e[1];
		d[2] = e[2];
		d[3] = e[3];
		d[4] = e[4];
		d[5] = e[5];
		d[6] = e[6];
		d[7] = e[7];
		d[8] = e[8];
		d[9] = e[9];
		d[10] = e[10];
		d[11] = e[11];
		d[12] = e[12];
		d[13] = e[13];
		d[14] = e[14];
		d[15] = e[15]
	}
};
R.Nva = function (a, c) {
	R.e(a != c, "You are comparing the same thing!");
	for (var d = 0; 16 > d; d++)
		if (!(a.a[d] + R.Va > c.a[d] && a.a[d] - R.Va < c.a[d]))
			return q;
	return m
};
R.Yva = function (a, c) {
	a.a[0] = 1;
	a.a[1] = 0;
	a.a[2] = 0;
	a.a[3] = 0;
	a.a[4] = 0;
	a.a[5] = Math.cos(c);
	a.a[6] = Math.sin(c);
	a.a[7] = 0;
	a.a[8] = 0;
	a.a[9] = -Math.sin(c);
	a.a[10] = Math.cos(c);
	a.a[11] = 0;
	a.a[12] = 0;
	a.a[13] = 0;
	a.a[14] = 0;
	a.a[15] = 1;
	return a
};
R.Zva = function (a, c) {
	a.a[0] = Math.cos(c);
	a.a[1] = 0;
	a.a[2] = -Math.sin(c);
	a.a[3] = 0;
	a.a[4] = 0;
	a.a[5] = 1;
	a.a[6] = 0;
	a.a[7] = 0;
	a.a[8] = Math.sin(c);
	a.a[9] = 0;
	a.a[10] = Math.cos(c);
	a.a[11] = 0;
	a.a[12] = 0;
	a.a[13] = 0;
	a.a[14] = 0;
	a.a[15] = 1;
	return a
};
R.$va = function (a, c) {
	a.a[0] = Math.cos(c);
	a.a[1] = Math.sin(c);
	a.a[2] = 0;
	a.a[3] = 0;
	a.a[4] = -Math.sin(c);
	a.a[5] = Math.cos(c);
	a.a[6] = 0;
	a.a[7] = 0;
	a.a[8] = 0;
	a.a[9] = 0;
	a.a[10] = 1;
	a.a[11] = 0;
	a.a[12] = 0;
	a.a[13] = 0;
	a.a[14] = 0;
	a.a[15] = 1;
	return a
};
R.Uva = function (a, c, d, e) {
	var f = Math.cos(c);
	c = Math.sin(c);
	var g = Math.cos(d);
	d = Math.sin(d);
	var k = Math.cos(e);
	e = Math.sin(e);
	var l = c * d,
	n = f * d;
	a.a[0] = g * k;
	a.a[4] = g * e;
	a.a[8] = -d;
	a.a[1] = l * k - f * e;
	a.a[5] = l * e + f * k;
	a.a[9] = c * g;
	a.a[2] = n * k + c * e;
	a.a[6] = n * e - c * k;
	a.a[10] = f * g;
	a.a[3] = a.a[7] = a.a[11] = 0;
	a.a[15] = 1;
	return a
};
R.Vva = function (a, c) {
	a.a[0] = 1 - 2 * (c.y * c.y + c.f * c.f);
	a.a[1] = 2 * (c.x * c.y + c.f * c.P);
	a.a[2] = 2 * (c.x * c.f - c.y * c.P);
	a.a[3] = 0;
	a.a[4] = 2 * (c.x * c.y - c.f * c.P);
	a.a[5] = 1 - 2 * (c.x * c.x + c.f * c.f);
	a.a[6] = 2 * (c.f * c.y + c.x * c.P);
	a.a[7] = 0;
	a.a[8] = 2 * (c.x * c.f + c.y * c.P);
	a.a[9] = 2 * (c.y * c.f - c.x * c.P);
	a.a[10] = 1 - 2 * (c.x * c.x + c.y * c.y);
	a.a[11] = 0;
	a.a[12] = 0;
	a.a[13] = 0;
	a.a[14] = 0;
	a.a[15] = 1;
	return a
};
R.Xva = function (a, c, d) {
	a.a[0] = c.a[0];
	a.a[1] = c.a[1];
	a.a[2] = c.a[2];
	a.a[3] = 0;
	a.a[4] = c.a[3];
	a.a[5] = c.a[4];
	a.a[6] = c.a[5];
	a.a[7] = 0;
	a.a[8] = c.a[6];
	a.a[9] = c.a[7];
	a.a[10] = c.a[8];
	a.a[11] = 0;
	a.a[12] = d.x;
	a.a[13] = d.y;
	a.a[14] = d.f;
	a.a[15] = 1;
	return a
};
R.laa = function (a, c, d, e) {
	a.a[0] = c;
	a.a[5] = d;
	a.a[10] = e;
	a.a[15] = 1;
	a.a[1] = a.a[2] = a.a[3] = a.a[4] = a.a[6] = a.a[7] = a.a[8] = a.a[9] = a.a[11] = a.a[12] = a.a[13] = a.a[14] = 0
};
R.iW = function (a, c, d, e) {
	a.a[0] = a.a[5] = a.a[10] = a.a[15] = 1;
	a.a[1] = a.a[2] = a.a[3] = a.a[4] = a.a[6] = a.a[7] = a.a[8] = a.a[9] = a.a[11] = 0;
	a.a[12] = c;
	a.a[13] = d;
	a.a[14] = e
};
R.Sva = function (a, c) {
	a.x = c.a[4];
	a.y = c.a[5];
	a.f = c.a[6];
	R.Jh(a, a);
	return a
};
R.Rva = function (a, c) {
	a.x = c.a[0];
	a.y = c.a[1];
	a.f = c.a[2];
	R.Jh(a, a);
	return a
};
R.Qva = function (a, c) {
	a.x = c.a[8];
	a.y = c.a[9];
	a.f = c.a[10];
	R.Jh(a, a);
	return a
};
R.jaa = function (a, c, d) {
	var e = R.ez(30),
	f = d - 0.1,
	g = Math.sin(e);
	0 == f || (0 == g || 0 == c) || (e = Math.cos(e) / g, R.Rr(a), a.a[0] = e / c, a.a[5] = e, a.a[10] =  - (d + 0.1) / f, a.a[11] = -1, a.a[14] = -0.2 * d / f, a.a[15] = 0)
};
R.OM = function (a, c, d, e, f, g, k) {
	R.Rr(a);
	a.a[0] = 2 / (d - c);
	a.a[5] = 2 / (f - e);
	a.a[10] = -2 / (k - g);
	a.a[12] =  - ((d + c) / (d - c));
	a.a[13] =  - ((f + e) / (f - e));
	a.a[14] =  - ((k + g) / (k - g))
};
R.hW = function (a, c, d, e) {
	var f = new R.lc,
	g = new R.lc,
	k = new R.lc,
	l = new R.lc,
	n = new R.wa;
	R.XE(f, d, c);
	R.Jh(f, f);
	R.fz(g, e);
	R.Jh(g, g);
	R.kp(k, f, g);
	R.Jh(k, k);
	R.kp(l, k, f);
	R.Jh(k, k);
	R.Rr(a);
	a.a[0] = k.x;
	a.a[4] = k.y;
	a.a[8] = k.f;
	a.a[1] = l.x;
	a.a[5] = l.y;
	a.a[9] = l.f;
	a.a[2] = -f.x;
	a.a[6] = -f.y;
	a.a[10] = -f.f;
	R.iW(n, -c.x, -c.y, -c.f);
	R.vn(a, a, n)
};
R.kaa = function (a, c, d) {
	var e = Math.cos(d);
	d = Math.sin(d);
	var f = new R.lc;
	R.Jh(f, c);
	a.a[0] = e + f.x * f.x * (1 - e);
	a.a[1] = f.f * d + f.y * f.x * (1 - e);
	a.a[2] = -f.y * d + f.f * f.x * (1 - e);
	a.a[3] = 0;
	a.a[4] = -f.f * d + f.x * f.y * (1 - e);
	a.a[5] = e + f.y * f.y * (1 - e);
	a.a[6] = f.x * d + f.f * f.y * (1 - e);
	a.a[7] = 0;
	a.a[8] = f.y * d + f.x * f.f * (1 - e);
	a.a[9] = -f.x * d + f.y * f.f * (1 - e);
	a.a[10] = e + f.f * f.f * (1 - e);
	a.a[11] = 0;
	a.a[12] = 0;
	a.a[13] = 0;
	a.a[14] = 0;
	a.a[15] = 1
};
R.haa = function (a, c) {
	a.a[0] = c.a[0];
	a.a[1] = c.a[1];
	a.a[2] = c.a[2];
	a.a[3] = c.a[4];
	a.a[4] = c.a[5];
	a.a[5] = c.a[6];
	a.a[6] = c.a[8];
	a.a[7] = c.a[9];
	a.a[8] = c.a[10]
};
R.Ova = function (a, c, d) {
	switch (d) {
	case R.C0:
		a.g = c.a[3] - c.a[0];
		a.c = c.a[7] - c.a[4];
		a.C = c.a[11] - c.a[8];
		a.F = c.a[15] - c.a[12];
		break;
	case R.A0:
		a.g = c.a[3] + c.a[0];
		a.c = c.a[7] + c.a[4];
		a.C = c.a[11] + c.a[8];
		a.F = c.a[15] + c.a[12];
		break;
	case R.y0:
		a.g = c.a[3] + c.a[1];
		a.c = c.a[7] + c.a[5];
		a.C = c.a[11] + c.a[9];
		a.F = c.a[15] + c.a[13];
		break;
	case R.D0:
		a.g = c.a[3] - c.a[1];
		a.c = c.a[7] - c.a[5];
		a.C = c.a[11] - c.a[9];
		a.F = c.a[15] - c.a[13];
		break;
	case R.z0:
		a.g = c.a[3] - c.a[2];
		a.c = c.a[7] - c.a[6];
		a.C = c.a[11] - c.a[10];
		a.F = c.a[15] - c.a[14];
		break;
	case R.B0:
		a.g =
			c.a[3] + c.a[2];
		a.c = c.a[7] + c.a[6];
		a.C = c.a[11] + c.a[10];
		a.F = c.a[15] + c.a[14];
		break;
	default:
		R.e(0, "Invalid plane index")
	}
	c = Math.sqrt(a.g * a.g + a.c * a.c + a.C * a.C);
	a.g /= c;
	a.c /= c;
	a.C /= c;
	a.F /= c;
	return a
};
R.Wva = function (a, c, d) {
	c = new R.TE;
	var e = new R.QE;
	R.haa(e, d);
	R.mW(c, e);
	R.nW(c, a);
	return a
};
R.A0 = 0;
R.C0 = 1;
R.y0 = 2;
R.D0 = 3;
R.B0 = 4;
R.z0 = 5;
R.bwa = function (a, c, d, e) {
	this.g = a || 0;
	this.c = c || 0;
	this.C = d || 0;
	this.F = e || 0
};
R.h1 = 0;
R.g1 = 1;
R.i1 = 2;
R.dwa = function (a, c) {
	return a.g * c.x + a.c * c.y + a.C * c.f + a.F * c.P
};
R.ewa = function (a, c) {
	return a.g * c.x + a.c * c.y + a.C * c.f + a.F
};
R.fwa = function (a, c) {
	return a.g * c.x + a.c * c.y + a.C * c.f
};
R.gwa = function (a, c, d) {
	a.g = d.x;
	a.c = d.y;
	a.C = d.f;
	a.F = -R.RM(d, c);
	return a
};
R.hwa = function (a, c, d, e) {
	var f = new R.lc,
	g = new R.lc,
	k = new R.lc;
	R.XE(g, d, c);
	R.XE(k, e, c);
	R.kp(f, g, k);
	R.Jh(f, f);
	a.g = f.x;
	a.c = f.y;
	a.C = f.f;
	a.F = R.RM(R.SM(f, f, -1), c);
	return a
};
R.iwa = function (a, c, d, e) {
	a = new R.lc;
	R.e(0, "Not implemented");
	R.XE(a, e, d);
	return p
};
R.jwa = function (a, c) {
	var d = new R.lc;
	d.x = c.g;
	d.y = c.c;
	d.f = c.C;
	var e = 1 / R.pW(d);
	R.Jh(d, d);
	a.g = d.x;
	a.c = d.y;
	a.C = d.f;
	a.F = c.F * e;
	return a
};
R.kwa = function () {
	R.e(0, "Not implemented");
	return p
};
R.cwa = function (a, c) {
	var d = a.g * c.x + a.c * c.y + a.C * c.f + a.F;
	return 0.0010 < d ? R.h1 : -0.0010 > d ? R.g1 : R.i1
};
R.TE = function () {
	this.P = this.f = this.y = this.x = 0
};
R.paa = function (a, c) {
	a.x = -c.x;
	a.y = -c.y;
	a.f = -c.f;
	a.P = c.P;
	return a
};
R.qaa = function (a, c) {
	return a.P * c.P + a.x * c.x + a.y * c.y + a.f * c.f
};
R.mwa = u();
R.raa = function (a) {
	a.x = 0;
	a.y = 0;
	a.f = 0;
	a.P = 1
};
R.nwa = function (a, c) {
	var d = R.jW(c),
	e = new R.TE;
	if (Math.abs(d) > R.Va)
		return a.x = 0, a.y = 0, a.f = 0, a.P = 0, a;
	R.UE(a, R.paa(e, c), 1 / d);
	return a
};
R.owa = function (a) {
	return 0 == a.x && 0 == a.y && 0 == a.f && 1 == a.P
};
R.jW = function (a) {
	return Math.sqrt(R.saa(a))
};
R.saa = function (a) {
	return a.x * a.x + a.y * a.y + a.f * a.f + a.P * a.P
};
R.pwa = u();
R.qwa = function (a, c, d) {
	a.P = c.P * d.P - c.x * d.x - c.y * d.y - c.f * d.f;
	a.x = c.P * d.x + c.x * d.P + c.y * d.f - c.f * d.y;
	a.y = c.P * d.y + c.y * d.P + c.f * d.x - c.x * d.f;
	a.f = c.P * d.f + c.f * d.P + c.x * d.y - c.y * d.x;
	return a
};
R.kW = function (a, c) {
	var d = R.jW(c);
	R.e(Math.abs(d) > R.Va, "");
	R.UE(a, c, 1 / d)
};
R.lW = function (a, c) {
	var d = 0.5 * R.PM,
	e = Math.sin(d);
	a.P = Math.cos(d);
	a.x = c.x * e;
	a.y = c.y * e;
	a.f = c.f * e
};
R.mW = function (a, c) {
	var d,
	e,
	f,
	g;
	d = [];
	e = g = 0;
	if (c) {
		d[0] = c.a[0];
		d[1] = c.a[3];
		d[2] = c.a[6];
		d[4] = c.a[1];
		d[5] = c.a[4];
		d[6] = c.a[7];
		d[8] = c.a[2];
		d[9] = c.a[5];
		d[10] = c.a[8];
		d[15] = 1;
		var k = d[0];
		e = k[0] + k[5] + k[10] + 1;
		e > R.Va ? (g = 2 * Math.sqrt(e), d = (k[9] - k[6]) / g, e = (k[2] - k[8]) / g, f = (k[4] - k[1]) / g, g *= 0.25) : k[0] > k[5] && k[0] > k[10] ? (g = 2 * Math.sqrt(1 + k[0] - k[5] - k[10]), d = 0.25 * g, e = (k[4] + k[1]) / g, f = (k[2] + k[8]) / g, g = (k[9] - k[6]) / g) : k[5] > k[10] ? (g = 2 * Math.sqrt(1 + k[5] - k[0] - k[10]), d = (k[4] + k[1]) / g, e = 0.25 * g, f = (k[9] + k[6]) / g, g = (k[2] - k[8]) / g) : (g = 2 * Math.sqrt(1 +
					k[10] - k[0] - k[5]), d = (k[2] + k[8]) / g, e = (k[9] + k[6]) / g, f = 0.25 * g, g = (k[4] - k[1]) / g);
		a.x = d;
		a.y = e;
		a.f = f;
		a.P = g
	}
};
R.twa = function (a, c, d, e) {
	var f,
	g,
	k,
	l,
	n;
	f = R.ez(d) / 2;
	g = R.ez(c) / 2;
	k = R.ez(e) / 2;
	e = Math.cos(f);
	c = Math.cos(g);
	d = Math.cos(k);
	f = Math.sin(f);
	g = Math.sin(g);
	k = Math.sin(k);
	l = c * d;
	n = g * k;
	a.P = e * l + f * n;
	a.x = f * l - e * n;
	a.y = e * g * d + f * c * k;
	a.f = e * c * k - f * g * d;
	R.kW(a, a);
	return a
};
R.uwa = function (a, c, d, e) {
	if (c.x == d.x && c.y == d.y && c.f == d.f && c.P == d.P)
		return a.x = c.x, a.y = c.y, a.f = c.f, a.P = c.P, a;
	var f = R.qaa(c, d),
	g = Math.acos(f),
	f = Math.sqrt(1 - R.Nd(f)),
	k = Math.sin(e * g) / f,
	l = new R.TE,
	n = new R.TE;
	R.UE(l, c, Math.sin((1 - e) * g) / f);
	R.UE(n, d, k);
	R.oaa(a, l, n);
	return a
};
R.nW = function (a, c) {
	var d;
	d = Math.sqrt(R.Nd(a.x) + R.Nd(a.y) + R.Nd(a.f));
	d > -R.Va && d < R.Va || d < 2 * R.PM + R.Va && d > 2 * R.PM - R.Va ? (c.x = 0, c.y = 0, c.f = 1) : (c.x = a.x / d, c.y = a.y / d, c.f = a.f / d, R.Jh(c, c))
};
R.UE = function (a, c, d) {
	a.x = c.x * d;
	a.y = c.y * d;
	a.f = c.f * d;
	a.P = c.P * d
};
R.lwa = function (a, c) {
	a.x = c.x;
	a.y = c.y;
	a.f = c.f;
	a.P = c.P;
	return a
};
R.oaa = function (a, c, d) {
	a.x = c.x + d.x;
	a.y = c.y + d.y;
	a.f = c.f + d.f;
	a.P = c.P + d.P
};
R.swa = function (a, c, d, e) {
	var f = new R.lc,
	g = new R.lc;
	R.fz(f, c);
	R.fz(g, d);
	R.Jh(f, f);
	R.Jh(g, g);
	d = R.RM(f, g);
	if (1 <= d)
		return R.raa(a), a;
	-0.999999 > d ? Math.abs(R.qW(e)) < R.Va ? R.lW(a, e) : (f = new R.lc, g = new R.lc, g.x = 1, g.y = 0, g.f = 0, R.kp(f, g, c), Math.abs(R.qW(f)) < R.Va && (g = new R.lc, g.x = 0, g.y = 1, g.f = 0, R.kp(f, g, c)), R.Jh(f, f), R.lW(a, f)) : (c = Math.sqrt(2 * (1 + d)), e = 1 / c, d = new R.lc, R.kp(d, f, g), a.x = d.x * e, a.y = d.y * e, a.f = d.f * e, a.P = 0.5 * c, R.kW(a, a));
	return a
};
R.rwa = function (a, c, d) {
	var e = new R.lc,
	f = new R.lc,
	g = new R.lc;
	g.x = c.x;
	g.y = c.y;
	g.f = c.f;
	R.kp(e, g, d);
	R.kp(f, g, e);
	R.SM(e, e, 2 * c.P);
	R.SM(f, f, 2);
	R.oW(a, d, e);
	R.oW(a, a, f);
	return a
};
R.lva = function (a, c) {
	this.min = a || new R.lc;
	this.max = c || new R.lc
};
R.nva = function (a, c) {
	return a.x >= c.min.x && a.x <= c.max.x && a.y >= c.min.y && a.y <= c.max.y && a.f >= c.min.f && a.f <= c.max.f ? R.Bs : R.As
};
R.mva = function (a, c) {
	R.fz(a.min, c.min);
	R.fz(a.max, c.max);
	return a
};
R.ova = function () {
	R.e(0, "Not implemented");
	return 0
};
R.YE = function (a, c, d, e) {
	this.top = d;
	this.stack = e
};
R.YE.bia = 30;
R.TM = function (a) {
	a.stack = [];
	a.top = p
};
R.ZE = function (a, c) {
	a.stack.push(a.top);
	a.top = new R.wa;
	R.un(a.top, c)
};
R.$wa = function (a) {
	a.top = a.stack.pop()
};
R.UM = function (a) {
	a.stack = p;
	a.top = p
};
R.pm = 5888;
R.qm = 5889;
R.AP = 5890;
R.yn = new R.YE;
R.pp = new R.YE;
R.Lz = new R.YE;
R.ad = p;
R.HM = q;
R.yaa = function () {
	if (!R.HM) {
		var a = new R.wa;
		R.TM(R.yn);
		R.TM(R.pp);
		R.TM(R.Lz);
		R.ad = R.yn;
		R.HM = m;
		R.Rr(a);
		R.ZE(R.yn, a);
		R.ZE(R.pp, a);
		R.ZE(R.Lz, a)
	}
};
R.yaa();
R.eaa = function () {
	R.UM(R.yn);
	R.UM(R.pp);
	R.UM(R.Lz);
	R.HM = q;
	R.ad = p
};
R.tn = function () {
	R.ZE(R.ad, R.ad.top)
};
R.tva = function (a) {
	R.ad.stack.push(R.ad.top);
	R.un(a, R.ad.top);
	R.ad.top = a
};
R.sn = function () {
	R.ad.top = R.ad.stack.pop()
};
R.bm = function (a) {
	switch (a) {
	case R.pm:
		R.ad = R.yn;
		break;
	case R.qm:
		R.ad = R.pp;
		break;
	case R.AP:
		R.ad = R.Lz;
		break;
	default:
		R.e(0, "Invalid matrix mode specified")
	}
};
R.Zu = function () {
	R.Rr(R.ad.top)
};
R.sva = function (a) {
	R.un(R.ad.top, a)
};
R.$u = function (a) {
	R.vn(R.ad.top, R.ad.top, a)
};
R.PE = function (a, c) {
	var d = new R.wa;
	R.iW(d, a, c, 0);
	R.vn(R.ad.top, R.ad.top, d)
};
R.uva = function (a, c, d, e) {
	c = new R.lc(c, d, e);
	d = new R.wa;
	R.kaa(d, c, R.ez(a));
	R.vn(R.ad.top, R.ad.top, d)
};
R.vva = function (a, c, d) {
	var e = new R.wa;
	R.laa(e, a, c, d);
	R.vn(R.ad.top, R.ad.top, e)
};
R.OE = function (a, c) {
	switch (a) {
	case R.pm:
		R.un(c, R.yn.top);
		break;
	case R.qm:
		R.un(c, R.pp.top);
		break;
	case R.AP:
		R.un(c, R.Lz.top);
		break;
	default:
		R.e(1, "Invalid matrix mode specified")
	}
};
R.Gga = function (a, c, d, e, f, g) {
	this.g = a;
	this.c = c;
	this.C = d;
	this.F = e;
	this.V = f;
	this.W = g
};
R.oka = function (a, c, d, e, f, g) {
	return {
		g : a,
		c : c,
		C : d,
		F : e,
		V : f,
		W : g
	}
};
R.Vz = function (a, c, d, e, f, g) {
	return {
		g : a,
		c : c,
		C : d,
		F : e,
		V : f,
		W : g
	}
};
R.pka = function (a, c) {
	return {
		x : c.g * a.x + c.C * a.y + c.V,
		y : c.c * a.x + c.F * a.y + c.W
	}
};
R.Lp = function (a, c) {
	return {
		x : c.g * a.x + c.C * a.y + c.V,
		y : c.c * a.x + c.F * a.y + c.W
	}
};
R.fo = function (a, c, d) {
	return {
		x : d.g * a + d.C * c + d.V,
		y : d.c * a + d.F * c + d.W
	}
};
R.qka = function (a, c) {
	return {
		width : c.g * a.width + c.C * a.height,
		height : c.c * a.width + c.F * a.height
	}
};
R.xja = function (a, c) {
	return {
		width : c.g * a.width + c.C * a.height,
		height : c.c * a.width + c.F * a.height
	}
};
R.Jga = function () {
	return {
		g : 1,
		c : 0,
		C : 0,
		F : 1,
		V : 0,
		W : 0
	}
};
R.Iga = function () {
	return {
		g : 1,
		c : 0,
		C : 0,
		F : 1,
		V : 0,
		W : 0
	}
};
R.Yi = function (a, c) {
	var d = R.Pi(a),
	e = R.Oi(a),
	f = R.Lj(a),
	g = R.Mj(a),
	k = R.fo(e, d, c),
	d = R.fo(f, d, c),
	e = R.fo(e, g, c),
	l = R.fo(f, g, c),
	f = Math.min(k.x, d.x, e.x, l.x),
	g = Math.max(k.x, d.x, e.x, l.x),
	n = Math.min(k.y, d.y, e.y, l.y),
	k = Math.max(k.y, d.y, e.y, l.y);
	return R.rect(f, n, g - f, k - n)
};
R.hl = function (a, c) {
	var d = R.Pi(a),
	e = R.Oi(a),
	f = R.Lj(a),
	g = R.Mj(a),
	k = R.fo(e, d, c),
	d = R.fo(f, d, c),
	e = R.fo(e, g, c),
	l = R.fo(f, g, c),
	f = Math.min(k.x, d.x, e.x, l.x),
	g = Math.max(k.x, d.x, e.x, l.x),
	n = Math.min(k.y, d.y, e.y, l.y),
	k = Math.max(k.y, d.y, e.y, l.y);
	a.x = f;
	a.y = n;
	a.width = g - f;
	a.height = k - n;
	return a
};
R.Wz = function (a, c, d) {
	return {
		g : a.g,
		c : a.c,
		C : a.C,
		F : a.F,
		V : a.V + a.g * c + a.C * d,
		W : a.W + a.c * c + a.F * d
	}
};
R.Kga = function (a, c, d) {
	return {
		g : a.g * c,
		c : a.c * c,
		C : a.C * d,
		F : a.F * d,
		V : a.V,
		W : a.W
	}
};
R.vZ = function (a) {
	var c = Math.sin(1.57079633),
	d = Math.cos(1.57079633);
	return {
		g : a.g * d + a.C * c,
		c : a.c * d + a.F * c,
		C : a.C * d - a.g * c,
		F : a.F * d - a.c * c,
		V : a.V,
		W : a.W
	}
};
R.Cf = function (a, c) {
	return {
		g : a.g * c.g + a.c * c.C,
		c : a.g * c.c + a.c * c.F,
		C : a.C * c.g + a.F * c.C,
		F : a.C * c.c + a.F * c.F,
		V : a.V * c.g + a.W * c.C + c.V,
		W : a.V * c.c + a.W * c.F + c.W
	}
};
R.Hga = function (a, c) {
	return a.g === c.g && a.c === c.c && a.C === c.C && a.F === c.F && a.V === c.V && a.W === c.W
};
R.nG = function (a) {
	var c = 1 / (a.g * a.F - a.c * a.C);
	return {
		g : c * a.F,
		c : -c * a.c,
		C : -c * a.C,
		F : c * a.g,
		V : c * (a.C * a.W - a.F * a.V),
		W : c * (a.c * a.V - a.g * a.W)
	}
};
R.WP = parseFloat("1.192092896e-07F");
R.lN = function (a) {
	return R.b(-a.x, -a.y)
};
R.ug = function (a, c) {
	return R.b(a.x + c.x, a.y + c.y)
};
R.We = function (a, c) {
	return R.b(a.x - c.x, a.y - c.y)
};
R.cm = function (a, c) {
	return R.b(a.x * c, a.y * c)
};
R.kN = function (a, c) {
	return R.cm(R.ug(a, c), 0.5)
};
R.ev = function (a, c) {
	return a.x * c.x + a.y * c.y
};
R.aya = function (a, c) {
	return a.x * c.y - a.y * c.x
};
R.lF = function (a) {
	return R.b(-a.y, a.x)
};
R.fya = function (a) {
	return R.b(a.y, -a.x)
};
R.eya = function (a, c) {
	return R.cm(c, R.ev(a, c) / R.ev(c, c))
};
R.gya = function (a, c) {
	return R.b(a.x * c.x - a.y * c.y, a.x * c.y + a.y * c.x)
};
R.jya = function (a, c) {
	return R.b(a.x * c.x + a.y * c.y, a.y * c.x - a.x * c.y)
};
R.TW = function (a) {
	return R.ev(a, a)
};
R.SW = function (a, c) {
	return R.TW(R.We(a, c))
};
R.op = function (a) {
	return Math.sqrt(R.TW(a))
};
R.RW = function (a, c) {
	return R.op(R.We(a, c))
};
R.Kj = function (a) {
	return R.cm(a, 1 / R.op(a))
};
R.bya = function (a) {
	return R.b(Math.cos(a), Math.sin(a))
};
R.vba = function (a) {
	return Math.atan2(a.y, a.x)
};
R.de = function (a, c, d) {
	if (c > d) {
		var e = c;
		c = d;
		d = e
	}
	return a < c ? c : a < d ? a : d
};
R.QW = function (a) {
	var c = R.b(0, 0),
	d = R.b(1, 1);
	return R.b(R.de(a.x, c.x, d.x), R.de(a.y, c.y, d.y))
};
R.sba = function () {
	var a = R.o.d().$;
	return R.b(a.width, a.height)
};
R.$xa = function (a, c) {
	return R.b(c(a.x), c(a.y))
};
R.UW = function (a, c, d) {
	return R.ug(R.cm(a, 1 - d), R.cm(c, d))
};
R.cya = function (a, c, d) {
	return a.x - d <= c.x && c.x <= a.x + d && a.y - d <= c.y && c.y <= a.y + d ? m : q
};
R.Zxa = function (a, c) {
	return R.b(a.x * c.x, a.y * c.y)
};
R.Yxa = function (a, c) {
	var d = R.Kj(a),
	e = R.Kj(c),
	d = Math.atan2(d.x * e.y - d.y * e.x, R.ev(d, e));
	return Math.abs(d) < R.WP ? 0 : d
};
R.Xxa = function (a, c) {
	var d = Math.acos(R.ev(R.Kj(a), R.Kj(c)));
	return Math.abs(d) < R.WP ? 0 : d
};
R.uba = function (a, c, d) {
	a = R.We(a, c);
	var e = Math.cos(d);
	d = Math.sin(d);
	var f = a.x;
	a.x = f * e - a.y * d + c.x;
	a.y = f * d + a.y * e + c.y;
	return a
};
R.jN = function (a, c, d, e, f) {
	if (a.x == c.x && a.y == c.y || d.x == e.x && d.y == e.y)
		return q;
	var g = c.x - a.x;
	c = c.y - a.y;
	var k = e.x - d.x;
	e = e.y - d.y;
	var l = a.x - d.x;
	a = a.y - d.y;
	d = e * g - k * c;
	f.x = k * a - e * l;
	f.y = g * a - c * l;
	if (0 == d)
		return 0 == f.x || 0 == f.y ? m : q;
	f.x /= d;
	f.y /= d;
	return m
};
R.iya = function (a, c, d, e) {
	var f = R.b(0, 0);
	return R.jN(a, c, d, e, f) && 0 <= f.x && 1 >= f.x && 0 <= f.y && 1 >= f.y ? m : q
};
R.dya = function (a, c, d, e) {
	var f = R.b(0, 0);
	return R.jN(a, c, d, e, f) ? (d = R.b(0, 0), d.x = a.x + f.x * (c.x - a.x), d.y = a.y + f.x * (c.y - a.y), d) : R.Nb()
};
R.hya = function (a, c) {
	return a != p && c != p ? a.x == c.x && a.y == c.y : q
};
R.mF = function (a) {
	a.x = 0;
	a.y = 0
};
R.Cn = function (a, c) {
	a.x = c.x;
	a.y = c.y
};
R.fv = function (a, c) {
	a.x *= c;
	a.y *= c
};
R.VW = function (a, c) {
	a.x -= c.x;
	a.y -= c.y
};
R.kF = function (a, c) {
	a.x += c.x;
	a.y += c.y
};
R.tba = function (a) {
	R.fv(a, 1 / Math.sqrt(a.x * a.x + a.y * a.y))
};
R.f1 = R.D.extend({
		ctor : function (a) {
			var c,
			d,
			e,
			f;
			this.data = a;
			this.pb = 8;
			this.mN = [];
			this.BE = [];
			this.ks = {};
			this.IL = p;
			this.text = {};
			for (e = p; ; ) {
				c = this.En();
				f = a = h;
				f = [];
				for (a = 0; 4 > a; ++a)
					f.push(String.fromCharCode(this.data[this.pb++]));
				a = f.join("");
				switch (a) {
				case "IHDR":
					this.width = this.En();
					this.height = this.En();
					this.yu = this.data[this.pb++];
					this.WL = this.data[this.pb++];
					this.vma = this.data[this.pb++];
					this.Bna = this.data[this.pb++];
					this.rua = this.data[this.pb++];
					break;
				case "acTL":
					this.IL = {
						Exa : this.En(),
						Fxa : this.En() ||
						Infinity,
						frames : []
					};
					break;
				case "PLTE":
					this.mN = this.rz(c);
					break;
				case "fcTL":
					e && this.IL.frames.push(e);
					this.pb += 4;
					e = {
						width : this.En(),
						height : this.En(),
						sO : this.En(),
						tO : this.En()
					};
					a = this.bX();
					c = this.bX() || 100;
					e.jn = 1E3 * a / c;
					e.Zma = this.data[this.pb++];
					e.bma = this.data[this.pb++];
					e.data = [];
					break;
				case "IDAT":
				case "fdAT":
					"fdAT" === a && (this.pb += 4, c -= 4);
					a = (e != p ? e.data : h) || this.BE;
					for (f = 0; 0 <= c ? f < c : f > c; 0 <= c ? ++f : --f)
						a.push(this.data[this.pb++]);
					break;
				case "tRNS":
					this.ks = {};
					switch (this.WL) {
					case 3:
						this.ks.vM = this.rz(c);
						c = 255 - this.ks.vM.length;
						if (0 < c)
							for (a = 0; 0 <= c ? a < c : a > c; 0 <= c ? ++a : --a)
								this.ks.vM.push(255);
						break;
					case 0:
						this.ks.Zta = this.rz(c)[0];
						break;
					case 2:
						this.ks.qza = this.rz(c)
					}
					break;
				case "tEXt":
					f = this.rz(c);
					c = f.indexOf(0);
					a = String.fromCharCode.apply(String, f.slice(0, c));
					this.text[a] = String.fromCharCode.apply(String, f.slice(c + 1));
					break;
				case "IEND":
					e && this.IL.frames.push(e);
					a : {
						switch (this.WL) {
						case 0:
						case 3:
						case 4:
							e = 1;
							break a;
						case 2:
						case 6:
							e = 3;
							break a
						}
						e = h
					}
					this.v = e;
					this.HV = 4 === (d = this.WL) || 6 === d;
					d = this.v + (this.HV ? 1 :
							0);
					this.eca = this.yu * d;
					a : {
						switch (this.v) {
						case 1:
							d = "DeviceGray";
							break a;
						case 3:
							d = "DeviceRGB";
							break a
						}
						d = h
					}
					this.sma = d;
					Uint8Array != Array && (this.BE = new Uint8Array(this.BE));
					return;
				default:
					this.pb += c
				}
				this.pb += 4;
				this.pb > this.data.length && b(Error("Incomplete or corrupt PNG file"))
			}
		},
		rz : function (a) {
			var c,
			d;
			d = [];
			for (c = 0; 0 <= a ? c < a : c > a; 0 <= a ? ++c : --c)
				d.push(this.data[this.pb++]);
			return d
		},
		En : function () {
			var a,
			c,
			d,
			e;
			a = this.data[this.pb++] << 24;
			c = this.data[this.pb++] << 16;
			d = this.data[this.pb++] << 8;
			e = this.data[this.pb++];
			return a | c | d | e
		},
		bX : function () {
			var a,
			c;
			a = this.data[this.pb++] << 8;
			c = this.data[this.pb++];
			return a | c
		},
		F8 : function (a) {
			var c,
			d,
			e,
			f,
			g,
			k,
			l,
			n,
			r,
			s,
			t,
			v,
			w,
			y,
			A;
			a == p && (a = this.BE);
			if (0 === a.length)
				return new Uint8Array(0);
			a = (new Zlib.Inflate(a, {
					index : 0,
					$Y : q
				})).decompress();
			n = this.eca / 8;
			v = n * this.width;
			r = new Uint8Array(v * this.height);
			k = a.length;
			for (d = s = t = 0; s < k; ) {
				switch (a[s++]) {
				case 0:
					for (c = 0; c < v; c += 1)
						r[d++] = a[s++];
					break;
				case 1:
					for (f = w = 0; w < v; f = w += 1)
						c = a[s++], g = f < n ? 0 : r[d - n], r[d++] = (c + g) % 256;
					break;
				case 2:
					for (f = g = 0; g <
						v; f = g += 1)
						c = a[s++], e = (f - f % n) / n, w = t && r[(t - 1) * v + e * n + f % n], r[d++] = (w + c) % 256;
					break;
				case 3:
					for (f = A = 0; A < v; f = A += 1)
						c = a[s++], e = (f - f % n) / n, g = f < n ? 0 : r[d - n], w = t && r[(t - 1) * v + e * n + f % n], r[d++] = (c + Math.floor((g + w) / 2)) % 256;
					break;
				case 4:
					for (f = A = 0; A < v; f = A += 1)
						c = a[s++], e = (f - f % n) / n, g = f < n ? 0 : r[d - n], 0 === t ? w = y = 0 : (w = r[(t - 1) * v + e * n + f % n], y = e && r[(t - 1) * v + (e - 1) * n + f % n]), l = g + w - y, f = Math.abs(l - g), e = Math.abs(l - w), l = Math.abs(l - y), g = f <= e && f <= l ? g : e <= l ? w : y, r[d++] = (c + g) % 256;
					break;
				default:
					b(Error("Invalid filter algorithm: " + a[s - 1]))
				}
				t++
			}
			return r
		},
		h8 : function (a, c) {
			var d,
			e,
			f,
			g,
			k,
			l,
			n,
			r;
			e = this.v;
			r = p;
			d = this.HV;
			this.mN.length && (r = (f = this.z3) != p ? f : this.z3 = this.E8(), e = 4, d = m);
			f = a.data || a;
			n = f.length;
			k = r || c;
			g = l = 0;
			if (1 === e)
				for (; g < n; )
					e = r ? 4 * c[g / 4] : l, l = k[e++], f[g++] = l, f[g++] = l, f[g++] = l, f[g++] = d ? k[e++] : 255, l = e;
			else
				for (; g < n; )
					e = r ? 4 * c[g / 4] : l, f[g++] = k[e++], f[g++] = k[e++], f[g++] = k[e++], f[g++] = d ? k[e++] : 255, l = e
		},
		E8 : function () {
			var a,
			c,
			d,
			e,
			f,
			g,
			k,
			l,
			n;
			d = this.mN;
			g = this.ks.vM || [];
			f = new Uint8Array((g.length || 0) + d.length);
			c = k = a = e = 0;
			for (l = d.length; k < l; c = k += 3)
				f[e++] = d[c],
				f[e++] = d[c + 1], f[e++] = d[c + 2], f[e++] = (n = g[a++]) != p ? n : 255;
			return f
		},
		ada : function (a) {
			var c;
			a.width = this.width;
			a.height = this.height;
			a = a.getContext("2d");
			c = a.createImageData(this.width, this.height);
			this.h8(c, this.F8());
			return a.putImageData(c, 0, 0)
		}
	});
R.Rp = R.D.extend({
		MS : q,
		er : p,
		N3 : p,
		ctor : function () {
			this.N3 = []
		},
		getUint8 : function (a) {
			return this.er[a]
		},
		getUint16 : function (a) {
			return this.MS ? this.er[a + 1] << 8 | this.er[a] : this.er[a] << 8 | this.er[a + 1]
		},
		getUint32 : function (a) {
			var c = this.er;
			return this.MS ? c[a + 3] << 24 | c[a + 2] << 16 | c[a + 1] << 8 | c[a] : c[a] << 24 | c[a + 1] << 16 | c[a + 2] << 8 | c[a + 3]
		},
		U7 : function () {
			var a = this.getUint16(0);
			18761 === a ? this.VM = m : 19789 === a ? this.VM = q : (console.log(a), b(TypeError("Invalid byte order value.")));
			return this.VM
		},
		v$ : function () {
			42 !== this.getUint16(2) &&
			b(RangeError("You forgot your towel!"));
			return m
		},
		z9 : function (a) {
			var c = this.g9;
			return a in c ? c[a] : p
		},
		x9 : function (a) {
			var c = this.f9;
			if (a in c)
				return c[a];
			console.log("Unknown Field Tag:", a);
			return "Tag" + a
		},
		y9 : function (a) {
			return -1 !== ["BYTE", "ASCII", "SBYTE", "UNDEFINED"].indexOf(a) ? 1 : -1 !== ["SHORT", "SSHORT"].indexOf(a) ? 2 : -1 !== ["LONG", "SLONG", "FLOAT"].indexOf(a) ? 4 : -1 !== ["RATIONAL", "SRATIONAL", "DOUBLE"].indexOf(a) ? 8 : p
		},
		A9 : function (a, c, d, e) {
			a = [];
			var f = this.y9(c);
			if (4 >= f * d)
				this.VM === q ? a.push(e >>> 8 * (4 - f)) : a.push(e);
			else
				for (var g = 0; g < d; g++) {
					var k = f * g;
					8 <= f ? -1 !== ["RATIONAL", "SRATIONAL"].indexOf(c) ? (a.push(this.getUint32(e + k)), a.push(this.getUint32(e + k + 4))) : R.log("Can't handle this field type or size") : a.push(this.pV(f, e + k))
				}
			"ASCII" === c && a.forEach(function (a, c, d) {
				d[c] = String.fromCharCode(a)
			});
			return a
		},
		pV : function (a, c) {
			if (0 >= a)
				R.log("No bytes requested");
			else {
				if (1 >= a)
					return this.getUint8(c);
				if (2 >= a)
					return this.getUint16(c);
				if (3 >= a)
					return this.getUint32(c) >>> 8;
				if (4 >= a)
					return this.getUint32(c);
				R.log("Too many bytes requested")
			}
		},
		r9 : function (a, c, d) {
			d = d || 0;
			c += Math.floor(d / 8);
			var e = d + a;
			a = 32 - a;
			var f,
			g;
			0 >= e ? console.log("No bits requested") : 8 >= e ? (f = 24 + d, g = this.getUint8(c)) : 16 >= e ? (f = 16 + d, g = this.getUint16(c)) : 32 >= e ? (f = d, g = this.getUint32(c)) : console.log("Too many bits requested");
			return {
				bits : g << f >>> a,
				byteOffset : c + Math.floor(e / 8),
				bitOffset : e % 8
			}
		},
		WW : function (a) {
			var c = this.getUint16(a),
			d = [];
			a += 2;
			for (var e = 0; e < c; a += 12, e++) {
				var f = this.getUint16(a),
				g = this.getUint16(a + 2),
				k = this.getUint32(a + 4),
				l = this.getUint32(a + 8),
				f = this.x9(f),
				g = this.z9(g),
				k = this.A9(f, g, k, l);
				d[f] = {
					type : g,
					Sk : k
				}
			}
			this.WU.push(d);
			c = this.getUint32(a);
			0 !== c && this.WW(c)
		},
		Ar : function (a, c) {
			var d = Math.pow(2, 8 - c);
			return Math.floor(a * d + (d - 1))
		},
		Zba : function (a, c) {
			c = c || document.createElement("canvas");
			this.er = a;
			this.canvas = c;
			this.U7();
			if (this.v$()) {
				var d = this.getUint32(4);
				this.WU = [];
				this.WW(d);
				var e = this.WU[0],
				d = e.ImageWidth.Sk[0],
				f = e.ImageLength.Sk[0];
				this.canvas.width = d;
				this.canvas.height = f;
				var g = [],
				k = e.Compression ? e.Compression.Sk[0] : 1,
				l = e.SamplesPerPixel.Sk[0],
				n = [],
				r = 0,
				s = q;
				e.BitsPerSample.Sk.forEach(function (a,
						c) {
					n[c] = {
						bitsPerSample : a,
						hasBytesPerSample : q,
						bytesPerSample : h
					};
					0 === a % 8 && (n[c].rM = m, n[c].TD = a / 8);
					r += a
				}, this);
				if (0 === r % 8)
					var s = m, t = r / 8;
				var v = e.StripOffsets.Sk,
				w = v.length;
				if (e.StripByteCounts)
					var y = e.StripByteCounts.Sk;
				else
					R.log("Missing StripByteCounts!"), 1 === w ? y = [Math.ceil(d * f * r / 8)] : b(Error("Cannot recover from missing StripByteCounts"));
				for (var A = 0; A < w; A++) {
					var D = v[A];
					g[A] = [];
					for (var H = y[A], J = 0, K = 0, E = 1, F = m, G = [], B = 0, I = 0, O = 0; J < H; J += E)
						switch (k) {
						case 1:
							E = 0;
							for (G = []; E < l; E++)
								n[E].rM ? G.push(this.pV(n[E].TD,
										D + J + n[E].TD * E)) : (K = this.r9(n[E].Ey, D + J, K), G.push(K.yu), J = K.byteOffset - D, K = K.ama, b(RangeError("Cannot handle sub-byte bits per sample")));
							g[A].push(G);
							s ? E = t : (E = 0, b(RangeError("Cannot handle sub-byte bits per pixel")));
							break;
						case 32773:
							if (F) {
								var F = q,
								P = 1,
								N = 1,
								E = this.getInt8(D + J);
								0 <= E && 127 >= E ? P = E + 1 : -127 <= E && -1 >= E ? N = -E + 1 : F = m
							} else {
								for (var Y = this.getUint8(D + J), E = 0; E < N; E++)
									n[I].rM ? (O = O << 8 * B | Y, B++, B === n[I].TD && (G.push(O), O = B = 0, I++)) : b(RangeError("Cannot handle sub-byte bits per sample")), I === l && (g[A].push(G),
										G = [], I = 0);
								P--;
								0 === P && (F = m)
							}
							E = 1
						}
				}
				if (c.getContext) {
					t = this.canvas.getContext("2d");
					t.fillStyle = "rgba(255, 255, 255, 0)";
					A = e.RowsPerStrip ? e.RowsPerStrip.Sk[0] : f;
					y = g.length;
					f %= A;
					f = 0 === f ? A : f;
					P = A;
					s = 0;
					N = e.PhotometricInterpretation.Sk[0];
					k = [];
					l = 0;
					e.ExtraSamples && (k = e.ExtraSamples.Sk, l = k.length);
					if (e.ColorMap)
						var U = e.ColorMap.Sk, W = Math.pow(2, n[0].Ey);
					for (A = 0; A < y; A++) {
						A + 1 === y && (P = f);
						e = g[A].length;
						s *= A;
						for (w = v = 0; v < P, w < e; v++)
							for (D = 0; D < d; D++, w++) {
								G = g[A][w];
								B = J = H = 0;
								F = 1;
								if (0 < l)
									for (I = 0; I < l; I++)
										if (1 === k[I] || 2 === k[I]) {
											F =
												G[3 + I] / 256;
											break
										}
								switch (N) {
								case 0:
									if (n[0].rM)
										var aa = Math.pow(16, 2 * n[0].TD);
									G.forEach(function (a, c, d) {
										d[c] = aa - a
									});
								case 1:
									H = J = B = this.Ar(G[0], n[0].Ey);
									break;
								case 2:
									H = this.Ar(G[0], n[0].Ey);
									J = this.Ar(G[1], n[1].Ey);
									B = this.Ar(G[2], n[2].Ey);
									break;
								case 3:
									U === h && b(Error("Palette image missing color map"));
									G = G[0];
									H = this.Ar(U[G], 16);
									J = this.Ar(U[W + G], 16);
									B = this.Ar(U[2 * W + G], 16);
									break;
								default:
									b(RangeError("Unknown Photometric Interpretation:", N))
								}
								t.fillStyle = "rgba(" + H + ", " + J + ", " + B + ", " + F + ")";
								t.fillRect(D, s + v, 1,
									1)
							}
						s = P
					}
				}
				return this.canvas
			}
		},
		f9 : {
			315 : "Artist",
			258 : "BitsPerSample",
			265 : "CellLength",
			264 : "CellWidth",
			320 : "ColorMap",
			259 : "Compression",
			33432 : "Copyright",
			306 : "DateTime",
			338 : "ExtraSamples",
			266 : "FillOrder",
			289 : "FreeByteCounts",
			288 : "FreeOffsets",
			291 : "GrayResponseCurve",
			290 : "GrayResponseUnit",
			316 : "HostComputer",
			270 : "ImageDescription",
			257 : "ImageLength",
			256 : "ImageWidth",
			271 : "Make",
			281 : "MaxSampleValue",
			280 : "MinSampleValue",
			272 : "Model",
			254 : "NewSubfileType",
			274 : "Orientation",
			262 : "PhotometricInterpretation",
			284 : "PlanarConfiguration",
			296 : "ResolutionUnit",
			278 : "RowsPerStrip",
			277 : "SamplesPerPixel",
			305 : "Software",
			279 : "StripByteCounts",
			273 : "StripOffsets",
			255 : "SubfileType",
			263 : "Threshholding",
			282 : "XResolution",
			283 : "YResolution",
			326 : "BadFaxLines",
			327 : "CleanFaxData",
			343 : "ClipPath",
			328 : "ConsecutiveBadFaxLines",
			433 : "Decode",
			434 : "DefaultImageColor",
			269 : "DocumentName",
			336 : "DotRange",
			321 : "HalftoneHints",
			346 : "Indexed",
			347 : "JPEGTables",
			285 : "PageName",
			297 : "PageNumber",
			317 : "Predictor",
			319 : "PrimaryChromaticities",
			532 : "ReferenceBlackWhite",
			339 : "SampleFormat",
			559 : "StripRowCounts",
			330 : "SubIFDs",
			292 : "T4Options",
			293 : "T6Options",
			325 : "TileByteCounts",
			323 : "TileLength",
			324 : "TileOffsets",
			322 : "TileWidth",
			301 : "TransferFunction",
			318 : "WhitePoint",
			344 : "XClipPathUnits",
			286 : "XPosition",
			529 : "YCbCrCoefficients",
			531 : "YCbCrPositioning",
			530 : "YCbCrSubSampling",
			345 : "YClipPathUnits",
			287 : "YPosition",
			37378 : "ApertureValue",
			40961 : "ColorSpace",
			36868 : "DateTimeDigitized",
			36867 : "DateTimeOriginal",
			34665 : "Exif IFD",
			36864 : "ExifVersion",
			33434 : "ExposureTime",
			41728 : "FileSource",
			37385 : "Flash",
			40960 : "FlashpixVersion",
			33437 : "FNumber",
			42016 : "ImageUniqueID",
			37384 : "LightSource",
			37500 : "MakerNote",
			37377 : "ShutterSpeedValue",
			37510 : "UserComment",
			33723 : "IPTC",
			34675 : "ICC Profile",
			700 : "XMP",
			42112 : "GDAL_METADATA",
			42113 : "GDAL_NODATA",
			34377 : "Photoshop"
		},
		g9 : {
			1 : "BYTE",
			2 : "ASCII",
			3 : "SHORT",
			4 : "LONG",
			5 : "RATIONAL",
			6 : "SBYTE",
			7 : "UNDEFINED",
			8 : "SSHORT",
			9 : "SLONG",
			10 : "SRATIONAL",
			11 : "FLOAT",
			12 : "DOUBLE"
		}
	});
R.Rp.sI = p;
R.Rp.d = function () {
	R.Rp.sI || (R.Rp.sI = new R.Rp);
	return R.Rp.sI
};
R.xw = R.D.extend({
		hq : p,
		m : function () {
			this.hq = this.Y3();
			return m
		},
		Y3 : function () {
			try {
				if (T.localStorage)
					return T.localStorage
			} catch (a) {}

		},
		Ika : x(),
		hoa : function (a, c) {
			R.log("getBoolForKey is deprecated. Use sys.localStorage.getItem instead.");
			var d = this.gC(a);
			return "true" == d ? m : "false" == d ? q : d ? Boolean(d) : c || q
		},
		jqa : function (a, c) {
			R.log("getIntegerForKey is deprecated. Use sys.localStorage.getItem instead.");
			var d = this.gC(a);
			return d ? parseInt(d) : c || 0
		},
		B9 : function (a, c) {
			R.log("getFloatForKey is deprecated. Use sys.localStorage.getItem instead.");
			var d = this.gC(a);
			return d ? parseFloat(d) : c || 0
		},
		tpa : function (a, c) {
			R.log("getDoubleForKey is deprecated. Use sys.localStorage.getItem instead.");
			return this.B9(a, c)
		},
		Tsa : function (a, c) {
			R.log("getStringForKey is deprecated. Use sys.localStorage.getItem instead.");
			var d = this.gC(a);
			return d ? String(d) : c || ""
		},
		gC : function (a) {
			var c;
			this.hq && (c = this.hq.getItem(a));
			return c
		},
		Mza : function (a, c) {
			R.log("setBoolForKey is deprecated. Use sys.localStorage.setItem instead.");
			this.pfa(a, String(c))
		},
		xAa : function (a, c) {
			R.log("setIntegerForKey is deprecated. Use sys.localStorage.setItem instead.");
			a && this.QK(a, parseInt(c))
		},
		kea : function (a, c) {
			R.log("setFloatForKey is deprecated. Use sys.localStorage.setItem instead.");
			a && this.QK(a, parseFloat(c))
		},
		hAa : function (a, c) {
			R.log("setDoubleForKey is deprecated. Use sys.localStorage.setItem instead.");
			return this.kea(a, c)
		},
		pfa : function (a, c) {
			R.log("setStringForKey is deprecated. Use sys.localStorage.setItem instead.");
			a && this.QK(a, String(c))
		},
		QK : function (a, c) {
			this.hq && this.hq.setItem(a, c)
		}
	});
R.xw.d = function () {
	R.log("cc.UserDefault is deprecated. Use sys.localStorage instead.");
	this.bD || (this.bD = new R.xw, this.bD.m());
	return this.bD
};
R.xw.Fya = function () {
	R.hasOwnProperty("Browser") && this.hq && this.hq.clear()
};
R.xw.bD = p;
R.xw.Ska = q;
R.rO = function (a, c, d, e, f) {
	f += e;
	if (!(1 >= f)) {
		c *= 0.5;
		for (var g, k = f - 1, l = e; l < f; l++) {
			g = 2 * l;
			var n = R.b(a[2 * l], a[2 * l + 1]),
			r;
			if (0 === l)
				r = R.lF(R.Kj(R.We(n, R.b(a[2 * (l + 1)], a[2 * (l + 1) + 1]))));
			else if (l === k)
				r = R.lF(R.Kj(R.We(R.b(a[2 * (l - 1)], a[2 * (l - 1) + 1]), n)));
			else {
				r = R.b(a[2 * (l - 1)], a[2 * (l - 1) + 1]);
				var s = R.b(a[2 * (l + 1)], a[2 * (l + 1) + 1]),
				t = R.Kj(R.We(s, n)),
				v = R.Kj(R.We(r, n)),
				w = Math.acos(R.ev(t, v));
				r = w < R.Ud(70) ? R.lF(R.Kj(R.kN(t, v))) : w < R.Ud(170) ? R.Kj(R.kN(t, v)) : R.lF(R.Kj(R.We(s, r)))
			}
			r = R.cm(r, c);
			d[2 * g] = n.x + r.x;
			d[2 * g + 1] = n.y + r.y;
			d[2 *
				(g + 1)] = n.x - r.x;
			d[2 * (g + 1) + 1] = n.y - r.y
		}
		for (l = 0 == e ? 0 : e - 1; l < k; l++) {
			g = 2 * l;
			a = g + 2;
			c = R.nB(d[2 * g], d[2 * g + 1]);
			f = R.nB(d[2 * (g + 1)], d[2 * (g + 1) + 1]);
			g = R.nB(d[2 * a], d[2 * a]);
			e = R.nB(d[2 * (a + 1)], d[2 * (a + 1) + 1]);
			c = !R.uga(c.x, c.y, e.x, e.y, f.x, f.y, g.x, g.y);
			if (!c.dz && (0 > c.value || 1 < c.value))
				c.dz = m;
			c.dz && (d[2 * a] = e.x, d[2 * a + 1] = e.y, d[2 * (a + 1)] = g.x, d[2 * (a + 1) + 1] = g.y)
		}
	}
};
R.uga = function (a, c, d, e, f, g, k, l) {
	if (a == d && c == e || f == k && g == l)
		return {
			dz : q,
			value : 0
		};
	d -= a;
	e -= c;
	f -= a;
	g -= c;
	k -= a;
	l -= c;
	a = Math.sqrt(d * d + e * e);
	d /= a;
	e /= a;
	c = f * d + g * e;
	g = g * d - f * e;
	f = c;
	c = k * d + l * e;
	l = l * d - k * e;
	k = c;
	return g == l ? {
		dz : q,
		value : 0
	}
	 : {
		dz : m,
		value : (k + (f - k) * l / (l - g)) / a
	}
};
R.Zga = function (a, c) {
	c[2] = c[3] = c[6] = c[7] = c[8] = c[9] = c[11] = c[14] = 0;
	c[10] = c[15] = 1;
	c[0] = a.g;
	c[4] = a.C;
	c[12] = a.V;
	c[1] = a.c;
	c[5] = a.F;
	c[13] = a.W
};
R.Sha = function (a, c) {
	c.g = a[0];
	c.C = a[4];
	c.V = a[12];
	c.c = a[1];
	c.F = a[5];
	c.W = a[13]
};
R.jP = R.D.extend({
		ve : p,
		qc : p,
		Kg : p,
		ctor : function () {
			this.ve = p;
			this.qc = "";
			this.Kg = m
		},
		m : M(m),
		sa : x(),
		ub : x(),
		update : x(),
		Aza : x(),
		isEnabled : C("Kg"),
		Nc : z("Kg"),
		getName : C("qc"),
		uv : z("ve"),
		BV : C("ve")
	});
R.jP.create = function () {
	return new R.jP
};
R.z_ = R.D.extend({
		bg : p,
		ve : p,
		ctor : function (a) {
			this.bg = p;
			this.ve = a
		},
		sV : function (a) {
			R.e(a != p, "Argument must be non-nil");
			a = a.trim();
			return this.bg[a]
		},
		add : function (a) {
			R.e(a != p, "Argument must be non-nil");
			R.e(a.ve == p, "Component already added. It can't be added again");
			this.bg == p && (this.bg = {}, this.ve.AF());
			var c = this.bg[a.getName()];
			if (c)
				return R.e(c == p, "Component already added. It can't be added again"), q;
			a.uv(this.ve);
			this.bg[a.getName()] = a;
			a.sa();
			return m
		},
		remove : function (a) {
			R.e(a != p, "Argument must be non-nil");
			if (!this.bg)
				return q;
			var c = this.bg;
			a = a.trim();
			var d = c[a];
			if (d)
				return q;
			d.ub();
			d.uv(p);
			delete c[a];
			return m
		},
		vF : function () {
			if (this.bg) {
				var a = this.bg,
				c;
				for (c in a) {
					var d = a[c];
					d.ub();
					d.uv(p);
					delete a[c]
				}
				this.ve.gG();
				this.bg = p
			}
		},
		ska : function () {
			this.bg = {}

		},
		Y : function (a) {
			if (this.bg) {
				var c = this.bg,
				d;
				for (d in c)
					c[d].update(a)
			}
		},
		X$ : function () {
			if (!this.bg)
				return m;
			for (var a in this.bg)
				return q;
			return m
		}
	});
R.O1 = "                                           \nprecision lowp float;                    \n                                         \nvarying vec4 v_fragmentColor;            \n                                         \nvoid main()                              \n{                                        \n    gl_FragColor \x3d v_fragmentColor;      \n}                                        \n";
R.P1 = "                                               \nattribute vec4 a_position;               \nuniform    vec4 u_color;                 \nuniform float u_pointSize;               \n                                         \nvarying lowp vec4 v_fragmentColor;       \n                                         \nvoid main(void)                          \n{                                        \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize \x3d u_pointSize;          \n    v_fragmentColor \x3d u_color;           \n}";
R.C1 = "                                        \nprecision lowp float;                 \nvarying vec4 v_fragmentColor;         \n                                      \nvoid main()                           \n{                                     \n     gl_FragColor \x3d v_fragmentColor;       \n} ";
R.F1 = "                                                \nattribute vec4 a_position;                \nattribute vec4 a_color;                   \n                                          \nvarying lowp vec4 v_fragmentColor;        \n                                          \nvoid main()                               \n{                                         \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color;             \n}";
R.D1 = "                                               \n// #extension GL_OES_standard_derivatives : enable\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\nvarying mediump vec4 v_color;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\nvarying mediump vec2 v_texcoord;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    \n\nvoid main()\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n// #if defined GL_OES_standard_derivatives\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n// gl_FragColor \x3d v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord));\t\t\t\t\t\t\t    \n// #else\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ngl_FragColor \x3d v_color * step(0.0, 1.0 - length(v_texcoord));\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \n// #endif\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n}";
R.E1 = "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \nattribute mediump vec4 a_position;\t\t\t\t\t\t\t\t\t\nattribute mediump vec2 a_texcoord;\t\t\t\t\t\t\t\t\t\nattribute mediump vec4 a_color;\t\t\t\t\t\t\t\t\t\t\n\nvarying mediump vec4 v_color;\t\t\t\t\t\t\t\t\t\t\nvarying mediump vec2 v_texcoord;\t\t\t\t\t\t\t\t\t    \n\nvoid main()\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n{\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n     v_color \x3d a_color;//vec4(a_color.rgb * a_color.a, a_color.a);\t\t\t\t\n     v_texcoord \x3d a_texcoord;\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t        \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n}";
R.K1 = "                                             \nprecision lowp float;                      \n                                           \nvarying vec2 v_texCoord;                   \nuniform sampler2D CC_Texture0;             \n                                           \nvoid main()                                \n{                                          \n    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord);   \n}";
R.N1 = "                                                   \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                  \n                                            \nvarying mediump vec2 v_texCoord;           \n                                           \nvoid main()                                \n{                                          \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord \x3d a_texCoord;               \n}";
R.L1 = "                                                \nprecision lowp float;                        \n                                             \nuniform vec4 u_color;                        \nvarying vec2 v_texCoord;                     \n                                             \nuniform sampler2D CC_Texture0;               \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}";
R.M1 = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \n                                             \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord \x3d a_texCoord;                 \n}";
R.G1 = "                                               \nprecision lowp float;                        \n                                             \nvarying vec4 v_fragmentColor;                \nvarying vec2 v_texCoord;                     \nuniform sampler2D CC_Texture0;                 \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor \x3d vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    );                                       \n}";
R.H1 = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \nattribute vec4 a_color;                      \n                                             \nvarying lowp vec4 v_fragmentColor;           \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color;               \n    v_texCoord \x3d a_texCoord;                 \n}";
R.J1 = "                                               \nprecision lowp float;                        \n                                             \nvarying vec4 v_fragmentColor;                \nvarying vec2 v_texCoord;                     \nuniform sampler2D CC_Texture0;               \n                                             \nvoid main()                                  \n{                                            \n    gl_FragColor \x3d v_fragmentColor * texture2D(CC_Texture0, v_texCoord);         \n}";
R.AQ = "                                               \nattribute vec4 a_position;                   \nattribute vec2 a_texCoord;                   \nattribute vec4 a_color;                      \n                                             \nvarying lowp vec4 v_fragmentColor;           \nvarying mediump vec2 v_texCoord;             \n                                             \nvoid main()                                  \n{                                            \n    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor \x3d a_color;               \n    v_texCoord \x3d a_texCoord;                 \n}";
R.I1 = "                                                  \nprecision lowp float;                           \n                                                \nvarying vec4 v_fragmentColor;                   \nvarying vec2 v_texCoord;                        \nuniform sampler2D CC_Texture0;                  \nuniform float CC_alpha_value;                   \n                                                \nvoid main()                                     \n{                                               \n    vec4 texColor \x3d texture2D(CC_Texture0, v_texCoord);          \n                                                \n    // mimic: glAlphaFunc(GL_GREATER)           \n    //pass if ( incoming_pixel \x3e\x3d CC_alpha_value ) \x3d\x3e fail if incoming_pixel \x3c CC_alpha_value         \n                                                \n    if ( texColor.a \x3c\x3d CC_alpha_value )          \n        discard;                                \n                                                \n    gl_FragColor \x3d texColor * v_fragmentColor;  \n}";
R.oja = "                                                   \nprecision lowp float;                            \n                                                 \nvarying vec4 v_fragmentColor;                    \nvarying vec2 v_texCoord;                         \nuniform sampler2D u_texture;                     \nuniform sampler2D   u_mask;                      \n                                                 \nvoid main()                                      \n{                                                \n    vec4 texColor   \x3d texture2D(u_texture, v_texCoord);          \n    vec4 maskColor  \x3d texture2D(u_mask, v_texCoord);             \n    vec4 finalColor \x3d vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    \x3d v_fragmentColor * finalColor;              \n}";
R.fc = 0;
R.Gg = 1;
R.df = 2;
R.ika = 3;
R.jI = 0;
R.iI = 1;
R.ww = 2;
R.nI = 3;
R.mI = 4;
R.hI = 5;
R.kI = 6;
R.lI = 7;
R.bka = 8;
R.rm = "ShaderPositionTextureColor";
R.PA = "ShaderPositionTextureColorAlphaTest";
R.OA = "ShaderPositionColor";
R.iw = "ShaderPositionTexture";
R.jw = "ShaderPositionTexture_uColor";
R.HH = "ShaderPositionTextureA8Color";
R.IH = "ShaderPosition_uColor";
R.zQ = "ShaderPositionLengthTextureColor";
R.t2 = "CC_PMatrix";
R.r2 = "CC_MVMatrix";
R.s2 = "CC_MVPMatrix";
R.x2 = "CC_Time";
R.w2 = "CC_SinTime";
R.q2 = "CC_CosTime";
R.u2 = "CC_Random01";
R.v2 = "CC_Texture0";
R.zR = "CC_alpha_value";
R.Gv = "a_color";
R.Ap = "a_position";
R.ns = "a_texCoord";
R.q0 = function () {
	this.location = this.value = h;
	this.yE = {}

};
R.Xk = R.D.extend({
		qa : p,
		wc : p,
		Yg : p,
		fi : p,
		xc : p,
		dk : p,
		RT : q,
		Xg : function (a, c) {
			if (a == p)
				return q;
			for (var d = m, e = p, f = 0; f < this.dk.length; f++)
				this.dk[f].location == a && (e = this.dk[f]);
			e ? e.value == c ? d = q : e.value = c : (e = new R.q0, e.location = a, e.value = c, this.dk.push(e));
			return d
		},
		yka : function () {
			return "\x3cCCGLProgram \x3d " + this.toString() + " | Program \x3d " + this.wc.toString() + ", VertexShader \x3d " + this.Yg.toString() + ", FragmentShader \x3d " + this.fi.toString() + "\x3e"
		},
		bS : function (a, c, d) {
			if (!d || !a)
				return q;
			d = (c == this.qa.VERTEX_SHADER ?
				"precision highp float;\n" : "precision mediump float;\n") + "uniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \n//CC INCLUDES END                \n  \n" + d;
			this.qa.shaderSource(a, d);
			this.qa.compileShader(a);
			d = this.qa.getShaderParameter(a, this.qa.COMPILE_STATUS);
			d || (R.log("cocos2d: ERROR: Failed to compile shader:\n" +
					this.qa.getShaderSource(a)), c == this.qa.VERTEX_SHADER ? R.log("cocos2d: \n" + this.vga()) : R.log("cocos2d: \n" + this.i9()));
			return 1 == d
		},
		ctor : function (a) {
			this.fi = this.Yg = this.wc = p;
			this.xc = [];
			this.dk = [];
			this.qa = a || R.u
		},
		Rma : function () {
			this.dk = this.xc = this.fi = this.Yg = p;
			this.qa.deleteProgram(this.wc)
		},
		Zl : function (a, c) {
			this.wc = R.u.createProgram();
			this.fi = this.Yg = p;
			a && (this.Yg = this.qa.createShader(this.qa.VERTEX_SHADER), this.bS(this.Yg, this.qa.VERTEX_SHADER, a) || R.log("cocos2d: ERROR: Failed to compile vertex shader"));
			c && (this.fi = this.qa.createShader(this.qa.FRAGMENT_SHADER), this.bS(this.fi, this.qa.FRAGMENT_SHADER, c) || R.log("cocos2d: ERROR: Failed to compile fragment shader"));
			this.Yg && this.qa.attachShader(this.wc, this.Yg);
			R.bA();
			this.fi && this.qa.attachShader(this.wc, this.fi);
			this.dk = [];
			R.bA();
			return m
		},
		xd : function (a, c) {
			return this.Zl(a, c)
		},
		S$ : function (a, c) {
			var d = R.cc.d(),
			e = d.rE(d.Kd(a)),
			d = d.rE(d.Kd(c));
			return this.Zl(e, d)
		},
		m : function (a, c) {
			return this.S$(a, c)
		},
		Re : function (a, c) {
			this.qa.bindAttribLocation(this.wc,
				c, a)
		},
		link : function () {
			R.e(this.wc != p, "Cannot link invalid program");
			this.qa.linkProgram(this.wc);
			this.Yg && this.qa.deleteShader(this.Yg);
			this.fi && this.qa.deleteShader(this.fi);
			this.fi = this.Yg = p;
			return R.qs && !this.qa.getProgramParameter(this.wc, this.qa.LINK_STATUS) ? (R.log("cocos2d: ERROR: Failed to link program: " + this.wc), R.m$(this.wc), this.wc = p, q) : m
		},
		Sd : function () {
			R.qM(this.wc)
		},
		pga : function () {
			this.xc[R.jI] = this.qa.getUniformLocation(this.wc, R.t2);
			this.xc[R.iI] = this.qa.getUniformLocation(this.wc,
					R.r2);
			this.xc[R.ww] = this.qa.getUniformLocation(this.wc, R.s2);
			this.xc[R.nI] = this.qa.getUniformLocation(this.wc, R.x2);
			this.xc[R.mI] = this.qa.getUniformLocation(this.wc, R.w2);
			this.xc[R.hI] = this.qa.getUniformLocation(this.wc, R.q2);
			this.RT = this.xc[R.nI] != p || this.xc[R.mI] != p || this.xc[R.hI] != p;
			this.xc[R.kI] = this.qa.getUniformLocation(this.wc, R.u2);
			this.xc[R.lI] = this.qa.getUniformLocation(this.wc, R.v2);
			this.Sd();
			this.nY(this.xc[R.lI], 0)
		},
		xta : function (a) {
			R.e(a != p, "Invalid uniform name");
			R.e(0 != this.wc, "Invalid operation. Cannot get uniform location when program is not initialized");
			return this.qa.getUniformLocation(this.wc, a)
		},
		yta : function () {
			return this.xc[R.ww]
		},
		zta : function () {
			return this.xc[R.lI]
		},
		nY : function (a, c) {
			this.Xg(a, c) && this.qa.uniform1i(a, c)
		},
		$Ba : function (a, c, d) {
			this.Xg(a, [c, d]) && this.qa.uniform2i(a, c, d)
		},
		cCa : function (a, c, d, e) {
			this.Xg(a, [c, d, e]) && this.qa.uniform3i(a, c, d, e)
		},
		eCa : function (a, c, d, e, f) {
			this.Xg(a, [c, d, e, f]) && this.qa.uniform4i(a, c, d, e, f)
		},
		aCa : function (a, c) {
			this.Xg(a, c) && this.qa.uniform2iv(a, c)
		},
		dCa : function (a, c) {
			this.Xg(a, c) && this.qa.uniform3iv(a, c)
		},
		fCa : function (a,
			c) {
			this.Xg(a, c) && this.qa.uniform4iv(a, c)
		},
		YBa : function (a, c) {
			this.nY(a, c)
		},
		Ez : function (a, c) {
			this.Xg(a, c) && this.qa.uniform1f(a, c)
		},
		xfa : function (a, c, d) {
			this.Xg(a, [c, d]) && this.qa.uniform2f(a, c, d)
		},
		yfa : function (a, c, d, e) {
			this.Xg(a, [c, d, e]) && this.qa.uniform3f(a, c, d, e)
		},
		Fz : function (a, c, d, e, f) {
			this.Xg(a, [c, d, e, f]) && this.qa.uniform4f(a, c, d, e, f)
		},
		ZBa : function (a, c) {
			this.Xg(a, c) && this.qa.uniform2fv(a, c)
		},
		bCa : function (a, c) {
			this.Xg(a, c) && this.qa.uniform3fv(a, c)
		},
		Jn : function (a, c) {
			this.Xg(a, c) && this.qa.uniform4fv(a,
				c)
		},
		ZN : function (a, c) {
			this.Xg(a, c) && this.qa.uniformMatrix4fv(a, q, c)
		},
		XBa : function () {
			if (!(2 > arguments.length))
				switch (arguments.length) {
				case 2:
					this.Ez(arguments[0], arguments[1]);
					break;
				case 3:
					this.xfa(arguments[0], arguments[1], arguments[2]);
					break;
				case 4:
					this.yfa(arguments[0], arguments[1], arguments[2], arguments[3]);
					break;
				case 5:
					this.Fz(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4])
				}
		},
		Gz : function () {
			var a = new R.wa,
			c = new R.wa,
			d = new R.wa;
			R.OE(R.qm, a);
			R.OE(R.pm, c);
			R.vn(d, a, c);
			this.ZN(this.xc[R.jI],
				a.a, 1);
			this.ZN(this.xc[R.iI], c.a, 1);
			this.ZN(this.xc[R.ww], d.a, 1);
			this.RT && (a = R.o.d(), a = a.jy * a.oh, this.Fz(this.xc[R.nI], a / 10, a, 2 * a, 4 * a), this.Fz(this.xc[R.mI], a / 8, a / 4, a / 2, Math.sin(a)), this.Fz(this.xc[R.hI], a / 8, a / 4, a / 2, Math.cos(a)));
			-1 != this.xc[R.kI] && this.Fz(this.xc[R.kI], Math.random(), Math.random(), Math.random(), Math.random())
		},
		VBa : function () {
			this.qa.uniformMatrix4fv(this.xc[R.ww], q, R.I9())
		},
		WBa : function (a) {
			R.vn(a, R.pp.top, R.yn.top);
			this.qa.uniformMatrix4fv(this.xc[R.ww], q, a.a)
		},
		hh : function () {
			this.qa.uniformMatrix4fv(this.xc[R.iI],
				q, R.yn.top.a);
			this.qa.uniformMatrix4fv(this.xc[R.jI], q, R.pp.top.a)
		},
		vga : function () {
			return this.qa.getShaderInfoLog(this.Yg)
		},
		Fta : function () {
			return this.qa.getShaderInfoLog(this.Yg)
		},
		Spa : function () {
			return this.qa.getShaderInfoLog(this.Yg)
		},
		i9 : function () {
			return this.qa.getShaderInfoLog(this.fi)
		},
		Aya : function () {
			return this.qa.getProgramInfoLog(this.wc)
		},
		Jra : function () {
			return this.qa.getProgramInfoLog(this.wc)
		},
		reset : function () {
			this.fi = this.Yg = p;
			this.xc = [];
			this.qa.deleteProgram(this.wc);
			this.wc = p;
			for (var a =
					0; a < this.dk.length; a++)
				this.dk[a].value = p, this.dk[a] = p;
			this.dk = []
		},
		Pr : C("wc"),
		zN : x(),
		dm : x()
	});
R.Xk.create = function (a, c) {
	var d = new R.Xk;
	return d.m(a, c) ? d : p
};
R.hka = 0;
R.Gf = 1;
R.lB = 2;
R.Ps = 4;
R.Tp = R.Gf | R.lB | R.Ps;
R.Tha = 0;
R.gS = -1;
R.qL = q;
R.pL = q;
R.rL = q;
R.Rj && (R.X0 = 16, R.Qw = -1, R.st = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], R.ct = -1, R.bt = -1, R.D2 = 0, R.WH && (R.IT = 0));
R.Wta = function () {
	R.eaa();
	R.gS = -1;
	R.qL = q;
	R.pL = q;
	R.rL = q;
	if (R.Rj) {
		R.Qw = -1;
		for (var a = 0; a < R.X0; a++)
			R.st[a] = -1;
		R.ct = -1;
		R.bt = -1;
		R.D2 = 0
	}
};
R.qM = function (a) {
	a !== R.Qw && (R.Qw = a, R.u.useProgram(a))
};
R.Rj || (R.qM = function (a) {
	R.u.useProgram(a)
});
R.m$ = function (a) {
	R.Rj && a === R.Qw && (R.Qw = -1);
	pa.deleteProgram(a)
};
R.Fi = function (a, c) {
	if (a !== R.ct || c !== R.bt)
		R.ct = a, R.bt = c, R.EF(a, c)
};
R.EF = function (a, c) {
	var d = R.u;
	a === d.ONE && c === d.ZERO ? d.disable(d.BLEND) : (d.enable(d.BLEND), R.u.blendFunc(a, c))
};
R.l$ = function (a, c) {
	if (a !== R.ct || c !== R.bt) {
		R.ct = a;
		R.bt = c;
		var d = R.u;
		a === d.ONE && c === d.ZERO ? d.disable(d.BLEND) : (d.enable(d.BLEND), d.blendFuncSeparate(d.SRC_ALPHA, c, a, c))
	}
};
R.Rj || (R.Fi = R.EF);
R.Tta = function () {
	var a = R.u;
	a.blendEquation(a.FUNC_ADD);
	R.Rj ? R.EF(R.ct, R.bt) : R.EF(a.Ac, a.zc)
};
R.aY = function () {
	R.gS = -1
};
R.Ld = function (a) {
	var c = R.u,
	d = a & R.Gf;
	d !== R.qL && (d ? c.enableVertexAttribArray(R.fc) : c.disableVertexAttribArray(R.fc), R.qL = d);
	d = a & R.lB;
	d !== R.pL && (d ? c.enableVertexAttribArray(R.Gg) : c.disableVertexAttribArray(R.Gg), R.pL = d);
	a &= R.Ps;
	a !== R.rL && (a ? c.enableVertexAttribArray(R.df) : c.disableVertexAttribArray(R.df), R.rL = a)
};
R.Ih = function (a) {
	R.pM(0, a)
};
R.pM = function (a, c) {
	if (R.st[a] != c) {
		R.st[a] = c;
		var d = R.u;
		d.activeTexture(d.TEXTURE0 + a);
		c ? d.bindTexture(d.TEXTURE_2D, c.Be) : d.bindTexture(d.TEXTURE_2D, p)
	}
};
R.Rj || (R.pM = function (a, c) {
	var d = R.u;
	d.activeTexture(d.TEXTURE0 + a);
	c ? d.bindTexture(d.TEXTURE_2D, c.Be) : d.bindTexture(d.TEXTURE_2D, p)
});
R.Uta = function (a) {
	R.n$(a)
};
R.n$ = function (a) {
	R.Rj && a == R.st[0] && (R.st[0] = -1);
	R.u.deleteTexture(a)
};
R.Sta = function (a) {
	R.WH && (R.Rj && R.IT != a) && (R.IT = a)
};
R.Vta = x();
R.CH = 0;
R.DH = 1;
R.AH = 2;
R.BH = 3;
R.FH = 4;
R.EH = 5;
R.GH = 6;
R.yQ = 7;
R.pja = 8;
R.Xx = p;
R.Ad = R.D.extend({
		we : p,
		i4 : function () {
			this.Daa();
			return m
		},
		Ng : function (a, c) {
			switch (c) {
			case R.CH:
				a.Zl(R.AQ, R.J1);
				a.Re(R.Ap, R.fc);
				a.Re(R.Gv, R.Gg);
				a.Re(R.ns, R.df);
				break;
			case R.DH:
				a.Zl(R.AQ, R.I1);
				a.Re(R.Ap, R.fc);
				a.Re(R.Gv, R.Gg);
				a.Re(R.ns, R.df);
				break;
			case R.AH:
				a.Zl(R.F1, R.C1);
				a.Re(R.Ap, R.fc);
				a.Re(R.Gv, R.Gg);
				break;
			case R.BH:
				a.Zl(R.N1, R.K1);
				a.Re(R.Ap, R.fc);
				a.Re(R.ns, R.df);
				break;
			case R.FH:
				a.Zl(R.M1, R.L1);
				a.Re(R.Ap, R.fc);
				a.Re(R.ns, R.df);
				break;
			case R.EH:
				a.Zl(R.H1, R.G1);
				a.Re(R.Ap, R.fc);
				a.Re(R.Gv, R.Gg);
				a.Re(R.ns,
					R.df);
				break;
			case R.GH:
				a.Zl(R.P1, R.O1);
				a.Re("aVertex", R.fc);
				break;
			case R.yQ:
				a.Zl(R.E1, R.D1);
				a.Re(R.Ap, R.fc);
				a.Re(R.ns, R.df);
				a.Re(R.Gv, R.Gg);
				break;
			default:
				R.log("cocos2d: cc.ShaderCache._loadDefaultShader, error shader type");
				return
			}
			a.link();
			a.pga()
		},
		ctor : function () {
			this.we = {}

		},
		Daa : function () {
			var a = new R.Xk;
			this.Ng(a, R.CH);
			this.we[R.rm] = a;
			this.we.ShaderPositionTextureColor = a;
			a = new R.Xk;
			this.Ng(a, R.DH);
			this.we[R.PA] = a;
			this.we.ShaderPositionTextureColorAlphaTest = a;
			a = new R.Xk;
			this.Ng(a, R.AH);
			this.we[R.OA] =
				a;
			this.we.ShaderPositionColor = a;
			a = new R.Xk;
			this.Ng(a, R.BH);
			this.we[R.iw] = a;
			this.we.ShaderPositionTexture = a;
			a = new R.Xk;
			this.Ng(a, R.FH);
			this.we[R.jw] = a;
			this.we.ShaderPositionTextureUColor = a;
			a = new R.Xk;
			this.Ng(a, R.EH);
			this.we[R.HH] = a;
			this.we.ShaderPositionTextureA8Color = a;
			a = new R.Xk;
			this.Ng(a, R.GH);
			this.we[R.IH] = a;
			this.we.ShaderPositionUColor = a;
			a = new R.Xk;
			this.Ng(a, R.yQ);
			this.we[R.zQ] = a;
			this.we.ShaderPositionLengthTextureColor = a
		},
		Pya : function () {
			var a = this.Tc(R.rm);
			a.reset();
			this.Ng(a, R.CH);
			a = this.Tc(R.PA);
			a.reset();
			this.Ng(a, R.DH);
			a = this.Tc(R.OA);
			a.reset();
			this.Ng(a, R.AH);
			a = this.Tc(R.iw);
			a.reset();
			this.Ng(a, R.BH);
			a = this.Tc(R.jw);
			a.reset();
			this.Ng(a, R.FH);
			a = this.Tc(R.HH);
			a.reset();
			this.Ng(a, R.EH);
			a = this.Tc(R.IH);
			a.reset();
			this.Ng(a, R.GH)
		},
		Tc : function (a) {
			return this.we[a]
		},
		Pr : function (a) {
			return this.we[a]
		},
		Jla : function (a, c) {
			this.we[c] = a
		}
	});
R.Ad.d = function () {
	R.Xx || (R.Xx = new R.Ad, R.Xx.i4());
	return R.Xx
};
R.Ad.Jya = function () {
	R.Xx = p
};
R.QP = -1;
R.Bia = p;
R.Cia = p;
R.jda = 1;
R.r = R.D.extend({
		Ra : 0,
		JD : 0,
		Ug : 0,
		sj : 0,
		ia : 1,
		ra : 1,
		Z : p,
		Fd : 0,
		Gd : 0,
		k : p,
		Ua : m,
		nh : p,
		Gb : p,
		ea : p,
		Qf : q,
		Cc : p,
		ij : q,
		ud : R.QP,
		QT : p,
		ty : p,
		Bh : m,
		tC : m,
		yB : m,
		rla : p,
		$c : p,
		FS : p,
		Of : q,
		Yb : p,
		Pg : 0,
		aj : p,
		xh : p,
		DS : q,
		tm : q,
		Rs : p,
		Em : p,
		QJ : q,
		si : 0,
		Sq : 0,
		LJ : function () {
			this.nh = R.b(0, 0);
			this.Gb = R.b(0, 0);
			this.ea = R.size(0, 0);
			this.Z = R.b(0, 0);
			this.k = [];
			var a = R.o.d();
			this.aj = a.Di();
			this.xh = a.sg();
			this.DS = m;
			this.Rs = {
				g : 1,
				c : 0,
				C : 0,
				F : 1,
				V : 0,
				W : 0
			};
			this.Em = new R.z_(this)
		},
		m : function () {
			this.DS === q && this.LJ();
			return m
		},
		Xh : function (a, c) {
			if (a && 0 !== a.length) {
				var d,
				e = a.length,
				f;
				d = R.r.kh;
				switch (c) {
				case d.sa:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.sa();
					break;
				case d.ub:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.ub();
					break;
				case d.Ii:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.Ii();
					break;
				case d.Eh:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.Eh();
					break;
				case d.Vf:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.Vf();
					break;
				case d.Ji:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.Ji();
					break;
				case d.Ee:
					for (d = 0; d < e; d++)
						(f = a[d]) && f.Ee();
					break;
				default:
					b("Unknown callback function")
				}
			}
		},
		Ha : p,
		c6 : function () {
			this.Tq();
			this.Bh === q && (this.Bh = this.tC = m)
		},
		d6 : function () {
			this.Bh ===
			q && (this.Bh = this.tC = m)
		},
		xsa : C("Fd"),
		xv : function (a) {
			this.Fd = a;
			this.Ha()
		},
		ysa : C("Gd"),
		yv : function (a) {
			this.Gd = a;
			this.Ha()
		},
		Pta : C("Ra"),
		du : z("Ra"),
		XF : function (a) {
			this.du(a);
			this.Cc && this.Cc.kv(this, a)
		},
		Gta : C("JD"),
		WF : z("JD"),
		Sy : function () {
			R.e(this.Ug == this.sj, "CCNode#rotation. RotationX !\x3d RotationY. Don't know which one to return");
			return this.Ug
		},
		he : function (a) {
			this.Ug = this.sj = a;
			this.si = 0.017453292519943295 * this.Ug;
			this.Sq = 0.017453292519943295 * this.sj;
			this.Ha()
		},
		fsa : C("Ug"),
		RF : function (a) {
			this.Ug =
				a;
			this.si = 0.017453292519943295 * this.Ug;
			this.Ha()
		},
		gsa : C("sj"),
		SF : function (a) {
			this.sj = a;
			this.Sq = 0.017453292519943295 * this.sj;
			this.Ha()
		},
		qE : function () {
			R.e(this.ia == this.ra, "cc.Node#scale. ScaleX !\x3d ScaleY. Don't know which one to return");
			return this.ia
		},
		jd : function (a, c) {
			this.ia = a;
			this.ra = c || 0 === c ? c : a;
			this.Ha()
		},
		U9 : C("ia"),
		fh : function (a) {
			this.ia = a;
			this.Ha()
		},
		V9 : C("ra"),
		yg : function (a) {
			this.ra = a;
			this.Ha()
		},
		q : function (a, c) {
			var d = this.Z;
			2 == arguments.length ? (d.x = a, d.y = c) : 1 == arguments.length && (d.x = a.x,
				d.y = a.y);
			this.Ha()
		},
		rc : function () {
			return R.b(this.Z.x, this.Z.y)
		},
		Gj : function () {
			return this.Z.x
		},
		Bz : function (a) {
			this.Z.x = a;
			this.Ha()
		},
		Hj : function () {
			return this.Z.y
		},
		Cz : function (a) {
			this.Z.y = a;
			this.Ha()
		},
		Coa : function () {
			return this.k.length
		},
		Aoa : C("k"),
		baa : C("Ua"),
		Aa : function (a) {
			this.Ua = a;
			this.Ha()
		},
		mn : function () {
			return R.b(this.nh.x, this.nh.y)
		},
		R : function (a) {
			var c = this.nh;
			if (!R.iv(a, c)) {
				c.x = a.x;
				c.y = a.y;
				var c = this.Gb,
				d = this.ea;
				c.x = d.width * a.x;
				c.y = d.height * a.y;
				this.Ha()
			}
		},
		Nu : function () {
			return R.b(this.Gb.x,
				this.Gb.y)
		},
		n : function () {
			return R.size(this.ea.width, this.ea.height)
		},
		ma : function (a) {
			var c = this.ea;
			if (!R.cO(a, c)) {
				c.width = a.width;
				c.height = a.height;
				a = this.Gb;
				var d = this.nh;
				a.x = c.width * d.x;
				a.y = c.height * d.y;
				this.Ha()
			}
		},
		ava : C("Qf"),
		getParent : C("Cc"),
		gs : z("Cc"),
		Jua : C("ij"),
		Gi : function (a) {
			a != this.ij && (this.ij = a, this.Ha())
		},
		c$ : C("ud"),
		up : z("ud"),
		getUserData : C("QT"),
		setUserData : z("QT"),
		Cta : C("ty"),
		oY : function (a) {
			this.ty != a && (this.ty = a)
		},
		kra : C("Pg"),
		tv : z("Pg"),
		Di : function () {
			this.aj || (this.aj = R.o.d().Di());
			return this.aj
		},
		sda : function (a) {
			this.aj != a && (this.Bv(), this.aj = a)
		},
		sg : function () {
			this.xh || (this.xh = R.o.d().sg());
			return this.xh
		},
		Zea : function (a) {
			this.xh != a && (this.Rz(), this.xh = a)
		},
		bd : function () {
			var a = R.rect(0, 0, this.ea.width, this.ea.height);
			return R.hl(a, this.Ve())
		},
		Eh : function () {
			this.Bv();
			this.Rz();
			this.Xh(this.k, R.r.kh.Eh)
		},
		description : function () {
			return "\x3ccc.Node | Tag \x3d" + this.ud + "\x3e"
		},
		Ej : function (a) {
			var c = this.k;
			if (c != p)
				for (var d = 0; d < c.length; d++) {
					var e = c[d];
					if (e && e.ud == a)
						return e
				}
			return p
		},
		I : function (a, c, d) {
			a === this ? console.warn("cc.Node.addChild: An Node can't be added as a child of itself.") : (R.e(a != p, "Argument must be non-nil"), a.Cc !== p ? R.e(a.Cc === p, "child already added. It can't be added again") : (c = c != p ? c : a.Ra, a.ud = d != p ? d : a.ud, this.w4(a, c), a.Cc = this, this.Qf && (a.sa(), this.QJ && a.Ii())))
		},
		qp : function (a) {
			this.Cc && (a == p && (a = m), this.Cc.removeChild(this, a))
		},
		Uca : function (a) {
			R.log("removeFromParentAndCleanup is deprecated. Use removeFromParent instead");
			this.qp(a)
		},
		removeChild : function (a,
			c) {
			0 !== this.k.length && (c == p && (c = m), -1 < this.k.indexOf(a) && this.A3(a, c), this.Ha())
		},
		tN : function (a, c) {
			R.e(a != R.QP, "Invalid tag");
			var d = this.Ej(a);
			d == p ? R.log("cocos2d: removeChildByTag(tag \x3d " + a + "): child not found!") : this.removeChild(d, c)
		},
		Rya : function (a) {
			R.log("removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead");
			this.wg(a)
		},
		wg : function (a) {
			var c = this.k;
			if (c != p) {
				a == p && (a = m);
				for (var d = 0; d < c.length; d++) {
					var e = c[d];
					e && (this.Qf && (e.Ji(), e.ub()), a && e.Eh(), e.gs(p))
				}
				this.k.length =
					0
			}
		},
		A3 : function (a, c) {
			this.Qf && (a.Ji(), a.ub());
			c && a.Eh();
			a.gs(p);
			R.ke(this.k, a)
		},
		w4 : function (a, c) {
			this.Of = m;
			this.k.push(a);
			a.du(c)
		},
		kv : function (a, c) {
			R.e(a != p, "Child must be non-nil");
			this.Of = m;
			a.tv(R.jda++);
			a.du(c);
			this.Ha()
		},
		Ee : function () {
			if (this.Of) {
				var a = this.k,
				c,
				d,
				e = a.length,
				f;
				for (c = 0; c < e; c++) {
					var g = a[c];
					d = c - 1;
					for (f = a[d]; 0 <= d && (g.Ra < f.Ra || g.Ra == f.Ra && g.Pg < f.Pg); )
						a[d + 1] = f, d -= 1, f = a[d];
					a[d + 1] = g
				}
				this.Of = q
			}
		},
		fa : x(),
		Oz : function () {
			this.Cc != p && (this.Cc.Oz(), this.Cc.transform())
		},
		sa : function () {
			this.QJ =
				q;
			this.Qf = m;
			this.Xh(this.k, R.r.kh.sa);
			this.wF()
		},
		Ii : function () {
			this.QJ = m;
			this.Xh(this.k, R.r.kh.Ii)
		},
		Ji : function () {
			this.Xh(this.k, R.r.kh.Ji)
		},
		ub : function () {
			this.Qf = q;
			this.oF();
			this.Xh(this.k, R.r.kh.ub);
			this.Em.vF()
		},
		ab : function (a) {
			R.e(a != p, "Argument must be non-nil");
			this.Di().e7(a, this, !this.Qf);
			return a
		},
		Bv : function () {
			this.Di().hX(this)
		},
		CY : function (a) {
			this.Di().gX(a)
		},
		Pfa : function (a) {
			R.e(a != R.ms, "Invalid tag");
			this.Di().Qca(a, this)
		},
		jE : function (a) {
			R.e(a != R.ms, "Invalid tag");
			return this.Di().jE(a,
				this)
		},
		Hxa : function () {
			return this.Di().Qaa(this)
		},
		AF : function () {
			this.rX(0)
		},
		rX : function (a) {
			this.sg().qX(this, a, !this.Qf)
		},
		gG : function () {
			this.sg().Ev(this)
		},
		ds : function (a, c, d, e) {
			c = c || 0;
			R.e(a, "Argument must be non-nil");
			R.e(0 <= c, "Argument must be positive");
			d = d == p ? R.Is : d;
			this.sg().pX(this, a, c, d, e || 0, !this.Qf)
		},
		vza : function (a, c) {
			this.ds(a, 0, 0, c)
		},
		yp : function (a) {
			a && this.sg().PY(this, a)
		},
		Rz : function () {
			this.sg().OY(this)
		},
		wF : function () {
			this.sg().as(this);
			this.Di().as(this)
		},
		oF : function () {
			this.sg().pz(this);
			this.Di().pz(this)
		},
		tda : function (a) {
			this.Rs = a;
			this.tm = this.Bh = m
		},
		mya : function () {
			this.tC && (this.FS = R.nG(this.Ve()), this.tC = q);
			return this.FS
		},
		zn : function () {
			for (var a = this.Ve(), c = this.Cc; c != p; c = c.getParent())
				a = R.Cf(a, c.Ve());
			return a
		},
		yga : function () {
			return R.nG(this.zn())
		},
		Bk : function (a) {
			return R.Lp(a, this.yga())
		},
		hn : function (a) {
			return R.Lp(a, this.zn())
		},
		f8 : function (a) {
			return R.We(this.Bk(a), this.Gb)
		},
		Ama : function (a) {
			a = R.ug(a, this.Gb);
			return this.hn(a)
		},
		wka : function (a) {
			a = this.hn(a);
			return R.o.d().g8(a)
		},
		Sl : function (a) {
			return this.Bk(a.Ic)
		},
		Bma : function (a) {
			a = a.Ic;
			a = R.o.d().e8(a);
			return this.f8(a)
		},
		update : function (a) {
			this.Em && !this.Em.X$() && this.Em.Y(a)
		},
		Vf : function () {
			this.Xh(this.k, R.r.kh.Vf)
		},
		zN : x(),
		dm : x(),
		sV : function (a) {
			return this.Em.sV(a)
		},
		Bla : function (a) {
			this.Em.add(a)
		},
		aza : function (a) {
			return this.Em.remove(a)
		},
		Sya : function () {
			this.Em.vF()
		},
		FT : p,
		ZK : p,
		GJ : p,
		gt : p,
		se : p,
		ctor : p,
		Zj : function () {
			this.LJ()
		},
		$j : function () {
			this.LJ();
			var a = new R.wa;
			a.a[2] = a.a[3] = a.a[6] = a.a[7] = a.a[8] = a.a[9] = a.a[11] = a.a[14] =
				0;
			a.a[10] = a.a[15] = 1;
			this.FT = a;
			this.GJ = 0;
			this.ZK = new R.wa
		},
		Y : p,
		wy : function (a) {
			if (this.Ua) {
				a = a || R.u;
				var c,
				d = this.k,
				e;
				a.save();
				this.transform(a);
				var f = d.length;
				if (0 < f) {
					this.Ee();
					for (c = 0; c < f; c++)
						if (e = d[c], 0 > e.Ra)
							e.Y(a);
						else
							break;
					for (this.fa(a); c < f; c++)
						d[c].Y(a)
				} else
					this.fa(a);
				this.Pg = 0;
				a.restore()
			}
		},
		xy : function () {
			if (this.Ua) {
				var a = R.u,
				c,
				d = R.ad;
				d.stack.push(d.top);
				R.un(this.ZK, d.top);
				d.top = this.ZK;
				var e = this.se;
				e && e.bj && e.xu();
				this.transform();
				var f = this.k;
				if (f && 0 < f.length) {
					var g = f.length;
					this.Ee();
					for (c = 0; c < g; c++)
						if (f[c] && 0 > f[c].Ra)
							f[c].Y();
						else
							break;
					for (this.fa(a); c < g; c++)
						f[c] && f[c].Y()
				} else
					this.fa(a);
				this.Pg = 0;
				e && e.bj && e.uu(this);
				d.top = d.stack.pop()
			}
		},
		transform : p,
		G6 : function (a) {
			a = a || R.u;
			var c = this.Ve();
			a.transform(c.g, c.C, c.c, c.F, c.V, -c.W)
		},
		H6 : function () {
			var a = this.FT,
			c = R.ad.top,
			d = this.Ve(),
			e = a.a;
			e[0] = d.g;
			e[4] = d.C;
			e[12] = d.V;
			e[1] = d.c;
			e[5] = d.F;
			e[13] = d.W;
			e[14] = this.JD;
			R.vn(c, c, a);
			this.gt != p && !(this.se != p && this.se.tg()) && (a = this.Gb.x, c = this.Gb.y, 0 !== a || 0 !== c ? (R.PE(R.Th(a), R.Th(c)), this.gt.WM(),
					R.PE(R.Th(-a), R.Th(-c))) : this.gt.WM())
		},
		Ve : p,
		bK : function () {
			this.$c || (this.$c = {
					g : 1,
					c : 0,
					C : 0,
					F : 1,
					V : 0,
					W : 0
				});
			if (this.Bh) {
				var a = this.$c;
				a.V = this.Z.x;
				a.W = this.Z.y;
				var c = 1,
				d = 0;
				this.Ug && (c = Math.cos(this.si), d = Math.sin(this.si));
				a.g = a.F = c;
				a.c = -d;
				a.C = d;
				var e = this.ia,
				f = this.ra,
				g = this.Gb.x,
				k = this.Gb.y,
				l = 1E-6 > e && -1E-6 < e ? 1E-6 : e,
				n = 1E-6 > f && -1E-6 < f ? 1E-6 : f;
				if (this.Fd || this.Gd) {
					var r = Math.tan(-this.Fd * Math.PI / 180),
					s = Math.tan(-this.Gd * Math.PI / 180),
					t = k * r * l,
					v = g * s * n;
					a.g = c + -d * s;
					a.c = c * r + -d;
					a.C = d + c * s;
					a.F = d * r + c;
					a.V += c * t + -d *
					v;
					a.W += d * t + c * v
				}
				if (1 !== e || 1 !== f)
					a.g *= l, a.C *= l, a.c *= n, a.F *= n;
				a.V += c * -g * l + -d * k * n;
				a.W -= d * -g * l + c * k * n;
				this.ij && (a.V += g, a.W += k);
				this.tm && (this.$c = R.Cf(this.$c, this.Rs), this.tm = q);
				this.Bh = q
			}
			return this.$c
		},
		R4 : function () {
			if (this.Bh) {
				var a = this.Z.x,
				c = this.Z.y,
				d = this.Gb.x,
				e = -d,
				f = this.Gb.y,
				g = -f,
				k = this.ia,
				l = this.ra;
				this.ij && (a += d, c += f);
				var n = 1,
				r = 0,
				s = 1,
				t = 0;
				if (0 !== this.Ug || 0 !== this.sj)
					n = Math.cos(-this.si), r = Math.sin(-this.si), s = Math.cos(-this.Sq), t = Math.sin(-this.Sq);
				var v = this.Fd || this.Gd;
				if (!v && (0 !== d || 0 !== f))
					a +=
					s * e * k + -r * g * l, c += t * e * k + n * g * l;
				a = {
					g : s * k,
					c : t * k,
					C : -r * l,
					F : n * l,
					V : a,
					W : c
				};
				if (v && (a = R.Cf({
								g : 1,
								c : Math.tan(R.Ud(this.Gd)),
								C : Math.tan(R.Ud(this.Fd)),
								F : 1,
								V : 0,
								W : 0
							}, a), 0 !== d || 0 !== f))
					a = R.Wz(a, e, g);
				this.tm && (a = R.Cf(a, this.Rs), this.tm = q);
				this.$c = a;
				this.Bh = q
			}
			return this.$c
		},
		Tq : function () {
			this.yB = m;
			this.Cc && this.Cc.Tq()
		},
		Nr : function () {
			this.gt || (this.gt = new R.Lv);
			return this.gt
		},
		ee : C("se"),
		mea : z("se"),
		Ru : C("Yb"),
		Ye : z("Yb"),
		Vpa : C("GJ"),
		qAa : z("GJ"),
		nV : function () {
			var a = R.rect(0, 0, this.ea.width, this.ea.height),
			a = R.Yi(a, this.zn()),
			a = R.rect(0 | a.x - 4, 0 | a.y - 4, 0 | a.width + 8, 0 | a.height + 8);
			if (!this.k)
				return a;
			for (var c = this.k, d = 0; d < c.length; d++) {
				var e = c[d];
				e && e.Ua && (e = e.nV()) && (a = R.rN(a, e))
			}
			return a
		}
	});
R.ua.tc ? (Q = R.r.prototype, Q.ctor = R.r.prototype.$j, Q.Ha = R.r.prototype.d6, Q.Y = R.r.prototype.xy, Q.transform = R.r.prototype.H6, Q.Ve = R.r.prototype.R4) : (Q = R.r.prototype, Q.ctor = R.r.prototype.Zj, Q.Ha = R.r.prototype.c6, Q.Y = R.r.prototype.wy, Q.transform = R.r.prototype.G6, Q.Ve = R.r.prototype.bK);
R.r.create = function () {
	return new R.r
};
R.r.kh = {
	sa : 1,
	ub : 2,
	Eh : 3,
	Ii : 4,
	Vf : 5,
	Ji : 6,
	Ee : 7
};
R.Wa = R.r.extend({
		Fc : m,
		bb : 255,
		nf : 255,
		gb : p,
		Qc : p,
		$f : q,
		ag : q,
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.nf = this.bb = 255;
			this.Qc = this.gb = R.Yf;
			this.ag = this.$f = q
		},
		rg : C("nf"),
		vV : C("bb"),
		U : function (a) {
			this.bb = this.nf = a;
			if (this.ag) {
				a = 255;
				var c = this.Cc;
				c && (c.Fc && c.bz()) && (a = c.bb);
				this.Bf(a)
			}
		},
		Bf : function (a) {
			this.bb = this.nf * a / 255;
			if (this.ag) {
				a = this.k;
				for (var c = 0; c < a.length; c++) {
					var d = a[c];
					d && d.Fc && d.Bf(this.bb)
				}
			}
		},
		bz : C("ag"),
		Gn : z("ag"),
		Lb : function () {
			var a = this.Qc;
			return new R.mc(a.i, a.h, a.c)
		},
		uV : C("gb"),
		L : function (a) {
			var c = this.gb,
			d = this.Qc;
			c.i = a.i;
			c.h = a.h;
			c.c = a.c;
			d.i = a.i;
			d.h = a.h;
			d.c = a.c;
			this.$f && (a = R.Td(), (c = this.Cc) && (c.Fc && c.az()) && (a = c.gb), this.Af(a))
		},
		Af : function (a) {
			var c = this.gb,
			d = this.Qc;
			c.i = d.i * a.i / 255;
			c.h = d.h * a.h / 255;
			c.c = d.c * a.c / 255;
			if (this.$f) {
				a = this.k;
				for (d = 0; d < a.length; d++) {
					var e = a[d];
					e && e.Fc && e.Af(c)
				}
			}
		},
		az : C("$f"),
		Fn : z("$f"),
		Rd : x(),
		Ij : M(q)
	});
R.Vc = {};
R.Vc.aU = function (a) {
	for (var c in R.Vc.XM)
		a[c] = R.Vc.XM[c]
};
R.Vc.XM = {
	q : function (a, c) {
		2 == arguments.length ? (this.Z.x = a, this.Z.y = c) : this.Z = a;
		this.Ha();
		this.aa.Pz(this.Z.x, -this.Z.y)
	},
	Cz : function (a) {
		this.Z.y = a;
		this.Ha();
		this.aa.Pz(this.Z.x, -this.Z.y)
	},
	Bz : function (a) {
		this.Z.x = a;
		this.Ha();
		this.aa.Pz(this.Z.x, -this.Z.y)
	},
	jd : function (a, c) {
		this.ia = a;
		this.ra = c || a;
		this.Ha();
		this.aa.em(this.ia, this.ra)
	},
	fh : function (a) {
		this.ia = a;
		this.Ha();
		this.aa.em(this.ia, this.ra)
	},
	yg : function (a) {
		this.ra = a;
		this.Ha();
		this.aa.em(this.ia, this.ra)
	},
	R : function (a) {
		this.nh = a;
		this.Gb = R.b(this.ea.width *
				this.nh.x, this.ea.height * this.nh.y);
		this.aa.style[R.Wb.gv + "TransformOrigin"] = "" + this.Gb.x + "px " + -this.Gb.y + "px";
		this.ij ? (this.aa.style.marginLeft = 0, this.aa.style.marginBottom = 0) : (this.aa.style.marginLeft = this.hva ? 0 : -this.Gb.x + "px", this.aa.style.marginBottom = -this.Gb.y + "px");
		this.Ha()
	},
	ma : function (a) {
		R.cO(a, this.ea) || (this.ea = a, this.Gb = R.b(this.ea.width * this.nh.x, this.ea.height * this.nh.y), this.aa.width = a.width, this.aa.height = a.height, this.R(this.mn()));
		this.canvas && (this.canvas.width = this.ea.width,
			this.canvas.height = this.ea.height);
		this.Ha();
		this.Kca()
	},
	he : function (a) {
		this.lT != a && (this.Ug = this.sj = a, this.si = this.Ug * (Math.PI / 180), this.Sq = this.sj * (Math.PI / 180), this.Ha(), this.aa.rotate(a))
	},
	xv : function (a) {
		this.Fd = a;
		this.Ha();
		this.aa.hY(this.Fd, this.Gd)
	},
	yv : function (a) {
		this.Gd = a;
		this.Ha();
		this.aa.hY(this.Fd, this.Gd)
	},
	Aa : function (a) {
		this.Ua = a;
		this.Ha();
		this.aa && (this.aa.style.display = a ? "block" : "none")
	},
	du : function (a) {
		this.Ra = a;
		this.Ha();
		this.aa && (this.aa.zIndex = a)
	},
	gs : function (a) {
		this.Cc = a;
		a !== p &&
		(a.R(a.mn()), this.Ha(), R.Vc.nF(this))
	},
	wF : function () {
		this.sg().as(this);
		this.Di().as(this);
		this.aa && !this.aa.parentNode && (this.getParent() ? R.Vc.nF(this) : this.aa.tr(R.qg));
		this.aa && (this.aa.style.visibility = "visible")
	},
	oF : function () {
		this.sg().pz(this);
		this.Di().pz(this);
		this.aa && (this.aa.style.visibility = "hidden")
	},
	Eh : function () {
		this.Bv();
		this.Rz();
		this.Xh(this.k, R.r.kh.Eh);
		this.aa && this.aa.remove()
	},
	Uca : function () {
		this.aa.remove()
	},
	U : function (a) {
		this.Hc = a;
		this.aa.style.opacity = a / 255
	},
	Kca : function () {
		if (this.aW) {
			var a =
				this.k;
			this.k = [];
			R.t.prototype.Y.call(this, this.Du);
			this.k = a
		} else
			R.t.prototype.Y.call(this, this.Du)
	}
};
R.Vc.J5 = function () {
	var a = R.Wb("#EGLViewDiv");
	if (a) {
		var c = R.uc.d(),
		d = c.Ke,
		e = c.Tf,
		f = c.Rc,
		g = d.width,
		k = d.height;
		0 === d.width && 0 === d.height && (g = f.width, k = f.height);
		var d = e.size.width,
		l = e.size.height;
		0 === e.size.width && 0 === e.size.height && (d = f.width, l = f.height);
		a.style.position = "absolute";
		a.style.width = g + "px";
		a.style.maxHeight = k + "px";
		a.style.margin = 0;
		a.em(c.ia, c.ra);
		a.style.left = d < f.width ? (d - g) / 2 + (f.width - d) / 2 + "px" : (d - g) / 2 + "px";
		a.style.bottom = l < f.height ? (f.height - l) / 2 + "px" : "0px"
	}
};
R.Vc.nF = function (a) {
	var c = a.getParent();
	if (c && a.aa)
		if (c.aa || (R.Vc.fca(c), c.gs = R.Vc.XM.gs), a.aa.tr(c.aa), c.R(c.mn()), c.getParent())
			R.Vc.nF(c);
		else if (c.Qf)
			if (a = R.Wb("#EGLViewDiv"))
				c.aa.tr(a);
			else {
				a = R.jm("div");
				a.id = "EGLViewDiv";
				var d = R.uc.d(),
				e = d.Ke,
				f = d.Tf,
				g = d.Rc,
				k = e.width,
				l = e.height;
				0 === e.width && 0 === e.height && (k = g.width, l = g.height);
				var e = f.size.width,
				n = f.size.height;
				0 === f.size.width && 0 === f.size.height && (e = g.width, n = g.height);
				a.style.position = "absolute";
				a.style.width = k + "px";
				a.style.maxHeight = l + "px";
				a.style.margin = 0;
				a.em(d.ia, d.ra);
				a.style.left = e < g.width ? (e - k) / 2 + (g.width - e) / 2 + "px" : (e - k) / 2 + "px";
				a.style.bottom = n < g.height ? (g.height - n) / 2 + "px" : "0px";
				c.aa.tr(a);
				a.tr(R.qg)
			}
};
R.Vc.setTransform = function (a) {
	if (a.Du)
		if (a.Du.translate(a.Nu().x, a.Nu().y), a.aW) {
			var c = a.k;
			a.k = [];
			R.t.prototype.Y.call(a, a.Du);
			a.k = c
		} else
			R.t.prototype.Y.call(a, a.Du);
	a.aa && (a.aa.position.x = a.rc().x, a.aa.position.y = -a.rc().y, a.aa.rotation = a.Sy(), a.aa.scale = {
			x : a.ia,
			y : a.ra
		}, a.aa.Kn = {
			x : a.Fd,
			y : a.Gd
		}, a.R && a.R(a.mn()), a.aa.xp(), a.aa.position.y = -a.rc().y, a.aa.rotation = a.Sy(), a.aa.scale = {
			x : a.ia,
			y : a.ra
		}, a.aa.Kn = {
			x : a.Fd,
			y : a.Gd
		}, a.R && a.R(a.mn()), a.aa.xp())
};
R.Vc.h9 = function (a) {
	a.aa = R.jm("div");
	a.canvas = R.jm("canvas");
	a.canvas.width = a.n().width;
	a.canvas.height = a.n().height;
	a.aa.style.position = "absolute";
	a.aa.style.bottom = 0;
	a.Du = a.canvas.getContext("2d");
	a.aa.appendChild(a.canvas);
	a.getParent() && R.Vc.nF(a);
	a.aW = m
};
R.Vc.fca = function (a) {
	a.aa = R.jm("div");
	a.placeholder = m;
	a.aa.style.position = "absolute";
	a.aa.style.bottom = 0;
	a.aa.style.width = (a.n().width || R.o.d().$.width) + "px";
	a.aa.style.maxHeight = (a.n().height || R.o.d().$.height) + "px";
	a.aa.style.margin = 0;
	R.Vc.setTransform(a);
	a.aa.xp();
	R.Vc.aU(a)
};
R.Vc.YL = function (a) {
	if (1 < arguments.length)
		R.Vc.YL(arguments);
	else if (1 == arguments.length && !arguments[0].length)
		R.Vc.YL([arguments[0]]);
	else
		for (var c = arguments[0], d = 0; d < c.length; d++)
			c[d]instanceof R.t ? c[d].aa || R.Vc.h9(c[d]) : R.log("DOM converter only supports sprite and menuitems yet"), R.Vc.aU(c[d]), c[d].Y = x(), c[d].transform = x(), R.Vc.setTransform(c[d]), c[d].Aa(c[d].Ua)
};
R.zd = R.Wa.extend({
		Fc : m,
		Lt : 0,
		LS : 0,
		wl : 0,
		fk : 0,
		Dm : p,
		S : p,
		Ta : q,
		z : p,
		Nq : 0,
		mC : q,
		ctor : function () {
			R.Wa.prototype.ctor.call(this);
			this.Dm = R.Td();
			this.z = {
				src : R.Ac,
				da : R.zc
			};
			this.mC = q
		},
		Fv : function () {
			R.e(q, "cc.AtlasNode:Abstract updateAtlasValue not overridden")
		},
		Lb : function () {
			return this.Ta ? this.Dm : R.Wa.prototype.Lb.call(this)
		},
		Rd : function (a) {
			var c = this.Lb();
			this.Ta = a;
			this.L(c)
		},
		Ij : C("Ta"),
		gp : C("z"),
		Qd : function (a, c) {
			this.z = 1 == arguments.length ? a : {
				src : a,
				da : c
			}
		},
		In : z("S"),
		lM : C("S"),
		Pra : C("Nq"),
		jBa : z("Nq"),
		Wo : p,
		Qg : p,
		JT : p,
		IB : p,
		O$ : function (a, c, d, e) {
			R.e(a != p, "title should not be null");
			a = R.fb.d().Jd(a);
			return this.ba(a, c, d, e)
		},
		ba : p,
		px : function (a, c, d, e) {
			this.wl = c;
			this.fk = d;
			this.Ta = m;
			this.Qg = a;
			if (!this.Qg)
				return R.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), q;
			this.Wo = this.Qg;
			this.zB();
			this.Nq = e;
			return m
		},
		qx : function (a, c, d, e) {
			this.wl = c;
			this.fk = d;
			this.Dm = R.Yf;
			this.Ta = m;
			this.z.src = R.Ac;
			this.z.da = R.zc;
			c = this.Qc;
			this.IB = new Float32Array([c.i / 255, c.h / 255, c.c / 255, this.nf / 255]);
			this.S = new R.Sp;
			this.S.ba(a,
				e);
			if (!this.S)
				return R.log("cocos2d: Could not initialize cc.AtlasNode. Invalid Texture."), q;
			this.zi();
			this.PT();
			this.zB();
			this.Nq = e;
			this.Ye(R.Ad.d().Tc(R.jw));
			this.JT = R.u.getUniformLocation(this.Ru().Pr(), "u_color");
			return m
		},
		fa : p,
		Jg : function (a) {
			a = a || R.u;
			R.Ip(this);
			R.Fi(this.z.src, this.z.da);
			a.uniform4fv(this.JT, this.IB);
			this.S.SU(this.Nq, 0)
		},
		L : p,
		Px : function (a) {
			var c = this.Qc;
			if (!(c.i == a.i && c.h == a.h && c.c == a.c)) {
				c = new R.mc(a.i, a.h, a.c);
				this.Dm = a;
				if (this.Ta) {
					var d = this.bb;
					c.i = c.i * d / 255;
					c.h = c.h * d / 255;
					c.c = c.c * d / 255
				}
				R.Wa.prototype.L.call(this, a);
				if (this.ja() && (a = this.Qg.Pc))
					if (c = R.fb.d().sE(a))
						d = R.rect(0, 0, a.width, a.height), a = R.Lu(a, c, this.Qc, d), c = new R.Eb, c.vf(a), c.Ue(), this.Na(c)
			}
		},
		MK : function (a) {
			var c = R.mc(a.i, a.h, a.c);
			this.Dm = a;
			var d = this.bb;
			this.Ta && (c.i = c.i * d / 255, c.h = c.h * d / 255, c.c = c.c * d / 255);
			R.Wa.prototype.L.call(this, a);
			a = this.gb;
			this.IB = new Float32Array([a.i / 255, a.h / 255, a.c / 255, d / 255])
		},
		U : p,
		Uq : function (a) {
			R.Wa.prototype.U.call(this, a);
			this.Ta && this.L(this.Dm)
		},
		Rx : function (a) {
			R.Wa.prototype.U.call(this,
				a);
			this.Ta ? this.L(this.Dm) : (a = this.gb, this.IB = new Float32Array([a.i / 255, a.h / 255, a.c / 255, this.bb / 255]))
		},
		ja : p,
		DJ : C("Wo"),
		EJ : function () {
			return this.S.ja()
		},
		Na : p,
		Sx : z("Wo"),
		Tx : function (a) {
			this.S.Na(a);
			this.zi();
			this.PT()
		},
		zB : p,
		k3 : function () {
			var a = this.ja().n();
			this.LS = 0 | a.height / this.fk;
			this.Lt = 0 | a.width / this.wl
		},
		l3 : function () {
			var a = this.ja(),
			c = a.n();
			this.mC && (c = a.ea);
			this.LS = 0 | c.height / this.fk;
			this.Lt = 0 | c.width / this.wl
		},
		zi : function () {
			this.S.ja().Wl() || (this.z.src = 770, this.z.da = 771)
		},
		PT : function () {
			this.Ta =
				this.S.ja().Wl()
		},
		OK : z("mC")
	});
R.ua.tc ? (Q = R.zd.prototype, Q.ba = R.zd.prototype.qx, Q.fa = R.zd.prototype.Jg, Q.L = R.zd.prototype.MK, Q.U = R.zd.prototype.Rx, Q.ja = R.zd.prototype.EJ, Q.Na = R.zd.prototype.Tx, Q.zB = R.zd.prototype.l3) : (Q = R.zd.prototype, Q.ba = R.zd.prototype.px, Q.fa = R.r.prototype.fa, Q.L = R.zd.prototype.Px, Q.U = R.zd.prototype.Uq, Q.ja = R.zd.prototype.DJ, Q.Na = R.zd.prototype.Sx, Q.zB = R.zd.prototype.k3);
R.zd.create = function (a, c, d, e) {
	var f = new R.zd;
	return f.O$(a, c, d, e) ? f : p
};
R.gl = 0;
R.ow = 1;
R.nw = 2;
R.mw = 3;
R.VH = 4;
R.UH = 5;
R.VA = 6;
R.UA = 7;
R.JQ = 8;
R.IQ = 9;
R.HQ = R.gl;
R.bJ = R.HQ;
R.m1 = q;
R.ola = function (a, c, d, e) {
	this.Haa = a || 0;
	this.Faa = c || 0;
	this.cZ = d || 0;
	this.dZ = e || 0
};
R.i2 = R.D.extend({
		X4 : p,
		vh : p,
		pj : p,
		oj : p,
		qc : p,
		ea : p,
		kj : p,
		lj : p,
		Et : p,
		rq : q,
		Yb : p,
		td : q,
		Pc : p,
		Be : p,
		rh : p,
		ctor : function () {
			this.oj = this.pj = 0;
			this.qc = "";
			this.lj = this.kj = 0;
			this.Et = q;
			this.ea = R.size(0, 0);
			this.rq = q;
			this.X4 = m;
			this.vh = R.Eb.I8();
			this.Yb = p;
			this.td = q;
			this.Be = this.Pc = p;
			this.rh = []
		},
		uF : function () {
			this.Be && R.u.deleteTexture(this.Be)
		},
		zra : C("vh"),
		on : C("pj"),
		nn : C("oj"),
		getName : C("Be"),
		n : function () {
			return R.size(this.ea.width / R.xa(), this.ea.height / R.xa())
		},
		t9 : C("ea"),
		J9 : C("kj"),
		Aea : z("kj"),
		K9 : C("lj"),
		Bea : z("lj"),
		Ru : C("Yb"),
		Ye : z("Yb"),
		Wl : C("Et"),
		u$ : C("rq"),
		description : function () {
			return "\x3ccc.Texture2D | Name \x3d " + this.qc + " | Dimensions \x3d " + this.pj + " x " + this.oj + " | Coordinates \x3d (" + this.kj + ", " + this.lj + ")\x3e"
		},
		Nca : x(),
		daa : u(),
		jp : function (a, c, d, e, f) {
			var g = R.u,
			k = 0,
			k = c === R.gl ? 24 : this.lU(c),
			k = d * k / 8;
			0 === k % 8 ? g.pixelStorei(g.UNPACK_ALIGNMENT, 8) : 0 === k % 4 ? g.pixelStorei(g.UNPACK_ALIGNMENT, 4) : 0 === k % 2 ? g.pixelStorei(g.UNPACK_ALIGNMENT, 2) : g.pixelStorei(g.UNPACK_ALIGNMENT, 1);
			this.Be = g.createTexture();
			g.bindTexture(g.TEXTURE_2D,
				this.Be);
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR);
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
			g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
			switch (c) {
			case R.gl:
				g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, d, e, 0, g.RGBA, g.UNSIGNED_BYTE, a);
				break;
			case R.ow:
				g.texImage2D(g.TEXTURE_2D, 0, g.RGB, d, e, 0, g.RGB, g.UNSIGNED_BYTE, a);
				break;
			case R.VA:
				g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, d, e, 0, g.RGBA, g.UNSIGNED_SHORT_4_4_4_4,
					a);
				break;
			case R.UA:
				g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, d, e, 0, g.RGBA, g.UNSIGNED_SHORT_5_5_5_1, a);
				break;
			case R.nw:
				g.texImage2D(g.TEXTURE_2D, 0, g.RGB, d, e, 0, g.RGB, g.UNSIGNED_SHORT_5_6_5, a);
				break;
			case R.UH:
				g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE_ALPHA, d, e, 0, g.LUMINANCE_ALPHA, g.UNSIGNED_BYTE, a);
				break;
			case R.mw:
				g.texImage2D(g.TEXTURE_2D, 0, g.ALPHA, d, e, 0, g.ALPHA, g.UNSIGNED_BYTE, a);
				break;
			case R.VH:
				g.texImage2D(g.TEXTURE_2D, 0, g.LUMINANCE, d, e, 0, g.LUMINANCE, g.UNSIGNED_BYTE, a);
				break;
			default:
				R.e(0, "NSInternalInconsistencyException")
			}
			this.ea =
				f;
			this.pj = d;
			this.oj = e;
			this.vh = c;
			this.kj = f.width / d;
			this.lj = f.height / e;
			this.rq = this.Et = q;
			this.Ye(R.Ad.d().Tc(R.iw));
			return this.td = m
		},
		S8 : function (a) {
			var c = [0, this.lj, this.kj, this.lj, 0, 0, this.kj, 0],
			d = this.pj * this.kj,
			e = this.oj * this.lj;
			a = [a.x, a.y, 0, d + a.x, a.y, 0, a.x, e + a.y, 0, d + a.x, e + a.y, 0];
			R.Ld(R.Gf | R.Ps);
			this.Yb.Sd();
			this.Yb.Gz();
			R.Ih(this);
			d = R.u;
			d.vertexAttribPointer(R.fc, 2, d.FLOAT, q, 0, a);
			d.vertexAttribPointer(R.df, 2, d.FLOAT, q, 0, c);
			d.drawArrays(d.TRIANGLE_STRIP, 0, 4)
		},
		U8 : function (a) {
			var c = [0, this.lj, this.kj,
				this.lj, 0, 0, this.kj, 0];
			a = [a.x, a.y, a.x + a.width, a.y, a.x, a.y + a.height, a.x + a.width, a.y + a.height];
			R.Ld(R.Gf | R.Ps);
			this.Yb.Sd();
			this.Yb.Gz();
			R.Ih(this);
			var d = R.u;
			d.vertexAttribPointer(R.fc, 2, d.FLOAT, q, 0, a);
			d.vertexAttribPointer(R.df, 2, d.FLOAT, q, 0, c);
			d.drawArrays(d.TRIANGLE_STRIP, 0, 4)
		},
		yM : function (a) {
			if (a == p)
				return R.log("cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil"), q;
			var c = a.Su(),
			d = a.Pu(),
			e = R.bf.d().Aq;
			if (c > e || d > e)
				return R.log("cocos2d: WARNING: Image (" + c + " x " + d + ") is bigger than the supported " +
					e + " x " + e), q;
			this.td = m;
			return this.n4(a, c, d)
		},
		vf : function (a) {
			a && (this.Be = R.u.createTexture(), this.Pc = a)
		},
		D9 : C("Pc"),
		Z$ : C("td"),
		Ue : function () {
			this.td = m;
			var a = R.u;
			R.Ih(this);
			a.pixelStorei(a.UNPACK_ALIGNMENT, 4);
			a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.Pc);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T,
				a.CLAMP_TO_EDGE);
			this.Ye(R.Ad.d().Tc(R.iw));
			a.bindTexture(a.TEXTURE_2D, p);
			var a = this.Pc.width,
			c = this.Pc.height;
			this.ea = new R.sm(a, c);
			this.pj = a;
			this.oj = c;
			this.vh = R.gl;
			this.lj = this.kj = 1;
			this.rq = this.Et = q;
			this.ej()
		},
		xd : function (a, c, d, e, f, g) {
			3 == arguments.length && (c = arguments[1], d = arguments[2], e = R.size(0, 0), f = R.Uj, g = R.Up);
			var k = new R.yP,
			l;
			R.Up === g ? l = R.Uj === f ? R.mZ : R.Qp === f ? R.nZ : R.oZ : R.mB === g ? l = R.Uj === f ? R.jZ : R.Qp === f ? R.kZ : R.lZ : R.pI === g ? l = R.Uj === f ? R.gZ : R.Qp === f ? R.hZ : R.iZ : R.e(q, "Not supported alignment format!");
			return !k.xd(a, e.width, e.height, l, c, d) ? q : this.yM(k)
		},
		D$ : M(q),
		SV : function (a) {
			var c = q,
			d = new R.Vja;
			(c = d.hua(a)) ? (d.qBa(m), this.qc = d.getName(), this.lj = this.kj = 1, this.pj = d.Su(), this.oj = d.Pu(), this.ea = R.size(this.pj, this.oj), this.Et = R.m1, this.vh = d.Rpa(), this.uX()) : R.log("cocos2d: Couldn't load PVR image " + a);
			return c
		},
		K$ : function () {
			return !R.bf.d().ey ? (R.log("cocos2d: WARNING: PVRTC images is not supported."), q) : m
		},
		sfa : function (a) {
			var c = R.u;
			R.e(this.pj == R.Wn(this.pj) && this.oj == R.Wn(this.oj) || a.cZ == c.CLAMP_TO_EDGE &&
				a.dZ == c.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures");
			R.Ih(this);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, a.Haa);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, a.Faa);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, a.cZ);
			c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, a.dZ)
		},
		uX : function () {
			var a = R.u;
			R.Ih(this);
			this.rq ? a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR_MIPMAP_NEAREST) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST)
		},
		EN : function () {
			var a = R.u;
			R.Ih(this);
			this.rq ? a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST_MIPMAP_NEAREST) : a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST)
		},
		generateMipmap : function () {
			R.e(this.pj == R.Wn(this.pj) && this.oj == R.Wn(this.oj), "Mimpap texture only works in POT textures");
			R.Ih(this);
			R.u.generateMipmap(R.u.TEXTURE_2D);
			this.rq = m
		},
		Rfa : function () {
			switch (this.vh) {
			case R.gl:
				return "RGBA8888";
			case R.ow:
				return "RGB888";
			case R.nw:
				return "RGB565";
			case R.VA:
				return "RGBA4444";
			case R.UA:
				return "RGB5A1";
			case R.UH:
				return "AI88";
			case R.mw:
				return "A8";
			case R.VH:
				return "I8";
			case R.JQ:
				return "PVRTC4";
			case R.IQ:
				return "PVRTC2";
			default:
				R.e(q, "unrecognized pixel format"),
				R.log("stringForFormat: " + this.vh + ", cannot give useful result")
			}
			return ""
		},
		lU : function (a) {
			a = a || this.vh;
			switch (a) {
			case R.gl:
				return 32;
			case R.ow:
				return 32;
			case R.nw:
				return 16;
			case R.mw:
				return 8;
			case R.VA:
				return 16;
			case R.UA:
				return 16;
			case R.JQ:
				return 4;
			case R.IQ:
				return 2;
			case R.VH:
				return 8;
			case R.UH:
				return 16;
			default:
				return R.e(q, "illegal pixel format"),
				R.log("bitsPerPixelForFormat: " + this.vh + ", cannot give useful result"),
				-1
			}
		},
		n4 : function (a, c, d) {
			var e = a.getData(),
			f = p,
			f = p,
			g = a.yS,
			k = R.size(a.Su(), a.Pu()),
			l = R.HQ,
			n = a.RR;
			g || (8 <= n ? l = R.ow : (R.log("cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha"), l = R.nw));
			var r = c * d;
			if (l == R.nw)
				if (g) {
					e = new Uint16Array(c * d);
					f = a.getData();
					for (n = 0; n < r; ++n)
						e[n] = (f[n] >> 0 & 255) >> 3 << 11 | (f[n] >> 8 & 255) >> 2 << 5 | (f[n] >>
							16 & 255) >> 3 << 0
				} else {
					e = new Uint16Array(c * d);
					f = a.getData();
					for (n = 0; n < r; ++n)
						e[n] = (f[n] & 255) >> 3 << 11 | (f[n] & 255) >> 2 << 5 | (f[n] & 255) >> 3 << 0
				}
			else if (l == R.VA) {
				e = new Uint16Array(c * d);
				f = a.getData();
				for (n = 0; n < r; ++n)
					e[n] = (f[n] >> 0 & 255) >> 4 << 12 | (f[n] >> 8 & 255) >> 4 << 8 | (f[n] >> 16 & 255) >> 4 << 4 | (f[n] >> 24 & 255) >> 4 << 0
			} else if (l == R.UA) {
				e = new Uint16Array(c * d);
				f = a.getData();
				for (n = 0; n < r; ++n)
					e[n] = (f[n] >> 0 & 255) >> 3 << 11 | (f[n] >> 8 & 255) >> 3 << 6 | (f[n] >> 16 & 255) >> 3 << 1 | (f[n] >> 24 & 255) >> 7 << 0
			} else if (l == R.mw) {
				e = new Uint8Array(c * d);
				f = a.getData();
				for (n =
						0; n < r; ++n)
					e[n] = f >> 24 & 255
			}
			if (g && l == R.ow) {
				f = a.getData();
				e = new Uint8Array(3 * c * d);
				for (n = 0; n < r; ++n)
					e[3 * n] = f >> 0 & 255, e[3 * n + 1] = f >> 8 & 255, e[3 * n + 2] = f >> 16 & 255
			}
			this.jp(e, l, c, d, k);
			a.getData();
			this.Et = a.cT;
			return m
		},
		Uf : function (a, c) {
			this.rh.push({
				Hr : a,
				ln : c
			})
		},
		Vca : function (a) {
			for (var c = this.rh, d = 0; d < c.length; d++)
				c[d].ln == a && c.splice(d, 1)
		},
		ej : function () {
			for (var a = this.rh, c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				e.Hr.call(e.ln, this)
			}
			a.length = 0
		}
	});
R.h2 = R.D.extend({
		ea : p,
		td : q,
		Pc : p,
		rh : p,
		ctor : function () {
			this.ea = R.size(0, 0);
			this.td = q;
			this.Pc = p;
			this.rh = []
		},
		on : function () {
			return this.ea.width
		},
		nn : function () {
			return this.ea.height
		},
		n : function () {
			return R.size(this.ea.width / R.xa(), this.ea.height / R.xa())
		},
		t9 : C("ea"),
		vf : function (a) {
			a && (this.Pc = a)
		},
		D9 : C("Pc"),
		Z$ : C("td"),
		Ue : function () {
			this.td = m;
			var a = this.Pc;
			this.ea = new R.sm(a.width, a.height);
			this.ej()
		},
		description : function () {
			return "\x3ccc.Texture2D | width \x3d " + this.ea.width + " height " + this.ea.height + "\x3e"
		},
		jp : M(q),
		yM : M(q),
		xd : M(q),
		uF : x(),
		getName : M(p),
		J9 : M(1),
		Aea : x(),
		K9 : M(1),
		Bea : x(),
		Ru : M(p),
		Ye : x(),
		Wl : M(q),
		u$ : M(q),
		Nca : x(),
		daa : u(),
		S8 : x(),
		U8 : x(),
		D$ : M(q),
		SV : M(q),
		K$ : M(m),
		sfa : x(),
		uX : x(),
		EN : x(),
		generateMipmap : x(),
		Rfa : M(""),
		lU : M(-1),
		Uf : function (a, c) {
			this.rh.push({
				Hr : a,
				ln : c
			})
		},
		Vca : function (a) {
			for (var c = this.rh, d = 0; d < c.length; d++)
				c[d].ln == a && c.splice(d, 1)
		},
		ej : function () {
			for (var a = this.rh, c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				e.Hr.call(e.ln, this)
			}
			a.length = 0
		}
	});
R.Eb = R.ua.tc ? R.i2 : R.h2;
R.Eb.aAa = function (a) {
	R.bJ = a
};
R.Eb.I8 = function () {
	return R.bJ
};
R.Eb.apa = function () {
	return R.bJ
};
R.Qy = p;
R.hxa = function (a) {
	if (R.Z7(a) == R.SG)
		R.log("unsupported format:" + a);
	else {
		var c = new Image;
		c.src = a;
		c.addEventListener("load", function () {
			R.fb.d().oU(a, c);
			this.removeEventListener("load", arguments.callee, q)
		}, q)
	}
};
R.Z7 = function (a) {
	return 0 < a.toLowerCase().indexOf(".jpg") || 0 < a.toLowerCase().indexOf(".jpeg") ? R.d0 : 0 < a.toLowerCase().indexOf(".png") ? R.wA : 0 < a.toLowerCase().indexOf(".webp") ? R.e0 : R.SG
};
R.fb = R.D.extend({
		xb : p,
		fy : p,
		wD : p,
		hT : q,
		AC : p,
		BC : p,
		ctor : function () {
			R.e(R.Qy == p, "Attempted to allocate a second instance of a singleton.");
			this.wD += 0 | 1E3 * Math.random();
			this.xb = {};
			this.fy = {};
			R.T === R.Ya && (this.AC = {}, this.BC = {})
		},
		zI : function (a, c) {
			if (a && "string" === typeof c)
				a[c]();
			else
				a && "function" === typeof c && c.call(a)
		},
		v4 : function () {
			this.hT = m;
			var a,
			c = this.AC,
			d = this.xb;
			for (a in c) {
				var e = c[a],
				f = new R.Eb;
				f.vf(e);
				f.Ue();
				d[a] = f
			}
			this.AC = {}

		},
		Ila : function () {
			R.e(0, "TextureCache:addPVRTCImage does not support on HTML5")
		},
		Cla : function () {
			R.e(0, "TextureCache:addPVRTCImage does not support on HTML5")
		},
		description : function () {
			return "\x3cTextureCache | Number of textures \x3d " + this.xb.length + "\x3e"
		},
		Kz : function (a) {
			a = R.cc.d().Kd(a);
			return this.xb.hasOwnProperty(a) ? this.xb[a] : p
		},
		F9 : function (a) {
			for (var c in this.xb)
				if (this.xb[c] == a)
					return c;
			return p
		},
		R3 : function () {
			this.wD++;
			return "_textureKey_" + this.wD
		},
		sE : function (a) {
			var c = this.F9(a);
			c || (c = a instanceof HTMLImageElement ? a.src : this.R3());
			this.fy.hasOwnProperty(c) || (this.fy[c] =
					R.Ku(a));
			return this.fy[c]
		},
		Hla : function (a) {
			R.e(a != p, "TextureCache: file image MUST not be null");
			a = R.cc.d().Kd(a);
			if (this.xb[a] != p)
				return this.xb[a];
			var c = new R.Eb;
			c.SV(a) ? this.xb[a] = c : R.log("cocos2d: Couldn't add PVRImage:" + a + " in TextureCache");
			return c
		},
		Vya : function () {
			var a = this.xb,
			c;
			for (c in a)
				a[c] && a[c].uF();
			this.xb = {}

		},
		lza : function (a) {
			if (a) {
				var c = this.xb,
				d;
				for (d in c)
					c[d] == a && (c[d].uF(), delete c[d])
			}
		},
		Zca : function (a) {
			a != p && (a = R.cc.d().Kd(a), this.xb[a] && delete this.xb[a])
		},
		Dla : function (a, c,
			d) {
			R.e(a != p, "TextureCache: path MUST not be null");
			a = R.cc.d().Kd(a);
			var e = this.xb[a],
			f,
			g;
			if (e)
				e.td ? this.zI(c, d) : (g = this, f = e.Pc, f.addEventListener("load", function () {
						e.Ue();
						g.zI(c, d);
						this.removeEventListener("load", arguments.callee, q)
					}));
			else {
				f = new Image;
				f.crossOrigin = "Anonymous";
				g = this;
				f.addEventListener("load", function () {
					g.xb.hasOwnProperty(a) && g.xb[a].Ue();
					g.zI(c, d);
					this.removeEventListener("load", arguments.callee, q);
					this.removeEventListener("error", arguments.callee, q)
				});
				f.addEventListener("error",
					function () {
					R.dc.d().mp(a);
					g.xb.hasOwnProperty(a) && delete g.xb[a];
					this.removeEventListener("error", arguments.callee, q)
				});
				f.src = a;
				var k = new R.Eb;
				k.vf(f);
				this.xb[a] = k
			}
			return this.xb[a]
		},
		Q2 : function (a) {
			var c = new Image;
			c.crossOrigin = "Anonymous";
			var d = this;
			c.addEventListener("load", function () {
				R.dc.d().Li();
				d.AC[a] = c;
				delete d.BC[a];
				this.removeEventListener("load", arguments.callee, q);
				this.removeEventListener("error", arguments.callee, q)
			});
			c.addEventListener("error", function () {
				R.dc.d().mp(a);
				delete d.BC[a];
				this.removeEventListener("error", arguments.callee, q)
			});
			c.src = a;
			this.BC[a] = c
		},
		Jd : function (a) {
			R.e(a != p, "TextureCache: path MUST not be null");
			if (R.T === R.Ya && !this.hT)
				return this.Q2(a);
			a = R.cc.d().Kd(a);
			var c = this.xb[a],
			d;
			if (c)
				c.td ? R.dc.d().Li() : (d = c.Pc, d.addEventListener("load", function () {
						c.Ue();
						R.dc.d().Li();
						this.removeEventListener("load", arguments.callee, q)
					}));
			else {
				d = new Image;
				d.crossOrigin = "Anonymous";
				var e = this;
				d.addEventListener("load", function () {
					R.dc.d().Li();
					e.xb.hasOwnProperty(a) && e.xb[a].Ue();
					this.removeEventListener("load", arguments.callee, q);
					this.removeEventListener("error", arguments.callee, q)
				});
				d.addEventListener("error", function () {
					R.dc.d().mp(a);
					e.xb.hasOwnProperty(a) && delete e.xb[a];
					this.removeEventListener("error", arguments.callee, q)
				});
				d.src = a;
				var f = new R.Eb;
				f.vf(d);
				this.xb[a] = f
			}
			return this.xb[a]
		},
		oU : function (a, c) {
			if (c instanceof R.Eb)
				this.xb[a] = c;
			else {
				var d = new R.Eb;
				d.vf(c);
				d.Ue();
				this.xb[a] = d
			}
		},
		Pla : function (a, c) {
			R.e(a != p, "TextureCache: image MUST not be nulll");
			if (c && this.xb.hasOwnProperty(c) &&
				this.xb[c])
				return this.xb[c];
			var d = new R.Eb;
			d.yM(a);
			c != p && d != p ? this.xb[c] = d : R.log("cocos2d: Couldn't add UIImage in TextureCache");
			return d
		},
		cna : function () {
			var a = 0,
			c = 0,
			d = this.xb,
			e;
			for (e in d) {
				var f = d[e];
				a++;
				f.Pc instanceof HTMLImageElement ? R.log("cocos2d: '" + e + "' id\x3d" + f.Pc.src + " " + f.on() + " x " + f.nn()) : R.log("cocos2d: '" + e + "' id\x3d HTMLCanvasElement " + f.on() + " x " + f.nn());
				c += 4 * f.on() * f.nn()
			}
			d = this.fy;
			for (e in d) {
				var f = d[e],
				g;
				for (g in f) {
					var k = f[g];
					a++;
					R.log("cocos2d: '" + e + "' id\x3d HTMLCanvasElement " +
						k.width + " x " + k.height);
					c += 4 * k.width * k.height
				}
			}
			R.log("cocos2d: TextureCache dumpDebugInfo: " + a + " textures, HTMLCanvasElement for " + c / 1024 + " KB (" + (c / 1048576).toFixed(2) + " MB)")
		}
	});
R.fb.d = function () {
	R.Qy || (R.Qy = new R.fb);
	return R.Qy
};
R.fb.vca = function () {
	R.Qy = p
};
R.Sp = R.D.extend({
		hb : p,
		pe : p,
		ha : q,
		pd : 0,
		G : p,
		Dc : p,
		Oe : p,
		Kx : p,
		ri : p,
		ctor : function () {
			this.pe = []
		},
		pta : C("Ja"),
		toa : C("pd"),
		ja : C("G"),
		Na : z("G"),
		eh : z("ha"),
		Xu : C("ha"),
		Ora : C("Dc"),
		iBa : z("Dc"),
		v3 : function (a, c) {
			if (a)
				for (var d = 0; d < a.length; d++)
					this.iD(a[d], c + d)
		},
		iD : function (a, c) {
			var d = this.Dc;
			d[c] ? (d[c].J = a.J, d[c].O = a.O, d[c].N = a.N, d[c].M = a.M) : d[c] = new R.ec(a.N, a.J, a.M, a.O, this.Oe, c * R.ec.BYTES_PER_ELEMENT)
		},
		description : function () {
			return "\x3ccc.TextureAtlas | totalQuads \x3d" + this.Ja + "\x3e"
		},
		uT : function () {
			if (0 !== this.pd)
				for (var a =
						this.hb, c = this.pd, d = 0; d < c; d++)
					R.KQ ? (a[6 * d + 0] = 4 * d + 0, a[6 * d + 1] = 4 * d + 0, a[6 * d + 2] = 4 * d + 2, a[6 * d + 3] = 4 * d + 1, a[6 * d + 4] = 4 * d + 3, a[6 * d + 5] = 4 * d + 3) : (a[6 * d + 0] = 4 * d + 0, a[6 * d + 1] = 4 * d + 1, a[6 * d + 2] = 4 * d + 2, a[6 * d + 3] = 4 * d + 3, a[6 * d + 4] = 4 * d + 2, a[6 * d + 5] = 4 * d + 1)
		},
		eu : function () {
			var a = R.u;
			this.pe[0] = a.createBuffer();
			this.pe[1] = a.createBuffer();
			this.Kx = a.createBuffer();
			this.NS()
		},
		NS : function () {
			var a = R.u;
			a.bindBuffer(a.ARRAY_BUFFER, this.Kx);
			a.bufferData(a.ARRAY_BUFFER, this.Oe, a.DYNAMIC_DRAW);
			a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.pe[1]);
			a.bufferData(a.ELEMENT_ARRAY_BUFFER,
				this.hb, a.STATIC_DRAW)
		},
		wf : function (a, c) {
			var d = R.fb.d().Jd(a);
			if (d)
				return this.ba(d, c);
			R.log("cocos2d: Could not open file: " + a);
			return q
		},
		ba : function (a, c) {
			this.pd = c |= 0;
			this.Ja = 0;
			this.G = a;
			R.e(this.Dc == p && this.hb == p, "TextureAtlas.initWithTexture():_quads and _indices should not be null");
			this.Dc = [];
			this.hb = new Uint16Array(6 * c);
			var d = R.ec.BYTES_PER_ELEMENT;
			this.Oe = new ArrayBuffer(d * c);
			this.ri = new Uint8Array(this.Oe);
			if ((!this.Dc || !this.hb) && 0 < c)
				return q;
			for (var e = this.Dc, f = 0; f < c; f++)
				e[f] = new R.ec(p,
						p, p, p, this.Oe, f * d);
			this.uT();
			this.eu();
			return this.ha = m
		},
		Sz : function (a, c) {
			this.Ja = Math.max(c + 1, this.Ja);
			this.iD(a, c);
			this.ha = m
		},
		JM : function (a, c) {
			R.e(c < this.pd, "insertQuadWithTexture: Invalid index");
			this.Ja++;
			R.e(this.Ja <= this.pd, "invalid totalQuads");
			var d = R.ec.BYTES_PER_ELEMENT,
			e = c * d,
			f = (this.Ja - 1 - c) * d;
			this.Dc[this.Ja - 1] = new R.ec(p, p, p, p, this.Oe, (this.Ja - 1) * d);
			this.ri.set(this.ri.subarray(e, e + f), e + d);
			this.iD(a, c);
			this.ha = m
		},
		pua : function (a, c, d) {
			d = d || a.length;
			var e = R.ec.BYTES_PER_ELEMENT;
			R.e(c + d <=
				this.pd, "insertQuadWithTexture: Invalid index + amount");
			this.Ja += d;
			R.e(this.Ja <= this.pd, "invalid totalQuads");
			var f = c * e,
			g = (this.Ja - 1 - c - d) * e,
			k = this.Ja - 1 - d,
			l;
			for (l = 0; l < d; l++)
				this.Dc[k + l] = new R.ec(p, p, p, p, this.Oe, (this.Ja - 1) * e);
			this.ri.set(this.ri.subarray(f, f + g), f + e * d);
			for (l = 0; l < d; l++)
				this.iD(a[l], c + l);
			this.ha = m
		},
		oua : function (a, c) {
			R.e(0 <= c && c < this.Ja, "insertQuadFromIndex:atIndex: Invalid index");
			R.e(0 <= a && a < this.Ja, "insertQuadFromIndex:atIndex: Invalid index");
			if (a !== c) {
				var d = R.ec.BYTES_PER_ELEMENT,
				e = this.ri,
				f = e.subarray(a * d, d),
				g;
				a > c ? (g = c * d, e.set(e.subarray(g, g + (a - c) * d), g + d), e.set(f, g)) : (g = (a + 1) * d, e.set(e.subarray(g, g + (c - a) * d), g - d), e.set(f, c * d));
				this.ha = m
			}
		},
		lX : function (a) {
			R.e(a < this.Ja, "removeQuadAtIndex: Invalid index");
			var c = R.ec.BYTES_PER_ELEMENT;
			this.Ja--;
			this.Dc.length = this.Ja;
			if (a !== this.Ja) {
				var d = (a + 1) * c;
				this.ri.set(this.ri.subarray(d, d + (this.Ja - a) * c), d - c)
			}
			this.ha = m
		},
		Wca : function (a, c) {
			R.e(a + c <= this.Ja, "removeQuadAtIndex: index + amount out of bounds");
			this.Ja -= c;
			if (a !== this.Ja) {
				var d =
					R.ec.BYTES_PER_ELEMENT,
				e = (a + c) * d;
				this.ri.set(this.ri.subarray(e, e + (this.Ja - a) * d), a * d)
			}
			this.ha = m
		},
		sN : function () {
			this.Ja = this.Dc.length = 0
		},
		W5 : z("ha"),
		yN : function (a) {
			if (a == this.pd)
				return m;
			var c = R.ec.BYTES_PER_ELEMENT,
			d = this.pd;
			this.Ja = Math.min(this.Ja, a);
			var e = this.pd = 0 | a,
			f = this.Ja;
			if (this.Dc == p) {
				this.Dc = [];
				this.Oe = new ArrayBuffer(c * e);
				this.ri = new Uint8Array(this.Oe);
				for (a = 0; a < e; a++)
					this.Dc = new R.ec(p, p, p, p, this.Oe, a * c)
			} else {
				var g,
				k,
				l = this.Dc;
				if (e > d) {
					g = [];
					k = new ArrayBuffer(c * e);
					for (a = 0; a < f; a++)
						g[a] =
							new R.ec(l[a].N, l[a].J, l[a].M, l[a].O, k, a * c);
					for (; a < e; a++)
						g[a] = new R.ec(p, p, p, p, k, a * c)
				} else {
					f = Math.max(f, e);
					g = [];
					k = new ArrayBuffer(c * e);
					for (a = 0; a < f; a++)
						g[a] = new R.ec(l[a].N, l[a].J, l[a].M, l[a].O, k, a * c)
				}
				this.ri = new Uint8Array(k);
				this.Dc = g;
				this.Oe = k
			}
			this.hb == p ? this.hb = new Uint16Array(6 * e) : e > d ? (c = new Uint16Array(6 * e), c.set(this.hb, 0), this.hb = c) : this.hb = this.hb.subarray(0, 6 * e);
			this.uT();
			this.NS();
			return this.ha = m
		},
		IV : function (a) {
			this.Ja += a
		},
		BW : function (a, c, d) {
			if (2 == arguments.length) {
				if (d = c, c = this.Ja - a,
					R.e(d + (this.Ja - a) <= this.pd, "moveQuadsFromIndex move is out of bounds"), 0 === c)
					return
			} else if (R.e(d + c <= this.Ja, "moveQuadsFromIndex:newIndex: Invalid index"), R.e(a < this.Ja, "moveQuadsFromIndex:oldIndex: Invalid index"), a == d)
				return;
			var e = R.ec.BYTES_PER_ELEMENT,
			f = a * e,
			g = c * e,
			k = this.ri,
			l = k.subarray(f, f + g),
			n = d * e,
			r;
			d < a ? (r = d * e, k.set(k.subarray(r, r + (a - d) * e), r + g)) : (r = (a + c) * e, k.set(k.subarray(r, r + (d - a) * e), f));
			k.set(l, n);
			this.ha = m
		},
		YU : function (a, c) {
			for (var d = c * R.ec.BYTES_PER_ELEMENT, e = new Uint8Array(this.Oe, a * R.ec.BYTES_PER_ELEMENT,
						d), f = 0; f < d; f++)
				e[f] = 0
		},
		SU : function (a, c) {
			c = c || 0;
			if (!(0 === a || !this.G || !this.G.td)) {
				var d = R.u;
				R.Ih(this.G);
				R.Ld(R.Tp);
				d.bindBuffer(d.ARRAY_BUFFER, this.Kx);
				this.ha && d.bufferData(d.ARRAY_BUFFER, this.Oe, d.DYNAMIC_DRAW);
				d.vertexAttribPointer(R.fc, 3, d.FLOAT, q, 24, 0);
				d.vertexAttribPointer(R.Gg, 4, d.UNSIGNED_BYTE, m, 24, 12);
				d.vertexAttribPointer(R.df, 2, d.FLOAT, q, 24, 16);
				this.ha && (this.ha = q);
				d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.pe[1]);
				R.KQ ? d.drawElements(d.TRIANGLE_STRIP, 6 * a, d.UNSIGNED_SHORT, 6 * c * this.hb.BYTES_PER_ELEMENT) :
				d.drawElements(d.TRIANGLES, 6 * a, d.UNSIGNED_SHORT, 6 * c * this.hb.BYTES_PER_ELEMENT);
				R.Ci++
			}
		},
		aM : function () {
			this.SU(this.Ja, 0)
		},
		ela : function () {
			var a = R.u;
			this.pe && (this.pe[0] && a.deleteBuffer(this.pe[0]), this.pe[1] && a.deleteBuffer(this.pe[1]));
			this.Kx && a.deleteBuffer(this.Kx)
		}
	});
R.Sp.create = function (a, c) {
	var d = new R.Sp;
	return d && d.wf(a, c) ? d : p
};
R.Sp.Fh = function (a, c) {
	var d = new R.Sp;
	return d && d.ba(a, c) ? d : p
};
R.Xha = 0;
R.Yha = 1;
R.Zha = 2;
R.Wn = function (a) {
	a -= 1;
	a |= a >> 1;
	a |= a >> 2;
	a |= a >> 4;
	a |= a >> 8;
	return (a | a >> 16) + 1
};
R.Db = R.r.extend({
		dj : p,
		ml : p,
		aC : 0,
		Ww : 0,
		Bl : 0,
		G : p,
		gy : p,
		I6 : p,
		vh : R.gl,
		ta : p,
		FB : 0,
		Cm : p,
		TI : 0,
		UI : 0,
		Dw : q,
		SI : p,
		ctor : p,
		Zj : function () {
			R.r.prototype.ctor.call(this);
			this.Cm = R.Ak(1, 1, 1, 1);
			this.SI = "rgba(255,255,255,1)";
			this.dj = document.createElement("canvas");
			this.ml = this.dj.getContext("2d");
			this.R(R.b(0, 0))
		},
		$j : function () {
			R.r.prototype.ctor.call(this);
			this.Cm = R.Ak(0, 0, 0, 0)
		},
		ub : p,
		T4 : function () {
			R.r.prototype.ub.call(this);
			this.dj = this.ml = p
		},
		U4 : function () {
			R.r.prototype.ub.call(this);
			this.gy = this.ta = p;
			var a = R.u;
			a.deleteFramebuffer(this.aC);
			this.Ww && a.deleteRenderbuffer(this.Ww);
			this.I6 = p;
			this.G && this.G.uF()
		},
		Z9 : C("ta"),
		Dz : z("ta"),
		FM : p,
		t4 : function (a, c) {
			var d = this.dj;
			d.width = a || 10;
			d.height = c || 10;
			this.ml.translate(0, d.height);
			var e = new R.Eb;
			e.vf(d);
			e.Ue();
			this.ta = R.t.Fh(e);
			return m
		},
		u4 : function (a, c, d, e) {
			R.e(d != R.mw, "only RGB and RGBA formats are valid for a render texture");
			var f = R.u;
			a = 0 | a * R.xa();
			c = 0 | c * R.xa();
			this.Bl = f.getParameter(f.FRAMEBUFFER_BINDING);
			var g,
			k;
			R.bf.d().dy ? (g = a, k = c) : (g = R.Wn(a), k = R.Wn(c));
			for (var l = new Uint8Array(4 * g *
						k), n = 0; n < 4 * g * k; n++)
				l[n] = 0;
			this.vh = d;
			this.G = new R.Eb;
			if (!this.G)
				return q;
			n = this.G;
			n.jp(l, this.vh, g, k, R.size(a, c));
			d = f.getParameter(f.RENDERBUFFER_BINDING);
			if (R.bf.d().Au("GL_QCOM")) {
				this.gy = new R.Eb;
				if (!this.gy)
					return q;
				this.gy.jp(l, this.vh, g, k, R.size(a, c))
			}
			this.aC = f.createFramebuffer();
			f.bindFramebuffer(f.FRAMEBUFFER, this.aC);
			f.framebufferTexture2D(f.FRAMEBUFFER, f.COLOR_ATTACHMENT0, f.TEXTURE_2D, n.Be, 0);
			0 != e && (this.Ww = f.createRenderbuffer(), f.bindRenderbuffer(f.RENDERBUFFER, this.Ww), f.renderbufferStorage(f.RENDERBUFFER,
					e, g, k), f.framebufferRenderbuffer(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.RENDERBUFFER, this.Ww));
			R.e(f.checkFramebufferStatus(f.FRAMEBUFFER) === f.FRAMEBUFFER_COMPLETE, "Could not attach texture to framebuffer");
			n.EN();
			a = this.ta = R.t.Fh(n);
			a.yg(-1);
			a.Qd(f.ONE, f.ONE_MINUS_SRC_ALPHA);
			f.bindRenderbuffer(f.RENDERBUFFER, d);
			f.bindFramebuffer(f.FRAMEBUFFER, this.Bl);
			this.Dw = q;
			this.I(a);
			return m
		},
		Dh : p,
		c3 : function () {
			R.u = this.ml
		},
		d3 : function () {
			R.bm(R.qm);
			R.tn();
			R.bm(R.pm);
			R.tn();
			var a = R.o.d();
			a.wv(a.Xm);
			var c = this.G.ea,
			d = R.o.d().Uy(),
			a = d.width / c.width,
			d = d.height / c.height,
			e = R.u;
			e.viewport(0, 0, c.width, c.height);
			c = new R.wa;
			R.OM(c, -1 / a, 1 / a, -1 / d, 1 / d, -1, 1);
			R.$u(c);
			this.Bl = e.getParameter(e.FRAMEBUFFER_BINDING);
			e.bindFramebuffer(e.FRAMEBUFFER, this.aC);
			R.bf.d().Au("GL_QCOM") && (e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.gy.Be, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.G.Be, 0))
		},
		N7 : function (a, c, d, e, f, g) {
			var k =
				R.u;
			f = f || k.COLOR_BUFFER_BIT;
			g = g || k.COLOR_BUFFER_BIT | k.DEPTH_BUFFER_BIT;
			this.HI(a, c, d, e, f, g, k.COLOR_BUFFER_BIT | k.DEPTH_BUFFER_BIT | k.STENCIL_BUFFER_BIT)
		},
		HI : p,
		e3 : function (a, c, d, e) {
			this.Dh();
			a = a || 0;
			c = c || 0;
			d = d || 0;
			e = e || 1;
			var f = this.ml,
			g = this.dj;
			f.save();
			f.fillStyle = "rgba(" + (0 | 255 * a) + "," + (0 | 255 * c) + "," + (0 | 255 * d) + "," + e + ")";
			f.clearRect(0, 0, g.width, -g.height);
			f.fillRect(0, 0, g.width, -g.height);
			f.restore()
		},
		f3 : function (a, c, d, e, f, g, k) {
			this.Dh();
			var l = R.u,
			n = [0, 0, 0, 0],
			r = 0,
			s = 0;
			k & l.COLOR_BUFFER_BIT && (n = l.getParameter(l.COLOR_CLEAR_VALUE),
				l.clearColor(a, c, d, e));
			k & l.DEPTH_BUFFER_BIT && (r = l.getParameter(l.DEPTH_CLEAR_VALUE), l.clearDepth(f));
			k & l.STENCIL_BUFFER_BIT && (s = l.getParameter(l.STENCIL_CLEAR_VALUE), l.clearStencil(g));
			l.clear(k);
			k & l.COLOR_BUFFER_BIT && l.clearColor(n[0], n[1], n[2], n[3]);
			k & l.DEPTH_BUFFER_BIT && l.clearDepth(r);
			k & l.STENCIL_BUFFER_BIT && l.clearStencil(s)
		},
		end : p,
		K3 : function () {
			R.u = R.Gaa
		},
		L3 : function () {
			var a = R.u,
			c = R.o.d();
			a.bindFramebuffer(a.FRAMEBUFFER, this.Bl);
			c.qY();
			R.bm(R.qm);
			R.sn();
			R.bm(R.pm);
			R.sn()
		},
		clear : function (a, c,
			d, e) {
			this.N7(a, c, d, e);
			this.end()
		},
		clearRect : p,
		p3 : function (a, c, d, e) {
			this.ml.clearRect(a, c, d, -e)
		},
		q3 : x(),
		clearDepth : p,
		n3 : function () {
			R.log("clearDepth isn't supported on Cocos2d-Html5")
		},
		o3 : function (a) {
			this.Dh();
			var c = R.u,
			d = c.getParameter(c.DEPTH_CLEAR_VALUE);
			c.clearDepth(a);
			c.clear(c.DEPTH_BUFFER_BIT);
			c.clearDepth(d);
			this.end()
		},
		clearStencil : p,
		r3 : function () {
			R.log("clearDepth isn't supported on Cocos2d-Html5")
		},
		s3 : function (a) {
			var c = R.u,
			d = c.getParameter(c.STENCIL_CLEAR_VALUE);
			c.clearStencil(a);
			c.clear(c.STENCIL_BUFFER_BIT);
			c.clearStencil(d)
		},
		Y : p,
		wy : function (a) {
			this.Ua && (a = a || R.u, a.save(), this.fa(a), this.transform(a), this.ta.Y(), a.restore(), this.Pg = 0)
		},
		xy : function (a) {
			if (this.Ua) {
				R.tn();
				var c = this.se;
				c && c.tg() && (c.xu(), this.Oz());
				this.transform(a);
				this.ta.Y();
				this.fa(a);
				c && c.tg() && c.uu(this);
				R.sn();
				this.Pg = 0
			}
		},
		fa : p,
		bk : function (a) {
			a = a || R.u;
			if (this.Dw) {
				this.Dh();
				if (this.FB) {
					var c = this.dj;
					a.save();
					a.fillStyle = this.SI;
					a.clearRect(0, 0, c.width, -c.height);
					a.fillRect(0, 0, c.width, -c.height);
					a.restore()
				}
				this.Ee();
				a = this.k;
				for (var c =
						a.length, d = this.ta, e = 0; e < c; e++) {
					var f = a[e];
					f != d && f.Y()
				}
				this.end()
			}
		},
		Jg : function () {
			var a = R.u;
			if (this.Dw) {
				this.Dh();
				var c = this.FB;
				if (c) {
					var d = [0, 0, 0, 0],
					e = 0,
					f = 0;
					c & a.COLOR_BUFFER_BIT && (d = a.getParameter(a.COLOR_CLEAR_VALUE), a.clearColor(this.Cm.i, this.Cm.h, this.Cm.c, this.Cm.g));
					c & a.DEPTH_BUFFER_BIT && (e = a.getParameter(a.DEPTH_CLEAR_VALUE), a.clearDepth(this.TI));
					c & a.STENCIL_BUFFER_BIT && (f = a.getParameter(a.STENCIL_CLEAR_VALUE), a.clearStencil(this.UI));
					a.clear(c);
					c & a.COLOR_BUFFER_BIT && a.clearColor(d[0], d[1],
						d[2], d[3]);
					c & a.DEPTH_BUFFER_BIT && a.clearDepth(e);
					c & a.STENCIL_BUFFER_BIT && a.clearStencil(f)
				}
				this.Ee();
				a = this.k;
				for (c = 0; c < a.length; c++)
					d = a[c], d != this.ta && d.Y();
				this.end()
			}
		},
		FW : p,
		P4 : function () {
			R.log("saveToFile isn't supported on Cocos2d-Html5");
			return p
		},
		Q4 : function () {
			R.e(this.vh == R.gl, "only RGBA8888 can be saved as image");
			if (!this.G)
				return p;
			var a = this.G.ea,
			c = a.width,
			a = a.height,
			d = new R.yP,
			e = R.u,
			f = new Uint8Array(4 * c * a);
			if (!f)
				return d;
			var g = new Uint8Array(4 * c * a);
			if (!g)
				return p;
			this.Dh();
			e.pixelStorei(e.PACK_ALIGNMENT,
				1);
			e.readPixels(0, 0, c, a, e.RGBA, e.UNSIGNED_BYTE, g);
			this.end();
			for (e = 0; e < a; ++e)
				this.N4(f, 4 * e * c, g, 4 * (a - e - 1) * c, 4 * c);
			return d
		},
		N4 : function (a, c, d, e, f) {
			for (var g = 0; g < f; g++)
				a[c + g] = d[e + g]
		},
		kda : function () {
			R.log("saveToFile isn't supported on Cocos2d-Html5")
		},
		cxa : function () {
			R.log("listenToBackground isn't supported on Cocos2d-Html5")
		},
		dxa : function () {
			R.log("listenToForeground isn't supported on Cocos2d-Html5")
		},
		Goa : C("FB"),
		Rza : z("FB"),
		Eoa : C("Cm"),
		CX : p,
		T5 : function (a) {
			var c = this.Cm;
			c.i = a.i;
			c.h = a.h;
			c.c = a.c;
			c.g =
				a.g;
			this.SI = "rgba(" + (0 | 255 * a.i) + "," + (0 | 255 * a.h) + "," + (0 | 255 * a.c) + "," + a.g + ")"
		},
		U5 : function (a) {
			var c = this.Cm;
			c.i = a.i;
			c.h = a.h;
			c.c = a.c;
			c.g = a.g
		},
		Foa : C("TI"),
		Qza : z("TI"),
		Hoa : C("UI"),
		Sza : z("UI"),
		uua : C("Dw"),
		Jza : z("Dw")
	});
R.ua.tc ? (Q = R.Db.prototype, Q.ctor = R.Db.prototype.$j, Q.ub = R.Db.prototype.U4, Q.FM = R.Db.prototype.u4, Q.Dh = R.Db.prototype.d3, Q.HI = R.Db.prototype.f3, Q.end = R.Db.prototype.L3, Q.clearRect = R.Db.prototype.q3, Q.clearDepth = R.Db.prototype.o3, Q.clearStencil = R.Db.prototype.s3, Q.Y = R.Db.prototype.xy, Q.fa = R.Db.prototype.Jg, Q.FW = R.Db.prototype.Q4, Q.CX = R.Db.prototype.U5) : (Q = R.Db.prototype, Q.ctor = R.Db.prototype.Zj, Q.ub = R.Db.prototype.T4, Q.FM = R.Db.prototype.t4, Q.Dh = R.Db.prototype.c3, Q.HI = R.Db.prototype.e3, Q.end = R.Db.prototype.K3,
	Q.clearRect = R.Db.prototype.p3, Q.clearDepth = R.Db.prototype.n3, Q.clearStencil = R.Db.prototype.r3, Q.Y = R.Db.prototype.wy, Q.fa = R.Db.prototype.bk, Q.FW = R.Db.prototype.P4, Q.CX = R.Db.prototype.T5);
R.Db.create = function (a, c, d, e) {
	d = d || R.gl;
	e = e || 0;
	var f = new R.Db;
	return f && f.FM(a, c, d, e) ? f : p
};
R.bl = 0;
R.Kp = 1;
R.eQ = 4;
R.l1 = 75;
R.vc = R.Wa.extend({
		ze : p,
		Cl : 0,
		ta : p,
		yl : p,
		Ys : p,
		of : q,
		Oqa : C("yl"),
		rv : function (a) {
			this.yl = R.QW(a)
		},
		boa : C("Ys"),
		pv : function (a) {
			this.Ys = R.QW(a)
		},
		j$ : C("ze"),
		nE : C("Cl"),
		Z9 : C("ta"),
		Pk : function (a) {
			this.Cl != a && (this.Cl = R.de(a, 0, 100), this.jL())
		},
		Rd : x(),
		Ij : M(q),
		Yua : C("of"),
		II : function (a) {
			if (a < R.eQ) {
				var c = R.l1;
				return this.of ? R.b(c >> 7 - (a << 1) & 1, c >> 7 - ((a << 1) + 1) & 1) : R.b(c >> (a << 1) + 1 & 1, c >> (a << 1) & 1)
			}
			return R.Nb()
		},
		fK : p,
		Xq : 270,
		oJ : 270,
		mf : 0,
		ZI : q,
		GI : p,
		Pe : 0,
		hd : p,
		Ch : p,
		sL : p,
		vy : q,
		ctor : p,
		Zj : function () {
			R.Wa.prototype.ctor.call(this);
			this.ze =
				R.bl;
			this.Cl = 0;
			this.yl = R.b(0, 0);
			this.Ys = R.b(0, 0);
			this.of = q;
			this.ta = p;
			this.fK = R.Nb();
			this.oJ = this.Xq = 270;
			this.mf = 0;
			this.ZI = q;
			this.GI = R.Oc()
		},
		$j : function () {
			R.Wa.prototype.ctor.call(this);
			this.ze = R.bl;
			this.Cl = 0;
			this.yl = R.b(0, 0);
			this.Ys = R.b(0, 0);
			this.of = q;
			this.ta = p;
			this.sL = R.u.createBuffer();
			this.Pe = 0;
			this.Ch = this.hd = p;
			this.vy = q
		},
		L : function (a) {
			this.ta.L(a)
		},
		U : function (a) {
			this.ta.U(a)
		},
		Lb : function () {
			return this.ta.Lb()
		},
		rg : function () {
			return this.ta.rg()
		},
		fY : p,
		i6 : function (a) {
			this.of !== a && (this.of = a)
		},
		j6 : function (a) {
			this.of !==
			a && (this.of = a, this.Ch = this.hd = p, this.Pe = 0)
		},
		Dz : p,
		k6 : function (a) {
			this.ta != a && (this.ta = a, this.ma(this.ta.n()))
		},
		l6 : function (a) {
			a && this.ta != a && (this.ta = a, this.ma(a.n()), this.hd && (this.Ch = this.hd = p, this.Pe = 0))
		},
		gm : p,
		r6 : function (a) {
			a !== this.ze && (this.ze = a)
		},
		s6 : function (a) {
			a !== this.ze && (this.hd && (this.Ch = this.hd = p, this.Pe = 0), this.ze = a)
		},
		QF : p,
		g6 : function (a) {
			this.of !== a && (this.of = a)
		},
		h6 : function (a) {
			this.of !== a && (this.of = a, this.Ch = this.hd = p, this.Pe = 0)
		},
		ng : function (a) {
			var c = this.ta;
			if (!c)
				return {
					Ka : 0,
					ca : 0
				};
			var d = c.jc,
			e = R.b(d.J.s.Ka, d.J.s.ca),
			d = R.b(d.M.s.Ka, d.M.s.ca);
			c.Ed && (c = a.x, a.x = a.y, a.y = c);
			return {
				Ka : e.x * (1 - a.x) + d.x * a.x,
				ca : e.y * (1 - a.y) + d.y * a.y
			}
		},
		og : function (a) {
			if (!this.ta)
				return {
					x : 0,
					y : 0
				};
			var c = this.ta.jc,
			d = R.b(c.J.l.x, c.J.l.y),
			c = R.b(c.M.l.x, c.M.l.y);
			return {
				x : d.x * (1 - a.x) + c.x * a.x,
				y : d.y * (1 - a.y) + c.y * a.y
			}
		},
		BM : p,
		p4 : function (a) {
			this.Pk(0);
			this.R(R.b(0.5, 0.5));
			this.ze = R.bl;
			this.of = q;
			this.rv(R.b(0.5, 0.5));
			this.pv(R.b(1, 1));
			this.Dz(a);
			return m
		},
		q4 : function (a) {
			this.Pk(0);
			this.Ch = this.hd = p;
			this.Pe = 0;
			this.R(R.b(0.5,
					0.5));
			this.ze = R.bl;
			this.of = q;
			this.rv(R.b(0.5, 0.5));
			this.pv(R.b(1, 1));
			this.Dz(a);
			this.Ye(R.Ad.d().Tc(R.rm));
			return m
		},
		fa : p,
		bk : function (a) {
			a = a || R.u;
			var c = this.ta;
			a.globalAlpha = c.bb / 255;
			var d = c.sb,
			e = c.ue,
			f = 0 | e.x,
			g = -e.y - d.height;
			a.save();
			c.qd && (f = -e.x - d.width, a.scale(-1, 1));
			c.rd && (g = e.y, a.scale(1, -1));
			this.ze == R.Kp ? (e = this.GI, a.beginPath(), a.rect(e.x, e.y, e.width, e.height), a.clip(), a.closePath()) : this.ze == R.bl && (e = this.fK, a.beginPath(), a.arc(e.x, e.y, this.mf, Math.PI / 180 * this.Xq, Math.PI / 180 * this.oJ, this.ZI),
				a.lineTo(e.x, e.y), a.clip(), a.closePath());
			c.G && 0 < d.width && (e = c.G.Pc, c.JB ? a.drawImage(e, 0, 0, d.width, d.height, f, g, d.width, d.height) : a.drawImage(e, d.x, d.y, d.width, d.height, f, g, d.width, d.height));
			a.restore();
			R.Qh()
		},
		Jg : function (a) {
			a = a || R.u;
			if (this.hd && this.ta) {
				R.Ip(this);
				var c = this.ta.z;
				R.Fi(c.src, c.da);
				R.Ld(R.Tp);
				this.ta.ja() ? R.Ih(this.ta.ja()) : R.Ih(p);
				a.bindBuffer(a.ARRAY_BUFFER, this.sL);
				this.vy && (a.bufferData(a.ARRAY_BUFFER, this.Ch, a.DYNAMIC_DRAW), this.vy = q);
				c = R.oc.BYTES_PER_ELEMENT;
				a.vertexAttribPointer(R.fc,
					2, a.FLOAT, q, c, 0);
				a.vertexAttribPointer(R.Gg, 4, a.UNSIGNED_BYTE, m, c, 8);
				a.vertexAttribPointer(R.df, 2, a.FLOAT, q, c, 12);
				this.ze === R.bl ? a.drawArrays(a.TRIANGLE_FAN, 0, this.Pe) : this.ze == R.Kp && (this.of ? (a.drawArrays(a.TRIANGLE_STRIP, 0, this.Pe / 2), a.drawArrays(a.TRIANGLE_STRIP, 4, this.Pe / 2), R.Ci++) : a.drawArrays(a.TRIANGLE_STRIP, 0, this.Pe));
				R.Ci++
			}
		},
		Z6 : function () {
			if (this.ta) {
				var a,
				c = this.yl;
				a = this.Cl / 100;
				var d = 2 * R.PI * (this.of ? a : 1 - a),
				e = R.b(c.x, 1),
				f = R.uba(e, c, d),
				d = 0;
				if (0 == a)
					f = e, d = 0;
				else if (1 == a)
					f = e, d = 4;
				else {
					var g =
						R.c0,
					k = R.eQ;
					for (a = 0; a <= k; ++a) {
						var l = (a + (k - 1)) % k,
						n = this.II(a % k),
						l = this.II(l);
						0 == a ? l = R.UW(n, l, 1 - c.x) : 4 == a && (n = R.UW(n, l, 1 - c.x));
						var r = R.b(0, 0);
						if (R.jN(n, l, c, f, r) && (!(0 == a || 4 == a) || 0 <= r.x && 1 >= r.x) && 0 <= r.y && r.y < g)
							g = r.y, d = a
					}
					f = R.ug(c, R.cm(R.We(f, c), g))
				}
				g = m;
				this.Pe != d + 3 && (g = q, this.Ch = this.hd = p, this.Pe = 0);
				if (!this.hd) {
					k = this.Pe = d + 3;
					n = R.oc.BYTES_PER_ELEMENT;
					this.Ch = new ArrayBuffer(k * n);
					l = [];
					for (a = 0; a < k; a++)
						l[a] = new R.oc(p, p, p, this.Ch, a * n);
					this.hd = l;
					R.e(this.hd, "cc.ProgressTimer. Not enough memory")
				}
				k = this.hd;
				if (!g) {
					k[0].s = this.ng(c);
					k[0].l = this.og(c);
					k[1].s = this.ng(e);
					k[1].l = this.og(e);
					for (a = 0; a < d; a++)
						c = this.II(a), k[a + 2].s = this.ng(c), k[a + 2].l = this.og(c)
				}
				k[this.Pe - 1].s = this.ng(f);
				k[this.Pe - 1].l = this.og(f)
			}
		},
		M6 : function () {
			if (this.ta) {
				var a,
				c = this.Cl / 100,
				d = this.Ys,
				d = R.cm(R.b(1 - d.x + c * d.x, 1 - d.y + c * d.y), 0.5),
				c = R.We(this.yl, d),
				d = R.ug(this.yl, d);
				0 > c.x && (d.x += -c.x, c.x = 0);
				1 < d.x && (c.x -= d.x - 1, d.x = 1);
				0 > c.y && (d.y += -c.y, c.y = 0);
				1 < d.y && (c.y -= d.y - 1, d.y = 1);
				if (this.of) {
					if (!this.hd) {
						this.Pe = 8;
						var e = R.oc.BYTES_PER_ELEMENT;
						this.Ch = new ArrayBuffer(8 * e);
						var f = [];
						for (a = 0; 8 > a; a++)
							f[a] = new R.oc(p, p, p, this.Ch, a * e);
						R.e(f, "cc.ProgressTimer. Not enough memory");
						f[0].s = this.ng(R.b(0, 1));
						f[0].l = this.og(R.b(0, 1));
						f[1].s = this.ng(R.b(0, 0));
						f[1].l = this.og(R.b(0, 0));
						f[6].s = this.ng(R.b(1, 1));
						f[6].l = this.og(R.b(1, 1));
						f[7].s = this.ng(R.b(1, 0));
						f[7].l = this.og(R.b(1, 0));
						this.hd = f
					}
					a = this.hd;
					a[2].s = this.ng(R.b(c.x, d.y));
					a[2].l = this.og(R.b(c.x, d.y));
					a[3].s = this.ng(R.b(c.x, c.y));
					a[3].l = this.og(R.b(c.x, c.y));
					a[4].s = this.ng(R.b(d.x, d.y));
					a[4].l =
						this.og(R.b(d.x, d.y));
					a[5].s = this.ng(R.b(d.x, c.y));
					a[5].l = this.og(R.b(d.x, c.y))
				} else {
					if (!this.hd) {
						this.Pe = 4;
						e = R.oc.BYTES_PER_ELEMENT;
						this.Ch = new ArrayBuffer(4 * e);
						this.hd = [];
						for (a = 0; 4 > a; a++)
							this.hd[a] = new R.oc(p, p, p, this.Ch, a * e);
						R.e(this.hd, "cc.ProgressTimer. Not enough memory")
					}
					a = this.hd;
					a[0].s = this.ng(R.b(c.x, d.y));
					a[0].l = this.og(R.b(c.x, d.y));
					a[1].s = this.ng(R.b(c.x, c.y));
					a[1].l = this.og(R.b(c.x, c.y));
					a[2].s = this.ng(R.b(d.x, d.y));
					a[2].l = this.og(R.b(d.x, d.y));
					a[3].s = this.ng(R.b(d.x, c.y));
					a[3].l = this.og(R.b(d.x,
								c.y))
				}
			}
		},
		Ai : function () {
			if (this.ta && this.hd) {
				for (var a = this.ta.jc.N.v, c = this.hd, d = 0, e = this.Pe; d < e; ++d)
					c[d].v = a;
				this.vy = m
			}
		},
		jL : p,
		V6 : function () {
			var a = this.ta,
			c = a.n(),
			d = this.yl;
			if (this.ze == R.bl) {
				this.mf = Math.round(Math.sqrt(c.width * c.width + c.height * c.height));
				var e = 270,
				f = 270,
				g = q,
				k = this.fK;
				k.x = c.width * d.x;
				k.y = -c.height * d.y;
				this.of ? e = 270 - 3.6 * this.Cl : f = 270 + 3.6 * this.Cl;
				a.qd && (k.x -= c.width * 2 * this.yl.x, e = -e - 180, f = -f - 180, g = !g);
				a.rd && (k.y += c.height * 2 * this.yl.y, g = !g, e = -e, f = -f);
				this.Xq = e;
				this.oJ = f;
				this.ZI = g
			} else {
				var g =
					this.Ys,
				f = this.Cl / 100,
				e = this.GI,
				g = R.size(c.width * (1 - g.x), c.height * (1 - g.y)),
				f = R.size((c.width - g.width) * f, (c.height - g.height) * f),
				f = R.size(g.width + f.width, g.height + f.height),
				l = R.b(c.width * d.x, c.height * d.y),
				k = l.x - f.width / 2;
				0.5 < d.x && f.width / 2 >= c.width - l.x && (k = c.width - f.width);
				g = l.y - f.height / 2;
				0.5 < d.y && f.height / 2 >= c.height - l.y && (g = c.height - f.height);
				e.x = 0;
				c = 1;
				a.qd && (e.x -= f.width, c = -1);
				0 < k && (e.x += k * c);
				e.y = 0;
				c = 1;
				a.rd && (e.y += f.height, c = -1);
				0 < g && (e.y -= g * c);
				e.width = f.width;
				e.height = -f.height
			}
		},
		W6 : function () {
			var a =
				this.ze;
			a === R.bl ? this.Z6() : a === R.Kp && this.M6();
			this.Ai();
			this.vy = m
		}
	});
R.ua.tc ? (Q = R.vc.prototype, Q.ctor = R.vc.prototype.$j, Q.fY = R.vc.prototype.j6, Q.Dz = R.vc.prototype.l6, Q.gm = R.vc.prototype.s6, Q.QF = R.vc.prototype.h6, Q.BM = R.vc.prototype.q4, Q.fa = R.vc.prototype.Jg, Q.jL = R.vc.prototype.W6) : (Q = R.vc.prototype, Q.ctor = R.vc.prototype.Zj, Q.fY = R.vc.prototype.i6, Q.Dz = R.vc.prototype.k6, Q.gm = R.vc.prototype.r6, Q.QF = R.vc.prototype.g6, Q.BM = R.vc.prototype.p4, Q.fa = R.vc.prototype.bk, Q.jL = R.vc.prototype.V6);
R.vc.create = function (a) {
	var c = new R.vc;
	return c.BM(a) ? c : p
};
R.Jz = -1;
R.$X = function (a, c) {
	a.Ye(c);
	var d = a.k;
	if (d)
		for (var e = 0; e < d.length; e++)
			R.$X(d[e], c)
};
R.Xf = R.r.extend({
		vj : p,
		Ss : 0,
		tq : q,
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.vj = p;
			this.Ss = 0;
			this.tq = q
		},
		m : function (a) {
			this.vj = a;
			this.Ss = 1;
			this.tq = q;
			R.Xf.MJ = m;
			R.Xf.MJ && (R.Jz = R.u.getParameter(R.u.STENCIL_BITS), 0 >= R.Jz && R.log("Stencil buffer is not enabled."), R.Xf.MJ = q);
			return m
		},
		sa : function () {
			R.r.prototype.sa.call(this);
			this.vj.sa()
		},
		Ii : function () {
			R.r.prototype.Ii.call(this);
			this.vj.Ii()
		},
		Ji : function () {
			this.vj.Ji();
			R.r.prototype.Ji.call(this)
		},
		ub : function () {
			this.vj.ub();
			R.r.prototype.ub.call(this)
		},
		Y : function (a) {
			var c = a || R.u;
			if (1 > R.Jz)
				R.r.prototype.Y.call(this, a);
			else if (!this.vj || !this.vj.Ua)
				this.tq && R.r.prototype.Y.call(this, a);
			else if (R.Xf.yx = -1, R.Xf.yx + 1 == R.Jz)
				R.Xf.xL = m, R.Xf.xL && (R.log("Nesting more than " + R.Jz + "stencils is not supported. Everything will be drawn without stencil for this node and its childs."), R.Xf.xL = q), R.r.prototype.Y.call(this, a);
			else {
				R.Xf.yx++;
				var d = 1 << R.Xf.yx,
				e = d | d - 1,
				f = c.isEnabled(c.STENCIL_TEST),
				g = c.getParameter(c.STENCIL_WRITEMASK),
				k = c.getParameter(c.STENCIL_FUNC),
				l = c.getParameter(c.STENCIL_REF),
				n = c.getParameter(c.STENCIL_VALUE_MASK),
				r = c.getParameter(c.STENCIL_FAIL),
				s = c.getParameter(c.STENCIL_PASS_DEPTH_FAIL),
				t = c.getParameter(c.STENCIL_PASS_DEPTH_PASS);
				c.enable(c.STENCIL_TEST);
				c.stencilMask(d);
				var v = c.getParameter(c.DEPTH_WRITEMASK);
				c.depthMask(q);
				c.stencilFunc(c.NEVER, d, d);
				c.stencilOp(!this.tq ? c.ZERO : c.REPLACE, c.KEEP, c.KEEP);
				R.Se.cM(R.Nb(), R.sba(), R.Ak(1, 1, 1, 1));
				c.stencilFunc(c.NEVER, d, d);
				c.stencilOp(!this.tq ? c.REPLACE : c.ZERO, c.KEEP, c.KEEP);
				if (1 > this.Ss) {
					var d =
						R.Ad.d().Tc(R.PA),
					w = c.getUniformLocation(d.Pr(), R.zR);
					R.qM(d.Pr());
					d.Ez(w, this.Ss);
					R.$X(this.vj, d)
				}
				R.tn();
				this.transform();
				this.vj.Y();
				R.sn();
				c.depthMask(v);
				c.stencilFunc(c.EQUAL, e, e);
				c.stencilOp(c.KEEP, c.KEEP, c.KEEP);
				R.r.prototype.Y.call(this, a);
				c.stencilFunc(k, l, n);
				c.stencilOp(r, s, t);
				c.stencilMask(g);
				f || c.disable(c.STENCIL_TEST);
				R.Xf.yx--
			}
		},
		Qsa : C("vj"),
		BBa : z("vj"),
		Lna : C("Ss"),
		Eza : z("Ss"),
		Kua : C("tq"),
		yAa : z("tq")
	});
R.Xf.MJ = p;
R.Xf.xL = p;
R.Xf.yx = p;
R.Xf.create = function (a) {
	var c = new R.Xf;
	c.m(a);
	return c
};
R.MP = R.Wa.extend({
		xt : q,
		ju : q,
		G : p,
		z : p,
		Zt : p,
		by : 0,
		rJ : 0,
		Cq : 0,
		YJ : 0,
		Do : 0,
		uK : 0,
		qK : p,
		pK : p,
		tb : p,
		nt : p,
		vi : p,
		Ae : p,
		ot : p,
		ku : p,
		ctor : function () {
			R.Wa.prototype.ctor.call(this);
			this.Zt = R.Nb();
			this.z = new R.Pj(770, 771);
			this.sL = R.u.createBuffer();
			this.ju = this.xt = q;
			this.G = p;
			this.uK = this.Do = this.YJ = this.Cq = this.rJ = this.by = 0;
			this.ku = this.ot = this.Ae = this.vi = this.nt = this.tb = this.pK = this.qK = p
		},
		ja : C("G"),
		Na : function (a) {
			this.G != a && (this.G = a)
		},
		gp : C("z"),
		Qd : function (a, c) {
			1 == arguments.length ? this.z = a : 2 == arguments.length && (this.z.src =
						a, this.z.da = c)
		},
		rg : function () {
			R.e(q, "Opacity no supported");
			return 0
		},
		U : function () {
			R.e(q, "Set opacity no supported")
		},
		Rd : x(),
		Ij : M(q),
		ub : function () {
			R.r.prototype.ub.call(this);
			this.Ae && R.u.deleteBuffer(this.Ae);
			this.ku && R.u.deleteBuffer(this.ku);
			this.ot && R.u.deleteBuffer(this.ot)
		},
		Fua : C("xt"),
		jAa : z("xt"),
		cva : C("ju"),
		ABa : z("ju"),
		F$ : function (a, c, d, e, f) {
			R.e(f != p, "Invalid filename or texture");
			"string" === typeof f && (f = R.fb.d().Jd(f));
			R.r.prototype.q.call(this, R.Nb());
			this.R(R.Nb());
			this.Gi(m);
			this.ju = q;
			this.xt = m;
			this.Cq = -1 == c ? d / 5 : c;
			this.Cq *= this.Cq;
			this.by = d;
			this.rJ = 1 / a;
			a = (0 | 60 * a) + 2;
			this.Do = 0;
			this.pK = new Float32Array(a);
			this.qK = new Float32Array(2 * a);
			this.tb = new Float32Array(4 * a);
			this.vi = new Float32Array(4 * a);
			this.nt = new Uint8Array(8 * a);
			this.YJ = a;
			a = R.u;
			this.Ae = a.createBuffer();
			this.ku = a.createBuffer();
			this.ot = a.createBuffer();
			this.z.src = a.SRC_ALPHA;
			this.z.da = a.ONE_MINUS_SRC_ALPHA;
			this.Ye(R.Ad.d().Tc(R.rm));
			this.Na(f);
			this.L(e);
			this.AF();
			a.bindBuffer(a.ARRAY_BUFFER, this.Ae);
			a.bufferData(a.ARRAY_BUFFER,
				this.tb, a.DYNAMIC_DRAW);
			a.bindBuffer(a.ARRAY_BUFFER, this.ku);
			a.bufferData(a.ARRAY_BUFFER, this.vi, a.DYNAMIC_DRAW);
			a.bindBuffer(a.ARRAY_BUFFER, this.ot);
			a.bufferData(a.ARRAY_BUFFER, this.nt, a.DYNAMIC_DRAW);
			return m
		},
		KCa : function (a) {
			this.L(a);
			for (var c = this.nt, d = 0, e = 2 * this.Do; d < e; d++)
				c[4 * d] = a.i, c[4 * d + 1] = a.h, c[4 * d + 2] = a.c
		},
		reset : function () {
			this.Do = 0
		},
		q : function (a) {
			this.ju = m;
			this.Zt = R.b(a.x, a.y)
		},
		fa : function (a) {
			!(1 >= this.Do) && (this.G && this.G.td) && (a = a || R.u, R.Ip(this), R.Ld(R.Tp), R.Fi(this.z.src, this.z.da),
				R.Ih(this.G), a.bindBuffer(a.ARRAY_BUFFER, this.Ae), a.bufferData(a.ARRAY_BUFFER, this.tb, a.DYNAMIC_DRAW), a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.ku), a.bufferData(a.ARRAY_BUFFER, this.vi, a.DYNAMIC_DRAW), a.vertexAttribPointer(R.df, 2, a.FLOAT, q, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, this.ot), a.bufferData(a.ARRAY_BUFFER, this.nt, a.DYNAMIC_DRAW), a.vertexAttribPointer(R.Gg, 4, a.UNSIGNED_BYTE, m, 0, 0), a.drawArrays(a.TRIANGLE_STRIP, 0, 2 * this.Do), R.Ci++)
		},
		update : function (a) {
			if (this.ju) {
				a *=
				this.rJ;
				var c,
				d,
				e,
				f,
				g = 0,
				k = this.Do,
				l = this.pK,
				n = this.qK,
				r = this.tb,
				s = this.nt;
				for (e = 0; e < k; e++)
					l[e] -= a, 0 >= l[e] ? g++ : (c = e - g, 0 < g ? (l[c] = l[e], n[2 * c] = n[2 * e], n[2 * c + 1] = n[2 * e + 1], f = 2 * e, d = 2 * c, r[2 * d] = r[2 * f], r[2 * d + 1] = r[2 * f + 1], r[2 * (d + 1)] = r[2 * (f + 1)], r[2 * (d + 1) + 1] = r[2 * (f + 1) + 1], f *= 4, d *= 4, s[d + 0] = s[f + 0], s[d + 1] = s[f + 1], s[d + 2] = s[f + 2], s[d + 4] = s[f + 4], s[d + 5] = s[f + 5], s[d + 6] = s[f + 6]) : d = 8 * c, c = 255 * l[c], s[d + 3] = c, s[d + 7] = c);
				k -= g;
				e = m;
				if (k >= this.YJ)
					e = q;
				else if (0 < k && (a = R.SW(R.b(n[2 * (k - 1)], n[2 * (k - 1) + 1]), this.Zt) < this.Cq, d = 1 == k ? q : R.SW(R.b(n[2 *
										(k - 2)], n[2 * (k - 2) + 1]), this.Zt) < 2 * this.Cq, a || d))
					e = q;
				e && (n[2 * k] = this.Zt.x, n[2 * k + 1] = this.Zt.y, l[k] = 1, l = 8 * k, e = this.gb, s[l] = e.i, s[l + 1] = e.h, s[l + 2] = e.c, s[l + 4] = e.i, s[l + 5] = e.h, s[l + 6] = e.c, s[l + 3] = 255, s[l + 7] = 255, 0 < k && this.xt && (1 < k ? R.rO(n, this.by, this.tb, k, 1) : R.rO(n, this.by, this.tb, 0, 2)), k++);
				this.xt || R.rO(n, this.by, this.tb, 0, k);
				if (k && this.uK != k) {
					n = 1 / k;
					s = this.vi;
					for (e = 0; e < k; e++)
						s[4 * e] = 0, s[4 * e + 1] = n * e, s[2 * (2 * e + 1)] = 1, s[2 * (2 * e + 1) + 1] = n * e;
					this.uK = k
				}
				this.Do = k
			}
		}
	});
R.MP.create = function (a, c, d, e, f) {
	var g = new R.MP;
	return g && g.F$(a, c, d, e, f) ? g : p
};
R.ys = R.D.extend({
		bj : q,
		Il : 0,
		na : p,
		G : p,
		ti : p,
		Dt : p,
		wq : q,
		Yb : p,
		iJ : 0,
		ha : q,
		ctor : function () {
			this.bj = q;
			this.Il = 0;
			this.G = this.na = p;
			this.ti = R.b(0, 0);
			this.Dt = p;
			this.wq = q;
			this.Yb = p;
			this.iJ = 0;
			this.ha = q
		},
		tg : C("bj"),
		setActive : function (a) {
			this.bj = a;
			a || (a = R.o.d(), a.wv(a.Xm))
		},
		$ra : C("Il"),
		Vea : z("Il"),
		Xpa : C("na"),
		rAa : function (a) {
			this.na.width = parseInt(a.width);
			this.na.height = parseInt(a.height)
		},
		Rsa : C("ti"),
		CBa : z("ti"),
		fva : C("wq"),
		LBa : function (a) {
			this.wq != a && (this.wq = a, this.WD())
		},
		GE : function (a, c, d) {
			if (!c) {
				var e = R.o.d().Uy(),
				f = R.Wn(e.width),
				g = R.Wn(e.height),
				k = new Uint8Array(4 * f * g);
				if (!k)
					return R.log("cocos2d: CCGrid: not enough memory."), q;
				c = new R.Eb;
				c.jp(k, R.gl, f, g, e);
				if (!c)
					return R.log("cocos2d: CCGrid: error creating texture"), q
			}
			this.bj = q;
			this.Il = 0;
			this.na = a;
			this.G = c;
			this.wq = d || q;
			c = this.G.n();
			this.ti.x = c.width / a.width;
			this.ti.y = c.height / a.height;
			this.Dt = new R.j0;
			if (!this.Dt)
				return q;
			this.Dt.o$(this.G);
			this.Yb = R.Ad.d().Tc(R.iw);
			this.WD();
			return m
		},
		xu : function () {
			this.iJ = R.o.d().Xm;
			this.qda();
			this.Dt.M7(this.G)
		},
		uu : function (a) {
			this.Dt.x7(this.G);
			R.o.d().wv(this.iJ);
			if (a.Nr().Xu()) {
				var c = a.Nu();
				R.PE(c.x, c.y);
				a.Nr().WM();
				R.PE(-c.x, -c.y)
			}
			R.Ih(this.G);
			this.LL()
		},
		LL : function () {
			R.e(0, "")
		},
		AN : function () {
			R.e(0, "")
		},
		WD : function () {
			R.e(0, "")
		},
		qda : function () {
			var a = R.o.d().Uy();
			R.u.viewport(0, 0, a.width, a.height);
			R.bm(R.qm);
			R.Zu();
			var c = new R.wa;
			R.OM(c, 0, a.width, 0, a.height, -1, 1);
			R.$u(c);
			R.bm(R.pm);
			R.Zu();
			R.aY()
		}
	});
R.ys.create = function (a, c, d) {
	var e = new R.ys;
	return e && e.GE(a, c, d) ? e : p
};
R.XG = R.ys.extend({
		wj : p,
		tb : p,
		Um : p,
		hb : p,
		ui : p,
		Ae : p,
		ji : p,
		ctor : function () {
			R.ys.prototype.ctor.call(this);
			this.ji = this.Ae = this.ui = this.hb = this.Um = this.tb = this.wj = p
		},
		aZ : function (a) {
			R.e(a.x == (0 | a.x) && a.y == (0 | a.y), "Numbers must be integers");
			a = 0 | 3 * (a.x * (this.na.height + 1) + a.y);
			var c = this.tb;
			return new R.Pb(c[a], c[a + 1], c[a + 2])
		},
		Od : function (a) {
			R.e(a.x == (0 | a.x) && a.y == (0 | a.y), "Numbers must be integers");
			a = 0 | 3 * (a.x * (this.na.height + 1) + a.y);
			var c = this.Um;
			return new R.Pb(c[a], c[a + 1], c[a + 2])
		},
		yf : function (a, c) {
			R.e(a.x ==
				(0 | a.x) && a.y == (0 | a.y), "Numbers must be integers");
			var d = 0 | 3 * (a.x * (this.na.height + 1) + a.y),
			e = this.tb;
			e[d] = c.x;
			e[d + 1] = c.y;
			e[d + 2] = c.f;
			this.ha = m
		},
		LL : function () {
			var a = this.na.width * this.na.height;
			R.Ld(R.Gf | R.Ps);
			this.Yb.Sd();
			this.Yb.Gz();
			var c = R.u,
			d = this.ha;
			c.bindBuffer(c.ARRAY_BUFFER, this.Ae);
			d && c.bufferData(c.ARRAY_BUFFER, this.tb, c.DYNAMIC_DRAW);
			c.vertexAttribPointer(R.fc, 3, c.FLOAT, q, 0, 0);
			c.bindBuffer(c.ARRAY_BUFFER, this.ui);
			d && c.bufferData(c.ARRAY_BUFFER, this.wj, c.DYNAMIC_DRAW);
			c.vertexAttribPointer(R.df,
				2, c.FLOAT, q, 0, 0);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.ji);
			d && c.bufferData(c.ELEMENT_ARRAY_BUFFER, this.hb, c.STATIC_DRAW);
			c.drawElements(c.TRIANGLES, 6 * a, c.UNSIGNED_SHORT, 0);
			d && (this.ha = q);
			R.Qh()
		},
		AN : function () {
			if (0 < this.Il) {
				for (var a = this.Um, c = this.tb, d = 0, e = this.tb.length; d < e; d++)
					a[d] = c[d];
				--this.Il
			}
		},
		WD : function () {
			var a = R.u,
			c = this.G.on(),
			d = this.G.nn(),
			e = this.G.ea.height,
			f = this.na,
			g = (f.width + 1) * (f.height + 1);
			this.tb = new Float32Array(3 * g);
			this.wj = new Float32Array(2 * g);
			this.hb = new Uint16Array(6 * f.width *
					f.height);
			this.Ae && a.deleteBuffer(this.Ae);
			this.Ae = a.createBuffer();
			this.ui && a.deleteBuffer(this.ui);
			this.ui = a.createBuffer();
			this.ji && a.deleteBuffer(this.ji);
			this.ji = a.createBuffer();
			for (var k, l, n = this.hb, r = this.wj, s = this.wq, t = this.tb, g = 0; g < f.width; ++g)
				for (k = 0; k < f.height; ++k) {
					var v = k * f.width + g;
					l = g * this.ti.x;
					var w = l + this.ti.x,
					y = k * this.ti.y,
					A = y + this.ti.y,
					D = g * (f.height + 1) + k,
					H = (g + 1) * (f.height + 1) + k,
					J = (g + 1) * (f.height + 1) + (k + 1),
					K = g * (f.height + 1) + (k + 1);
					n[6 * v] = D;
					n[6 * v + 1] = H;
					n[6 * v + 2] = K;
					n[6 * v + 3] = H;
					n[6 * v + 4] = J;
					n[6 * v + 5] = K;
					var v = [3 * D, 3 * H, 3 * J, 3 * K],
					E = [{
							x : l,
							y : y,
							f : 0
						}, {
							x : w,
							y : y,
							f : 0
						}, {
							x : w,
							y : A,
							f : 0
						}, {
							x : l,
							y : A,
							f : 0
						}
					],
					D = [2 * D, 2 * H, 2 * J, 2 * K],
					w = [R.b(l, y), R.b(w, y), R.b(w, A), R.b(l, A)];
					for (l = 0; 4 > l; ++l)
						t[v[l]] = E[l].x, t[v[l] + 1] = E[l].y, t[v[l] + 2] = E[l].f, r[D[l]] = w[l].x / c, r[D[l] + 1] = s ? (e - w[l].y) / d : w[l].y / d
				}
			this.Um = new Float32Array(this.tb);
			a.bindBuffer(a.ARRAY_BUFFER, this.Ae);
			a.bufferData(a.ARRAY_BUFFER, this.tb, a.DYNAMIC_DRAW);
			a.bindBuffer(a.ARRAY_BUFFER, this.ui);
			a.bufferData(a.ARRAY_BUFFER, this.wj, a.DYNAMIC_DRAW);
			a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
				this.ji);
			a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.hb, a.STATIC_DRAW);
			this.ha = m
		}
	});
R.XG.create = function (a, c, d) {
	var e = new R.XG;
	return e && e.GE(a, c, d) ? e : p
};
R.dI = R.ys.extend({
		wj : p,
		tb : p,
		Um : p,
		hb : p,
		ui : p,
		Ae : p,
		ji : p,
		ctor : function () {
			R.ys.prototype.ctor.call(this);
			this.ji = this.Ae = this.ui = this.hb = this.Um = this.tb = this.wj = p
		},
		JY : function (a) {
			R.e(a.x == (0 | a.x) && a.y == (0 | a.y), "Numbers must be integers");
			a = 12 * (this.na.height * a.x + a.y);
			var c = this.tb;
			return new R.GA(new R.Pb(c[a], c[a + 1], c[a + 2]), new R.Pb(c[a + 3], c[a + 4], c[a + 5]), new R.Pb(c[a + 6], c[a + 7], c[a + 8]), new R.Pb(c[a + 9], c[a + 10], c[a + 11]))
		},
		Ni : function (a) {
			R.e(a.x == (0 | a.x) && a.y == (0 | a.y), "Numbers must be integers");
			a = 12 * (this.na.height *
					a.x + a.y);
			var c = this.Um;
			return new R.GA(new R.Pb(c[a], c[a + 1], c[a + 2]), new R.Pb(c[a + 3], c[a + 4], c[a + 5]), new R.Pb(c[a + 6], c[a + 7], c[a + 8]), new R.Pb(c[a + 9], c[a + 10], c[a + 11]))
		},
		gh : function (a, c) {
			R.e(a.x == (0 | a.x) && a.y == (0 | a.y), "Numbers must be integers");
			var d = 12 * (this.na.height * a.x + a.y),
			e = this.tb;
			e[d] = c.J.x;
			e[d + 1] = c.J.y;
			e[d + 2] = c.J.f;
			e[d + 3] = c.O.x;
			e[d + 4] = c.O.y;
			e[d + 5] = c.O.f;
			e[d + 6] = c.N.x;
			e[d + 7] = c.N.y;
			e[d + 8] = c.N.f;
			e[d + 9] = c.M.x;
			e[d + 10] = c.M.y;
			e[d + 11] = c.M.f;
			this.ha = m
		},
		LL : function () {
			var a = this.na.width * this.na.height;
			this.Yb.Sd();
			this.Yb.Gz();
			var c = R.u,
			d = this.ha;
			R.Ld(R.Gf | R.Ps);
			c.bindBuffer(c.ARRAY_BUFFER, this.Ae);
			d && c.bufferData(c.ARRAY_BUFFER, this.tb, c.DYNAMIC_DRAW);
			c.vertexAttribPointer(R.fc, 3, c.FLOAT, q, 0, this.tb);
			c.bindBuffer(c.ARRAY_BUFFER, this.ui);
			d && c.bufferData(c.ARRAY_BUFFER, this.wj, c.DYNAMIC_DRAW);
			c.vertexAttribPointer(R.df, 2, c.FLOAT, q, 0, this.wj);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.ji);
			d && c.bufferData(c.ELEMENT_ARRAY_BUFFER, this.hb, c.STATIC_DRAW);
			c.drawElements(c.TRIANGLES, 6 * a, c.UNSIGNED_SHORT,
				0);
			d && (this.ha = q);
			R.Qh()
		},
		AN : function () {
			if (0 < this.Il) {
				for (var a = this.tb, c = this.Um, d = 0; d < a.length; d++)
					c[d] = a[d];
				--this.Il
			}
		},
		WD : function () {
			var a = this.G.on(),
			c = this.G.nn(),
			d = this.G.ea.height,
			e = this.na,
			f = e.width * e.height;
			this.tb = new Float32Array(12 * f);
			this.wj = new Float32Array(8 * f);
			this.hb = new Uint16Array(6 * f);
			var g = R.u;
			this.Ae && g.deleteBuffer(this.Ae);
			this.Ae = g.createBuffer();
			this.ui && g.deleteBuffer(this.ui);
			this.ui = g.createBuffer();
			this.ji && g.deleteBuffer(this.ji);
			this.ji = g.createBuffer();
			var k,
			l,
			n =
				0,
			r = this.ti,
			s = this.tb,
			t = this.wj,
			v = this.wq;
			for (k = 0; k < e.width; k++)
				for (l = 0; l < e.height; l++) {
					var w = k * r.x,
					y = w + r.x,
					A = l * r.y,
					D = A + r.y;
					s[12 * n] = w;
					s[12 * n + 1] = A;
					s[12 * n + 2] = 0;
					s[12 * n + 3] = y;
					s[12 * n + 4] = A;
					s[12 * n + 5] = 0;
					s[12 * n + 6] = w;
					s[12 * n + 7] = D;
					s[12 * n + 8] = 0;
					s[12 * n + 9] = y;
					s[12 * n + 10] = D;
					s[12 * n + 11] = 0;
					var H = A,
					J = D;
					v && (H = d - A, J = d - D);
					t[8 * n] = w / a;
					t[8 * n + 1] = H / c;
					t[8 * n + 2] = y / a;
					t[8 * n + 3] = H / c;
					t[8 * n + 4] = w / a;
					t[8 * n + 5] = J / c;
					t[8 * n + 6] = y / a;
					t[8 * n + 7] = J / c;
					n++
				}
			a = this.hb;
			for (k = 0; k < f; k++)
				a[6 * k + 0] = 4 * k + 0, a[6 * k + 1] = 4 * k + 1, a[6 * k + 2] = 4 * k + 2, a[6 * k + 3] = 4 * k + 1, a[6 * k + 4] = 4 * k +
					2, a[6 * k + 5] = 4 * k + 3;
			this.Um = new Float32Array(this.tb);
			g.bindBuffer(g.ARRAY_BUFFER, this.Ae);
			g.bufferData(g.ARRAY_BUFFER, this.tb, g.DYNAMIC_DRAW);
			g.bindBuffer(g.ARRAY_BUFFER, this.ui);
			g.bufferData(g.ARRAY_BUFFER, this.wj, g.DYNAMIC_DRAW);
			g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, this.ji);
			g.bufferData(g.ELEMENT_ARRAY_BUFFER, this.hb, g.DYNAMIC_DRAW);
			this.ha = m
		}
	});
R.dI.create = function (a, c, d) {
	var e = new R.dI;
	e.GE(a, c, d);
	return e
};
R.j0 = R.D.extend({
		qB : p,
		Bl : p,
		WS : p,
		Ct : p,
		ctor : function () {
			this.Ct = R.u;
			this.WS = [0, 0, 0, 0];
			this.Bl = p;
			this.qB = this.Ct.createFramebuffer()
		},
		o$ : function (a) {
			var c = this.Ct;
			this.Bl = c.getParameter(c.FRAMEBUFFER_BINDING);
			c.bindFramebuffer(c.FRAMEBUFFER, this.qB);
			c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, a.Be, 0);
			c.checkFramebufferStatus(c.FRAMEBUFFER) != c.FRAMEBUFFER_COMPLETE && R.log("Frame Grabber: could not attach texture to frmaebuffer");
			c.bindFramebuffer(c.FRAMEBUFFER, this.Bl)
		},
		M7 : function () {
			var a =
				this.Ct;
			this.Bl = a.getParameter(a.FRAMEBUFFER_BINDING);
			a.bindFramebuffer(a.FRAMEBUFFER, this.qB);
			this.WS = a.getParameter(a.COLOR_CLEAR_VALUE);
			a.clearColor(0, 0, 0, 0);
			a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
		},
		x7 : function () {
			var a = this.Ct;
			a.bindFramebuffer(a.FRAMEBUFFER, this.Bl);
			a.colorMask(m, m, m, m)
		},
		Pma : function () {
			this.Ct.deleteFramebuffer(this.qB)
		}
	});
R.ms = -1;
R.Ze = R.D.extend({
		Iq : p,
		w : p,
		ud : R.ms,
		ctor : function () {
			this.w = this.Iq = p;
			this.ud = R.ms
		},
		description : function () {
			return "\x3ccc.Action | Tag \x3d " + this.ud + "\x3e"
		},
		copy : function () {
			return R.A(this)
		},
		A : function () {
			var a = new R.Ze;
			a.Iq = p;
			a.w = p;
			a.ud = this.ud;
			return a
		},
		Gk : M(m),
		H : function (a) {
			this.w = this.Iq = a
		},
		stop : function () {
			this.w = p
		},
		step : function () {
			R.log("[Action step]. override me")
		},
		update : function () {
			R.log("[Action update]. override me")
		},
		d$ : C("w"),
		jY : z("w"),
		nra : C("Iq"),
		ZAa : z("Iq"),
		c$ : C("ud"),
		up : z("ud"),
		zN : x(),
		dm : x()
	});
R.Ze.create = function () {
	return new R.Ze
};
R.om = R.Ze.extend({
		p : 0,
		ctor : function () {
			R.Ze.prototype.ctor.call(this);
			this.p = 0
		},
		tf : C("p"),
		IF : z("p"),
		reverse : function () {
			R.log("cocos2d: FiniteTimeAction#reverse: Implement me");
			return p
		},
		A : function () {
			return new R.om
		}
	});
R.SA = R.Ze.extend({
		Wq : 0,
		Rb : p,
		ctor : function () {
			R.Ze.prototype.ctor.call(this);
			this.Wq = 0;
			this.Rb = p
		},
		Y9 : C("Wq"),
		SN : z("Wq"),
		oa : function (a, c) {
			R.e(a != p, "");
			this.Rb = a;
			this.Wq = c;
			return m
		},
		A : function () {
			var a = new R.SA;
			a.oa(this.Rb.A(), this.Wq);
			return a
		},
		H : function (a) {
			R.Ze.prototype.H.call(this, a);
			this.Rb.H(a)
		},
		stop : function () {
			this.Rb.stop();
			R.Ze.prototype.stop.call(this)
		},
		step : function (a) {
			this.Rb.step(a * this.Wq)
		},
		Gk : function () {
			return this.Rb.Gk()
		},
		reverse : function () {
			return R.SA.create(this.Rb.reverse(), this.Wq)
		},
		OX : function (a) {
			this.Rb != a && (this.Rb = a)
		},
		gM : C("Rb")
	});
R.SA.create = function (a, c) {
	var d = new R.SA;
	return d && d.oa(a, c) ? d : p
};
R.WG = R.Ze.extend({
		zt : p,
		dt : q,
		wB : q,
		lC : p,
		lx : p,
		Sr : 0,
		bs : 0,
		js : 0,
		vr : 0,
		yL : p,
		ctor : function () {
			R.Ze.prototype.ctor.call(this);
			this.zt = p;
			this.wB = this.dt = q;
			this.lx = this.lC = p;
			this.vr = this.js = this.bs = this.Sr = 0;
			this.yL = R.Oc()
		},
		A : function () {
			var a = new R.WG,
			c = this.yL,
			c = new R.Xi(c.x, c.y, c.width, c.height);
			a.Hi(this.zt, c);
			return a
		},
		xua : C("dt"),
		Nza : z("dt"),
		Hi : function (a, c) {
			R.e(a != p, "");
			c = c || R.Oc();
			this.zt = a;
			this.yL = c;
			this.dt = !R.Oq(c);
			this.wB = q;
			var d = R.o.d().$;
			this.lx = R.b(d.width, d.height);
			this.lC = R.cm(this.lx, 0.5);
			this.dt &&
			(this.Sr =  - (c.x + c.width - this.lx.x), this.bs = -c.x, this.js = -c.y, this.vr =  - (c.y + c.height - this.lx.y), this.bs < this.Sr && (this.bs = this.Sr = (this.Sr + this.bs) / 2), this.js < this.vr && (this.js = this.vr = (this.js + this.vr) / 2), this.js == this.vr && this.Sr == this.bs && (this.wB = m));
			return m
		},
		step : function () {
			var a = this.zt.Gj(),
			c = this.zt.Hj(),
			a = this.lC.x - a,
			c = this.lC.y - c;
			this.dt ? this.wB || this.w.q(R.de(a, this.Sr, this.bs), R.de(c, this.vr, this.js)) : this.w.q(a, c)
		},
		Gk : function () {
			return !this.zt.Qf
		},
		stop : function () {
			this.w = p;
			R.Ze.prototype.stop.call(this)
		}
	});
R.WG.create = function (a, c) {
	c = c || new R.Oc;
	var d = new R.WG;
	return c != p && d && d.Hi(a, c) || d && d.Hi(a) ? d : p
};
R.B = R.om.extend({
		Ib : 0,
		jx : q,
		ctor : function () {
			R.om.prototype.ctor.call(this);
			this.Ib = 0;
			this.jx = q
		},
		xpa : C("Ib"),
		j : function (a) {
			this.p = 0 === a ? R.vA : a;
			this.Ib = 0;
			return this.jx = m
		},
		Gk : function () {
			return this.Ib >= this.p
		},
		A : function () {
			var a = new R.B;
			a.j(this.p);
			return a
		},
		step : function (a) {
			this.jx ? (this.jx = q, this.Ib = 0) : this.Ib += a;
			a = this.Ib / (1.192092896E-7 < this.p ? this.p : 1.192092896E-7);
			a = 1 > a ? a : 1;
			this.update(0 < a ? a : 0)
		},
		H : function (a) {
			R.Ze.prototype.H.call(this, a);
			this.Ib = 0;
			this.jx = m
		},
		reverse : function () {
			R.e(q, "cc.IntervalAction: reverse not implemented.");
			return p
		},
		es : function () {
			R.e(0, "Actioninterval setAmplitudeRate")
		},
		Lr : function () {
			R.e(0, "Actioninterval getAmplitudeRate");
			return 0
		}
	});
R.B.create = function (a) {
	var c = new R.B;
	c.j(a);
	return c
};
R.La = R.B.extend({
		kl : p,
		TK : p,
		Nt : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.kl = [];
			this.TK = p;
			this.Nt = 0
		},
		Zy : function (a, c) {
			R.e(a != p, "Sequence.initWithTwoActions");
			R.e(c != p, "Sequence.initWithTwoActions");
			this.j(a.tf() + c.tf());
			this.kl[0] = a;
			this.kl[1] = c;
			return m
		},
		A : function () {
			var a = new R.La;
			a.Zy(this.kl[0].A(), this.kl[1].A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.TK = this.kl[0].tf() / this.p;
			this.Nt = -1
		},
		stop : function () {
			-1 !== this.Nt && this.kl[this.Nt].stop();
			R.Ze.prototype.stop.call(this)
		},
		update : function (a) {
			var c = 0,
			d = this.TK,
			e = this.kl,
			f = this.Nt;
			a < d ? (a = d ? a / d : 1, 0 === c && 1 === f && (e[1].update(0), e[1].stop())) : (c = 1, a = 1 === d ? 1 : (a - d) / (1 - d), -1 === f && (e[0].H(this.w), e[0].update(1), e[0].stop()), f || (e[0].update(1), e[0].stop()));
			f === c && e[c].Gk() || (f !== c && e[c].H(this.w), e[c].update(a), this.Nt = c)
		},
		reverse : function () {
			return R.La.Yp(this.kl[1].reverse(), this.kl[0].reverse())
		},
		copy : function () {
			return this.A()
		}
	});
R.La.create = function (a) {
	var c = a instanceof Array ? a : arguments;
	0 < c.length && c[c.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
	for (var d = c[0], e = 1; e < c.length; e++)
		c[e] && (d = R.La.Yp(d, c[e]));
	return d
};
R.La.Yp = function (a, c) {
	var d = new R.La;
	d.Zy(a, c);
	return d
};
R.KA = R.B.extend({
		Sf : 0,
		bn : 0,
		MC : 0,
		GR : q,
		Rb : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.MC = this.bn = this.Sf = 0;
			this.GR = q;
			this.Rb = p
		},
		oa : function (a, c) {
			return this.j(a.tf() * c) ? (this.Sf = c, this.Rb = a, a instanceof R.Wf && (this.Sf -= 1), this.bn = 0, m) : q
		},
		A : function () {
			var a = new R.KA;
			a.oa(this.Rb.A(), this.Sf);
			return a
		},
		H : function (a) {
			this.bn = 0;
			this.MC = this.Rb.tf() / this.p;
			R.B.prototype.H.call(this, a);
			this.Rb.H(a)
		},
		stop : function () {
			this.Rb.stop();
			R.Ze.prototype.stop.call(this)
		},
		update : function (a) {
			var c = this.Rb,
			d =
				this.p,
			e = this.Sf,
			f = this.MC;
			if (a >= f) {
				for (; a > f && this.bn < e; )
					c.update(1), this.bn++, c.stop(), c.H(this.w), this.MC = f += c.tf() / d;
				1 <= a && this.bn < e && this.bn++;
				this.GR && (this.bn == e ? (c.update(1), c.stop()) : c.update(a - (f - c.tf() / d)))
			} else
				c.update(a * e % 1)
		},
		Gk : function () {
			return this.bn == this.Sf
		},
		reverse : function () {
			return R.KA.create(this.Rb.reverse(), this.Sf)
		},
		OX : function (a) {
			this.Rb != a && (this.Rb = a)
		},
		gM : C("Rb")
	});
R.KA.create = function (a, c) {
	var d = new R.KA;
	d.oa(a, c);
	return d
};
R.LA = R.B.extend({
		Rb : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.Rb = p
		},
		oa : function (a) {
			R.e(a != p, "");
			this.Rb = a;
			return m
		},
		A : function () {
			var a = new R.LA;
			a.oa(this.Rb.A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.Rb.H(a)
		},
		step : function (a) {
			var c = this.Rb;
			c.step(a);
			c.Gk() && (c.H(this.w), c.step(c.Ib - c.tf()))
		},
		Gk : M(q),
		reverse : function () {
			return R.LA.create(this.Rb.reverse())
		},
		OX : function (a) {
			this.Rb != a && (this.Rb = a)
		},
		gM : C("Rb")
	});
R.LA.create = function (a) {
	var c = new R.LA;
	return c && c.oa(a) ? c : p
};
R.Vh = R.B.extend({
		Tm : p,
		en : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.en = this.Tm = p
		},
		Zy : function (a, c) {
			R.e(a != p, "no action1");
			R.e(c != p, "no action2");
			var d = q,
			e = a.tf(),
			f = c.tf();
			this.j(Math.max(e, f)) && (this.Tm = a, this.en = c, e > f ? this.en = R.La.Yp(c, R.Bc.create(e - f)) : e < f && (this.Tm = R.La.Yp(a, R.Bc.create(f - e))), d = m);
			return d
		},
		A : function () {
			var a = new R.Vh;
			a.Zy(this.Tm.A(), this.en.A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.Tm.H(a);
			this.en.H(a)
		},
		stop : function () {
			this.Tm.stop();
			this.en.stop();
			R.Ze.prototype.stop.call(this)
		},
		update : function (a) {
			this.Tm && this.Tm.update(a);
			this.en && this.en.update(a)
		},
		reverse : function () {
			return R.Vh.Yp(this.Tm.reverse(), this.en.reverse())
		}
	});
R.Vh.create = function (a) {
	var c = a instanceof Array ? a : arguments;
	0 < c.length && c[c.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
	for (var d = c[0], e = 1; e < c.length; e++)
		c[e] != p && (d = this.Yp(d, c[e]));
	return d
};
R.Vh.Yp = function (a, c) {
	var d = new R.Vh;
	d.Zy(a, c);
	return d
};
R.zH = R.B.extend({
		bx : 0,
		Yq : 0,
		gJ : 0,
		YB : 0,
		So : 0,
		hJ : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.hJ = this.So = this.YB = this.gJ = this.Yq = this.bx = 0
		},
		j : function (a, c, d) {
			return R.B.prototype.j.call(this, a) ? (this.bx = c || 0, this.YB = d || this.bx, m) : q
		},
		A : function () {
			var a = new R.zH;
			a.j(this.p, this.bx, this.YB);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			var c = a.Ug % 360,
			d = this.bx - c;
			180 < d && (d -= 360);
			-180 > d && (d += 360);
			this.Yq = c;
			this.gJ = d;
			this.So = a.sj % 360;
			a = this.YB - this.So;
			180 < a && (a -= 360);
			-180 > a && (a += 360);
			this.hJ =
				a
		},
		reverse : function () {
			R.e(0, "RotateTo reverse not implemented")
		},
		update : function (a) {
			this.w && (this.w.RF(this.Yq + this.gJ * a), this.w.SF(this.So + this.hJ * a))
		}
	});
R.zH.create = function (a, c, d) {
	var e = new R.zH;
	e.j(a, c, d);
	return e
};
R.gw = R.B.extend({
		Wh : 0,
		Yq : 0,
		Bw : 0,
		So : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.So = this.Bw = this.Yq = this.Wh = 0
		},
		j : function (a, c, d) {
			return R.B.prototype.j.call(this, a) ? (this.Wh = c || 0, this.Bw = d || this.Wh, m) : q
		},
		A : function () {
			var a = new R.gw;
			a.j(this.p, this.Wh, this.Bw);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.Yq = a.Ug;
			this.So = a.sj
		},
		update : function (a) {
			this.w && (this.w.RF(this.Yq + this.Wh * a), this.w.SF(this.So + this.Bw * a))
		},
		reverse : function () {
			return R.gw.create(this.p, -this.Wh, -this.Bw)
		}
	});
R.gw.create = function (a, c, d) {
	var e = new R.gw;
	e.j(a, c, d);
	return e
};
R.Sh = R.B.extend({
		El : p,
		$d : p,
		Dd : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.El = R.b(0, 0);
			this.$d = R.b(0, 0);
			this.Dd = R.b(0, 0)
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.El.x = c.x, this.El.y = c.y, m) : q
		},
		A : function () {
			var a = new R.Sh;
			a.j(this.p, this.El);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			var c = a.Gj();
			a = a.Hj();
			this.Dd.x = c;
			this.Dd.y = a;
			this.$d.x = c;
			this.$d.y = a
		},
		update : function (a) {
			if (this.w) {
				var c = this.El.x * a;
				a *= this.El.y;
				var d = this.$d;
				if (R.lA) {
					var e = this.w.Hj(),
					f = this.Dd;
					d.x = d.x + this.w.Gj() - f.x;
					d.y = d.y + e - f.y;
					c += d.x;
					a += d.y;
					this.w.q(c, a);
					f.x = c;
					f.y = a
				} else
					this.w.q(d.x + c, d.y + a)
			}
		},
		reverse : function () {
			return R.Sh.create(this.p, R.b(-this.El.x, -this.El.y))
		}
	});
R.Sh.create = function (a, c) {
	var d = new R.Sh;
	d.j(a, c);
	return d
};
R.Es = R.Sh.extend({
		wt : p,
		ctor : function () {
			R.Sh.prototype.ctor.call(this);
			this.wt = R.b(0, 0)
		},
		j : function (a, c) {
			return R.Sh.prototype.j.call(this, a, c) ? (this.wt.x = c.x, this.wt.y = c.y, m) : q
		},
		A : function () {
			var a = new R.Es;
			a.j(this.p, this.wt);
			return a
		},
		H : function (a) {
			R.Sh.prototype.H.call(this, a);
			this.El.x = this.wt.x - a.Gj();
			this.El.y = this.wt.y - a.Hj()
		}
	});
R.Es.create = function (a, c) {
	var d = new R.Es;
	d.j(a, c);
	return d
};
R.Np = R.B.extend({
		Fd : 0,
		Gd : 0,
		Zx : 0,
		$x : 0,
		cx : 0,
		dx : 0,
		fg : 0,
		gg : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.gg = this.fg = this.dx = this.cx = this.$x = this.Zx = this.Gd = this.Fd = 0
		},
		j : function (a, c, d) {
			var e = q;
			R.B.prototype.j.call(this, a) && (this.cx = c, this.dx = d, e = m);
			return e
		},
		A : function () {
			var a = new R.Np;
			a.j(this.p, this.cx, this.dx);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.Zx = a.Fd % 180;
			this.fg = this.cx - this.Zx;
			180 < this.fg && (this.fg -= 360);
			-180 > this.fg && (this.fg += 360);
			this.$x = a.Gd % 360;
			this.gg = this.dx -
				this.$x;
			180 < this.gg && (this.gg -= 360);
			-180 > this.gg && (this.gg += 360)
		},
		update : function (a) {
			this.w.xv(this.Zx + this.fg * a);
			this.w.yv(this.$x + this.gg * a)
		}
	});
R.Np.create = function (a, c, d) {
	var e = new R.Np;
	e && e.j(a, c, d);
	return e
};
R.QA = R.Np.extend({
		j : function (a, c, d) {
			var e = q;
			R.Np.prototype.j.call(this, a, c, d) && (this.Fd = c, this.Gd = d, e = m);
			return e
		},
		A : function () {
			var a = new R.QA;
			a.j(this.p, this.Fd, this.Gd);
			return a
		},
		H : function (a) {
			R.Np.prototype.H.call(this, a);
			this.fg = this.Fd;
			this.gg = this.Gd;
			this.cx = this.Zx + this.fg;
			this.dx = this.$x + this.gg
		},
		reverse : function () {
			return R.QA.create(this.p, -this.Fd, -this.Gd)
		}
	});
R.QA.create = function (a, c, d) {
	var e = new R.QA;
	e && e.j(a, c, d);
	return e
};
R.Hp = R.B.extend({
		$d : p,
		di : p,
		Nm : 0,
		hk : 0,
		Dd : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.$d = R.b(0, 0);
			this.Dd = R.b(0, 0);
			this.di = R.b(0, 0);
			this.hk = this.Nm = 0
		},
		j : function (a, c, d, e) {
			return R.B.prototype.j.call(this, a) ? (this.di.x = c.x, this.di.y = c.y, this.Nm = d, this.hk = e, m) : q
		},
		A : function () {
			var a = new R.Hp;
			a.j(this.p, this.di, this.Nm, this.hk);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			var c = a.Gj();
			a = a.Hj();
			this.Dd.x = c;
			this.Dd.y = a;
			this.$d.x = c;
			this.$d.y = a
		},
		update : function (a) {
			if (this.w) {
				var c = a * this.hk %
					1,
				c = 4 * this.Nm * c * (1 - c),
				c = c + this.di.y * a;
				a *= this.di.x;
				var d = this.$d;
				if (R.lA) {
					var e = this.w.Hj(),
					f = this.Dd;
					d.x = d.x + this.w.Gj() - f.x;
					d.y = d.y + e - f.y;
					a += d.x;
					c += d.y;
					this.w.q(a, c);
					f.x = a;
					f.y = c
				} else
					this.w.q(d.x + a, d.y + c)
			}
		},
		reverse : function () {
			return R.Hp.create(this.p, R.b(-this.di.x, -this.di.y), this.Nm, this.hk)
		}
	});
R.Hp.create = function (a, c, d, e) {
	var f = new R.Hp;
	f.j(a, c, d, e);
	return f
};
R.aH = R.Hp.extend({
		H : function (a) {
			R.Hp.prototype.H.call(this, a);
			this.di.x -= this.$d.x;
			this.di.y -= this.$d.y
		},
		A : function () {
			var a = new R.aH;
			a.j(this.p, this.di, this.Nm, this.hk);
			return a
		}
	});
R.aH.create = function (a, c, d, e) {
	var f = new R.aH;
	f.j(a, c, d, e);
	return f
};
R.kU = function (a, c, d, e) {
	return 0 * Math.pow(1 - e, 3) + 3 * e * Math.pow(1 - e, 2) * a + 3 * Math.pow(e, 2) * (1 - e) * c + Math.pow(e, 3) * d
};
R.Cp = R.B.extend({
		fq : p,
		$d : p,
		Dd : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.fq = [];
			this.$d = R.b(0, 0);
			this.Dd = R.b(0, 0)
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.fq = c, m) : q
		},
		A : function () {
			for (var a = new R.Cp, c = [], d = 0; d < this.fq.length; d++) {
				var e = this.fq[d];
				c.push(R.b(e.x, e.y))
			}
			a.j(this.p, c);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			var c = a.Gj();
			a = a.Hj();
			this.Dd.x = c;
			this.Dd.y = a;
			this.$d.x = c;
			this.$d.y = a
		},
		update : function (a) {
			if (this.w) {
				var c = this.fq,
				d = R.kU(c[0].x, c[1].x, c[2].x,
						a);
				a = R.kU(c[0].y, c[1].y, c[2].y, a);
				c = this.$d;
				if (R.lA) {
					var e = this.w.Hj(),
					f = this.Dd;
					c.x = c.x + this.w.Gj() - f.x;
					c.y = c.y + e - f.y;
					d += c.x;
					a += c.y;
					this.w.q(d, a);
					f.x = d;
					f.y = a
				} else
					this.w.q(c.x + d, c.y + a)
			}
		},
		reverse : function () {
			var a = this.fq,
			a = [R.ug(a[1], R.lN(a[2])), R.ug(a[0], R.lN(a[2])), R.lN(a[2])];
			return R.Cp.create(this.p, a)
		}
	});
R.Cp.create = function (a, c) {
	var d = new R.Cp;
	d.j(a, c);
	return d
};
R.uG = R.Cp.extend({
		AD : p,
		ctor : function () {
			R.Cp.prototype.ctor.call(this);
			this.AD = []
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.AD = c, m) : q
		},
		A : function () {
			var a = new R.uG;
			a.j(this.p, this.AD);
			return a
		},
		H : function (a) {
			R.Cp.prototype.H.call(this, a);
			a = this.$d;
			var c = this.AD,
			d = this.fq;
			d[0] = R.We(c[0], a);
			d[1] = R.We(c[1], a);
			d[2] = R.We(c[2], a)
		}
	});
R.uG.create = function (a, c) {
	var d = new R.uG;
	d.j(a, c);
	return d
};
R.Ie = R.B.extend({
		ia : 1,
		ra : 1,
		hu : 1,
		iu : 1,
		kq : 0,
		lq : 0,
		fg : 0,
		gg : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.iu = this.hu = this.ra = this.ia = 1;
			this.gg = this.fg = this.lq = this.kq = 0
		},
		j : function (a, c, d) {
			return R.B.prototype.j.call(this, a) ? (this.kq = c, this.lq = d != p ? d : c, m) : q
		},
		A : function () {
			var a = new R.Ie;
			a.j(this.p, this.kq, this.lq);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.hu = a.ia;
			this.iu = a.ra;
			this.fg = this.kq - this.hu;
			this.gg = this.lq - this.iu
		},
		update : function (a) {
			this.w && this.w.jd(this.hu + this.fg * a, this.iu +
				this.gg * a)
		}
	});
R.Ie.create = function (a, c, d) {
	var e = new R.Ie;
	e.j(a, c, d);
	return e
};
R.lw = R.Ie.extend({
		H : function (a) {
			R.Ie.prototype.H.call(this, a);
			this.fg = this.hu * this.kq - this.hu;
			this.gg = this.iu * this.lq - this.iu
		},
		reverse : function () {
			return R.lw.create(this.p, 1 / this.kq, 1 / this.lq)
		},
		A : function () {
			var a = new R.lw;
			a.j(this.p, this.kq, this.lq);
			return a
		}
	});
R.lw.create = function (a, c, d) {
	var e = new R.lw;
	e.j(a, c, d);
	return e
};
R.$z = R.B.extend({
		Sf : 0,
		gK : q,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.Sf = 0;
			this.gK = q
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.Sf = c, m) : q
		},
		A : function () {
			var a = new R.$z;
			a.j(this.p, this.Sf);
			return a
		},
		update : function (a) {
			if (this.w && !this.Gk()) {
				var c = 1 / this.Sf;
				this.w.Aa(a % c > c / 2)
			}
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.gK = a.Ua
		},
		stop : function () {
			this.w.Aa(this.gK);
			R.B.prototype.stop.call(this)
		},
		reverse : function () {
			return R.$z.create(this.p, this.Sf)
		}
	});
R.$z.create = function (a, c) {
	var d = new R.$z;
	d.j(a, c);
	return d
};
R.ws = R.B.extend({
		update : function (a) {
			this.w.U(255 * a)
		},
		reverse : function () {
			return R.Yv.create(this.p)
		},
		A : function () {
			var a = new R.ws;
			a.j(this.p);
			return a
		}
	});
R.ws.create = function (a) {
	var c = new R.ws;
	c.j(a);
	return c
};
R.Yv = R.B.extend({
		update : function (a) {
			this.w.U(255 * (1 - a))
		},
		reverse : function () {
			return R.ws.create(this.p)
		},
		A : function () {
			var a = new R.Yv;
			a.j(this.p);
			return a
		}
	});
R.Yv.create = function (a) {
	var c = new R.Yv;
	c.j(a);
	return c
};
R.$v = R.B.extend({
		BD : p,
		eC : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.eC = this.BD = 0
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.BD = c, m) : q
		},
		A : function () {
			var a = new R.$v;
			a.j(this.p, this.BD);
			return a
		},
		update : function (a) {
			this.w.U(this.eC + (this.BD - this.eC) * a)
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.eC = a.rg()
		}
	});
R.$v.create = function (a, c) {
	var d = new R.$v;
	d.j(a, c);
	return d
};
R.fB = R.B.extend({
		be : p,
		pc : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.be = R.ce(0, 0, 0);
			this.pc = R.ce(0, 0, 0)
		},
		j : function (a, c, d, e) {
			return R.B.prototype.j.call(this, a) ? (this.be = R.ce(c, d, e), m) : q
		},
		A : function () {
			var a = new R.fB,
			c = this.be;
			a.j(this.p, c.i, c.h, c.c);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.pc = this.w.Lb()
		},
		update : function (a) {
			var c = this.pc,
			d = this.be;
			this.w.L(R.ce(c.i + (d.i - c.i) * a, c.h + (d.h - c.h) * a, c.c + (d.c - c.c) * a))
		}
	});
R.fB.create = function (a, c, d, e) {
	var f = new R.fB;
	f.j(a, c, d, e);
	return f
};
R.eB = R.B.extend({
		Vw : 0,
		Uw : 0,
		Tw : 0,
		xJ : 0,
		wJ : 0,
		vJ : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.vJ = this.wJ = this.xJ = this.Tw = this.Uw = this.Vw = 0
		},
		j : function (a, c, d, e) {
			return R.B.prototype.j.call(this, a) ? (this.Vw = c, this.Uw = d, this.Tw = e, m) : q
		},
		A : function () {
			var a = new R.eB;
			a.j(this.p, this.Vw, this.Uw, this.Tw);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			a.Fc && (a = a.Lb(), this.xJ = a.i, this.wJ = a.h, this.vJ = a.c)
		},
		update : function (a) {
			this.w.Fc && this.w.L(R.ce(this.xJ + this.Vw * a, this.wJ + this.Uw * a, this.vJ + this.Tw *
					a))
		},
		reverse : function () {
			return R.eB.create(this.p, -this.Vw, -this.Uw, -this.Tw)
		}
	});
R.eB.create = function (a, c, d, e) {
	var f = new R.eB;
	f.j(a, c, d, e);
	return f
};
R.Bc = R.B.extend({
		update : x(),
		reverse : function () {
			return R.Bc.create(this.p)
		},
		A : function () {
			var a = new R.Bc;
			a.j(this.p);
			return a
		}
	});
R.Bc.create = function (a) {
	var c = new R.Bc;
	c.j(a);
	return c
};
R.Js = R.B.extend({
		Vm : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.Vm = p
		},
		oa : function (a) {
			R.e(a != p, "");
			R.e(a != this.Vm, "");
			return R.B.prototype.j.call(this, a.tf()) ? (this.Vm = a, m) : q
		},
		A : function () {
			var a = new R.Js;
			a.oa(this.Vm.A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.Vm.H(a)
		},
		update : function (a) {
			this.Vm && this.Vm.update(1 - a)
		},
		reverse : function () {
			return this.Vm.A()
		},
		stop : function () {
			this.Vm.stop();
			R.Ze.prototype.stop.call(this)
		}
	});
R.Js.create = function (a) {
	var c = new R.Js;
	c.oa(a);
	return c
};
R.Xz = R.B.extend({
		ed : p,
		Tt : 0,
		PC : p,
		fx : 0,
		UK : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.ed = p;
			this.Tt = 0;
			this.PC = p;
			this.fx = 0;
			this.UK = p
		},
		Dj : C("ed"),
		CF : z("ed"),
		MV : function (a) {
			R.e(a != p, "Animate: argument Animation must be non-NULL");
			var c = a.tf();
			if (this.j(c * a.Sm)) {
				this.Tt = 0;
				this.CF(a);
				this.PC = p;
				this.fx = 0;
				var d = [],
				e = 0,
				f = c / a.hr;
				a = a.Kf;
				R.Zz(a, R.lm);
				for (var g = 0; g < a.length; g++) {
					var k = e * f / c,
					e = e + a[g].Jf;
					d.push(k)
				}
				this.UK = d;
				return m
			}
			return q
		},
		A : function () {
			var a = new R.Xz;
			a.MV(this.ed.A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this,
				a);
			this.ed.Qq && (this.PC = a.Q8());
			this.fx = this.Tt = 0
		},
		update : function (a) {
			1 > a && (a *= this.ed.Sm, (0 | a) > this.fx && (this.Tt = 0, this.fx++), a %= 1);
			for (var c = this.ed.Kf, d = c.length, e = this.UK, f = this.Tt; f < d; f++)
				if (e[f] <= a)
					this.w.fm(c[f].Ei()), this.Tt = f + 1;
				else
					break
		},
		reverse : function () {
			var a = this.ed,
			c = a.Kf,
			d = [];
			R.Zz(c, R.lm);
			if (0 < c.length)
				for (var e = c.length - 1; 0 <= e; e--) {
					var f = c[e];
					if (!f)
						break;
					d.push(f.A())
				}
			c = R.km.BU(d, a.Jf, a.Sm);
			c.PF(a.Qq);
			return R.Xz.create(c)
		},
		stop : function () {
			this.ed.Qq && this.w && this.w.fm(this.PC);
			R.Ze.prototype.stop.call(this)
		}
	});
R.Xz.create = function (a) {
	var c = new R.Xz;
	c.MV(a);
	return c
};
R.bI = R.B.extend({
		mh : p,
		pq : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.pq = this.mh = p
		},
		Hi : function (a, c) {
			return this.j(c.tf()) ? (this.pq = a, this.mh = c, m) : q
		},
		A : function () {
			var a = new R.bI;
			a.Hi(this.pq, this.mh.A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.mh.H(this.pq)
		},
		stop : function () {
			this.mh.stop()
		},
		update : function (a) {
			this.mh.update(a)
		},
		Qpa : C("pq"),
		mAa : function (a) {
			this.pq != a && (this.pq = a)
		}
	});
R.bI.create = function (a, c) {
	var d = new R.bI;
	d.Hi(a, c);
	return d
};
R.Wf = R.om.extend({
		Gk : M(m),
		step : function () {
			this.update(1)
		},
		update : x(),
		reverse : function () {
			return this.A()
		},
		A : function () {
			return new R.Wf
		}
	});
R.Uh = R.Wf.extend({
		update : function () {
			this.w.Aa(m)
		},
		reverse : function () {
			return R.Sj.create()
		},
		A : function () {
			return new R.Uh
		}
	});
R.Uh.create = function () {
	return new R.Uh
};
R.Sj = R.Wf.extend({
		update : function () {
			this.w.Aa(q)
		},
		reverse : function () {
			return R.Uh.create()
		},
		A : function () {
			return new R.Sj
		}
	});
R.Sj.create = function () {
	return new R.Sj
};
R.gB = R.Wf.extend({
		update : function () {
			this.w.Aa(!this.w.Ua)
		},
		reverse : function () {
			return new R.gB
		},
		A : function () {
			return new R.gB
		}
	});
R.gB.create = function () {
	return new R.gB
};
R.JA = R.Wf.extend({
		ux : m,
		ctor : function () {
			R.om.prototype.ctor.call(this);
			this.ux = m
		},
		update : function () {
			this.w.qp(this.ux)
		},
		m : function (a) {
			this.ux = a;
			return m
		},
		reverse : function () {
			return new R.JA(this.ux)
		},
		A : function () {
			return new R.JA(this.ux)
		}
	});
R.JA.create = function (a) {
	a == p && (a = m);
	var c = new R.JA;
	c && c.m(a);
	return c
};
R.yA = R.Wf.extend({
		qd : q,
		ctor : function () {
			R.om.prototype.ctor.call(this);
			this.qd = q
		},
		PV : function (a) {
			this.qd = a;
			return m
		},
		update : function () {
			this.w.zz(this.qd)
		},
		reverse : function () {
			return R.yA.create(!this.qd)
		},
		A : function () {
			var a = new R.yA;
			a.PV(this.qd);
			return a
		}
	});
R.yA.create = function (a) {
	var c = new R.yA;
	return c.PV(a) ? c : p
};
R.zA = R.Wf.extend({
		rd : q,
		ctor : function () {
			R.om.prototype.ctor.call(this);
			this.rd = q
		},
		QV : function (a) {
			this.rd = a;
			return m
		},
		update : function () {
			this.w.Nk(this.rd)
		},
		reverse : function () {
			return R.zA.create(!this.rd)
		},
		A : function () {
			var a = new R.zA;
			a.QV(this.rd);
			return a
		}
	});
R.zA.create = function (a) {
	var c = new R.zA;
	return c.QV(a) ? c : p
};
R.uH = R.Wf.extend({
		Z : p,
		ctor : function () {
			R.om.prototype.ctor.call(this);
			this.Z = p
		},
		TV : function (a) {
			this.Z = a;
			return m
		},
		update : function () {
			this.w.q(this.Z)
		},
		A : function () {
			var a = new R.uH,
			c = this.Z;
			a.TV(R.b(c.x, c.y));
			return a
		}
	});
R.uH.create = function (a) {
	var c = new R.uH;
	c.TV(a);
	return c
};
R.bc = R.Wf.extend({
		Wg : p,
		Xj : p,
		wo : p,
		If : p,
		ctor : function () {
			R.om.prototype.ctor.call(this);
			this.If = this.wo = this.Xj = this.Wg = p
		},
		Hi : function (a, c, d) {
			this.If = d;
			this.Xj = a;
			this.Wg = c;
			return m
		},
		xM : function (a) {
			this.wo = a;
			return m
		},
		execute : function () {
			this.Xj != p ? this.Xj.call(this.Wg, this.w, this.If) : this.wo && this.wo.call(p, this.w)
		},
		update : function () {
			this.execute()
		},
		Zsa : C("Wg"),
		IBa : function (a) {
			a != this.Wg && (this.Wg && (this.Wg = p), this.Wg = a)
		},
		copy : function () {
			var a = new R.bc;
			this.Wg ? a.Hi(this.Xj, this.Wg, this.If) : this.wo && a.xM(this.wo);
			return a
		},
		A : function () {
			var a = new R.bc;
			this.Wg ? a.Hi(this.Xj, this.Wg, this.If) : this.wo && a.xM(this.wo);
			return a
		}
	});
R.bc.create = function (a, c, d) {
	var e = new R.bc;
	if (1 == arguments.length) {
		if (e && e.xM(a))
			return e
	} else if (e && e.Hi(a, c, d))
		return e.Xj = a, e;
	return p
};
R.o0 = R.D.extend({
		vd : p,
		target : p,
		qr : 0,
		Aj : p,
		Dr : q,
		paused : q,
		yE : p,
		ctor : function () {
			this.vd = [];
			this.w = p;
			this.qr = 0;
			this.Aj = p;
			this.paused = this.Dr = q;
			this.yE = p
		}
	});
R.uZ = R.D.extend({
		Ah : p,
		Hg : p,
		pl : q,
		Ko : function (a, c) {
			for (var d = 0; d < a.length; d++)
				if (c == a[d].target)
					return a[d];
			return p
		},
		ctor : function () {
			this.Ah = [];
			this.Hg = p;
			this.pl = q
		},
		e7 : function (a, c, d) {
			R.e(a != p, "no action");
			R.e(c != p, "");
			var e = this.Ko(this.Ah, c);
			e || (e = new R.o0, e.paused = d, e.target = c, this.Ah.push(e));
			this.M2(e);
			e.vd.push(a);
			a.H(c)
		},
		Qya : function () {
			for (var a = this.Ah, c = 0; c < a.length; c++) {
				var d = a[c];
				d && this.hX(d.target, m)
			}
		},
		hX : function (a, c) {
			if (a != p) {
				var d = this.Ko(this.Ah, a);
				d && (-1 !== d.vd.indexOf(d.Aj) && !d.Dr &&
					(d.Dr = m), d.vd = [], this.Hg == d && !c ? this.pl = m : this.cJ(d))
			}
		},
		gX : function (a) {
			if (a != p) {
				var c = this.Ko(this.Ah, a.Iq);
				if (c)
					for (var d = 0; d < c.vd.length; d++) {
						if (c.vd[d] == a) {
							c.vd.splice(d, 1);
							break
						}
					}
				else
					R.log("cocos2d: removeAction: Target not found")
			}
		},
		Qca : function (a, c) {
			R.e(a != R.ms, "");
			R.e(c != p, "");
			var d = this.Ko(this.Ah, c);
			if (d)
				for (var e = d.vd.length, f = 0; f < e; ++f) {
					var g = d.vd[f];
					if (g && g.ud === a && g.Iq == c) {
						this.A5(f, d);
						break
					}
				}
		},
		jE : function (a, c) {
			R.e(a != R.ms, "");
			var d = this.Ko(this.Ah, c);
			if (d) {
				if (d.vd != p)
					for (var e = 0; e <
						d.vd.length; ++e) {
						var f = d.vd[e];
						if (f && f.ud === a)
							return f
					}
				R.log("cocos2d : getActionByTag(tag \x3d" + a + "): Action not found")
			}
			return p
		},
		Qaa : function (a) {
			return (a = this.Ko(this.Ah, a)) ? a.vd ? a.vd.length : 0 : 0
		},
		pz : function (a) {
			if (a = this.Ko(this.Ah, a))
				a.paused = m
		},
		as : function (a) {
			if (a = this.Ko(this.Ah, a))
				a.paused = q
		},
		nya : function () {
			for (var a = [], c = this.Ah, d = 0; d < c.length; d++) {
				var e = c[d];
				e && !e.paused && (e.paused = m, a.push(e.target))
			}
			return a
		},
		fda : function (a) {
			if (a)
				for (var c = 0; c < a.length; c++)
					a[c] && this.as(a[c])
		},
		Iya : function () {
			R.o.d().sg().Ev(this)
		},
		A5 : function (a, c) {
			c.vd[a] == c.Aj && !c.Dr && (c.Dr = m);
			R.Qn(c.vd, a);
			c.qr >= a && c.qr--;
			0 == c.vd.length && (this.Hg == c ? this.pl = m : this.cJ(c))
		},
		cJ : function (a) {
			R.ke(this.Ah, a);
			a && (a.vd = p, a.target = p)
		},
		M2 : function (a) {
			a.vd == p && (a.vd = [])
		},
		update : function (a) {
			for (var c = this.Ah, d, e = 0; e < c.length; e++) {
				d = this.Hg = c[e];
				if (!d.paused)
					for (d.qr = 0; d.qr < d.vd.length; d.qr++)
						if (d.Aj = d.vd[d.qr], d.Aj) {
							d.Dr = q;
							d.Aj.step(a);
							if (d.Dr)
								d.Aj = p;
							else if (d.Aj.Gk()) {
								d.Aj.stop();
								var f = d.Aj;
								d.Aj = p;
								this.gX(f)
							}
							d.Aj = p
						}
				this.pl && 0 === d.vd.length && this.cJ(d)
			}
		}
	});
R.xH = R.B.extend({
		be : 0,
		pc : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.pc = this.be = 0
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.be = c, m) : q
		},
		A : function () {
			var a = new R.xH;
			a.j(this.p, this.be);
			return a
		},
		reverse : function () {
			R.e(q, "reverse() not supported in ProgressTo");
			return p
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.pc = a.nE();
			100 == this.pc && (this.pc = 0)
		},
		update : function (a) {
			this.w instanceof R.vc && this.w.Pk(this.pc + (this.be - this.pc) * a)
		}
	});
R.xH.create = function (a, c) {
	var d = new R.xH;
	d.j(a, c);
	return d
};
R.fw = R.B.extend({
		be : 0,
		pc : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.pc = this.be = 0
		},
		j : function (a, c, d) {
			return R.B.prototype.j.call(this, a) ? (this.be = d, this.pc = c, m) : q
		},
		A : function () {
			var a = new R.fw;
			a.j(this.p, this.pc, this.be);
			return a
		},
		reverse : function () {
			return R.fw.create(this.p, this.be, this.pc)
		},
		H : function (a) {
			R.B.prototype.H.call(this, a)
		},
		update : function (a) {
			this.w instanceof R.vc && this.w.Pk(this.pc + (this.be - this.pc) * a)
		}
	});
R.fw.create = function (a, c, d) {
	var e = new R.fw;
	e.j(a, c, d);
	return e
};
R.mG = R.B.extend({
		NI : 0,
		OI : 0,
		QI : 0,
		lS : 0,
		mS : 0,
		nS : 0,
		KT : 0,
		LT : 0,
		MT : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.MT = this.LT = this.KT = this.nS = this.mS = this.lS = this.QI = this.OI = this.NI = 0
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			a = a.Nr();
			var c = a.rV();
			this.NI = c.x;
			this.OI = c.y;
			this.QI = c.f;
			c = a.wV();
			this.lS = c.x;
			this.mS = c.y;
			this.nS = c.f;
			a = a.k$();
			this.KT = a.x;
			this.LT = a.y;
			this.MT = a.f
		},
		A : function () {
			return new R.mG
		},
		reverse : function () {
			return R.Js.create(this)
		}
	});
R.Cg = R.mG.extend({
		mf : 0,
		QB : 0,
		Ts : 0,
		eJ : 0,
		Wh : 0,
		dJ : 0,
		CK : 0,
		AK : 0,
		BK : 0,
		zK : 0,
		ctor : function () {
			R.mG.prototype.ctor.call(this);
			this.zK = this.BK = this.AK = this.CK = this.dJ = this.Wh = this.eJ = this.Ts = this.QB = this.mf = 0
		},
		j : function (a, c, d, e, f, g, k) {
			return R.B.prototype.j.call(this, a) ? (this.mf = c, this.QB = d, this.Ts = e, this.eJ = f, this.Wh = g, this.dJ = k, this.AK = R.Ud(f), this.zK = R.Ud(k), m) : q
		},
		Mfa : function () {
			var a = this.w.Nr(),
			c = a.wV(),
			d = a.rV(),
			a = c.x - d.x,
			e = c.y - d.y,
			c = c.f - d.f,
			d = Math.sqrt(Math.pow(a, 2) + Math.pow(e, 2) + Math.pow(c, 2)),
			f = Math.sqrt(Math.pow(a,
						2) + Math.pow(e, 2));
			0 === f && (f = R.vA);
			0 === d && (d = R.vA);
			return {
				Laa : d / R.Lv.Vy(),
				zga : Math.acos(c / d),
				azimuth : 0 > a ? Math.PI - Math.asin(e / f) : Math.asin(e / f)
			}
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			a = this.Mfa();
			isNaN(this.mf) && (this.mf = a.Laa);
			isNaN(this.Ts) && (this.Ts = R.Xn(a.zga));
			isNaN(this.Wh) && (this.Wh = R.Xn(a.azimuth));
			this.CK = R.Ud(this.Ts);
			this.BK = R.Ud(this.Wh)
		},
		A : function () {
			var a = new R.Cg;
			a.j(this.p, this.mf, this.QB, this.Ts, this.eJ, this.Wh, this.dJ);
			return a
		},
		update : function (a) {
			var c = (this.mf + this.QB * a) * R.Lv.Vy(),
			d = this.CK + this.AK * a,
			e = this.BK + this.zK * a;
			a = Math.sin(d) * Math.cos(e) * c + this.NI;
			e = Math.sin(d) * Math.sin(e) * c + this.OI;
			c = Math.cos(d) * c + this.QI;
			this.w.Nr().KX(a, e, c)
		}
	});
R.Cg.create = function (a, c, d, e, f, g, k) {
	var l = new R.Cg;
	return l.j(a, c, d, e, f, g, k) ? l : p
};
R.je = R.B.extend({
		X : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.X = p
		},
		oa : function (a) {
			R.e(a != p, "");
			return this.j(a.tf()) ? (this.X = a, m) : q
		},
		A : function () {
			var a = new R.je;
			a.oa(this.X.A());
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.X.H(this.w)
		},
		stop : function () {
			this.X.stop();
			R.B.prototype.stop.call(this)
		},
		update : function (a) {
			this.X.update(a)
		},
		reverse : function () {
			return R.je.create(this.X.reverse())
		},
		gM : C("X")
	});
R.je.create = function (a) {
	var c = new R.je;
	c && c.oa(a);
	return c
};
R.Gp = R.je.extend({
		jg : 0,
		ctor : function () {
			R.je.prototype.ctor.call(this);
			this.jg = 0
		},
		kBa : z("jg"),
		Sra : C("jg"),
		oa : function (a, c) {
			return R.je.prototype.oa.call(this, a) ? (this.jg = c, m) : q
		},
		A : function () {
			var a = new R.Gp;
			a.oa(this.X.A(), this.jg);
			return a
		},
		reverse : function () {
			return R.Gp.create(this.X.reverse(), 1 / this.jg)
		}
	});
R.Gp.create = function (a, c) {
	var d = new R.Gp;
	d && d.oa(a, c);
	return d
};
R.Xv = R.Gp.extend({
		update : function (a) {
			this.X.update(Math.pow(a, this.jg))
		},
		reverse : function () {
			return R.Xv.create(this.X.reverse(), 1 / this.jg)
		},
		A : function () {
			var a = new R.Xv;
			a.oa(this.X.A(), this.jg);
			return a
		}
	});
R.Xv.create = function (a, c) {
	var d = new R.Xv;
	d && d.oa(a, c);
	return d
};
R.Un = R.Gp.extend({
		update : function (a) {
			this.X.update(Math.pow(a, 1 / this.jg))
		},
		reverse : function () {
			return R.Un.create(this.X.reverse(), 1 / this.jg)
		},
		A : function () {
			var a = new R.Un;
			a.oa(this.X.A(), this.jg);
			return a
		}
	});
R.Un.create = function (a, c) {
	var d = new R.Un;
	d && d.oa(a, c);
	return d
};
R.vs = R.Gp.extend({
		update : function (a) {
			a *= 2;
			1 > a ? this.X.update(0.5 * Math.pow(a, this.jg)) : this.X.update(1 - 0.5 * Math.pow(2 - a, this.jg))
		},
		A : function () {
			var a = new R.vs;
			a.oa(this.X.A(), this.jg);
			return a
		},
		reverse : function () {
			return R.vs.create(this.X.reverse(), this.jg)
		}
	});
R.vs.create = function (a, c) {
	var d = new R.vs;
	d && d.oa(a, c);
	return d
};
R.nA = R.je.extend({
		update : function (a) {
			this.X.update(0 === a ? 0 : Math.pow(2, 10 * (a - 1)))
		},
		reverse : function () {
			return R.pA.create(this.X.reverse())
		},
		A : function () {
			var a = new R.nA;
			a.oa(this.X.A());
			return a
		}
	});
R.nA.create = function (a) {
	var c = new R.nA;
	c && c.oa(a);
	return c
};
R.pA = R.je.extend({
		update : function (a) {
			this.X.update(1 == a ? 1 : -Math.pow(2, -10 * a) + 1)
		},
		reverse : function () {
			return R.nA.create(this.X.reverse())
		},
		A : function () {
			var a = new R.pA;
			a.oa(this.X.A());
			return a
		}
	});
R.pA.create = function (a) {
	var c = new R.pA;
	c && c.oa(a);
	return c
};
R.oA = R.je.extend({
		update : function (a) {
			1 != a && 0 !== a && (a *= 2, a = 1 > a ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2));
			this.X.update(a)
		},
		reverse : function () {
			return R.oA.create(this.X.reverse())
		},
		A : function () {
			var a = new R.oA;
			a.oa(this.X.A());
			return a
		}
	});
R.oA.create = function (a) {
	var c = new R.oA;
	c && c.oa(a);
	return c
};
R.qA = R.je.extend({
		update : function (a) {
			a = 0 === a || 1 == a ? a : -1 * Math.cos(a * Math.PI / 2) + 1;
			this.X.update(a)
		},
		reverse : function () {
			return R.sA.create(this.X.reverse())
		},
		A : function () {
			var a = new R.qA;
			a.oa(this.X.A());
			return a
		}
	});
R.qA.create = function (a) {
	var c = new R.qA;
	c && c.oa(a);
	return c
};
R.sA = R.je.extend({
		update : function (a) {
			a = 0 === a || 1 == a ? a : Math.sin(a * Math.PI / 2);
			this.X.update(a)
		},
		reverse : function () {
			return R.qA.create(this.X.reverse())
		},
		A : function () {
			var a = new R.sA;
			a.oa(this.X.A());
			return a
		}
	});
R.sA.create = function (a) {
	var c = new R.sA;
	c && c.oa(a);
	return c
};
R.rA = R.je.extend({
		update : function (a) {
			a = 0 === a || 1 == a ? a : -0.5 * (Math.cos(Math.PI * a) - 1);
			this.X.update(a)
		},
		A : function () {
			var a = new R.rA;
			a.oa(this.X.A());
			return a
		},
		reverse : function () {
			return R.rA.create(this.X.reverse())
		}
	});
R.rA.create = function (a) {
	var c = new R.rA;
	c && c.oa(a);
	return c
};
R.us = R.je.extend({
		Nf : p,
		ctor : function () {
			R.je.prototype.ctor.call(this);
			this.Nf = 0.3
		},
		yra : C("Nf"),
		cBa : z("Nf"),
		oa : function (a, c) {
			R.je.prototype.oa.call(this, a);
			this.Nf = c == p ? 0.3 : c;
			return m
		},
		reverse : function () {
			R.e(0, "Override me");
			return p
		},
		A : function () {
			var a = new R.us;
			a.oa(this.X.A(), this.Nf);
			return a
		}
	});
R.us.create = function (a, c) {
	var d = new R.us;
	return d && d.oa(a, c) ? d : p
};
R.Uv = R.us.extend({
		update : function (a) {
			var c = 0;
			0 === a || 1 === a ? c = a : (c = this.Nf / 4, a -= 1, c = -Math.pow(2, 10 * a) * Math.sin(2 * (a - c) * Math.PI / this.Nf));
			this.X.update(c)
		},
		reverse : function () {
			return R.Wv.create(this.X.reverse(), this.Nf)
		},
		A : function () {
			var a = new R.Uv;
			a.oa(this.X.A(), this.Nf);
			return a
		}
	});
R.Uv.create = function (a, c) {
	var d = new R.Uv;
	return d && d.oa(a, c) ? d : p
};
R.Wv = R.us.extend({
		update : function (a) {
			var c = 0,
			c = 0 === a || 1 == a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - this.Nf / 4) * Math.PI / this.Nf) + 1;
			this.X.update(c)
		},
		reverse : function () {
			return R.Uv.create(this.X.reverse(), this.Nf)
		},
		A : function () {
			var a = new R.Wv;
			a.oa(this.X.A(), this.Nf);
			return a
		}
	});
R.Wv.create = function (a, c) {
	var d = new R.Wv;
	d && d.oa(a, c);
	return d
};
R.Vv = R.us.extend({
		update : function (a) {
			var c = 0,
			c = this.Nf;
			if (0 === a || 1 == a)
				c = a;
			else {
				c || (c = this.Nf = 0.3 * 1.5);
				var d = c / 4;
				a = 2 * a - 1;
				c = 0 > a ? -0.5 * Math.pow(2, 10 * a) * Math.sin(2 * (a - d) * Math.PI / c) : 0.5 * Math.pow(2, -10 * a) * Math.sin(2 * (a - d) * Math.PI / c) + 1
			}
			this.X.update(c)
		},
		reverse : function () {
			return R.Vv.create(this.X.reverse(), this.Nf)
		},
		A : function () {
			var a = new R.Vv;
			a.oa(this.X.A(), this.Nf);
			return a
		}
	});
R.Vv.create = function (a, c) {
	var d = new R.Vv;
	d && d.oa(a, c);
	return d
};
R.Tn = R.je.extend({
		SD : function (a) {
			if (a < 1 / 2.75)
				return 7.5625 * a * a;
			if (a < 2 / 2.75)
				return a -= 1.5 / 2.75, 7.5625 * a * a + 0.75;
			if (a < 2.5 / 2.75)
				return a -= 2.25 / 2.75, 7.5625 * a * a + 0.9375;
			a -= 2.625 / 2.75;
			return 7.5625 * a * a + 0.984375
		},
		A : function () {
			var a = new R.Tn;
			a.oa(this.X.A());
			return a
		},
		reverse : function () {
			return R.Tn.create(this.X.reverse())
		}
	});
R.Tn.create = function (a) {
	var c = new R.Tn;
	c && c.oa(a);
	return c
};
R.Rv = R.Tn.extend({
		update : function (a) {
			this.X.update(1 - this.SD(1 - a))
		},
		reverse : function () {
			return R.Tv.create(this.X.reverse())
		},
		A : function () {
			var a = new R.Rv;
			a.oa(this.X.A());
			return a
		}
	});
R.Rv.create = function (a) {
	var c = new R.Rv;
	c && c.oa(a);
	return c
};
R.Tv = R.Tn.extend({
		update : function (a) {
			this.X.update(this.SD(a))
		},
		reverse : function () {
			return R.Rv.create(this.X.reverse())
		},
		A : function () {
			var a = new R.Tv;
			a.oa(this.X.A());
			return a
		}
	});
R.Tv.create = function (a) {
	var c = new R.Tv;
	c && c.oa(a);
	return c
};
R.Sv = R.Tn.extend({
		update : function (a) {
			var c = 0,
			c = 0.5 > a ? 0.5 * (1 - this.SD(1 - 2 * a)) : 0.5 * this.SD(2 * a - 1) + 0.5;
			this.X.update(c)
		},
		A : function () {
			var a = new R.Sv;
			a.oa(this.X.A());
			return a
		},
		reverse : function () {
			return R.Sv.create(this.X.reverse())
		}
	});
R.Sv.create = function (a) {
	var c = new R.Sv;
	c && c.oa(a);
	return c
};
R.Ov = R.je.extend({
		update : function (a) {
			this.X.update(0 === a || 1 == a ? a : a * a * (2.70158 * a - 1.70158))
		},
		reverse : function () {
			return R.Qv.create(this.X.reverse())
		},
		A : function () {
			var a = new R.Ov;
			a.oa(this.X.A());
			return a
		}
	});
R.Ov.create = function (a) {
	var c = new R.Ov;
	c && c.oa(a);
	return c
};
R.Qv = R.je.extend({
		update : function (a) {
			a -= 1;
			this.X.update(a * a * (2.70158 * a + 1.70158) + 1)
		},
		reverse : function () {
			return R.Ov.create(this.X.reverse())
		},
		A : function () {
			var a = new R.Qv;
			a.oa(this.X.A());
			return a
		}
	});
R.Qv.create = function (a) {
	var c = new R.Qv;
	c && c.oa(a);
	return c
};
R.Pv = R.je.extend({
		update : function (a) {
			a *= 2;
			1 > a ? this.X.update(a * a * (3.5949095 * a - 2.5949095) / 2) : (a -= 2, this.X.update(a * a * (3.5949095 * a + 2.5949095) / 2 + 1))
		},
		A : function () {
			var a = new R.Pv;
			a.oa(this.X.A());
			return a
		},
		reverse : function () {
			return R.Pv.create(this.X.reverse())
		}
	});
R.Pv.create = function (a) {
	var c = new R.Pv;
	c && c.oa(a);
	return c
};
R.me = R.B.extend({
		na : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.na = R.size(0, 0)
		},
		A : function () {
			var a = new R.me,
			c = this.na;
			a.j(this.p, R.size(c.width, c.height));
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			var c = this.ee(),
			d = this.w;
			(a = d.ee()) && 0 < a.Il ? (c = a.na, a.tg() && c.width == this.na.width && c.height == this.na.height ? a.AN() : R.e(0, "")) : (a && a.tg() && a.setActive(q), d.mea(c), d.ee().setActive(m))
		},
		reverse : function () {
			return R.Js.create(this)
		},
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.na.width =
					c.width, this.na.height = c.height, m) : q
		},
		ee : function () {
			R.e(0, "");
			return p
		}
	});
R.me.create = function (a, c) {
	var d = new R.me;
	d.j(a, c);
	return d
};
R.le = R.me.extend({
		ee : function () {
			return R.XG.create(this.na)
		},
		aZ : function (a) {
			return this.w.ee().aZ(a)
		},
		Od : function (a) {
			return this.w.ee().Od(a)
		},
		yf : function (a, c) {
			this.w.ee().yf(a, c)
		}
	});
R.le.create = function (a, c) {
	var d = new R.le;
	d.j(a, c);
	return d
};
R.ld = R.me.extend({
		JY : function (a) {
			return this.w.ee().JY(a)
		},
		Ni : function (a) {
			return this.w.ee().Ni(a)
		},
		gh : function (a, c) {
			this.w.ee().gh(a, c)
		},
		ee : function () {
			return R.dI.create(this.na)
		}
	});
R.ld.create = function (a, c) {
	var d = new R.ld;
	d.j(a, c);
	return d
};
R.Pp = R.Wf.extend({
		H : function (a) {
			R.Wf.prototype.H.call(this, a);
			(a = this.w.ee()) && a.tg() && a.setActive(q)
		}
	});
R.Pp.create = function () {
	return new R.Pp
};
R.tQ = R.Wf.extend({
		Sf : p,
		lua : function (a) {
			this.Sf = a;
			return m
		},
		H : function (a) {
			R.Wf.prototype.H.call(this, a);
			this.w.ee() && this.w.ee().tg() && this.w.ee().Vea(this.w.ee().Il + this.Sf)
		}
	});
R.tQ.create = function () {
	return new R.tQ
};
R.A1 = 16777215;
R.yc = function () {
	return Math.random() * R.A1
};
R.CR = R.le.extend({
		Qe : p,
		Za : p,
		$a : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.$a = this.Za = this.Qe = 0
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e) {
			return R.le.prototype.j.call(this, a, c) ? (this.Qe = d, this.Za = e, this.$a = 1, m) : q
		},
		update : function (a) {
			for (var c = this.na, d = this.Za, e = R.b(0, 0), f = this.$a, g = this.Qe, k = 0; k < c.width + 1; ++k)
				for (var l = 0; l < c.height + 1; ++l) {
					e.x = k;
					e.y = l;
					var n = this.Od(e);
					n.f += Math.sin(2 * Math.PI * a * g + 0.01 * (n.y + n.x)) * d * f;
					this.yf(e, n)
				}
		}
	});
R.CR.create = function (a, c, d, e) {
	var f = new R.CR;
	f.j(a, c, d, e);
	return f
};
R.VG = R.le.extend({
		j : function (a) {
			return R.le.prototype.j.call(this, a, R.size(1, 1))
		},
		GE : function (a, c) {
			return 1 != a.width || 1 != a.height ? (R.e(0, ""), q) : R.le.prototype.j.call(this, c, a)
		},
		update : function (a) {
			var c = Math.PI * a;
			a = Math.sin(c);
			var d = Math.cos(c / 2),
			c = new R.Pb,
			e = R.b(0, 0);
			e.x = e.y = 1;
			var f = this.Od(e);
			e.x = e.y = 0;
			var e = this.Od(e),
			g = f.x,
			k = e.x,
			l,
			n;
			g > k ? (f = R.b(0, 0), e = R.b(0, 1), l = R.b(1, 0), n = R.b(1, 1)) : (l = R.b(0, 0), n = R.b(0, 1), f = R.b(1, 0), e = R.b(1, 1), g = k);
			c.x = g - g * d;
			c.f = Math.abs(parseFloat(g * a / 4));
			a = this.Od(f);
			a.x = c.x;
			a.f += c.f;
			this.yf(f, a);
			a = this.Od(e);
			a.x = c.x;
			a.f += c.f;
			this.yf(e, a);
			a = this.Od(l);
			a.x -= c.x;
			a.f -= c.f;
			this.yf(l, a);
			a = this.Od(n);
			a.x -= c.x;
			a.f -= c.f;
			this.yf(n, a)
		}
	});
R.VG.create = function (a) {
	var c = new R.VG;
	c.j(a);
	return c
};
R.uP = R.VG.extend({
		update : function (a) {
			var c = Math.PI * a;
			a = Math.sin(c);
			var d = Math.cos(c / 2),
			c = new R.Pb,
			e = R.b(0, 0);
			e.x = e.y = 1;
			var f = this.Od(e);
			e.x = e.y = 0;
			var e = this.Od(e),
			g = f.y,
			k = e.y,
			l,
			n;
			g > k ? (f = R.b(0, 0), e = R.b(0, 1), l = R.b(1, 0), n = R.b(1, 1)) : (e = R.b(0, 0), f = R.b(0, 1), n = R.b(1, 0), l = R.b(1, 1), g = k);
			c.y = g - g * d;
			c.f = Math.abs(parseFloat(g * a) / 4);
			a = this.Od(f);
			a.y = c.y;
			a.f += c.f;
			this.yf(f, a);
			a = this.Od(e);
			a.y -= c.y;
			a.f -= c.f;
			this.yf(e, a);
			a = this.Od(l);
			a.y = c.y;
			a.f += c.f;
			this.yf(l, a);
			a = this.Od(n);
			a.y -= c.y;
			a.f -= c.f;
			this.yf(n, a)
		}
	});
R.uP.create = function (a) {
	var c = new R.uP;
	c.j(a);
	return c
};
R.DP = R.le.extend({
		Z : p,
		mf : 0,
		zx : 0,
		cS : q,
		ha : q,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.Z = R.b(0, 0);
			this.zx = this.mf = 0;
			this.ha = this.cS = q
		},
		wqa : C("zx"),
		EAa : z("zx"),
		Xza : z("cS"),
		rc : C("Z"),
		q : function (a) {
			R.iv(a, this.Z) || (this.Z.x = a.x, this.Z.y = a.y, this.ha = m)
		},
		j : function (a, c, d, e) {
			return R.le.prototype.j.call(this, a, c) ? (this.Z.x = -1, this.Z.y = -1, this.q(d), this.mf = e, this.zx = 0.7, this.ha = m) : q
		},
		update : function () {
			if (this.ha) {
				for (var a = this.na.width, c = this.na.height, d = this.mf, e = this.zx, f = R.b(0, 0), g = R.b(0, 0), k,
					l, n, r = 0; r < a + 1; ++r)
					for (var s = 0; s < c + 1; ++s)
						f.x = r, f.y = s, k = this.Od(f), g.x = this.Z.x - k.x, g.y = this.Z.y - k.y, l = R.op(g), l < d && (l = d - l, l /= d, 0 == l && (l = 0.0010), l = Math.log(l) * e, n = Math.exp(l) * d, l = R.op(g), 0 < l && (g.x /= l, g.y /= l, g.x *= n, g.y *= n, k.f += R.op(g) * e)), this.yf(f, k);
				this.ha = q
			}
		}
	});
R.DP.create = function (a, c, d, e) {
	var f = new R.DP;
	f.j(a, c, d, e);
	return f
};
R.uQ = R.le.extend({
		Z : p,
		mf : p,
		Qe : p,
		Za : p,
		$a : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.Z = R.b(0, 0);
			this.$a = this.Za = this.Qe = this.mf = 0
		},
		rc : C("Z"),
		q : function (a) {
			this.Z.x = a.x;
			this.Z.y = a.y
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e, f, g) {
			return R.le.prototype.j.call(this, a, c) ? (this.q(d), this.mf = e, this.Qe = f, this.Za = g, this.$a = 1, m) : q
		},
		update : function (a) {
			for (var c = this.na.width, d = this.na.height, e = R.b(0, 0), f = this.mf, g = this.Qe, k = this.Za, l = this.$a, n, r, s = R.b(0, 0), t = 0; t < c + 1; ++t)
				for (var v =
						0; v < d + 1; ++v)
					e.x = t, e.y = v, n = this.Od(e), s.x = this.Z.x - n.x, s.y = this.Z.y - n.y, r = R.op(s), r < f && (r = f - r, n.f += Math.sin(2 * a * Math.PI * g + 0.1 * r) * k * l * Math.pow(r / f, 2)), this.yf(e, n)
		}
	});
R.uQ.create = function (a, c, d, e, f, g) {
	var k = new R.uQ;
	k.j(a, c, d, e, f, g);
	return k
};
R.CQ = R.le.extend({
		pk : p,
		No : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.pk = 0;
			this.No = q
		},
		j : function (a, c, d, e) {
			return R.le.prototype.j.call(this, a, c) ? (this.pk = d, this.No = e, m) : q
		},
		update : function () {
			for (var a = this.na.width, c = this.na.height, d = this.pk, e = this.No, f = R.b(0, 0), g, k = 0; k < a + 1; ++k)
				for (var l = 0; l < c + 1; ++l)
					f.x = k, f.y = l, g = this.Od(f), g.x += R.yc() % (2 * d) - d, g.y += R.yc() % (2 * d) - d, e && (g.f += R.yc() % (2 * d) - d), this.yf(f, g)
		}
	});
R.CQ.create = function (a, c, d, e) {
	var f = new R.CQ;
	f.j(a, c, d, e);
	return f
};
R.EP = R.le.extend({
		Qe : p,
		Za : p,
		$a : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.$a = this.Za = this.Qe = 0
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e) {
			return R.le.prototype.j.call(this, a, c) ? (this.Qe = d, this.Za = e, this.$a = 1, m) : q
		},
		update : function (a) {
			for (var c = this.na.width, d = this.na.height, e = R.b(0, 0), f = this.Qe, g = this.Za, k = this.$a, l, n = 1; n < c; ++n)
				for (var r = 1; r < d; ++r)
					e.x = n, e.y = r, l = this.Od(e), l.x += Math.sin(2 * a * Math.PI * f + 0.01 * l.x) * g * k, l.y += Math.sin(2 * a * Math.PI * f + 0.01 * l.y) * g * k, this.yf(e,
						l)
		}
	});
R.EP.create = function (a, c, d, e) {
	var f = new R.EP;
	f.j(a, c, d, e);
	return f
};
R.BR = R.le.extend({
		Qe : p,
		Za : p,
		$a : p,
		uL : p,
		JJ : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.$a = this.Za = this.Qe = 0;
			this.JJ = this.uL = q
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e, f, g) {
			return R.le.prototype.j.call(this, a, c) ? (this.Qe = d, this.Za = e, this.$a = 1, this.JJ = f, this.uL = g, m) : q
		},
		update : function (a) {
			for (var c = this.na.width, d = this.na.height, e = R.b(0, 0), f = this.uL, g = this.JJ, k = this.Qe, l = this.Za, n = this.$a, r, s = 0; s < c + 1; ++s)
				for (var t = 0; t < d + 1; ++t)
					e.x = s, e.y = t, r = this.Od(e), f && (r.x += Math.sin(2 *
							a * Math.PI * k + 0.01 * r.y) * l * n), g && (r.y += Math.sin(2 * a * Math.PI * k + 0.01 * r.x) * l * n), this.yf(e, r)
		}
	});
R.BR.create = function (a, c, d, e, f, g) {
	var k = new R.BR;
	k.j(a, c, d, e, f, g);
	return k
};
R.xR = R.le.extend({
		Z : p,
		fL : p,
		Za : p,
		$a : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.Z = R.b(0, 0);
			this.$a = this.Za = this.fL = 0
		},
		rc : C("Z"),
		q : function (a) {
			this.Z.x = a.x;
			this.Z.y = a.y
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e, f) {
			return R.le.prototype.j.call(this, a, c) ? (this.q(d), this.fL = e, this.Za = f, this.$a = 1, m) : q
		},
		update : function (a) {
			for (var c = this.Z, d = this.na.width, e = this.na.height, f = R.b(0, 0), g = 0.1 * this.Za * this.$a, k = this.fL, l, n, r, s = R.b(0, 0), t = 0; t < d + 1; ++t)
				for (var v = 0; v < e + 1; ++v)
					f.x = t,
					f.y = v, l = this.Od(f), s.x = t - d / 2, s.y = v - e / 2, n = R.op(s) * Math.cos(Math.PI / 2 + 2 * a * Math.PI * k) * g, r = Math.sin(n) * (l.y - c.y) + Math.cos(n) * (l.x - c.x), n = Math.cos(n) * (l.y - c.y) - Math.sin(n) * (l.x - c.x), l.x = c.x + r, l.y = c.y + n, this.yf(f, l)
		}
	});
R.xR.create = function (a, c, d, e, f) {
	var g = new R.xR;
	g.j(a, c, d, e, f);
	return g
};
R.DA = R.le.extend({
		update : function (a) {
			var c = Math.max(0, a - 0.25),
			c = -100 - 500 * c * c,
			d = +Math.PI / 2 + -Math.PI / 2 * Math.sqrt(a);
			a = Math.sin(d);
			for (var d = Math.cos(d), e = this.na, f = R.b(0, 0), g = 0; g <= e.width; ++g)
				for (var k = 0; k <= e.height; ++k) {
					f.x = g;
					f.y = k;
					var l = this.Od(f),
					n = Math.sqrt(l.x * l.x + (l.y - c) * (l.y - c)),
					r = n * a,
					s = Math.asin(l.x / n) / a,
					t = Math.cos(s);
					l.x = s <= Math.PI ? r * Math.sin(s) : 0;
					l.y = n + c - r * (1 - t) * a;
					l.f = r * (1 - t) * d / 7;
					0.5 > l.f && (l.f = 0.5);
					this.yf(f, l)
				}
		}
	});
R.DA.create = function (a, c) {
	var d = new R.DA;
	d.j(a, c);
	return d
};
R.DQ = R.ld.extend({
		pk : 0,
		No : q,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.pk = 0;
			this.No = q
		},
		j : function (a, c, d, e) {
			return R.ld.prototype.j.call(this, a, c) ? (this.pk = d, this.No = e, m) : q
		},
		update : function () {
			for (var a = this.na, c = this.pk, d = R.b(0, 0), e = 0; e < a.width; ++e)
				for (var f = 0; f < a.height; ++f) {
					d.x = e;
					d.y = f;
					var g = this.Ni(d);
					g.J.x += R.yc() % (2 * c) - c;
					g.O.x += R.yc() % (2 * c) - c;
					g.N.x += R.yc() % (2 * c) - c;
					g.M.x += R.yc() % (2 * c) - c;
					g.J.y += R.yc() % (2 * c) - c;
					g.O.y += R.yc() % (2 * c) - c;
					g.N.y += R.yc() % (2 * c) - c;
					g.M.y += R.yc() % (2 * c) - c;
					this.No && (g.J.f +=
						R.yc() % (2 * c) - c, g.O.f += R.yc() % (2 * c) - c, g.N.f += R.yc() % (2 * c) - c, g.M.f += R.yc() % (2 * c) - c);
					this.gh(d, g)
				}
		}
	});
R.DQ.create = function (a, c, d, e) {
	var f = new R.DQ;
	f.j(a, c, d, e);
	return f
};
R.EQ = R.ld.extend({
		pk : 0,
		OC : q,
		xT : q,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.pk = 0;
			this.OC = this.No = q
		},
		j : function (a, c, d, e) {
			return R.ld.prototype.j.call(this, a, c) ? (this.OC = q, this.pk = d, this.xT = e, m) : q
		},
		update : function () {
			if (this.OC === q) {
				for (var a = this.na, c = this.pk, d, e = R.b(0, 0), f = 0; f < a.width; ++f)
					for (var g = 0; g < a.height; ++g)
						e.x = f, e.y = g, d = this.Ni(e), d.J.x += R.yc() % (2 * c) - c, d.O.x += R.yc() % (2 * c) - c, d.N.x += R.yc() % (2 * c) - c, d.M.x += R.yc() % (2 * c) - c, d.J.y += R.yc() % (2 * c) - c, d.O.y += R.yc() % (2 * c) - c, d.N.y += R.yc() % (2 * c) -
						c, d.M.y += R.yc() % (2 * c) - c, this.xT && (d.J.f += R.yc() % (2 * c) - c, d.O.f += R.yc() % (2 * c) - c, d.N.f += R.yc() % (2 * c) - c, d.M.f += R.yc() % (2 * c) - c), this.gh(e, d);
				this.OC = m
			}
		}
	});
R.EQ.create = function (a, c, d, e) {
	var f = new R.EQ;
	f.j(a, c, d, e);
	return f
};
function ra() {
	this.Er = this.Nfa = this.position = R.rH
}
R.FQ = R.ld.extend({
		Ox : 0,
		uk : 0,
		xi : p,
		Kb : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.xi = [];
			this.Kb = [];
			this.uk = this.Ox = 0
		},
		j : function (a, c, d) {
			return R.ld.prototype.j.call(this, a, c) ? (this.Ox = d, this.Kb = this.xi = p, m) : q
		},
		bO : function (a, c) {
			for (var d = c - 1; 0 <= d; d--) {
				var e = 0 | R.yc() % (d + 1),
				f = a[d];
				a[d] = a[e];
				a[e] = f
			}
		},
		tV : function (a) {
			var c = this.na,
			d = a.width * c.height + a.height;
			return R.size(this.xi[d] / c.height - a.width, this.xi[d] % c.height - a.height)
		},
		gca : function (a, c) {
			var d = this.Ni(a),
			e = this.w.ee().ti,
			f = c.position;
			d.J.x += f.x * e.x;
			d.J.y += f.y * e.y;
			d.O.x += f.x * e.x;
			d.O.y += f.y * e.y;
			d.N.x += f.x * e.x;
			d.N.y += f.y * e.y;
			d.M.x += f.x * e.x;
			d.M.y += f.y * e.y;
			this.gh(a, d)
		},
		H : function (a) {
			R.ld.prototype.H.call(this, a);
			a = this.na;
			this.uk = a.width * a.height;
			this.xi = [];
			for (var c = 0; c < this.uk; ++c)
				this.xi[c] = c;
			this.bO(this.xi, this.uk);
			for (var c = [], d = 0, e = 0; e < a.width; ++e)
				for (var f = 0; f < a.height; ++f)
					c[d] = new ra, c[d].position = R.b(e, f), c[d].Nfa = R.b(e, f), c[d].Er = this.tV(R.size(e, f)), ++d;
			this.Kb = c
		},
		update : function (a) {
			for (var c = 0, d = this.na, e = this.Kb, f, g =
					R.b(0, 0), k = 0; k < d.width; ++k)
				for (var l = 0; l < d.height; ++l)
					g.x = k, g.y = l, f = e[c], f.position.x = f.Er.width * a, f.position.y = f.Er.height * a, this.gca(g, f), ++c
		}
	});
R.FQ.create = function (a, c, d) {
	var e = new R.FQ;
	e.j(a, c, d);
	return e
};
R.Zv = R.ld.extend({
		cG : function (a, c) {
			var d = this.na.width * c,
			e = this.na.height * c;
			return 0 == d + e ? 1 : Math.pow((a.width + a.height) / (d + e), 6)
		},
		mO : function (a) {
			this.gh(a, this.Ni(a))
		},
		lO : function (a) {
			this.gh(a, new R.GA)
		},
		LY : function (a, c) {
			var d = this.Ni(a),
			e = this.w.ee().ti;
			d.J.x += e.x / 2 * (1 - c);
			d.J.y += e.y / 2 * (1 - c);
			d.O.x -= e.x / 2 * (1 - c);
			d.O.y += e.y / 2 * (1 - c);
			d.N.x += e.x / 2 * (1 - c);
			d.N.y -= e.y / 2 * (1 - c);
			d.M.x -= e.x / 2 * (1 - c);
			d.M.y -= e.y / 2 * (1 - c);
			this.gh(a, d)
		},
		update : function (a) {
			for (var c = this.na, d = R.b(0, 0), e = R.size(0, 0), f, g = 0; g < c.width; ++g)
				for (var k =
						0; k < c.height; ++k)
					d.x = g, d.y = k, e.width = g, e.height = k, f = this.cG(e, a), 0 == f ? this.lO(d) : 1 > f ? this.LY(d, f) : this.mO(d)
		}
	});
R.Zv.create = function (a, c) {
	var d = new R.Zv;
	d.j(a, c);
	return d
};
R.TG = R.Zv.extend({
		cG : function (a, c) {
			return 0 == a.width + a.height ? 1 : Math.pow((this.na.width * (1 - c) + this.na.height * (1 - c)) / (a.width + a.height), 6)
		}
	});
R.TG.create = function (a, c) {
	var d = new R.TG;
	d.j(a, c);
	return d
};
R.xA = R.Zv.extend({
		cG : function (a, c) {
			var d = this.na.height * c;
			return 0 == d ? 1 : Math.pow(a.height / d, 6)
		},
		LY : function (a, c) {
			var d = this.Ni(a),
			e = this.w.ee().ti;
			d.J.y += e.y / 2 * (1 - c);
			d.O.y += e.y / 2 * (1 - c);
			d.N.y -= e.y / 2 * (1 - c);
			d.M.y -= e.y / 2 * (1 - c);
			this.gh(a, d)
		}
	});
R.xA.create = function (a, c) {
	var d = new R.xA;
	d.j(a, c);
	return d
};
R.UG = R.xA.extend({
		cG : function (a, c) {
			return 0 == a.height ? 1 : Math.pow(this.na.height * (1 - c) / a.height, 6)
		}
	});
R.UG.create = function (a, c) {
	var d = new R.UG;
	d.j(a, c);
	return d
};
R.fI = R.ld.extend({
		Ox : p,
		uk : 0,
		xi : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.xi = [];
			this.Ox = p;
			this.uk = 0
		},
		j : function (a, c, d) {
			return R.ld.prototype.j.call(this, a, c) ? (this.Ox = d, this.xi = p, m) : q
		},
		bO : function (a, c) {
			for (var d = c - 1; 0 <= d; d--) {
				var e = 0 | R.yc() % (d + 1),
				f = a[d];
				a[d] = a[e];
				a[e] = f
			}
		},
		mO : function (a) {
			this.gh(a, this.Ni(a))
		},
		lO : function (a) {
			this.gh(a, new R.GA)
		},
		H : function (a) {
			R.ld.prototype.H.call(this, a);
			this.uk = this.na.width * this.na.height;
			a = [];
			for (var c = 0; c < this.uk; ++c)
				a[c] = c;
			this.xi = a;
			this.bO(this.xi,
				this.uk)
		},
		update : function (a) {
			a = 0 | a * this.uk;
			for (var c = this.na, d, e = R.b(0, 0), f = 0; f < this.uk; f++)
				d = this.xi[f], e.x = 0 | d / c.height, e.y = d % (0 | c.height), f < a ? this.lO(e) : this.mO(e)
		}
	});
R.fI.create = function (a, c, d) {
	d = d || 0;
	var e = new R.fI;
	e.j(a, c, d);
	return e
};
R.DR = R.ld.extend({
		Qe : 0,
		Za : 0,
		$a : 0,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.$a = this.Za = this.Qe = 0
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e) {
			return R.ld.prototype.j.call(this, a, c) ? (this.Qe = d, this.Za = e, this.$a = 1, m) : q
		},
		update : function (a) {
			for (var c = this.na, d = this.Qe, e = this.Za, f = this.$a, g = R.b(0, 0), k, l = 0; l < c.width; l++)
				for (var n = 0; n < c.height; n++)
					g.x = l, g.y = n, k = this.Ni(g), k.J.f = Math.sin(2 * a * Math.PI * d + 0.01 * (k.J.y + k.J.x)) * e * f, k.O.f = k.J.f, k.N.f = k.J.f, k.M.f = k.J.f, this.gh(g, k)
		}
	});
R.DR.create = function (a, c, d, e) {
	var f = new R.DR;
	f.j(a, c, d, e);
	return f
};
R.zP = R.ld.extend({
		hk : 0,
		Za : 0,
		$a : 0,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.$a = this.Za = this.hk = 0
		},
		Mu : C("Za"),
		ov : z("Za"),
		Lr : C("$a"),
		es : z("$a"),
		j : function (a, c, d, e) {
			return R.ld.prototype.j.call(this, a, c) ? (this.hk = d, this.Za = e, this.$a = 1, m) : q
		},
		update : function (a) {
			var c = Math.sin(2 * Math.PI * a * this.hk) * this.Za * this.$a;
			a = Math.sin(Math.PI * (2 * a * this.hk + 1)) * this.Za * this.$a;
			for (var d = this.na, e = this.w.ee(), f, g = R.b(0, 0), k = 0; k < d.width; k++)
				for (var l = 0; l < d.height; l++)
					g.x = k, g.y = l, f = e.Ni(g), 0 == (k + l) % 2 ? (f.J.f +=
						c, f.O.f += c, f.N.f += c, f.M.f += c) : (f.J.f += a, f.O.f += a, f.N.f += a, f.M.f += a), e.gh(g, f)
		}
	});
R.zP.create = function (a, c, d, e) {
	var f = new R.zP;
	f.j(a, c, d, e);
	return f
};
R.QH = R.ld.extend({
		mT : 0,
		xk : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.mT = 0;
			this.xk = p
		},
		j : function (a, c) {
			this.mT = c;
			return R.ld.prototype.j.call(this, a, R.size(1, c))
		},
		update : function (a) {
			for (var c = this.na, d = this.xk.width, e, f, g = R.b(0, 0), k = 0; k < c.height; ++k)
				g.y = k, e = this.Ni(g), f = 1, 0 == k % 2 && (f = -1), e.J.x += f * d * a, e.O.x += f * d * a, e.N.x += f * d * a, e.M.x += f * d * a, this.gh(g, e)
		},
		H : function (a) {
			R.ld.prototype.H.call(this, a);
			this.xk = R.o.d().Uy()
		}
	});
R.QH.create = function (a, c) {
	var d = new R.QH;
	d.j(a, c);
	return d
};
R.PH = R.ld.extend({
		aS : 0,
		xk : p,
		ctor : function () {
			R.me.prototype.ctor.call(this);
			this.aS = 0;
			this.xk = p
		},
		j : function (a, c) {
			this.aS = c;
			return R.ld.prototype.j.call(this, a, R.size(c, 1))
		},
		update : function (a) {
			for (var c = this.na.width, d = this.xk.height, e, f, g = R.b(0, 0), k = 0; k < c; ++k)
				g.x = k, e = this.Ni(g), f = 1, 0 == k % 2 && (f = -1), e.J.y += f * d * a, e.O.y += f * d * a, e.N.y += f * d * a, e.M.y += f * d * a, this.gh(g, e)
		},
		H : function (a) {
			R.ld.prototype.H.call(this, a);
			this.xk = R.o.d().Uy()
		}
	});
R.PH.create = function (a, c) {
	var d = new R.PH;
	d.j(a, c);
	return d
};
R.Fga = R.D.extend({
		XY : x()
	});
R.os = R.B.extend({
		key : "",
		Kr : 0,
		wp : 0,
		Er : 0,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.key = "";
			this.Er = this.wp = this.Kr = 0
		},
		j : function (a, c, d, e) {
			return R.B.prototype.j.call(this, a) ? (this.key = c, this.wp = e, this.Kr = d, m) : q
		},
		H : function (a) {
			R.e(a, "target must implement cc.ActionTweenDelegate");
			R.B.prototype.H.call(this, a);
			this.Er = this.wp - this.Kr
		},
		update : function (a) {
			this.w.XY(this.wp - this.Er * (1 - a), this.key)
		},
		reverse : function () {
			return R.os.create(this.duration, this.key, this.wp, this.Kr)
		},
		A : function () {
			var a = new R.os;
			a.j(this.p, this.key, this.Kr, this.wp);
			return a
		}
	});
R.os.create = function (a, c, d, e) {
	var f = new R.os;
	return f.j(a, c, d, e) ? f : p
};
R.JG = function (a, c, d, e, f, g) {
	var k = g * g,
	l = k * g,
	n = (1 - f) / 2;
	f = n * (-l + 2 * k - g);
	var r = n * (-l + k) + (2 * l - 3 * k + 1);
	g = n * (l - 2 * k + g) + (-2 * l + 3 * k);
	k = n * (l - k);
	return R.b(a.x * f + c.x * r + d.x * g + e.x * k, a.y * f + c.y * r + d.y * g + e.y * k)
};
R.oX = function (a) {
	for (var c = [], d = a.length - 1; 0 <= d; d--)
		c.push(R.b(a[d].x, a[d].y));
	return c
};
R.YD = function (a) {
	for (var c = [], d = 0; d < a.length; d++)
		c.push(R.b(a[d].x, a[d].y));
	return c
};
R.Fj = function (a, c) {
	var d = Math.min(a.length - 1, Math.max(c, 0));
	return a[d]
};
R.pza = function (a) {
	for (var c = a.length, d = 0 | c / 2, e = 0; e < d; ++e) {
		var f = a[e];
		a[e] = a[c - e - 1];
		a[c - e - 1] = f
	}
};
R.Vk = R.B.extend({
		nk : p,
		fJ : 0,
		cr : 0,
		Dd : p,
		wI : p,
		ctor : function () {
			R.B.prototype.ctor.call(this);
			this.nk = [];
			this.cr = this.fJ = 0;
			this.wI = this.Dd = p
		},
		j : function (a, c, d) {
			R.e(0 < c.length, "Invalid configuration. It must at least have one control point");
			return R.B.prototype.j.call(this, a) ? (this.Rea(c), this.cr = d, m) : q
		},
		A : function () {
			var a = new R.Vk;
			a.j(this.p, R.YD(this.nk), this.cr);
			return a
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.fJ = 1 / (this.nk.length - 1);
			this.Dd = this.w.rc();
			this.wI = R.b(0, 0)
		},
		update : function (a) {
			var c,
			d = this.nk;
			if (1 == a)
				c = d.length - 1, a = 1;
			else {
				var e = this.fJ;
				c = 0 | a / e;
				a = (a - e * c) / e
			}
			c = R.JG(R.Fj(d, c - 1), R.Fj(d, c - 0), R.Fj(d, c + 1), R.Fj(d, c + 2), this.cr, a);
			if (R.lA && (d = this.w.Gj() - this.Dd.x, a = this.w.Hj() - this.Dd.y, 0 != d || 0 != a))
				e = this.wI, d = e.x + d, a = e.y + a, e.x = d, e.y = a, c.x += d, c.y += a;
			this.VY(c)
		},
		reverse : function () {
			var a = R.oX(this.nk);
			return R.Vk.create(this.p, a, this.cr)
		},
		VY : function (a) {
			this.w.q(a);
			this.Dd = a
		},
		Dra : C("nk"),
		Rea : z("nk")
	});
R.Vk.create = function (a, c, d) {
	var e = new R.Vk;
	return e.j(a, c, d) ? e : p
};
R.Mv = R.Vk.extend({
		$d : p,
		ctor : function () {
			R.Vk.prototype.ctor.call(this);
			this.$d = R.b(0, 0)
		},
		H : function (a) {
			R.Vk.prototype.H.call(this, a);
			this.$d = a.rc()
		},
		reverse : function () {
			for (var a = this.nk.slice(), c, d = a[0], e = 1; e < a.length; ++e)
				c = a[e], a[e] = R.We(c, d), d = c;
			a = R.oX(a);
			d = a[a.length - 1];
			a.pop();
			d.x = -d.x;
			d.y = -d.y;
			a.unshift(d);
			for (e = 1; e < a.length; ++e)
				c = a[e], c.x = -c.x, c.y = -c.y, c.x += d.x, c.y += d.y, d = a[e] = c;
			return R.Mv.create(this.p, a, this.cr)
		},
		VY : function (a) {
			var c = this.$d,
			d = a.x + c.x;
			a = a.y + c.y;
			this.w.q(d, a);
			this.Dd.x = d;
			this.Dd.y =
				a
		},
		A : function () {
			var a = new R.Mv;
			a.j(this.p, R.YD(this.nk), this.cr);
			return a
		}
	});
R.Mv.create = function (a, c, d) {
	var e = new R.Mv;
	return e.j(a, c, d) ? e : p
};
R.LG = R.Vk.extend({
		j : function (a, c) {
			return R.Vk.prototype.j.call(this, a, c, 0.5)
		},
		A : function () {
			var a = new R.LG;
			a.j(this.p, R.YD(this.nk));
			return a
		}
	});
R.LG.create = function (a, c) {
	var d = new R.LG;
	return d.j(a, c) ? d : p
};
R.KG = R.Mv.extend({
		j : function (a, c) {
			return R.Vk.prototype.j.call(this, a, c, 0.5)
		},
		A : function () {
			var a = new R.KG;
			a.j(this.p, R.YD(this.nk));
			return a
		}
	});
R.KG.create = function (a, c) {
	var d = new R.KG;
	return d.j(a, c) ? d : p
};
R.fl = R.r.extend({
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.ij = m;
			this.R(R.b(0.5, 0.5));
			this.ma(R.o.d().$)
		}
	});
R.fl.create = function () {
	return new R.fl
};
R.YH = 0;
R.g2 = 1;
R.ne = R.r.extend({
		zo : q,
		yo : q,
		Ht : q,
		cn : 0,
		ny : R.YH,
		uq : q,
		Rt : 0,
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.Ht = this.yo = this.zo = q;
			this.cn = 0;
			this.ny = R.YH;
			this.uq = q;
			this.Rt = 0
		},
		m4 : function () {
			this.R(R.b(0.5, 0.5));
			this.ij = m;
			var a = R.o.d();
			this.ma(a.$)
		},
		m : function () {
			R.r.prototype.m.call(this);
			this.m4();
			return m
		},
		uz : function () {
			this.ny === R.YH ? R.Mca(this, this.cn) : R.tF(this.cn, m, this)
		},
		Oua : C("uq"),
		KN : function (a) {
			this.uq != a && (this.uq = a, this.Qf && (a ? R.o.d().pi.bU(this, this.Rt) : R.o.d().pi.jX(this)))
		},
		PAa : function (a) {
			this.Rt !==
			a && (this.Rt = a, this.uq && (this.KN(q), this.KN(m)))
		},
		Uqa : C("Rt"),
		iva : C("zo"),
		xf : function (a) {
			this.zo !== a && (this.zo = a, this.Qf && (a ? this.uz() : R.NY(this)))
		},
		tta : C("cn"),
		mY : function (a) {
			this.cn !== a && (this.cn = a, this.zo && (this.xf(q), this.xf(m)))
		},
		sta : C("ny"),
		vfa : function (a) {
			this.ny !== a && (this.ny = a, this.zo && (this.xf(q), this.xf(m)))
		},
		tua : C("yo"),
		rda : function (a) {
			if (a !== this.yo && (this.yo = a, this.Qf)) {
				var c = R.o.d();
				a ? c.jl.dh(this) : c.jl.dh(p)
			}
		},
		BF : function (a) {
			this.yo && R.o.d().jl.BF(a)
		},
		Raa : function () {
			R.e(q, "Layer#onAccelerometer override me")
		},
		Mua : C("Ht"),
		PX : function (a) {
			if (a !== this.Ht && (this.Ht = a, this.Qf)) {
				var c = R.o.d();
				a ? c.xq.rr(this) : c.xq.Zr(this)
			}
		},
		sa : function () {
			var a = R.o.d();
			this.zo && this.uz();
			R.r.prototype.sa.call(this);
			this.yo && a.jl.dh(this);
			this.Ht && a.xq.rr(this);
			this.uq && a.pi.bU(this, this.Rt)
		},
		ub : function () {
			var a = R.o.d();
			this.zo && R.NY(this);
			this.yo && a.jl.dh(p);
			this.Ht && a.xq.Zr(this);
			this.uq && a.pi.jX(this);
			R.r.prototype.ub.call(this)
		},
		Ii : function () {
			this.yo && R.o.d().jl.dh(this);
			R.r.prototype.Ii.call(this)
		},
		Lh : function () {
			R.e(q, "Layer#onTouchBegan override me");
			return m
		},
		bh : x(),
		Mi : x(),
		np : x(),
		mz : x(),
		OW : x(),
		NW : x(),
		MW : x(),
		aba : M(q),
		bba : M(q),
		eba : M(q),
		fba : M(q),
		mba : M(q),
		nba : M(q),
		oba : M(q),
		gba : M(q),
		hba : M(q),
		iba : M(q),
		pba : M(q),
		cba : M(q),
		dba : M(q),
		Zaa : x(),
		$aa : x()
	});
R.ne.create = function () {
	var a = new R.ne;
	return a && a.m() ? a : p
};
R.Tj = R.ne.extend({
		Fc : m,
		bb : 0,
		nf : 0,
		gb : p,
		Qc : p,
		ag : q,
		$f : q,
		ctor : function () {
			R.ne.prototype.ctor.call(this);
			this.Fc = m;
			this.nf = this.bb = 255;
			this.gb = R.Td();
			this.Qc = R.Td();
			this.$f = this.ag = q
		},
		m : function () {
			return R.ne.prototype.m.call(this) ? (this.Gn(q), this.Fn(q), m) : q
		},
		rg : C("nf"),
		vV : C("bb"),
		U : function (a) {
			this.bb = this.nf = a;
			if (this.ag) {
				a = 255;
				var c = this.Cc;
				c && (c.Fc && c.bz()) && (a = c.bb);
				this.Bf(a)
			}
		},
		Bf : function (a) {
			this.bb = this.nf * a / 255;
			if (this.ag) {
				a = this.k;
				for (var c = 0; c < a.length; c++) {
					var d = a[c];
					d && d.Fc && d.Bf(this.bb)
				}
			}
		},
		bz : C("ag"),
		Gn : z("ag"),
		Lb : C("Qc"),
		uV : C("gb"),
		L : function (a) {
			this.gb = R.ce(a.i, a.h, a.c);
			this.Qc = R.ce(a.i, a.h, a.c);
			if (this.$f) {
				a = R.Td();
				var c = this.Cc;
				c && (c.Fc && c.az()) && (a = c.gb);
				this.Af(a)
			}
		},
		Af : function (a) {
			this.gb.i = this.Qc.i * a.i / 255;
			this.gb.h = this.Qc.h * a.h / 255;
			this.gb.c = this.Qc.c * a.c / 255;
			if (this.$f) {
				a = this.k;
				for (var c = 0; c < a.length; c++) {
					var d = a[c];
					d && d.Fc && d.Af(this.gb)
				}
			}
		},
		az : C("$f"),
		Fn : z("$f"),
		Rd : x(),
		Ij : M(q)
	});
R.Wc = R.Tj.extend({
		z : p,
		gp : C("z"),
		pma : function (a, c) {
			this.ma(R.size(a, c))
		},
		oma : function (a) {
			this.ma(R.size(a, this.ea.height))
		},
		nma : function (a) {
			this.ma(R.size(this.ea.width, a))
		},
		Rd : x(),
		Ij : M(q),
		L : function (a) {
			R.Tj.prototype.L.call(this, a);
			this.Ai()
		},
		U : function (a) {
			R.Tj.prototype.U.call(this, a);
			this.Ai()
		},
		tx : q,
		BT : p,
		WK : p,
		vL : p,
		WI : p,
		YK : p,
		XK : p,
		ctor : p,
		Zj : function () {
			R.Tj.prototype.ctor.call(this);
			this.z = new R.Pj(R.Ac, R.zc);
			this.Fa = new R.Cb(0, 0, 0, 0)
		},
		$j : function () {
			R.Tj.prototype.ctor.call(this);
			this.z = new R.Pj(R.Ac,
					R.zc);
			this.YK = new ArrayBuffer(32);
			this.XK = new ArrayBuffer(64);
			var a = this.YK,
			c = this.XK,
			d = R.Ob.BYTES_PER_ELEMENT,
			e = R.Uc.BYTES_PER_ELEMENT;
			this.BT = [new R.Ob(0, 0, a, 0), new R.Ob(0, 0, a, d), new R.Ob(0, 0, a, 2 * d), new R.Ob(0, 0, a, 3 * d)];
			this.WK = [new R.Uc(0, 0, 0, 1, c, 0), new R.Uc(0, 0, 0, 1, c, e), new R.Uc(0, 0, 0, 1, c, 2 * e), new R.Uc(0, 0, 0, 1, c, 3 * e)];
			this.vL = R.u.createBuffer();
			this.WI = R.u.createBuffer()
		},
		Qd : function (a, c) {
			this.z = 1 == arguments.length ? a : {
				src : a,
				da : c
			};
			R.T === R.Ab && (this.tx = this.z && 1 == this.z.src && 771 == this.z.da)
		},
		m : function (a,
			c, d) {
			if (!R.ne.prototype.m.call(this))
				return q;
			R.T !== R.Ab && this.Ye(R.Ad.d().Tc(R.OA));
			var e = R.o.d().$;
			a = a || new R.Cb(0, 0, 0, 255);
			c = c || e.width;
			d = d || e.height;
			e = this.gb;
			e.i = a.i;
			e.h = a.h;
			e.c = a.c;
			e = this.Qc;
			e.i = a.i;
			e.h = a.h;
			e.c = a.c;
			this.nf = this.bb = a.g;
			this.ma(R.size(c, d));
			this.Ai();
			return m
		},
		ma : p,
		V5 : function (a) {
			var c = this.BT;
			c[1].x = a.width;
			c[2].y = a.height;
			c[3].x = a.width;
			c[3].y = a.height;
			this.g3();
			R.ne.prototype.ma.call(this, a)
		},
		Ai : p,
		N6 : x(),
		O6 : function () {
			for (var a = this.gb, c = this.bb, d = this.WK, e = 0; 4 > e; e++)
				d[e].i =
					a.i / 255, d[e].h = a.h / 255, d[e].c = a.c / 255, d[e].g = c / 255;
			this.QR()
		},
		g3 : function () {
			var a = R.u;
			a.bindBuffer(a.ARRAY_BUFFER, this.vL);
			a.bufferData(a.ARRAY_BUFFER, this.YK, a.STATIC_DRAW)
		},
		QR : function () {
			var a = R.u;
			a.bindBuffer(a.ARRAY_BUFFER, this.WI);
			a.bufferData(a.ARRAY_BUFFER, this.XK, a.STATIC_DRAW)
		},
		fa : p,
		bk : function (a) {
			a = a || R.u;
			var c = this.n(),
			d = this.gb;
			a.fillStyle = "rgba(" + (0 | d.i) + "," + (0 | d.h) + "," + (0 | d.c) + "," + this.bb / 255 + ")";
			a.fillRect(0, 0, c.width, -c.height);
			R.Ci++
		},
		Jg : function (a) {
			a = a || R.u;
			R.Ip(this);
			R.Ld(R.Gf |
				R.lB);
			a.bindBuffer(a.ARRAY_BUFFER, this.vL);
			a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, 0, 0);
			a.bindBuffer(a.ARRAY_BUFFER, this.WI);
			a.vertexAttribPointer(R.Gg, 4, a.FLOAT, q, 0, 0);
			R.Fi(this.z.src, this.z.da);
			a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
		}
	});
R.ua.tc ? (R.Wc.prototype.ctor = R.Wc.prototype.$j, R.Wc.prototype.ma = R.Wc.prototype.V5, R.Wc.prototype.Ai = R.Wc.prototype.O6, R.Wc.prototype.fa = R.Wc.prototype.Jg) : (R.Wc.prototype.ctor = R.Wc.prototype.Zj, R.Wc.prototype.ma = R.Tj.prototype.ma, R.Wc.prototype.Ai = R.Wc.prototype.N6, R.Wc.prototype.fa = R.Wc.prototype.bk);
R.Wc.create = function (a, c, d) {
	var e = new R.Wc;
	switch (arguments.length) {
	case 0:
		e.m();
		break;
	case 1:
		e.m(a);
		break;
	case 3:
		e.m(a, c, d);
		break;
	default:
		e.m()
	}
	return e
};
R.fH = R.Wc.extend({
		za : p,
		pa : p,
		gu : p,
		vt : p,
		Aw : p,
		KB : q,
		kC : p,
		jC : p,
		ctor : function () {
			R.Wc.prototype.ctor.call(this);
			this.Fa = new R.mc(0, 0, 0);
			this.za = new R.mc(0, 0, 0);
			this.pa = new R.mc(0, 0, 0);
			this.Aw = R.b(0, -1);
			this.vt = this.gu = 255;
			this.kC = R.b(0, 0);
			this.jC = R.b(0, 0)
		},
		a$ : C("Fa"),
		TN : function (a) {
			this.L(a)
		},
		IN : function (a) {
			this.pa = a;
			this.Ai()
		},
		w9 : C("pa"),
		ifa : function (a) {
			this.gu = a;
			this.Ai()
		},
		Isa : C("gu"),
		cea : function (a) {
			this.vt = a;
			this.Ai()
		},
		Bpa : C("vt"),
		Afa : function (a) {
			this.Aw = a;
			this.Ai()
		},
		Dta : C("Aw"),
		Aua : C("KB"),
		Wza : function (a) {
			this.KB =
				a;
			this.Ai()
		},
		m : function (a, c, d) {
			a = a || R.QL(0, 0, 0, 255);
			c = c || R.QL(0, 0, 0, 255);
			d = d || R.b(0, -1);
			var e = this.za,
			f = this.pa;
			e.i = a.i;
			e.h = a.h;
			e.c = a.c;
			this.gu = a.g;
			f.i = c.i;
			f.h = c.h;
			f.c = c.c;
			this.vt = c.g;
			this.Aw = d;
			this.KB = m;
			R.Wc.prototype.m.call(this, R.VD(a.i, a.h, a.c, 255));
			return m
		},
		fa : function (a) {
			if (R.T === R.Ya)
				R.Wc.prototype.fa.call(this, a);
			else {
				a = a || R.u;
				this.tx && (a.globalCompositeOperation = "lighter");
				a.save();
				var c = this.n().width,
				d = this.n().height,
				e = a.createLinearGradient(this.kC.x, this.kC.y, this.jC.x, this.jC.y),
				f =
					this.gb,
				g = this.pa;
				e.addColorStop(0, "rgba(" + Math.round(f.i) + "," + Math.round(f.h) + "," + Math.round(f.c) + "," + (this.gu / 255).toFixed(4) + ")");
				e.addColorStop(1, "rgba(" + Math.round(g.i) + "," + Math.round(g.h) + "," + Math.round(g.c) + "," + (this.vt / 255).toFixed(4) + ")");
				a.fillStyle = e;
				a.fillRect(0, 0, c, -d);
				0 != this.lT && a.rotate(this.fla);
				a.restore()
			}
		},
		Ai : function () {
			var a = this.Aw;
			if (R.T === R.Ab) {
				var c = 0.5 * this.n().width,
				d = 0.5 * this.n().height;
				this.kC = R.b(c * -a.x + c, d * a.y - d);
				this.jC = R.b(c * a.x + c, d * -a.y - d)
			} else if (d = R.op(a), 0 !== d) {
				c =
					Math.sqrt(2);
				a = R.b(a.x / d, a.y / d);
				this.KB && (a = R.cm(a, 1 / (Math.abs(a.x) + Math.abs(a.y)) * c));
				var e = this.bb / 255,
				f = this.gb,
				g = this.pa,
				d = f.i / 255,
				k = f.h / 255,
				f = f.c / 255,
				l = this.gu * e / 255,
				n = g.i / 255,
				r = g.h / 255,
				g = g.c / 255,
				e = this.vt * e / 255,
				s = this.WK,
				t = s[0],
				v = s[1],
				w = s[2],
				s = s[3];
				t.i = n + (d - n) * ((c + a.x + a.y) / (2 * c));
				t.h = r + (k - r) * ((c + a.x + a.y) / (2 * c));
				t.c = g + (f - g) * ((c + a.x + a.y) / (2 * c));
				t.g = e + (l - e) * ((c + a.x + a.y) / (2 * c));
				v.i = n + (d - n) * ((c - a.x + a.y) / (2 * c));
				v.h = r + (k - r) * ((c - a.x + a.y) / (2 * c));
				v.c = g + (f - g) * ((c - a.x + a.y) / (2 * c));
				v.g = e + (l - e) * ((c - a.x + a.y) /
						(2 * c));
				w.i = n + (d - n) * ((c + a.x - a.y) / (2 * c));
				w.h = r + (k - r) * ((c + a.x - a.y) / (2 * c));
				w.c = g + (f - g) * ((c + a.x - a.y) / (2 * c));
				w.g = e + (l - e) * ((c + a.x - a.y) / (2 * c));
				s.i = n + (d - n) * ((c - a.x - a.y) / (2 * c));
				s.h = r + (k - r) * ((c - a.x - a.y) / (2 * c));
				s.c = g + (f - g) * ((c - a.x - a.y) / (2 * c));
				s.g = e + (l - e) * ((c - a.x - a.y) / (2 * c));
				this.QR()
			}
		}
	});
R.fH.create = function (a, c, d) {
	var e = new R.fH;
	switch (arguments.length) {
	case 2:
		if (e && e.m(a, c))
			return e;
		break;
	case 3:
		if (e && e.m(a, c, d))
			return e;
		break;
	case 0:
		if (e && e.m())
			return e;
		break;
	default:
		b("Arguments error ")
	}
	return p
};
R.CP = R.ne.extend({
		uo : 0,
		hf : p,
		kua : function (a) {
			this.hf = [];
			this.hf.push(a);
			this.uo = 0;
			this.I(a);
			return m
		},
		H$ : function (a) {
			this.hf = a;
			this.uo = 0;
			this.I(this.hf[this.uo]);
			return m
		},
		wCa : function (a) {
			R.e(a < this.hf.length, "Invalid index in MultiplexLayer switchTo message");
			this.removeChild(this.hf[this.uo], m);
			this.uo = a;
			this.I(this.hf[a])
		},
		xCa : function (a) {
			R.e(a < this.hf.count(), "Invalid index in MultiplexLayer switchTo message");
			this.removeChild(this.hf[this.uo], m);
			this.hf[this.uo] = p;
			this.uo = a;
			this.I(this.hf[a])
		},
		Ela : function (a) {
			R.e(this.hf, "cc.Layer addLayer");
			this.hf.push(a)
		}
	});
R.CP.create = function () {
	0 < arguments.length && arguments[arguments.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
	var a = new R.CP;
	return a.H$(arguments) ? a : p
};
R.hw = 4208917214;
R.$ja = R.D.extend({
		Gh : x()
	});
R.Mja = 0;
R.ao = 1;
R.aB = 0;
R.Lja = 1;
R.Xa = R.fl.extend({
		ya : p,
		nb : p,
		p : p,
		ek : q,
		JS : q,
		pT : function () {
			this.yp(this.pT);
			var a = R.o.d();
			this.JS = a.Lo;
			a.wN(this.ya);
			a.rf.GF(m);
			this.nb.Aa(m)
		},
		Jl : function () {
			this.ek = m
		},
		fa : function () {
			this.ek ? (this.nb.Y(), this.ya.Y()) : (this.ya.Y(), this.nb.Y())
		},
		sa : function () {
			R.r.prototype.sa.call(this);
			R.o.d().rf.GF(q);
			this.nb.Ji();
			this.ya.sa()
		},
		ub : function () {
			R.r.prototype.ub.call(this);
			R.o.d().rf.GF(m);
			this.nb.ub();
			this.ya.Ii()
		},
		Eh : function () {
			R.r.prototype.Eh.call(this);
			this.JS && this.nb.Eh()
		},
		j : function (a, c) {
			R.e(c != p,
				"CCTransitionScene.initWithDuration() Argument scene must be non-nil");
			return this.m() ? (this.p = a, this.R(R.b(0, 0)), this.q(0, 0), this.ya = c, this.nb = R.o.d().Jc, this.nb || (this.nb = R.fl.create(), this.nb.m()), R.e(this.ya != this.nb, "CCTransitionScene.initWithDuration() Incoming scene must be different from the outgoing scene"), this.Jl(), m) : q
		},
		finish : function () {
			this.ya.Aa(m);
			this.ya.q(0, 0);
			this.ya.jd(1);
			this.ya.he(0);
			R.T === R.Ya && this.ya.Nr().restore();
			this.nb.Aa(q);
			this.nb.q(0, 0);
			this.nb.jd(1);
			this.nb.he(0);
			R.T === R.Ya && this.nb.Nr().restore();
			this.ds(this.pT, 0)
		},
		zE : function () {
			this.ya.Aa(m);
			this.nb.Aa(q)
		}
	});
R.Xa.create = function (a, c) {
	var d = new R.Xa;
	return d != p && d.j(a, c) ? d : p
};
R.co = R.Xa.extend({
		qi : 0,
		j : function (a, c, d) {
			R.Xa.prototype.j.call(this, a, c) && (this.qi = d);
			return m
		}
	});
R.co.create = function (a, c, d) {
	var e = new R.co;
	e.j(a, c, d);
	return e
};
R.nR = R.Xa.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			this.ya.jd(0.0010);
			this.nb.jd(1);
			this.ya.R(R.b(0.5, 0.5));
			this.nb.R(R.b(0.5, 0.5));
			var a = R.La.create(R.Vh.create(R.lw.create(this.p / 2, 0.0010), R.gw.create(this.p / 2, 720)), R.Bc.create(this.p / 2));
			this.nb.ab(a);
			this.ya.ab(R.La.create(a.reverse(), R.bc.create(this.finish, this)))
		}
	});
R.nR.create = function (a, c) {
	var d = new R.nR;
	return d != p && d.j(a, c) ? d : p
};
R.cR = R.Xa.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a = R.o.d().$;
			this.ya.jd(0.5);
			this.ya.q(a.width, 0);
			this.ya.R(R.b(0.5, 0.5));
			this.nb.R(R.b(0.5, 0.5));
			var c = R.Hp.create(this.p / 4, R.b(-a.width, 0), a.width / 4, 2),
			d = R.Ie.create(this.p / 4, 1),
			a = R.Ie.create(this.p / 4, 0.5),
			a = R.La.create(a, c),
			c = R.La.create(c, d),
			d = R.Bc.create(this.p / 2);
			this.nb.ab(a);
			this.ya.ab(R.La.create(d, c, R.bc.create(this.finish, this)))
		}
	});
R.cR.create = function (a, c) {
	var d = new R.cR;
	return d != p && d.j(a, c) ? d : p
};
R.uw = R.Xa.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			this.rn();
			var a = this.action();
			this.ya.ab(R.La.create(this.Gh(a), R.bc.create(this.finish, this)))
		},
		rn : function () {
			this.ya.q(-R.o.d().$.width, 0)
		},
		action : function () {
			return R.Es.create(this.p, R.b(0, 0))
		},
		Gh : function (a) {
			return R.Un.create(a, 2)
		}
	});
R.uw.create = function (a, c) {
	var d = new R.uw;
	return d != p && d.j(a, c) ? d : p
};
R.eR = R.uw.extend({
		rn : function () {
			this.ya.q(R.o.d().$.width, 0)
		}
	});
R.eR.create = function (a, c) {
	var d = new R.eR;
	return d != p && d.j(a, c) ? d : p
};
R.fR = R.uw.extend({
		rn : function () {
			this.ya.q(0, R.o.d().$.height)
		}
	});
R.fR.create = function (a, c) {
	var d = new R.fR;
	return d != p && d.j(a, c) ? d : p
};
R.dR = R.uw.extend({
		rn : function () {
			this.ya.q(0, -R.o.d().$.height)
		}
	});
R.dR.create = function (a, c) {
	var d = new R.dR;
	return d != p && d.j(a, c) ? d : p
};
R.Mn = 0.5;
R.vw = R.Xa.extend({
		Jl : function () {
			this.ek = q
		},
		sa : function () {
			R.Xa.prototype.sa.call(this);
			this.rn();
			var a = this.action(),
			c = this.action(),
			a = this.Gh(a),
			c = R.La.create(this.Gh(c), R.bc.create(this.finish, this));
			this.ya.ab(a);
			this.nb.ab(c)
		},
		rn : function () {
			this.ya.q( - (R.o.d().$.width - R.Mn), 0)
		},
		action : function () {
			return R.Sh.create(this.p, R.b(R.o.d().$.width - R.Mn, 0))
		},
		Gh : function (a) {
			return R.Un.create(a, 2)
		}
	});
R.vw.create = function (a, c) {
	var d = new R.vw;
	return d != p && d.j(a, c) ? d : p
};
R.qR = R.vw.extend({
		Jl : function () {
			this.ek = m
		},
		rn : function () {
			this.ya.q(R.o.d().$.width - R.Mn, 0)
		},
		action : function () {
			return R.Sh.create(this.p, R.b( - (R.o.d().$.width - R.Mn), 0))
		}
	});
R.qR.create = function (a, c) {
	var d = new R.qR;
	return d != p && d.j(a, c) ? d : p
};
R.pR = R.vw.extend({
		Jl : function () {
			this.ek = q
		},
		rn : function () {
			this.ya.q(0, R.o.d().$.height - R.Mn)
		},
		action : function () {
			return R.Sh.create(this.p, R.b(0,  - (R.o.d().$.height - R.Mn)))
		}
	});
R.pR.create = function (a, c) {
	var d = new R.pR;
	return d != p && d.j(a, c) ? d : p
};
R.rR = R.vw.extend({
		Jl : function () {
			this.ek = m
		},
		rn : function () {
			this.ya.q(0,  - (R.o.d().$.height - R.Mn))
		},
		action : function () {
			return R.Sh.create(this.p, R.b(0, R.o.d().$.height - R.Mn))
		}
	});
R.rR.create = function (a, c) {
	var d = new R.rR;
	return d != p && d.j(a, c) ? d : p
};
R.oR = R.Xa.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			this.ya.jd(0.0010);
			this.nb.jd(1);
			this.ya.R(R.b(2 / 3, 0.5));
			this.nb.R(R.b(1 / 3, 0.5));
			var a = R.Ie.create(this.p, 0.01),
			c = R.Ie.create(this.p, 1);
			this.ya.ab(this.Gh(c));
			this.nb.ab(R.La.create(this.Gh(a), R.bc.create(this.finish, this)))
		},
		Gh : function (a) {
			return R.Un.create(a, 2)
		}
	});
R.oR.create = function (a, c) {
	var d = new R.oR;
	return d != p && d.j(a, c) ? d : p
};
R.aR = R.co.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a,
			c;
			this.ya.Aa(q);
			var d;
			this.qi === R.ao ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
			a = R.La.create(R.Bc.create(this.p / 2), R.Uh.create(), R.Cg.create(this.p / 2, 1, 0, d, a, 0, 0), R.bc.create(this.finish, this));
			c = R.La.create(R.Cg.create(this.p / 2, 1, 0, 0, c, 0, 0), R.Sj.create(), R.Bc.create(this.p / 2));
			this.ya.ab(a);
			this.nb.ab(c)
		}
	});
R.aR.create = function (a, c, d) {
	d == p && (d = R.ao);
	var e = new R.aR;
	e.j(a, c, d);
	return e
};
R.bR = R.co.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a,
			c;
			this.ya.Aa(q);
			var d;
			this.qi == R.aB ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
			a = R.La.create(R.Bc.create(this.p / 2), R.Uh.create(), R.Cg.create(this.p / 2, 1, 0, d, a, 90, 0), R.bc.create(this.finish, this));
			c = R.La.create(R.Cg.create(this.p / 2, 1, 0, 0, c, 90, 0), R.Sj.create(), R.Bc.create(this.p / 2));
			this.ya.ab(a);
			this.nb.ab(c)
		}
	});
R.bR.create = function (a, c, d) {
	d == p && (d = R.aB);
	var e = new R.bR;
	e.j(a, c, d);
	return e
};
R.$Q = R.co.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a,
			c;
			this.ya.Aa(q);
			var d;
			this.qi === R.ao ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
			a = R.La.create(R.Bc.create(this.p / 2), R.Uh.create(), R.Cg.create(this.p / 2, 1, 0, d, a, -45, 0), R.bc.create(this.finish, this));
			c = R.La.create(R.Cg.create(this.p / 2, 1, 0, 0, c, 45, 0), R.Sj.create(), R.Bc.create(this.p / 2));
			this.ya.ab(a);
			this.nb.ab(c)
		}
	});
R.$Q.create = function (a, c, d) {
	d == p && (d = R.ao);
	var e = new R.$Q;
	e.j(a, c, d);
	return e
};
R.vR = R.co.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a,
			c;
			this.ya.Aa(q);
			var d;
			this.qi === R.ao ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
			a = R.La.create(R.Bc.create(this.p / 2), R.Vh.create(R.Cg.create(this.p / 2, 1, 0, d, a, 0, 0), R.Ie.create(this.p / 2, 1), R.Uh.create()), R.bc.create(this.finish, this));
			c = R.La.create(R.Vh.create(R.Cg.create(this.p / 2, 1, 0, 0, c, 0, 0), R.Ie.create(this.p / 2, 0.5)), R.Sj.create(), R.Bc.create(this.p / 2));
			this.ya.jd(0.5);
			this.ya.ab(a);
			this.nb.ab(c)
		}
	});
R.vR.create = function (a, c, d) {
	d == p && (d = R.ao);
	var e = new R.vR;
	e.j(a, c, d);
	return e
};
R.wR = R.co.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a,
			c;
			this.ya.Aa(q);
			var d;
			this.qi === R.aB ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
			a = R.La.create(R.Bc.create(this.p / 2), R.Vh.create(R.Cg.create(this.p / 2, 1, 0, d, a, 90, 0), R.Ie.create(this.p / 2, 1), R.Uh.create()), R.bc.create(this.finish, this));
			c = R.La.create(R.Vh.create(R.Cg.create(this.p / 2, 1, 0, 0, c, 90, 0), R.Ie.create(this.p / 2, 0.5)), R.Sj.create(), R.Bc.create(this.p / 2));
			this.ya.jd(0.5);
			this.ya.ab(a);
			this.nb.ab(c)
		}
	});
R.wR.create = function (a, c, d) {
	d == p && (d = R.aB);
	var e = new R.wR;
	e.j(a, c, d);
	return e
};
R.uR = R.co.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a,
			c;
			this.ya.Aa(q);
			var d;
			this.qi === R.ao ? (a = 90, d = 270, c = 90) : (a = -90, d = 90, c = -90);
			a = R.La.create(R.Bc.create(this.p / 2), R.Vh.create(R.Cg.create(this.p / 2, 1, 0, d, a, -45, 0), R.Ie.create(this.p / 2, 1), R.Uh.create()), R.Uh.create(), R.bc.create(this.finish, this));
			c = R.La.create(R.Vh.create(R.Cg.create(this.p / 2, 1, 0, 0, c, 45, 0), R.Ie.create(this.p / 2, 0.5)), R.Sj.create(), R.Bc.create(this.p / 2));
			this.ya.jd(0.5);
			this.ya.ab(a);
			this.nb.ab(c)
		}
	});
R.uR.create = function (a, c, d) {
	d == p && (d = R.ao);
	var e = new R.uR;
	e.j(a, c, d);
	return e
};
R.WQ = R.Xa.extend({
		Fa : p,
		ctor : function () {
			R.Xa.prototype.ctor.call(this);
			this.Fa = new R.Cb
		},
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a = R.Wc.create(this.Fa);
			this.ya.Aa(q);
			this.I(a, 2, R.hw);
			var a = this.Ej(R.hw),
			c = R.La.create(R.ws.create(this.p / 2), R.bc.create(this.zE, this), R.Yv.create(this.p / 2), R.bc.create(this.finish, this));
			a.ab(c)
		},
		ub : function () {
			R.Xa.prototype.ub.call(this);
			this.tN(R.hw, q)
		},
		j : function (a, c, d) {
			d = d || R.O7();
			R.Xa.prototype.j.call(this, a, c) && (this.Fa.i = d.i, this.Fa.h = d.h, this.Fa.c = d.c, this.Fa.g =
					0);
			return m
		}
	});
R.WQ.create = function (a, c, d) {
	var e = new R.WQ;
	e.j(a, c, d);
	return e
};
R.VQ = R.Xa.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a = new R.Cb(0, 0, 0, 0),
			c = R.o.d().$,
			a = R.Wc.create(a),
			d = R.Db.create(c.width, c.height);
			if (p != d) {
				d.ta.R(R.b(0.5, 0.5));
				d.q(c.width / 2, c.height / 2);
				d.R(R.b(0.5, 0.5));
				d.Dh();
				this.ya.Y();
				d.end();
				var e = R.Db.create(c.width, c.height);
				e.ta.R(R.b(0.5, 0.5));
				e.q(c.width / 2, c.height / 2);
				e.R(R.b(0.5, 0.5));
				e.Dh();
				this.nb.Y();
				e.end();
				d.ta.Qd(1, 1);
				e.ta.Qd(770, 771);
				a.I(d);
				a.I(e);
				d.ta.U(255);
				e.ta.U(255);
				c = R.La.create(R.$v.create(this.p, 0), R.bc.create(this.zE, this),
						R.bc.create(this.finish, this));
				e.ta.ab(c);
				this.I(a, 2, R.hw)
			}
		},
		ub : function () {
			this.tN(R.hw, q);
			R.Xa.prototype.ub.call(this)
		},
		fa : x()
	});
R.VQ.create = function (a, c) {
	var d = new R.VQ;
	d.j(a, c);
	return d
};
R.tR = R.Xa.extend({
		Jl : function () {
			this.ek = q
		},
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a = R.o.d().$,
			a = R.fI.create(this.p, R.size(0 | 12 * (a.width / a.height), 12)),
			a = this.Gh(a);
			this.nb.ab(R.La.create(a, R.bc.create(this.finish, this), R.Pp.create()))
		},
		Gh : u()
	});
R.tR.create = function (a, c) {
	var d = new R.tR;
	return d != p && d.j(a, c) ? d : p
};
R.eI = R.Xa.extend({
		sa : function () {
			R.Xa.prototype.sa.call(this);
			this.ya.Aa(q);
			var a = this.action(),
			a = R.La.create(a, R.bc.create(this.zE, this), a.reverse());
			this.ab(R.La.create(this.Gh(a), R.bc.create(this.finish, this), R.Pp.create()))
		},
		Gh : function (a) {
			return R.vs.create(a, 3)
		},
		action : function () {
			return R.PH.create(this.p / 2, 3)
		}
	});
R.eI.create = function (a, c) {
	var d = new R.eI;
	return d != p && d.j(a, c) ? d : p
};
R.sR = R.eI.extend({
		action : function () {
			return R.QH.create(this.p / 2, 3)
		}
	});
R.sR.create = function (a, c) {
	var d = new R.sR;
	return d != p && d.j(a, c) ? d : p
};
R.tw = R.Xa.extend({
		Jl : function () {
			this.ek = q
		},
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a = R.o.d().$,
			a = this.tu(R.size(0 | 12 * (a.width / a.height), 12));
			this.nb.ab(R.La.create(this.Gh(a), R.bc.create(this.finish, this), R.Pp.create()))
		},
		Gh : u(),
		tu : function (a) {
			return R.Zv.create(this.p, a)
		}
	});
R.tw.create = function (a, c) {
	var d = new R.tw;
	return d != p && d.j(a, c) ? d : p
};
R.XQ = R.tw.extend({
		tu : function (a) {
			return R.TG.create(this.p, a)
		}
	});
R.XQ.create = function (a, c) {
	var d = new R.XQ;
	return d != p && d.j(a, c) ? d : p
};
R.ZQ = R.tw.extend({
		tu : function (a) {
			return R.xA.create(this.p, a)
		}
	});
R.ZQ.create = function (a, c) {
	var d = new R.ZQ;
	return d != p && d.j(a, c) ? d : p
};
R.YQ = R.tw.extend({
		tu : function (a) {
			return R.UG.create(this.p, a)
		}
	});
R.YQ.create = function (a, c) {
	var d = new R.YQ;
	return d != p && d.j(a, c) ? d : p
};
R.vQ = 49153;
R.bo = R.Xa.extend({
		be : 0,
		pc : 0,
		cD : p,
		sa : function () {
			R.Xa.prototype.sa.call(this);
			this.vT();
			var a = R.o.d().$,
			c = R.Db.create(a.width, a.height);
			c.ta.R(R.b(0.5, 0.5));
			c.q(a.width / 2, a.height / 2);
			c.R(R.b(0.5, 0.5));
			c.clear(0, 0, 0, 1);
			c.Dh();
			this.cD.Y();
			c.end();
			this.cD == this.nb && this.zE();
			a = this.Mq(c);
			c = R.La.create(R.fw.create(this.p, this.pc, this.be), R.bc.create(this.finish, this));
			a.ab(c);
			this.I(a, 2, R.vQ)
		},
		ub : function () {
			this.tN(R.vQ, m);
			R.Xa.prototype.ub.call(this)
		},
		vT : function () {
			this.cD = this.nb;
			this.pc = 100;
			this.be =
				0
		},
		Mq : function () {
			R.e(q, "override me - abstract class");
			return p
		},
		Jl : function () {
			this.ek = q
		}
	});
R.bo.create = function (a, c) {
	var d = new R.bo;
	return d != p && d.j(a, c) ? d : p
};
R.kR = R.bo.extend({
		Mq : function (a) {
			var c = R.o.d().$;
			a = R.vc.create(a.ta);
			R.T === R.Ya && a.ta.Nk(m);
			a.gm(R.bl);
			a.QF(q);
			a.Pk(100);
			a.q(c.width / 2, c.height / 2);
			a.R(R.b(0.5, 0.5));
			return a
		}
	});
R.kR.create = function (a, c) {
	var d = new R.kR;
	return d != p && d.j(a, c) ? d : p
};
R.lR = R.bo.extend({
		Mq : function (a) {
			var c = R.o.d().$;
			a = R.vc.create(a.ta);
			R.T === R.Ya && a.ta.Nk(m);
			a.gm(R.bl);
			a.QF(m);
			a.Pk(100);
			a.q(c.width / 2, c.height / 2);
			a.R(R.b(0.5, 0.5));
			return a
		}
	});
R.lR.create = function (a, c) {
	var d = new R.lR;
	return d != p && d.j(a, c) ? d : p
};
R.hR = R.bo.extend({
		Mq : function (a) {
			var c = R.o.d().$;
			a = R.vc.create(a.ta);
			R.T === R.Ya && a.ta.Nk(m);
			a.gm(R.Kp);
			a.rv(R.b(1, 0));
			a.pv(R.b(1, 0));
			a.Pk(100);
			a.q(c.width / 2, c.height / 2);
			a.R(R.b(0.5, 0.5));
			return a
		}
	});
R.hR.create = function (a, c) {
	var d = new R.hR;
	return d != p && d.j(a, c) ? d : p
};
R.mR = R.bo.extend({
		Mq : function (a) {
			var c = R.o.d().$;
			a = R.vc.create(a.ta);
			R.T === R.Ya && a.ta.Nk(m);
			a.gm(R.Kp);
			a.rv(R.b(0, 0));
			a.pv(R.b(0, 1));
			a.Pk(100);
			a.q(c.width / 2, c.height / 2);
			a.R(R.b(0.5, 0.5));
			return a
		}
	});
R.mR.create = function (a, c) {
	var d = new R.mR;
	return d != p && d.j(a, c) ? d : p
};
R.iR = R.bo.extend({
		Mq : function (a) {
			var c = R.o.d().$;
			a = R.vc.create(a.ta);
			R.T === R.Ya && a.ta.Nk(m);
			a.gm(R.Kp);
			a.rv(R.b(0.5, 0.5));
			a.pv(R.b(1, 1));
			a.Pk(0);
			a.q(c.width / 2, c.height / 2);
			a.R(R.b(0.5, 0.5));
			return a
		},
		Jl : function () {
			this.ek = q
		},
		vT : function () {
			this.cD = this.ya;
			this.pc = 0;
			this.be = 100
		}
	});
R.iR.create = function (a, c) {
	var d = new R.iR;
	return d != p && d.j(a, c) ? d : p
};
R.jR = R.bo.extend({
		Mq : function (a) {
			var c = R.o.d().$;
			a = R.vc.create(a.ta);
			R.T === R.Ya && a.ta.Nk(m);
			a.gm(R.Kp);
			a.rv(R.b(0.5, 0.5));
			a.pv(R.b(1, 1));
			a.Pk(100);
			a.q(c.width / 2, c.height / 2);
			a.R(R.b(0.5, 0.5));
			return a
		}
	});
R.jR.create = function (a, c) {
	var d = new R.jR;
	return d != p && d.j(a, c) ? d : p
};
R.gR = R.Xa.extend({
		uB : m,
		j : function (a, c, d) {
			this.uB = d;
			R.Xa.prototype.j.call(this, a, c);
			return m
		},
		tu : function (a) {
			return this.uB ? R.Js.create(R.DA.create(this.p, a)) : R.DA.create(this.p, a)
		},
		sa : function () {
			R.Xa.prototype.sa.call(this);
			var a = R.o.d().$,
			c;
			a.width > a.height ? (a = 16, c = 12) : (a = 12, c = 16);
			a = this.tu(R.size(a, c));
			this.uB ? (this.ya.Aa(q), this.ya.ab(R.La.create(R.Uh.create(), a, R.bc.create(this.finish, this), R.Pp.create()))) : this.nb.ab(R.La.create(a, R.bc.create(this.finish, this), R.Pp.create()))
		},
		Jl : function () {
			this.ek =
				this.uB
		}
	});
R.gR.create = function (a, c, d) {
	var e = new R.gR;
	e.j(a, c, d);
	return e
};
R.LH = -1;
R.Ku = function (a) {
	function c() {
		var c = R.Ku,
		e = a.width,
		k = a.height;
		d[0].width = e;
		d[0].height = k;
		d[1].width = e;
		d[1].height = k;
		d[2].width = e;
		d[2].height = k;
		d[3].width = e;
		d[3].height = k;
		c.canvas.width = e;
		c.canvas.height = k;
		var l = c.canvas.getContext("2d");
		l.drawImage(a, 0, 0);
		c.jO.width = e;
		c.jO.height = k;
		for (var l = l.getImageData(0, 0, e, k).data, n = 0; 4 > n; n++) {
			var r = d[n].getContext("2d");
			r.getImageData(0, 0, e, k).data;
			c.IY.drawImage(a, 0, 0);
			for (var s = c.IY.getImageData(0, 0, e, k), t = s.data, v = 0; v < l.length; v += 4)
				t[v] = 0 === n ? l[v] : 0, t[v +
					1] = 1 === n ? l[v + 1] : 0, t[v + 2] = 2 === n ? l[v + 2] : 0, t[v + 3] = l[v + 3];
			r.putImageData(s, 0, 0)
		}
		a.onload = p
	}
	if (a.hasOwnProperty("channelCache"))
		return a.T7;
	var d = [document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas"), document.createElement("canvas")];
	try {
		c()
	} catch (e) {
		a.onload = c
	}
	return a.T7 = d
};
R.Ku.canvas = document.createElement("canvas");
R.Ku.jO = document.createElement("canvas");
R.Ku.IY = R.Ku.jO.getContext("2d");
R.Hna = function (a, c, d) {
	d || (d = R.rect(0, 0, a.width, a.height), d = R.dl(d));
	c = c instanceof R.Uc ? R.VD(255 * c.i, 255 * c.h, 255 * c.c, 255 * c.g) : R.VD(c.i, c.h, c.c, 50);
	var e = document.createElement("canvas"),
	f = e.getContext("2d");
	e.width != d.width && (e.width = d.width);
	e.height != d.height && (e.height = d.height);
	f.save();
	f.drawImage(a, d.x, d.y, d.width, d.height, 0, 0, d.width, d.height);
	f.globalCompositeOperation = "source-in";
	f.globalAlpha = c.g / 255;
	f.fillStyle = "rgb(" + c.i + "," + c.h + "," + c.c + ")";
	f.fillRect(0, 0, d.width, d.height);
	f.restore();
	return e
};
R.Lu = function (a, c, d, e, f) {
	e || (e = R.rect(0, 0, a.width, a.height));
	a = d.g == p ? R.Ak(d.i / 255, d.h / 255, d.c / 255, 1) : d;
	d = Math.min(e.width, c[0].width);
	var g = Math.min(e.height, c[0].height),
	k;
	f ? (k = f.getContext("2d"), k.clearRect(0, 0, d, g)) : (f = document.createElement("canvas"), f.width = d, f.height = g, k = f.getContext("2d"));
	k.save();
	k.globalCompositeOperation = "lighter";
	var l = k.globalAlpha;
	0 < a.i && (k.globalAlpha = a.i * l, k.drawImage(c[0], e.x, e.y, d, g, 0, 0, d, g));
	0 < a.h && (k.globalAlpha = a.h * l, k.drawImage(c[1], e.x, e.y, d, g, 0, 0, d, g));
	0 <
	a.c && (k.globalAlpha = a.c * l, k.drawImage(c[2], e.x, e.y, d, g, 0, 0, d, g));
	0 === a.i && (0 === a.h && 0 === a.c) && (k.globalAlpha = l, k.drawImage(c[3], e.x, e.y, d, g, 0, 0, d, g));
	k.restore();
	return f
};
R.DU = function (a, c) {
	if (!a)
		return p;
	if (!c)
		return a;
	var d = document.createElement("canvas");
	d.width = c.width;
	d.height = c.height;
	var e = d.getContext("2d");
	e.translate(d.width / 2, d.height / 2);
	e.rotate(-1.5707963267948966);
	e.drawImage(a, c.x, c.y, c.height, c.width, -c.height / 2, -c.width / 2, c.height, c.width);
	return d
};
R.Zja = function (a, c, d, e, f, g) {
	this.pb = a;
	this.scale = c;
	this.rotation = d;
	this.Kn = e;
	this.Tla = f;
	this.visible = g
};
R.Th = function (a) {
	return 0 | a
};
R.R1 && (R.Th = u());
R.t = R.Wa.extend({
		Fc : m,
		S : p,
		lb : 0,
		la : p,
		ha : q,
		qk : p,
		tl : p,
		Oo : q,
		kr : p,
		z : p,
		G : p,
		sb : R.rect(0, 0, 0, 0),
		Ed : q,
		ue : p,
		Ql : p,
		Ta : q,
		qd : q,
		rd : q,
		Qa : q,
		rh : p,
		aK : p,
		Vfa : C("Qa"),
		Uf : function (a, c) {
			this.rh.push({
				Hr : a,
				ln : c
			})
		},
		ej : function () {
			for (var a = this.rh, c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				e.Hr.call(e.ln, this)
			}
			a.length = 0
		},
		Xu : C("ha"),
		eh : z("ha"),
		gva : C("Ed"),
		p9 : C("lb"),
		yd : z("lb"),
		tE : function () {
			return R.rect(this.sb.x, this.sb.y, this.sb.width, this.sb.height)
		},
		lM : C("S"),
		In : z("S"),
		Gsa : C("la"),
		zBa : z("la"),
		AV : function () {
			return R.b(this.ue.x,
				this.ue.y)
		},
		gp : C("z"),
		Md : function (a) {
			R.e(a != p, "");
			a.Qa || (this.Qa = q, a.Uf(this.VK, this));
			var c = this.ba(a.ja(), a.uf());
			this.fm(a);
			return c
		},
		VK : p,
		y6 : function (a) {
			this.Ha();
			this.cd(a.uf(), a.Pf, a.Or());
			this.ej()
		},
		x6 : function (a) {
			this.Ha();
			this.cd(a.uf(), a.Pf, a.Or());
			a = this.Lb();
			(255 !== a.i || 255 !== a.h || 255 !== a.c) && this.Bm();
			this.ej()
		},
		Yy : function (a) {
			R.e(a != p, "");
			a = R.Ff.d().Ei(a);
			return this.Md(a)
		},
		TCa : function (a) {
			this.S = a.S;
			this.la = a
		},
		pY : z("sb"),
		Ee : function () {
			if (this.Of) {
				for (var a, c, d = this.k, e, f = 1; f < d.length; f++) {
					c =
						d[f];
					a = f - 1;
					for (e = d[a]; 0 <= a && (c.Ra < e.Ra || c.Ra == e.Ra && c.Pg < e.Pg); )
						d[a + 1] = e, a -= 1, e = d[a];
					d[a + 1] = c
				}
				this.la && this.Xh(d, R.r.kh.Ee);
				this.Of = q
			}
		},
		kv : function (a, c) {
			R.e(a != p, "child is null");
			R.e(-1 < this.k.indexOf(a), "this child is not in children list");
			c !== a.Ra && (this.la && !this.Of && (this.PK(), this.la.mX(m)), R.r.prototype.kv.call(this, a, c))
		},
		removeChild : function (a, c) {
			this.la && this.la.$r(a);
			R.r.prototype.removeChild.call(this, a, c)
		},
		wg : function (a) {
			var c = this.k,
			d = this.la;
			if (d && c != p)
				for (var e = 0, f = c.length; e < f; e++)
					d.$r(c[e]);
			R.r.prototype.wg.call(this, a);
			this.tl = q
		},
		EX : function (a) {
			this.qk = a;
			this.eh(a);
			a = this.k;
			if (a != p)
				for (var c = 0; c < a.length; c++)
					a[c]instanceof R.t && a[c].EX(m)
		},
		$i : function () {
			this.la && !this.qk && (this.ha = this.qk = m, this.tl && this.EX(m))
		},
		q : function (a) {
			2 <= arguments.length ? R.r.prototype.q.call(this, a, arguments[1]) : R.r.prototype.q.call(this, a);
			this.$i()
		},
		he : function (a) {
			R.r.prototype.he.call(this, a);
			this.$i()
		},
		RF : function (a) {
			R.r.prototype.RF.call(this, a);
			this.$i()
		},
		SF : function (a) {
			R.r.prototype.SF.call(this, a);
			this.$i()
		},
		xv : function (a) {
			R.r.prototype.xv.call(this, a);
			this.$i()
		},
		yv : function (a) {
			R.r.prototype.yv.call(this, a);
			this.$i()
		},
		fh : function (a) {
			R.r.prototype.fh.call(this, a);
			this.$i()
		},
		yg : function (a) {
			R.r.prototype.yg.call(this, a);
			this.$i()
		},
		jd : function (a, c) {
			R.r.prototype.jd.call(this, a, c);
			this.$i()
		},
		WF : function (a) {
			R.r.prototype.WF.call(this, a);
			this.$i()
		},
		R : function (a) {
			R.r.prototype.R.call(this, a);
			this.$i()
		},
		Aa : function (a) {
			R.r.prototype.Aa.call(this, a);
			this.$i()
		},
		Gi : function (a) {
			R.e(!this.la, "ignoreAnchorPointForPosition is invalid in cc.Sprite");
			R.r.prototype.Gi.call(this, a)
		},
		zz : function (a) {
			this.qd != a && (this.qd = a, this.cd(this.sb, this.Ed, this.ea), this.Ha())
		},
		Nk : function (a) {
			this.rd != a && (this.rd = a, this.cd(this.sb, this.Ed, this.ea), this.Ha())
		},
		Gua : C("qd"),
		Hua : C("rd"),
		Rd : p,
		f6 : function (a) {
			this.Ta !== a && (this.Ta = a, this.Ln())
		},
		e6 : function (a) {
			this.Ta !== a && (this.Ta = a, this.Ha())
		},
		Ij : C("Ta"),
		Bf : p,
		T6 : function (a) {
			R.Wa.prototype.Bf.call(this, a);
			this.Ln()
		},
		S6 : function (a) {
			R.Wa.prototype.Bf.call(this, a);
			this.Bm();
			this.Ha()
		},
		fAa : function (a, c) {
			R.e(a, "cc.Sprite#setDisplayFrameWithAnimationName. animationName must not be null");
			var d = R.Nn.d().Dj(a);
			R.e(d, "cc.Sprite#setDisplayFrameWithAnimationName: Frame not found");
			d = d.Kf[c];
			R.e(d, "cc.Sprite#setDisplayFrame. Invalid frame");
			this.fm(d.Ei())
		},
		kV : C("la"),
		PK : function () {
			if (!this.Of) {
				this.Of = m;
				for (var a = this.Cc; a && a != this.la; )
					a.PK(), a = a.getParent()
			}
		},
		ja : C("G"),
		jc : p,
		WC : p,
		wh : q,
		JB : q,
		tx : q,
		Qg : p,
		ctor : p,
		$j : function (a) {
			R.Wa.prototype.ctor.call(this);
			this.Oo = q;
			this.ue = R.b(0, 0);
			this.Ql = R.b(0, 0);
			this.z = {
				src : R.Ac,
				da : R.zc
			};
			this.jc = new R.ec;
			this.WC = R.u.createBuffer();
			this.Qa = this.wh = m;
			this.rh =
				[];
			if (a)
				if ("string" === typeof a)
					a = R.Ff.d().Ei(a), this.Md(a);
				else if ("object" === typeof a)
					if (a instanceof R.oe)
						this.Md(a);
					else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) {
						var c = new R.Eb;
						c.vf(a);
						c.Ue();
						this.ba(c)
					} else
						a instanceof R.Eb && this.ba(a)
		},
		Zj : function (a) {
			R.Wa.prototype.ctor.call(this);
			this.Oo = q;
			this.ue = R.b(0, 0);
			this.Ql = R.b(0, 0);
			this.z = {
				src : R.Ac,
				da : R.zc
			};
			this.aK = q;
			this.Qa = m;
			this.rh = [];
			if (a)
				if ("string" === typeof a)
					a = R.Ff.d().Ei(a), this.Md(a);
				else if ("object" === typeof a)
					if (a instanceof
						R.oe)
						this.Md(a);
					else if (a instanceof HTMLImageElement || a instanceof HTMLCanvasElement) {
						var c = new R.Eb;
						c.vf(a);
						c.Ue();
						this.ba(c)
					} else
						a instanceof R.Eb && this.ba(a)
		},
		Nra : C("jc"),
		Qd : p,
		S5 : function (a, c) {
			this.z = 1 == arguments.length ? a : {
				src : a,
				da : c
			}
		},
		R5 : function (a, c) {
			this.tx = (this.z = 1 == arguments.length ? a : {
					src : a,
					da : c
				}) && (770 == this.z.src && 1 == this.z.da || 1 == this.z.src && 1 == this.z.da)
		},
		m : p,
		l4 : function () {
			if (0 < arguments.length)
				return this.wf(arguments[0], arguments[1]);
			R.Wa.prototype.m.call(this);
			this.ha = this.qk = q;
			this.Ta = m;
			this.z.src = R.Ac;
			this.z.da = R.zc;
			this.Na(p);
			this.Qa = m;
			this.qd = this.rd = q;
			this.R(R.b(0.5, 0.5));
			this.ue = R.Nb();
			this.tl = q;
			var a = {
				i : 255,
				h : 255,
				c : 255,
				g : 255
			};
			this.jc.J.v = a;
			this.jc.O.v = a;
			this.jc.N.v = a;
			this.jc.M.v = a;
			this.wh = m;
			this.cd(R.Oc(), q, R.kd());
			return m
		},
		k4 : function () {
			if (0 < arguments.length)
				return this.wf(arguments[0], arguments[1]);
			R.Wa.prototype.m.call(this);
			this.ha = this.qk = q;
			this.Ta = m;
			this.z.src = R.Ac;
			this.z.da = R.zc;
			this.Na(p);
			this.Qa = m;
			this.qd = this.rd = q;
			this.R(R.b(0.5, 0.5));
			this.ue = R.Nb();
			this.tl =
				q;
			this.cd(R.Oc(), q, R.kd());
			return m
		},
		wf : function (a, c) {
			R.e(a != p, "Sprite#initWithFile():Invalid filename for sprite");
			var d = R.fb.d().Kz(a);
			if (d) {
				if (!c) {
					var e = d.n();
					c = R.rect(0, 0, e.width, e.height)
				}
			} else
				d = R.fb.d().Jd(a);
			return this.ba(d, c)
		},
		ba : p,
		qx : function (a, c, d) {
			0 == arguments.length && b("Sprite.initWithTexture(): Argument must be non-nil ");
			d = d || q;
			if (!R.Wa.prototype.m.call(this))
				return q;
			this.la = p;
			this.ha = this.qk = q;
			this.Ta = m;
			this.z.src = R.Ac;
			this.z.da = R.zc;
			this.qd = this.rd = q;
			this.R(R.b(0.5, 0.5));
			this.ue =
				R.b(0, 0);
			this.tl = q;
			var e = new R.Cb(255, 255, 255, 255),
			f = this.jc;
			f.J.v = e;
			f.O.v = e;
			f.N.v = e;
			f.M.v = e;
			this.Qa = e = a.td;
			if (!e)
				return this.Ed = d || q, this.sb = c, a.Uf(this.xD, this), m;
			c || (c = R.rect(0, 0, 0, 0), c.size = a.n());
			this.Na(a);
			this.cd(c, d, c.size);
			this.Ec(p);
			return this.wh = m
		},
		px : function (a, c, d) {
			0 == arguments.length && b("Sprite.initWithTexture(): Argument must be non-nil ");
			d = d || q;
			if (!R.Wa.prototype.m.call(this))
				return q;
			this.la = p;
			this.ha = this.qk = q;
			this.Ta = m;
			this.z.src = R.Ac;
			this.z.da = R.zc;
			this.qd = this.rd = q;
			this.R(R.b(0.5,
					0.5));
			this.ue = R.b(0, 0);
			this.tl = q;
			var e = a.td;
			this.Qa = e;
			if (!e)
				return this.Ed = d || q, this.sb = c, a.Uf(this.xD, this), m;
			c || (c = R.rect(0, 0, 0, 0), c.size = a.n());
			this.Qg = a;
			this.Na(a);
			this.cd(c, d, c.size);
			this.Ec(p);
			return m
		},
		xD : p,
		E6 : function (a) {
			this.Qa = m;
			var c = this.sb;
			c ? R.Oq(c) && (c.size = a.n()) : (c = R.rect(0, 0, 0, 0), c.size = a.n());
			this.Na(a);
			this.cd(c, this.Ed, c.size);
			this.Ec(p);
			this.wh = m;
			this.ej()
		},
		D6 : function (a) {
			this.Qa = m;
			var c = this.sb;
			c ? R.Oq(c) && (c.size = a.n()) : (c = R.rect(0, 0, 0, 0), c.size = a.n());
			this.Qg = a;
			this.Na(a);
			this.cd(c,
				this.Ed, c.size);
			this.Ec(p);
			this.ej()
		},
		cd : p,
		q6 : function (a, c, d) {
			this.Ed = c || q;
			d = d || a.size;
			this.ma(d);
			this.pY(a);
			this.o6(a);
			a = this.Ql;
			this.qd && (a.x = -a.x);
			this.rd && (a.y = -a.y);
			var e = this.sb;
			this.ue.x = a.x + (this.ea.width - e.width) / 2;
			this.ue.y = a.y + (this.ea.height - e.height) / 2;
			if (this.la)
				this.ha = m;
			else {
				a = 0 + this.ue.x;
				c = 0 + this.ue.y;
				d = a + e.width;
				var e = c + e.height,
				f = this.jc;
				f.J.l = {
					x : a,
					y : c,
					f : 0
				};
				f.O.l = {
					x : d,
					y : c,
					f : 0
				};
				f.N.l = {
					x : a,
					y : e,
					f : 0
				};
				f.M.l = {
					x : d,
					y : e,
					f : 0
				};
				this.wh = m
			}
		},
		p6 : function (a, c, d) {
			this.Ed = c || q;
			d = d || a.size;
			this.ma(d);
			this.pY(a);
			a = this.Ql;
			this.qd && (a.x = -a.x);
			this.rd && (a.y = -a.y);
			this.ue.x = a.x + (this.ea.width - this.sb.width) / 2;
			this.ue.y = a.y + (this.ea.height - this.sb.height) / 2;
			this.la && (this.ha = m)
		},
		Vf : p,
		d7 : function () {
			if (this.Xu()) {
				var a = this.jc,
				c = this.Cc;
				if (!this.Ua || c && c != this.la && c.Oo)
					a.O.l = {
						x : 0,
						y : 0,
						f : 0
					},
				a.N.l = {
					x : 0,
					y : 0,
					f : 0
				},
				a.M.l = {
					x : 0,
					y : 0,
					f : 0
				},
				a.J.l = {
					x : 0,
					y : 0,
					f : 0
				},
				this.Oo = m;
				else {
					this.Oo = q;
					var d = this.kr = !c || c == this.la ? this.Ve() : R.Cf(this.Ve(), c.kr),
					e = this.sb.size,
					c = this.ue.x,
					f = this.ue.y,
					g = c + e.width,
					e = f + e.height,
					k = d.V,
					l = d.W,
					n = d.g,
					r = d.c,
					s = d.F,
					d = -d.C,
					t = this.JD;
					a.J.l = {
						x : R.Th(c * n - f * d + k),
						y : R.Th(c * r + f * s + l),
						f : t
					};
					a.O.l = {
						x : R.Th(g * n - f * d + k),
						y : R.Th(g * r + f * s + l),
						f : t
					};
					a.N.l = {
						x : R.Th(c * n - e * d + k),
						y : R.Th(c * r + e * s + l),
						f : t
					};
					a.M.l = {
						x : R.Th(g * n - e * d + k),
						y : R.Th(g * r + e * s + l),
						f : t
					}
				}
				this.S.Sz(a, this.lb);
				this.qk = q;
				this.eh(q)
			}
			this.tl && this.Xh(this.k, R.r.kh.Vf);
			R.Yn && (a = [R.b(this.jc.J.l.x, this.jc.J.l.y), R.b(this.jc.O.l.x, this.jc.O.l.y), R.b(this.jc.M.l.x, this.jc.M.l.y), R.b(this.jc.N.l.x, this.jc.N.l.y)], R.Se.Ce(a, 4, m))
		},
		c7 : function () {
			if (this.ha) {
				var a =
					this.Cc;
				!this.Ua || a && a != this.la && a.Oo ? this.Oo = m : (this.Oo = q, this.kr = !a || a == this.la ? this.Ve() : R.Cf(this.Ve(), a.kr));
				this.ha = this.qk = q
			}
			this.tl && this.Xh(this.k, R.r.kh.Vf)
		},
		I : p,
		yI : function (a, c, d) {
			R.e(a != p, "Argument must be non-NULL");
			c == p && (c = a.Ra);
			d == p && (d = a.ud);
			this.la && (R.e(a instanceof R.t, "cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode"), R.e(a.ja().Be === this.S.ja().Be, ""), this.la.appendChild(a), this.Of || this.PK());
			R.r.prototype.I.call(this, a, c, d);
			this.tl = m
		},
		xI : function (a,
			c, d) {
			R.e(a != p, "Argument must be non-NULL");
			c == p && (c = a.Ra);
			d == p && (d = a.ud);
			R.r.prototype.I.call(this, a, c, d);
			this.tl = m
		},
		Ln : function () {
			var a = this.gb,
			c = this.bb,
			a = {
				i : a.i,
				h : a.h,
				c : a.c,
				g : c
			};
			this.Ta && (a.i *= c / 255, a.h *= c / 255, a.c *= c / 255);
			c = this.jc;
			c.J.v = a;
			c.O.v = a;
			c.N.v = a;
			c.M.v = a;
			this.la && (this.lb != R.LH ? this.S.Sz(c, this.lb) : this.ha = m);
			this.wh = m
		},
		U : p,
		Rx : function (a) {
			R.Wa.prototype.U.call(this, a);
			this.Ln()
		},
		Uq : function (a) {
			R.Wa.prototype.U.call(this, a);
			this.Ha()
		},
		L : p,
		MK : function (a) {
			R.Wa.prototype.L.call(this, a);
			this.Ln()
		},
		Px : function (a) {
			var c = this.Lb();
			c.i === a.i && c.h === a.h && c.c === a.c || (R.Wa.prototype.L.call(this, a), this.Bm(), this.Ha())
		},
		Af : p,
		R6 : function (a) {
			R.Wa.prototype.Af.call(this, a);
			this.Ln()
		},
		Q6 : function (a) {
			R.Wa.prototype.Af.call(this, a);
			this.Bm();
			this.Ha()
		},
		fm : p,
		Y5 : function (a) {
			this.Ha();
			var c = a.Qu();
			this.Ql.x = c.x;
			this.Ql.y = c.y;
			c = a.ja();
			a.Qa || (this.Qa = q, a.Uf(function (a) {
					this.Qa = m;
					var c = a.ja();
					c != this.G && this.Na(c);
					this.cd(a.uf(), a.Ed, a.Or());
					this.ej()
				}, this));
			c != this.G && this.Na(c);
			this.Ed = a.Pf;
			this.cd(a.uf(),
				this.Ed, a.Or())
		},
		X5 : function (a) {
			this.Ha();
			var c = a.Qu();
			this.Ql.x = c.x;
			this.Ql.y = c.y;
			this.Ed = a.Pf;
			var c = a.ja(),
			d = a.Qa;
			d || (this.Qa = q, a.Uf(function (a) {
					this.Qa = m;
					var c = a.ja();
					c != this.G && this.Na(c);
					this.cd(a.uf(), this.Ed, a.Or());
					this.ej()
				}, this));
			c != this.G && this.Na(c);
			this.Ed && (this.Qg = c);
			this.cd(a.uf(), this.Ed, a.Or());
			this.JB = q;
			d && (a = this.Lb(), (255 !== a.i || 255 !== a.h || 255 !== a.c) && this.Bm())
		},
		ZV : p,
		B4 : function (a) {
			return R.eX(a.uf(), this.sb) && a.ja().getName() == this.G.getName() && R.iv(a.Qu(), this.Ql)
		},
		A4 : function (a) {
			return a.ja() !=
			this.G ? q : R.eX(a.uf(), this.sb)
		},
		Q8 : function () {
			return R.oe.Fh(this.G, R.HA(this.sb), this.Ed, R.j1(this.Ql), R.KH(this.ea))
		},
		Ec : p,
		Q5 : function (a) {
			if (this.la = a)
				this.kr = {
					g : 1,
					c : 0,
					C : 0,
					F : 1,
					V : 0,
					W : 0
				},
			this.In(this.la.S);
			else {
				this.lb = R.LH;
				this.In(p);
				this.qk = q;
				this.eh(q);
				a = this.ue.x;
				var c = this.ue.y,
				d = a + this.sb.width,
				e = c + this.sb.height,
				f = this.jc;
				f.J.l = {
					x : a,
					y : c,
					f : 0
				};
				f.O.l = {
					x : d,
					y : c,
					f : 0
				};
				f.N.l = {
					x : a,
					y : e,
					f : 0
				};
				f.M.l = {
					x : d,
					y : e,
					f : 0
				};
				this.wh = m
			}
		},
		P5 : function (a) {
			(this.la = a) ? (this.kr = {
					g : 1,
					c : 0,
					C : 0,
					F : 1,
					V : 0,
					W : 0
				}, this.In(this.la.S)) :
			(this.lb = R.LH, this.In(p), this.qk = q, this.eh(q))
		},
		Na : p,
		Tx : function (a) {
			R.e(!a || a instanceof R.Eb, "setTexture expects a CCTexture2D. Invalid argument");
			R.e(!this.la, "cc.Sprite: Batched sprites should use the same texture as the batchnode");
			a ? this.Ye(R.Ad.d().Tc(R.rm)) : this.Ye(R.Ad.d().Tc(R.OA));
			!this.la && this.G != a && (this.G = a, this.zi())
		},
		Sx : function (a) {
			R.e(!a || a instanceof R.Eb, "setTexture expects a CCTexture2D. Invalid argument");
			this.G != a && (a && a.Pc instanceof HTMLImageElement && (this.Qg = a), this.G = a)
		},
		zi : function () {
			R.e(!this.la, "cc.Sprite: _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode");
			!this.G || !this.G.Wl() ? (this.z.src = 770, this.z.da = 771, this.Rd(q)) : (this.z.src = R.Ac, this.z.da = R.zc, this.Rd(m))
		},
		Bm : function () {
			var a,
			c = this.G,
			d = this.tE();
			if (c && 0 < d.width && (a = c.Pc))
				if (c = R.fb.d().sE(this.Qg.Pc))
					this.JB = m, a instanceof HTMLCanvasElement && !this.Ed && !this.aK ? R.Lu(a, c, this.gb, d, a) : (a = R.Lu(a, c, this.gb, d), c = new R.Eb, c.vf(a), c.Ue(), this.Na(c))
		},
		o6 : function (a) {
			a = R.HA(a);
			var c = this.la ? this.S.ja() : this.G;
			if (c) {
				var d = c.on(),
				e = c.nn(),
				f,
				g = this.jc;
				this.Ed ? (R.uA ? (c = (2 * a.x + 1) / (2 * d), d = c + (2 * a.height - 2) / (2 * d), f = (2 * a.y + 1) / (2 * e), a = f + (2 * a.width - 2) / (2 * e)) : (c = a.x / d, d = (a.x + a.height) / d, f = a.y / e, a = (a.y + a.width) / e), this.qd && (e = f, f = a, a = e), this.rd && (e = c, c = d, d = e), g.J.s.Ka = c, g.J.s.ca = f, g.O.s.Ka = c, g.O.s.ca = a, g.N.s.Ka = d, g.N.s.ca = f, g.M.s.Ka = d, g.M.s.ca = a) : (R.uA ? (c = (2 * a.x + 1) / (2 * d), d = c + (2 * a.width - 2) / (2 * d), f = (2 * a.y + 1) / (2 * e), a = f + (2 * a.height - 2) / (2 * e)) : (c = a.x / d, d = (a.x + a.width) / d, f = a.y / e, a = (a.y + a.height) /
						e), this.qd && (e = c, c = d, d = e), this.rd && (e = f, f = a, a = e), g.J.s.Ka = c, g.J.s.ca = a, g.O.s.Ka = d, g.O.s.ca = a, g.N.s.Ka = c, g.N.s.ca = f, g.M.s.Ka = d, g.M.s.ca = f);
				this.wh = m
			}
		},
		fa : p,
		Jg : function () {
			if (this.Qa) {
				var a = R.u,
				c = this.G;
				c ? c.td && (this.Yb.Sd(), this.Yb.hh(), R.Fi(this.z.src, this.z.da), R.pM(0, c), R.Ld(R.Tp), a.bindBuffer(a.ARRAY_BUFFER, this.WC), this.wh && (a.bufferData(a.ARRAY_BUFFER, this.jc.JL, a.DYNAMIC_DRAW), this.wh = q), a.vertexAttribPointer(0, 3, a.FLOAT, q, 24, 0), a.vertexAttribPointer(1, 4, a.UNSIGNED_BYTE, m, 24, 12), a.vertexAttribPointer(2,
						2, a.FLOAT, q, 24, 16), a.drawArrays(a.TRIANGLE_STRIP, 0, 4)) : (this.Yb.Sd(), this.Yb.hh(), R.Fi(this.z.src, this.z.da), R.Ih(p), R.Ld(R.Gf | R.lB), a.bindBuffer(a.ARRAY_BUFFER, this.WC), this.wh && (R.u.bufferData(R.u.ARRAY_BUFFER, this.jc.JL, R.u.STATIC_DRAW), this.wh = q), a.vertexAttribPointer(R.fc, 3, a.FLOAT, q, 24, 0), a.vertexAttribPointer(R.Gg, 4, a.UNSIGNED_BYTE, m, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 4));
				R.Ci++;
				0 !== R.Yn && (1 === R.Yn ? (a = this.jc, a = [R.b(a.N.l.x, a.N.l.y), R.b(a.J.l.x, a.J.l.y), R.b(a.O.l.x, a.O.l.y), R.b(a.M.l.x,
								a.M.l.y)], R.Se.Ce(a, 4, m)) : 2 === R.Yn && (a = this.tE().size, c = this.AV(), a = [R.b(c.x, c.y), R.b(c.x + a.width, c.y), R.b(c.x + a.width, c.y + a.height), R.b(c.x, c.y + a.height)], R.Se.Ce(a, 4, m)))
			}
		},
		bk : function (a) {
			if (this.Qa) {
				a = a || R.u;
				this.tx && (a.globalCompositeOperation = "lighter");
				a.globalAlpha = this.bb / 255;
				var c = this.sb,
				d = this.ea,
				e = this.ue,
				f = 0 | e.x,
				g = -e.y - c.height;
				if (this.qd || this.rd)
					a.save(), this.qd && (f = -e.x - c.width, a.scale(-1, 1)), this.rd && (g = e.y, a.scale(1, -1));
				this.G && 0 < c.width ? (d = this.G.Pc, this.JB ? a.drawImage(d, 0, 0, c.width,
						c.height, f, g, c.width, c.height) : a.drawImage(d, c.x, c.y, c.width, c.height, f, g, c.width, c.height)) : 0 !== d.width && (e = this.Lb(), a.fillStyle = "rgba(" + e.i + "," + e.h + "," + e.c + ",1)", a.fillRect(f, g, d.width, d.height));
				1 === R.Yn ? (a.strokeStyle = "rgba(0,255,0,1)", g = -g, f = [R.b(f, g), R.b(f + c.width, g), R.b(f + c.width, g - c.height), R.b(f, g - c.height)], R.Se.Ce(f, 4, m)) : 2 === R.Yn && (a.strokeStyle = "rgba(0,255,0,1)", c = this.sb.size, g = -g, f = [R.b(f, g), R.b(f + c.width, g), R.b(f + c.width, g - c.height), R.b(f, g - c.height)], R.Se.Ce(f, 4, m));
				(this.qd || this.rd) &&
				a.restore();
				R.Ci++
			}
		}
	});
R.ua.tc ? (Q = R.t.prototype, Q.VK = R.t.prototype.y6, Q.Rd = R.t.prototype.f6, Q.Bf = R.t.prototype.T6, Q.ctor = R.t.prototype.$j, Q.Qd = R.t.prototype.S5, Q.m = R.t.prototype.l4, Q.ba = R.t.prototype.qx, Q.xD = R.t.prototype.E6, Q.cd = R.t.prototype.q6, Q.Vf = R.t.prototype.d7, Q.I = R.t.prototype.yI, Q.U = R.t.prototype.Rx, Q.L = R.t.prototype.MK, Q.Af = R.t.prototype.R6, Q.fm = R.t.prototype.Y5, Q.ZV = R.t.prototype.B4, Q.Ec = R.t.prototype.Q5, Q.Na = R.t.prototype.Tx, Q.fa = R.t.prototype.Jg) : (Q = R.t.prototype, Q.VK = R.t.prototype.x6, Q.Rd = R.t.prototype.e6,
	Q.Bf = R.t.prototype.S6, Q.ctor = R.t.prototype.Zj, Q.Qd = R.t.prototype.R5, Q.m = R.t.prototype.k4, Q.ba = R.t.prototype.px, Q.xD = R.t.prototype.D6, Q.cd = R.t.prototype.p6, Q.Vf = R.t.prototype.c7, Q.I = R.t.prototype.xI, Q.U = R.t.prototype.Uq, Q.L = R.t.prototype.Px, Q.Af = R.t.prototype.Q6, Q.fm = R.t.prototype.X5, Q.ZV = R.t.prototype.A4, Q.Ec = R.t.prototype.P5, Q.Na = R.t.prototype.Sx, Q.fa = R.t.prototype.bk);
R.t.Fh = function (a, c) {
	var d = arguments.length,
	e = new R.t;
	switch (d) {
	case 1:
		return e && e.ba(a) ? e : p;
	case 2:
		return e && e.ba(a, c) ? e : p;
	default:
		b("Sprite.createWithTexture(): Argument must be non-nil ")
	}
};
R.t.create = function (a, c) {
	var d = arguments.length,
	e = new R.t;
	if (0 === d) {
		if (e.m())
			return e
	} else if (e && e.m(a, c))
		return e;
	return p
};
R.t.Iy = function (a) {
	var c = p;
	if ("string" == typeof a) {
		if (c = R.Ff.d().Ei(a), !c)
			return R.log("Invalid spriteFrameName: " + a), p
	} else
		return R.log("Invalid argument. Expecting string."), p;
	return (a = new R.t) && a.Md(c) ? a : p
};
R.t.Cr = function (a) {
	var c = new R.t;
	return c && c.Md(a) ? c : p
};
R.lm = R.D.extend({
		Qo : p,
		Jf : 0,
		sy : p,
		ctor : function () {
			this.Jf = 0
		},
		A : function () {
			var a = new R.lm;
			a.Md(this.Qo.A(), this.Jf, this.sy);
			return a
		},
		ZD : function () {
			return R.A(this)
		},
		copy : function () {
			var a = new R.lm;
			a.Md(this.Qo.A(), this.Jf, this.sy);
			return a
		},
		Md : function (a, c, d) {
			this.Qo = a;
			this.Jf = c;
			this.sy = d;
			return m
		},
		Ei : C("Qo"),
		gfa : z("Qo"),
		cpa : C("Jf"),
		dAa : z("Jf"),
		Bta : C("sy"),
		hCa : z("sy")
	});
R.km = R.D.extend({
		Kf : p,
		Sm : 0,
		Qq : q,
		p : 0,
		Jf : 0,
		hr : 0,
		ctor : function () {
			this.Kf = []
		},
		Upa : C("Kf"),
		LX : z("Kf"),
		DL : function (a) {
			var c = new R.lm;
			c.Md(a, 1, p);
			this.Kf.push(c);
			this.hr++
		},
		Lla : function (a) {
			a = R.fb.d().Jd(a);
			var c = R.Oc();
			c.size = a.n();
			a = R.oe.Fh(a, c);
			this.DL(a)
		},
		Mla : function (a, c) {
			var d = R.oe.Fh(a, c);
			this.DL(d)
		},
		Xy : function (a, c, d) {
			R.Zz(a, R.lm);
			this.Jf = c;
			this.Sm = d;
			this.LX([]);
			for (c = 0; c < a.length; c++)
				d = a[c], this.Kf.push(d), this.hr += d.Jf;
			return m
		},
		A : function () {
			var a = new R.km;
			a.Xy(this.eS(), this.Jf, this.Sm);
			a.PF(this.Qq);
			return a
		},
		ZD : function () {
			var a = new R.km;
			a.Xy(this.eS(), this.Jf, this.Sm);
			a.PF(this.Qq);
			return a
		},
		eS : function () {
			for (var a = [], c = 0; c < this.Kf.length; c++)
				a.push(this.Kf[c].A());
			return a
		},
		copy : function () {
			return this.ZD(p)
		},
		Cqa : C("Sm"),
		GAa : z("Sm"),
		PF : z("Qq"),
		Zra : C("Qq"),
		tf : function () {
			return this.hr * this.Jf
		},
		bpa : C("Jf"),
		cAa : z("Jf"),
		mta : C("hr"),
		UV : function (a, c) {
			R.Zz(a, R.oe);
			this.Sm = 1;
			this.Jf = c || 0;
			this.LX([]);
			if (a)
				for (var d = 0; d < a.length; d++) {
					var e = a[d],
					f = new R.lm;
					f.Md(e, 1, p);
					this.Kf.push(f);
					this.hr++
				}
			return m
		},
		zN : x(),
		dm : x()
	});
R.km.create = function (a, c, d) {
	var e = arguments.length,
	f = new R.km;
	0 == e ? f.UV(p, 0) : 2 == e ? f.UV(a, c || 0) : 3 == e && f.Xy(a, c, d);
	return f
};
R.km.BU = function (a, c, d) {
	var e = new R.km;
	e.Xy(a, c, d);
	return e
};
R.Nn = R.D.extend({
		UT : function (a, c) {
			this.aq[c] = a
		},
		Wya : function (a) {
			a && this.aq.hasOwnProperty(a) && delete this.aq[a]
		},
		Dj : function (a) {
			return this.aq.hasOwnProperty(a) ? this.aq[a] : p
		},
		g7 : function (a) {
			var c = a.animations;
			if (c) {
				var d = 1;
				if (a = a.properties) {
					d = a.format != p ? parseInt(a.format) : d;
					a = a.spritesheets;
					for (var e = 0; e < a.length; e++)
						R.Ff.d().By(a[e])
				}
				switch (d) {
				case 1:
					this.i5(c);
					break;
				case 2:
					this.j5(c);
					break;
				default:
					R.e(q, "Invalid animation format")
				}
			} else
				R.log("cocos2d: cc.AnimationCache: No animations were found in provided dictionary.")
		},
		f7 : function (a) {
			R.e(a, "Invalid texture file name");
			var c = R.cc.d();
			a = c.Kd(a);
			c = c.Fu(a);
			R.e(c, "cc.AnimationCache: File could not be found");
			this.g7(c)
		},
		i5 : function (a) {
			var c = R.Ff.d(),
			d;
			for (d in a) {
				var e = a[d],
				f = e.frames,
				e = parseFloat(e.delay) || 0,
				g = p;
				if (f) {
					for (var g = [], k = 0; k < f.length; k++) {
						var l = c.Ei(f[k]);
						if (l) {
							var n = new R.lm;
							n.Md(l, 1, p);
							g.push(n)
						} else
							R.log("cocos2d: cc.AnimationCache: Animation '" + d + "' refers to frame '" + f[k] + "' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.")
					}
					0 ===
					g.length ? R.log("cocos2d: cc.AnimationCache: None of the frames for animation '" + d + "' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.") : (g.length != f.length && R.log("cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '" + d + "' may be missing."), g = R.km.BU(g, e, 1), R.Nn.d().UT(g, d))
				} else
					R.log("cocos2d: cc.AnimationCache: Animation '" + d + "' found in dictionary without any frames - cannot add to animation cache.")
			}
		},
		j5 : function (a) {
			var c = R.Ff.d(),
			d;
			for (d in a) {
				var e = a[d],
				f = parseInt(e.loops),
				f = isNaN(f) ? 1 : f,
				g = e.restoreOriginalFrame && e.restoreOriginalFrame == m ? m : q,
				k = e.frames;
				if (k) {
					for (var l = [], n = 0; n < k.length; n++) {
						var r = k[n],
						s = r.spriteframe,
						t = c.Ei(s);
						if (t) {
							var s = parseFloat(r.delayUnits) || 0,
							r = r.notification,
							v = new R.lm;
							v.Md(t, s, r);
							l.push(v)
						} else
							R.log("cocos2d: cc.AnimationCache: Animation '" + d + "' refers to frame '" + s + "' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.")
					}
					e =
						parseFloat(e.delayPerUnit) || 0;
					k = new R.km;
					k.Xy(l, e, f);
					k.PF(g);
					R.Nn.d().UT(k, d)
				} else
					R.log("cocos2d: CCAnimationCache: Animation '" + d + "' found in dictionary without any frames - cannot add to animation cache.")
			}
		},
		m : function () {
			this.aq = {};
			return m
		},
		aq : p
	});
R.Nn.tca = function () {
	R.cs && (R.cs.aq = p, R.cs = p)
};
R.Nn.d = function () {
	R.cs === p && (R.cs = new R.Nn, R.cs.m());
	return R.cs
};
R.cs = p;
R.oe = R.D.extend({
		Jb : p,
		th : p,
		qj : p,
		Pf : q,
		sb : p,
		jk : p,
		lk : p,
		G : p,
		lu : "",
		Qa : q,
		qJ : p,
		ctor : function () {
			this.Jb = R.b(0, 0);
			this.jk = R.b(0, 0);
			this.th = R.size(0, 0);
			this.qj = R.rect(0, 0, 0, 0);
			this.Pf = q;
			this.sb = R.rect(0, 0, 0, 0);
			this.lk = R.size(0, 0);
			this.lu = "";
			this.G = p;
			this.Qa = q;
			this.qJ = []
		},
		Vfa : C("Qa"),
		Uf : function (a, c) {
			this.qJ.push({
				Hr : a,
				ln : c
			})
		},
		ej : function () {
			for (var a = this.qJ, c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				e.Hr.call(e.ln, this)
			}
			a.length = 0
		},
		Vra : C("qj"),
		mBa : function (a) {
			this.qj = a;
			this.sb = R.dl(a)
		},
		$ua : C("Pf"),
		sBa : z("Pf"),
		uf : C("sb"),
		dY : function (a) {
			this.sb = a;
			this.qj = R.HA(this.sb)
		},
		P9 : function () {
			return R.b(this.jk.x, this.jk.y)
		},
		VAa : function (a) {
			this.jk = a;
			this.Jb = R.Jp(this.jk)
		},
		mra : C("lk"),
		YAa : z("lk"),
		Or : function () {
			return R.size(this.th.width, this.th.height)
		},
		XAa : z("th"),
		ja : function () {
			if (this.G)
				return this.G;
			if ("" !== this.lu) {
				var a = R.fb.d().Jd(this.lu);
				a && (this.Qa = a.td);
				return a
			}
			return p
		},
		Na : function (a) {
			if (this.G != a) {
				var c = a.td;
				this.Qa = c;
				this.G = a;
				c || a.Uf(function (a) {
					this.Qa = m;
					if (this.Pf) {
						var c = a.Pc,
						c = R.DU(c, this.uf()),
						f = new R.Eb;
						f.vf(c);
						f.Ue();
						this.Na(f);
						c = this.uf();
						this.dY(R.rect(0, 0, c.width, c.height))
					}
					c = this.sb;
					0 === c.width && 0 === c.height && (a = a.n(), this.sb.width = a.width, this.sb.height = a.height, this.qj = R.HA(this.sb), this.lk.width = this.qj.width, this.lk.height = this.qj.height, this.th.width = a.width, this.th.height = a.height);
					this.ej()
				}, this)
			}
		},
		Qu : function () {
			return R.b(this.Jb.x, this.Jb.y)
		},
		Jea : function (a) {
			this.Jb.x = a.x;
			this.Jb.y = a.y
		},
		A : function () {
			var a = new R.oe;
			a.HE(this.lu, this.qj, this.Pf, this.jk, this.lk);
			a.Na(this.G);
			return a
		},
		ZD : function () {
			var a = new R.oe;
			a.HE(this.lu, this.qj, this.Pf, this.jk, this.lk);
			a.Na(this.G);
			return a
		},
		copy : function () {
			return this.ZD()
		},
		ba : function (a, c, d, e, f) {
			d = d || q;
			e = e || R.size(0, 0);
			f = f || c.size;
			this.Na(a);
			this.qj = c;
			this.sb = R.dl(c);
			this.jk = e;
			this.Jb = R.Jp(e);
			this.lk = f;
			this.th = R.kw(f);
			this.Pf = d;
			return m
		},
		HE : function (a, c, d, e, f) {
			e = e || R.size(0, 0);
			f = f || c.size;
			this.G = p;
			this.lu = a;
			this.qj = c;
			this.sb = R.dl(c);
			this.Pf = d || q;
			this.jk = e;
			this.Jb = R.Jp(e);
			this.lk = f;
			this.th = R.kw(f);
			return m
		}
	});
R.oe.create = function (a, c, d, e, f) {
	var g = new R.oe;
	switch (arguments.length) {
	case 2:
		g.HE(a, c);
		break;
	case 5:
		g.HE(a, c, d, e, f);
		break;
	default:
		b("Argument must be non-nil ")
	}
	return g
};
R.oe.Fh = function (a, c, d, e, f) {
	var g = new R.oe;
	g.ba(a, c, d, e, f);
	return g
};
R.oe.Bka = function (a, c, d, e, f) {
	var g = new R.oe;
	g.G = a;
	g.qj = c;
	g.sb = R.dl(c);
	g.jk = e;
	g.Jb = R.Jp(g.jk);
	g.lk = f;
	g.th = R.kw(g.lk);
	g.Pf = d;
	return g
};
R.Ff = R.D.extend({
		kg : p,
		Ro : p,
		Ax : p,
		ctor : function () {
			this.kg = {};
			this.Ro = {};
			this.Ax = []
		},
		sB : function (a, c) {
			var d = a.metadata,
			e = a.frames,
			f = 0;
			d != p && (f = parseInt(this.Id("format", d)));
			R.e(0 <= f && 3 >= f, "format is not supported for cc.SpriteFrameCache addSpriteFramesWithDictionary:textureFilename:");
			for (var g in e) {
				var k = e[g];
				if (k && (d = this.kg[g], !d)) {
					if (0 == f) {
						var l = parseFloat(this.Id("x", k)),
						n = parseFloat(this.Id("y", k)),
						r = parseFloat(this.Id("width", k)),
						s = parseFloat(this.Id("height", k)),
						t = parseFloat(this.Id("offsetX",
									k)),
						v = parseFloat(this.Id("offsetY", k)),
						w = parseInt(this.Id("originalWidth", k)),
						k = parseInt(this.Id("originalHeight", k));
						(!w || !k) && R.log("cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist");
						w = Math.abs(w);
						k = Math.abs(k);
						d = new R.oe;
						d.ba(c, R.rect(l, n, r, s), q, R.b(t, v), R.size(w, k))
					} else if (1 == f || 2 == f)
						l = R.sQ(this.Id("frame", k)), n = q, 2 == f && (n = "true" == this.Id("rotated", k)), r = R.rQ(this.Id("offset", k)), k = R.OH(this.Id("sourceSize", k)),
						d = new R.oe, d.ba(c, l, n, r, k);
					else if (3 == f) {
						var l = R.OH(this.Id("spriteSize", k)),
						n = R.rQ(this.Id("spriteOffset", k)),
						r = R.OH(this.Id("spriteSourceSize", k)),
						s = R.sQ(this.Id("textureRect", k)),
						t = "true" == this.Id("textureRotated", k),
						d = k.aliases,
						v = g.toString(),
						y;
						for (y in d)
							this.Ro.hasOwnProperty(d[y]) && R.log("cocos2d: WARNING: an alias with name " + y + " already exists"), this.Ro[d[y]] = v;
						d = new R.oe;
						k.hasOwnProperty("spriteSize") ? d.ba(c, R.rect(s.x, s.y, l.width, l.height), t, n, r) : d.ba(c, l, t, n, r)
					}
					R.T === R.Ab && d.Pf && d.ja().td &&
					(k = d.ja().Pc, k = R.DU(k, d.uf()), l = new R.Eb, l.vf(k), l.Ue(), d.Na(l), k = d.uf(), d.dY(R.rect(0, 0, k.width, k.height)));
					this.kg[g] = d
				}
			}
		},
		Nla : function (a) {
			R.log("addSpriteFramesWithJson is deprecated, because Json format doesn't support on JSB. Use XML format instead");
			var c = "",
			d = a.metadata;
			d && (c = this.Id("textureFileName", d), c = c.toString());
			(c = R.fb.d().Jd(c)) ? this.sB(a, c) : R.log("cocos2d: cc.SpriteFrameCache: Couldn't load texture")
		},
		By : function (a, c) {
			var d = R.cc.d(),
			e = d.Kd(a),
			e = d.Fu(e);
			switch (arguments.length) {
			case 1:
				R.e(a,
					"plist filename should not be NULL");
				if (!R.mm(this.Ax, a)) {
					var f = "",
					g = e.metadata;
					g && (f = this.Id("textureFileName", g).toString());
					"" != f ? f = d.iE(f, a) : (f = a, f = f.substr(0, f.lastIndexOf(".", f.length)), f += ".png");
					(d = R.fb.d().Jd(f)) ? this.sB(e, d) : R.log("cocos2d: cc.SpriteFrameCache: Couldn't load texture")
				}
				break;
			case 2:
				c instanceof R.Eb ? this.sB(e, c) : (R.e(c, "texture name should not be null"), (d = R.fb.d().Jd(c)) ? this.sB(e, d) : R.log("cocos2d: cc.SpriteFrameCache: couldn't load texture file. File not found " + c));
				break;
			default:
				b("Argument must be non-nil ")
			}
		},
		DL : function (a, c) {
			this.kg[c] = a
		},
		gza : function () {
			this.kg = [];
			this.Ro = [];
			this.Ax = {}

		},
		fza : function (a) {
			a && (this.Ro.hasOwnProperty(a) && delete this.Ro[a], this.kg.hasOwnProperty(a) && delete this.kg[a], this.Ax = {})
		},
		hza : function (a) {
			var c = R.cc.d(),
			d = c.Kd(a),
			c = c.Fu(d);
			this.E5(c);
			R.mm(this.Ax, a) && R.ke(a)
		},
		E5 : function (a) {
			a = a.frames;
			for (var c in a)
				this.kg.hasOwnProperty(c) && delete this.kg[c]
		},
		iza : function (a) {
			for (var c in this.kg) {
				var d = this.kg[c];
				d && d.ja() == a && delete this.kg[c]
			}
		},
		Ei : function (a) {
			var c;
			this.kg.hasOwnProperty(a) && (c = this.kg[a]);
			if (!c) {
				var d;
				this.Ro.hasOwnProperty(a) && (d = this.Ro[a]);
				d && (this.kg.hasOwnProperty(d.toString()) && (c = this.kg[d.toString()]), c || R.log("cocos2d: cc.SpriteFrameCahce: Frame " + a + " not found"))
			}
			return c
		},
		Id : function (a, c) {
			return c && c.hasOwnProperty(a) ? c[a].toString() : ""
		}
	});
R.zF = p;
R.Ff.d = function () {
	R.zF || (R.zF = new R.Ff);
	return R.zF
};
R.Ff.uca = function () {
	R.zF = p
};
R.Nv = 29;
R.Oa = R.r.extend({
		S : p,
		z : p,
		qe : p,
		w7 : function (a, c, d) {
			R.e(a != p, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil");
			R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children");
			a.yd(c);
			var e = 0,
			f = this.qe;
			if (f && 0 < f.length)
				for (var g = 0; g < f.length; g++) {
					var k = f[g];
					k && k.lb >= c && ++e
				}
			this.qe = R.Ui(f, a, e);
			R.r.prototype.I.call(this, a, c, d);
			this.mX(q);
			return this
		},
		lM : C("S"),
		In : function (a) {
			a != this.S && (this.S = a)
		},
		epa : C("qe"),
		wf : function (a, c) {
			var d = R.fb.d().Kz(a);
			d || (d = R.fb.d().Jd(a));
			return this.ba(d,
				c)
		},
		Tq : function () {
			this.yB = m
		},
		m : function (a, c) {
			var d = R.fb.d().Kz(a);
			d || (d = R.fb.d().Jd(a));
			return this.ba(d, c)
		},
		CE : function () {
			var a = this.S.pd,
			c = Math.floor(4 * (a + 1) / 3);
			R.log("cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from " + a + " to " + c + ".");
			this.S.yN(c) || (R.log("cocos2d: WARNING: Not enough memory to resize the atlas"), R.e(q, "Not enough memory to resize the atla"))
		},
		Sca : function (a, c) {
			this.removeChild(this.k[a], c)
		},
		dX : function (a, c) {
			var d = a.k;
			if (d && 0 < d.length)
				for (var e = 0; e < d.length; e++) {
					var f =
						d[e];
					f && 0 > f.Ra && (c = this.dX(f, c))
				}
			!a == this && (a.yd(c), c++);
			if (d && 0 < d.length)
				for (e = 0; e < d.length; e++)
					(f = d[e]) && 0 <= f.Ra && (c = this.dX(f, c));
			return c
		},
		uM : function (a) {
			var c = a.k;
			return !c || 0 == c.length ? a.lb : this.uM(c[c.length - 1])
		},
		Eaa : function (a) {
			var c = a.k;
			return !c || 0 == c.length ? a.lb : this.Eaa(c[c.length - 1])
		},
		H7 : function (a, c) {
			var d = a.getParent().k,
			e = R.Hv(d, a),
			f = a.getParent() == this,
			g = p;
			0 < e && e < R.yR && (g = d[e - 1]);
			if (f)
				return 0 == e ? 0 : this.uM(g) + 1;
			if (0 == e)
				return d = a.getParent(), 0 > c ? d.lb : d.lb + 1;
			if (0 > g.Ra && 0 > c || 0 <= g.Ra &&
				0 <= c)
				return this.uM(g) + 1;
			d = a.getParent();
			return d.lb + 1
		},
		mX : z("Of"),
		Qd : function (a, c) {
			this.z = 1 == arguments.length ? a : {
				src : a,
				da : c
			}
		},
		gp : C("z"),
		kv : function (a, c) {
			R.e(a != p, "SpriteBatchNode.addChild():the child should not be null");
			R.e(-1 < this.k.indexOf(a), "SpriteBatchNode.addChild():Child doesn't belong to Sprite");
			c !== a.Ra && (R.r.prototype.kv.call(this, a, c), this.Ha())
		},
		removeChild : function (a, c) {
			a != p && (R.e(-1 < this.k.indexOf(a), "SpriteBatchNode.addChild():sprite batch node should contain the child"), this.$r(a),
				R.r.prototype.removeChild.call(this, a, c))
		},
		O4 : p,
		Wo : p,
		tla : q,
		Qg : p,
		ctor : p,
		Zj : function (a) {
			R.r.prototype.ctor.call(this);
			a && this.m(a, R.Nv)
		},
		$j : function (a) {
			R.r.prototype.ctor.call(this);
			this.O4 = new R.wa;
			a && this.m(a, R.Nv)
		},
		WY : p,
		X6 : function (a, c) {
			R.e(a != p, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil");
			R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children");
			a.Ec(this);
			a.yd(c);
			a.eh(m);
			a.Vf()
		},
		Y6 : function (a, c) {
			R.e(a != p, "SpriteBatchNode.addQuadFromSprite():Argument must be non-nil");
			R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children");
			for (var d = this.S.pd; c >= d || d == this.S.Ja; )
				this.CE();
			a.Ec(this);
			a.yd(c);
			a.eh(m);
			a.Vf()
		},
		Uo : function (a, c) {
			var d = this.qe,
			e = this.S,
			f = e.Dc,
			g = d[a],
			k = R.oI(f[a]);
			d[c].yd(a);
			d[a] = d[c];
			e.Sz(f[c], a);
			d[c] = g;
			e.Sz(k, c)
		},
		IE : p,
		x4 : function (a, c) {
			R.e(a != p, "Argument must be non-NULL");
			R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children");
			a.Ec(this);
			a.yd(c);
			a.eh(m);
			a.Vf();
			this.k = R.Ui(this.k, a, c)
		},
		y4 : function (a, c) {
			R.e(a !=
				p, "Argument must be non-NULL");
			R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children");
			for (var d = this.S; c >= d.pd || d.pd === d.Ja; )
				this.CE();
			a.Ec(this);
			a.yd(c);
			d.JM(a.jc, c);
			a.eh(m);
			a.Vf()
		},
		NT : function (a, c) {
			var d = 0,
			e = a.k;
			e && (d = e.length);
			var f = 0;
			if (0 === d)
				f = a.lb, a.yd(c), a.tv(0), f != c && this.Uo(f, c), c++;
			else {
				f = m;
				0 <= e[0].Ra && (f = a.lb, a.yd(c), a.tv(0), f != c && this.Uo(f, c), c++, f = q);
				for (d = 0; d < e.length; d++) {
					var g = e[d];
					f && 0 <= g.Ra && (f = a.lb, a.yd(c), a.tv(0), f != c && this.Uo(f, c), c++, f = q);
					c = this.NT(g,
							c)
				}
				f && (f = a.lb, a.yd(c), a.tv(0), f != c && this.Uo(f, c), c++)
			}
			return c
		},
		zi : function () {
			this.S.ja().Wl() || (this.z.src = 770, this.z.da = 771)
		},
		ba : p,
		px : function (a) {
			this.k = [];
			this.qe = [];
			this.z = new R.Pj(R.Ac, R.zc);
			this.Wo = this.Qg = a;
			return m
		},
		qx : function (a, c) {
			this.k = [];
			this.qe = [];
			this.z = new R.Pj(R.Ac, R.zc);
			c = c || R.Nv;
			this.S = new R.Sp;
			this.S.ba(a, c);
			this.zi();
			this.Ye(R.Ad.d().Tc(R.rm));
			return m
		},
		IM : function (a, c) {
			a.Ec(this);
			a.yd(c);
			a.eh(m);
			var d = this.S;
			d.Ja >= d.pd && this.CE();
			d.JM(a.jc, c);
			this.qe = R.Ui(this.qe, a, c);
			var d =
				c + 1,
			e = this.qe;
			if (e && 0 < e.length)
				for (; d < e.length; d++)
					e[d].yd(e[d].lb + 1);
			if ((e = a.k) && 0 < e.length)
				for (d = 0; d < e.length; d++)
					if (e[d]) {
						var f = this.H7(e[d], e[d].Ra);
						this.IM(e[d], f)
					}
		},
		appendChild : p,
		W2 : function (a) {
			this.Of = m;
			a.Ec(this);
			a.eh(m);
			this.qe.push(a);
			a.yd(this.qe.length - 1);
			a = a.k;
			for (var c = 0; c < a.length; c++)
				this.appendChild(a[c])
		},
		X2 : function (a) {
			this.Of = m;
			a.Ec(this);
			a.eh(m);
			this.qe.push(a);
			var c = this.qe.length - 1;
			a.yd(c);
			var d = this.S;
			d.Ja == d.pd && this.CE();
			d.JM(a.jc, c);
			a = a.k;
			for (c = 0; c < a.length; c++)
				this.appendChild(a[c])
		},
		$r : p,
		F5 : function (a) {
			a.Ec(p);
			var c = this.qe,
			d = R.Hv(c, a);
			if (-1 != d) {
				R.Qn(c, d);
				for (var e = c.length; d < e; ++d) {
					var f = c[d];
					f.yd(f.lb - 1)
				}
			}
			if ((a = a.k) && 0 < a.length)
				for (c = 0; c < a.length; c++)
					a[c] && this.$r(a[c])
		},
		G5 : function (a) {
			this.S.lX(a.lb);
			a.Ec(p);
			var c = this.qe,
			d = R.Hv(c, a);
			if (-1 != d) {
				R.Qn(c, d);
				for (var e = c.length; d < e; ++d) {
					var f = c[d];
					f.yd(f.lb - 1)
				}
			}
			if ((a = a.k) && 0 < a.length)
				for (c = 0; c < a.length; c++)
					a[c] && this.$r(a[c])
		},
		ja : p,
		DJ : C("Wo"),
		EJ : function () {
			return this.S.ja()
		},
		Na : p,
		Sx : function (a) {
			this.Wo = a;
			for (var c = this.k, d = 0; d <
				c.length; d++)
				c[d].Na(a)
		},
		Tx : function (a) {
			this.S.Na(a);
			this.zi()
		},
		Y : p,
		wy : function (a) {
			var c = a || R.u;
			if (this.Ua) {
				c.save();
				this.transform(a);
				var d = this.k;
				if (d) {
					this.Ee();
					for (a = 0; a < d.length; a++)
						d[a] && d[a].Y(c)
				}
				c.restore()
			}
		},
		xy : function (a) {
			a = a || R.u;
			if (this.Ua) {
				R.tn();
				var c = this.se;
				c && c.tg() && (c.xu(), this.Oz());
				this.Ee();
				this.transform(a);
				this.fa(a);
				c && c.tg() && c.uu(this);
				R.sn();
				this.tv(0)
			}
		},
		I : p,
		xI : function (a, c, d) {
			a != p && (c = c == p ? a.Ra : c, d = d == p ? a.ud : d, R.e(a != p, "SpriteBatchNode.addChild():child should not be null"),
				R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children"), R.r.prototype.I.call(this, a, c, d), this.appendChild(a), this.Ha())
		},
		yI : function (a, c, d) {
			a != p && (c = c == p ? a.Ra : c, d = d == p ? a.ud : d, R.e(a != p, "SpriteBatchNode.addChild():child should not be null"), R.e(a instanceof R.t, "cc.SpriteBatchNode only supports cc.Sprites as children"), R.e(a.ja() == this.S.ja(), "SpriteBatchNode.addChild():cc.Sprite is not using the same texture id"), R.r.prototype.I.call(this, a, c, d), this.appendChild(a), this.Ha())
		},
		wg : p,
		B5 : function (a) {
			var c = this.qe;
			if (c && 0 < c.length)
				for (var d = 0, e = c.length; d < e; d++)
					c[d] && c[d].Ec(p);
			R.r.prototype.wg.call(this, a);
			this.qe = []
		},
		C5 : function (a) {
			var c = this.qe;
			if (c && 0 < c.length)
				for (var d = 0, e = c.length; d < e; d++)
					c[d] && c[d].Ec(p);
			R.r.prototype.wg.call(this, a);
			this.qe = [];
			this.S.sN()
		},
		Ee : p,
		u6 : function () {
			if (this.Of) {
				var a,
				c = 0,
				d = this.k,
				e = d.length,
				f;
				for (a = 1; a < e; a++) {
					var g = d[a],
					c = a - 1;
					for (f = d[c]; 0 <= c && (g.Ra < f.Ra || g.Ra == f.Ra && g.Pg < f.Pg); )
						d[c + 1] = f, c -= 1, f = d[c];
					d[c + 1] = g
				}
				0 < d.length && this.Xh(d, R.r.kh.Ee);
				this.Of = q
			}
		},
		v6 : function () {
			if (this.Of) {
				var a = this.k,
				c,
				d = 0,
				e = a.length,
				f;
				for (c = 1; c < e; c++) {
					var g = a[c],
					d = c - 1;
					for (f = a[d]; 0 <= d && (g.Ra < f.Ra || g.Ra == f.Ra && g.Pg < f.Pg); )
						a[d + 1] = f, d -= 1, f = a[d];
					a[d + 1] = g
				}
				if (0 < a.length) {
					this.Xh(a, R.r.kh.Ee);
					for (c = d = 0; c < a.length; c++)
						d = this.NT(a[c], d)
				}
				this.Of = q
			}
		},
		fa : p,
		Jg : function () {
			0 !== this.S.Ja && (this.Yb.Sd(), this.Yb.hh(), this.Xh(this.k, R.r.kh.Vf), R.Fi(this.z.src, this.z.da), this.S.aM())
		}
	});
R.ua.tc ? (Q = R.Oa.prototype, Q.ctor = R.Oa.prototype.$j, Q.WY = R.Oa.prototype.Y6, Q.IE = R.Oa.prototype.y4, Q.ba = R.Oa.prototype.qx, Q.appendChild = R.Oa.prototype.X2, Q.$r = R.Oa.prototype.G5, Q.ja = R.Oa.prototype.EJ, Q.Na = R.Oa.prototype.Tx, Q.Y = R.Oa.prototype.xy, Q.I = R.Oa.prototype.yI, Q.wg = R.Oa.prototype.C5, Q.Ee = R.Oa.prototype.v6, Q.fa = R.Oa.prototype.Jg) : (Q = R.Oa.prototype, Q.ctor = R.Oa.prototype.Zj, Q.WY = R.Oa.prototype.X6, Q.IE = R.Oa.prototype.x4, Q.ba = R.Oa.prototype.px, Q.appendChild = R.Oa.prototype.W2, Q.$r = R.Oa.prototype.F5,
	Q.ja = R.Oa.prototype.DJ, Q.Na = R.Oa.prototype.Sx, Q.Y = R.Oa.prototype.wy, Q.wg = R.Oa.prototype.B5, Q.I = R.Oa.prototype.xI, Q.Ee = R.Oa.prototype.u6, Q.fa = R.r.prototype.fa);
R.Oa.create = function (a, c) {
	c = c || R.Nv;
	var d = new R.Oa;
	d.m(a, c);
	return d
};
R.Oa.Fh = function (a, c) {
	c = c || R.Nv;
	var d = new R.Oa;
	d.ba(a, c);
	return d
};
R.He = R.zd.extend({
		wb : p,
		WJ : p,
		xd : function (a, c, d, e, f) {
			var g = a + "",
			k,
			l,
			n,
			r;
			R.e(g !== p, "Label must be non-nil");
			2 === arguments.length ? (l = R.cc.d(), n = l.Kd(c), k = n.substr(0, n.lastIndexOf("/")) + "/", r = l.Fu(n), R.e(1 == parseInt(r.version, 10), "Unsupported version. Upgrade cocos2d version"), k += r.textureFilename, n = R.xa(), l = parseInt(r.itemWidth, 10) / n, n = parseInt(r.itemHeight, 10) / n, r = String.fromCharCode(parseInt(r.firstChar, 10))) : (k = c, l = d || 0, n = e || 0, r = f || " ");
			var s = p,
			s = k instanceof R.Eb ? k : R.fb.d().Jd(k);
			return this.ba(s,
				l, n, g.length) ? (this.WJ = r, this.sc(g), m) : q
		},
		L : function (a) {
			R.zd.prototype.L.call(this, a);
			this.Fv()
		},
		pn : C("wb"),
		fa : function (a) {
			R.zd.prototype.fa.call(this, a);
			R.F0 && (a = this.n(), a = [R.b(0, 0), R.b(a.width, 0), R.b(a.width, a.height), R.b(0, a.height)], R.Se.Ce(a, 4, m))
		},
		Fv : p,
		K6 : function () {
			for (var a = this.wb, c = a.length, d = this.ja(), e = this.wl, f = this.fk, g = R.xa(), k = 0; k < c; k++) {
				var l = a.charCodeAt(k) - this.WJ.charCodeAt(0),
				l = R.rect(parseInt(l % this.Lt, 10) * g * e, parseInt(l / this.Lt, 10) * g * f, e, f),
				n = a.charCodeAt(k),
				r = this.Ej(k);
				r ?
				32 == n ? (r.m(), r.cd(R.rect(0, 0, 10, 10), q, R.kd())) : (r.ba(d, l), r.Aa(m), r.U(this.bb)) : (r = new R.t, 32 == n ? (r.m(), r.cd(R.rect(0, 0, 10, 10), q, R.kd())) : r.ba(d, l), this.I(r, 0, k));
				r.q(k * e + e / 2, f / 2)
			}
		},
		L6 : function () {
			var a = this.wb,
			c = a.length,
			d = this.S,
			e = d.ja(),
			f = e.on(),
			e = e.nn(),
			g = this.wl,
			k = this.fk;
			this.mC || (g = this.wl * R.xa(), k = this.fk * R.xa());
			R.e(c <= d.pd, "updateAtlasValues: Invalid String length");
			for (var l = d.Dc, n = this.gb, n = {
					i : n.i,
					h : n.h,
					c : n.c,
					g : this.bb
				}, r = this.wl, s = 0; s < c; s++) {
				var t = a.charCodeAt(s) - this.WJ.charCodeAt(0),
				v = t % this.Lt,
				w = 0 | t / this.Lt,
				y;
				R.uA ? (v = (2 * v * g + 1) / (2 * f), t = v + (2 * g - 2) / (2 * f), w = (2 * w * k + 1) / (2 * e), y = w + (2 * k - 2) / (2 * e)) : (v = v * g / f, t = v + g / f, w = w * k / e, y = w + k / e);
				var A = l[s],
				D = A.N,
				H = A.M,
				J = A.J,
				A = A.O;
				D.s.Ka = v;
				D.s.ca = w;
				H.s.Ka = t;
				H.s.ca = w;
				J.s.Ka = v;
				J.s.ca = y;
				A.s.Ka = t;
				A.s.ca = y;
				J.l.x = s * r;
				J.l.y = 0;
				J.l.f = 0;
				A.l.x = s * r + r;
				A.l.y = 0;
				A.l.f = 0;
				D.l.x = s * r;
				D.l.y = this.fk;
				D.l.f = 0;
				H.l.x = s * r + r;
				H.l.y = this.fk;
				H.l.f = 0;
				D.v = n;
				H.v = n;
				J.v = n;
				A.v = n
			}
			0 < c && (d.eh(m), a = d.Ja, c > a && d.IV(c - a))
		},
		sc : p,
		m6 : function (a) {
			a = String(a);
			var c = a.length;
			this.wb = a;
			this.ma(R.size(c *
					this.wl, this.fk));
			if (this.k) {
				a = this.k;
				for (var c = a.length, d = 0; d < c; d++) {
					var e = a[d];
					e && e.Aa(q)
				}
			}
			this.Fv();
			this.Nq = c
		},
		n6 : function (a) {
			a = String(a);
			var c = a.length;
			c > this.S.Ja && this.S.yN(c);
			this.wb = a;
			this.ma(R.size(c * this.wl, this.fk));
			this.Fv();
			this.Nq = c
		},
		U : p,
		Uq : function (a) {
			if (this.bb !== a) {
				R.zd.prototype.U.call(this, a);
				for (var c = this.k, d = 0, e = c.length; d < e; d++)
					c[d] && c[d].U(a)
			}
		},
		Rx : function (a) {
			this.Hc !== a && R.zd.prototype.U.call(this, a)
		}
	});
R.ua.tc ? (R.He.prototype.Fv = R.He.prototype.L6, R.He.prototype.sc = R.He.prototype.n6, R.He.prototype.U = R.He.prototype.Rx) : (R.He.prototype.Fv = R.He.prototype.K6, R.He.prototype.sc = R.He.prototype.m6, R.He.prototype.U = R.He.prototype.Uq);
R.He.create = function (a, c, d, e, f) {
	var g = new R.He;
	return g && R.He.prototype.xd.apply(g, arguments) ? g : p
};
R.ka = R.t.extend({
		hg : p,
		xo : R.Uj,
		bp : R.Up,
		Bd : p,
		sd : 0,
		wb : "",
		It : q,
		vo : p,
		VI : p,
		Ll : q,
		Mo : p,
		kD : 0,
		Ux : 0,
		Nl : q,
		cy : p,
		To : 0,
		pD : p,
		Vo : p,
		oS : p,
		bL : 0,
		cL : 0,
		Hq : p,
		Mf : q,
		xC : p,
		xx : p,
		ctor : function () {
			R.t.prototype.ctor.call(this);
			this.hg = R.kd();
			this.xo = R.Qp;
			this.bp = R.Up;
			this.Ta = q;
			this.VI = this.vo = "";
			this.Bd = "Arial";
			this.Ll = this.It = q;
			this.Mo = R.kd();
			this.Ux = this.kD = 0;
			this.Nl = q;
			this.cy = R.Td();
			this.To = 0;
			this.pD = "";
			this.Vo = R.Td();
			this.oS = "rgba(255,255,255,1)";
			this.cL = this.bL = 0;
			this.Hq = R.Nb();
			this.Mf = q;
			this.fD()
		},
		m : function () {
			return this.xd(" ",
				this.Bd, this.sd)
		},
		description : function () {
			return "\x3ccc.LabelTTF | FontName \x3d" + this.Bd + " FontSize \x3d " + this.sd.toFixed(1) + "\x3e"
		},
		L : p,
		Px : function (a) {
			this.JF(a, m)
		},
		Lb : p,
		S3 : C("Vo"),
		U : p,
		Uq : function (a) {
			this.Hc !== a && (R.t.prototype.U.call(this, a), this.fD(), this.Mf = m)
		},
		fD : function () {
			var a = this.Vo;
			this.VI = "rgba(" + a.i + "," + a.h + "," + a.c + ", " + this.bb / 255 + ")";
			this.Nl && (a = this.cy, this.pD = "rgba(" + a.i + "," + a.h + "," + a.c + ", " + this.bb / 255 + ")")
		},
		pn : C("wb"),
		Ypa : C("xo"),
		Hta : C("bp"),
		gpa : C("hg"),
		Opa : C("sd"),
		Npa : C("Bd"),
		xd : function (a, c, d, e, f, g) {
			a += "";
			R.e(a != p, "cc.LabelTTF.initWithString() label is null");
			d = d || 16;
			e = e || R.size(0, d);
			f = f || R.Qp;
			g = g || R.Up;
			return R.t.prototype.m.call(this) ? (this.Ta = q, this.hg = R.size(e.width, e.height), this.Bd = c || "Arial", this.xo = f, this.bp = g, this.sd = d * R.xa(), this.vo = this.sd + "px '" + c + "'", this.Km = R.ka.rB(c, this.sd), this.sc(a), this.fD(), this.HD(), this.Mf = q, m) : q
		},
		CM : p,
		r4 : function (a, c) {
			if (!R.t.prototype.m.call(this))
				return q;
			this.kL(c, q);
			this.sc(a);
			return m
		},
		s4 : function (a, c) {
			if (!R.t.prototype.m.call(this))
				return q;
			this.Ye(R.Ad.d().Tc(R.ka.E2));
			this.kL(c, q);
			this.sc(a);
			return m
		},
		KBa : function (a) {
			a && this.kL(a, m)
		},
		ata : function () {
			return this.o5(q)
		},
		a9 : function (a, c, d) {
			q === this.Ll && (this.Ll = m);
			var e = this.Mo;
			if (e && e.width != a.width || e.height != a.height)
				e.width = a.width, e.height = a.height;
			this.kD != c && (this.kD = c);
			this.Ux != d && (this.Ux = d);
			this.Mf = m
		},
		Tma : function () {
			this.Ll && (this.Ll = q, this.Mf = m)
		},
		b9 : function (a, c) {
			this.Nl === q && (this.Nl = m);
			var d = this.cy;
			if (d.i !== a.i || d.h !== a.h || d.c !== a.c)
				this.cy = a, this.pD = "rgba(" + (0 | a.i) + "," +
					(0 | a.h) + "," + (0 | a.c) + ", 1)";
			this.To !== c && (this.To = c || 0);
			this.Mf = m
		},
		Uma : function () {
			this.Nl && (this.Nl = q, this.Mf = m)
		},
		JF : p,
		a6 : function (a) {
			var c = this.Vo;
			if (c.i != a.i || c.h != a.h || c.c != a.c)
				this.Vo = a, this.fD(), this.Mf = m
		},
		b6 : function (a) {
			var c = this.Vo;
			if (c.i != a.i || c.h != a.h || c.c != a.c)
				this.Vo = a, this.oS = "rgba(" + (0 | a.i) + "," + (0 | a.h) + "," + (0 | a.c) + ", 1)", this.Mf = m
		},
		kL : function (a, c) {
			a.Oy ? (this.hg.width = a.Oy.width, this.hg.height = a.Oy.height) : (this.hg.width = 0, this.hg.height = 0);
			this.xo = a.cV;
			this.bp = a.dV;
			this.Bd = a.Jr;
			this.sd =
				a.fontSize || 12;
			this.vo = this.sd + "px '" + this.Bd + "'";
			this.Km = R.ka.rB(this.Bd, this.sd);
			a.vY && this.a9(a.wY, a.xY, a.shadowBlur, q);
			a.gO && this.b9(a.strokeColor, a.GY, q);
			this.JF(a.eV, q);
			c && this.HD()
		},
		o5 : function (a) {
			var c = new R.h0;
			a ? (c.fontSize = this.sd * R.xa(), c.Oy = R.KH(this.hg)) : (c.fontSize = this.sd, c.Oy = R.size(this.hg.width, this.hg.height));
			c.Jr = this.Bd;
			c.cV = this.xo;
			c.dV = this.bp;
			if (this.Nl) {
				c.gO = m;
				var d = this.cy;
				c.strokeColor = new R.mc(d.i, d.h, d.c);
				c.GY = a ? this.To * R.xa() : this.To
			} else
				c.gO = q;
			this.Ll ? (c.vY = m, c.shadowBlur =
					this.Ux, c.xY = this.kD, c.wY = a ? R.KH(this.Mo) : R.size(this.Mo.width, this.Mo.height)) : c.Ll = q;
			a = this.Vo;
			c.eV = new R.mc(a.i, a.h, a.c);
			return c
		},
		Km : 18,
		sc : function (a) {
			a = String(a);
			this.wb != a && (this.wb = a + "", this.Mf = m)
		},
		oea : function (a) {
			a !== this.xo && (this.xo = a, this.Mf = m)
		},
		Bfa : function (a) {
			a != this.bp && (this.bp = a, this.Mf = m)
		},
		Tda : function (a) {
			if (a.width != this.hg.width || a.height != this.hg.height)
				this.hg = a, this.Mf = m
		},
		Az : function (a) {
			this.sd !== a && (this.sd = a, this.vo = a + "px '" + this.Bd + "'", this.Km = R.ka.rB(this.Bd, a), this.Mf = m)
		},
		KF : function (a) {
			this.Bd && this.Bd != a && (this.Bd = a, this.vo = this.sd + "px '" + a + "'", this.Km = R.ka.rB(a, this.sd), this.Mf = m)
		},
		F3 : function (a) {
			if (a) {
				var c = this.ea.height,
				d = this.bp,
				e = this.xo,
				f = this.Km;
				a.setTransform(1, 0, 0, 1, 0, c);
				a.font != this.vo && (a.font = this.vo);
				a.fillStyle = R.T === R.Ab ? this.VI : "rgba(255,255,255,1)";
				var g = this.Nl;
				g && (a.lineWidth = this.To, a.strokeStyle = this.pD);
				var k = q,
				l = q;
				if (this.Ll) {
					var n = this.Mo;
					a.shadowColor = "rgba(128,128,128,1)";
					k = 0 > n.width;
					l = 0 > n.height;
					a.shadowOffsetX = n.width;
					a.shadowOffsetY =
						-n.height;
					a.shadowBlur = this.Ux
				}
				a.textBaseline = R.ka.B6[d];
				a.textAlign = R.ka.A6[e];
				var r = 0,
				r = this.bL,
				s = this.cL,
				n = 0,
				t = this.ea.width - r,
				r = e === R.LQ ? k ? t + r : t : e === R.Uj ? k ? t / 2 + r : t / 2 : k ? r : 0;
				if (this.It) {
					e = this.ay.length;
					d === R.pI ? (n = f + c - f * e, l && (n -= s)) : d === R.mB ? (n = f / 2 + (c - f * e) / 2, l && (n -= s)) : n = l ? n - s / 2 : n + s / 2;
					for (d = 0; d < e; d++)
						l = this.ay[d], k = -c + f * d + n, g && a.strokeText(l, r, k), a.fillText(l, r, k)
				} else
					n = d === R.pI ? l ? -s : 0 : d === R.Up ? l ? -s / 2 - c : -c + s / 2 : l ? -s - c / 2 : -c / 2, g && a.strokeText(this.wb, r, n), a.fillText(this.wb, r, n)
			}
		},
		W3 : function () {
			if (this.xx)
				return this.xx;
			if (!this.xC) {
				var a = document.createElement("canvas"),
				c = new R.Eb;
				c.vf(a);
				this.Na(c);
				this.xC = a
			}
			return this.xx = this.xC.getContext("2d")
		},
		a7 : function () {
			var a = this.hg.width,
			c = this.xx,
			d = c.measureText(this.wb).width;
			if (-1 !== this.wb.indexOf("\n") || 0 !== a && d > a && -1 !== this.wb.indexOf(" ")) {
				for (var e = this.ay = this.wb.split("\n"), f = this.G4 = [], g = 0; g < e.length; g++) {
					if (-1 !== e[g].indexOf(" ") && 0 < a) {
						var k = a / c.measureText(this.ay[g]).width,
						l = 0 | k * e[g].length + 1,
						n = l,
						r = 0;
						if (1 > k) {
							do
								if (n = e[g].lastIndexOf(" ", n - 1), k = e[g].substring(0,
											n), r = c.measureText(k).width, -1 === n) {
									n = e[g].indexOf(" ", l);
									break
								}
							while (r > a);
							e.splice(g + 1, 0, e[g].substr(n + 1));
							e[g] = k
						}
					}
					f[g] = r || c.measureText(e[g]).width
				}
				this.It = m
			} else
				this.It = q;
			e = c = 0;
			this.Nl && (c = e = 2 * this.To);
			this.Ll && (f = this.Mo, c += Math.abs(f.width), e += Math.abs(f.height));
			a = 0 === a ? this.It ? R.size(0 | Math.max.apply(Math, this.G4) + c, 0 | this.Km * this.ay.length + e) : R.size(0 | d + c, 0 | this.Km + e) : 0 === this.hg.height ? this.It ? R.size(0 | a + c, 0 | this.Km * this.ay.length + e) : R.size(0 | a + c, 0 | this.Km + e) : R.size(0 | a + c, 0 | this.hg.height +
					e);
			this.ma(a);
			this.bL = c;
			this.cL = e;
			this.Gb.x = this.ea.width * this.nh.x;
			this.Gb.y = this.ea.height * this.nh.y;
			this.q(this.Hq)
		},
		q : function (a, c) {
			var d = this.Hq;
			2 == arguments.length ? (d.x = a, d.y = c) : (d.x = a.x, d.y = a.y);
			var e = 0,
			f = 0;
			this.Nl && (e = f = 2 * this.To);
			if (this.Ll)
				var g = this.Mo, e = e + (0 < g.width ? 0 : g.width), f = f + (0 < g.height ? 0 : g.height);
			d = R.b(d.x + e, d.y + f);
			R.t.prototype.q.call(this, d)
		},
		Bz : function (a) {
			this.Hq.x = a;
			R.t.prototype.Bz.call(this, a)
		},
		Cz : function (a) {
			this.Hq.y = a;
			R.t.prototype.Cz.call(this, a)
		},
		rc : function () {
			return R.b(this.Hq.x,
				this.Hq.y)
		},
		HD : function () {
			var a = this.W3(),
			c = this.xC,
			d = this.ea;
			if (0 === this.wb.length)
				return c.width = 1, c.height = d.height, this.cd(R.rect(0, 0, 1, d.height)), m;
			a.font = this.vo;
			this.a7();
			var e = d.width,
			d = d.height;
			c.width = e;
			c.height = d;
			this.F3(a);
			this.G.Ue();
			this.cd(R.rect(0, 0, e, d));
			return m
		},
		Y : function (a) {
			this.wb && "" != this.wb && (this.Mf && (this.Mf = q, this.HD()), R.t.prototype.Y.call(this, a || R.u))
		},
		fa : p,
		Jg : function (a) {
			if (this.wb && "" != this.wb) {
				a = a || R.u;
				var c = this.G;
				c && c.td && (this.Yb.Sd(), this.Yb.hh(), R.Fi(this.z.src,
						this.z.da), R.st[0] = c, a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, c.Be), R.Ld(R.Tp), a.bindBuffer(a.ARRAY_BUFFER, this.WC), this.wh && (a.bufferData(a.ARRAY_BUFFER, this.jc.JL, a.STATIC_DRAW), this.wh = q), a.vertexAttribPointer(R.fc, 3, a.FLOAT, q, 24, 0), a.vertexAttribPointer(R.df, 2, a.FLOAT, q, 24, 16), a.vertexAttribPointer(R.Gg, 4, a.UNSIGNED_BYTE, m, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 4));
				1 === R.Yn ? (a = this.jc, a = [R.b(a.N.l.x, a.N.l.y), R.b(a.J.l.x, a.J.l.y), R.b(a.O.l.x, a.O.l.y), R.b(a.M.l.x, a.M.l.y)], R.Se.Ce(a,
						4, m)) : 2 === R.Yn && (a = this.tE().size, c = this.AV(), a = [R.b(c.x, c.y), R.b(c.x + a.width, c.y), R.b(c.x + a.width, c.y + a.height), R.b(c.x, c.y + a.height)], R.Se.Ce(a, 4, m));
				R.Ci++
			}
		}
	});
R.ua.tc ? (Q = R.ka.prototype, Q.L = R.t.prototype.L, Q.Lb = R.t.prototype.Lb, Q.U = R.t.prototype.U, Q.CM = R.ka.prototype.s4, Q.JF = R.ka.prototype.b6, Q.fa = R.ka.prototype.Jg) : (Q = R.ka.prototype, Q.L = R.ka.prototype.Px, Q.Lb = R.ka.prototype.S3, Q.U = R.ka.prototype.Uq, Q.CM = R.ka.prototype.r4, Q.JF = R.ka.prototype.a6, Q.fa = R.t.prototype.fa);
R.ka.A6 = ["left", "center", "right"];
R.ka.B6 = ["top", "middle", "bottom"];
R.ka.create = function (a, c, d, e, f, g) {
	var k = new R.ka;
	return k.xd(a, c, d, e, f, g) ? k : p
};
R.ka.Gma = function (a, c) {
	var d = new R.ka;
	return d && d.CM(a, c) ? d : p
};
R.ka.E2 = R.y2 ? R.rm : R.HH;
R.ka.Xp = document.createElement("div");
R.ka.Xp.style.fontFamily = "Arial";
R.ka.Xp.style.position = "absolute";
R.ka.Xp.style.left = "-100px";
R.ka.Xp.style.top = "-100px";
R.ka.Xp.style.lineHeight = "normal";
document.body.appendChild(R.ka.Xp);
R.ka.rB = function (a, c) {
	var d = R.ka.ER[a + "." + c];
	if (0 < d)
		return d;
	var e = R.ka.Xp;
	e.innerHTML = "ajghl~!";
	e.style.fontFamily = a;
	e.style.fontSize = c + "px";
	d = e.clientHeight;
	R.ka.ER[a + "." + c] = d;
	e.innerHTML = "";
	return d
};
R.ka.ER = {};
R.kia = -1;
R.BP = function () {
	this.GL = this.key = 0
};
R.g0 = function () {
	this.key = 0;
	this.fE = new R.xZ
};
R.xZ = function () {
	this.UL = 0;
	this.rect = R.rect(0, 0, 0.1, 0.1);
	this.eZ = this.tO = this.sO = 0
};
R.yZ = function () {
	this.bottom = this.right = this.top = this.left = 0
};
R.tG = R.D.extend({
		Bu : 0,
		padding : p,
		ur : p,
		Yu : p,
		gE : p,
		characterSet : p,
		ctor : function () {
			this.padding = new R.yZ;
			this.ur = "";
			this.Yu = new R.BP;
			this.gE = {};
			this.characterSet = []
		},
		description : function () {
			return "\x3ccc.BMFontConfiguration | Kernings:" + this.Yu.GL + " | Image \x3d " + this.ur.toString() + "\x3e"
		},
		Zna : C("ur"),
		Iza : z("ur"),
		xoa : C("characterSet"),
		E$ : function (a) {
			R.e(a != p && 0 != a.length, "");
			this.characterSet = this.b5(a);
			return this.characterSet != p
		},
		b5 : function (a) {
			var c = R.cc.d().Kd(a),
			c = R.Zi.d().hM(c);
			R.e(c, "cc.BMFontConfiguration._parseConfigFile | Open file error.");
			if (!c)
				return R.log("cocos2d: Error parsing FNTfile " + a), p;
			var d = [],
			e;
			e = /padding+[a-z0-9\-= ",]+/gi;
			(e = e.exec(c)[0]) && this.e5(e);
			e = /common lineHeight+[a-z0-9\-= ",]+/gi;
			(e = e.exec(c)[0]) && this.a5(e);
			e = /page id=[0-9]+ file="[\w\-\.]+/gi;
			(e = e.exec(c)[0]) && this.d5(e, a);
			e = /chars c+[a-z0-9\-= ",]+/gi;
			e.exec(c);
			e = /char id=\w[a-z0-9\-= ]+/gi;
			if (e = c.match(e))
				for (a = 0; a < e.length; a++) {
					var f = new R.g0;
					this.Z4(e[a], f.fE);
					f.key = f.fE.UL;
					this.gE[f.key] = f;
					d.push(f.fE.UL)
				}
			e = /kerning first=\w[a-z0-9\-= ]+/gi;
			if (e = c.match(e))
				for (a =
						0; a < e.length; a++)
					this.g5(e[a]);
			return d
		},
		Z4 : function (a, c) {
			var d = /id=(\d+)/gi.exec(a)[1];
			c.UL = d.toString();
			d = /x=([\-\d]+)/gi.exec(a)[1];
			c.rect.x = parseInt(d);
			d = /y=([\-\d]+)/gi.exec(a)[1];
			c.rect.y = parseInt(d);
			d = /width=([\-\d]+)/gi.exec(a)[1];
			c.rect.width = parseInt(d);
			d = /height=([\-\d]+)/gi.exec(a)[1];
			c.rect.height = parseInt(d);
			d = /xoffset=([\-\d]+)/gi.exec(a)[1];
			c.sO = parseInt(d);
			d = /yoffset=([\-\d]+)/gi.exec(a)[1];
			c.tO = parseInt(d);
			d = /xadvance=([\-\d]+)/gi.exec(a)[1];
			c.eZ = parseInt(d)
		},
		e5 : function (a) {
			a = /padding=(\d+)[,](\d+)[,](\d+)[,](\d+)/gi.exec(a);
			this.padding.left = a[1];
			this.padding.top = a[2];
			this.padding.right = a[3];
			this.padding.bottom = a[4];
			R.log("cocos2d: padding: " + this.padding.left + "," + this.padding.top + "," + this.padding.right + "," + this.padding.bottom)
		},
		a5 : function (a) {
			this.Bu = parseInt(/lineHeight=(\d+)/gi.exec(a)[1]);
			R.T === R.Ya && (R.e(parseInt(/scaleW=(\d+)/gi.exec(a)[1]) <= R.bf.d().Aq, "cc.LabelBMFont: page can't be larger than supported"), R.e(parseInt(/scaleH=(\d+)/gi.exec(a)[1]) <= R.bf.d().Aq, "cc.LabelBMFont: page can't be larger than supported"));
			R.e(1 == parseInt(/pages=(\d+)/gi.exec(a)[1]), "cc.BitfontAtlas: only supports 1 page")
		},
		d5 : function (a, c) {
			var d;
			d = /id=(\d+)/gi.exec(a)[1];
			R.e(0 == parseInt(d), "LabelBMFont file could not be found");
			d = /file="([a-zA-Z0-9\-\._]+)/gi.exec(a)[1];
			this.ur = R.cc.d().iE(d, c)
		},
		Zka : x(),
		g5 : function (a) {
			var c = /first=([\-\d]+)/gi.exec(a)[1],
			d = parseInt(c),
			c = /second=([\-\d]+)/gi.exec(a)[1],
			e = parseInt(c),
			c = /amount=([\-\d]+)/gi.exec(a)[1];
			a = new R.BP;
			a.GL = parseInt(c);
			a.key = d << 16 | e & 65535;
			this.Yu[a.key] = a
		},
		bla : function () {
			this.Yu =
				p
		},
		ala : function () {
			this.gE = p
		}
	});
R.tG.create = function (a) {
	var c = new R.tG;
	return c.E$(a) ? c : p
};
R.Bg = R.Oa.extend({
		Fc : m,
		Ta : q,
		wb : p,
		cg : p,
		yt : p,
		rx : "",
		zw : p,
		cp : 0,
		VJ : q,
		oC : p,
		$C : p,
		bb : 255,
		nf : 255,
		gb : p,
		Qc : p,
		$f : q,
		ag : q,
		Qa : q,
		tT : function (a, c) {
			c ? this.rx = a : this.wb = a;
			var d = this.k;
			if (d)
				for (var e = 0; e < d.length; e++) {
					var f = d[e];
					f && f.Aa(q)
				}
			this.Qa && (this.$D(), c && this.hm())
		},
		ctor : function () {
			R.Oa.prototype.ctor.call(this);
			this.oC = R.Nb();
			this.rx = this.wb = "";
			this.zw = R.Uj;
			this.cp = -1;
			this.cg = p;
			this.VJ = q;
			this.nf = this.bb = 255;
			this.gb = R.Td();
			this.Qc = R.Td();
			this.ag = this.$f = m;
			this.Ta = q;
			this.yt = "";
			this.$C = []
		},
		fa : function (a) {
			R.Oa.prototype.fa.call(this,
				a);
			if (R.G0) {
				a = this.n();
				var c = R.b(0 | -this.Gb.x, 0 | -this.Gb.y);
				a = [R.b(c.x, c.y), R.b(c.x + a.width, c.y), R.b(c.x + a.width, c.y + a.height), R.b(c.x, c.y + a.height)];
				R.Se.GX(0, 255, 0, 255);
				R.Se.Ce(a, 4, m)
			}
		},
		L : function (a) {
			if (!(this.Qc.i == a.i && this.Qc.h == a.h && this.Qc.c == a.c) && (this.gb = {
						i : a.i,
						h : a.h,
						c : a.c
					}, this.Qc = {
						i : a.i,
						h : a.h,
						c : a.c
					}, this.Qa && this.$f)) {
				a = R.Td();
				var c = this.Cc;
				c && (c.Fc && c.az()) && (a = c.gb);
				this.Af(a)
			}
		},
		Ij : C("Ta"),
		Rd : function (a) {
			this.Ta = a;
			if (a = this.k)
				for (var c = 0; c < a.length; c++) {
					var d = a[c];
					d && d.Fc && d.Rd(this.Ta)
				}
		},
		rg : C("nf"),
		vV : C("bb"),
		U : function (a) {
			this.bb = this.nf = a;
			if (this.ag) {
				a = 255;
				var c = this.Cc;
				c && (c.Fc && c.bz()) && (a = c.bb);
				this.Bf(a)
			}
		},
		Bf : function (a) {
			this.bb = this.nf * a / 255;
			a = this.k;
			for (var c = 0; c < a; c++) {
				var d = a[c];
				R.ua.tc ? d.Bf(this.bb) : (R.Wa.prototype.Bf.call(d, this.bb), d.Ha())
			}
			this.Bm()
		},
		bz : M(q),
		Gn : z("ag"),
		Lb : C("Qc"),
		uV : C("gb"),
		Af : function (a) {
			var c = this.gb,
			d = this.Qc;
			c.i = d.i * a.i / 255;
			c.h = d.h * a.h / 255;
			c.c = d.c * a.c / 255;
			a = this.k;
			for (c = 0; c < a.length; c++)
				d = a[c], R.ua.tc ? d.Af(this.gb) : (R.Wa.prototype.Af.call(d, this.gb),
					d.Ha());
			this.Bm()
		},
		Bm : function () {
			if (!R.ua.tc) {
				var a,
				c = this.ja();
				if (c && (a = c.Pc))
					if (c = R.fb.d().sE(this.Qg.Pc))
						a instanceof HTMLCanvasElement && !this.Ed ? R.Lu(a, c, this.gb, p, a) : (a = R.Lu(a, c, this.gb), c = new R.Eb, c.vf(a), c.Ue(), this.Na(c))
			}
		},
		az : M(q),
		Fn : z("$f"),
		m : function () {
			return this.xd(p, p, p, p, p)
		},
		xd : function (a, c, d, e, f) {
			var g = a || "";
			R.e(!this.cg, "re-init is no longer supported");
			c ? (a = R.tP(c), R.e(a, "cc.LabelBMFont: Impossible to create font. Please check file"), this.cg = a, this.yt = c, c = R.fb.d().Jd(this.cg.ur),
				this.Qa = a = c.td, a || (this.Qa = q, c.Uf(function (a) {
						this.Qa = m;
						this.ba(a, g.length);
						this.sc(g, m)
					}, this))) : (c = new R.Eb, a = new Image, c.vf(a), this.Qa = q);
			return this.ba(c, g.length) ? (this.zw = e || R.Qp, this.oC = f || R.Nb(), this.cp = d == p ? -1 : d, this.bb = this.nf = 255, this.gb = R.Td(), this.Qc = R.Td(), this.$f = this.ag = m, this.ea = R.kd(), this.R(R.b(0.5, 0.5)), R.T === R.Ya && (d = this.S.ja(), this.Ta = d.Wl(), this.$C = new R.t, this.$C.ba(d, R.rect(0, 0, 0, 0), q), this.$C.Ec(this)), this.sc(g, m), m) : q
		},
		$D : function () {
			var a = R.T,
			c = a === R.Ab ? this.ja() : this.S.ja(),
			d = 0,
			e = -1,
			f = 0,
			g = R.kd(),
			k = 0,
			f = 1,
			l = this.wb ? this.wb.length : 0;
			if (0 !== l) {
				var n,
				r = this.cg.characterSet;
				for (n = 0; n < l - 1; n++)
					10 == this.wb.charCodeAt(n) && f++;
				var s = this.cg.Bu * f,
				t =  - (this.cg.Bu - this.cg.Bu * f);
				for (n = 0; n < l; n++) {
					var v = this.wb.charCodeAt(n);
					if (10 === v)
						d = 0, t -= this.cg.Bu;
					else if (r[v] === p)
						R.log("cc.LabelBMFont: Attempted to use character not defined in this bitmap: " + this.wb[n]);
					else {
						var f = this.E4(e, v),
						w = this.cg.gE[v];
						if (w) {
							var e = w.fE,
							y = R.rect(e.rect.x, e.rect.y, e.rect.width, e.rect.height),
							y = R.dl(y);
							y.x +=
							this.oC.x;
							y.y += this.oC.y;
							(w = this.Ej(n)) ? 32 === v && a === R.Ab ? w.cd(y, q, R.kd()) : (w.cd(y, q, y.size), w.Aa(m)) : (w = new R.t, 32 === v && a === R.Ab ? w.ba(c, R.Oc(), q) : w.ba(c, y, q), w.aK = m, this.I(w, 0, n));
							w.Rd(this.Ta);
							R.ua.tc ? (w.Af(this.gb), w.Bf(this.bb)) : (R.Wa.prototype.Af.call(w, this.gb), R.Wa.prototype.Bf.call(w, this.bb), w.Ha());
							y = R.b(d + e.sO + 0.5 * e.rect.width + f, t + (this.cg.Bu - e.tO) - 0.5 * y.height * R.xa());
							w.q(R.Jp(y));
							d += e.eZ + f;
							e = v;
							k < d && (k = d)
						} else
							0 !== v && 10 !== v && R.log("cocos2d: LabelBMFont: character not found " + this.wb[n])
					}
				}
				g.width =
					k;
				g.height = s;
				this.ma(R.kw(g))
			}
		},
		SCa : function (a) {
			var c = this.k;
			if (c)
				for (var d = 0; d < c.length; d++) {
					var e = c[d];
					e && e.Aa(q)
				}
			this.cg && this.$D();
			a || this.hm()
		},
		pn : C("rx"),
		sc : function (a, c) {
			a = String(a);
			c == p && (c = m);
			if (a == p || "string" != typeof a)
				a += "";
			this.rx = a;
			this.tT(a, c)
		},
		Oza : function (a) {
			this.sc(a, m)
		},
		hm : function () {
			this.sc(this.rx, q);
			if (0 < this.cp) {
				var a = this.wb.length,
				c = [],
				d = [],
				e = 1,
				f = 0,
				g = q,
				k = q,
				l = -1,
				n = -1,
				r = 0,
				s,
				t;
				for (s = 0; s < this.k.length; s++) {
					for (var v = 0; !(t = this.Ej(s + r + v)); )
						v++;
					r += v;
					if (t.Ua) {
						if (f >= a)
							break;
						var w =
							this.wb[f];
						k || (n = this.BJ(t), k = m);
						g || (l = n, g = m);
						if (10 == w.charCodeAt(0)) {
							d.push("\n");
							c = c.concat(d);
							d.length = 0;
							g = k = q;
							l = n = -1;
							f += v;
							e++;
							if (f >= a)
								break;
							w = this.wb[f];
							n || (n = this.BJ(t), k = m);
							l || (l = n, g = m)
						}
						if (32 == w.charCodeAt(0))
							d.push(w), c = c.concat(d), d.length = 0, k = q, n = -1, f++;
						else if (this.X3(t) - l > this.cp)
							if (this.VJ) {
								R.ZY(d);
								d.push("\n");
								c = c.concat(d);
								d.length = 0;
								g = k = q;
								l = n = -1;
								e++;
								if (f >= a)
									break;
								n || (n = this.BJ(t), k = m);
								l || (l = n, g = m);
								s--
							} else
								d.push(w), -1 != c.lastIndexOf(" ") ? R.ZY(c) : c = [], 0 < c.length && c.push("\n"), e++, g =
									q, l = -1, f++;
						else
							d.push(w), f++
					}
				}
				c = c.concat(d);
				s = c.length;
				t = "";
				for (f = 0; f < s; ++f)
					t += c[f];
				t += String.fromCharCode(0);
				this.tT(t, q)
			}
			if (this.zw != R.Qp) {
				c = f = 0;
				a = this.wb.length;
				d = [];
				for (e = 0; e < a; e++)
					if (10 == this.wb[e].charCodeAt(0) || 0 == this.wb[e].charCodeAt(0)) {
						if (s = 0, g = d.length, t = f + g - 1 + c, !(0 > t) && (s = this.Ej(t), s != p)) {
							s = s.rc().x + s.n().width / 2;
							k = 0;
							switch (this.zw) {
							case R.Uj:
								k = this.n().width / 2 - s / 2;
								break;
							case R.LQ:
								k = this.n().width - s
							}
							if (0 != k)
								for (s = 0; s < g; s++)
									t = f + s + c, 0 > t || (t = this.Ej(t)) && t.q(R.ug(t.rc(), R.b(k, 0)));
							f +=
							g;
							c++;
							d.length = 0
						}
					} else
						d.push(this.wb[f])
			}
		},
		Dza : function (a) {
			this.zw = a;
			this.hm()
		},
		sY : function (a) {
			this.cp = a;
			this.hm()
		},
		FAa : function (a) {
			this.VJ = a;
			this.hm()
		},
		jd : function (a, c) {
			R.r.prototype.jd.call(this, a, c);
			this.hm()
		},
		fh : function (a) {
			R.r.prototype.fh.call(this, a);
			this.hm()
		},
		yg : function (a) {
			R.r.prototype.yg.call(this, a);
			this.hm()
		},
		lea : function (a) {
			if (a != p && a != this.yt) {
				var c = R.tP(a);
				R.e(c, "cc.LabelBMFont: Impossible to create font. Please check file");
				this.yt = a;
				this.cg = c;
				a = R.fb.d().Jd(this.cg.ur);
				this.Qa =
					c = a.td;
				this.Na(a);
				R.T === R.Ab && (this.Qg = this.ja());
				c ? this.$D() : a.Uf(function (a) {
					this.Qa = m;
					this.Na(a);
					this.$D();
					this.Bm();
					this.hm()
				}, this)
			}
		},
		Mpa : C("yt"),
		R : function (a) {
			R.iv(a, this.nh) || (R.r.prototype.R.call(this, a), this.hm())
		},
		uka : x(),
		E4 : function (a, c) {
			var d = 0;
			if (this.cg.Yu) {
				var e = this.cg.Yu[(a << 16 | c & 65535).toString()];
				e && (d = e.GL)
			}
			return d
		},
		BJ : function (a) {
			return a.rc().x * this.ia + a.n().width * this.ia * a.mn().x
		},
		X3 : function (a) {
			return a.rc().x * this.ia - a.n().width * this.ia * a.mn().x
		}
	});
R.Bg.create = function (a, c, d, e, f) {
	var g = new R.Bg;
	return 0 == arguments.length ? g && g.m() ? g : p : g && g.xd(a, c, d, e, f) ? g : p
};
R.Bg.pt = p;
R.tP = function (a) {
	R.Bg.pt || (R.Bg.pt = {});
	var c = R.Bg.pt[a];
	c || (c = R.tG.create(a), R.Bg.pt[a] = c);
	return c
};
R.Bg.rF = function () {
	R.f0()
};
R.f0 = function () {
	R.Bg.pt && (R.Bg.pt = p)
};
R.cW = function (a) {
	a = a.charCodeAt(0);
	return 9 <= a && 13 >= a || 32 == a || 133 == a || 160 == a || 5760 == a || 8192 <= a && 8202 >= a || 8232 == a || 8233 == a || 8239 == a || 8287 == a || 12288 == a
};
R.ZY = function (a) {
	var c = a.length;
	if (!(0 >= c) && (c -= 1, R.cW(a[c]))) {
		for (var d = c - 1; 0 <= d; --d)
			if (R.cW(a[d]))
				c = d;
			else
				break;
		R.sga(a, c)
	}
};
R.sga = function (a, c) {
	var d = a.length;
	c >= d || 0 > c || a.splice(c, d)
};
R.SP = 0;
R.TP = 1;
R.e1 = 0;
R.RP = 1;
R.al = -1;
R.Vi = -1;
R.d1 = -1;
R.Mb = 0;
R.jh = 1;
R.Fs = 0;
R.qH = 1;
R.Qia = 2;
R.Wi = function (a, c, d, e, f, g, k, l, n, r, s, t) {
	this.pb = a ? a : R.Nb();
	this.dO = c ? c : R.Nb();
	this.color = d ? d : new R.Uc(0, 0, 0, 1);
	this.Ly = e ? e : new R.Uc(0, 0, 0, 1);
	this.size = f || 0;
	this.ZL = g || 0;
	this.rotation = k || 0;
	this.KU = l || 0;
	this.vp = n || 0;
	this.wu = r || 0;
	this.K = s ? s : new R.Wi.mH;
	this.De = t ? t : new R.Wi.nH;
	this.YV = q;
	this.Ny = R.b(0, 0)
};
R.Wi.mH = function (a, c, d) {
	this.dir = a ? a : R.Nb();
	this.Xe = c || 0;
	this.Ag = d || 0
};
R.Wi.nH = function (a, c, d, e) {
	this.Dy = a || 0;
	this.HU = c || 0;
	this.Dn = d || 0;
	this.JU = e || 0
};
R.Wi.cB = [R.b(), R.b(), R.b(), R.b()];
R.kb = R.r.extend({
		RC : "",
		Ib : 0,
		jS : q,
		K : p,
		De : p,
		rK : R.b(0, 0),
		mk : p,
		jq : 0,
		uh : 0,
		la : p,
		lb : 0,
		jr : q,
		tB : 0,
		XB : R.SP,
		lD : R.RP,
		Gt : q,
		Ne : 0,
		p : 0,
		fu : p,
		Yd : p,
		Gc : 0,
		jf : 0,
		ef : 0,
		ff : 0,
		pf : 0,
		qf : 0,
		Me : 0,
		mq : 0,
		za : p,
		Ea : p,
		pa : p,
		Ca : p,
		Zq : 0,
		$q : 0,
		nq : 0,
		oq : 0,
		Le : 0,
		Zb : 0,
		G : p,
		z : p,
		Ta : q,
		Fl : R.Fs,
		sx : q,
		Ba : 0,
		Dc : p,
		hb : p,
		pe : p,
		Ix : p,
		Qa : p,
		Oe : p,
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.Ba = R.Mb;
			this.K = new R.kb.mH;
			this.De = new R.kb.nH;
			this.z = {
				src : R.Ac,
				da : R.zc
			};
			this.mk = [];
			this.fu = new R.Dg(0, 0);
			this.Yd = new R.Dg(0, 0);
			this.za = new R.Uc(1, 1, 1, 1);
			this.Ea = new R.Uc(1,
					1, 1, 1);
			this.pa = new R.Uc(1, 1, 1, 1);
			this.Ca = new R.Uc(1, 1, 1, 1);
			this.RC = "";
			this.Ib = 0;
			this.jS = q;
			this.rK = R.b(0, 0);
			this.uh = this.jq = 0;
			this.la = p;
			this.lb = 0;
			this.jr = q;
			this.tB = 0;
			this.XB = R.SP;
			this.lD = R.RP;
			this.Gt = q;
			this.Zb = this.Le = this.oq = this.nq = this.$q = this.Zq = this.mq = this.Me = this.qf = this.pf = this.ff = this.ef = this.jf = this.Gc = this.p = this.Ne = 0;
			this.G = p;
			this.Ta = q;
			this.Fl = R.Fs;
			this.sx = q;
			this.pe = [0, 0];
			this.Dc = [];
			this.hb = [];
			this.Ix = R.Oc();
			this.Qa = m;
			R.T === R.Ya && (this.Oe = p)
		},
		wM : function () {
			for (var a = this.hb, c = 0, d = this.Zb; c <
				d; ++c) {
				var e = 6 * c,
				f = 4 * c;
				a[e + 0] = f + 0;
				a[e + 1] = f + 1;
				a[e + 2] = f + 2;
				a[e + 5] = f + 1;
				a[e + 4] = f + 2;
				a[e + 3] = f + 3
			}
		},
		LV : function (a) {
			var c = R.xa(),
			d = R.rect(a.x * c, a.y * c, a.width * c, a.height * c),
			e = a.width,
			f = a.height;
			this.G && (e = this.G.on(), f = this.G.nn());
			if (R.T !== R.Ab) {
				R.uA ? (a = (2 * d.x + 1) / (2 * e), c = (2 * d.y + 1) / (2 * f), e = a + (2 * d.width - 2) / (2 * e), d = c + (2 * d.height - 2) / (2 * f)) : (a = d.x / e, c = d.y / f, e = a + d.width / e, d = c + d.height / f);
				var f = d,
				d = c,
				c = f,
				g = 0,
				k = 0;
				this.la ? (f = this.la.S.Dc, g = this.lb, k = this.lb + this.Zb) : (f = this.Dc, g = 0, k = this.Zb);
				for (; g < k; g++) {
					f[g] || (f[g] =
							R.kB());
					var l = f[g];
					l.J.s.Ka = a;
					l.J.s.ca = c;
					l.O.s.Ka = e;
					l.O.s.ca = c;
					l.N.s.Ka = a;
					l.N.s.ca = d;
					l.M.s.Ka = e;
					l.M.s.ca = d
				}
			}
		},
		kV : C("la"),
		Ec : function (a) {
			if (this.la != a) {
				var c = this.la;
				if (this.la = a)
					for (var d = this.mk, e = 0; e < this.Zb; e++)
						d[e].wu = e;
				a ? c || (this.la.S.v3(this.Dc, this.lb), R.u.deleteBuffer(this.pe[1])) : (this.LR(), this.wM(), this.Na(c.ja()), this.eu())
			}
		},
		p9 : C("lb"),
		yd : z("lb"),
		upa : C("XB"),
		Xda : z("XB"),
		wsa : C("lD"),
		wBa : z("lD"),
		tg : C("Gt"),
		xra : C("Ne"),
		bBa : z("Ne"),
		tf : C("p"),
		IF : z("p"),
		Csa : function () {
			return {
				x : this.fu.x,
				y : this.fu.y
			}
		},
		xBa : z("fu"),
		Era : function () {
			return {
				x : this.Yd.x,
				y : this.Yd.y
			}
		},
		ZX : z("Yd"),
		xqa : C("Gc"),
		wea : z("Gc"),
		yqa : C("jf"),
		xea : z("jf"),
		Mna : C("ef"),
		wda : z("ef"),
		Nna : C("ff"),
		xda : z("ff"),
		Wpa : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.Te
		},
		NX : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.Te = a
		},
		Y9 : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.speed
		},
		SN : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.speed =
				a
		},
		Fsa : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.zg
		},
		iY : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.zg = a
		},
		Xsa : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.Ag
		},
		qfa : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.Ag = a
		},
		Ysa : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.Ri
		},
		rfa : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.Ri =
				a
		},
		Qra : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.Xe
		},
		bY : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.Xe = a
		},
		Rra : function () {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			return this.K.vg
		},
		cY : function (a) {
			R.e(this.Ba == R.Mb, "Particle Mode should be Gravity");
			this.K.vg = a
		},
		esa : function () {
			R.e(this.Ba === R.Mb, "Particle Mode should be Gravity");
			return this.K.xF
		},
		tBa : function (a) {
			R.e(this.Ba === R.Mb, "Particle Mode should be Gravity");
			this.K.xF =
				a
		},
		Jsa : function () {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			return this.De.zv
		},
		jfa : function (a) {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			this.De.zv = a
		},
		Ksa : function () {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			return this.De.Av
		},
		kfa : function (a) {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			this.De.Av = a
		},
		Cpa : function () {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			return this.De.Gr
		},
		dea : function (a) {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			this.De.Gr =
				a
		},
		Dpa : function () {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			return this.De.Hu
		},
		eea : function (a) {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			this.De.Hu = a
		},
		csa : function () {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			return this.De.mv
		},
		Xea : function (a) {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			this.De.mv = a
		},
		dsa : function () {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			return this.De.nv
		},
		Yea : function (a) {
			R.e(this.Ba == R.jh, "Particle Mode should be Radius");
			this.De.nv =
				a
		},
		jd : function (a, c) {
			this.jr = m;
			R.r.prototype.jd.call(this, a, c)
		},
		he : function (a) {
			this.jr = m;
			R.r.prototype.he.call(this, a)
		},
		fh : function (a) {
			this.jr = m;
			R.r.prototype.fh.call(this, a)
		},
		yg : function (a) {
			this.jr = m;
			R.r.prototype.yg.call(this, a)
		},
		Lsa : C("pf"),
		lfa : z("pf"),
		Msa : C("qf"),
		mfa : z("qf"),
		Epa : C("Me"),
		fea : z("Me"),
		Fpa : C("mq"),
		gea : z("mq"),
		a$ : C("za"),
		TN : function (a) {
			a instanceof R.mc && (a = R.UD(a));
			this.za = a
		},
		Hsa : C("Ea"),
		hfa : function (a) {
			a instanceof R.mc && (a = R.UD(a));
			this.Ea = a
		},
		w9 : C("pa"),
		IN : function (a) {
			a instanceof
			R.mc && (a = R.UD(a));
			this.pa = a
		},
		Apa : C("Ca"),
		bea : function (a) {
			a instanceof R.mc && (a = R.UD(a));
			this.Ca = a
		},
		Nsa : C("Zq"),
		nfa : z("Zq"),
		Osa : C("$q"),
		ofa : z("$q"),
		Gpa : C("nq"),
		hea : z("nq"),
		Hpa : C("oq"),
		iea : z("oq"),
		ypa : C("Le"),
		$da : z("Le"),
		ota : C("Zb"),
		ufa : function (a) {
			if (R.T === R.Ab)
				this.Zb = 200 > a ? a : 200;
			else {
				if (a > this.tB) {
					var c = R.ec.BYTES_PER_ELEMENT;
					this.hb = new Uint16Array(6 * a);
					for (var d = new ArrayBuffer(a * c), e = [], f = [], g = 0; g < a; g++)
						e[g] = new R.Wi, f[g] = new R.ec(p, p, p, p, d, g * c);
					this.Zb = this.tB = a;
					if (this.la)
						for (c = 0; c < a; c++)
							e[c].wu =
								c;
					this.mk = e;
					this.Oe = d;
					this.Dc = f;
					this.wM();
					this.eu();
					this.G && (a = this.G.n(), this.LV(R.rect(0, 0, a.width, a.height)))
				} else
					this.Zb = a;
				this.nX()
			}
		},
		ja : C("G"),
		Na : function (a) {
			if (a.td) {
				var c = a.n();
				this.kY(a, R.rect(0, 0, c.width, c.height))
			} else
				this.Qa = q, a.Uf(function (a) {
					this.Qa = m;
					var c = a.n();
					this.kY(a, R.rect(0, 0, c.width, c.height))
				}, this)
		},
		gp : C("z"),
		Qd : function (a, c) {
			if (1 == arguments.length)
				this.z != a && (this.z = a, this.zi());
			else if (this.z.src != a || this.z.da != c)
				this.z = {
					src : a,
					da : c
				},
			this.zi()
		},
		ira : C("Ta"),
		Rd : z("Ta"),
		W$ : function () {
			return 770 ==
			this.z.src && 1 == this.z.da || 1 == this.z.src && 1 == this.z.da
		},
		Mk : function (a) {
			var c = this.z;
			a ? (c.src = 770, c.da = 1) : R.T === R.Ya ? this.G && !this.G.Wl() ? (c.src = 770, c.da = 771) : (c.src = R.Ac, c.da = R.zc) : (c.src = R.Ac, c.da = R.zc)
		},
		Hra : C("Fl"),
		gBa : z("Fl"),
		vua : C("sx"),
		Kza : z("sx"),
		zpa : C("Ba"),
		JX : z("Ba"),
		m : function () {
			return this.ob(150)
		},
		wf : function (a) {
			this.RC = a;
			a = R.cc.d().Fu(this.RC);
			R.e(a != p, "Particles: file not found");
			return this.C$(a, "")
		},
		nV : function () {
			return R.rect(0, 0, R.canvas.width, R.canvas.height)
		},
		C$ : function (a) {
			var c =
				q,
			d = p,
			d = this.Id,
			e = parseInt(d("maxParticles", a));
			if (this.ob(e)) {
				this.ef = parseFloat(d("angle", a));
				this.ff = parseFloat(d("angleVariance", a));
				this.p = parseFloat(d("duration", a));
				this.z.src = parseInt(d("blendFuncSource", a));
				this.z.da = parseInt(d("blendFuncDestination", a));
				c = this.za;
				c.i = parseFloat(d("startColorRed", a));
				c.h = parseFloat(d("startColorGreen", a));
				c.c = parseFloat(d("startColorBlue", a));
				c.g = parseFloat(d("startColorAlpha", a));
				c = this.Ea;
				c.i = parseFloat(d("startColorVarianceRed", a));
				c.h = parseFloat(d("startColorVarianceGreen",
							a));
				c.c = parseFloat(d("startColorVarianceBlue", a));
				c.g = parseFloat(d("startColorVarianceAlpha", a));
				c = this.pa;
				c.i = parseFloat(d("finishColorRed", a));
				c.h = parseFloat(d("finishColorGreen", a));
				c.c = parseFloat(d("finishColorBlue", a));
				c.g = parseFloat(d("finishColorAlpha", a));
				c = this.Ca;
				c.i = parseFloat(d("finishColorVarianceRed", a));
				c.h = parseFloat(d("finishColorVarianceGreen", a));
				c.c = parseFloat(d("finishColorVarianceBlue", a));
				c.g = parseFloat(d("finishColorVarianceAlpha", a));
				this.pf = parseFloat(d("startParticleSize",
							a));
				this.qf = parseFloat(d("startParticleSizeVariance", a));
				this.Me = parseFloat(d("finishParticleSize", a));
				this.mq = parseFloat(d("finishParticleSizeVariance", a));
				c = parseFloat(d("sourcePositionx", a));
				e = parseFloat(d("sourcePositiony", a));
				this.q(c, e);
				this.Yd.x = parseFloat(d("sourcePositionVariancex", a));
				this.Yd.y = parseFloat(d("sourcePositionVariancey", a));
				this.Zq = parseFloat(d("rotationStart", a));
				this.$q = parseFloat(d("rotationStartVariance", a));
				this.nq = parseFloat(d("rotationEnd", a));
				this.oq = parseFloat(d("rotationEndVariance",
							a));
				this.Ba = parseInt(d("emitterType", a));
				if (this.Ba == R.Mb)
					c = this.K, c.Te.x = parseFloat(d("gravityx", a)), c.Te.y = parseFloat(d("gravityy", a)), c.speed = parseFloat(d("speed", a)), c.zg = parseFloat(d("speedVariance", a)), e = d("radialAcceleration", a), c.Xe = e ? parseFloat(e) : 0, e = d("radialAccelVariance", a), c.vg = e ? parseFloat(e) : 0, e = d("tangentialAcceleration", a), c.Ag = e ? parseFloat(e) : 0, e = d("tangentialAccelVariance", a), c.Ri = e ? parseFloat(e) : 0, e = d("rotationIsDir", a).toLowerCase(), c.xF = e != p && ("true" === e || "1" === e);
				else if (this.Ba ==
					R.jh)
					c = this.De, c.zv = parseFloat(d("maxRadius", a)), c.Av = parseFloat(d("maxRadiusVariance", a)), c.Gr = parseFloat(d("minRadius", a)), c.Hu = 0, c.mv = parseFloat(d("rotatePerSecond", a)), c.nv = parseFloat(d("rotatePerSecondVariance", a));
				else
					return R.e(q, "Invalid emitterType in config file"), q;
				this.Gc = parseFloat(d("particleLifespan", a));
				this.jf = parseFloat(d("particleLifespanVariance", a));
				this.Le = this.Zb / this.Gc;
				if (!this.la)
					if (this.Ta = q, c = d("textureFileName", a), c = R.cc.d().iE(c, this.RC), e = R.fb.d().Kz(c))
						this.Na(e);
					else if ((a = d("textureImageData", a)) && 0 == a.length) {
						R.e(a, "cc.ParticleSystem.initWithDictory:textureImageData is null");
						e = R.fb.d().Jd(c);
						if (!e)
							return q;
						this.Na(e)
					} else {
						d = R.QY(a, 1);
						if (!d)
							return R.log("cc.ParticleSystem: error decoding or ungzipping textureImageData"), q;
						a = R.E9(d);
						if (a !== R.sP && a !== R.wA)
							return R.log("cc.ParticleSystem: unknown image format with Data"), q;
						e = document.createElement("canvas");
						a === R.wA ? (new R.f1(d)).ada(e) : R.Rp.d().Zba(d, e);
						R.fb.d().oU(c, e);
						a = R.fb.d().Kz(c);
						R.e(a != p, "cc.ParticleSystem: error loading the texture");
						this.Na(a)
					}
				c = m
			}
			return c
		},
		ob : function (a) {
			this.Zb = a;
			var c;
			this.mk = [];
			for (c = 0; c < a; c++)
				this.mk[c] = new R.Wi;
			if (!this.mk)
				return R.log("Particle system: not enough memory"), q;
			this.tB = a;
			if (this.la)
				for (c = 0; c < this.Zb; c++)
					this.mk[c].wu = c;
			this.Gt = m;
			this.z.src = R.Ac;
			this.z.da = R.zc;
			this.Fl = R.Fs;
			this.Ba = R.Mb;
			this.jr = this.sx = q;
			this.rX(1);
			if (R.T === R.Ya) {
				if (!this.LR())
					return q;
				this.wM();
				this.eu();
				this.Ye(R.Ad.d().Tc(R.rm))
			}
			return m
		},
		Qma : function () {
			this.gG()
		},
		r7 : function () {
			if (this.Y$())
				return q;
			var a,
			c = this.mk;
			R.T ===
			R.Ab ? this.Ne < c.length ? a = c[this.Ne] : (a = new R.Wi, c.push(a)) : a = c[this.Ne];
			this.A$(a);
			++this.Ne;
			return m
		},
		A$ : function (a) {
			var c = R.z1;
			a.vp = this.Gc + this.jf * c();
			a.vp = Math.max(0, a.vp);
			a.pb.x = this.fu.x + this.Yd.x * c();
			a.pb.y = this.fu.y + this.Yd.y * c();
			var d,
			e;
			d = this.za;
			var f = this.Ea,
			g = this.pa;
			e = this.Ca;
			R.T === R.Ab ? (d = new R.Uc(R.de(d.i + f.i * c(), 0, 1), R.de(d.h + f.h * c(), 0, 1), R.de(d.c + f.c * c(), 0, 1), R.de(d.g + f.g * c(), 0, 1)), e = new R.Uc(R.de(g.i + e.i * c(), 0, 1), R.de(g.h + e.h * c(), 0, 1), R.de(g.c + e.c * c(), 0, 1), R.de(g.g + e.g * c(), 0, 1))) :
			(d = {
					i : R.de(d.i + f.i * c(), 0, 1),
					h : R.de(d.h + f.h * c(), 0, 1),
					c : R.de(d.c + f.c * c(), 0, 1),
					g : R.de(d.g + f.g * c(), 0, 1)
				}, e = {
					i : R.de(g.i + e.i * c(), 0, 1),
					h : R.de(g.h + e.h * c(), 0, 1),
					c : R.de(g.c + e.c * c(), 0, 1),
					g : R.de(g.g + e.g * c(), 0, 1)
				});
			a.color = d;
			f = a.Ly;
			g = a.vp;
			f.i = (e.i - d.i) / g;
			f.h = (e.h - d.h) / g;
			f.c = (e.c - d.c) / g;
			f.g = (e.g - d.g) / g;
			d = this.pf + this.qf * c();
			d = Math.max(0, d);
			a.size = d;
			this.Me === R.Vi ? a.ZL = 0 : (e = this.Me + this.mq * c(), e = Math.max(0, e), a.ZL = (e - d) / g);
			d = this.Zq + this.$q * c();
			e = this.nq + this.oq * c();
			a.rotation = d;
			a.KU = (e - d) / g;
			this.Fl == R.Fs ? a.dO =
				this.hn(this.rK) : this.Fl == R.qH && (a.dO = this.Z);
			d = R.Ud(this.ef + this.ff * c());
			if (this.Ba === R.Mb)
				g = this.K, e = a.K, f = g.speed + g.zg * c(), e.dir.x = Math.cos(d), e.dir.y = Math.sin(d), R.fv(e.dir, f), e.Xe = g.Xe + g.vg * c(), e.Ag = g.Ag + g.Ri * c(), g.xF && (a.rotation = -R.Xn(R.vba(e.dir)));
			else {
				e = this.De;
				a = a.De;
				var f = e.zv + e.Av * c(),
				k = e.Gr + e.Hu * c();
				a.Dn = f;
				a.JU = e.Gr === R.d1 ? 0 : (k - f) / g;
				a.Dy = d;
				a.HU = R.Ud(e.mv + e.nv * c())
			}
		},
		Qfa : function () {
			this.Gt = q;
			this.Ib = this.p;
			this.jq = 0
		},
		nX : function () {
			this.Gt = m;
			this.Ib = 0;
			var a = this.mk;
			for (this.uh = 0; this.uh <
				this.Ne; ++this.uh)
				a[this.uh].vp = 0
		},
		Y$ : function () {
			return this.Ne >= this.Zb
		},
		nga : function (a, c) {
			var d = p;
			this.la ? (d = this.la.S.Dc[this.lb + a.wu], this.la.S.ha = m) : d = this.Dc[this.uh];
			var e,
			f,
			g,
			k;
			this.Ta ? (e = 0 | 255 * a.color.i * a.color.g, f = 0 | 255 * a.color.h * a.color.g, g = 0 | 255 * a.color.c * a.color.g) : (e = 0 | 255 * a.color.i, f = 0 | 255 * a.color.h, g = 0 | 255 * a.color.c);
			k = 0 | 255 * a.color.g;
			var l = d.J.v;
			l.i = e;
			l.h = f;
			l.c = g;
			l.g = k;
			l = d.O.v;
			l.i = e;
			l.h = f;
			l.c = g;
			l.g = k;
			l = d.N.v;
			l.i = e;
			l.h = f;
			l.c = g;
			l.g = k;
			l = d.M.v;
			l.i = e;
			l.h = f;
			l.c = g;
			l.g = k;
			e = a.size / 2;
			if (a.rotation) {
				f =
					-e;
				g = -e;
				k = c.x;
				var l = c.y,
				n = -R.Ud(a.rotation),
				r = Math.cos(n),
				n = Math.sin(n);
				d.J.l.x = f * r - g * n + k;
				d.J.l.y = f * n + g * r + l;
				d.O.l.x = e * r - g * n + k;
				d.O.l.y = e * n + g * r + l;
				d.N.l.x = f * r - e * n + k;
				d.N.l.y = f * n + e * r + l;
				d.M.l.x = e * r - e * n + k;
				d.M.l.y = e * n + e * r + l
			} else
				d.J.l.x = c.x - e, d.J.l.y = c.y - e, d.O.l.x = c.x + e, d.O.l.y = c.y - e, d.N.l.x = c.x - e, d.N.l.y = c.y + e, d.M.l.x = c.x + e, d.M.l.y = c.y + e
		},
		ica : function () {
			if (R.T === R.Ya) {
				var a = R.u;
				a.bindBuffer(a.ARRAY_BUFFER, this.pe[0]);
				a.bufferData(a.ARRAY_BUFFER, this.Oe, a.DYNAMIC_DRAW)
			}
		},
		update : function (a) {
			if (this.Gt && this.Le) {
				var c =
					1 / this.Le;
				this.Ne < this.Zb && (this.jq += a);
				for (; this.Ne < this.Zb && this.jq > c; )
					this.r7(), this.jq -= c;
				this.Ib += a;
				-1 != this.p && this.p < this.Ib && this.Qfa()
			}
			this.uh = 0;
			c = R.Wi.cB[0];
			this.Fl == R.Fs ? R.Cn(c, this.hn(this.rK)) : this.Fl == R.qH && (c.x = this.Z.x, c.y = this.Z.y);
			if (this.Ua) {
				for (var d = R.Wi.cB[1], e = R.Wi.cB[2], f = R.Wi.cB[3], g = this.mk; this.uh < this.Ne; ) {
					R.mF(d);
					R.mF(e);
					R.mF(f);
					var k = g[this.uh];
					k.vp -= a;
					if (0 < k.vp) {
						if (this.Ba == R.Mb) {
							var l = f,
							n = d,
							r = e;
							k.pb.x || k.pb.y ? (R.Cn(n, k.pb), R.tba(n)) : R.mF(n);
							R.Cn(r, n);
							R.fv(n, k.K.Xe);
							var s = r.x;
							r.x = -r.y;
							r.y = s;
							R.fv(r, k.K.Ag);
							R.Cn(l, n);
							R.kF(l, r);
							R.kF(l, this.K.Te);
							R.fv(l, a);
							R.kF(k.K.dir, l);
							R.Cn(l, k.K.dir);
							R.fv(l, a);
							R.kF(k.pb, l)
						} else
							l = k.De, l.Dy += l.HU * a, l.Dn += l.JU * a, k.pb.x = -Math.cos(l.Dy) * l.Dn, k.pb.y = -Math.sin(l.Dy) * l.Dn;
						this.jS || (k.color.i += k.Ly.i * a, k.color.h += k.Ly.h * a, k.color.c += k.Ly.c * a, k.color.g += k.Ly.g * a, k.YV = m);
						k.size += k.ZL * a;
						k.size = Math.max(0, k.size);
						k.rotation += k.KU * a;
						l = d;
						this.Fl == R.Fs || this.Fl == R.qH ? (n = e, R.Cn(n, c), R.VW(n, k.dO), R.Cn(l, k.pb), R.VW(l, n)) : R.Cn(l, k.pb);
						this.la &&
						(l.x += this.Z.x, l.y += this.Z.y);
						R.T == R.Ya ? this.nga(k, l) : R.Cn(k.Ny, l);
						++this.uh
					} else if (k = k.wu, this.uh !== this.Ne - 1 && (l = g[this.uh], g[this.uh] = g[this.Ne - 1], g[this.Ne - 1] = l), this.la && (this.la.P8(this.lb + k), g[this.Ne - 1].wu = k), --this.Ne, 0 == this.Ne && this.sx) {
						this.gG();
						this.Cc.removeChild(this, m);
						return
					}
				}
				this.jr = q
			}
			this.la || this.ica()
		},
		qga : function () {
			this.update(0)
		},
		Id : function (a, c) {
			if (c) {
				var d = c[a];
				return d != p ? d : ""
			}
			return ""
		},
		zi : function () {
			R.e(!this.la, "Can't change blending functions when the particle is being batched");
			var a = this.G;
			if (a && a instanceof R.Eb) {
				this.Ta = q;
				var c = this.z;
				c.src == R.Ac && c.da == R.zc && (a.Wl() ? this.Ta = m : (c.src = 770, c.da = 771))
			}
		},
		A : function () {
			var a = new R.kb;
			if (a.ob(this.Zb)) {
				a.ef = this.ef;
				a.ff = this.ff;
				a.p = this.p;
				a.z.src = this.z.src;
				a.z.da = this.z.da;
				var c = a.za,
				d = this.za;
				c.i = d.i;
				c.h = d.h;
				c.c = d.c;
				c.g = d.g;
				c = a.Ea;
				d = this.Ea;
				c.i = d.i;
				c.h = d.h;
				c.c = d.c;
				c.g = d.g;
				c = a.pa;
				d = this.pa;
				c.i = d.i;
				c.h = d.h;
				c.c = d.c;
				c.g = d.g;
				c = a.Ca;
				d = this.Ca;
				c.i = d.i;
				c.h = d.h;
				c.c = d.c;
				c.g = d.g;
				a.pf = this.pf;
				a.qf = this.qf;
				a.Me = this.Me;
				a.mq = this.mq;
				a.q(new R.Dg(this.Z.x,
						this.Z.y));
				a.Yd.x = this.Yd.x;
				a.Yd.y = this.Yd.y;
				a.Zq = this.Zq;
				a.$q = this.$q;
				a.nq = this.nq;
				a.oq = this.oq;
				a.Ba = this.Ba;
				this.Ba == R.Mb ? (c = a.K, d = this.K, c.Te.x = d.Te.x, c.Te.y = d.Te.y, c.speed = d.speed, c.zg = d.zg, c.Xe = d.Xe, c.vg = d.vg, c.Ag = d.Ag, c.Ri = d.Ri) : this.Ba == R.jh && (c = a.De, d = this.De, c.zv = d.zv, c.Av = d.Av, c.Gr = d.Gr, c.Hu = d.Hu, c.mv = d.mv, c.nv = d.nv);
				a.Gc = this.Gc;
				a.jf = this.jf;
				a.Le = this.Le;
				this.la || (a.Ta = this.Ta, a.G = this.G)
			}
			return a
		},
		fm : function (a) {
			R.e(R.Oq(a.P9()), "QuadParticle only supports SpriteFrames with no offsets");
			R.T === R.Ya && (!this.G || a.ja().Be != this.G.Be) && this.Na(a.ja())
		},
		kY : function (a, c) {
			var d = this.G;
			if (R.T === R.Ya) {
				if ((!d || a.Be != d.Be) && d != a)
					this.G = a, this.zi()
			} else if ((!d || a != d) && d != a)
				this.G = a, this.zi();
			this.Ix = c;
			this.LV(c)
		},
		fa : function (a) {
			R.e(!this.la, "draw should not be called when added to a particleBatchNode");
			this.Qa && (R.T === R.Ab ? this.bk(a) : this.Jg(a), R.Ci++)
		},
		bk : function (a) {
			a = a || R.u;
			a.save();
			a.globalCompositeOperation = this.W$() ? "lighter" : "source-over";
			for (var c = 0; c < this.Ne; c++) {
				var d = this.mk[c],
				e =
					0 | 0.5 * d.size;
				if (this.XB == R.TP) {
					if (e = this.G.Pc, e.width && e.height) {
						a.save();
						a.globalAlpha = d.color.g;
						a.translate(0 | d.Ny.x,  - (0 | d.Ny.y));
						var f = 4 * Math.floor(d.size / 4),
						g = this.Ix.width,
						k = this.Ix.height;
						a.scale(Math.max(1 / g * f, 1E-6), Math.max(1 / k * f, 1E-6));
						d.rotation && a.rotate(R.Ud(d.rotation));
						a.translate( - (0 | g / 2),  - (0 | k / 2));
						if (d.YV && (f = R.fb.d().sE(e)))
							f.Mz || (f.Mz = document.createElement("canvas"), f.Mz.width = e.width, f.Mz.height = e.height), R.Lu(e, f, d.color, this.Ix, f.Mz), e = f.Mz;
						a.drawImage(e, 0, 0);
						a.restore()
					}
				} else
					a.save(),
					a.globalAlpha = d.color.g, a.translate(0 | d.Ny.x,  - (0 | d.Ny.y)), this.lD == R.e1 ? (d.rotation && a.rotate(R.Ud(d.rotation)), R.Se.V8(a, e, d.color)) : R.Se.T8(a, e, d.color), a.restore()
			}
			a.restore()
		},
		Jg : function (a) {
			this.G && (a = a || R.u, this.Yb.Sd(), this.Yb.hh(), R.Ih(this.G), R.l$(this.z.src, this.z.da), R.Ld(R.Tp), a.bindBuffer(a.ARRAY_BUFFER, this.pe[0]), a.vertexAttribPointer(R.fc, 3, a.FLOAT, q, 24, 0), a.vertexAttribPointer(R.Gg, 4, a.UNSIGNED_BYTE, m, 24, 12), a.vertexAttribPointer(R.df, 2, a.FLOAT, q, 24, 16), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,
					this.pe[1]), a.drawElements(a.TRIANGLES, 6 * this.uh, a.UNSIGNED_SHORT, 0))
		},
		bxa : function () {
			R.WH || this.eu()
		},
		ila : x(),
		eu : function () {
			if (R.T != R.Ab) {
				var a = R.u;
				this.pe[0] = a.createBuffer();
				a.bindBuffer(a.ARRAY_BUFFER, this.pe[0]);
				a.bufferData(a.ARRAY_BUFFER, this.Oe, a.DYNAMIC_DRAW);
				this.pe[1] = a.createBuffer();
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.pe[1]);
				a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.hb, a.STATIC_DRAW)
			}
		},
		LR : function () {
			if (R.T === R.Ab)
				return m;
			R.e(!this.la, "Memory should not be allocated when not using batchNode");
			var a = R.ec.BYTES_PER_ELEMENT,
			c = this.Zb,
			d = [];
			this.hb = new Uint16Array(6 * c);
			for (var e = new ArrayBuffer(a * c), f = 0; f < c; f++)
				d[f] = new R.ec(p, p, p, p, e, f * a);
			if (!d || !this.hb)
				return R.log("cocos2d: Particle system: not enough memory"), q;
			this.Dc = d;
			this.Oe = e;
			return m
		}
	});
R.kb.create = function (a) {
	var c = new R.kb;
	return !a || "number" === typeof a ? (a = a || 100, c.Xda(R.TP), c.ob(a), c) : c && c.wf(a) ? c : p
};
R.kb.Ima = function (a) {
	var c = new R.kb;
	return c && c.ob(a) ? c : p
};
R.kb.mH = function (a, c, d, e, f, g, k, l) {
	this.Te = a ? a : R.Nb();
	this.speed = c || 0;
	this.zg = d || 0;
	this.Ag = e || 0;
	this.Ri = f || 0;
	this.Xe = g || 0;
	this.vg = k || 0;
	this.xF = l || q
};
R.kb.nH = function (a, c, d, e, f, g) {
	this.zv = a || 0;
	this.Av = c || 0;
	this.Gr = d || 0;
	this.Hu = e || 0;
	this.mv = f || 0;
	this.nv = g || 0
};
R.Pia = 500;
R.EA = R.r.extend({
		Wja : m,
		z : p,
		S : p,
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.z = {
				src : R.Ac,
				da : R.zc
			}
		},
		ba : function (a, c) {
			this.S = new R.Sp;
			this.S.ba(a, c);
			this.k = [];
			R.T === R.Ya && this.Ye(R.Ad.d().Tc(R.rm));
			return m
		},
		wf : function (a, c) {
			var d = R.fb.d().Jd(a);
			return this.ba(d, c)
		},
		m : function (a, c) {
			var d = R.fb.d().Jd(a);
			return this.ba(d, c)
		},
		I : function (a, c, d) {
			R.e(a != p, "Argument must be non-NULL");
			R.e(a instanceof R.kb, "cc.ParticleBatchNode only supports cc.ParticleSystem as children");
			c = c == p ? a.Ra : c;
			d = d == p ? a.ud : d;
			R.e(a.ja() == this.S.ja(), "cc.ParticleSystem is not using the same texture id");
			0 === this.k.length && this.Qd(a.z);
			R.e(this.z.src == a.z.src && this.z.da == a.z.da, "Can't add a ParticleSystem that uses a different blending function");
			c = this.O2(a, c, d);
			d = 0;
			0 != c ? (c = this.k[c - 1], d = c.lb + c.Zb) : d = 0;
			this.IM(a, d);
			a.Ec(this)
		},
		IM : function (a, c) {
			var d = a.Zb,
			e = this.S,
			f = e.Ja;
			a.yd(c);
			f + d > e.pd && (this.g4(f + d), e.YU(e.pd - d, d));
			a.lb + d != f && e.BW(c, c + d);
			e.IV(d);
			this.hL()
		},
		removeChild : function (a, c) {
			if (a != p) {
				R.e(a instanceof R.kb, "cc.ParticleBatchNode only supports cc.ParticleSystem as children");
				R.e(-1 < this.k.indexOf(a), "cc.ParticleBatchNode doesn't contain the sprite. Can't remove it");
				R.r.prototype.removeChild.call(this, a, c);
				var d = this.S;
				d.Wca(a.lb, a.Zb);
				d.YU(d.Ja, a.Zb);
				a.Ec(p);
				this.hL()
			}
		},
		kv : function (a, c) {
			R.e(a != p, "Child must be non-NULL");
			R.e(a instanceof R.kb, "cc.ParticleBatchNode only supports cc.QuadParticleSystems as children");
			R.e(-1 === this.k.indexOf(a), "Child doesn't belong to batch");
			if (c != a.Ra) {
				if (1 < this.k.length) {
					var d = this.T3(a, c);
					if (d.KW != d.GW) {
						R.Qn(this.k, d.KW);
						this.k = R.Ui(this.k,
								a, d.GW);
						d = a.lb;
						this.hL();
						for (var e = 0, f = this.k, g = 0; g < f.length; g++)
							if (f[g] == a) {
								e = a.lb;
								break
							}
						this.S.BW(d, a.Zb, e);
						a.qga()
					}
				}
				a.du(c)
			}
		},
		Sca : function (a, c) {
			this.removeChild(this.k[i], c)
		},
		wg : function (a) {
			for (var c = this.k, d = 0; d < c.length; d++)
				c[d].Ec(p);
			R.r.prototype.wg.call(this, a);
			this.S.sN()
		},
		P8 : function (a) {
			a = this.S.Dc[a];
			a.O.l.x = a.O.l.y = a.M.l.x = a.M.l.y = a.N.l.x = a.N.l.y = a.J.l.x = a.J.l.y = 0;
			this.S.W5(m)
		},
		fa : function () {
			R.T !== R.Ab && 0 != this.S.Ja && (R.Ip(this), R.Fi(this.z.src, this.z.da), this.S.aM())
		},
		ja : function () {
			return this.S.ja()
		},
		Na : function (a) {
			this.S.Na(a);
			var c = this.z;
			a && (!a.Wl() && c.src == pa.Ac && c.da == pa.zc) && (c.src = 770, c.da = 771)
		},
		Qd : function (a, c) {
			this.z = 1 == arguments.length ? a : {
				src : a,
				da : c
			}
		},
		gp : C("z"),
		Y : function (a) {
			R.T !== R.Ab && this.Ua && (R.tn(), this.se && this.se.tg() && (this.se.xu(), this.Oz()), this.transform(a), this.fa(a), this.se && this.se.tg() && this.se.uu(this), R.sn())
		},
		hL : function () {
			for (var a = 0, c = this.k, d = 0; d < c.length; d++) {
				var e = c[d];
				e.yd(a);
				a += e.Zb
			}
		},
		g4 : function (a) {
			R.log("cocos2d: cc.ParticleBatchNode: resizing TextureAtlas capacity from [" +
				this.S.pd + "] to [" + a + "].");
			this.S.yN(a) || (R.log("cocos2d: WARNING: Not enough memory to resize the atlas"), R.e(q, "XXX: cc.ParticleBatchNode #increaseAtlasCapacity SHALL handle this assert"))
		},
		N5 : function (a) {
			for (var c = this.k, d = c.length, e = 0; e < d; e++)
				if (c[e].Ra > a)
					return e;
			return d
		},
		T3 : function (a, c) {
			for (var d = q, e = q, f = 0, g = 0, k = 0, l = this.k, n = l.length, r = 0; r < n; r++) {
				var s = l[r];
				if (s.Ra > c && !e && (f = r, e = m, d && e))
					break;
				if (a == s && (g = r, d = m, e || (k = -1), d && e))
					break
			}
			e || (f = n);
			return {
				GW : f + k,
				KW : g
			}
		},
		O2 : function (a, c, d) {
			R.e(a != p,
				"Argument must be non-nil");
			R.e(a.getParent() == p, "child already added. It can't be added again");
			this.k || (this.k = []);
			var e = this.N5(c);
			this.k = R.Ui(this.k, a, e);
			a.up(d);
			a.du(c);
			a.gs(this);
			this.Qf && (a.sa(), a.Ii());
			return e
		},
		zi : function () {
			this.S.ja().Wl() || (this.z.src = 770, this.z.da = 771)
		},
		lM : C("S"),
		In : z("S")
	});
R.EA.Fh = function (a, c) {
	var d = new R.EA;
	return d && d.ba(a, c) ? d : p
};
R.EA.create = function (a, c) {
	var d = new R.EA;
	return d && d.m(a, c) ? d : p
};
R.hQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 300 : 150)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, 0), this.K.Xe = 0, this.K.vg = 0, this.K.speed = 60, this.K.zg = 20, this.ef = 90, this.ff = 10, a = R.o.d().$, this.q(a.width / 2, 60), this.Yd = R.b(40, 20), this.Gc = 3, this.jf = 0.25, this.pf = 54, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.76, this.za.h = 0.25, this.za.c = 0.12, this.za.g = 1, this.Ea.i = 0, this.Ea.h = 0, this.Ea.c = 0, this.Ea.g = 0, this.pa.i = 0, this.pa.h =
					0, this.pa.c = 0, this.pa.g = 1, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(m), m) : q
		}
	});
R.hQ.create = function () {
	var a = new R.hQ;
	return a.m() ? a : p
};
R.iQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 1500 : 150)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, -90), this.K.Xe = 0, this.K.vg = 0, this.K.speed = 180, this.K.zg = 50, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.ef = 90, this.ff = 20, this.Gc = 3.5, this.jf = 1, this.Le = this.Zb / this.Gc, this.za.i = 0.5, this.za.h = 0.5, this.za.c = 0.5, this.za.g = 1, this.Ea.i = 0.5, this.Ea.h = 0.5, this.Ea.c = 0.5, this.Ea.g = 0.1, this.pa.i = 0.1, this.pa.h = 0.1, this.pa.c = 0.1, this.pa.g = 0.2, this.Ca.i =
					0.1, this.Ca.h = 0.1, this.Ca.c = 0.1, this.Ca.g = 0.2, this.pf = 8, this.qf = 2, this.Me = R.Vi, this.Mk(q), m) : q
		}
	});
R.iQ.create = function () {
	var a = new R.iQ;
	return a.m() ? a : p
};
R.qQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 350 : 150)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.Mk(m), this.p = R.al, this.JX(R.Mb), this.NX(R.b(0, 0)), this.bY(0), this.cY(0), this.SN(20), this.iY(5), this.ef = 90, this.ff = 360, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.ZX(R.Nb()), this.Gc = 1, this.jf = 0.5, this.pf = 30, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.76, this.za.h = 0.25, this.za.c = 0.12, this.za.g = 1, this.Ea.i = 0, this.Ea.h = 0, this.Ea.c = 0, this.Ea.g = 0, this.pa.i = 0, this.pa.h =
					0, this.pa.c = 0, this.pa.g = 1, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, m) : q
		}
	});
R.qQ.create = function () {
	var a = new R.qQ;
	return a.m() ? a : p
};
R.kQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 200 : 100)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, 0), this.K.speed = 60, this.K.zg = 10, this.K.Xe = -80, this.K.vg = 0, this.K.Ag = 80, this.K.Ri = 0, this.ef = 90, this.ff = 360, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.Yd = R.Nb(), this.Gc = 4, this.jf = 1, this.pf = 37, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.12, this.za.h = 0.25, this.za.c = 0.76, this.za.g = 1, this.Ea.i = 0, this.Ea.h = 0, this.Ea.c = 0, this.Ea.g =
					0, this.pa.i = 0, this.pa.h = 0, this.pa.c = 0, this.pa.g = 1, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(m), m) : q
		}
	});
R.kQ.create = function () {
	var a = new R.kQ;
	return a.m() ? a : p
};
R.jQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 250 : 100)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, 0), this.K.speed = 80, this.K.zg = 10, this.K.Xe = -60, this.K.vg = 0, this.K.Ag = 15, this.K.Ri = 0, this.ef = 90, this.ff = 360, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.Yd = R.Nb(), this.Gc = 4, this.jf = 1, this.pf = 30, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.5, this.za.h = 0.5, this.za.c = 0.5, this.za.g = 1, this.Ea.i = 0.5, this.Ea.h = 0.5, this.Ea.c = 0.5, this.Ea.g =
					0.5, this.pa.i = 0, this.pa.h = 0, this.pa.c = 0, this.pa.g = 1, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(m), m) : q
		}
	});
R.jQ.create = function () {
	var a = new R.jQ;
	return a.m() ? a : p
};
R.lQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 150 : 100)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(-200, 200), this.K.speed = 15, this.K.zg = 5, this.K.Xe = 0, this.K.vg = 0, this.K.Ag = 0, this.K.Ri = 0, this.ef = 90, this.ff = 360, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.Yd = R.Nb(), this.Gc = 2, this.jf = 1, this.pf = 60, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.2, this.za.h = 0.4, this.za.c = 0.7, this.za.g = 1, this.Ea.i = 0, this.Ea.h = 0, this.Ea.c = 0.2, this.Ea.g =
					0.1, this.pa.i = 0, this.pa.h = 0, this.pa.c = 0, this.pa.g = 1, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(m), m) : q
		}
	});
R.lQ.create = function () {
	var a = new R.lQ;
	return a.m() ? a : p
};
R.pQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 500 : 100)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, 0), this.K.speed = 150, this.K.zg = 0, this.K.Xe = -380, this.K.vg = 0, this.K.Ag = 45, this.K.Ri = 0, this.ef = 90, this.ff = 0, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.Yd = R.Nb(), this.Gc = 12, this.jf = 0, this.pf = 20, this.qf = 0, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.5, this.za.h = 0.5, this.za.c = 0.5, this.za.g = 1, this.Ea.i = 0.5, this.Ea.h = 0.5, this.Ea.c = 0.5, this.Ea.g =
					0, this.pa.i = 0.5, this.pa.h = 0.5, this.pa.c = 0.5, this.pa.g = 1, this.Ca.i = 0.5, this.Ca.h = 0.5, this.Ca.c = 0.5, this.Ca.g = 0, this.Mk(q), m) : q
		}
	});
R.pQ.create = function () {
	var a = new R.pQ;
	return a.m() ? a : p
};
R.gQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 700 : 300)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = 0.1, this.Ba = R.Mb, this.K.Te = R.b(0, 0), this.K.speed = 70, this.K.zg = 40, this.K.Xe = 0, this.K.vg = 0, this.K.Ag = 0, this.K.Ri = 0, this.ef = 90, this.ff = 360, a = R.o.d().$, this.q(a.width / 2, a.height / 2), this.Yd = R.Nb(), this.Gc = 5, this.jf = 2, this.pf = 15, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.p, this.za.i = 0.7, this.za.h = 0.1, this.za.c = 0.2, this.za.g = 1, this.Ea.i = 0.5, this.Ea.h = 0.5, this.Ea.c = 0.5, this.Ea.g =
					0, this.pa.i = 0.5, this.pa.h = 0.5, this.pa.c = 0.5, this.pa.g = 0, this.Ca.i = 0.5, this.Ca.h = 0.5, this.Ca.c = 0.5, this.Ca.g = 0, this.Mk(q), m) : q
		}
	});
R.gQ.create = function () {
	var a = new R.gQ;
	return a.m() ? a : p
};
R.nQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 200 : 100)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, 0), this.K.Xe = 0, this.K.vg = 0, this.K.speed = 25, this.K.zg = 10, this.ef = 90, this.ff = 5, a = R.o.d().$, this.q(a.width / 2, 0), this.Yd = R.b(20, 0), this.Gc = 4, this.jf = 1, this.pf = 60, this.qf = 10, this.Me = R.Vi, this.Le = this.Zb / this.Gc, this.za.i = 0.8, this.za.h = 0.8, this.za.c = 0.8, this.za.g = 1, this.Ea.i = 0.02, this.Ea.h = 0.02, this.Ea.c = 0.02, this.Ea.g = 0, this.pa.i = 0, this.pa.h =
					0, this.pa.c = 0, this.pa.g = 1, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(q), m) : q
		}
	});
R.nQ.create = function () {
	var a = new R.nQ;
	return a.m() ? a : p
};
R.oQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 700 : 250)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(0, -1), this.K.speed = 5, this.K.zg = 1, this.K.Xe = 0, this.K.vg = 1, this.K.Ag = 0, this.K.Ri = 1, a = R.o.d().$, this.q(a.width / 2, a.height + 10), this.Yd = R.b(a.width / 2, 0), this.ef = -90, this.ff = 5, this.Gc = 45, this.jf = 15, this.pf = 10, this.qf = 5, this.Me = R.Vi, this.Le = 10, this.za.i = 1, this.za.h = 1, this.za.c = 1, this.za.g = 1, this.Ea.i = 0, this.Ea.h = 0, this.Ea.c = 0, this.Ea.g = 0, this.pa.i =
					1, this.pa.h = 1, this.pa.c = 1, this.pa.g = 0, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(q), m) : q
		}
	});
R.oQ.create = function () {
	var a = new R.oQ;
	return a.m() ? a : p
};
R.mQ = R.kb.extend({
		m : function () {
			return this.ob(R.T === R.Ya ? 1E3 : 300)
		},
		ob : function (a) {
			return R.kb.prototype.ob.call(this, a) ? (this.p = R.al, this.Ba = R.Mb, this.K.Te = R.b(10, -10), this.K.Xe = 0, this.K.vg = 1, this.K.Ag = 0, this.K.Ri = 1, this.K.speed = 130, this.K.zg = 30, this.ef = -90, this.ff = 5, a = R.o.d().$, this.q(a.width / 2, a.height), this.Yd = R.b(a.width / 2, 0), this.Gc = 4.5, this.jf = 0, this.pf = 4, this.qf = 2, this.Me = R.Vi, this.Le = 20, this.za.i = 0.7, this.za.h = 0.8, this.za.c = 1, this.za.g = 1, this.Ea.i = 0, this.Ea.h = 0, this.Ea.c = 0, this.Ea.g = 0, this.pa.i =
					0.7, this.pa.h = 0.8, this.pa.c = 1, this.pa.g = 0.5, this.Ca.i = 0, this.Ca.h = 0, this.Ca.c = 0, this.Ca.g = 0, this.Mk(q), m) : q
		}
	});
R.mQ.create = function () {
	var a = new R.mQ;
	return a.m() ? a : p
};
R.Fg = R.D.extend({
		Ic : p,
		UC : R.Nb(),
		ul : 0,
		ctor : function (a, c, d) {
			this.Ic = R.b(a || 0, c || 0);
			this.ul = d || 0
		},
		Aqa : C("Ic"),
		S9 : C("UC"),
		tV : function () {
			return R.We(this.Ic, this.UC)
		},
		aqa : C("ul"),
		bqa : C("ul"),
		YN : function (a, c, d) {
			this.UC = this.Ic;
			this.Ic = R.b(c || 0, d || 0);
			this.ul = a
		},
		zh : function (a, c) {
			this.UC = R.b(a || 0, c || 0)
		}
	});
R.UQ = R.D.extend({
		Aka : p,
		Lh : M(q),
		bh : x(),
		Mi : x(),
		np : x(),
		mz : x(),
		OW : x(),
		NW : x(),
		MW : x(),
		MCa : x(),
		LCa : x()
	});
R.Tja = R.UQ.extend({
		Lh : M(q),
		bh : x(),
		Mi : x(),
		np : x()
	});
R.Aja = R.UQ.extend({
		mz : x(),
		OW : x(),
		NW : x(),
		MW : x()
	});
R.Os = R.D.extend({
		vb : p,
		Tg : 0,
		ut : 0,
		$b : C("vb"),
		dh : z("vb"),
		T9 : C("Tg"),
		vv : z("Tg"),
		v9 : C("ut"),
		aea : z("ut"),
		Fk : function (a, c) {
			R.e(a != p, "TouchHandler.initWithDelegate():touch delegate should not be null");
			this.vb = a;
			this.Tg = c;
			this.ut = 0;
			return m
		}
	});
R.Os.create = function (a, c) {
	var d = new R.Os;
	d && d.Fk(a, c);
	return d
};
R.SH = R.Os.extend({
		Fk : function (a, c) {
			return R.Os.prototype.Fk.call(this, a, c)
		}
	});
R.SH.create = function (a, c) {
	var d = new R.SH;
	d && d.Fk(a, c);
	return d
};
R.bB = R.Os.extend({
		tD : q,
		mt : p,
		dva : C("tD"),
		GBa : z("tD"),
		Doa : C("mt"),
		Fk : function (a, c, d) {
			return R.Os.prototype.Fk.call(this, a, c) ? (this.mt = [], this.tD = d, m) : q
		}
	});
R.bB.create = function (a, c, d) {
	var e = new R.bB;
	e && e.Fk(a, c, d);
	return e
};
R.j2 = 1;
R.m2 = 2;
R.l2 = 4;
R.k2 = 8;
R.Yja = R.j2 | R.m2 | R.l2 | R.k2;
R.$A = 0;
R.aI = 1;
R.$H = 2;
R.ZH = 3;
R.Xja = 4;
R.vW = function (a, c) {
	return a.Tg > c.Tg
};
R.hB = z("type");
R.ga = R.D.extend({
		Co : q,
		mg : p,
		lg : p,
		jj : q,
		an : q,
		Yo : q,
		ii : p,
		Lg : p,
		CD : q,
		Hm : q,
		e4 : [new R.hB(R.$A), new R.hB(R.aI), new R.hB(R.$H), new R.hB(R.ZH)],
		m : function () {
			this.Hm = m;
			this.mg = [];
			this.lg = [];
			this.ii = [];
			this.Lg = [];
			this.Co = this.jj = this.CD = this.an = this.Yo = q;
			R.ga.Lca();
			return m
		},
		Qx : z("Co"),
		Z3 : C("Co"),
		Cua : C("Hm"),
		GF : z("Hm"),
		R2 : function (a, c) {
			var d = R.SH.create(a, c || 0);
			this.jj ? -1 != this.Lg.indexOf(a) ? R.ke(this.Lg, a) : (this.ii.push(d), this.an = m) : this.lg = this.Iu(d, this.lg)
		},
		S2 : function (a, c, d) {
			c = R.bB.create(a, c, d);
			this.jj ?
			-1 != this.Lg.indexOf(a) ? R.ke(this.Lg, a) : (this.ii.push(c), this.an = m) : this.mg = this.Iu(c, this.mg)
		},
		Iu : function (a, c) {
			for (var d = 0, e, f = 0; f < c.length; f++)
				if (e = c[f])
					if (e.Tg < a.Tg && ++d, e.$b() == a.$b())
						return R.e(0, "TouchDispatcher.forceAddHandler()"), c;
			return R.Ui(c, a, d)
		},
		gV : function () {
			this.lg.length = 0;
			this.mg.length = 0
		},
		D5 : function (a) {
			if (a != p)
				if (this.jj) {
					var c = this.ZU(this.ii, a);
					c ? R.ke(this.ii, c) : (this.Lg.push(a), this.Yo = m)
				} else
					this.Py(a)
		},
		Rca : function () {
			this.jj ? this.CD = m : this.gV()
		},
		vv : function (a, c) {
			R.e(c != p,
				"TouchDispatcher.setPriority():Arguments is null");
			var d = this.ZU(c);
			R.e(d != p, "TouchDispatcher.setPriority():Cant find TouchHandler");
			d.Tg != a && (d.vv(a), this.cX(this.mg), this.cX(this.lg))
		},
		touches : function (a, c, d) {
			R.e(0 <= d && 4 > d, "TouchDispatcher.touches()");
			this.jj = m;
			var e = this.mg.length,
			f = this.lg.length,
			g = e && f,
			k = g ? a.slice() : a,
			l = this.e4[d];
			if (0 < e)
				for (var n, r, s = 0; s < a.length; s++)
					for (var e = a[s], t = 0; t < this.mg.length; t++) {
						n = this.mg[t];
						if (!n)
							break;
						r = q;
						if (d == R.$A)
							n.$b().Lh && (r = n.$b().Lh(e, c)) && n.mt.push(e);
						else if (0 < n.mt.length)
							switch (r = m, l.type) {
							case R.aI:
								R.ua.$l ? n.$b().bh && n.$b().bh(e, c) : this.Co && n.$b().bh && n.$b().bh(e, c);
								break;
							case R.$H:
								n.$b().Mi && n.$b().Mi(e, c);
								n.mt.length = 0;
								break;
							case R.ZH:
								n.$b().np && n.$b().np(e, c),
								n.mt.length = 0
							}
						if (r && n.tD) {
							g && R.ke(k, e);
							break
						}
					}
			if (0 < f)
				for (s = 0; s < this.lg.length; s++) {
					n = this.lg[s];
					if (!n)
						break;
					switch (l.type) {
					case R.$A:
						0 < k.length && n.$b().mz && n.$b().mz(k, c)
					}
				}
			this.jj = q;
			if (this.Yo) {
				this.Yo = q;
				for (s = 0; s < this.Lg.length; s++)
					this.Py(this.Lg[s]);
				this.Lg.length = 0
			}
			if (this.an) {
				this.an =
					q;
				for (s = 0; s < this.ii.length; s++) {
					n = this.ii[s];
					if (!n)
						break;
					n instanceof R.bB ? this.mg = this.Iu(n, this.mg) : this.lg = this.Iu(n, this.lg)
				}
				this.ii.length = 0
			}
			this.CD && (this.CD = q, this.gV())
		},
		dG : function (a, c) {
			this.Hm && this.touches(a, c, R.$A)
		},
		eG : function (a, c) {
			this.Hm && this.touches(a, c, R.aI)
		},
		Nz : function (a, c) {
			this.Hm && this.touches(a, c, R.$H)
		},
		kO : function (a, c) {
			this.Hm && this.touches(a, c, R.ZH)
		},
		ZU : function (a, c) {
			switch (arguments.length) {
			case 1:
				c = arguments[0];
				for (var d = 0; d < this.mg.length; d++)
					if (this.mg[d].$b() == c)
						return this.mg[d];
				for (d = 0; d < this.lg.length; d++)
					if (this.lg[d].$b() == c)
						return this.lg[d];
				return p;
			case 2:
				R.e(a != p && c != p, "TouchDispatcher.findHandler():Arguments is null");
				for (d = 0; d < a.length; d++)
					if (a[d].$b() == c)
						return a[d];
				return p;
			default:
				b("Argument must be non-nil ")
			}
		},
		Py : function (a) {
			for (var c, d = 0; d < this.lg.length; d++)
				if ((c = this.lg[d]) && c.$b() == a) {
					R.ke(this.lg, c);
					break
				}
			for (d = 0; d < this.mg.length; d++)
				if ((c = this.mg[d]) && c.$b() == a) {
					R.ke(this.mg, c);
					break
				}
		},
		cX : function (a) {
			a.sort(R.vW)
		}
	});
R.ga.yb = R.b(0, 0);
R.ga.$V = q;
R.Ul = function (a) {
	var c = document.documentElement,
	d = window,
	e = p,
	e = "function" === typeof a.getBoundingClientRect ? a.getBoundingClientRect() : a instanceof HTMLCanvasElement ? {
		left : 0,
		top : 0,
		width : a.width,
		height : a.height
	}
	 : {
		left : 0,
		top : 0,
		width : parseInt(a.style.width),
		height : parseInt(a.style.height)
	};
	return {
		left : e.left + d.pageXOffset - c.clientLeft,
		top : e.top + d.pageYOffset - c.clientTop,
		width : e.width,
		height : e.height
	}
};
R.o1 = function (a, c) {
	var d = R.Ul(a),
	e,
	f;
	c.pageX != p ? (e = c.pageX, f = c.pageY) : (d.left -= document.body.scrollLeft, d.top -= document.body.scrollTop, e = c.clientX, f = c.clientY);
	e = R.uc.d().gn(e, f, d);
	d = new R.Fg(e.x, e.y);
	d.zh(R.ga.yb.x, R.ga.yb.y);
	R.ga.yb.x = e.x;
	R.ga.yb.y = e.y;
	e = [];
	e.push(d);
	R.uc.d().Nz(e, p)
};
R.ga.Lca = function () {
	var a = R.canvas;
	if (!R.ga.$V) {
		if (R.ua.$l)
			if (window.navigator.msPointerEnabled) {
				var c = {
					MSPointerDown : "touchesBegan",
					MSPointerMove : "touchesMoved",
					MSPointerUp : "touchesEnded",
					MSPointerCancel : "touchesCancelled"
				},
				d;
				for (d in c)
					(function (c, d) {
						a.addEventListener(c, function (c) {
							var e = R.Ul(a);
							e.left -= document.body.scrollLeft;
							e.top -= document.body.scrollTop;
							var l,
							n;
							l = c.clientX;
							n = c.clientY;
							l = R.uc.d().gn(l, n, e);
							e = new R.Fg(l.x, l.y);
							e.zh(R.ga.yb.x, R.ga.yb.y);
							R.ga.yb.x = l.x;
							R.ga.yb.y = l.y;
							R.o.d().rf[d]([e],
								p);
							c.stopPropagation();
							c.preventDefault()
						}, q)
					})(d, c[d])
			} else
				a.addEventListener("touchstart", function (c) {
					if (c.changedTouches) {
						var d = [],
						g = R.Ul(a);
						g.left -= document.body.scrollLeft;
						g.top -= document.body.scrollTop;
						for (var k, l, n, r = c.changedTouches.length, s = 0; s < r; s++)
							if (k = c.changedTouches[s])
								l = k.clientX, n = k.clientY, l = R.uc.d().gn(l, n, g), k.hasOwnProperty("identifier") ? (k = new R.Fg(l.x, l.y, k.identifier), n = R.ga.fC(k).Ic, k.zh(n.x, n.y), R.ga.qT(k)) : (k = new R.Fg(l.x, l.y), k.zh(R.ga.yb.x, R.ga.yb.y)), R.ga.yb.x = l.x, R.ga.yb.y =
									l.y, d.push(k);
						R.uc.d().dG(d, p);
						c.stopPropagation();
						c.preventDefault()
					}
				}, q), a.addEventListener("touchmove", function (c) {
					if (c.changedTouches) {
						var d = [],
						g = R.Ul(a);
						g.left -= document.body.scrollLeft;
						g.top -= document.body.scrollTop;
						for (var k, l, n, r = c.changedTouches.length, s = 0; s < r; s++)
							if (k = c.changedTouches[s])
								l = k.clientX, n = k.clientY, l = R.uc.d().gn(l, n, g), k.hasOwnProperty("identifier") ? (k = new R.Fg(l.x, l.y, k.identifier), n = R.ga.fC(k).Ic, k.zh(n.x, n.y), R.ga.qT(k)) : (k = new R.Fg(l.x, l.y), k.zh(R.ga.yb.x, R.ga.yb.y)), R.ga.yb.x =
									l.x, R.ga.yb.y = l.y, d.push(k);
						R.uc.d().eG(d, p);
						c.stopPropagation();
						c.preventDefault()
					}
				}, q), a.addEventListener("touchend", function (c) {
					if (c.changedTouches) {
						var d = [],
						g = R.Ul(a);
						g.left -= document.body.scrollLeft;
						g.top -= document.body.scrollTop;
						for (var k, l, n, r = c.changedTouches.length, s = 0; s < r; s++)
							if (k = c.changedTouches[s])
								l = k.clientX, n = k.clientY, l = R.uc.d().gn(l, n, g), k.hasOwnProperty("identifier") ? (k = new R.Fg(l.x, l.y, k.identifier), n = R.ga.fC(k).Ic, k.zh(n.x, n.y), R.ga.hS(k)) : (k = new R.Fg(l.x, l.y), k.zh(R.ga.yb.x, R.ga.yb.y)),
								R.ga.yb.x = l.x, R.ga.yb.y = l.y, d.push(k);
						R.uc.d().Nz(d, p);
						c.stopPropagation();
						c.preventDefault()
					}
				}, q), a.addEventListener("touchcancel", function (c) {
					if (c.changedTouches) {
						var d = [],
						g = R.Ul(a);
						g.left -= document.body.scrollLeft;
						g.top -= document.body.scrollTop;
						for (var k, l, n, r = c.changedTouches.length, s = 0; s < r; s++)
							if (k = c.changedTouches[s])
								l = k.clientX, n = k.clientY, l = R.uc.d().gn(l, n, g), k.hasOwnProperty("identifier") ? (k = new R.Fg(l.x, l.y, k.identifier), n = R.ga.fC(k).Ic, k.zh(n.x, n.y), R.ga.hS(k)) : (k = new R.Fg(l.x, l.y), k.zh(R.ga.yb.x,
										R.ga.yb.y)), R.ga.yb.x = l.x, R.ga.yb.y = l.y, d.push(k);
						R.uc.d().kO(d, p);
						c.stopPropagation();
						c.preventDefault()
					}
				}, q);
		else
			window.addEventListener("mousedown", function () {
				R.o.d().rf.Qx(m)
			}), window.addEventListener("mouseup", function (c) {
				R.o.d().rf.Qx(q);
				var d = R.Ul(a),
				g;
				c.pageX != p ? (g = c.pageX, c = c.pageY) : (d.left -= document.body.scrollLeft, d.top -= document.body.scrollTop, g = c.clientX, c = c.clientY);
				R.Yr(new R.Xi(d.left, d.top, d.width, d.height), R.b(g, c)) || (g = R.uc.d().gn(g, c, d), d = new R.Fg(g.x, g.y), d.zh(R.ga.yb.x, R.ga.yb.y),
					R.ga.yb.x = g.x, R.ga.yb.y = g.y, g = [], g.push(d), R.uc.d().Nz(g, p))
			}), a.addEventListener("mousedown", function (c) {
				var d = R.Ul(a),
				g;
				c.pageX != p ? (g = c.pageX, c = c.pageY) : (d.left -= document.body.scrollLeft, d.top -= document.body.scrollTop, g = c.clientX, c = c.clientY);
				g = R.uc.d().gn(g, c, d);
				d = new R.Fg(g.x, g.y);
				d.zh(R.ga.yb.x, R.ga.yb.y);
				R.ga.yb.x = g.x;
				R.ga.yb.y = g.y;
				g = [];
				g.push(d);
				R.uc.d().dG(g, p)
			}), a.addEventListener("mouseup", function (c) {
				R.o1(a, c)
			}), a.addEventListener("mousemove", function (c) {
				var d = R.Ul(a),
				g;
				c.pageX != p ? (g = c.pageX,
					c = c.pageY) : (d.left -= document.body.scrollLeft, d.top -= document.body.scrollTop, g = c.clientX, c = c.clientY);
				g = R.uc.d().gn(g, c, d);
				d = new R.Fg(g.x, g.y);
				d.zh(R.ga.yb.x, R.ga.yb.y);
				R.ga.yb.x = g.x;
				R.ga.yb.y = g.y;
				g = [];
				g.push(d);
				R.uc.d().eG(g, p)
			});
		R.ga.$V = m
	}
};
R.ga.fC = function (a) {
	for (var c = p, d = R.ga.sK, e = a.ul, f = d.length - 1; 0 <= f; f--)
		if (d[f].ul == e) {
			c = d[f];
			break
		}
	c || (c = a);
	return c
};
R.ga.qT = function (a) {
	for (var c = q, d = R.ga.sK, e = a.ul, f = d.length - 1; 0 <= f; f--)
		if (d[f].ul == e) {
			d[f] = a;
			c = m;
			break
		}
	c || (50 >= d.length ? d.push(a) : (d[R.ga.tK] = a, R.ga.tK = (R.ga.tK + 1) % 50))
};
R.ga.hS = function (a) {
	var c,
	d = R.ga.sK;
	c = a.ul;
	for (a = d.length - 1; 0 <= a; a--)
		if (d[a].ul == c) {
			c = d.pop();
			a != d.length && (d[a] = c);
			break
		}
};
R.ga.sK = [];
R.ga.tK = 0;
R.tF = function (a, c, d) {
	R.o.d().rf.S2(d, a, c)
};
R.Mca = function (a, c) {
	R.o.d().rf.R2(a, c)
};
R.NY = function (a) {
	R.o.d().rf.D5(a)
};
R.qia = 1;
R.via = 2;
R.ria = 4;
R.wia = 8;
R.bja = 16;
R.cja = 32;
R.dja = 64;
R.Lia = 128;
R.Mia = 256;
R.Nia = 512;
R.nja = 1024;
R.sia = 2048;
R.tia = 4096;
R.$0 = 0;
R.uia = 1;
R.HP = 2;
R.yia = R.D.extend({
		aba : M(q),
		bba : M(q),
		eba : M(q),
		fba : M(q),
		mba : M(q),
		nba : M(q),
		oba : M(q),
		gba : M(q),
		hba : M(q),
		iba : M(q),
		pba : M(q),
		cba : M(q),
		dba : M(q)
	});
R.a1 = R.Fg.extend({
		TT : 0,
		TR : R.$0,
		Mta : C("TT"),
		rY : z("TT"),
		koa : C("TR"),
		Eda : z("TR")
	});
R.oH = R.D.extend({
		vb : p,
		Tg : 0,
		ut : 0,
		$b : C("vb"),
		dh : z("vb"),
		T9 : C("Tg"),
		vv : z("Tg"),
		v9 : C("ut"),
		aea : z("ut"),
		Fk : function (a, c) {
			this.vb = a;
			this.Tg = c
		}
	});
R.oH.create = function (a, c) {
	var d = new R.oH;
	d.Fk(a, c);
	return d
};
R.$k = R.D.extend({
		Co : q,
		HK : q,
		oi : p,
		Hm : q,
		m : function () {
			this.Hm = m;
			this.oi = [];
			this.HK = this.Co = q;
			R.$k.y5();
			return m
		},
		Qx : z("Co"),
		Z3 : C("Co"),
		rT : z("HK"),
		Gka : C("HK"),
		bU : function (a, c) {
			var d = R.oH.create(a, c);
			this.oi = this.Iu(d, this.oi)
		},
		Iu : function (a, c) {
			for (var d = 0, e = 0; e < c.length; e++) {
				var f = c[e];
				if (f && (f.Tg < a.Tg && ++d, f.$b() == a.$b()))
					return R.e(0, "TouchDispatcher.forceAddHandler()"), c
			}
			return R.Ui(c, a, d)
		},
		jX : function (a) {
			if (a != p)
				for (var c = 0; c < this.oi.length; c++) {
					var d = this.oi[c];
					if (d && d.$b() == a) {
						R.ke(this.oi, d);
						break
					}
				}
		},
		P3 : function (a) {
			for (var c = 0; c < this.oi.length; c++)
				if (this.oi[c] && this.oi[c].$b() == a)
					return this.oi[c];
			return p
		},
		vv : function (a, c) {
			R.e(c != p, "MouseDispatcher.setPriority():Arguments is null");
			var d = this.P3(c);
			R.e(d != p, "MouseDispatcher.setPriority():Cant find MouseHandler");
			d.Tg != a && (d.vv(a), this.oi.sort(R.vW))
		},
		Tya : function () {
			this.oi.length = 0
		},
		kxa : function () {
			for (var a = 0; a < this.oi.length; a++);
		}
	});
R.$k.TC = R.b(0, 0);
R.$k.D4 = q;
R.$k.y5 = function () {
	var a = R.canvas;
	function c(c) {
		var e = R.Ul(a),
		f = c.pageY,
		g = (c.pageX - e.left) / R.o.d().bi,
		e = (e.height - (f - e.top)) / R.o.d().bi,
		f = new R.a1(g, e);
		f.zh(R.$k.TC.x, R.$k.TC.y);
		f.Eda(c.button);
		R.$k.TC.x = g;
		R.$k.TC.y = e;
		return f
	}
	R.$k.D4 || (window.addEventListener("mousedown", function (a) {
			a.button == R.HP ? R.o.d().pi.rT(m) : R.o.d().pi.Qx(m)
		}), window.addEventListener("mouseup", function (a) {
			a.button == R.HP ? R.o.d().pi.rT(q) : R.o.d().pi.Qx(q)
		}), a.addEventListener("mousedown", function (a) {
			R.o.d();
			c(a)
		}), a.addEventListener("mouseup",
			function (a) {
			R.o.d();
			c(a)
		}), a.addEventListener("mousemove", function (a) {
			R.o.d();
			c(a)
		}), a.addEventListener("mousewheel", function (a) {
			c(a).rY(a.wheelDelta);
			R.o.d()
		}, q), a.addEventListener("DOMMouseScroll", function (a) {
			c(a).rY(-120 * a.detail);
			R.o.d()
		}), a.addEventListener("mouseout", function (a) {
			R.o.d();
			c(a)
		}, q), a.addEventListener("mouseover", function (a) {
			R.o.d();
			c(a)
		}, q))
};
R.jia = R.D.extend({
		Zaa : x(),
		$aa : x()
	});
R.bH = R.D.extend({
		$b : C("vb"),
		dh : z("vb"),
		Fk : function (a) {
			R.e(a != p, "It's a wrong delegate!");
			this.vb = a;
			return m
		},
		vb : p
	});
R.bH.create = function (a) {
	var c = new R.bH;
	c.Fk(a);
	return c
};
R.Oja = 1;
R.Pja = 2;
R.zs = {
	jU : 8,
	Ufa : 9,
	dM : 13,
	shift : 16,
	Jma : 17,
	alt : 18,
	pause : 19,
	ima : 20,
	escape : 27,
	lya : 33,
	kya : 34,
	end : 35,
	home : 36,
	left : 37,
	PCa : 38,
	right : 39,
	ana : 40,
	mua : 45,
	Aha : 46,
	"0" : 48,
	1 : 49,
	2 : 50,
	3 : 51,
	4 : 52,
	5 : 53,
	6 : 54,
	7 : 55,
	8 : 56,
	9 : 57,
	g : 65,
	c : 66,
	C : 67,
	F : 68,
	Bj : 69,
	Dk : 70,
	h : 71,
	fe : 72,
	Wy : 73,
	ME : 74,
	NE : 75,
	$E : 76,
	aF : 77,
	cv : 78,
	iF : 79,
	b : 80,
	sF : 81,
	i : 82,
	Qi : 83,
	iO : 84,
	Ka : 85,
	ca : 86,
	P : 87,
	x : 88,
	y : 89,
	f : 90,
	uxa : 96,
	vxa : 97,
	wxa : 98,
	xxa : 99,
	yxa : 100,
	zxa : 101,
	Axa : 102,
	Bxa : 103,
	Cxa : 104,
	Dxa : 105,
	"*" : 106,
	"+" : 107,
	"-" : 109,
	numdel : 110,
	"/" : 111,
	pna : 112,
	tna : 113,
	una : 114,
	vna : 115,
	wna : 116,
	xna : 117,
	yna : 118,
	zna : 119,
	Ana : 120,
	qna : 121,
	rna : 122,
	sna : 123,
	Ixa : 144,
	wza : 145,
	yza : 186,
	"," : 186,
	mna : 187,
	"\x3d" : 187,
	";" : 188,
	tma : 188,
	Kma : 189,
	"." : 190,
	pya : 190,
	Fna : 191,
	Yta : 192,
	"[" : 219,
	Uxa : 219,
	"]" : 221,
	rma : 221,
	Zla : 220,
	quote : 222,
	Hz : 32
};
R.AA = R.D.extend({
		rr : function (a) {
			a && (this.jj ? (this.ii.push(a), this.an = m) : this.fV(a))
		},
		Zr : function (a) {
			a && (this.jj ? (this.Lg.push(a), this.Yo = m) : this.Py(a))
		},
		fV : function (a) {
			if (a = R.bH.create(a)) {
				for (var c = 0; c < this.iq; c++);
				this.iq.push(a)
			}
		},
		Py : function (a) {
			for (var c = 0; c < this.iq.length; c++)
				if (this.iq[c].$b() == a) {
					this.iq.splice(c, 1);
					break
				}
		},
		OU : function (a, c) {
			this.jj = m;
			a.stopPropagation();
			a.preventDefault();
			var d = 0;
			if (c && a)
				for (d = 0; d < this.iq.length; d++);
			else if (!c && a)
				for (d = 0; d < this.iq.length; d++);
			this.jj = q;
			if (this.Yo) {
				this.Yo =
					q;
				for (d = 0; d < this.Lg.length; ++d)
					this.Py(this.Lg[d]);
				delete this.Lg;
				this.Lg = []
			}
			if (this.an) {
				this.an = q;
				for (d = 0; d < this.ii.length; ++d)
					this.fV(this.ii[d]);
				this.ii = []
			}
			return m
		},
		iq : [],
		jj : q,
		an : q,
		Yo : q,
		ii : [],
		Lg : []
	});
R.AA.d = function () {
	R.Qr || (R.Qr = new R.AA, R.canvas.setAttribute("tabindex", 1), R.canvas.style.outline = "none", R.canvas.style.cursor = "default", R.canvas.addEventListener("keydown", function (a) {
			R.Qr.OU(a, m)
		}), R.canvas.addEventListener("keyup", function (a) {
			R.Qr.OU(a, q)
		}));
	return R.Qr
};
R.AA.Hya = function () {
	R.Qr && (delete R.Qr, R.Qr = p)
};
R.aia = function (a, c, d) {
	this.Dh = a || R.Oc();
	this.end = c || R.Oc();
	this.duration = d || 0
};
R.$ha = R.D.extend({
		ctor : function () {
			R.Ef.d().rr(this)
		},
		Zr : function () {
			R.Ef.d().Zr(this)
		},
		I7 : function () {
			return R.Ef.d().iU(this)
		},
		MU : function () {
			return R.Ef.d().LU(this)
		},
		SL : M(q),
		M8 : x(),
		TL : M(q),
		N8 : x(),
		WV : x(),
		IU : x(),
		fM : M(""),
		NM : x(),
		eW : x(),
		fW : x(),
		dW : x()
	});
R.Ef = R.D.extend({
		gd : p,
		jb : p,
		Fm : "",
		Ot : p,
		ctor : function () {
			this.jb = new R.Ef.t0;
			this.Ot = R.b(0, 0)
		},
		m : function () {
			if (!R.ua.$l) {
				this.gd = R.Wb("#imeDispatcherInput");
				this.gd || (this.gd = R.jm("input"), this.gd.setAttribute("type", "text"), this.gd.setAttribute("id", "imeDispatcherInput"), this.gd.em(0, 0), this.gd.Pz(0, 0), this.gd.style.opacity = "0", this.gd.style.fontSize = "1px", this.gd.setAttribute("tabindex", 2), this.gd.style.position = "absolute", this.gd.style.top = 0, this.gd.style.left = 0, document.body.appendChild(this.gd));
				var a = this;
				this.gd.addEventListener("input", function () {
					a.vK(a.gd.value)
				}, q);
				this.gd.addEventListener("keydown", function (c) {
					c.keyCode === R.zs.Ufa ? (c.stopPropagation(), c.preventDefault()) : c.keyCode == R.zs.dM && (a.My("\n", 1), c.stopPropagation(), c.preventDefault())
				}, q);
				/msie/i.test(navigator.userAgent) && this.gd.addEventListener("keyup", function (c) {
					c.keyCode == R.zs.jU && a.vK(a.gd.value)
				}, q);
				window.addEventListener("mousedown", function (c) {
					a.Ot = R.b(c.pageX || 0, c.pageY || 0)
				}, q)
			}
		},
		vK : function (a) {
			var c,
			d;
			c = this.Fm.length <
				a.length ? this.Fm.length : a.length;
			for (d = 0; d < c && a[d] === this.Fm[d]; d++);
			var e = this.Fm.length - d,
			f = a.length - d;
			for (c = 0; c < e; c++)
				this.NU();
			for (c = 0; c < f; c++)
				this.My(a[d + c], 1);
			this.Fm = a
		},
		My : function (a, c) {
			this.jb && a && !(0 >= c) && this.jb.eg && this.jb.eg.WV(a, c)
		},
		NU : function () {
			this.jb && this.jb.eg && this.jb.eg.IU()
		},
		fM : function () {
			if (this.jb && this.jb.eg) {
				var a = this.jb.eg.fM();
				return a ? a : ""
			}
			return ""
		},
		Yma : function (a) {
			if (this.jb)
				for (var c = 0; c < this.jb.qh.length; c++) {
					var d = this.jb.qh[c];
					d && d.NM(a)
				}
		},
		Wma : function () {
			if (this.jb)
				for (var a =
						0; a < this.jb.qh.length; a++);
		},
		Xma : function () {
			if (this.jb)
				for (var a = 0; a < this.jb.qh.length; a++);
		},
		Vma : function () {
			if (this.jb)
				for (var a = 0; a < this.jb.qh.length; a++);
		},
		rr : function (a) {
			a && this.jb && !(-1 < this.jb.qh.indexOf(a)) && (this.jb.qh = R.Ui(this.jb.qh, a, 0))
		},
		iU : function (a) {
			if (!this.jb || !a || -1 == this.jb.qh.indexOf(a))
				return q;
			if (this.jb.eg) {
				if (!this.jb.eg.TL() || !a.SL())
					return q;
				this.jb.eg = p;
				this.pS(a);
				return m
			}
			if (!a.SL())
				return q;
			this.pS(a);
			return m
		},
		pS : function (a) {
			R.ua.$l ? (this.jb.eg = a, this.Fm = a.pn ? a.pn() :
					"", a = prompt("please enter your word:", this.Fm), a != p && this.vK(a), this.My("\n", 1)) : (this.jb.eg = a, this.Fm = a.pn ? a.pn() : "", this.gd.focus(), this.gd.value = this.Fm, this.C3())
		},
		C3 : function () {
			/msie/i.test(navigator.userAgent) ? (this.gd.style.left = this.Ot.x + "px", this.gd.style.top = this.Ot.y + "px") : this.gd.Pz(this.Ot.x, this.Ot.y)
		},
		LU : function (a) {
			if (!this.jb || !a || this.jb.eg != a || !a.TL())
				return q;
			this.jb.eg = p;
			R.canvas.focus();
			return m
		},
		Zr : function (a) {
			this.jb && a && -1 != this.jb.qh.indexOf(a) && (this.jb.eg && a == this.jb.eg &&
				(this.jb.eg = p), R.ke(this.jb.qh, a))
		},
		zya : function (a) {
			32 > a ? a == R.zs.jU ? this.NU() : a == R.zs.dM && this.My("\n", 1) : 255 > a && this.My(String.fromCharCode(a), 1)
		}
	});
R.Ef.t0 = R.D.extend({
		eg : p,
		qh : p,
		ctor : function () {
			this.qh = []
		},
		Cna : function (a) {
			for (var c = 0; c < this.qh.length; c++)
				if (this.qh[c] == a)
					return c;
			return p
		}
	});
R.Ef.d = function () {
	R.Ef.JE || (R.Ef.JE = new R.Ef, R.Ef.JE.m());
	return R.Ef.JE
};
R.Ef.JE = p;
R.Uja = R.D.extend({
		Pxa : M(q),
		Rxa : M(q),
		Sxa : M(q),
		Qxa : M(q),
		Mxa : M(q)
	});
R.cI = R.ka.extend({
		Uka : p,
		ki : "",
		Wm : "",
		EB : 0,
		vb : p,
		pB : p,
		ctor : function () {
			this.pB = new R.mc(127, 127, 127);
			R.Ef.d().rr(this);
			R.ka.prototype.ctor.call(this)
		},
		$b : C("vb"),
		dh : z("vb"),
		woa : C("EB"),
		Koa : C("pB"),
		Uza : z("pB"),
		L$ : function (a, c, d, e, f) {
			switch (arguments.length) {
			case 5:
				return a && (this.Wm = a),
				this.xd(this.Wm, e, f, c, d);
			case 3:
				return a && (this.Wm = a),
				e = arguments[1],
				f = arguments[2],
				this.xd(this.Wm, e, f);
			default:
				b("Argument must be non-nil ")
			}
		},
		sc : function (a) {
			this.ki = (a = String(a)) || "";
			this.ki.length ? R.ka.prototype.sc.call(this,
				this.ki) : R.ka.prototype.sc.call(this, this.Wm);
			this.EB = this.ki.length
		},
		pn : C("ki"),
		NN : function (a) {
			this.Wm = a || "";
			this.ki.length || R.ka.prototype.sc.call(this, this.Wm)
		},
		Q9 : C("Wm"),
		fa : function (a) {
			a = a || R.u;
			if (this.ki && 0 < this.ki.length)
				R.ka.prototype.fa.call(this, a);
			else {
				var c = this.Lb();
				this.L(this.pB);
				R.T === R.Ab && this.HD();
				R.ka.prototype.fa.call(this, a);
				this.L(c)
			}
		},
		I7 : function () {
			return R.Ef.d().iU(this)
		},
		MU : function () {
			return R.Ef.d().LU(this)
		},
		SL : M(m),
		M8 : x(),
		TL : M(m),
		N8 : x(),
		IU : function () {
			var a = this.ki.length;
			0 != a && (1 >= a ? (this.ki = "", this.EB = 0, R.ka.prototype.sc.call(this, this.Wm)) : this.sc(this.ki.substring(0, a - 1)))
		},
		Zr : function () {
			R.Ef.d().Zr(this)
		},
		WV : function (a) {
			var c = a;
			a = c.indexOf("\n");
			-1 < a && (c = c.substring(0, a));
			0 < c.length && (c = this.ki + c, this.EB = c.length, this.sc(c));
			-1 != a && this.MU()
		},
		fM : C("ki"),
		NM : x(),
		eW : x(),
		fW : x(),
		dW : x()
	});
R.cI.create = function (a, c, d, e, f) {
	var g;
	switch (arguments.length) {
	case 5:
		return (g = new R.cI) && g.L$("", c, d, e, f) ? (a && g.NN(a), g) : p;
	case 3:
		return g = new R.cI,
		e = arguments[1],
		f = arguments[2],
		g && g.xd("", e, f) ? (a && g.NN(a), g) : p;
	default:
		b("Argument must be non-nil ")
	}
};
R.WCa = function () {
	return {
		x : 0,
		y : 0
	}
};
R.zp = function (a, c) {
	return {
		x : a,
		y : c
	}
};
R.Si = function (a, c) {
	return R.zp(a.x + c.x, a.y + c.y)
};
R.Fe = function (a, c) {
	return R.zp(a.x - c.x, a.y - c.y)
};
R.Oh = function (a, c) {
	return R.zp(a.x * c, a.y * c)
};
R.jG = function (a) {
	return R.zp(-a.y, a.x)
};
R.im = function (a) {
	return R.zp(-a.x, -a.y)
};
R.tga = function (a, c) {
	return a.x * c.x + a.y * c.y
};
R.VCa = function (a) {
	return R.zp(Math.cos(a), Math.sin(a))
};
R.pO = function (a) {
	a = R.Kj(R.b(a.x, a.y));
	return R.zp(a.x, a.y)
};
R.il = function (a) {
	return R.zp(a.x, a.y)
};
R.Qb = function (a) {
	return {
		Ka : a.x,
		ca : a.y
	}
};
R.O_ = R.r.extend({
		rb : p,
		z : p,
		gp : C("z"),
		Qd : z("z"),
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.rb = [];
			this.z = new R.Pj(R.Ac, R.zc)
		},
		fa : function (a) {
			a = a || R.u;
			this.z && (770 == this.z.src && 1 == this.z.da) && (a.globalCompositeOperation = "lighter");
			for (var c = 0; c < this.rb.length; c++) {
				var d = this.rb[c];
				d.type === R.Ph.PQ && (a.fillStyle = "rgba(" + (0 | 255 * d.color.i) + "," + (0 | 255 * d.color.h) + "," + (0 | 255 * d.color.c) + "," + d.color.g + ")", R.Se.$L(d.position, d.Dn));
				d.type === R.Ph.RQ && (a.strokeStyle = "rgba(" + (0 | 255 * d.color.i) + "," + (0 | 255 *
							d.color.h) + "," + (0 | 255 * d.color.c) + "," + d.color.g + ")", a.lineWidth = 2 * d.Dn, a.lineCap = "round", R.Se.Ck(d.Kr, d.wp));
				d.type === R.Ph.QQ && (a.fillStyle = "rgba(" + (0 | 255 * d.fillColor.i) + "," + (0 | 255 * d.fillColor.h) + "," + (0 | 255 * d.fillColor.c) + "," + d.fillColor.g + ")", R.Se.Ce(d.lG, d.count, q, m), a.lineWidth = 2 * d.borderWidth, a.lineCap = "round", a.strokeStyle = "rgba(" + (0 | 255 * d.borderColor.i) + "," + (0 | 255 * d.borderColor.h) + "," + (0 | 255 * d.borderColor.c) + "," + d.borderColor.g + ")", R.Se.Ce(d.lG, d.count, m, q))
			}
		},
		kn : function (a, c, d) {
			var e = new R.qI(R.Ph.PQ);
			e.position = a;
			e.Dn = c;
			e.color = d;
			this.rb.push(e)
		},
		Gu : function (a, c, d, e) {
			var f = new R.qI(R.Ph.RQ);
			f.Kr = a;
			f.wp = c;
			f.Dn = d;
			f.color = e;
			this.rb.push(f)
		},
		Ce : function (a, c, d, e) {
			var f = new R.qI(R.Ph.QQ);
			f.lG = a;
			f.count = a.length;
			f.fillColor = c;
			f.borderWidth = d;
			f.borderColor = e;
			this.rb.push(f)
		},
		clear : function () {
			this.rb.length = 0
		}
	});
R.P_ = R.r.extend({
		ft : 0,
		rb : p,
		ap : p,
		HT : p,
		GT : p,
		z : p,
		ha : q,
		gp : C("z"),
		Qd : z("z"),
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.rb = [];
			this.z = new R.Pj(R.Ac, R.zc)
		},
		m : function () {
			return R.r.prototype.m.call(this) ? (this.Ye(R.Ad.d().Tc(R.zQ)), this.pJ(512), this.HT = R.u.createBuffer(), this.ha = m) : q
		},
		I5 : function () {
			var a = R.u;
			R.Ld(R.Tp);
			a.bindBuffer(a.ARRAY_BUFFER, this.HT);
			this.ha && (a.bufferData(a.ARRAY_BUFFER, this.ap, a.STREAM_DRAW), this.ha = q);
			var c = R.oc.BYTES_PER_ELEMENT;
			a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, c, 0);
			a.vertexAttribPointer(R.Gg, 4, a.UNSIGNED_BYTE, m, c, 8);
			a.vertexAttribPointer(R.df, 2, a.FLOAT, q, c, 12);
			a.drawArrays(a.TRIANGLES, 0, 3 * this.rb.length);
			R.Qh()
		},
		pJ : function (a) {
			if (this.rb.length + a > this.ft) {
				var c = R.md.BYTES_PER_ELEMENT;
				this.ft += Math.max(this.ft, a);
				if (this.rb == p || 0 === this.rb.length)
					this.rb = [], this.ap = new ArrayBuffer(c * this.ft), this.GT = new Uint8Array(this.ap);
				else {
					a = [];
					for (var d = new ArrayBuffer(c * this.ft), e = 0; e < this.rb.length; e++)
						a[e] = new R.md(this.rb[e].g, this.rb[e].c, this.rb[e].C, d, e * c);
					this.GT =
						new Uint8Array(d);
					this.rb = a;
					this.ap = d
				}
			}
		},
		fa : function () {
			R.Fi(this.z.src, this.z.da);
			this.Yb.Sd();
			this.Yb.Gz();
			this.I5()
		},
		kn : function (a, c, d) {
			d = {
				i : 0 | 255 * d.i,
				h : 0 | 255 * d.h,
				c : 0 | 255 * d.c,
				g : 0 | 255 * d.g
			};
			var e = {
				l : {
					x : a.x - c,
					y : a.y - c
				},
				v : d,
				s : {
					Ka : -1,
					ca : -1
				}
			},
			f = {
				l : {
					x : a.x + c,
					y : a.y + c
				},
				v : d,
				s : {
					Ka : 1,
					ca : 1
				}
			},
			g = {
				l : {
					x : a.x + c,
					y : a.y - c
				},
				v : d,
				s : {
					Ka : 1,
					ca : -1
				}
			};
			this.rb.push(new R.md(e, {
					l : {
						x : a.x - c,
						y : a.y + c
					},
					v : d,
					s : {
						Ka : -1,
						ca : 1
					}
				}, f, this.ap, this.rb.length * R.md.BYTES_PER_ELEMENT));
			this.rb.push(new R.md(e, f, g, this.ap, this.rb.length * R.md.BYTES_PER_ELEMENT));
			this.ha = m
		},
		Gu : function (a, c, d, e) {
			this.pJ(18);
			e = {
				i : 0 | 255 * e.i,
				h : 0 | 255 * e.h,
				c : 0 | 255 * e.c,
				g : 0 | 255 * e.g
			};
			var f = R.il(a);
			c = R.il(c);
			a = R.pO(R.jG(R.Fe(c, f)));
			var g = R.jG(a),
			k = R.Oh(a, d);
			d = R.Oh(g, d);
			var l = R.Si(c, R.Fe(k, d)),
			n = R.Fe(c, k),
			r = R.Si(c, k),
			s = R.Fe(f, k),
			t = R.Si(f, k),
			v = R.Fe(f, R.Fe(k, d)),
			f = R.Si(f, R.Si(k, d)),
			w = R.md.BYTES_PER_ELEMENT,
			y = this.ap;
			this.rb.push(new R.md({
					l : R.Fe(c, R.Si(k, d)),
					v : e,
					s : R.Qb(R.im(R.Si(a, g)))
				}, {
					l : l,
					v : e,
					s : R.Qb(R.Fe(a, g))
				}, {
					l : n,
					v : e,
					s : R.Qb(R.im(a))
				}, y, this.rb.length * w));
			this.rb.push(new R.md({
					l : r,
					v : e,
					s : R.Qb(a)
				}, {
					l : l,
					v : e,
					s : R.Qb(R.Fe(a, g))
				}, {
					l : n,
					v : e,
					s : R.Qb(R.im(a))
				}, y, this.rb.length * w));
			this.rb.push(new R.md({
					l : r,
					v : e,
					s : R.Qb(a)
				}, {
					l : s,
					v : e,
					s : R.Qb(R.im(a))
				}, {
					l : n,
					v : e,
					s : R.Qb(R.im(a))
				}, y, this.rb.length * w));
			this.rb.push(new R.md({
					l : r,
					v : e,
					s : R.Qb(a)
				}, {
					l : s,
					v : e,
					s : R.Qb(R.im(a))
				}, {
					l : t,
					v : e,
					s : R.Qb(a)
				}, y, this.rb.length * w));
			this.rb.push(new R.md({
					l : v,
					v : e,
					s : R.Qb(R.Fe(g, a))
				}, {
					l : s,
					v : e,
					s : R.Qb(R.im(a))
				}, {
					l : t,
					v : e,
					s : R.Qb(a)
				}, y, this.rb.length * w));
			this.rb.push(new R.md({
					l : v,
					v : e,
					s : R.Qb(R.Fe(g, a))
				}, {
					l : f,
					v : e,
					s : R.Qb(R.Si(a,
							g))
				}, {
					l : t,
					v : e,
					s : R.Qb(a)
				}, y, this.rb.length * w));
			this.ha = m
		},
		Ce : function (a, c, d, e) {
			c = {
				i : 0 | 255 * c.i,
				h : 0 | 255 * c.h,
				c : 0 | 255 * c.c,
				g : 0 | 255 * c.g
			};
			var f = {
				i : 0 | 255 * e.i,
				h : 0 | 255 * e.h,
				c : 0 | 255 * e.c,
				g : 0 | 255 * e.g
			},
			g = [],
			k,
			l,
			n,
			r,
			s = a.length;
			for (k = 0; k < s; k++) {
				l = R.il(a[(k - 1 + s) % s]);
				n = R.il(a[k]);
				r = R.il(a[(k + 1) % s]);
				var t = R.pO(R.jG(R.Fe(n, l)));
				n = R.pO(R.jG(R.Fe(r, n)));
				g[k] = {
					offset : R.Oh(R.Si(t, n), 1 / (R.tga(t, n) + 1)),
					cv : n
				}
			}
			e = 0 < e.g && 0 < d;
			this.pJ(3 * (3 * s - 2));
			var t = R.md.BYTES_PER_ELEMENT,
			v = this.ap,
			w = this.rb,
			y = e == q ? 0.5 : 0;
			for (k = 0; k < s - 2; k++)
				l = R.Fe(R.il(a[0]),
						R.Oh(g[0].offset, y)), n = R.Fe(R.il(a[k + 1]), R.Oh(g[k + 1].offset, y)), r = R.Fe(R.il(a[k + 2]), R.Oh(g[k + 2].offset, y)), w.push(new R.md({
						l : l,
						v : c,
						s : R.Qb({
							x : 0,
							y : 0
						})
					}, {
						l : n,
						v : c,
						s : R.Qb({
							x : 0,
							y : 0
						})
					}, {
						l : r,
						v : c,
						s : R.Qb({
							x : 0,
							y : 0
						})
					}, v, w.length * t));
			for (k = 0; k < s; k++) {
				y = (k + 1) % s;
				l = R.il(a[k]);
				n = R.il(a[y]);
				r = g[k].cv;
				var A = g[k].offset,
				D = g[y].offset,
				y = e ? R.Fe(l, R.Oh(A, d)) : R.Fe(l, R.Oh(A, 0.5)),
				H = e ? R.Fe(n, R.Oh(D, d)) : R.Fe(n, R.Oh(D, 0.5));
				l = e ? R.Si(l, R.Oh(A, d)) : R.Si(l, R.Oh(A, 0.5));
				n = e ? R.Si(n, R.Oh(D, d)) : R.Si(n, R.Oh(D, 0.5));
				e ? (w.push(new R.md({
							l : y,
							v : f,
							s : R.Qb(R.im(r))
						}, {
							l : H,
							v : f,
							s : R.Qb(R.im(r))
						}, {
							l : n,
							v : f,
							s : R.Qb(r)
						}, v, w.length * t)), w.push(new R.md({
							l : y,
							v : f,
							s : R.Qb(R.im(r))
						}, {
							l : l,
							v : f,
							s : R.Qb(r)
						}, {
							l : n,
							v : f,
							s : R.Qb(r)
						}, v, w.length * t))) : (w.push(new R.md({
							l : y,
							v : c,
							s : R.Qb({
								x : 0,
								y : 0
							})
						}, {
							l : H,
							v : c,
							s : R.Qb({
								x : 0,
								y : 0
							})
						}, {
							l : n,
							v : c,
							s : R.Qb(r)
						}, v, w.length * t)), w.push(new R.md({
							l : y,
							v : c,
							s : R.Qb({
								x : 0,
								y : 0
							})
						}, {
							l : l,
							v : c,
							s : R.Qb(r)
						}, {
							l : n,
							v : c,
							s : R.Qb(r)
						}, v, w.length * t)))
			}
			this.ha = m
		},
		clear : function () {
			this.rb.length = 0;
			this.ha = m
		}
	});
R.Ph = R.ua.tc ? R.P_ : R.O_;
R.Ph.create = function () {
	var a = new R.Ph;
	return a && a.m() ? a : p
};
R.qI = z("type");
R.Ph.PQ = 0;
R.Ph.RQ = 1;
R.Ph.QQ = 2;
R.G2 = function (a) {
	for (var c = [], d = 0; d < a.length / 2; d++)
		c[d] = {
			x : a[2 * d],
			y : a[2 * d + 1]
		};
	return c
};
R.y_ = function (a) {
	return a.Zua() || a.aaa() ? R.Ak(0.5, 0.5, 0.5, 0.5) : a.pxa > a.Hz.oCa ? R.Ak(0.33, 0.33, 0.33, 0.5) : R.Ak(1, 0, 0, 0.5)
};
R.Q_ = function (a) {
	var c = a.body,
	d = R.y_(c);
	switch (a.VL) {
	case cp.kha.prototype.VL:
		this.kn(a.HY, Math.max(a.i, 1), d);
		this.Gu(a.HY, cp.ca.add(a.HY, cp.ca.nxa(c.sza, a.i)), 1, d);
		break;
	case cp.vja.prototype.VL:
		this.Gu(a.zCa, a.HCa, Math.max(a.i, 2), d);
		break;
	case cp.n1.prototype.VL:
		c = R.Ak(d.i, d.h, d.c, R.zaa(d.g));
		this.Ce(R.G2(a.yCa), d, 1, c);
		break;
	default:
		R.e(q, "Bad assertion in DrawShape()")
	}
};
R.N_ = function (a) {
	var c = a.g,
	d = a.c,
	e;
	a instanceof cp.Tia ? (e = c.lp(a.hU), c = d.lp(a.HL), this.kn(e, 3, R.Tk), this.kn(c, 3, R.Tk), this.Gu(e, c, 1, R.Tk)) : a instanceof cp.zja ? (e = c.lp(a.hU), c = d.lp(a.HL), this.kn(e, 3, R.Tk), this.kn(c, 3, R.Tk), this.Gu(e, c, 1, R.Tk)) : a instanceof cp.Uia ? (e = c.lp(a.hU), c = d.lp(a.HL), this.kn(e, 3, R.Tk), this.kn(c, 3, R.Tk)) : a instanceof cp.Vha && (e = c.lp(a.$ta), c = c.lp(a.aua), a = d.lp(a.HL), this.kn(a, 3, R.Tk), this.Gu(e, c, 1, R.Tk))
};
R.Tk = R.Ak(0, 1, 0, 0.5);
R.Gs = R.Ph.extend({
		w6 : p,
		Vq : p,
		Dsa : C("Vq"),
		yBa : z("Vq"),
		fa : function () {
			this.Vq && (this.Vq.gna(R.Q_.bind(this)), this.Vq.fna(R.N_.bind(this)), R.Ph.prototype.fa.call(this), this.clear())
		}
	});
R.Gs.Lma = function (a) {
	var c = new R.Gs;
	return c.m() ? (c.w6 = a, c.Vq = a.Hz, c) : p
};
R.Gs.n8 = function (a) {
	var c = new R.Gs;
	return c.m() ? (c.Vq = a, c) : p
};
R.Gs.create = R.Gs.n8;
R.Hs = R.t.extend({
		zS : q,
		Hb : p,
		lT : 1,
		GN : z("Hb"),
		lV : C("Hb"),
		rc : function () {
			var a = this.Hb;
			return {
				x : a.b.x,
				y : a.b.y
			}
		},
		Gj : function () {
			return this.Hb.b.x
		},
		Hj : function () {
			return this.Hb.b.y
		},
		q : function (a, c) {
			2 == arguments.length ? (this.Hb.b.x = a, this.Hb.b.y = c) : (this.Hb.b.x = a.x, this.Hb.b.y = a.y)
		},
		mla : function () {
			var a = this.Z,
			c = this.Hb;
			(a.x != c.b.x || a.y != c.b.y) && R.t.prototype.q.call(this, c.b.x, c.b.y)
		},
		Sy : function () {
			return this.zS ? R.Xn(this.si) : -R.Xn(this.Hb.g)
		},
		he : function (a) {
			this.zS ? R.t.prototype.he.call(this, a) : this.Hb.g =
				-R.Ud(a)
		},
		nla : function () {
			this.si != -this.Hb.g && R.t.prototype.he.call(this, -R.Xn(this.Hb.g))
		},
		Ve : function () {
			if (R.T === R.Ab)
				return this.bK();
			var a = this.Hb,
			c = this.Gb,
			d = this.ia,
			e = this.ra,
			f = a.b.x,
			g = a.b.y;
			this.ij && (f += c.x, g += c.y);
			var k = a.g,
			a = Math.cos(k),
			k = Math.sin(k);
			R.Oq(c) || (f += a * -c.x * d + -k * -c.y * e, g += k * -c.x * d + a * -c.y * e);
			return this.$c = R.Vz(a * d, k * d, -k * e, a * e, f, g)
		},
		bK : function () {
			this.$c || (this.$c = {
					g : 1,
					c : 0,
					C : 0,
					F : 1,
					V : 0,
					W : 0
				});
			if (this.Xu()) {
				var a = this.$c,
				c = this.Hb,
				d = this.ia,
				e = this.ra,
				f = this.Gb;
				a.V = c.b.x;
				a.W = c.b.y;
				var c = -c.g,
				g = 1,
				k = 0;
				c && (g = Math.cos(c), k = Math.sin(c));
				a.g = a.F = g;
				a.c = -k;
				a.C = k;
				if (1 !== d || 1 !== e)
					a.g *= d, a.C *= d, a.c *= e, a.F *= e;
				a.V += g * -f.x * d + -k * f.y * e;
				a.W -= k * -f.x * d + g * f.y * e;
				this.ij && (a.V += f.x, a.W += f.y);
				this.Bh = q
			}
			return this.$c
		},
		Xu : function () {
			return !this.Hb.aaa()
		}
	});
R.Hs.create = function (a, c) {
	var d = arguments.length,
	e = new R.Hs;
	return 0 === d ? e.m() ? e : p : 2 > d ? e && e.wf(a) ? e : p : e && e.wf(a, c) ? e : p
};
R.Hs.Iy = function (a) {
	var c = p;
	if ("string" == typeof a) {
		if (c = R.Ff.d().Ei(a), !c)
			return R.log("Invalid spriteFrameName: " + a), p
	} else
		return R.log("Invalid argument. Expecting string."), p;
	return (a = new R.Hs) && a.Md(c) ? a : p
};
R.Hs.Cr = function (a) {
	var c = new R.Hs;
	return c && c.Md(a) ? c : p
};
R.qha = {
	nha : 0,
	pha : 1,
	oha : 2,
	mha : 3,
	lha : 4
};
R.bf = R.D.extend({
		Aq : 0,
		QS : 0,
		ey : q,
		dy : q,
		qD : q,
		rD : q,
		sD : q,
		M4 : 0,
		IC : 0,
		yw : "",
		fn : p,
		ctor : function () {
			this.QS = this.Aq = 0;
			this.sD = this.rD = this.qD = this.dy = this.ey = q;
			this.IC = this.M4 = 0;
			this.yw = "";
			this.fn = {}

		},
		Kqa : C("Aq"),
		Jqa : C("QS"),
		Lqa : C("IC"),
		sCa : C("dy"),
		tCa : C("ey"),
		qCa : C("qD"),
		rCa : C("rD"),
		uCa : C("sD"),
		Au : function (a) {
			return -1 < this.yw.indexOf(a)
		},
		m : function () {
			var a = this.fn;
			a["cocos2d.x.version"] = R.mA;
			a["cocos2d.x.compiled_with_profiler"] = q;
			a["cocos2d.x.compiled_with_gl_state_cache"] = R.Rj;
			return m
		},
		qoa : function (a, c) {
			var d =
				this.fn;
			return d.hasOwnProperty(a) ? d[a] : c
		},
		goa : function (a, c) {
			c == p && (c = q);
			var d = this.fn;
			return d.hasOwnProperty(a) ? d[a] : c
		},
		Yqa : function (a, c) {
			c == p && (c = 0);
			var d = this.fn;
			return d.hasOwnProperty(a) ? d[a] : c
		},
		Zqa : function (a) {
			var c = this.fn;
			return c.hasOwnProperty(a) ? c[a] : p
		},
		Ok : function (a, c) {
			this.fn[a] = c
		},
		W8 : function () {
			0 === R.Rj && (R.log(""), R.log("cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)"), R.log(""))
		},
		l9 : function () {
			if (R.T !== R.Ab) {
				var a =
					R.u,
				c = this.fn;
				c["gl.vendor"] = a.getParameter(a.VENDOR);
				c["gl.renderer"] = a.getParameter(a.RENDERER);
				c["gl.version"] = a.getParameter(a.VERSION);
				this.yw = "";
				for (var d = a.getSupportedExtensions(), e = 0; e < d.length; e++)
					this.yw += d[e] + " ";
				this.Aq = a.getParameter(a.MAX_TEXTURE_SIZE);
				c["gl.max_texture_size"] = this.Aq;
				this.IC = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
				c["gl.max_texture_units"] = this.IC;
				this.ey = this.Au("GL_IMG_texture_compression_pvrtc");
				c["gl.supports_PVRTC"] = this.ey;
				this.dy = q;
				c["gl.supports_NPOT"] =
					this.dy;
				this.qD = this.Au("GL_IMG_texture_format_BGRA888");
				c["gl.supports_BGRA8888"] = this.qD;
				this.rD = this.Au("GL_EXT_discard_framebuffer");
				c["gl.supports_discard_framebuffer"] = this.rD;
				this.sD = this.Au("vertex_array_object");
				c["gl.supports_vertex_array_object"] = this.sD;
				R.bA()
			}
		},
		fxa : function (a) {
			var c = R.cc.d(),
			d = c.Kd(a),
			c = c.Fu(d);
			if (c != p)
				if (c = c.data)
					for (var e in c)
						this.fn[e] = c[e];
				else
					R.log("Expected 'data' dict, but not found. Config file: " + a)
		}
	});
R.bf.Wx = p;
R.bf.d = function () {
	R.bf.Wx || (R.bf.Wx = new R.bf, R.bf.Wx.m());
	return R.bf.Wx
};
R.bf.Eya = function () {
	R.bf.Wx = p
};
R.Ci = 0;
R.I_ = 0;
R.qP = 1;
R.J_ = 3;
R.K_ = R.qP;
R.wha = 0;
R.uha = 1;
R.xha = 2;
R.vha = 3;
R.tha = 2;
R.Bha = R.D.extend({
		RCa : x()
	});
R.vP = function (a) {
	var c = new R.wa;
	R.OE(R.qm, c);
	var d = new R.wa;
	R.OE(R.pm, d);
	R.vn(a, c, d)
};
R.o = R.D.extend({
		Tka : q,
		Ex : q,
		Fo : q,
		VC : q,
		Lo : q,
		oh : 0,
		eK : 0,
		Xm : 0,
		Qs : 0,
		bi : 1,
		ro : q,
		Gm : 0,
		dC : 0,
		eo : p,
		ho : p,
		so : p,
		$ : p,
		Rm : p,
		ik : p,
		Ut : p,
		kk : p,
		Kl : p,
		wK : p,
		Jc : p,
		Kf : 0,
		jy : 0,
		KK : 0,
		zka : p,
		xh : p,
		aj : p,
		rf : p,
		xq : p,
		jl : p,
		pi : p,
		Rka : q,
		ctor : function () {
			this.Rm = Date.now();
			if (!R.KM) {
				var a = this;
				window.addEventListener("focus", function () {
					a.Rm = Date.now()
				}, q)
			}
		},
		K5 : function () {
			this.Rm = Date.now()
		},
		m : function () {
			this.eK = this.oh = 1 / R.J8;
			this.Kl = [];
			this.Xm = R.K_;
			this.wK = p;
			this.dC = this.Qs = 0;
			this.ro = q;
			this.jy = this.Kf = 0;
			this.Rm = Date.now();
			this.VC = this.Fo = q;
			this.$ = R.size(0, 0);
			this.kk = p;
			this.bi = 1;
			this.xh = new R.T1;
			this.aj = new R.uZ;
			this.xh.qX(this.aj, R.CA, q);
			this.rf = new R.ga;
			this.rf.m();
			this.xq = R.AA.d();
			this.jl = new R.tZ;
			this.pi = new R.$k;
			this.pi.m();
			return m
		},
		pU : function () {
			var a = Date.now();
			this.Ex ? (this.Gm = 0, this.Ex = q) : this.Gm = (a - this.Rm) / 1E3;
			0 < R.qs && 0.2 < this.Gm && (this.Gm = 1 / 60);
			this.Rm = a
		},
		e8 : function (a) {
			var c = new R.wa;
			R.vP(c);
			var d = new R.wa;
			R.iaa(d, c);
			var e = this.kk.Ke,
			f = new R.lc;
			R.rW(f, new R.lc(2 * a.x / e.width - 1, 1 - 2 * a.y / e.height, c.a[14] / c.a[15]), d);
			return R.b(f.x,
				f.y)
		},
		g8 : function (a) {
			var c = new R.wa;
			R.vP(c);
			var d = new R.lc;
			R.rW(d, new R.lc(a.x, a.y, 0), c);
			a = this.kk.Ke;
			return R.b(a.width * (0.5 * d.x + 0.5), a.height * (0.5 * -d.y + 0.5))
		},
		bM : p,
		D3 : function () {
			this.pU();
			this.Fo || this.xh.update(this.Gm);
			R.u.clearRect(0, 0, R.canvas.width, -R.canvas.height);
			this.ik && this.VX();
			this.Jc && this.Jc.Y();
			this.Ut && this.Ut.Y();
			this.ro && this.yT();
			this.jy++;
			this.ro && this.VR()
		},
		E3 : function () {
			this.pU();
			this.Fo || this.xh.update(this.Gm);
			var a = R.u;
			a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT);
			this.ik &&
			this.VX();
			R.tn();
			this.Jc && this.Jc.Y();
			this.Ut && this.Ut.Y();
			this.ro && this.yT();
			R.sn();
			this.jy++;
			this.ro && this.VR()
		},
		end : function () {
			this.VC = m
		},
		Moa : C("bi"),
		Xqa : C("Ut"),
		Nta : C("$"),
		Uy : function () {
			return R.size(this.$.width * this.bi, this.$.height * this.bi)
		},
		oM : function () {
			return this.kk ? this.kk.oM() : R.size(0, 0)
		},
		FV : function () {
			return this.kk ? this.kk.FV() : R.b(0, 0)
		},
		Vy : function () {
			return this.$.height / 1.1566
		},
		pause : function () {
			this.Fo || (this.eK = this.oh, this.xz(0.25), this.Fo = m)
		},
		vya : function () {
			R.e(this.Jc != p, "running scene should not null");
			this.Kl.pop();
			var a = this.Kl.length;
			0 == a ? this.end() : (this.Lo = m, this.ik = this.Kl[a - 1])
		},
		rF : function () {
			R.Bg.rF()
		},
		sca : function () {
			this.sg().Rz();
			this.rf.Rca();
			this.Jc && (this.Jc.Ji(), this.Jc.ub(), this.Jc.Eh());
			this.ik = this.Jc = p;
			this.Kl = [];
			this.EY();
			R.Bg.rF();
			R.Nn.tca();
			R.Ff.uca();
			R.fb.vca();
			R.bA()
		},
		wca : function (a) {
			R.e(a, "the scene should not null");
			this.Lo = q;
			this.Kl.push(a);
			this.ik = a
		},
		wN : function (a) {
			R.e(this.Jc, "Use runWithScene: instead to start the director");
			R.e(a != p, "the scene should not be null");
			var c = this.Kl.length;
			0 === c ? (this.Lo = m, this.Kl[c] = a) : (this.Lo = m, this.Kl[c - 1] = a);
			this.ik = a
		},
		lv : function () {
			this.Fo && (this.xz(this.eK), (this.Rm = Date.now()) || R.log("cocos2d: Director: Error in gettimeofday"), this.Fo = q, this.Gm = 0)
		},
		ida : function (a) {
			R.e(a != p, "This command can only be used to start the CCDirector. There is already a scene present.");
			R.e(this.Jc == p, "_runningScene should be null");
			this.wca(a);
			this.AY()
		},
		vda : function (a) {
			a ? R.Fi(R.Ac, R.zc) : R.Fi(R.u.ONE, R.u.ZERO)
		},
		Pda : function (a) {
			a != this.bi && (this.bi =
					a, this.qt())
		},
		Sda : function (a) {
			R.T !== R.Ab && (a ? (R.u.clearDepth(1), R.u.enable(R.u.DEPTH_TEST), R.u.depthFunc(R.u.LEQUAL)) : R.u.disable(R.u.DEPTH_TEST))
		},
		bAa : x(),
		MX : function () {
			this.vda(m);
			this.Sda(q);
			this.wv(this.Xm);
			R.u.clearColor(0, 0, 0, 1)
		},
		RAa : z("Ex"),
		VX : function () {
			var a = this.Jc ? this.Jc instanceof R.Xa : q;
			this.ik && this.ik instanceof R.Xa || (this.Jc && (this.Jc.Ji(), this.Jc.ub()), this.Lo && this.Jc && this.Jc.Eh());
			this.Jc = this.ik;
			this.ik = p;
			!a && this.Jc != p && (this.Jc.sa(), this.Jc.Ii())
		},
		SAa : z("Ut"),
		$b : C("wK"),
		dh : z("wK"),
		Mea : function (a) {
			this.$ = R.size(R.canvas.width, R.canvas.height);
			this.kk = a || R.uc.d();
			R.T !== R.Ab && (a = R.bf.d(), a.l9(), a.W8(), this.qt(), this.MX(), this.rf.GF(m))
		},
		qY : function () {
			if (this.kk) {
				var a = this.$;
				this.kk.Cfa(0, 0, a.width, a.height)
			}
		},
		wv : function (a) {
			var c = this.$;
			if (R.T === R.Ya)
				switch (this.qY(), a) {
				case R.I_:
					R.bm(R.qm);
					R.Zu();
					var d = new R.wa;
					R.OM(d, 0, c.width, 0, c.height, -1024, 1024);
					R.$u(d);
					R.bm(R.pm);
					R.Zu();
					break;
				case R.qP:
					var e = this.Vy(),
					f = new R.wa,
					d = new R.wa;
					R.bm(R.qm);
					R.Zu();
					R.jaa(f, c.width / c.height, 2 *
						e);
					R.$u(f);
					R.bm(R.pm);
					R.Zu();
					e = R.av(p, c.width / 2, c.height / 2, e);
					c = R.av(p, c.width / 2, c.height / 2, 0);
					f = R.av(p, 0, 1, 0);
					R.hW(d, e, c, f);
					R.$u(d);
					break;
				case R.J_:
					break;
				default:
					R.log("cocos2d: Director: unrecognized projection")
				}
			this.Xm = a;
			R.aY()
		},
		yT : function () {
			this.Kf++;
			this.Qs += this.Gm;
			this.ro && (this.eo && this.ho && this.so ? (this.Qs > R.H_ && (this.ho.sc(this.KK.toFixed(3)), this.dC = this.Kf / this.Qs, this.Qs = this.Kf = 0, this.eo.sc(this.dC.toFixed(1)), this.so.sc((0 | R.Ci).toString())), this.eo.Y(), this.ho.Y(), this.so.Y()) : this.qt());
			R.Ci = 0
		},
		bva : C("Lo"),
		hsa : C("Jc"),
		Rna : C("oh"),
		Dua : C("ro"),
		Vda : z("ro"),
		nsa : C("KK"),
		jra : C("kk"),
		Pua : C("Ex"),
		LE : C("Fo"),
		nta : C("jy"),
		Mra : C("Xm"),
		wya : function () {
			this.hca(1)
		},
		hca : function (a) {
			R.e(this.Jc != p, "A running Scene is needed");
			var c = this.Kl,
			d = c.length;
			if (0 == d)
				this.end();
			else if (!(a > d)) {
				for (; d > a; ) {
					var e = c.pop();
					e.Qf && (e.Ji(), e.ub());
					e.Eh();
					d--
				}
				this.ik = c[c.length - 1];
				this.Lo = q
			}
		},
		sg : C("xh"),
		Zea : function (a) {
			this.xh != a && (this.xh = a)
		},
		Di : C("aj"),
		sda : function (a) {
			this.aj != a && (this.aj = a)
		},
		qta : C("rf"),
		UBa : function (a) {
			this.rf !=
			a && (this.rf = a)
		},
		lqa : C("xq"),
		zAa : z("xq"),
		Ina : C("jl"),
		Bza : function (a) {
			this.jl != a && (this.jl = a)
		},
		dpa : C("Gm"),
		Tqa : C("pi"),
		OAa : function (a) {
			this.pi != a && (this.pi = a)
		},
		qt : p,
		x3 : function () {
			if (!(R.o.qS == p || R.o.qS == q)) {
				var a = new R.Eb;
				a.vf(R.o.uJ);
				a.Ue();
				var c = R.uc.d().Ke.height / 320;
				0 === c && (c = this.$.height / 320);
				var d = new R.He;
				d.OK(m);
				d.xd("00.0", a, 12, 32, ".");
				d.jd(c);
				this.eo = d;
				d = new R.He;
				d.OK(m);
				d.xd("0.000", a, 12, 32, ".");
				d.jd(c);
				this.ho = d;
				d = new R.He;
				d.OK(m);
				d.xd("000", a, 12, 32, ".");
				d.jd(c);
				this.so = d;
				a = R.rP;
				this.so.q(R.ug(R.b(0,
							34 * c), a));
				this.ho.q(R.ug(R.b(0, 17 * c), a));
				this.eo.q(a)
			}
		},
		w3 : function () {
			var a = 0,
			a = this.$.width > this.$.height ? 0 | 24 * (this.$.height / 320) : 0 | 24 * (this.$.width / 320);
			this.eo = R.ka.create("000.0", "Arial", a);
			this.ho = R.ka.create("0.000", "Arial", a);
			this.so = R.ka.create("0000", "Arial", a);
			var a = R.rP,
			c = this.so.n();
			this.so.q(R.ug(R.b(c.width / 2, 5 * c.height / 2), a));
			c = this.ho.n();
			this.ho.q(R.ug(R.b(c.width / 2, 3 * c.height / 2), a));
			c = this.eo.n();
			this.eo.q(R.ug(R.b(c.width / 2, c.height / 2), a))
		},
		VR : function () {
			this.KK = (Date.now() - this.Rm) /
			1E3
		}
	});
R.ua.tc ? (R.o.prototype.bM = R.o.prototype.E3, R.o.prototype.qt = R.o.prototype.x3) : (R.o.prototype.bM = R.o.prototype.D3, R.o.prototype.qt = R.o.prototype.w3);
R.M_ = R.o.extend({
		KE : q,
		AY : function () {
			this.Ex = m;
			this.KE = q;
			R.On.d().xz(this.oh)
		},
		zW : function () {
			this.VC ? (this.VC = q, this.sca()) : this.KE || this.bM()
		},
		EY : function () {
			this.KE = m
		},
		xz : function (a) {
			this.oh = a;
			this.KE || (this.EY(), this.AY())
		}
	});
R.yF = p;
R.$U = m;
R.o.d = function () {
	R.$U && (R.$U = q, R.yF = new R.M_, R.yF.m(), R.yF.Mea(R.uc.d()));
	return R.yF
};
R.Ena = m;
R.J8 = 60;
R.o.uJ = new Image;
R.o.uJ.addEventListener("load", function () {
	R.o.qS = m;
	this.removeEventListener("load", arguments.callee, q)
});
R.o.uJ.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII\x3d";
R.Lv = R.D.extend({
		gx : p,
		hx : p,
		ix : p,
		jt : p,
		kt : p,
		lt : p,
		py : p,
		qy : p,
		ry : p,
		ha : p,
		DC : p,
		ctor : function () {
			this.DC = new R.wa;
			this.restore()
		},
		description : function () {
			return "\x3cCCCamera | center \x3d(" + this.jt + "," + this.kt + "," + this.lt + ")\x3e"
		},
		eh : z("ha"),
		Xu : C("ha"),
		restore : function () {
			this.gx = this.hx = 0;
			this.ix = R.Lv.Vy();
			this.py = this.jt = this.kt = this.lt = 0;
			this.qy = 1;
			this.ry = 0;
			R.Rr(this.DC);
			this.ha = q
		},
		WM : function () {
			if (this.ha) {
				var a = new R.lc,
				c = new R.lc,
				d = new R.lc;
				R.av(a, this.gx, this.hx, this.ix);
				R.av(c, this.jt, this.kt, this.lt);
				R.av(d, this.py, this.qy, this.ry);
				R.hW(this.DC, a, c, d);
				this.ha = q
			}
			R.$u(this.DC)
		},
		iAa : function (a, c, d) {
			this.KX(a, c, d)
		},
		KX : function (a, c, d) {
			this.gx = a;
			this.hx = c;
			this.ix = d;
			this.ha = m
		},
		Pza : function (a, c, d) {
			this.Ida(a, c, d)
		},
		Ida : function (a, c, d) {
			this.jt = a;
			this.kt = c;
			this.lt = d;
			this.ha = m
		},
		gCa : function (a, c, d) {
			this.zfa(a, c, d)
		},
		zfa : function (a, c, d) {
			this.py = a;
			this.qy = c;
			this.ry = d;
			this.ha = m
		},
		Jpa : function () {
			return {
				x : this.gx,
				y : this.hx,
				f : this.ix
			}
		},
		wV : function () {
			return {
				x : this.gx,
				y : this.hx,
				f : this.ix
			}
		},
		uoa : function () {
			return {
				x : this.jt,
				y : this.kt,
				f : this.lt
			}
		},
		rV : function () {
			return {
				x : this.jt,
				y : this.kt,
				f : this.lt
			}
		},
		Ata : function () {
			return {
				x : this.py,
				y : this.qy,
				f : this.ry
			}
		},
		k$ : function () {
			return {
				x : this.py,
				y : this.qy,
				f : this.ry
			}
		},
		nka : x()
	});
R.Lv.Vy = function () {
	return R.vA
};
R.CA = -2147483648;
R.Sia = R.CA + 1;
R.Zz = function (a, c) {
	if (a && 0 < a.length)
		for (var d = 0; d < a.length; d++)
			if (!(a[d]instanceof c)) {
				R.log("element type is wrong!");
				break
			}
};
R.Qn = function (a, c) {
	a.splice(c, 1)
};
R.ke = function (a, c) {
	for (var d = 0, e = a.length; d < e; d++)
		if (a[d] == c) {
			a.splice(d, 1);
			break
		}
};
R.Oga = function (a, c) {
	for (var d = 0, e = c.length; d < e; d++)
		R.ke(a, c[d])
};
R.Nga = function (a, c) {
	return a.indexOf(c)
};
R.Lga = function (a, c) {
	a.push(c)
};
R.Ui = function (a, c, d) {
	a.splice(d, 0, c);
	return a
};
R.Mga = function (a, c, d) {
	a.splice.apply(a, [d, 0].concat(c));
	return a
};
R.Hv = function (a, c) {
	for (var d = 0, e = a.length; d < e; d++)
		if (a[d] == c)
			return d;
	return -1
};
R.mm = function (a, c) {
	return -1 != R.Hv(a, c)
};
R.Yk = function (a, c) {
	if (a == p)
		return p;
	for (var d = 0; d < a.length; d++)
		if (a[d].target === c)
			return a[d];
	return p
};
R.FP = function (a, c, d) {
	this.next = this.yya = p;
	this.target = a;
	this.ZW = c;
	this.paused = d;
	this.xn = q
};
R.wP = function (a, c, d) {
	this.list = a;
	this.Tl = c;
	this.target = d;
	this.yE = p
};
R.p0 = function (a, c) {
	this.Nh = p;
	this.target = a;
	this.Cv = 0;
	this.Ky = this.Jy = p;
	this.paused = c;
	this.yE = p
};
R.dB = R.D.extend({
		li : 0,
		yh : p,
		w : p,
		Ib : 0,
		nT : q,
		ID : q,
		mu : 0,
		EK : 0,
		PB : 0,
		ctor : x(),
		kqa : C("li"),
		setInterval : x(),
		qsa : C("yh"),
		Hi : function (a, c, d, e, f) {
			this.w = a;
			this.yh = c;
			this.Ib = -1;
			this.li = d || 0;
			this.PB = f || 0;
			this.ID = 0 < this.PB;
			this.EK = e == p ? R.Is : e;
			this.nT = this.EK == R.Is;
			return m
		},
		KI : function () {
			if ("string" == typeof this.yh)
				this.w[this.yh](this.Ib);
			else
				this.yh.call(this.w, this.Ib)
		},
		update : function (a) {
			if (-1 == this.Ib)
				this.mu = this.Ib = 0;
			else {
				var c = this.w,
				d = this.yh;
				this.nT && !this.ID ? (this.Ib += a, this.Ib >= this.li && (c && d && this.KI(),
						this.Ib = 0)) : (this.Ib += a, this.ID ? this.Ib >= this.PB && (c && d && this.KI(), this.Ib -= this.PB, this.mu += 1, this.ID = q) : this.Ib >= this.li && (c && d && this.KI(), this.Ib = 0, this.mu += 1), this.mu > this.EK && R.o.d().sg().PY(c, d))
			}
		}
	});
R.dB.JCa = function (a, c, d) {
	2 > arguments.length && b(Error("timerWithTarget'argument can't is null"));
	var e = new R.dB;
	e.Hi(a, c, d || 0, R.Is, 0);
	return e
};
R.jla = p;
R.T1 = R.D.extend({
		hy : 1,
		zj : p,
		vk : p,
		Bi : p,
		Mm : p,
		Mg : p,
		Hg : p,
		pl : q,
		ED : q,
		ctor : function () {
			this.hy = 1;
			this.zj = [];
			this.vk = [];
			this.Bi = [];
			this.Mm = [];
			this.Mg = [];
			this.Hg = p;
			this.ED = this.pl = q
		},
		DK : function (a) {
			a.dB = p;
			a.target = p;
			R.ke(this.Mg, a)
		},
		O3 : function (a, c) {
			for (var d = 0; d < a.length; d++)
				if (a[d].target == c)
					return a[d];
			return p
		},
		YC : function (a) {
			if (a = this.O3(this.Mm, a.target))
				R.ke(a.list, a.Tl), a.Tl = p, a.target = p, R.ke(this.Mm, a)
		},
		dT : function (a, c, d, e) {
			e = new R.FP(c, d, e);
			if (a) {
				for (var f = q, g = 0; g < a.length; g++)
					if (d < a[g].ZW) {
						a = R.Ui(a,
								e, g);
						f = m;
						break
					}
				f || a.push(e)
			} else
				a = [], a.push(e);
			this.Mm.push(new R.wP(a, e, c));
			return a
		},
		Y2 : function (a, c, d) {
			d = new R.FP(c, 0, d);
			a.push(d);
			this.Mm.push(new R.wP(a, d, c))
		},
		RBa : z("hy"),
		ita : C("hy"),
		update : function (a) {
			this.ED = m;
			1 != this.hy && (a *= this.hy);
			var c,
			d;
			for (d = 0; d < this.zj.length; d++)
				c = this.zj[d], !c.paused && !c.xn && c.target.update(a);
			for (d = 0; d < this.vk.length; d++)
				c = this.vk[d], !c.paused && !c.xn && c.target.update(a);
			for (d = 0; d < this.Bi.length; d++)
				c = this.Bi[d], !c.paused && !c.xn && c.target.update(a);
			for (d = 0; d < this.Mg.length; d++) {
				c =
					this.Hg = this.Mg[d];
				this.pl = q;
				if (!this.Hg.paused)
					for (c.Cv = 0; c.Cv < c.Nh.length; c.Cv++)
						c.Jy = c.Nh[c.Cv], c.Ky = q, c.Jy.update(a), c.Jy = p;
				this.pl && 0 == this.Hg.Nh.length && this.DK(this.Hg)
			}
			for (d = 0; d < this.zj.length; d++)
				this.zj[d].xn && this.YC(this.zj[d]);
			for (d = 0; d < this.vk.length; d++)
				this.vk[d].xn && this.YC(this.vk[d]);
			for (d = 0; d < this.Bi.length; d++)
				this.Bi[d].xn && this.YC(this.Bi[d]);
			this.ED = q;
			this.Hg = p
		},
		pX : function (a, c, d, e, f, g) {
			R.e(c, "scheduler.scheduleCallbackForTarget() Argument callback_fn must be non-NULL");
			R.e(a,
				"scheduler.scheduleCallbackForTarget() Argument target must be non-NULL");
			d = d || 0;
			e = e == p ? R.Is : e;
			f = f || 0;
			g = g || q;
			var k = R.Yk(this.Mg, a);
			k ? R.e(k.paused == g, "Sheduler.scheduleCallbackForTarget()") : (k = new R.p0(a, g), this.Mg.push(k));
			if (k.Nh == p)
				k.Nh = [];
			else
				for (var l = 0; l < k.Nh.length; l++)
					if (g = k.Nh[l], c == g.yh) {
						R.log("CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:" + g.li.toFixed(4) + " to " + d.toFixed(4));
						g.li = d;
						return
					}
			g = new R.dB;
			g.Hi(a, c, d, e, f);
			k.Nh.push(g)
		},
		qX : function (a, c, d) {
			var e =
				R.Yk(this.Mm, a);
			e ? (1 <= R.qs && R.e(e.Tl.xn, ""), e.Tl.xn = q) : 0 == c ? this.Y2(this.vk, a, d) : 0 > c ? this.zj = this.dT(this.zj, a, c, d) : this.Bi = this.dT(this.Bi, a, c, d)
		},
		PY : function (a, c) {
			if (!(a == p || c == p)) {
				var d = R.Yk(this.Mg, a);
				if (d != p)
					for (var e = 0; e < d.Nh.length; e++) {
						var f = d.Nh[e];
						if (c == f.yh) {
							f == d.Jy && !d.Ky && (d.Ky = m);
							R.Qn(d.Nh, e);
							d.Cv >= e && d.Cv--;
							0 == d.Nh.length && (this.Hg == d ? this.pl = m : this.DK(d));
							break
						}
					}
			}
		},
		Ev : function (a) {
			a != p && (a = R.Yk(this.Mm, a), a != p && (this.ED ? a.Tl.xn = m : this.YC(a.Tl)))
		},
		OY : function (a) {
			if (a != p) {
				var c = R.Yk(this.Mg,
						a);
				c && (!c.Ky && R.mm(c.Nh, c.Jy) && (c.Ky = m), c.Nh.length = 0, this.Hg == c ? this.pl = m : this.DK(c));
				this.Ev(a)
			}
		},
		Rz : function () {
			this.ega(R.CA)
		},
		ega : function (a) {
			var c;
			for (c = 0; c < this.Mg.length; c++)
				this.OY(this.Mg[c].target);
			if (0 > a)
				for (c = 0; c < this.zj.length; c++)
					this.Ev(this.zj[c].target);
			if (0 >= a)
				for (c = 0; c < this.vk.length; c++)
					this.Ev(this.vk[c].target);
			for (c = 0; c < this.Bi.length; c++)
				this.Bi[c].ZW >= a && this.Ev(this.Bi[c].target)
		},
		oya : function () {
			return this.bca(R.CA)
		},
		bca : function (a) {
			var c = [],
			d,
			e;
			for (d = 0; d < this.Mg.length; d++)
				if (e =
						this.Mg[d])
					e.paused = m, c.push(e.target);
			if (0 > a)
				for (d = 0; d < this.zj.length; d++)
					if (e = this.zj[d])
						e.paused = m, c.push(e.target);
			if (0 >= a)
				for (d = 0; d < this.vk.length; d++)
					if (e = this.vk[d])
						e.paused = m, c.push(e.target);
			for (d = 0; d < this.Bi.length; d++)
				if (e = this.Bi[d])
					e.paused = m, c.push(e.target);
			return c
		},
		fda : function (a) {
			if (a)
				for (var c = 0; c < a.length; c++)
					this.as(a[c])
		},
		pz : function (a) {
			R.e(a != p, "Scheduler.pauseTarget():entry must be non nil");
			var c = R.Yk(this.Mg, a);
			c && (c.paused = m);
			if (a = R.Yk(this.Mm, a))
				R.e(a.Tl != p, "Scheduler.pauseTarget():entry must be non nil"),
				a.Tl.paused = m
		},
		as : function (a) {
			R.e(a != p, "");
			var c = R.Yk(this.Mg, a);
			c && (c.paused = q);
			if (a = R.Yk(this.Mm, a))
				R.e(a.Tl != p, "Scheduler.resumeTarget():entry must be non nil"), a.Tl.paused = q
		},
		eva : function (a) {
			R.e(a != p, "Scheduler.isTargetPaused():target must be non nil");
			return (a = R.Yk(this.Mg, a)) ? a.paused : q
		}
	});
R.IA = {
	IMAGE : ["png", "jpg", "bmp", "jpeg", "gif"],
	SOUND : ["mp3", "ogg", "wav", "mp4", "m4a"],
	XML : ["plist", "xml", "fnt", "tmx", "tsx"],
	BINARY : ["ccbi"],
	FONT : "FONT",
	TEXT : ["txt", "vsh", "fsh", "json"],
	UNKNOW : []
};
R.dc = R.D.extend({
		rt : 0,
		ky : 0,
		zC : 0,
		Pq : p,
		oh : 1 / 60,
		li : p,
		GS : q,
		ctor : function () {
			this.Pq = []
		},
		FE : function (a, c, d) {
			R.e(a != p, "resources should not null");
			c && (this.yh = c, this.w = d);
			if (a != this.Pq || 0 == this.rt) {
				this.zC = this.rt = 0;
				if (a[0]instanceof Array)
					for (c = 0; c < a.length; c++)
						this.Pq = this.Pq.concat(a[c]);
				else
					this.Pq = a;
				this.ky = this.Pq.length
			}
			this.M5()
		},
		zda : z("GS"),
		mp : function (a) {
			R.log("cocos2d:Failed loading resource: " + a)
		},
		Li : function () {
			this.zC++
		},
		nE : function () {
			var a = 0;
			return a = 0 == this.ky ? 100 : 0 | 100 * (this.zC / this.ky)
		},
		Oca : function (a) {
			if (a && 0 < a.length)
				for (var c = R.fb.d(), d = R.$e.d(), e = R.Zi.d(), f = R.cc.d(), g, k = 0; k < a.length; k++) {
					g = a[k];
					var l = this.tS(g);
					switch (l) {
					case "IMAGE":
						c.Zca(g.src);
						break;
					case "SOUND":
						d.MY(g.src);
						break;
					case "XML":
						e.cga(g.src);
						break;
					case "BINARY":
						f.bga(g.src);
						break;
					case "TEXT":
						f.dga(g.src);
						break;
					case "FONT":
						break;
					default:
						b("cocos2d:unknown filename extension: " + l)
					}
				}
		},
		n5 : function () {
			this.FD();
			if (this.GS) {
				var a = R.o.d().dC;
				if (a != p && 20 > a) {
					R.log("cocos2d: frame rate less than 20 fps, skip frame.");
					return
				}
			}
			this.rt <
			this.ky && (this.I4(), this.rt++)
		},
		I4 : function () {
			var a = R.fb.d(),
			c = R.$e.d(),
			d = R.Zi.d(),
			e = R.cc.d(),
			f = this.Pq[this.rt],
			g = this.tS(f);
			switch (g) {
			case "IMAGE":
				a.Jd(f.src);
				break;
			case "SOUND":
				c.jv(f.src);
				break;
			case "XML":
				d.pca(f.src);
				break;
			case "BINARY":
				e.mca(f.src);
				break;
			case "TEXT":
				e.qca(f.src);
				break;
			case "FONT":
				this.x5(f);
				break;
			default:
				b("cocos2d:unknown filename extension: " + g)
			}
		},
		M5 : function () {
			var a = this;
			this.li = setInterval(function () {
					a.n5()
				}, 1E3 * this.oh)
		},
		J6 : function () {
			clearInterval(this.li)
		},
		tS : function (a) {
			if (a.Jr !=
				p)
				return R.IA.FONT;
			a = a.src;
			a = a.substring(a.lastIndexOf(".") + 1, a.length);
			var c = a.indexOf("?");
			0 < c && (a = a.substring(0, c));
			for (var d in R.IA)
				if (-1 != R.IA[d].indexOf(a))
					return d;
			return a
		},
		FD : function () {
			100 <= this.nE() && (this.J6(), this.t3())
		},
		t3 : function () {
			if (this.w && "string" == typeof this.yh)
				this.w[this.yh](this);
			else
				this.w && "function" == typeof this.yh ? this.yh.call(this.w, this) : this.yh(this);
			this.ky = this.zC = this.rt = 0
		},
		x5 : function (a) {
			var c = a.src,
			d = R.cc.d();
			if (c && 0 < c.length) {
				var e = document.createElement("style");
				e.type = "text/css";
				document.body.appendChild(e);
				for (var f = "@font-face { font-family:" + a.Jr + "; src:", g = 0; g < c.length; g++)
					f += "url('" + d.Kd(encodeURI(c[g].src)) + "') format('" + c[g].type + "')", f += g == c.length - 1 ? ";" : ",";
				e.textContent += f + "};";
				c = document.createElement("div");
				c.style.fontFamily = a.Jr;
				c.innerHTML = ".";
				c.style.position = "absolute";
				c.style.left = "-100px";
				c.style.top = "-100px";
				document.body.appendChild(c)
			}
			R.dc.d().Li()
		},
		sla : x()
	});
R.dc.qz = function (a, c, d) {
	this.Da || (this.Da = new R.dc);
	this.Da.FE(a, c, d);
	return this.Da
};
R.dc.xya = function (a, c, d) {
	this.Da || (this.Da = new R.dc);
	this.Da.zda(m);
	this.Da.FE(a, c, d);
	return this.Da
};
R.dc.rF = function (a) {
	this.Da && this.Da.Oca(a)
};
R.dc.d = function () {
	this.Da || (this.Da = new R.dc);
	return this.Da
};
R.dc.Da = p;
R.hH = R.fl.extend({
		CC : p,
		Qt : p,
		vD : p,
		Gw : p,
		Cd : p,
		xk : p,
		ctor : function () {
			R.fl.prototype.ctor.call(this);
			this.xk = R.o.d().$
		},
		m : function () {
			R.fl.prototype.m.call(this);
			var a = R.b(this.xk.width / 2, this.xk.height / 2);
			this.Qt = new Image;
			var c = this;
			this.Qt.addEventListener("load", function () {
				c.o4(a);
				this.removeEventListener("load", arguments.callee, q)
			});
			this.Qt.src = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k\x3d";
			this.Qt.width = 160;
			this.Qt.height = 200;
			this.Gw = R.Wc.create(R.QL(32, 32, 32, 255));
			this.Gw.q(0, 0);
			this.I(this.Gw, 0);
			this.Cd = R.ka.create("Loading... 0%", "Arial", 14);
			this.Cd.L(R.Gy(180, 180, 180));
			this.Cd.U(0);
			this.Cd.q(R.ug(a, R.b(0, -110)));
			this.Gw.I(this.Cd, 10)
		},
		o4 : function (a) {
			this.vD = new R.Eb;
			this.vD.vf(this.Qt);
			this.vD.Ue();
			this.CC = R.t.Fh(this.vD);
			this.CC.q(a);
			this.Gw.I(this.CC, 10);
			this.L4()
		},
		sa : function () {
			R.r.prototype.sa.call(this);
			this.ds(this.CT, 0.3)
		},
		ub : function () {
			R.r.prototype.ub.call(this);
			this.Cd.sc("Loading... 0%")
		},
		FE : function (a, c, d) {
			this.bda = a;
			this.pda = c;
			this.target = d
		},
		CT : function () {
			this.yp(this.CT);
			R.dc.qz(this.bda, this.pda, this.target);
			this.ds(this.FD)
		},
		L4 : function () {
			var a = R.Vh.create(R.Tn.create(R.Sh.create(0.25, R.b(0, 10))), R.ws.create(0.5)),
			c = R.La.create(R.Bc.create(0.15), a.A());
			this.CC.ab(a);
			this.Cd.ab(c)
		},
		FD : function () {
			var a = R.dc.d().nE();
			this.Cd.sc("Loading... " + a + "%");
			100 <= a && this.yp(this.FD)
		}
	});
R.hH.qz = function (a, c, d) {
	this.Da || (this.Da = new R.hH, this.Da.m());
	this.Da.FE(a, c, d);
	a = R.o.d();
	a.Jc ? a.wN(this.Da) : a.ida(this.Da);
	return this.Da
};
R.RG = R.D.extend({
		Ga : p,
		nBa : z("Ga"),
		Wra : C("Ga"),
		ctor : z("Ga"),
		$L : function () {
			R.log("DrawingPrimitive.drawPoint() not implement!")
		},
		TU : function () {
			R.log("DrawingPrimitive.drawPoints() not implement!")
		},
		Ck : function () {
			R.log("DrawingPrimitive.drawLine() not implement!")
		},
		VU : function () {
			R.log("DrawingPrimitive.drawRect() not implement!")
		},
		cM : function () {
			R.log("DrawingPrimitive.drawSolidRect() not implement!")
		},
		Ce : function () {
			R.log("DrawingPrimitive.drawPoly() not implement!")
		},
		cE : function () {
			R.log("DrawingPrimitive.drawSolidPoly() not implement!")
		},
		QU : function () {
			R.log("DrawingPrimitive.drawCircle() not implement!")
		},
		UU : function () {
			R.log("DrawingPrimitive.drawQuadBezier() not implement!")
		},
		RU : function () {
			R.log("DrawingPrimitive.drawCubicBezier() not implement!")
		},
		PU : function () {
			R.log("DrawingPrimitive.drawCardinalSpline() not implement!")
		},
		bE : function () {
			R.log("DrawingPrimitive.drawCardinalSpline() not implement!")
		}
	});
R.R_ = R.RG.extend({
		$L : function (a, c) {
			c || (c = 1);
			var d = R.b(a.x * R.xa(), a.y * R.xa());
			this.Ga.beginPath();
			this.Ga.arc(d.x, -d.y, c * R.xa(), 0, 2 * Math.PI, q);
			this.Ga.closePath();
			this.Ga.fill()
		},
		TU : function (a, c, d) {
			if (a != p) {
				d || (d = 1);
				this.Ga.beginPath();
				for (c = 0; c < a.length; c++)
					this.Ga.arc(a[c].x * R.xa(), -a[c].y * R.xa(), d * R.xa(), 0, 2 * Math.PI, q);
				this.Ga.closePath();
				this.Ga.fill()
			}
		},
		Ck : function (a, c) {
			this.Ga.beginPath();
			this.Ga.moveTo(a.x * R.xa(), -a.y * R.xa());
			this.Ga.lineTo(c.x * R.xa(), -c.y * R.xa());
			this.Ga.closePath();
			this.Ga.stroke()
		},
		VU : function (a, c) {
			this.Ck(R.b(a.x, a.y), R.b(c.x, a.y));
			this.Ck(R.b(c.x, a.y), R.b(c.x, c.y));
			this.Ck(R.b(c.x, c.y), R.b(a.x, c.y));
			this.Ck(R.b(a.x, c.y), R.b(a.x, a.y))
		},
		cM : function (a, c, d) {
			a = [a, R.b(c.x, a.y), c, R.b(a.x, c.y)];
			this.cE(a, 4, d)
		},
		Ce : function (a, c, d, e) {
			"undefined" == e && (e = q);
			if (a != p) {
				3 > a.length && b(Error("Polygon's point must greater than 2"));
				c = a[0];
				this.Ga.beginPath();
				this.Ga.moveTo(c.x * R.xa(), -c.y * R.xa());
				for (c = 1; c < a.length; c++)
					this.Ga.lineTo(a[c].x * R.xa(), -a[c].y * R.xa());
				d && this.Ga.closePath();
				e ? this.Ga.fill() :
				this.Ga.stroke()
			}
		},
		cE : function (a, c, d) {
			this.HX(d.i, d.h, d.c, d.g);
			this.Ce(a, c, m, m)
		},
		QU : function (a, c, d, e, f) {
			this.Ga.beginPath();
			this.Ga.arc(0 | a.x, 0 | -a.y, c, -d,  - (d - 2 * Math.PI), q);
			f && this.Ga.lineTo(0 | a.x, 0 | -a.y);
			this.Ga.stroke()
		},
		UU : function (a, c, d, e) {
			for (var f = [], g = 0, k = 0; k < e; k++) {
				var l = Math.pow(1 - g, 2) * a.y + 2 * (1 - g) * g * c.y + g * g * d.y;
				f.push(R.b((Math.pow(1 - g, 2) * a.x + 2 * (1 - g) * g * c.x + g * g * d.x) * R.xa(), l * R.xa()));
				g += 1 / e
			}
			f.push(R.b(d.x * R.xa(), d.y * R.xa()));
			this.Ce(f, e + 1, q, q)
		},
		RU : function (a, c, d, e, f) {
			for (var g = [], k = 0, l = 0; l <
				f; l++) {
				var n = Math.pow(1 - k, 3) * a.y + 3 * Math.pow(1 - k, 2) * k * c.y + 3 * (1 - k) * k * k * d.y + k * k * k * e.y;
				g.push(R.b((Math.pow(1 - k, 3) * a.x + 3 * Math.pow(1 - k, 2) * k * c.x + 3 * (1 - k) * k * k * d.x + k * k * k * e.x) * R.xa(), n * R.xa()));
				k += 1 / f
			}
			g.push(R.b(e.x * R.xa(), e.y * R.xa()));
			this.Ce(g, f + 1, q, q)
		},
		PU : function (a, c) {
			this.bE(a, 0.5, c)
		},
		bE : function (a, c, d) {
			R.u.strokeStyle = "rgba(255,255,255,1)";
			for (var e = [], f, g, k = 1 / a.length, l = 0; l < d + 1; l++)
				g = l / d, 1 == g ? (f = a.length - 1, g = 1) : (f = 0 | g / k, g = (g - k * f) / k), f = R.JG(R.Fj(a, f - 1), R.Fj(a, f - 0), R.Fj(a, f + 1), R.Fj(a, f + 2), c, g), e.push(f);
			this.Ce(e, d + 1, q, q)
		},
		drawImage : function (a, c, d, e, f) {
			switch (arguments.length) {
			case 2:
				this.Ga.drawImage(a, c.x,  - (c.y + a.height));
				break;
			case 3:
				this.Ga.drawImage(a, c.x,  - (c.y + d.height), d.width, d.height);
				break;
			case 5:
				this.Ga.drawImage(a, c.x, c.y, d.width, d.height, e.x,  - (e.y + f.height), f.width, f.height);
				break;
			default:
				b(Error("Argument must be non-nil"))
			}
		},
		V8 : function (a, c, d) {
			a = a || this.Ga;
			d instanceof R.Uc && (d = new R.mc(0 | 255 * d.i, 0 | 255 * d.h, 0 | 255 * d.c));
			d = "rgba(" + d.i + "," + d.h + "," + d.c;
			a.fillStyle = d + ",1)";
			var e = c / 10;
			a.beginPath();
			a.moveTo(-c, c);
			a.lineTo(0, e);
			a.lineTo(c, c);
			a.lineTo(e, 0);
			a.lineTo(c, -c);
			a.lineTo(0, -e);
			a.lineTo(-c, -c);
			a.lineTo(-e, 0);
			a.lineTo(-c, c);
			a.closePath();
			a.fill();
			var f = a.createRadialGradient(0, 0, e, 0, 0, c);
			f.addColorStop(0, d + ", 1)");
			f.addColorStop(0.3, d + ", 0.8)");
			f.addColorStop(1, d + ", 0.0)");
			a.fillStyle = f;
			a.beginPath();
			a.arc(0, 0, c - e, 0, R.VP, q);
			a.closePath();
			a.fill()
		},
		T8 : function (a, c, d) {
			a = a || this.Ga;
			d instanceof R.Uc && (d = new R.mc(0 | 255 * d.i, 0 | 255 * d.h, 0 | 255 * d.c));
			d = "rgba(" + d.i + "," + d.h + "," + d.c;
			var e = a.createRadialGradient(0,
					0, c / 10, 0, 0, c);
			e.addColorStop(0, d + ", 1)");
			e.addColorStop(0.3, d + ", 0.8)");
			e.addColorStop(0.6, d + ", 0.4)");
			e.addColorStop(1, d + ", 0.0)");
			a.fillStyle = e;
			a.beginPath();
			a.arc(0, 0, c, 0, R.VP, q);
			a.closePath();
			a.fill()
		},
		fillText : function (a, c, d) {
			this.Ga.fillText(a, c, -d)
		},
		GX : function (a, c, d, e) {
			this.Ga.fillStyle = "rgba(" + a + "," + c + "," + d + "," + e / 255 + ")";
			this.Ga.strokeStyle = "rgba(" + a + "," + c + "," + d + "," + e / 255 + ")"
		},
		HX : function (a, c, d, e) {
			this.Ga.fillStyle = "rgba(" + (0 | 255 * a) + "," + (0 | 255 * c) + "," + (0 | 255 * d) + "," + e + ")";
			this.Ga.strokeStyle =
				"rgba(" + (0 | 255 * a) + "," + (0 | 255 * c) + "," + (0 | 255 * d) + "," + e + ")"
		},
		Qea : x(),
		yea : function (a) {
			this.Ga.lineWidth = a
		}
	});
R.S_ = R.RG.extend({
		NJ : q,
		Xb : p,
		nl : -1,
		Fa : p,
		oK : -1,
		nK : -1,
		ctor : function (a) {
			a == p && (a = R.u);
			!a instanceof WebGLRenderingContext && b("Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext");
			R.RG.prototype.ctor.call(this, a);
			this.Fa = new R.Uc(1, 1, 1, 1)
		},
		wn : function () {
			this.NJ || (this.Xb = R.Ad.d().Tc(R.IH), this.nl = this.Ga.getUniformLocation(this.Xb.Pr(), "u_color"), this.oK = this.Ga.getUniformLocation(this.Xb.Pr(), "u_pointSize"), this.NJ = m)
		},
		bna : function () {
			this.NJ = q
		},
		$L : function (a) {
			this.wn();
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4), 1);
			this.Xb.Ez(this.oK, this.nK);
			var c = this.Ga,
			d = c.createBuffer();
			c.bindBuffer(c.ARRAY_BUFFER, d);
			c.bufferData(c.ARRAY_BUFFER, new Float32Array([a.x, a.y]), c.STATIC_DRAW);
			c.vertexAttribPointer(R.fc, 2, c.FLOAT, q, 0, 0);
			c.drawArrays(c.POINTS, 0, 1);
			c.deleteBuffer(d);
			R.Qh()
		},
		TU : function (a) {
			if (a && 0 != a.length) {
				this.wn();
				this.Xb.Sd();
				this.Xb.hh();
				R.Ld(R.Gf);
				this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4), 1);
				this.Xb.Ez(this.oK, this.nK);
				var c = this.Ga,
				d = c.createBuffer();
				c.bindBuffer(c.ARRAY_BUFFER, d);
				c.bufferData(c.ARRAY_BUFFER, this.SC(a), c.STATIC_DRAW);
				c.vertexAttribPointer(R.fc, 2, c.FLOAT, q, 0, 0);
				c.drawArrays(c.POINTS, 0, a.length);
				c.deleteBuffer(d);
				R.Qh()
			}
		},
		SC : function (a) {
			for (var c = new Float32Array(2 * a.length), d = 0; d < a.length; d++)
				c[2 * d] = a[d].x, c[2 * d + 1] = a[d].y;
			return c
		},
		Ck : function (a, c) {
			this.wn();
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4), 1);
			var d = this.Ga,
			e = d.createBuffer();
			d.bindBuffer(d.ARRAY_BUFFER,
				e);
			d.bufferData(d.ARRAY_BUFFER, this.SC([a, c]), d.STATIC_DRAW);
			d.vertexAttribPointer(R.fc, 2, d.FLOAT, q, 0, 0);
			d.drawArrays(d.LINES, 0, 2);
			d.deleteBuffer(e);
			R.Qh()
		},
		VU : function (a, c) {
			this.Ck(R.b(a.x, a.y), R.b(c.x, a.y));
			this.Ck(R.b(c.x, a.y), R.b(c.x, c.y));
			this.Ck(R.b(c.x, c.y), R.b(a.x, c.y));
			this.Ck(R.b(a.x, c.y), R.b(a.x, a.y))
		},
		cM : function (a, c, d) {
			a = [a, R.b(c.x, a.y), c, R.b(a.x, c.y)];
			this.cE(a, 4, d)
		},
		Ce : function (a, c, d) {
			this.wn();
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4),
				1);
			c = this.Ga;
			var e = c.createBuffer();
			c.bindBuffer(c.ARRAY_BUFFER, e);
			c.bufferData(c.ARRAY_BUFFER, this.SC(a), c.STATIC_DRAW);
			c.vertexAttribPointer(R.fc, 2, c.FLOAT, q, 0, 0);
			d ? c.drawArrays(c.LINE_LOOP, 0, a.length) : c.drawArrays(c.LINE_STRIP, 0, a.length);
			c.deleteBuffer(e);
			R.Qh()
		},
		cE : function (a, c, d) {
			this.wn();
			d || (d = this.Fa);
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(d.hc, 0, 4), 1);
			c = this.Ga;
			d = c.createBuffer();
			c.bindBuffer(c.ARRAY_BUFFER, d);
			c.bufferData(c.ARRAY_BUFFER, this.SC(a), c.STATIC_DRAW);
			c.vertexAttribPointer(R.fc, 2, c.FLOAT, q, 0, 0);
			c.drawArrays(c.TRIANGLE_FAN, 0, a.length);
			c.deleteBuffer(d);
			R.Qh()
		},
		QU : function (a, c, d, e, f) {
			this.wn();
			var g = 1;
			f && g++;
			var k = 2 * Math.PI / e;
			if (f = new Float32Array(2 * (e + 2))) {
				for (var l = 0; l <= e; l++) {
					var n = l * k,
					r = c * Math.sin(n + d) + a.y;
					f[2 * l] = c * Math.cos(n + d) + a.x;
					f[2 * l + 1] = r
				}
				f[2 * (e + 1)] = a.x;
				f[2 * (e + 1) + 1] = a.y;
				this.Xb.Sd();
				this.Xb.hh();
				R.Ld(R.Gf);
				this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4), 1);
				a = this.Ga;
				c = a.createBuffer();
				a.bindBuffer(a.ARRAY_BUFFER, c);
				a.bufferData(a.ARRAY_BUFFER,
					f, a.STATIC_DRAW);
				a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, 0, 0);
				a.drawArrays(a.LINE_STRIP, 0, e + g);
				a.deleteBuffer(c);
				R.Qh()
			}
		},
		UU : function (a, c, d, e) {
			this.wn();
			for (var f = new Float32Array(2 * (e + 1)), g = 0, k = 0; k < e; k++)
				f[2 * k] = Math.pow(1 - g, 2) * a.x + 2 * (1 - g) * g * c.x + g * g * d.x, f[2 * k + 1] = Math.pow(1 - g, 2) * a.y + 2 * (1 - g) * g * c.y + g * g * d.y, g += 1 / e;
			f[2 * e] = d.x;
			f[2 * e + 1] = d.y;
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4), 1);
			a = this.Ga;
			c = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, c);
			a.bufferData(a.ARRAY_BUFFER,
				f, a.STATIC_DRAW);
			a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, 0, 0);
			a.drawArrays(a.LINE_STRIP, 0, e + 1);
			a.deleteBuffer(c);
			R.Qh()
		},
		RU : function (a, c, d, e, f) {
			this.wn();
			for (var g = new Float32Array(2 * (f + 1)), k = 0, l = 0; l < f; l++)
				g[2 * l] = Math.pow(1 - k, 3) * a.x + 3 * Math.pow(1 - k, 2) * k * c.x + 3 * (1 - k) * k * k * d.x + k * k * k * e.x, g[2 * l + 1] = Math.pow(1 - k, 3) * a.y + 3 * Math.pow(1 - k, 2) * k * c.y + 3 * (1 - k) * k * k * d.y + k * k * k * e.y, k += 1 / f;
			g[2 * f] = e.x;
			g[2 * f + 1] = e.y;
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc, 0, 4), 1);
			a = this.Ga;
			c = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, c);
			a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW);
			a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, 0, 0);
			a.drawArrays(a.LINE_STRIP, 0, f + 1);
			a.deleteBuffer(c);
			R.Qh()
		},
		PU : function (a, c) {
			this.bE(a, 0.5, c)
		},
		bE : function (a, c, d) {
			this.wn();
			for (var e = new Float32Array(2 * (d + 1)), f, g, k = 1 / a.length, l = 0; l < d + 1; l++)
				g = l / d, 1 == g ? (f = a.length - 1, g = 1) : (f = 0 | g / k, g = (g - k * f) / k), f = R.JG(R.Fj(a, f - 1), R.Fj(a, f), R.Fj(a, f + 1), R.Fj(a, f + 2), c, g), e[2 * l] = f.x, e[2 * l + 1] = f.y;
			this.Xb.Sd();
			this.Xb.hh();
			R.Ld(R.Gf);
			this.Xb.Jn(this.nl, new Float32Array(this.Fa.hc,
					0, 4), 1);
			a = this.Ga;
			c = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, c);
			a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
			a.vertexAttribPointer(R.fc, 2, a.FLOAT, q, 0, 0);
			a.drawArrays(a.LINE_STRIP, 0, d + 1);
			a.deleteBuffer(c);
			R.Qh()
		},
		GX : function (a, c, d, e) {
			this.Fa.i = a / 255;
			this.Fa.h = c / 255;
			this.Fa.c = d / 255;
			this.Fa.g = e / 255
		},
		HX : function (a, c, d, e) {
			this.Fa.i = a;
			this.Fa.h = c;
			this.Fa.c = d;
			this.Fa.g = e
		},
		Qea : function (a) {
			this.nK = a * R.xa()
		},
		yea : function (a) {
			this.Ga.lineWidth && this.Ga.lineWidth(a)
		}
	});
R.VP = 2 * Math.PI;
R.TA = {
	kka : 0,
	nia : 1,
	oia : 2,
	Cga : 3,
	eia : 4,
	dia : 5,
	Qga : 6,
	Aia : 7,
	Lha : 8,
	GP : 100,
	UP : 101
};
R.Jia = 0;
R.Kia = 1;
R.Hia = 2;
R.Iia = 3;
R.Ab = 0;
R.Ya = 1;
R.Se = p;
R.u = p;
R.canvas = p;
R.k9 = p;
R.T = R.Ab;
R.qba = R.size(0, 0);
window.xN = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
window.console || (window.console = {}, window.console.log = x(), window.console.assert = x());
R.KM = q;
R.Efa = function (a) {
	var c,
	d;
	function e() {
		document[f] || R.o.d().K5()
	}
	a = R.Wb(a) || R.Wb("#" + a);
	"CANVAS" == a.tagName ? (c = c || a.width, d = d || a.height, R.qg = R.jm("DIV"), R.canvas = a, R.canvas.parentNode.insertBefore(R.qg, R.canvas), R.canvas.tr(R.qg), R.qg.style.width = (c || 480) + "px", R.qg.style.height = (d || 320) + "px", R.qg.setAttribute("id", "Cocos2dGameContainer"), R.canvas.setAttribute("width", c || 480), R.canvas.setAttribute("height", d || 320)) : ("DIV" != a.tagName && R.log("Warning: target element is not a DIV or CANVAS"), c = c || a.clientWidth,
		d = d || a.clientHeight, R.canvas = R.jm("CANVAS"), R.canvas.XT("gameCanvas"), R.canvas.setAttribute("width", c || 480), R.canvas.setAttribute("height", d || 320), R.qg = a, a.appendChild(R.canvas), R.qg.style.width = (c || 480) + "px", R.qg.style.height = (d || 320) + "px");
	R.qg.style.position = "relative";
	R.qg.style.overflow = "hidden";
	R.qg.top = "100%";
	if (!R.tI) {
		R.ua.tc && (R.u = R.aDa = R.wU(R.canvas, {
					stencil : m,
					preserveDrawingBuffer : m,
					alpha : q
				}));
		R.u ? (R.T = R.Ya, window.Rta = R.u, R.Se = new R.S_(R.u), R.fb.d().v4()) : (R.u = R.canvas.getContext("2d"),
			R.Gaa = R.u, R.T = R.Ab, R.u.translate(0, R.canvas.height), R.Se = new R.R_(R.u));
		R.qba = R.size(R.canvas.width, R.canvas.height);
		R.k9 = R.qg;
		R.log(R.mA);
		R.bf.d();
		R.Qda();
		R.ua.$l && (R.T2(), R.N2());
		var f,
		g;
		"undefined" !== typeof document.hidden ? (f = "hidden", g = "visibilitychange") : "undefined" !== typeof document.lxa ? (f = "mozHidden", g = "mozvisibilitychange") : "undefined" !== typeof document.mxa ? (f = "msHidden", g = "msvisibilitychange") : "undefined" !== typeof document.bDa && (f = "webkitHidden", g = "webkitvisibilitychange");
		"undefined" ===
		typeof document.addEventListener || "undefined" === typeof f ? R.KM = q : (R.KM = m, document.addEventListener(g, e, q))
	}
};
R.T2 = function () {
	var a = document.createElement("style");
	a.type = "text/css";
	document.body.appendChild(a);
	a.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}"
};
R.N2 = function () {
	var a = document.createElement("div");
	a.id = "bottom";
	a.style.border = a.style.margin = a.style.padding = a.style.height = a.style.lineHeight = a.style.fontSize = "0px";
	document.body.appendChild(a);
	window.location.href = "#bottom"
};
R.HS = q;
R.Qda = function () {
	R.HS = q;
	R.canvas.oncontextmenu = R.HS ? x() : M(q)
};
R.On = R.D.extend({
		oh : p,
		ctor : function () {
			this.oh = 0;
			R.e(!R.mD, "CCApplication ctor");
			R.mD = this
		},
		xz : z("oh"),
		pCa : function (a) {
			a && R.rect(0, 0, 0, 0)
		},
		e$ : function () {
			return R.ua.$l ? R.TA.GP : R.TA.UP
		},
		hda : function () {
			if (!this.E7())
				return 0;
			var a,
			c = R.o.d(),
			d = window;
			d.xN && this.oh == 1 / 60 ? (a = function () {
				c.zW();
				d.xN(a)
			}, d.xN(a)) : (a = function () {
				c.zW()
			}, setInterval(a, 1E3 * this.oh));
			return 0
		}
	});
R.On.d = function () {
	R.e(R.mD, "sharedApplication");
	return R.mD
};
R.On.Soa = function () {
	var a = R.J0,
	c = navigator.language;
	c || (c = navigator.browserLanguage || navigator.UCa);
	if (!c)
		return a;
	c = c.toLowerCase();
	switch (c) {
	case "zh-cn":
		a = R.I0;
		break;
	case "fr":
		a = R.K0;
		break;
	case "it":
		a = R.N0;
		break;
	case "de":
		a = R.L0;
		break;
	case "es":
		a = R.U0;
		break;
	case "ru":
		a = R.T0;
		break;
	case "ko":
		a = R.P0;
		break;
	case "ja":
		a = R.O0;
		break;
	case "hu":
		a = R.M0;
		break;
	case "pt":
		a = R.S0;
		break;
	case "ar":
		a = R.H0;
		break;
	case "no":
		a = R.Q0;
		break;
	case "pl":
		a = R.R0
	}
	return a
};
R.mD = p;
R.Zi = R.D.extend({
		cDa : p,
		ZS : p,
		su : p,
		PJ : p,
		ctor : function () {
			this.su = {};
			window.DOMParser ? (this.PJ = m, this.ZS = new DOMParser) : this.PJ = q
		},
		parse : function (a) {
			var c = a;
			a = this.hM(a);
			a = this.$S(a, c).documentElement;
			"plist" != a.tagName && b("cocos2d: " + c + " is not a plist file");
			for (var c = p, d = 0, e = a.childNodes.length; d < e && !(c = a.childNodes[d], 1 == c.nodeType); d++);
			return this.jK(c)
		},
		KY : function (a, c) {
			if (c == p || c === q)
				a = this.hM(a);
			return this.$S(a)
		},
		$S : function (a, c) {
			var d;
			this.PJ ? d = this.ZS.parseFromString(a, "text/xml") : (d = new ActiveXObject("Microsoft.XMLDOM"),
					d.async = "false", d.loadXML(a));
			d == p && R.log("cocos2d:xml " + c + " not found!");
			return d
		},
		jK : function (a) {
			var c = p;
			switch (a.tagName) {
			case "dict":
				c = this.c5(a);
				break;
			case "array":
				c = this.Y4(a);
				break;
			case "string":
				if (1 == a.childNodes.length)
					c = a.firstChild.nodeValue;
				else
					for (var c = "", d = 0; d < a.childNodes.length; d++)
						c += a.childNodes[d].nodeValue;
				break;
			case "false":
				c = q;
				break;
			case "true":
				c = m;
				break;
			case "real":
				c = parseFloat(a.firstChild.nodeValue);
				break;
			case "integer":
				c = parseInt(a.firstChild.nodeValue, 10)
			}
			return c
		},
		Y4 : function (a) {
			for (var c =
					[], d = 0, e = a.childNodes.length; d < e; d++) {
				var f = a.childNodes[d];
				1 == f.nodeType && c.push(this.jK(f))
			}
			return c
		},
		c5 : function (a) {
			for (var c = {}, d = p, e = 0, f = a.childNodes.length; e < f; e++) {
				var g = a.childNodes[e];
				1 == g.nodeType && ("key" == g.tagName ? d = g.firstChild.nodeValue : c[d] = this.jK(g))
			}
			return c
		},
		pca : function (a) {
			a = R.cc.d().Kd(a);
			if (window.XMLHttpRequest) {
				var c = new XMLHttpRequest;
				c.overrideMimeType && c.overrideMimeType("text/xml")
			}
			if (c != p) {
				var d = this;
				c.onreadystatechange = function () {
					4 == c.readyState && (c.responseText ? (R.dc.d().Li(),
							d.su[a] = c.responseText, c = p) : R.e("cocos2d:There was a problem retrieving the xml data:" + c.statusText))
				};
				c.open("GET", a, m);
				c.send(p)
			} else
				R.e("cocos2d:Your browser does not support XMLHTTP.")
		},
		cga : function (a) {
			this.su.hasOwnProperty(a) && delete this.su[a]
		},
		getName : function (a) {
			return a.substring(a.lastIndexOf("/", a.length) + 1, a.lastIndexOf(".", a.length))
		},
		Ipa : function (a) {
			return a.substring(a.lastIndexOf(".", a.length) + 1, a.length)
		},
		hM : function (a) {
			return this.su != p ? this.su[a] : p
		}
	});
R.Zi.d = function () {
	this.Da || (this.Da = new R.Zi);
	return this.Da
};
R.Zi.Da = p;
R.pG = R.D.extend({
		O8 : function () {
			R.On.d().hda();
			return m
		},
		Vla : function () {
			R.o.d().pause()
		},
		Ula : function () {
			R.o.d().lv()
		},
		D7 : function () {
			R.On.d().D7()
		},
		F7 : function () {
			R.On.d().F7()
		},
		Wla : x()
	});
R.pG.Gfa = function () {
	R.YF == p && (R.YF = new R.pG);
	R.e(R.YF, "shareAppController");
	return R.YF
};
R.YF = p;
R.s0 = 32;
R.HJ = R.s0;
R.iC = "Arial";
R.vS = q;
R.iP = 3233828865;
R.oB = 3233828866;
R.b1 = 8801;
R.B1 = 8802;
R.L_ = 8803;
R.Vd = R.Wa.extend({
		w : p,
		Iw : p,
		vx : q,
		mi : q,
		ctor : function () {
			R.Wa.prototype.ctor.call(this);
			this.Iw = this.w = p;
			this.mi = this.vx = q
		},
		LM : C("vx"),
		Rd : x(),
		Ij : M(q),
		jY : function (a, c) {
			this.w = c;
			this.Iw = a
		},
		isEnabled : C("mi"),
		Nc : z("mi"),
		Vu : function (a, c) {
			this.R(R.b(0.5, 0.5));
			this.w = c;
			this.Iw = a;
			this.mi = m;
			this.vx = q;
			return m
		},
		rect : function () {
			var a = this.Z,
			c = this.ea,
			d = this.nh;
			return R.rect(a.x - c.width * d.x, a.y - c.height * d.y, c.width, c.height)
		},
		selected : function () {
			this.vx = m
		},
		Rk : function () {
			this.vx = q
		},
		AX : function (a, c) {
			this.w = c;
			this.Iw =
				a
		},
		zy : function () {
			if (this.mi) {
				var a = this.w,
				c = this.Iw;
				if (c)
					if (a && "string" == typeof c)
						a[c](this);
					else
						a && "function" == typeof c ? c.call(a, this) : c(this)
			}
		}
	});
R.Vd.create = function (a, c) {
	var d = new R.Vd;
	d.Vu(a, c);
	return d
};
R.dw = R.Vd.extend({
		Yw : p,
		Cd : p,
		V4 : 0,
		HB : p,
		ctor : function () {
			R.Vd.prototype.ctor.call(this);
			this.Cd = this.Yw = p;
			this.V4 = 0;
			this.HB = p
		},
		ipa : C("Yw"),
		eAa : z("Yw"),
		oqa : C("Cd"),
		QX : function (a) {
			a && (this.I(a), a.R(R.b(0, 0)), this.ma(a.n()));
			this.Cd && this.removeChild(this.Cd, m);
			this.Cd = a
		},
		Nc : function (a) {
			if (this.mi != a) {
				var c = this.Cd;
				a ? c.L(this.HB) : (this.HB = c.Lb(), c.L(this.Yw))
			}
			R.Vd.prototype.Nc.call(this, a)
		},
		U : function (a) {
			this.Cd.U(a)
		},
		rg : function () {
			return this.Cd.rg()
		},
		L : function (a) {
			this.Cd.L(a)
		},
		Lb : function () {
			return this.Cd.Lb()
		},
		zM : function (a, c, d) {
			this.Vu(c, d);
			this.QC = 1;
			this.HB = R.Td();
			this.Yw = R.ce(126, 126, 126);
			this.QX(a);
			this.Fn(m);
			this.Gn(m);
			return m
		},
		sc : function (a) {
			this.Cd.sc(a);
			this.ma(this.Cd.n())
		},
		zy : function () {
			this.mi && (this.Bv(), this.jd(this.QC), R.Vd.prototype.zy.call(this))
		},
		selected : function () {
			if (this.mi) {
				R.Vd.prototype.selected.call(this);
				var a = this.jE(R.oB);
				a ? this.CY(a) : this.QC = this.qE();
				a = R.Ie.create(0.1, 1.2 * this.QC);
				a.up(R.oB);
				this.ab(a)
			}
		},
		Rk : function () {
			if (this.mi) {
				R.Vd.prototype.Rk.call(this);
				this.Pfa(R.oB);
				var a = R.Ie.create(0.1, this.QC);
				a.up(R.oB);
				this.ab(a)
			}
		}
	});
R.dw.create = function (a, c, d) {
	var e = new R.dw;
	e.zM(a, c, d);
	return e
};
R.JP = R.dw.extend({
		xd : function (a, c, d, e, f, g, k) {
			R.e(a != p && 0 != a.length, "value length must be greater than 0");
			var l = new R.He;
			l.xd(a, c, d, e, f);
			this.zM(l, g, k);
			return m
		}
	});
R.JP.create = function (a, c, d, e, f, g, k) {
	var l = new R.JP;
	l.xd(a, c, d, e, f, g, k);
	return l
};
R.Cs = R.dw.extend({
		sd : p,
		Bd : p,
		ctor : function () {
			R.dw.prototype.ctor.call(this);
			this.sd = 0;
			this.Bd = ""
		},
		xd : function (a, c, d) {
			R.e(a != p && 0 != a.length, "Value length must be greater than 0");
			this.Bd = R.iC;
			this.sd = R.HJ;
			a = R.ka.create(a, this.Bd, this.sd);
			this.zM(a, c, d);
			return m
		},
		Az : function (a) {
			this.sd = a;
			this.gT()
		},
		fontSize : C("sd"),
		KF : function (a) {
			this.Bd = a;
			this.gT()
		},
		Jr : C("Bd"),
		gT : function () {
			var a = R.ka.create(this.Cd.pn(), this.Bd, this.sd);
			this.QX(a)
		}
	});
R.Cs.Az = function (a) {
	R.HJ = a
};
R.Cs.fontSize = function () {
	return R.HJ
};
R.Cs.KF = function (a) {
	R.vS && (R.iC = "");
	R.iC = a;
	R.vS = m
};
R.Cs.Jr = function () {
	return R.iC
};
R.Cs.create = function (a, c, d) {
	var e = new R.Cs;
	e.xd(a, c, d);
	return e
};
R.kH = R.Vd.extend({
		lf : p,
		Vg : p,
		Ig : p,
		ctor : function () {
			R.Vd.prototype.ctor.call(this);
			this.Ig = this.Vg = this.lf = p
		},
		Wqa : C("lf"),
		WX : function (a) {
			this.lf != a && (a && (this.I(a, 0, R.b1), a.R(R.b(0, 0))), this.lf && this.removeChild(this.lf, m), this.lf = a, a.Qa ? (this.ma(this.lf.n()), this.lr()) : a.Uf(function (a) {
					this.ma(a.n());
					this.lr()
				}, this))
		},
		osa : C("Vg"),
		gY : function (a) {
			this.Vg != a && (a && (this.I(a, 0, R.B1), a.R(R.b(0, 0))), this.Vg && this.removeChild(this.Vg, m), this.Vg = a, a.Qa ? this.lr() : a.Uf(function () {
					this.lr()
				}, this))
		},
		jpa : C("Ig"),
		FX : function (a) {
			this.Ig != a && (a && (this.I(a, 0, R.L_), a.R(R.b(0, 0))), this.Ig && this.removeChild(this.Ig, m), this.Ig = a, a.Qa ? this.lr() : a.Uf(function () {
					this.lr()
				}, this))
		},
		RV : function (a, c, d, e, f) {
			this.Vu(e, f);
			this.WX(a);
			this.gY(c);
			this.FX(d);
			if (a = this.lf)
				a.Qa ? (this.ma(a.n()), this.Fn(m), this.Gn(m)) : a.Uf(function (a) {
					this.ma(a.n());
					this.Fn(m);
					this.Gn(m)
				}, this);
			return m
		},
		L : function (a) {
			this.lf.L(a);
			this.Vg && this.Vg.L(a);
			this.Ig && this.Ig.L(a)
		},
		Lb : function () {
			return this.lf.Lb()
		},
		U : function (a) {
			this.lf.U(a);
			this.Vg &&
			this.Vg.U(a);
			this.Ig && this.Ig.U(a)
		},
		rg : function () {
			return this.lf.rg()
		},
		selected : function () {
			R.Vd.prototype.selected.call(this);
			this.lf && (this.Ig && this.Ig.Aa(q), this.Vg ? (this.lf.Aa(q), this.Vg.Aa(m)) : this.lf.Aa(m))
		},
		Rk : function () {
			R.Vd.prototype.Rk.call(this);
			this.lf && (this.lf.Aa(m), this.Vg && this.Vg.Aa(q), this.Ig && this.Ig.Aa(q))
		},
		Nc : function (a) {
			this.mi != a && (R.Vd.prototype.Nc.call(this, a), this.lr())
		},
		lr : function () {
			var a = this.lf,
			c = this.Vg,
			d = this.Ig;
			this.mi ? (a && a.Aa(m), c && c.Aa(q), d && d.Aa(q)) : d ? (a && a.Aa(q),
				c && c.Aa(q), d && d.Aa(m)) : (a && a.Aa(m), c && c.Aa(q))
		}
	});
R.kH.create = function (a, c, d, e, f) {
	var g = arguments.length;
	a = arguments[0];
	c = arguments[1];
	var k,
	l,
	n,
	r = new R.kH;
	5 == g ? (k = arguments[2], n = arguments[3], l = arguments[4]) : 4 == g && "function" === typeof arguments[3] ? (k = arguments[2], n = arguments[3]) : 4 == g && "function" === typeof arguments[2] ? (l = arguments[3], n = arguments[2]) : 2 >= g && (k = arguments[2]);
	r.RV(a, c, k, n, l);
	return r
};
R.Ds = R.kH.extend({
		Fea : function (a) {
			this.WX(R.t.Cr(a))
		},
		bfa : function (a) {
			this.gY(R.t.Cr(a))
		},
		Uda : function (a) {
			this.FX(R.t.Cr(a))
		},
		J$ : function (a, c, d, e, f) {
			var g = p,
			k = p,
			l = p;
			a && (g = R.t.create(a));
			c && (k = R.t.create(c));
			d && (l = R.t.create(d));
			return this.RV(g, k, l, e, f)
		}
	});
R.Ds.create = function (a, c, d, e, f) {
	if (0 == arguments.length)
		return R.Ds.create(p, p, p, p, p);
	if (3 == arguments.length)
		return R.Ds.create(a, c, p, d, p);
	if (4 == arguments.length)
		return R.Ds.create(a, c, p, d, e);
	var g = new R.Ds;
	return g.J$(a, c, d, e, f) ? g : p
};
R.LP = R.Vd.extend({
		tk : 0,
		xe : p,
		Hc : p,
		Fa : p,
		ctor : function () {
			R.Vd.prototype.ctor.call(this);
			this.tk = 0;
			this.xe = [];
			this.Hc = 0;
			this.Fa = R.Td()
		},
		rg : C("Hc"),
		U : function (a) {
			this.Hc = a;
			if (this.xe && 0 < this.xe.length)
				for (var c = 0; c < this.xe.length; c++)
					this.xe[c].U(a)
		},
		Lb : C("Fa"),
		L : function (a) {
			this.Fa = a;
			if (this.xe && 0 < this.xe.length)
				for (var c = 0; c < this.xe.length; c++)
					this.xe[c].L(a)
		},
		psa : C("tk"),
		QN : function (a) {
			if (a != this.tk) {
				this.tk = a;
				(a = this.Ej(R.iP)) && a.qp(q);
				a = this.xe[this.tk];
				this.I(a, 0, R.iP);
				var c = a.n();
				this.ma(c);
				a.q(c.width /
					2, c.height / 2)
			}
		},
		Vsa : C("xe"),
		FBa : z("xe"),
		Wu : function (a) {
			var c = a.length;
			"function" === typeof a[a.length - 2] ? (this.Vu(a[a.length - 2], a[a.length - 1]), c -= 2) : "function" === typeof a[a.length - 1] ? (this.Vu(a[a.length - 1], p), c -= 1) : this.Vu(p, p);
			this.xe = [];
			for (var d = 0; d < c; d++)
				a[d] && this.xe.push(a[d]);
			this.tk = R.yR;
			this.QN(0);
			this.Fn(m);
			this.Gn(m);
			return m
		},
		Ola : function (a) {
			this.xe.push(a)
		},
		zy : function () {
			this.mi && this.QN((this.tk + 1) % this.xe.length);
			R.Vd.prototype.zy.call(this)
		},
		selected : function () {
			R.Vd.prototype.selected.call(this);
			this.xe[this.tk].selected()
		},
		Rk : function () {
			R.Vd.prototype.Rk.call(this);
			this.xe[this.tk].Rk()
		},
		Nc : function (a) {
			if (this.mi != a) {
				R.Vd.prototype.Nc.call(this, a);
				var c = this.xe;
				if (c && 0 < c.length)
					for (var d = 0; d < c.length; d++)
						c[d].Nc(a)
			}
		},
		xza : function () {
			return this.xe[this.tk]
		},
		sa : function () {
			R.r.prototype.sa.call(this);
			this.QN(this.tk)
		}
	});
R.LP.create = function () {
	0 < arguments.length && arguments[arguments.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
	var a = new R.LP;
	a.Wu(arguments);
	return a
};
R.cw = 0;
R.bw = 1;
R.Z0 = -128;
R.iA = 5;
R.iH = R.Tj.extend({
		Fa : p,
		Kg : q,
		Hc : 0,
		Zd : p,
		Hd : -1,
		ctor : function () {
			R.Tj.prototype.ctor.call(this);
			this.Fa = R.Td();
			this.Kg = q;
			this.Hc = 255;
			this.Zd = p;
			this.Hd = -1
		},
		Lb : C("Fa"),
		L : function (a) {
			this.Fa = a;
			var c = this.k;
			if (c && 0 < c.length)
				for (var d = 0; d < c.length; d++)
					c[d].L(a)
		},
		rg : C("Hc"),
		U : function (a) {
			this.Hc = a;
			var c = this.k;
			if (c && 0 < c.length)
				for (var d = 0; d < c.length; d++)
					c[d].U(a)
		},
		isEnabled : C("Kg"),
		Nc : z("Kg"),
		Wu : function (a) {
			var c = [];
			if (a)
				for (var d = 0; d < a.length; d++)
					a[d] && c.push(a[d]);
			return this.NV(c)
		},
		NV : function (a) {
			if (this.m()) {
				this.mY(R.Z0);
				this.vfa(R.g2);
				this.xf(m);
				this.Kg = m;
				var c = R.o.d().$;
				this.Gi(m);
				this.R(R.b(0.5, 0.5));
				this.ma(c);
				this.q(c.width / 2, c.height / 2);
				if (a)
					for (c = 0; c < a.length; c++)
						this.I(a[c], c);
				this.Zd = p;
				this.Hd = R.cw;
				this.Fn(m);
				this.Gn(m);
				return m
			}
			return q
		},
		I : function (a, c, d) {
			R.e(a instanceof R.Vd, "Menu only supports MenuItem objects as children");
			R.ne.prototype.I.call(this, a, c, d)
		},
		B7 : function () {
			this.FL(R.iA)
		},
		FL : function (a) {
			var c = -a,
			d = this.k,
			e,
			f,
			g,
			k;
			if (d && 0 < d.length) {
				f = 0;
				for (e = d.length; f < e; f++)
					c += d[f].n().height * d[f].ra + a;
				var l = c / 2;
				f = 0;
				for (e = d.length; f < e; f++)
					k = d[f], g = k.n().height, c = k.ra, k.q(0, l - g * c / 2), l -= g * c + a
			}
		},
		y7 : function () {
			this.EL(R.iA)
		},
		EL : function (a) {
			var c = -a,
			d = this.k,
			e,
			f,
			g,
			k;
			if (d && 0 < d.length) {
				e = 0;
				for (f = d.length; e < f; e++)
					c += d[e].n().width * d[e].ia + a;
				var l = -c / 2;
				e = 0;
				for (f = d.length; e < f; e++)
					k = d[e], c = k.ia, g = d[e].n().width, k.q(l + g * c / 2, 0), l += g * c + a
			}
		},
		z7 : function () {
			0 < arguments.length && arguments[arguments.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
			for (var a = [], c = 0; c < arguments.length; c++)
				a.push(arguments[c]);
			var d = -5,
			e = 0,
			f = 0,
			g = 0,
			k,
			l,
			n,
			r = this.k;
			if (r && 0 < r.length) {
				c = 0;
				for (n = r.length; c < n; c++)
					R.e(e < a.length, ""), k = a[e], R.e(k, ""), l = r[c].n().height, f = f >= l || isNaN(l) ? f : l, ++g, g >= k && (d += f + 5, f = g = 0, ++e)
			}
			R.e(!g, "");
			var s = R.o.d().$,
			t = k = f = e = 0,
			v = 0,
			d = d / 2;
			if (r && 0 < r.length) {
				c = 0;
				for (n = r.length; c < n; c++) {
					var w = r[c];
					0 == k && (k = a[e], v = t = s.width / (1 + k));
					l = w.n().height;
					f = f >= l || isNaN(l) ? f : l;
					w.q(v - s.width / 2, d - l / 2);
					v += t;
					++g;
					g >= k && (d -= f + 5, f = k = g = 0, ++e)
				}
			}
		},
		A7 : function () {
			0 < arguments.length && arguments[arguments.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
			var a = [],
			c;
			for (c = 0; c < arguments.length; c++)
				a.push(arguments[c]);
			var d = [],
			e = [],
			f = -10,
			g = -5,
			k = 0,
			l = 0,
			n = 0,
			r,
			s,
			t,
			v,
			w,
			y = this.k;
			if (y && 0 < y.length) {
				c = 0;
				for (t = y.length; c < t; c++)
					s = y[c], R.e(k < a.length, ""), r = a[k], R.e(r, ""), w = s.n(), v = w.width, l = l >= v || isNaN(v) ? l : v, g += w.height + 5, ++n, n >= r && (d.push(l), e.push(g), f += l + 10, l = n = 0, g = -5, ++k)
			}
			R.e(!n, "");
			g = R.o.d().$;
			r = l = k = 0;
			var f = -f / 2,
			A = 0;
			if (y && 0 < y.length) {
				c = 0;
				for (t = y.length; c < t; c++)
					s = y[c], 0 == r && (r = a[k], A = e[k]), w = s.n(), v = w.width, l = l >= v || isNaN(v) ? l : v, s.q(f + d[k] / 2, A - g.height / 2),
					A -= w.height + 10, ++n, n >= r && (f += l + 5, l = r = n = 0, ++k)
			}
		},
		uz : function () {
			R.tF(this.cn, m, this)
		},
		removeChild : function (a, c) {
			a != p && (R.e(a instanceof R.Vd, "Menu only supports MenuItem objects as children"), this.Zd == a && (this.Zd = p), R.r.prototype.removeChild.call(this, a, c))
		},
		Lh : function (a) {
			if (this.Hd != R.cw || !this.Ua || !this.Kg)
				return q;
			for (var c = this.Cc; c != p; c = c.getParent())
				if (!c.Ua)
					return q;
			return (this.Zd = this.KS(a)) ? (this.Hd = R.bw, this.Zd.selected(), m) : q
		},
		Mi : function () {
			R.e(this.Hd == R.bw, "[Menu onTouchEnded] -- invalid state");
			this.Zd && (this.Zd.Rk(), this.Zd.zy());
			this.Hd = R.cw
		},
		np : function () {
			R.e(this.Hd == R.bw, "[Menu onTouchCancelled] -- invalid state");
			this.Zd && this.Zd.Rk();
			this.Hd = R.cw
		},
		bh : function (a) {
			R.e(this.Hd == R.bw, "[Menu onTouchMoved] -- invalid state");
			a = this.KS(a);
			a != this.Zd && (this.Zd && this.Zd.Rk(), (this.Zd = a) && this.Zd.selected())
		},
		ub : function () {
			this.Hd == R.bw && (this.Zd && (this.Zd.Rk(), this.Zd = p), this.Hd = R.cw);
			R.ne.prototype.ub.call(this)
		},
		Rd : x(),
		Ij : M(q),
		KS : function (a) {
			a = a.Ic;
			var c = this.k,
			d;
			if (c && 0 < c.length)
				for (var e =
						0; e < c.length; e++)
					if (d = c[e], d.Ua && d.isEnabled()) {
						var f = d.Bk(a),
						g = d.rect();
						g.x = 0;
						g.y = 0;
						if (R.Yr(g, f))
							return d
					}
			return p
		},
		sAa : function (a) {
			R.o.d().rf.vv(a, this)
		}
	});
R.iH.create = function () {
	0 < arguments.length && arguments[arguments.length - 1] == p && R.log("parameters should not be ending with null in Javascript");
	var a = new R.iH;
	if (0 == arguments.length)
		a.Wu(p, p);
	else if (1 == arguments.length && arguments[0]instanceof Array)
		return a.NV(arguments[0]), a;
	a.Wu(arguments);
	return a
};
R.ZA = 0;
R.XA = 1;
R.YA = 2;
R.WA = R.r.extend({
		xl : p,
		ye : p,
		Yc : p,
		mj : p,
		EC : p,
		F2 : p,
		Ol : p,
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.xl = R.kd();
			this.ye = R.kd();
			this.F2 = this.EC = this.mj = this.Yc = p;
			this.Ol = []
		},
		H9 : C("xl"),
		SX : z("xl"),
		h$ : C("ye"),
		lY : z("ye"),
		Dqa : C("EC"),
		HAa : z("EC"),
		O9 : C("mj"),
		XX : z("mj"),
		pE : C("Yc"),
		tp : z("Yc"),
		DM : function (a, c) {
			R.e(a != p && 0 < a.length, "TMXTiledMap: tmx file should not be nil");
			this.ma(R.kd());
			var d = R.Ms.create(a, c);
			if (!d)
				return q;
			R.e(0 != d.Xo.length, "TMXTiledMap: Map not found. Please check the filename.");
			this.SR(d);
			return m
		},
		GM : function (a, c) {
			this.ma(R.kd());
			var d = R.Ms.CU(a, c);
			R.e(0 != d.Xo.length, "TMXTiledMap: Map not found. Please check the filename.");
			this.SR(d);
			return m
		},
		SR : function (a) {
			this.xl = a.xl;
			this.ye = a.ye;
			this.EC = a.qi;
			this.mj = a.mj;
			this.Yc = a.Yc;
			this.Ol = a.Ol;
			var c = 0,
			d = a.hf;
			if (d)
				for (var e = p, f = 0, g = d.length; f < g; f++)
					if ((e = d[f]) && e.visible) {
						e = this.h5(e, a);
						this.I(e, c, c);
						var e = e.n(),
						k = this.n();
						k.width = Math.max(k.width, e.width);
						k.height = Math.max(k.height, e.height);
						this.ma(k);
						c++
					}
		},
		rqa : function (a) {
			R.e(a != p && 0 < a.length,
				"Invalid layer name!");
			for (var c = 0; c < this.k.length; c++) {
				var d = this.k[c];
				if (d && d.G9() == a)
					return d
			}
			return p
		},
		$qa : function (a) {
			R.e(a != p && 0 < a.length, "Invalid group name!");
			if (this.mj)
				for (var c = 0; c < this.mj.length; c++) {
					var d = this.mj[c];
					if (d && d.C9() == a)
						return d
				}
			return p
		},
		jM : function (a) {
			return this.Yc[a.toString()]
		},
		Bya : function (a) {
			return this.Ol[a]
		},
		h5 : function (a, c) {
			var d = this.F6(a, c),
			d = R.pw.create(d, a, c);
			a.PW = q;
			d.Ffa();
			return d
		},
		F6 : function (a, c) {
			var d = a.ib,
			e = c.Xo;
			if (e)
				for (var f = e.length - 1; 0 <= f; f--) {
					var g =
						e[f];
					if (g)
						for (var k = 0; k < d.height; k++)
							for (var l = 0; l < d.width; l++) {
								var n = a.Kb[l + d.width * k];
								if (0 != n && (n & R.XH) >>> 0 >= g.Ir)
									return g
							}
				}
			R.log("cocos2d: Warning: TMX Layer " + a.name + " has no tiles");
			return p
		}
	});
R.WA.create = function (a, c) {
	var d = new R.WA;
	return d.DM(a, c) ? d : p
};
R.WA.CU = function (a, c) {
	var d = new R.WA;
	return d.GM(a, c) ? d : p
};
R.MQ = 1;
R.Dja = 2;
R.Eja = 4;
R.Fja = 8;
R.f2 = 0;
R.Hja = 1;
R.Gja = 2;
R.Jja = 3;
R.Ija = 4;
R.Kja = 5;
R.qw = 2147483648;
R.rw = 1073741824;
R.NQ = 536870912;
R.OQ = (R.qw | R.rw | R.NQ) >>> 0;
R.XH = ~R.OQ >>> 0;
R.c2 = R.D.extend({
		Yc : p,
		name : "",
		ib : p,
		Kb : p,
		visible : p,
		Hc : p,
		PW : m,
		Bq : 1E5,
		zq : 0,
		offset : p,
		ctor : function () {
			this.Yc = [];
			this.name = "";
			this.ib = p;
			this.Kb = [];
			this.visible = m;
			this.Hc = 0;
			this.PW = m;
			this.Bq = 1E5;
			this.zq = 0;
			this.offset = R.Nb()
		},
		pE : C("Yc"),
		tp : z("Yc")
	});
R.e2 = R.D.extend({
		name : "",
		Ir : 0,
		ye : p,
		Iz : 0,
		margin : 0,
		zY : "",
		AE : p,
		ctor : function () {
			this.ye = R.kd();
			this.AE = R.kd()
		},
		tz : function (a) {
			var c = R.Oc();
			c.size = this.ye;
			a &= R.XH;
			a -= parseInt(this.Ir, 10);
			var d = parseInt((this.AE.width - 2 * this.margin + this.Iz) / (this.ye.width + this.Iz), 10);
			c.origin.x = parseInt(a % d * (this.ye.width + this.Iz) + this.margin, 10);
			c.origin.y = parseInt(parseInt(a / d, 10) * (this.ye.height + this.Iz) + this.margin, 10);
			return c
		}
	});
R.Ms = R.Zi.extend({
		qi : p,
		xl : p,
		ye : p,
		hf : p,
		Xo : p,
		mj : p,
		hK : p,
		iK : p,
		yC : 0,
		$K : q,
		Yc : p,
		Wp : p,
		$I : p,
		Ol : p,
		ZC : "",
		fS : 0,
		ctor : function () {
			this.Xo = [];
			this.Ol = [];
			this.Yc = [];
			this.xl = R.kd();
			this.ye = R.kd();
			this.fS = 0
		},
		lra : C("qi"),
		LN : z("qi"),
		H9 : C("xl"),
		SX : z("xl"),
		h$ : C("ye"),
		lY : z("ye"),
		vqa : C("hf"),
		vea : function (a) {
			this.hf.push(a)
		},
		hta : C("Xo"),
		tfa : function (a) {
			this.Xo.push(a)
		},
		O9 : C("mj"),
		XX : function (a) {
			this.mj.push(a)
		},
		vra : C("hK"),
		aBa : z("hK"),
		wra : C("iK"),
		Nea : z("iK"),
		sqa : C("yC"),
		AAa : z("yC"),
		Ssa : C("$K"),
		EBa : z("$K"),
		pE : C("Yc"),
		tp : function (a) {
			this.Yc.push(a)
		},
		DM : function (a, c) {
			this.ES(a, c);
			return this.nN(this.Wp)
		},
		GM : function (a, c) {
			this.ES(p, c);
			return this.$ba(a)
		},
		nN : function (a, c) {
			c = c || q;
			a = R.cc.d().Kd(a);
			var d,
			e,
			f = R.Zi.d().KY(a, c).documentElement;
			d = f.getAttribute("version");
			e = f.getAttribute("orientation");
			if ("map" == f.nodeName && ("1.0" != d && d !== p && R.log("cocos2d: TMXFormat: Unsupported TMX version:" + d), "orthogonal" == e ? this.LN(R.ZA) : "isometric" == e ? this.LN(R.YA) : "hexagonal" == e ? this.LN(R.XA) : e !== p && R.log("cocos2d: TMXFomat: Unsupported orientation:" + this.qi),
					d = R.size(0, 0), d.width = parseFloat(f.getAttribute("width")), d.height = parseFloat(f.getAttribute("height")), this.SX(d), d = R.size(0, 0), d.width = parseFloat(f.getAttribute("tilewidth")), d.height = parseFloat(f.getAttribute("tileheight")), this.lY(d), e = f.querySelectorAll("map \x3e properties \x3e  property")))
				for (d = 0; d < e.length; d++) {
					var g = {};
					g[e[d].getAttribute("name")] = e[d].getAttribute("value");
					this.tp(g)
				}
			e = f.getElementsByTagName("tileset");
			"map" !== f.nodeName && (e = [], e.push(f));
			for (d = 0; d < e.length; d++) {
				var k =
					e[d];
				if (g = k.getAttribute("source"))
					this.nN(R.cc.d().iE(g, c ? this.ZC + "/" : a));
				else {
					g = new R.e2;
					g.name = k.getAttribute("name") || "";
					g.Ir = parseInt(k.getAttribute("firstgid")) || 0;
					g.Iz = parseInt(k.getAttribute("spacing")) || 0;
					g.margin = parseInt(k.getAttribute("margin")) || 0;
					var l = R.size(0, 0);
					l.width = parseFloat(k.getAttribute("tilewidth"));
					l.height = parseFloat(k.getAttribute("tileheight"));
					g.ye = l;
					k = k.getElementsByTagName("image")[0].getAttribute("source");
					l = -1;
					this.Wp && (l = this.Wp.lastIndexOf("/"));
					g.zY = -1 !== l ? this.Wp.substr(0,
							l + 1) + k : this.ZC + (this.ZC ? "/" : "") + k;
					this.tfa(g)
				}
			}
			if (g = f.querySelectorAll("tile"))
				for (d = 0; d < g.length; d++)
					if (e = g[d], this.Nea(parseInt(this.Xo[0].Ir) + parseInt(e.getAttribute("id") || 0)), k = e.querySelectorAll("properties \x3e property")) {
						l = {};
						for (e = 0; e < k.length; e++) {
							var n = k[e].getAttribute("name"),
							r = k[e].getAttribute("value");
							l[n] = r
						}
						this.Ol[this.iK] = l
					}
			if (g = f.getElementsByTagName("layer"))
				for (d = 0; d < g.length; d++) {
					l = g[d];
					n = l.getElementsByTagName("data")[0];
					k = new R.c2;
					k.name = l.getAttribute("name");
					e = R.size(0,
							0);
					e.width = parseFloat(l.getAttribute("width"));
					e.height = parseFloat(l.getAttribute("height"));
					k.ib = e;
					e = l.getAttribute("visible");
					k.visible = "0" != e;
					e = l.getAttribute("opacity") || 1;
					k.Hc = e ? parseInt(255 * parseFloat(e)) : 255;
					k.offset = R.b(parseFloat(l.getAttribute("x")) || 0, parseFloat(l.getAttribute("y")) || 0);
					r = "";
					for (e = 0; e < n.childNodes.length; e++)
						r += n.childNodes[e].nodeValue;
					r = r.trim();
					e = n.getAttribute("compression");
					var s = n.getAttribute("encoding");
					R.e(e == p || "gzip" === e || "zlib" === e, "TMX: unsupported compression method");
					switch (e) {
					case "gzip":
						k.Kb = R.QY(r, 4);
						break;
					case "zlib":
						e = new Zlib.Inflate(R.Ia.Bp.FU(r, 1));
						k.Kb = R.aga(e.decompress());
						break;
					case p:
					case "":
						if ("base64" == s)
							k.Kb = R.Ia.Bp.FU(r, 4);
						else if ("csv" === s) {
							k.Kb = [];
							e = r.split(",");
							for (n = 0; n < e.length; n++)
								k.Kb.push(parseInt(e[n]))
						} else {
							e = n.getElementsByTagName("tile");
							k.Kb = [];
							for (n = 0; n < e.length; n++)
								k.Kb.push(parseInt(e[n].getAttribute("gid")))
						}
						break;
					default:
						R.e(this.yC != R.MQ, "TMX tile map: Only base64 and/or gzip/zlib maps are supported")
					}
					if (l = l.querySelectorAll("properties \x3e property")) {
						n = {};
						for (e = 0; e < l.length; e++)
							n[l[e].getAttribute("name")] = l[e].getAttribute("value");
						k.tp(n)
					}
					this.vea(k)
				}
			if (g = f.getElementsByTagName("objectgroup"))
				for (d = 0; d < g.length; d++) {
					l = g[d];
					k = new R.d2;
					k.nea(l.getAttribute("name"));
					k.Sea(R.b(parseFloat(l.getAttribute("x")) * this.ye.width || 0, parseFloat(l.getAttribute("y")) * this.ye.height || 0));
					if (n = l.querySelectorAll("objectgroup \x3e properties \x3e property"))
						for (e = 0; e < n.length; e++)
							r = {},
					r[n[e].getAttribute("name")] = n[e].getAttribute("value"),
					k.tp(r);
					if (l = l.querySelectorAll("object"))
						for (e =
								0; e < l.length; e++) {
							r = l[e];
							n = {};
							n.name = r.getAttribute("name") || "";
							n.type = r.getAttribute("type") || "";
							n.x = parseInt(r.getAttribute("x") || 0) + k.Jx.x;
							s = parseInt(r.getAttribute("y") || 0) + k.Jx.y;
							n.width = parseInt(r.getAttribute("width")) || 0;
							n.height = parseInt(r.getAttribute("height")) || 0;
							n.y = parseInt(this.xl.height * this.ye.height) - s - n.height;
							if (s = r.querySelectorAll("properties \x3e property"))
								for (var t = 0; t < s.length; t++)
									n[s[t].getAttribute("name")] = s[t].getAttribute("value");
							if ((s = r.querySelectorAll("polygon")) &&
								0 < s.length)
								(s = s[0].getAttribute("points")) && (n.polygonPoints = this.YS(s));
							if ((r = r.querySelectorAll("polyline")) && 0 < r.length)
								(r = r[0].getAttribute("points")) && (n.polylinePoints = this.YS(r));
							k.Gea(n)
						}
					this.XX(k)
				}
			return f
		},
		YS : function (a) {
			if (!a)
				return p;
			var c = [];
			a = a.split(" ");
			for (var d = 0; d < a.length; d++) {
				var e = a[d].split(",");
				c.push({
					x : e[0],
					y : e[1]
				})
			}
			return c
		},
		$ba : function (a) {
			return this.nN(a, m)
		},
		eta : C("Ol"),
		OBa : function (a) {
			this.Ol.push(a)
		},
		Voa : C("$I"),
		$za : z("$I"),
		Wsa : C("Wp"),
		HBa : z("Wp"),
		ES : function (a, c) {
			this.Xo =
				[];
			this.hf = [];
			this.Wp = a;
			c && (this.ZC = c);
			this.mj = [];
			this.Yc = [];
			this.Ol = [];
			this.$I = "";
			this.$K = q;
			this.yC = R.MQ;
			this.hK = R.f2;
			this.fS = 0
		}
	});
R.Ms.create = function (a, c) {
	var d = new R.Ms;
	return d.DM(a, c) ? d : p
};
R.Ms.CU = function (a, c) {
	var d = new R.Ms;
	return d.GM(a, c) ? d : p
};
R.d2 = R.D.extend({
		IJ : p,
		Jx : p,
		Yc : p,
		Vt : p,
		ctor : function () {
			this.IJ = "";
			this.Jx = R.Nb();
			this.Yc = [];
			this.Vt = []
		},
		Fra : C("Jx"),
		Sea : z("Jx"),
		pE : C("Yc"),
		tp : function (a) {
			this.Yc.push(a)
		},
		C9 : function () {
			return this.IJ.toString()
		},
		nea : z("IJ"),
		Cya : function (a) {
			return this.Yc[a]
		},
		Jxa : function (a) {
			if (this.Vt && 0 < this.Vt.length)
				for (var c = this.Vt, d = 0, e = c.length; d < e; d++) {
					var f = c[d].name;
					if (f && f == a)
						return c[d]
				}
			return p
		},
		bra : C("Vt"),
		Gea : function (a) {
			this.Vt.push(a)
		}
	});
R.pw = R.Oa.extend({
		ib : p,
		Lf : p,
		Kb : p,
		wi : p,
		Pt : p,
		Yc : p,
		UJ : "",
		Hc : 255,
		Bq : p,
		zq : p,
		tL : p,
		lL : p,
		tka : p,
		rk : p,
		Je : p,
		bi : p,
		dj : p,
		ml : p,
		JI : p,
		ctor : function () {
			R.Oa.prototype.ctor.call(this);
			this.k = [];
			this.qe = [];
			this.ib = R.kd();
			this.Lf = R.kd();
			if (R.T === R.Ab) {
				var a = R.canvas,
				c = document.createElement("canvas");
				c.width = a.width;
				c.height = a.height;
				this.dj = c;
				this.ml = this.dj.getContext("2d");
				var d = new R.Eb;
				d.vf(c);
				d.Ue();
				this.JI = d;
				this.ma(R.size(a.width, a.height))
			}
		},
		ma : function (a) {
			if (a && (R.r.prototype.ma.call(this, a), R.T === R.Ab)) {
				var c =
					this.dj;
				c.width = 0 | 1.5 * a.width;
				c.height = 0 | 1.5 * a.height;
				this.ml.translate(0, c.height);
				a = this.JI.ea;
				a.width = c.width;
				a.height = c.height
			}
		},
		ja : function () {
			return R.T === R.Ab ? this.JI : R.Oa.prototype.ja.call(this)
		},
		Y : function (a) {
			if (R.T === R.Ya)
				R.Oa.prototype.Y.call(this, a);
			else {
				var c = a || R.u;
				if (this.Ua) {
					c.save();
					this.transform(a);
					var d,
					e = this.k;
					if (this.yB) {
						var f = this.ml;
						d = this.dj;
						f.clearRect(0, 0, d.width, -d.height);
						f.save();
						f.translate(this.Gb.x, -this.Gb.y);
						if (e) {
							this.Ee();
							for (d = 0; d < e.length; d++)
								e[d] && e[d].Y(f)
						}
						f.restore();
						this.yB = q
					}
					this.fa(a);
					c.restore()
				}
			}
		},
		fa : p,
		bk : function (a) {
			a = a || R.u;
			var c = 0 | -this.Gb.x,
			d = 0 | -this.Gb.y,
			e = this.dj;
			e && a.drawImage(e, c,  - (d + e.height))
		},
		uqa : C("ib"),
		DAa : z("ib"),
		Eqa : C("Lf"),
		IAa : z("Lf"),
		gta : C("Kb"),
		QBa : z("Kb"),
		fta : C("wi"),
		PBa : z("wi"),
		tqa : C("Pt"),
		CAa : z("Pt"),
		pE : C("Yc"),
		tp : z("Yc"),
		P$ : function (a, c, d) {
			var e = c.ib,
			f = 0.35 * parseInt(e.width * e.height) + 1,
			g;
			a && (g = R.fb.d().Jd(a.zY));
			return this.ba(g, f) ? (this.UJ = c.name, this.ib = e, this.Kb = c.Kb, this.Bq = c.Bq, this.zq = c.zq, this.Hc = c.Hc, this.tp(c.Yc), this.bi = R.o.d().bi,
				this.wi = a, this.Lf = d.ye, this.Pt = d.qi, a = this.j3(c.offset), this.q(R.Jp(a)), this.Je = [], this.ma(R.kw(R.size(this.ib.width * this.Lf.width, this.ib.height * this.Lf.height))), this.lL = q, this.tL = 0, m) : q
		},
		Oya : function () {
			this.Kb && (this.Kb = p);
			this.Je && (this.Je = p)
		},
		dta : function (a) {
			R.e(a.x < this.ib.width && a.y < this.ib.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
			R.e(this.Kb && this.Je, "TMXLayer: the tiles map has been released");
			var c = p,
			d = this.mM(a);
			if (0 === d)
				return c;
			var e = 0 | a.x + a.y * this.ib.width,
			c = this.Ej(e);
			c ||
			(d = this.wi.tz(d), d = R.dl(d), c = new R.t, c.ba(this.ja(), d), c.Ec(this), c.q(this.oE(a)), c.WF(this.ST(a)), c.R(R.Nb()), c.U(this.Hc), a = this.DI(e), this.w7(c, a, e));
			return c
		},
		mM : function (a) {
			R.e(a.x < this.ib.width && a.y < this.ib.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
			R.e(this.Kb && this.Je, "TMXLayer: the tiles map has been released");
			return (this.Kb[0 | a.x + a.y * this.ib.width] & R.XH) >>> 0
		},
		g$ : function (a) {
			R.e(a.x < this.ib.width && a.y < this.ib.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
			R.e(this.Kb && this.Je,
				"TMXLayer: the tiles map has been released");
			return (this.Kb[0 | a.x + a.y * this.ib.width] & R.OQ) >>> 0
		},
		NBa : function (a, c, d) {
			R.e(c.x < this.ib.width && c.y < this.ib.height && 0 <= c.x && 0 <= c.y, "TMXLayer: invalid position");
			R.e(this.Kb && this.Je, "TMXLayer: the tiles map has been released");
			R.e(0 !== a || !(a >= this.wi.Ir), "TMXLayer: invalid gid:" + a);
			d = d || 0;
			this.Tq();
			var e = this.g$(c),
			f = this.mM(c);
			if (f != a || e != d)
				if (e = (a | d) >>> 0, 0 === a)
					this.$ca(c);
				else if (0 === f)
					this.z4(e, c);
				else {
					var f = c.x + c.y * this.ib.width,
					g = this.Ej(f);
					g ? (a = this.wi.tz(a),
						a = R.dl(a), g.cd(a, q, a.size), d != p && this.jD(g, c, e), this.Kb[f] = e) : this.b7(e, c)
				}
		},
		$ca : function (a) {
			R.e(a.x < this.ib.width && a.y < this.ib.height && 0 <= a.x && 0 <= a.y, "TMXLayer: invalid position");
			R.e(this.Kb && this.Je, "TMXLayer: the tiles map has been released");
			if (0 !== this.mM(a)) {
				R.T === R.Ab && this.Tq();
				var c = 0 | a.x + a.y * this.ib.width;
				a = this.DI(c);
				this.Kb[c] = 0;
				R.Qn(this.Je, a);
				if (c = this.Ej(c))
					R.Oa.prototype.removeChild.call(this, c, m);
				else if (R.T === R.Ya && this.S.lX(a), this.k)
					for (var c = this.k, d = 0, e = c.length; d < e; d++) {
						var f =
							c[d];
						if (f) {
							var g = f.lb;
							g >= a && f.yd(g - 1)
						}
					}
			}
		},
		oE : function (a) {
			var c = R.Nb();
			switch (this.Pt) {
			case R.ZA:
				c = this.m5(a);
				break;
			case R.YA:
				c = this.l5(a);
				break;
			case R.XA:
				c = this.k5(a)
			}
			return R.Jp(c)
		},
		jM : function (a) {
			return this.Yc[a]
		},
		Ffa : function () {
			R.T === R.Ab ? this.wi.AE = this.Qg.ea : (this.wi.AE = this.S.ja().ea, this.S.ja().EN());
			this.f5();
			R.T === R.Ab && this.Tq();
			for (var a = this.ib.height, c = this.ib.width, d = 0; d < a; d++)
				for (var e = 0; e < c; e++) {
					var f = this.Kb[e + c * d];
					0 !== f && (this.Z2(f, R.b(e, d)), this.Bq = Math.min(f, this.Bq), this.zq =
							Math.max(f, this.zq))
				}
			this.zq >= this.wi.Ir && this.Bq >= this.wi.Ir || R.log("cocos2d:TMX: Only 1 tileset per layer is supported")
		},
		I : function () {
			R.e(0, "addChild: is not supported on cc.TMXLayer. Instead use setTileGID:at:/tileAt:")
		},
		removeChild : function (a, c) {
			if (a) {
				R.e(R.mm(this.k, a), "Tile does not belong to TMXLayer");
				R.T === R.Ab && this.Tq();
				var d = a.lb;
				this.Kb[this.Je[d]] = 0;
				R.Qn(this.Je, d);
				R.Oa.prototype.removeChild.call(this, a, c)
			}
		},
		G9 : function () {
			return this.UJ.toString()
		},
		BAa : z("UJ"),
		l5 : function (a) {
			return R.b(this.Lf.width /
				2 * (this.ib.width + a.x - a.y - 1), this.Lf.height / 2 * (2 * this.ib.height - a.x - a.y - 2))
		},
		m5 : function (a) {
			return R.b(a.x * this.Lf.width, (this.ib.height - a.y - 1) * this.Lf.height)
		},
		k5 : function (a) {
			return R.b(3 * a.x * this.Lf.width / 4, (this.ib.height - a.y - 1) * this.Lf.height + (1 == a.x % 2 ? -this.Lf.height / 2 : 0))
		},
		j3 : function (a) {
			var c = R.Nb();
			switch (this.Pt) {
			case R.ZA:
				c = R.b(a.x * this.Lf.width, -a.y * this.Lf.height);
				break;
			case R.YA:
				c = R.b(this.Lf.width / 2 * (a.x - a.y), this.Lf.height / 2 * (-a.x - a.y));
				break;
			case R.XA:
				R.e(0 == a.x && 0 == a.y, "offset for hexagonal map not implemented yet")
			}
			return c
		},
		Z2 : function (a, c) {
			var d = this.wi.tz(a),
			d = R.dl(d),
			e = 0 | c.x + c.y * this.ib.width,
			d = this.GK(d);
			this.jD(d, c, a);
			var f = this.Je.length;
			this.IE(d, f);
			this.Je = R.Ui(this.Je, e, f);
			return d
		},
		z4 : function (a, c) {
			var d = this.wi.tz(a),
			d = R.dl(d),
			e = 0 | c.x + c.y * this.ib.width,
			d = this.GK(d);
			this.jD(d, c, a);
			var f = this.b3(e);
			this.IE(d, f);
			this.Je = R.Ui(this.Je, e, f);
			if (this.k)
				for (var g = this.k, k = 0, l = g.length; k < l; k++) {
					var n = g[k];
					if (n) {
						var r = n.lb;
						r >= f && n.yd(r + 1)
					}
				}
			this.Kb[e] = a;
			return d
		},
		b7 : function (a, c) {
			var d = this.wi.tz(a),
			e = this.bi,
			d = R.rect(d.x /
					e, d.y / e, d.width / e, d.height / e),
			e = c.x + c.y * this.ib.width,
			d = this.GK(d);
			this.jD(d, c, a);
			var f = this.DI(e);
			d.yd(f);
			d.eh(m);
			d.Vf();
			this.Kb[e] = a;
			return d
		},
		f5 : function () {
			var a = this.jM("cc_vertexz");
			if (a)
				if ("automatic" == a) {
					this.lL = m;
					var c = this.jM("cc_alpha_func"),
					a = 0;
					c && (a = parseFloat(c));
					R.T === R.Ya && (this.Ye(R.Ad.d().Tc(R.PA)), c = R.u.getUniformLocation(this.Ru().Pr(), R.zR), this.Ru().Sd(), this.Ru().Ez(c, a))
				} else
					this.tL = parseInt(a, 10)
		},
		jD : function (a, c, d) {
			var e = c.x + c.y * this.ib.width;
			a.q(this.oE(c));
			R.T === R.Ya ? a.WF(this.ST(c)) :
			a.up(e);
			a.R(R.Nb());
			a.U(this.Hc);
			R.T === R.Ya && a.he(0);
			a.zz(q);
			a.Nk(q);
			(d & R.NQ) >>> 0 ? (a.R(R.b(0.5, 0.5)), a.q(this.oE(c).x + a.n().height / 2, this.oE(c).y + a.n().width / 2), c = (d & (R.qw | R.rw) >>> 0) >>> 0, c == R.qw ? a.he(90) : c == R.rw ? a.he(270) : (c == (R.rw | R.qw) >>> 0 ? a.he(90) : a.he(270), a.zz(m))) : ((d & R.qw) >>> 0 && a.zz(m), (d & R.rw) >>> 0 && a.Nk(m))
		},
		GK : function (a) {
			R.T === R.Ya ? (this.rk ? (this.rk.Ec(p), this.rk.cd(a, q, a.size)) : (this.rk = new R.t, this.rk.ba(this.ja(), a, q)), this.rk.Ec(this)) : (this.rk = new R.t, this.rk.ba(this.Wo, a, q), this.rk.Ec(this),
				this.rk.gs(this));
			return this.rk
		},
		ST : function (a) {
			var c = 0,
			d = 0;
			if (this.lL)
				switch (this.Pt) {
				case R.YA:
					d = this.ib.width + this.ib.height;
					c =  - (d - (a.x + a.y));
					break;
				case R.ZA:
					c =  - (this.ib.height - a.y);
					break;
				case R.XA:
					R.e(0, "TMX Hexa zOrder not supported");
					break;
				default:
					R.e(0, "TMX invalid value")
				}
			else
				c = this.tL;
			return c
		},
		DI : function (a) {
			var c;
			if (this.Je)
				for (var d = this.Je, e = 0, f = d.length; e < f && !(c = d[e], c == a); e++);
			R.e(c != p, "TMX atlas index not found. Shall not happen");
			return e
		},
		b3 : function (a) {
			for (var c = this.Je, d = 0, e =
					c.length; d < e && !(a < c[d]); d++);
			return d
		}
	});
R.pw.prototype.fa = R.ua.tc ? R.Oa.prototype.fa : R.pw.prototype.bk;
R.pw.create = function (a, c, d) {
	var e = new R.pw;
	return e.P$(a, c, d) ? e : p
};
R.wH = R.D.extend({
		Lx : p,
		Jb : p,
		Mw : p,
		Tra : C("Lx"),
		lBa : z("Lx"),
		Qu : C("Jb"),
		Jea : z("Jb"),
		yoa : C("Mw"),
		Kda : z("Mw"),
		B$ : function (a, c) {
			this.Lx = a;
			this.Jb = c;
			this.Mw = p;
			return m
		}
	});
R.wH.create = function (a, c) {
	var d = new R.wH;
	d.B$(a, c);
	return d
};
R.fQ = R.r.extend({
		TJ : p,
		Lq : p,
		tra : C("Lq"),
		$Aa : z("Lq"),
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.Lq = [];
			this.TJ = R.b(-100, -100)
		},
		I : function (a, c, d, e) {
			if (3 === arguments.length)
				R.e(0, "ParallaxNode: use addChild:z:parallaxRatio:positionOffset instead");
			else {
				R.e(a != p, "Argument must be non-nil");
				var f = R.wH.create(d, e);
				f.Kda(a);
				this.Lq.push(f);
				f = R.b(this.Z.x, this.Z.y);
				f.x = f.x * d.x + e.x;
				f.y = f.y * d.y + e.y;
				a.q(f);
				R.r.prototype.I.call(this, a, c, a.ud)
			}
		},
		removeChild : function (a, c) {
			for (var d = this.Lq, e = 0; e < d.length; e++)
				if (d[e].Mw ==
					a) {
					d.splice(e, 1);
					break
				}
			R.r.prototype.removeChild.call(this, a, c)
		},
		wg : function (a) {
			this.Lq = [];
			R.r.prototype.wg.call(this, a)
		},
		Y : function () {
			var a = this.K2();
			if (!R.iv(a, this.TJ)) {
				for (var c = this.Lq, d = 0, e = c.length; d < e; d++) {
					var f = c[d],
					g = -a.x + a.x * f.Lx.x + f.Qu().x,
					k = -a.y + a.y * f.Lx.y + f.Qu().y;
					f.Mw.q(g, k)
				}
				this.TJ = a
			}
			R.r.prototype.Y.call(this)
		},
		K2 : function () {
			for (var a = this.Z, c = this; c.getParent() != p; )
				c = c.getParent(), a = R.ug(a, c.rc());
			return a
		}
	});
R.fQ.create = function () {
	return new R.fQ
};
R = R || {};
R.$e = R.D.extend({
		NR : 0,
		Zf : p,
		ctor : function () {
			this.Zf = {}

		},
		ZR : function (a) {
			var c = document.createElement("audio");
			if (c.canPlayType) {
				var d = function (a) {
					a = c.canPlayType(a);
					return "no" != a && "" != a
				};
				a.DW = d("audio/mpeg");
				a.EW = d("audio/mp4");
				a.yW = d("audio/x-m4a") || d("audio/aac");
				a.JW = d('audio/ogg; codecs\x3d"vorbis"');
				a.bZ = d('audio/wav; codecs\x3d"1"')
			} else {
				var d = ["mp3", "mp4", "m4a", "ogg", "wav"],
				e;
				for (e in d)
					a[d[e]] = q
			}
		},
		Lm : function (a) {
			if ("string" != typeof a)
				return p;
			var c = a.lastIndexOf(".");
			return -1 !== c ? a.substring(0, c) :
			a
		},
		Bt : function (a) {
			var c = a.lastIndexOf(".");
			return -1 !== c ? a.substring(c + 1, a.length) : -1
		}
	});
R.GQ = function () {
	this.pg = h;
	this.eM = ".ogg"
};
R.V1 = R.$e.extend({
		br : p,
		to : {},
		Rf : {},
		ig : p,
		gj : 1,
		OS : 10,
		LI : p,
		Ml : q,
		WR : m,
		ctor : function () {
			R.$e.prototype.ctor.call(this);
			this.br = [];
			this.to = {};
			this.Rf = {};
			var a = this.LI = {
				DW : q,
				JW : q,
				bZ : q,
				EW : q,
				yW : q
			};
			this.ZR(a);
			this.Ml = a.DW || a.EW || a.yW || a.JW || a.bZ;
			a = navigator.userAgent;
			if (/Mobile/.test(a) && (/iPhone OS/.test(a) || /iPad/.test(a) || /Firefox/.test(a)) || /MSIE/.test(a))
				this.WR = q
		},
		m : function () {
			this.c4();
			return this.Ml
		},
		oca : function (a) {
			this.jv(a)
		},
		nca : function (a) {
			this.jv(a)
		},
		jv : function (a) {
			if (this.Ml) {
				var c = this.Bt(a),
				d = this.Lm(a);
				if (this.cz(c) && !this.Rf.hasOwnProperty(d) && this.WR) {
					var e = new R.GQ;
					e.eM = c;
					e.pg = new Audio(a);
					e.pg.qz = "auto";
					var f = function () {
						R.dc.d().Li();
						this.removeEventListener("canplaythrough", f, q);
						this.removeEventListener("error", g, q)
					},
					g = function (a) {
						R.dc.d().mp(a.srcElement.src);
						this.removeEventListener("canplaythrough", f, q);
						this.removeEventListener("error", g, q)
					};
					e.pg.addEventListener("canplaythrough", f, q);
					e.pg.addEventListener("error", g, q);
					this.Rf[d] = e;
					e.pg.load();
					return
				}
			}
			R.dc.d().Li()
		},
		XW : function (a,
			c) {
			if (this.Ml) {
				var d = this.Lm(a),
				e = this.Bt(a),
				f = this.Rf;
				f.hasOwnProperty(this.ig) && f[this.ig].pg.pause();
				this.ig = d;
				if (f.hasOwnProperty(this.ig))
					e = f[this.ig].pg;
				else {
					var g = new R.GQ;
					g.eM = e;
					e = g.pg = new Audio(a);
					g.pg.qz = "auto";
					f[d] = g;
					g.pg.load()
				}
				e.addEventListener("pause", this.$J, q);
				e.loop = c || q;
				e.play();
				R.$e.am = m
			}
		},
		$J : function (a) {
			R.$e.am = q;
			this.removeEventListener("pause", arguments.callee, q)
		},
		fO : function (a) {
			var c = this.Rf,
			d = this.ig;
			if (c.hasOwnProperty(d)) {
				var e = c[d].pg;
				e.pause();
				e.currentTime = e.duration;
				a && delete c[d];
				R.$e.am = q
			}
		},
		dca : function () {
			this.Rf.hasOwnProperty(this.ig) && (this.Rf[this.ig].pg.pause(), R.$e.am = q)
		},
		eda : function () {
			if (this.Rf.hasOwnProperty(this.ig)) {
				var a = this.Rf[this.ig].pg;
				a.play();
				a.addEventListener("pause", this.$J, q);
				R.$e.am = m
			}
		},
		gda : function () {
			if (this.Rf.hasOwnProperty(this.ig)) {
				var a = this.Rf[this.ig].pg;
				a.currentTime = 0;
				a.play();
				a.addEventListener("pause", this.$J, q);
				R.$e.am = m
			}
		},
		xga : M(q),
		Ry : function () {
			return this.Rf.hasOwnProperty(this.ig) ? this.Rf[this.ig].pg.volume : 0
		},
		Eea : function (a) {
			this.Rf.hasOwnProperty(this.ig) &&
			(this.Rf[this.ig].pg.volume = 1 < a ? 1 : 0 > a ? 0 : a)
		},
		am : function () {
			return R.$e.am
		},
		pN : function (a, c) {
			if (!this.Ml)
				return p;
			var d = this.Lm(a),
			e;
			e = this.Rf.hasOwnProperty(d) ? this.Rf[d].eM : this.Bt(a);
			var f = this.V3(d),
			g;
			if (0 < f.length)
				for (var k = 0; k < f.length; k++)
					if (f[k].ended) {
						g = f[k];
						g.currentTime = 0;
						window.qma && g.load();
						break
					}
			if (!g) {
				if (f.length >= this.OS)
					return R.log("Error: " + a + " greater than " + this.OS), a;
				g = new Audio(d + "." + e);
				g.volume = this.gj;
				f.push(g)
			}
			c && (g.loop = c);
			g.play();
			d = this.NR++;
			this.Zf[d] = g;
			return d
		},
		u9 : C("gj"),
		Zda : function (a) {
			this.gj = 1 < a ? 1 : 0 > a ? 0 : a;
			var c,
			d = this.to,
			e;
			for (e in d)
				if (a = d[e], 0 < a.length)
					for (var f = 0; f < a.length; f++)
						c = a[f], c.volume = this.gj
		},
		cca : function (a) {
			a != p && this.Zf.hasOwnProperty(a) && (a = this.Zf[a], a.ended || a.pause())
		},
		aca : function () {
			var a,
			c,
			d = this.to,
			e;
			for (e in d) {
				a = d[e];
				for (var f = 0; f < a.length; f++)
					c = a[f], c.ended || c.pause()
			}
		},
		dda : function (a) {
			a != p && this.Zf.hasOwnProperty(a) && (a = this.Zf[a], a.ended || a.play())
		},
		cda : function () {
			var a,
			c,
			d = this.to,
			e;
			for (e in d)
				if (a = d[e], 0 < a.length)
					for (var f = 0; f < a.length; f++)
						c =
							a[f], c.ended || c.play()
		},
		eO : function (a) {
			a != p && this.Zf.hasOwnProperty(a) && (a = this.Zf[a], a.ended || (a.loop = q, a.currentTime = a.duration))
		},
		DY : function () {
			var a,
			c,
			d = this.to,
			e;
			for (e in d) {
				a = d[e];
				for (var f = 0; f < a.length; f++)
					c = a[f], c.ended || (c.loop = q, c.currentTime = c.duration)
			}
		},
		MY : function (a) {
			if (a) {
				a = this.Lm(a);
				this.to.hasOwnProperty(a) && delete this.to[a];
				var c,
				d = this.Zf,
				e;
				for (e in d)
					c = d[e], c = this.Lm(c.src), -1 < c.indexOf(a) && (this.eO(e), delete d[e])
			}
		},
		V3 : function (a) {
			var c = this.to;
			c.hasOwnProperty(a) || (c[a] = []);
			return c[a]
		},
		cz : function (a) {
			for (var c, d = this.br, e = 0; e < d.length; e++)
				if (c = d[e], c == a)
					return m;
			return q
		},
		c4 : function () {
			if (this.Ml) {
				var a = ["ogg", "mp3", "wav", "mp4", "m4a"],
				c;
				for (c in a) {
					var d = a[c];
					this.LI[d] && this.br.push(d)
				}
			}
		}
	});
R.C2 = function () {
	this.Tz = this.zf = this.key = h;
	this.oN = this.startTime = 0;
	this.LE = q
};
R.B2 = R.$e.extend({
		gq : p,
		br : p,
		Ml : q,
		Wj : p,
		Yh : p,
		te : p,
		VS : 1,
		ck : p,
		gj : 1,
		ctor : function () {
			R.$e.prototype.ctor.call(this);
			this.br = [];
			this.Wj = {};
			this.Yh = {};
			this.ck = {}

		},
		m : function () {
			this.gq = new(window.wZ || window.wga || window.Jaa);
			var a = {};
			this.ZR(a);
			var c = ["ogg", "mp3", "wav", "mp4", "m4a"],
			d = this.br,
			e;
			for (e in c) {
				var f = c[e];
				a[f] && d.push(f)
			}
			return this.Ml = 0 < d.length
		},
		cz : function (a) {
			var c = this.br,
			d;
			for (d in c)
				if (a === c[d])
					return m;
			return q
		},
		sJ : function (a, c, d) {
			var e = new window.XMLHttpRequest;
			e.open("GET", a, m);
			e.responseType =
				"arraybuffer";
			var f = this;
			e.onload = function () {
				f.gq.Mma(e.response, c, d)
			};
			e.onerror = d;
			e.send()
		},
		oca : function (a) {
			this.jv(a)
		},
		nca : function (a) {
			this.jv(a)
		},
		jv : function (a) {
			if (this.Ml) {
				var c = this.Lm(a);
				if (!this.cz(this.Bt(a)) || c in this.Wj || c in this.Yh)
					R.dc.d().Li();
				else {
					this.Yh[c] = m;
					var d = this;
					this.sJ(a, function (a) {
						d.Wj[c] = a;
						delete d.Yh[c];
						R.dc.d().Li()
					}, function () {
						delete d.Yh[c];
						R.dc.d().mp(a)
					})
				}
			}
		},
		Fw : function (a, c, d, e) {
			var f = new R.C2;
			c = c || q;
			d = d || 1;
			e = e || 0;
			f.key = a;
			f.zf = this.gq.Cma();
			f.zf.buffer = this.Wj[a];
			f.zf.loop = c;
			f.Tz = this.gq.Dma();
			f.Tz.j9.value = d;
			f.zf.a8(f.Tz);
			f.Tz.a8(this.gq.Oma);
			f.zf.start ? f.zf.start(0, e) : f.zf.HW ? (a = f.zf.buffer.duration, c ? f.zf.HW(0, e, a) : f.zf.HW(0, e, a - e)) : f.zf.txa(0);
			f.startTime = this.gq.currentTime - e;
			f.oN = f.startTime;
			f.LE = q;
			return f
		},
		uC : function (a) {
			return 2 == a.zf.rya
		},
		OJ : function (a) {
			return this.uC(a) ? q : a.LE
		},
		am : function () {
			return this.te ? this.uC(this.te) : q
		},
		XW : function (a, c) {
			var d = this.Lm(a),
			e = this.Bt(a);
			c = c || q;
			this.te && this.fO();
			if (d in this.Wj)
				this.te = this.Fw(d, c, this.Ry());
			else if (this.cz(e) && !(d in this.Yh)) {
				this.Yh[d] = m;
				var f = this;
				this.sJ(a, function (e) {
					f.Wj[d] = e;
					delete f.Yh[d];
					f.XW(a, c)
				}, function () {
					delete f.Yh[d]
				})
			}
		},
		ex : function (a) {
			a.zf.stop ? a.zf.stop(0) : a.zf.sxa(0)
		},
		fO : function (a) {
			if (this.te) {
				var c = this.te.key;
				this.ex(this.te);
				this.te = p;
				a && delete this.Wj[c]
			}
		},
		aT : function (a) {
			a.oN = this.gq.currentTime;
			a.LE = m;
			this.ex(a)
		},
		dca : function () {
			this.am() && this.aT(this.te)
		},
		jT : function (a, c) {
			return this.Fw(a.key, a.zf.loop, c, (a.oN - a.startTime) % a.zf.buffer.duration)
		},
		eda : function () {
			this.te &&
			this.OJ(this.te) && (this.te = this.jT(this.te, this.Ry()))
		},
		gda : function () {
			if (this.te) {
				var a = this.te.key,
				c = this.te.zf.loop,
				d = this.Ry();
				this.ex(this.te);
				this.te = this.Fw(a, c, d)
			}
		},
		xga : M(q),
		Ry : C("VS"),
		sT : function (a, c) {
			a.Tz.j9.value = c
		},
		Eea : function (a) {
			1 < a ? a = 1 : 0 > a && (a = 0);
			this.Ry() != a && (this.VS = a, this.te && this.sT(this.te, a))
		},
		pN : function (a, c) {
			var d = this.Lm(a),
			e = this.Bt(a);
			c = c || q;
			if (d in this.Wj) {
				e = this.ck;
				d in e || (e[d] = []);
				var e = e[d],
				f;
				for (f in e) {
					var g = e[f];
					if (!this.uC(g) && !this.OJ(g))
						return e[f] = this.Fw(d,
								c, this.gj), a
				}
				e.push(this.Fw(d, c, this.gj))
			} else if (this.cz(e) && !(d in this.Yh)) {
				this.Yh[d] = m;
				var k = this;
				this.sJ(a, function (e) {
					k.Wj[d] = e;
					delete k.Yh[d];
					k.pN(a, c)
				}, function () {
					delete k.Yh[d]
				})
			}
			f = this.NR++;
			this.Zf[f] = this.ck[d];
			return f
		},
		u9 : C("gj"),
		Zda : function (a) {
			1 < a ? a = 1 : 0 > a && (a = 0);
			if (this.gj != a) {
				this.gj = a;
				var c = this.ck,
				d;
				for (d in c) {
					var e = c[d],
					f;
					for (f in e)
						this.sT(e[f], a)
				}
			}
		},
		bT : function (a) {
			for (var c in a) {
				var d = a[c];
				this.uC(d) && this.aT(d)
			}
		},
		cca : function (a) {
			a != p && this.Zf.hasOwnProperty(a) && this.bT(this.Zf[a])
		},
		aca : function () {
			for (var a in this.ck)
				this.bT(this.ck[a])
		},
		kT : function (a, c) {
			for (var d in a) {
				var e = a[d];
				this.OJ(e) && (a[d] = this.jT(e, c))
			}
		},
		dda : function (a) {
			a != p && this.Zf.hasOwnProperty(a) && this.kT(this.Zf[a], this.gj)
		},
		cda : function () {
			for (var a in this.ck)
				this.kT(this.ck[a], this.gj)
		},
		eO : function (a) {
			a != p && this.Zf.hasOwnProperty(a) && this.ex(this.Zf[a])
		},
		DY : function () {
			var a = this.ck,
			c;
			for (c in a) {
				var d = a[c],
				e;
				for (e in d)
					this.ex(d[e]);
				delete a[c]
			}
		},
		MY : function (a) {
			if (a) {
				var c = this.Lm(a);
				this.ck.hasOwnProperty(c) &&
				(this.eO(a), delete this.ck[keyname]);
				c in this.Wj && delete this.Wj[c]
			}
		}
	});
R.$e.Da = p;
R.$e.am = q;
R.$e.d = function () {
	if (!this.Da) {
		var a = navigator.userAgent;
		this.Da = R.ua.Sfa && (/iPhone OS/.test(a) || /iPad/.test(a)) ? new R.B2 : new R.V1;
		this.Da.m()
	}
	return this.Da
};
R.$e.end = function () {
	this.Da && (this.Da.fO(), this.Da.DY());
	this.Da = p
};
R.Fia = R.D.extend({
		Nxa : x()
	});
R.Yga = R.D.extend({
		lba : x(),
		jba : x(),
		kba : x()
	});
R.Xga = R.D.extend({
		Ema : x()
	});
R.Wga = R.D.extend({
		Lxa : M(q),
		Saa : M(q)
	});
R.cia = 0;
R.Qha = 1;
R.Ria = 2;
R.Tga = 3;
R.cka = 4;
R.hA = R.D.extend({
		Fa : p,
		ctor : function () {
			this.Fa = new R.mc(0, 0, 0)
		},
		Lb : C("Fa")
	});
R.hA.create = function (a) {
	var c = new R.hA;
	c && (c.Fa.i = a.i, c.Fa.h = a.h, c.Fa.c = a.c);
	return c
};
R.EO = R.D.extend({
		cb : p,
		ze : 0,
		iqa : x(),
		getFloatValue : x(),
		ioa : x(),
		loa : x(),
		Cra : x(),
		uE : C("cb")
	});
R.EO.create = function () {
	return new R.EO
};
R.aA = R.D.extend({
		cb : p,
		DT : 0,
		mJ : 0,
		lJ : 0,
		uE : C("cb"),
		ie : z("cb"),
		getTime : C("DT"),
		setTime : z("DT"),
		wpa : C("mJ"),
		IX : z("mJ"),
		vpa : C("lJ"),
		Yda : z("lJ")
	});
R.FZ = R.D.extend({
		p : 0,
		qc : "",
		eD : 0,
		RI : 0,
		AB : p,
		nD : p,
		ctor : function () {
			this.qc = ""
		},
		tf : C("p"),
		IF : z("p"),
		getName : C("qc"),
		sv : z("qc"),
		rsa : C("eD"),
		cfa : z("eD"),
		voa : C("RI"),
		Jda : z("RI"),
		roa : C("AB"),
		Gda : z("AB"),
		Bsa : C("nD"),
		efa : z("nD")
	});
R.xG = R.D.extend({
		qc : p,
		ze : 0,
		Qm : p,
		ctor : function () {
			this.m()
		},
		m : function () {
			this.Qm = [];
			this.qc = ""
		},
		getName : C("qc"),
		sv : z("qc"),
		j$ : C("ze"),
		gm : z("ze"),
		nqa : C("Qm")
	});
var sa = "contentSize", ta = "scale";
function Z(a) {
	R.log("Unexpected property: '" + a + "'!");
	R.e(q, "Unexpected property: '" + a + "'!")
}
function va(a, c) {
	this.oda = a;
	this.target = c
}
function wa(a, c, d) {
	this.nda = a;
	this.target = c;
	this.c8 = d
}
R.va = R.D.extend({
		tt : p,
		ctor : function () {
			this.tt = new R.Vp
		},
		Caa : function (a, c) {
			return this.dg(a, c)
		},
		Yba : function (a, c, d) {
			for (var e = d.Ub(q), f = d.Ub(q), f = e + f, g = 0; g < f; g++) {
				var k = g >= e,
				l = d.Ub(q),
				n = d.Pd(),
				r = q,
				s = d.Q();
				if (s === xa || s === ya || s === za)
					r = m;
				a instanceof R.Iv ? a.Kw && k && (a = a.Kw, r = R.mm(a.ty, n)) : k && a == d.gc.rj && (k = a.ty, k || (k = [], a.oY(k)), k.push(n));
				switch (l) {
				case Aa:
					l = this.Rba(a, c, d, n);
					r && this.Xaa(a, c, n, l, d);
					break;
				case Ba:
					l = this.Pba(a, c, d);
					r && this.Xr(a, c, n, l, d);
					break;
				case Ca:
					l = this.Qba(a, c, d);
					r && this.Waa(a, c, n,
						l, d);
					break;
				case Ga:
					l = this.Tba(a, c, d);
					r && this.An(a, c, n, l, d);
					break;
				case Ha:
					l = this.Sba(a, c, d, n);
					r && this.Yaa(a, c, n, l, d);
					break;
				case Ia:
					l = this.Kba(a, c, d);
					r && this.Vaa(a, c, n, l, d);
					break;
				case Ja:
					l = this.Hba(a, c, d);
					r && this.Vr(a, c, n, l, d);
					break;
				case Ka:
					l = this.Fba(a, c, d, n);
					r && this.Uaa(a, c, n, l, d);
					break;
				case La:
					l = this.Iba(a, c, d);
					r && this.jz(a, c, n, l, d);
					break;
				case Ma:
					l = this.Nba(a, c, d);
					r && this.gN(a, c, n, l, d);
					break;
				case Na:
					l = this.Oba(a, c, d);
					r && this.Wr(a, c, n, l, d);
					break;
				case Qa:
					l = this.Jba(a, c, d);
					r && this.eN(a, c, n, l, d);
					break;
				case Ra:
					l = this.Cba(a, c, d, n);
					r && this.Lk(a, c, n, l, d);
					break;
				case Sa:
					l = this.Uba(a, c, d, n);
					r && this.Bn(a, c, n, l, d);
					break;
				case Ta:
					l = this.wba(a, c, d);
					r && this.Taa(a, c, n, l, d);
					break;
				case Ua:
					l = this.Xba(a, c, d);
					r && this.iN(a, c, n, l, d);
					break;
				case Va:
					l = this.Aba(a, c, d, n);
					r && this.Ki(a, c, n, l, d);
					break;
				case Wa:
					l = this.Dba(a, c, d, n);
					r && this.ah(a, c, n, l, d);
					break;
				case Xa:
					l = this.Eba(a, c, d);
					r && this.cN(a, c, n, l, d);
					break;
				case Ya:
					l = this.Gba(a, c, d);
					r && this.dN(a, c, n, l, d);
					break;
				case Za:
					l = this.xba(a, c, d);
					r && this.$g(a, c, n, l, d);
					break;
				case $a:
					l =
						d.fj + this.Lba(a, c, d);
					r && this.fN(a, c, n, l, d);
					break;
				case ab:
					l = this.Mba(a, c, d);
					r && this.kz(a, c, n, l, d);
					break;
				case bb:
					l = this.Vba(a, c, d);
					r && this.hN(a, c, n, l, d);
					break;
				case cb:
					l = this.Wba(a, c, d);
					r && this.lz(a, c, n, l, d);
					break;
				case db:
					l = this.yba(a, c, d);
					r && this.aN(a, c, n, l, d);
					break;
				case eb:
					l = this.zba(a, c, d);
					r && l != p && this.bN(a, c, n, l, d);
					break;
				case fb:
					l = this.Bba(a, c, d);
					r && this.iz(a, c, n, l, d);
					break;
				default:
					n = l,
					R.log("Unexpected property type: '" + n + "'!"),
					R.e(q, "Unexpected property type: '" + n + "'!")
				}
			}
		},
		Woa : C("tt"),
		dg : function () {
			return R.r.create()
		},
		Rba : function (a, c, d, e) {
			var f = d.qb(),
			g = d.qb(),
			k = d.Ub(q);
			c = d.gc.kE(c);
			var l = R.AJ(f, g, k, c);
			a.q(R.m9(l, k, c));
			-1 < d.Vj.indexOf(e) && d.gc.fs([f, g, k], a, e);
			return l
		},
		Pba : function (a, c, d) {
			a = d.qb();
			d = d.qb();
			return new R.Dg(a, d)
		},
		Qba : function (a, c, d) {
			a = d.qb();
			d = d.qb();
			return new R.Dg(a, d)
		},
		Tba : function (a, c, d) {
			a = d.qb();
			var e = d.qb(),
			f = d.Ub(q);
			c = d.gc.kE(c);
			switch (f) {
			case gb:
				break;
			case hb:
				a = c.width - a;
				e = c.height - e;
				break;
			case ib:
				a = c.width * a / 100;
				e = c.height * e / 100;
				break;
			case jb:
				a = c.width * a / 100;
				break;
			case kb:
				e = c.height * e /
					100;
				break;
			case lb:
				c = R.zb.ip();
				a *= c;
				e *= c;
				break;
			default:
				R.log("Unknown CCB type.")
			}
			return new R.sm(a, e)
		},
		Sba : function (a, c, d, e) {
			c = d.qb();
			var f = d.qb(),
			g = d.Ub(q);
			R.eY(a, c, f, g);
			-1 < d.Vj.indexOf(e) && d.gc.fs([c, f, g], a, e);
			g == mb && (c *= R.zb.ip(), f *= R.zb.ip());
			return [c, f]
		},
		Hba : function (a, c, d) {
			return d.qb()
		},
		Fba : function (a, c, d, e) {
			c = d.qb();
			-1 < d.Vj.indexOf(e) && d.gc.fs(c, a, e);
			return c
		},
		Iba : function (a, c, d) {
			a = d.qb();
			d.Ub(q) == mb && (a *= R.zb.ip());
			return a
		},
		Nba : function (a, c, d) {
			return d.Ub(m)
		},
		Oba : function (a, c, d) {
			return d.Ub(m)
		},
		Jba : function (a, c, d) {
			a = d.qb();
			d = d.qb();
			return [a, d]
		},
		Cba : function (a, c, d, e) {
			c = d.sz();
			-1 < d.Vj.indexOf(e) && d.gc.fs(c, a, e);
			return c
		},
		Uba : function (a, c, d, e) {
			c = d.Pd();
			var f = d.Pd(),
			g;
			f != p && 0 != f.length && (0 == c.length ? (f = d.fj + f, c = R.fb.d().Jd(f), f = c.n(), f = R.rect(0, 0, f.width, f.height), g = R.oe.Fh(c, f)) : (g = R.Ff.d(), c = d.fj + c, -1 == d.Ao.indexOf(c) && (g.By(c), d.Ao.push(c)), g = g.Ei(f)), -1 < d.Vj.indexOf(e) && d.gc.fs(g, a, e));
			return g
		},
		wba : function (a, c, d) {
			a = d.fj + d.Pd();
			d = d.Pd();
			c = p;
			d = R.zb.uW(d);
			a = R.zb.uW(a);
			d != p && "" != d && (c = R.Nn.d(),
				c.f7(a), c = c.Dj(d));
			return c
		},
		Xba : function (a, c, d) {
			a = d.fj + d.Pd();
			return "" != a ? R.fb.d().Jd(a) : p
		},
		Aba : function (a, c, d, e) {
			c = d.Q();
			-1 < d.Vj.indexOf(e) && d.gc.fs(c, a, e);
			return c
		},
		Dba : function (a, c, d, e) {
			c = d.Q();
			var f = d.Q(),
			g = d.Q();
			c = {
				i : c,
				h : f,
				c : g
			};
			-1 < d.Vj.indexOf(e) && d.gc.fs(R.hA.create(c), a, e);
			return c
		},
		Eba : function (a, c, d) {
			a = d.qb();
			c = d.qb();
			var e = d.qb(),
			f = d.qb(),
			g = d.qb(),
			k = d.qb(),
			l = d.qb();
			d = d.qb();
			var n = [];
			n[0] = {
				i : a,
				h : c,
				c : e,
				g : f
			};
			n[1] = {
				i : g,
				h : k,
				c : l,
				g : d
			};
			return n
		},
		Gba : function (a, c, d) {
			a = d.sz();
			d = d.sz();
			return [a, d]
		},
		xba : function (a, c, d) {
			a = d.Ub(q);
			d = d.Ub(q);
			return new R.Pj(a, d)
		},
		Lba : function (a, c, d) {
			return d.Pd()
		},
		Vba : function (a, c, d) {
			return d.Pd()
		},
		Wba : function (a, c, d) {
			return d.Pd()
		},
		Mba : function (a, c, d) {
			return d.Pd()
		},
		yba : function (a, c, d) {
			c = d.Pd();
			var e = d.Ub(q);
			if (e !== nb) {
				var f = p;
				if (d.gk)
					e === ob ? (d.OD(a), d.ND(c), d.MD(0)) : (d.fU(a), d.eU(c));
				else if (e === ob ? f = d.gc.rj : e === pb && (f = d.ve), f != p)
					if (0 < c.length)
						if (a = 0, f != p && f.lba && (a = h), 0 == a && d.ht != p && (a = h), 0 == a)
							R.log("Skipping selector '" + c + "' since no CCBSelectorResolver is present.");
						else
							return new va(a, f);
					else
						R.log("Unexpected empty selector.");
				else
					R.log("Unexpected NULL target for selector.")
			}
			return p
		},
		zba : function (a, c, d) {
			c = d.Pd();
			var e = d.Ub(q),
			f = d.Ub(q);
			if (e !== nb)
				if (d.gk)
					e == ob ? (d.OD(a), d.ND(c), d.MD(f)) : (d.fU(a), d.eU(c));
				else if (a = p, e == ob ? a = d.gc.rj : e == pb && (a = d.ve), a != p)
					if (0 < c.length)
						if (e = 0, a != p && a.kba && (e = h), 0 == e && d.ht != p && (e = h), 0 == e)
							R.log("Skipping selector '" + c + "' since no CCBSelectorResolver is present.");
						else
							return new wa(e, a, f);
					else
						R.log("Unexpected empty selector.");
				else
					R.log("Unexpected NULL target for selector.");
			return p
		},
		Bba : function (a, c, d) {
			a = d.fj + d.Pd();
			a = R.zb.K8(a) + ".ccbi";
			var e = R.cc.d(),
			f = e.hV(a);
			a = new R.zb(d);
			e = e.oV(f, "rb", h);
			a.jp(e, d.ve);
			a.gc.ON(c.n());
			a.tX(d.$p);
			a.gc.uv(d.ve);
			c = a.$W(q);
			d.tX(a.$p);
			c && -1 != a.gc.Ws && a.gc.BN(a.gc.Ws, 0);
			return c
		},
		Kba : function (a, c, d) {
			a = d.qb();
			d = d.qb();
			return [a, d]
		},
		Xaa : function (a, c, d, e) {
			"position" === d ? a.q(e) : Z(d)
		},
		Xr : function (a, c, d, e) {
			"anchorPoint" === d ? a.R(e) : Z(d)
		},
		Waa : function (a, c, d) {
			Z(d)
		},
		An : function (a, c, d, e) {
			d === sa ? a.ma(e) :
			Z(d)
		},
		Yaa : function (a, c, d, e) {
			d === ta ? (a.fh(e[0]), a.yg(e[1])) : Z(d)
		},
		Vaa : function (a, c, d, e) {
			if ("skew" === d)
				a.xv(e[0]), a.yv(e[1]);
			else {
				c = d + "X";
				var f = d + "Y";
				(!a[c] || !a[f]) && Z(d);
				a[c](e[0]);
				a[f](e[1])
			}
		},
		Vr : function (a, c, d, e) {
			this.tt.Ok(e, d)
		},
		Uaa : function (a, c, d, e) {
			"rotation" === d ? a.he(e) : Z(d)
		},
		jz : function (a, c, d) {
			Z(d)
		},
		gN : function (a, c, d, e) {
			"tag" === d ? a.up(e) : Z(d)
		},
		Wr : function (a, c, d) {
			Z(d)
		},
		eN : function (a, c, d) {
			Z(d)
		},
		Lk : function (a, c, d, e) {
			"visible" === d ? a.Aa(e) : "ignoreAnchorPointForPosition" === d ? a.Gi(e) : Z(d)
		},
		Bn : function (a,
			c, d) {
			Z(d)
		},
		Taa : function (a, c, d) {
			Z(d)
		},
		iN : function (a, c, d) {
			Z(d)
		},
		Ki : function (a, c, d) {
			Z(d)
		},
		ah : function (a, c, d) {
			Z(d)
		},
		cN : function (a, c, d) {
			Z(d)
		},
		dN : function (a, c, d) {
			Z(d)
		},
		$g : function (a, c, d) {
			Z(d)
		},
		fN : function (a, c, d) {
			Z(d)
		},
		hN : function (a, c, d, e) {
			this.tt.Ok(e, d)
		},
		lz : function (a, c, d) {
			Z(d)
		},
		kz : function (a, c, d) {
			Z(d)
		},
		aN : function (a, c, d) {
			Z(d)
		},
		bN : function (a, c, d) {
			Z(d)
		},
		iz : function (a, c, d) {
			Z(d)
		}
	});
R.va.Kc = function () {
	return new R.va
};
var Aa = 0, Ga = 1, Ba = 2, Ca = 3, Ha = 4, Ka = 5, Ma = 6, Ja = 7, Qa = 8, Ra = 9, Sa = 10, Ua = 11, Va = 12, Wa = 13, Xa = 14, Ya = 15, Za = 16, $a = 17, cb = 18, ab = 19, Na = 20, db = 21, Ta = 22, fb = 23, bb = 24, eb = 25, La = 26, Ia = 27, xa = 0, ya = 1, za = 2, nb = 0, ob = 1, pb = 2, gb = 0, ib = 1, hb = 2, jb = 3, kb = 4, lb = 5, mb = 1, qb = qb || window;
R.Iv = R.r.extend({
		Kw : p,
		moa : C("Kw"),
		yX : z("Kw")
	});
R.Iv.create = function () {
	return new R.Iv
};
R.zb = R.D.extend({
		gk : q,
		If : p,
		fj : "",
		i3 : 0,
		gf : 0,
		oo : 0,
		aL : p,
		Ao : p,
		ve : p,
		gc : p,
		$p : p,
		Vj : p,
		Jw : p,
		MI : p,
		CB : p,
		ht : p,
		Jq : p,
		Kq : p,
		cK : p,
		BI : p,
		Xt : p,
		Yt : p,
		cla : q,
		ctor : function (a, c, d, e) {
			this.aL = [];
			this.Ao = [];
			this.gf = this.oo = -1;
			0 != arguments.length && (a instanceof R.zb ? (this.Ao = a.Ao, this.Jw = a.Jw, this.CB = a.CB, this.ht = a.ht, this.MI = a.MI, this.Xt = a.Xt, this.Yt = a.Yt, this.Jq = a.Jq, this.Kq = a.Kq, this.fj = a.fj) : (this.Jw = a, this.CB = c, this.ht = d, this.MI = e))
		},
		ooa : C("fj"),
		Fda : z("fj"),
		jp : function (a, c) {
			this.gc = new R.BO;
			this.If = a;
			this.i3 = a.length;
			this.gf =
				this.oo = 0;
			this.ve = c;
			this.gc.ON(R.o.d().$);
			return m
		},
		aX : function (a, c, d, e) {
			d == p ? d = R.o.d().$ : d instanceof R.BO && (e = d, d = R.o.d().$);
			var f = R.cc.d();
			a = f.oV(f.hV(a));
			return this.Hca(a, c, d, e)
		},
		Hca : function (a, c, d) {
			this.jp(a, c);
			a = this.gc;
			a.ON(d);
			a.uv(c);
			this.Jq = [];
			this.Kq = [];
			this.Xt = [];
			this.Yt = [];
			this.$p = new R.Vp;
			(c = this.$W(m)) && -1 != a.Ws && a.BN(a.Ws, 0);
			if (this.gk) {
				d = [];
				a = [];
				for (var e = this.$p, f = e.vu(), g = 0; g < f.length; g++)
					d.push(f[g]), a.push(e.Jj(f[g]));
				this.cK = d;
				this.BI = a
			}
			return c
		},
		Fma : function (a, c, d, e) {
			a = this.aX(a,
					c, d, e);
			c = R.fl.create();
			c.I(a);
			return c
		},
		noa : C("CB"),
		poa : C("ht"),
		Sna : C("gc"),
		Fza : z("gc"),
		Ona : C("Vj"),
		zqa : C("Ao"),
		BV : C("ve"),
		Ub : function (a) {
			for (var c = 0; !this.sS(); )
				c++;
			for (var d = 0, e = c - 1; 0 <= e; e--)
				this.sS() && (d |= 1 << e);
			d |= 1 << c;
			a = a ? d % 2 ? 0 | d / 2 : 0 | -d / 2 : d - 1;
			this.V2();
			return a
		},
		Q : function () {
			var a = this.If[this.gf];
			this.gf++;
			return a
		},
		sz : function () {
			return 0 != this.Q()
		},
		qb : function () {
			switch (this.Q()) {
			case 0:
				return 0;
			case 1:
				return 1;
			case 2:
				return -1;
			case 3:
				return 0.5;
			case 4:
				return this.Ub(m);
			default:
				return this.y3(23,
					8)
			}
		},
		y3 : function (a, c) {
			var d = a + c + 1,
			e = d >> 3;
			this.m3(d);
			var d = Math.pow(2, c - 1) - 1,
			f = this.eT(a + c, 1, e),
			g = this.eT(a, c, e),
			k = 0,
			l = 2,
			n = 0;
			do
				for (var r = this.XC(++n, e), s = a % 8 || 8, t = 1 << s; t >>= 1; )
					r & t && (k += 1 / l), l *= 2;
			while (a -= s);
			this.gf += e;
			return g == (d << 1) + 1 ? k ? NaN : f ? -Infinity : Infinity : (1 + -2 * f) * (g || k ? !g ? Math.pow(2, -d + 1) * k : Math.pow(2, g - d) * (1 + k) : 0)
		},
		eT : function (a, c, d) {
			var e = (a + c) % 8,
			f = a % 8,
			g = d - (a >> 3) - 1;
			a = d + ( - (a + c) >> 3);
			var k = g - a;
			c = this.XC(g, d) >> f & (1 << (k ? 8 - f : c)) - 1;
			for (k && e && (c += (this.XC(a++, d) & (1 << e) - 1) << (k-- << 3) - f); k; )
				c += this.t6(this.XC(a++,
						d), (k-- << 3) - f);
			return c
		},
		XC : function (a, c) {
			return this.If[this.gf + c - a - 1]
		},
		t6 : function (a, c) {
			for (++c; --c; a = 1073741824 == ((a %= 2147483648) & 1073741824) ? 2 * a : 2 * (a - 1073741824) + 2147483648);
			return a
		},
		m3 : function (a) {
			this.gf + Math.ceil(a / 8) < this.If.length || b(Error("Index out of bound"))
		},
		Pd : function () {
			return this.aL[this.Ub(q)]
		},
		Lua : C("gk"),
		pra : C("Xt"),
		qra : C("Yt"),
		rra : C("Jq"),
		sra : C("Kq"),
		Vqa : C("cK"),
		Una : C("BI"),
		Tna : C("$p"),
		tX : z("$p"),
		eU : function (a) {
			this.Xt.push(a)
		},
		fU : function (a) {
			this.Yt.push(a)
		},
		ND : function (a) {
			this.gc.ND(a)
		},
		OD : function (a) {
			this.gc.OD(a)
		},
		MD : function (a) {
			this.gc.MD(a)
		},
		$W : function (a) {
			if (!this.r5() || !this.u5() || !this.s5())
				return p;
			var c = this.fT();
			this.$p.Ok(this.gc, c);
			a && this.$R(c);
			return c
		},
		Fla : function (a) {
			this.Jq.push(a)
		},
		Gla : function (a) {
			a != p && this.Kq.push(a)
		},
		$R : function (a) {
			a.oY(p);
			a = a.k;
			for (var c = 0, d = a.length; c < d; c++)
				this.$R(a[c])
		},
		q5 : function (a) {
			var c = this.Ub(q);
			if (!c)
				return m;
			for (var d = new R.xG, e = this.gk, f = this.gc, g = d.Qm, k = 0; k < c; k++) {
				var l = this.qb(),
				n = this.Pd(),
				r = this.Ub(q),
				s = [n, r],
				t = new R.aA;
				t.setTime(l);
				t.ie(s);
				e && f.wC.push(r + ":" + n);
				g.push(t)
			}
			a.Gda(d);
			return m
		},
		t5 : function (a) {
			var c = this.Ub(q);
			if (!c)
				return m;
			for (var d = new R.xG, e = d.Qm, f = 0; f < c; f++) {
				var g = this.qb(),
				k = this.Pd(),
				l = this.qb(),
				n = this.qb(),
				r = this.qb(),
				k = [k, l, n, r],
				l = new R.aA;
				l.setTime(g);
				l.ie(k);
				e.push(l)
			}
			a.efa(d);
			return m
		},
		s5 : function () {
			for (var a = this.gc.cu, c = this.Ub(q), d = 0; d < c; d++) {
				var e = new R.FZ;
				e.IF(this.qb());
				e.sv(this.Pd());
				e.cfa(this.Ub(q));
				e.Jda(this.Ub(m));
				if (!this.q5(e) || !this.t5(e))
					return q;
				a.push(e)
			}
			this.gc.Ada(this.Ub(m));
			return m
		},
		Gca : function (a) {
			var c = new R.aA;
			c.setTime(this.qb());
			var d = this.Ub(q),
			e = 0,
			f = p;
			if (2 === d || 3 === d || 4 === d || 5 === d || 6 === d || 7 === d)
				e = this.qb();
			c.IX(d);
			c.Yda(e);
			a == Ra ? f = this.sz() : a == Va ? f = this.Q() : a == Wa ? (a = R.Gy(this.Q(), this.Q(), this.Q()), f = R.hA.create(a)) : a == Ia ? f = [this.qb(), this.qb()] : a == Ka ? f = this.qb() : a == Ha || a == Aa || a == Ia ? f = [this.qb(), this.qb()] : a == Sa && (a = this.Pd(), d = this.Pd(), "" == a ? (d = this.fj + d, a = R.fb.d().Jd(d), d = a.n(), d = R.rect(0, 0, d.width, d.height), f = R.oe.Fh(a, d)) : (a = this.fj + a, e = R.Ff.d(), -1 == this.Ao.indexOf(a) &&
						(e.By(a), this.Ao.push(a)), f = e.Ei(d)));
			c.ie(f);
			return c
		},
		r5 : function () {
			if (this.If == p)
				return q;
			var a = this.w5(this.gf, 4, m);
			this.gf += 4;
			if ("ccbi" != a)
				return q;
			a = this.Ub(q);
			if (5 != a)
				return R.log("WARNING! Incompatible ccbi file version (file: " + a + " reader: 5)"), q;
			this.gk = this.sz();
			this.gc.gk = this.gk;
			return m
		},
		w5 : function (a, c, d) {
			a = "";
			var e = this.If,
			f = this.gf;
			if (d || q)
				for (d = c - 1; 0 <= d; d--)
					a += String.fromCharCode(e[f + d]);
			else
				for (d = 0; d < c; d++)
					a += String.fromCharCode(e[f + d]);
			return a
		},
		u5 : function () {
			for (var a = this.Ub(q),
				c = 0; c < a; c++)
				this.v5();
			return m
		},
		v5 : function () {
			for (var a = this.Q(), c = this.Q(), a = a << 8 | c, c = "", d = this.If, e = this.gf, f = 0; f < a; f++)
				var g = d[e + f].toString("16").toUpperCase(), g = 1 < g.length ? g : "0" + g, c = c + ("%" + g);
			c = decodeURIComponent(c);
			this.gf += a;
			this.aL.push(c)
		},
		fT : function (a) {
			var c = this.Pd(),
			d,
			e = this.gk,
			f = this.gc;
			e && (d = this.Pd());
			var g = this.Ub(q),
			k;
			g != nb && (k = this.Pd());
			var l = this.Jw.qV(c);
			l || (l = this.Jw.qV("CCNode"));
			c = l.Caa(a, this);
			f.rj || f.Wea(c);
			e && c == f.rj && f.Wda(d);
			var n = new R.Vp,
			r = this.Vj = [],
			s = this.Ub(q);
			for (d =
					0; d < s; ++d) {
				for (var t = this.Ub(q), v = new R.Vp, w = this.Ub(q), y = 0; y < w; ++y) {
					var A = new R.xG;
					A.sv(this.Pd());
					A.gm(this.Ub(q));
					r.push(A.getName());
					for (var D = this.Ub(q), H = A.Qm, J = 0; J < D; ++J) {
						var K = this.Gca(A.ze);
						H.push(K)
					}
					v.Ok(A, A.getName())
				}
				n.Ok(v, t)
			}
			0 < n.count() && f.q7(c, n);
			l.Yba(c, a, this);
			c instanceof R.Iv && (d = c.Kw, d.q(c.rc()), d.he(c.Sy()), d.fh(c.ia), d.yg(c.ra), d.up(c.ud), d.Aa(m), f.Iaa(c, d), c.yX(p), c = d);
			d = p;
			g != nb && e && (g == ob ? (f.o7(k), f.p7(c)) : (this.Jq.push(k), this.Kq.push(c)));
			if (0 < l.tt.length && !e && (d = c, d != p &&
					d.Saa != p)) {
				e = l.tt.vu();
				for (d = 0; d < e.length; d++);
			}
			this.Vj = p;
			e = this.Ub(q);
			for (d = 0; d < e; d++)
				f = this.fT(c), c.I(f);
			return c
		},
		sS : function () {
			var a = 0 != (this.If[this.gf] & 1 << this.oo);
			this.oo++;
			8 <= this.oo && (this.oo = 0, this.gf++);
			return a
		},
		V2 : function () {
			this.oo && (this.oo = 0, this.gf++)
		},
		dla : x()
	});
R.zb.YR = 1;
R.zb.oBa = function (a) {
	R.zb.YR = a
};
R.zb.ip = function () {
	return R.zb.YR
};
R.zb.exa = function (a, c, d, e) {
	e = e || R.zb.kM();
	a = R.zb.load(a, c, d, e);
	c = R.fl.create();
	c.I(a);
	return c
};
R.zb.load = function (a, c, d, e) {
	e = e || R.zb.kM();
	var f = new R.zb(R.ih.Kaa());
	f.Fda(e);
	if (5 > a.length || a.toLowerCase().lastIndexOf(".ccbi") != a.length - 5)
		a += ".ccbi";
	a = f.aX(a, c, d);
	var g,
	k,
	l;
	if (c) {
		e = f.Xt;
		var n = f.Yt;
		for (d = 0; d < e.length; d++)
			g = e[d], k = n[d], k instanceof R.Wk ? k.Cy(c, c[g], 255) : k.AX(c[g], c);
		e = f.Jq;
		n = f.Kq;
		for (d = 0; d < e.length; d++)
			g = e[d], k = n[d], c[g] = k
	}
	e = f.cK;
	f = f.BI;
	if (!e || !f)
		return a;
	for (d = 0; d < e.length; d++) {
		var r = e[d],
		n = f[d];
		r.Rla = n;
		if (g = n.kJ) {
			var s;
			if (-1 < g.indexOf(".")) {
				k = g.split(".");
				s = qb[k[0]];
				l = 1;
				for (var t =
						k.length - 1; l < t; l++)
					s = s[k[l]];
				s = new s[k[k.length - 1]]
			} else
				s = new qb[g];
			s.yma = g;
			r.xma = s;
			s.rza = r;
			for (var t = n.TB, v = n.UB, w = n.SB, r = 0; r < t.length; r++)
				g = t[r], k = v[r], l = w[r], k instanceof R.Wk ? k.Cy(s, s[g], l) : k.AX(s[g], s);
			l = n.VB;
			t = n.WB;
			for (r = 0; r < l.length; r++)
				g = l[r], k = t[r], s[g] = k;
			s.LW && "function" == typeof s.LW && s.LW();
			g = n.wC;
			for (r = 0; r < g.length; r++)
				l = g[r].split(":"), k = l[0], l = l[1], 1 == k ? n.zX(R.bc.create(s[l], s), g[r]) : 2 == k && c && n.zX(R.bc.create(c[l], c), g[r])
		}
	}
	return a
};
R.zb.iT = "";
R.zb.Uea = function (a) {
	R.zb.iT = a
};
R.zb.kM = function () {
	return R.zb.iT
};
R.zb.uW = function (a) {
	var c = a.lastIndexOf("/");
	return -1 != c ? a.substring(c + 1, a.length - c) : a
};
R.zb.K8 = function (a) {
	var c = a.lastIndexOf(".");
	return -1 != c ? a.substring(0, c) : a
};
R.zb.toLowerCase = function (a) {
	return a.toLowerCase()
};
R.zb.lna = function (a, c) {
	return a.length >= c.length ? 0 == a.lastIndexOf(c) : q
};
R.zb.concat = function (a, c) {
	return a + c
};
R.vG = R.va.extend({
		dg : function () {
			return R.Iv.create()
		},
		iz : function (a, c, d, e, f) {
			"ccbFile" == d ? a.yX(e) : R.va.prototype.iz.call(this, a, c, d, e, f)
		}
	});
R.vG.Kc = function () {
	return new R.vG
};
R.nm = R.va.extend({
		dg : x(),
		bN : function (a, c, d, e, f) {
			"ccControl" == d ? a.Cy(e.target, e.nda, e.c8) : R.va.prototype.bN.call(this, a, c, d, e, f)
		},
		Lk : function (a, c, d, e, f) {
			"enabled" == d ? a.Nc(e) : "selected" == d ? a.hs(e) : R.va.prototype.Lk.call(this, a, c, d, e, f)
		}
	});
R.NG = R.nm.extend({
		dg : function () {
			return R.Wk.create()
		},
		Lk : function (a, c, d, e, f) {
			"zoomOnTouchDown" == d ? a.tY(e) : R.nm.prototype.Lk.call(this, a, c, d, e, f)
		},
		hN : function (a, c, d, e, f) {
			"title|1" == d ? a.VF(e, R.af) : "title|2" == d ? a.VF(e, R.Ep) : "title|3" == d ? a.VF(e, R.Dp) : R.nm.prototype.hN.call(this, a, c, d, e, f)
		},
		kz : function (a, c, d, e, f) {
			"titleTTF|1" == d ? a.WN(e, R.af) : "titleTTF|2" == d ? a.WN(e, R.Ep) : "titleTTF|3" == d ? a.WN(e, R.Dp) : R.nm.prototype.kz.call(this, a, c, d, e, f)
		},
		jz : function (a, c, d, e, f) {
			"titleTTFSize|1" == d ? a.XN(e, R.af) : "titleTTFSize|2" ==
			d ? a.XN(e, R.Ep) : "titleTTFSize|4" == d ? a.XN(e, R.Dp) : R.nm.prototype.jz.call(this, a, c, d, e, f)
		},
		Xr : function (a, c, d, e, f) {
			"labelAnchorPoint" == d ? a.RX(e) : R.nm.prototype.Xr.call(this, a, c, d, e, f)
		},
		An : function (a, c, d, e, f) {
			"preferedSize" == d ? a.Hn(e) : R.nm.prototype.An.call(this, a, c, d, e, f)
		},
		Bn : function (a, c, d, e, f) {
			"backgroundSpriteFrame|1" == d ? e != p && a.FN(e, R.af) : "backgroundSpriteFrame|2" == d ? e != p && a.FN(e, R.Ep) : "backgroundSpriteFrame|3" == d ? e != p && a.FN(e, R.Dp) : R.nm.prototype.Bn.call(this, a, c, d, e, f)
		},
		ah : function (a, c, d, e, f) {
			"titleColor|1" ==
			d ? a.UF(e, R.af) : "titleColor|2" == d ? a.UF(e, R.Ep) : "titleColor|3" == d ? a.UF(e, R.Dp) : R.nm.prototype.ah.call(this, a, c, d, e, f)
		}
	});
R.NG.Kc = function () {
	return new R.NG
};
ta = "scale";
R.NH = R.va.extend({
		dg : function () {
			return R.Zn.create()
		},
		An : function (a, c, d, e, f) {
			d == sa ? a.aO(e) : R.va.prototype.An.call(this, a, c, d.size, f)
		},
		iz : function (a, c, d, e, f) {
			"container" == d ? (a.Nda(e), a.TY()) : R.va.prototype.iz.call(this, a, c, d, e, f)
		},
		Lk : function (a, c, d, e, f) {
			"clipsToBounds" == d ? a.Lda(e) : "bounces" == d ? a.Dda(e) : R.va.prototype.Lk.call(this, a, c, d, e, f)
		},
		Vr : function (a, c, d, e, f) {
			d == ta ? a.jd(e) : R.va.prototype.Vr.call(this, a, c, d, e, f)
		},
		Wr : function (a, c, d, e, f) {
			"direction" == d ? a.DX(e) : R.va.prototype.Wr.call(this, a, c, d, e,
				f)
		}
	});
R.NH.Kc = function () {
	return new R.NH
};
var sa = "contentSize", rb = "color", sb = "opacity", tb = "blendFunc";
R.MH = R.va.extend({
		dg : function () {
			return R.Eg.create()
		},
		ah : function (a, c, d, e, f) {
			d == rb ? (255 !== e.i || 255 !== e.h || 255 !== e.c) && a.L(e) : R.va.prototype.ah.call(this, a, c, d, e, f)
		},
		Ki : function (a, c, d, e, f) {
			d == sb ? a.U(e) : R.va.prototype.Ki.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d != tb && R.va.prototype.$g.call(this, a, c, d, e, f)
		},
		Bn : function (a, c, d, e, f) {
			"spriteFrame" == d ? a.Md(e) : R.va.prototype.Bn.call(this, a, c, d, e, f)
		},
		An : function (a, c, d, e, f) {
			d != sa && ("preferedSize" == d ? a.Hn(e) : R.va.prototype.An.call(this, a, c, d, e, f))
		},
		Vr : function (a,
			c, d, e, f) {
			"insetLeft" == d ? a.sea(e) : "insetTop" == d ? a.uea(e) : "insetRight" == d ? a.tea(e) : "insetBottom" == d ? a.rea(e) : R.va.prototype.Vr.call(this, a, c, d, e, f)
		}
	});
R.MH.Kc = function () {
	return new R.MH
};
rb = "color";
sb = "opacity";
tb = "blendFunc";
R.RH = R.va.extend({
		dg : function () {
			return R.t.create()
		},
		ah : function (a, c, d, e, f) {
			d === rb ? (255 !== e.i || 255 !== e.h || 255 !== e.c) && a.L(e) : R.va.prototype.ah.call(this, a, c, d, e, f)
		},
		Ki : function (a, c, d, e, f) {
			d === sb ? a.U(e) : R.va.prototype.Ki.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d === tb ? a.Qd(e) : R.va.prototype.$g.call(this, a, c, d, e, f)
		},
		Bn : function (a, c, d, e, f) {
			"displayFrame" === d ? e ? a.fm(e) : R.log("ERROR: SpriteFrame is null") : R.va.prototype.Bn.call(this, a, c, d, e, f)
		},
		dN : function (a, c, d, e, f) {
			"flip" === d ? (a.zz(e[0]), a.Nk(e[1])) :
			R.va.prototype.dN.call(this, a, c, d, e, f)
		}
	});
R.RH.Kc = function () {
	return new R.RH
};
R.Rh = R.va.extend({
		dg : function () {
			return R.ne.create()
		},
		Lk : function (a, c, d, e, f) {
			"touchEnabled" === d || "isTouchEnabled" === d ? a.xf(e) : "accelerometerEnabled" === d || "isAccelerometerEnabled" === d ? a.rda(e) : "mouseEnabled" === d || "isMouseEnabled" === d ? a.KN(e) : "keyboardEnabled" === d || "isKeyboardEnabled" === d ? a.PX && "browser" === T.platform ? a.PX(e) : R.log("The property 'isKeyboardEnabled' is not supported!") : R.va.prototype.Lk.call(this, a, c, d, e, f)
		}
	});
R.Rh.Kc = function () {
	return new R.Rh
};
R.eH = R.Rh.extend({
		dg : function () {
			return R.Wc.create()
		},
		ah : function (a, c, d, e, f) {
			d === rb ? a.L(e) : R.Rh.prototype.ah.call(this, a, c, d, e, f)
		},
		Ki : function (a, c, d, e, f) {
			d === sb ? a.U(e) : R.Rh.prototype.Ki.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d === tb ? a.Qd(e) : R.Rh.prototype.$g.call(this, a, c, d, e, f)
		}
	});
R.eH.Kc = function () {
	return new R.eH
};
R.gH = R.Rh.extend({
		dg : function () {
			return R.fH.create()
		},
		ah : function (a, c, d, e, f) {
			"startColor" === d ? a.TN(e) : "endColor" == d ? a.IN(e) : R.Rh.prototype.ah.call(this, a, c, d, e, f)
		},
		Ki : function (a, c, d, e, f) {
			"startOpacity" === d ? a.ifa(e) : "endOpacity" === d ? a.cea(e) : R.Rh.prototype.Ki.call(this, a, c, d, e, f)
		},
		Xr : function (a, c, d, e, f) {
			"vector" === d ? a.Afa(e) : R.Rh.prototype.Xr.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d === tb ? a.Qd(e) : R.Rh.prototype.$g.call(this, a, c, d, e, f)
		}
	});
R.gH.Kc = function () {
	return new R.gH
};
R.lH = R.Rh.extend({
		dg : function () {
			return R.iH.create()
		}
	});
R.lH.Kc = function () {
	return new R.lH
};
R.KP = R.va.extend({
		dg : M(p),
		aN : function (a, c, d, e, f) {
			"block" === d ? p != e && a.jY(e.oda, e.target) : R.va.prototype.aN.call(this, a, c, d, e, f)
		},
		Lk : function (a, c, d, e, f) {
			"isEnabled" === d ? a.Nc(e) : R.va.prototype.Lk.call(this, a, c, d, e, f)
		}
	});
R.jH = R.KP.extend({
		dg : function () {
			return R.Ds.create()
		},
		Bn : function (a, c, d, e, f) {
			"normalSpriteFrame" === d ? e != p && a.Fea(e) : "selectedSpriteFrame" === d ? e != p && a.bfa(e) : "disabledSpriteFrame" === d ? e != p && a.Uda(e) : R.KP.prototype.Bn.call(this, a, c, d, e, f)
		}
	});
R.jH.Kc = function () {
	return new R.jH
};
R.dH = R.va.extend({
		dg : function () {
			return R.ka.create()
		},
		ah : function (a, c, d, e, f) {
			d === rb ? (255 !== e.i || 255 !== e.h || 255 !== e.c) && a.L(e) : R.va.prototype.ah.call(this, a, c, d, e, f)
		},
		Ki : function (a, c, d, e, f) {
			d === sb ? a.U(e) : R.va.prototype.Ki.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d === tb ? a.Qd(e) : R.va.prototype.$g.call(this, a, c, d, e, f)
		},
		kz : function (a, c, d, e, f) {
			"fontName" === d ? a.KF(e) : R.va.prototype.kz.call(this, a, c, d, e, f)
		},
		lz : function (a, c, d, e, f) {
			"string" === d ? a.sc(e) : R.va.prototype.lz.call(this, a, c, d, e, f)
		},
		jz : function (a,
			c, d, e, f) {
			"fontSize" === d ? a.Az(e) : R.va.prototype.jz.call(this, a, c, d, e, f)
		},
		Wr : function (a, c, d, e, f) {
			"horizontalAlignment" === d ? a.oea(e) : "verticalAlignment" === d ? a.Bfa(e) : R.va.prototype.Wr.call(this, a, c, d, e, f)
		},
		An : function (a, c, d, e, f) {
			"dimensions" === d ? a.Tda(e) : R.va.prototype.An.call(this, a, c, d, e, f)
		}
	});
R.dH.Kc = function () {
	return new R.dH
};
R.cH = R.va.extend({
		dg : function () {
			return R.Bg.create()
		},
		ah : function (a, c, d, e, f) {
			d === rb ? (255 !== e.i || 255 !== e.h || 255 !== e.c) && a.L(e) : R.va.prototype.ah.call(this, a, c, d, e, f)
		},
		Ki : function (a, c, d, e, f) {
			d === sb ? a.U(e) : R.va.prototype.Ki.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d === tb ? a.Qd(e) : R.va.prototype.$g.call(this, a, c, d, e, f)
		},
		fN : function (a, c, d, e, f) {
			"fntFile" === d ? a.lea(e) : R.va.prototype.fN.call(this, a, c, d, e, f)
		},
		lz : function (a, c, d, e, f) {
			"string" === d ? a.sc(e) : R.va.prototype.lz.call(this, a, c, d, e, f)
		}
	});
R.cH.Kc = function () {
	return new R.cH
};
R.tH = R.va.extend({
		dg : function () {
			return R.kb.create()
		},
		Wr : function (a, c, d, e, f) {
			"emitterMode" === d ? a.JX(e) : R.va.prototype.Wr.call(this, a, c, d, e, f)
		},
		Xr : function (a, c, d, e, f) {
			"posVar" === d ? a.ZX(e) : "gravity" === d ? a.NX(e) : R.va.prototype.Xr.call(this, a, c, d, e, f)
		},
		Vr : function (a, c, d, e, f) {
			"emissionRate" === d ? a.$da(e) : "duration" === d ? a.IF(e) : R.va.prototype.Vr.call(this, a, c, d, e, f)
		},
		gN : function (a, c, d, e, f) {
			"totalParticles" === d ? a.ufa(e) : R.va.prototype.gN.call(this, a, c, d, e, f)
		},
		eN : function (a, c, d, e, f) {
			"life" === d ? (a.wea(e[0]),
				a.xea(e[1])) : "startSize" === d ? (a.lfa(e[0]), a.mfa(e[1])) : "endSize" === d ? (a.fea(e[0]), a.gea(e[1])) : "startSpin" === d ? (a.nfa(e[0]), a.ofa(e[1])) : "endSpin" === d ? (a.hea(e[0]), a.iea(e[1])) : "angle" === d ? (a.wda(e[0]), a.xda(e[1])) : "speed" === d ? (a.SN(e[0]), a.iY(e[1])) : "tangentialAccel" === d ? (a.qfa(e[0]), a.rfa(e[1])) : "radialAccel" === d ? (a.bY(e[0]), a.cY(e[1])) : "startRadius" === d ? (a.jfa(e[0]), a.kfa(e[1])) : "endRadius" === d ? (a.dea(e[0]), a.eea(e[1])) : "rotatePerSecond" === d ? (a.Xea(e[0]), a.Yea(e[1])) : R.va.prototype.eN.call(this,
				a, c, d, e, f)
		},
		cN : function (a, c, d, e, f) {
			"startColor" === d ? (a.TN(e[0]), a.hfa(e[1])) : "endColor" === d ? (a.IN(e[0]), a.bea(e[1])) : R.va.prototype.cN.call(this, a, c, d, e, f)
		},
		$g : function (a, c, d, e, f) {
			d === tb ? a.Qd(e) : R.va.prototype.$g.call(this, a, c, d, e, f)
		},
		iN : function (a, c, d, e, f) {
			"texture" === d ? a.Na(e) : R.va.prototype.iN.call(this, a, c, d, e, f)
		}
	});
R.tH.Kc = function () {
	return new R.tH
};
R.ih = R.D.extend({
		zm : p,
		ctor : function () {
			this.zm = {}

		},
		fX : function () {
			this.Mh("CCNode", R.va.Kc());
			this.Mh("CCLayer", R.Rh.Kc());
			this.Mh("CCLayerColor", R.eH.Kc());
			this.Mh("CCLayerGradient", R.gH.Kc());
			this.Mh("CCSprite", R.RH.Kc());
			this.Mh("CCLabelBMFont", R.cH.Kc());
			this.Mh("CCLabelTTF", R.dH.Kc());
			this.Mh("CCScale9Sprite", R.MH.Kc());
			this.Mh("CCScrollView", R.NH.Kc());
			this.Mh("CCBFile", R.vG.Kc());
			this.Mh("CCMenu", R.lH.Kc());
			this.Mh("CCMenuItemImage", R.jH.Kc());
			this.Mh("CCControlButton", R.NG.Kc());
			this.Mh("CCParticleSystemQuad",
				R.tH.Kc())
		},
		Mh : function (a, c) {
			this.zm[a] = c
		},
		NCa : function (a) {
			this.zm.hasOwnProperty(a) && delete this.zm[a]
		},
		qV : function (a) {
			return this.zm.hasOwnProperty(a) ? this.zm[a] : p
		},
		qN : function (a) {
			if (a)
				for (var c in this.zm)
					delete this.zm[c];
			this.zm = {}

		}
	});
R.ih.vz = p;
R.ih.Aaa = function () {
	return new R.ih
};
R.ih.mCa = function () {
	R.ih.vz == p && (R.ih.vz = new R.ih, R.ih.vz.fX());
	return R.ih.vz
};
R.ih.Gya = function () {
	R.ih.vz = p
};
R.ih.Kaa = function () {
	var a = R.ih.Aaa();
	a.fX();
	return a
};
R.m9 = function (a, c, d) {
	var e = R.b(0, 0);
	0 === c ? e = a : 1 === c ? (e.x = a.x, e.y = d.height - a.y) : 2 === c ? (e.x = d.width - a.x, e.y = d.height - a.y) : 3 === c ? (e.x = d.width - a.x, e.y = a.y) : 4 === c ? (e.x = d.width * a.x / 100, e.y = d.height * a.y / 100) : 5 === c && (c = R.zb.ip(), e.x = a.x * c, e.y = a.y * c);
	return e
};
R.AJ = function (a, c, d, e) {
	var f = R.b(0, 0);
	0 === d ? (f.x = a, f.y = c) : 1 === d ? (f.x = a, f.y = e.height - c) : 2 === d ? (f.x = e.width - a, f.y = e.height - c) : 3 === d ? (f.x = e.width - a, f.y = c) : 4 === d ? (f.x = e.width * a / 100, f.y = e.height * c / 100) : 5 === d && (d = R.zb.ip(), f.x = a * d, f.y = c * d);
	return f
};
R.eY = function (a, c, d, e) {
	R.e(a, "pNode should not be null");
	5 === e && (e = R.zb.ip(), c *= e, d *= e);
	a.fh(c);
	a.yg(d)
};
R.Vga = R.D.extend({
		uma : x()
	});
R.BO = R.D.extend({
		cu : p,
		Fx : p,
		Zs : p,
		Ws : 0,
		rj : p,
		ve : p,
		aD : p,
		vb : p,
		Mx : p,
		VB : p,
		WB : p,
		TB : p,
		UB : p,
		SB : p,
		kJ : "",
		SJ : "",
		wC : p,
		RJ : p,
		AI : p,
		w : p,
		gk : q,
		ctor : function () {
			this.aD = R.size(0, 0);
			this.m()
		},
		m : function () {
			this.cu = [];
			this.Fx = new R.Vp;
			this.Zs = new R.Vp;
			this.VB = [];
			this.WB = [];
			this.TB = [];
			this.UB = [];
			this.SB = [];
			this.wC = [];
			this.RJ = {};
			return m
		},
		ssa : C("cu"),
		vBa : z("cu"),
		$na : C("Ws"),
		Ada : z("Ws"),
		bsa : C("rj"),
		Wea : z("rj"),
		BV : C("ve"),
		uv : z("ve"),
		OD : function (a) {
			this.UB.push(a)
		},
		ND : function (a) {
			this.TB.push(a)
		},
		MD : function (a) {
			this.SB.push(a)
		},
		p7 : function (a) {
			this.WB.push(a)
		},
		o7 : function (a) {
			this.VB.push(a)
		},
		Wda : z("kJ"),
		qpa : C("kJ"),
		opa : C("TB"),
		ppa : C("UB"),
		npa : C("SB"),
		rpa : C("VB"),
		spa : C("WB"),
		qqa : C("SJ"),
		mqa : C("wC"),
		asa : C("aD"),
		ON : function (a) {
			this.aD = R.size(a.width, a.height)
		},
		$b : C("vb"),
		dh : z("vb"),
		isa : function () {
			return this.Mx ? this.Mx.getName() : p
		},
		kE : function (a) {
			return a ? a.n() : this.aD
		},
		q7 : function (a, c) {
			this.Fx.Ok(c, a)
		},
		fs : function (a, c, d) {
			var e = this.Zs.Jj(c);
			e || (e = new R.Vp, this.Zs.Ok(e, c));
			e.Ok(a, d)
		},
		Iaa : function (a, c) {
			var d = this.Zs,
			e = d.Jj(a);
			e != p && (d.Ok(e, c), d.vN(a));
			d = this.Fx;
			e = d.Jj(a);
			e != p && (d.Ok(e, c), d.vN(a))
		},
		n9 : function (a) {
			var c = 0,
			d = [];
			a = a.Qm;
			for (var e = a.length, f = 0; f < e; ++f) {
				var g = a[f],
				k = g.getTime() - c,
				c = g.getTime();
				0 < k && d.push(R.Bc.create(k));
				k = g.cb;
				g = k[0];
				k = k[1];
				if (this.gk)
					g = this.RJ[k + ":" + g], g != p && d.push(g);
				else {
					var l;
					k == ob ? l = this.rj : k == pb && (l = this.ve);
					l != p && (0 < g.length ? (k = 0, l.jba != p && (k = h), 0 == k ? R.log("Skipping selector '" + g + "' since no CCBSelectorResolver is present.") : d.push(R.bc.create(k, l))) : R.log("Unexpected empty selector."))
				}
			}
			return 1 > d.length ? p : R.La.create(d)
		},
		o9 : function (a) {
			var c = 0,
			d = [];
			a = a.Qm;
			for (var e = a.length, f = 0; f < e; ++f) {
				var g = a[f],
				k = g.getTime() - c,
				c = g.getTime();
				0 < k && d.push(R.Bc.create(k));
				g = g.cb;
				d.push(R.zG.create(R.zb.kM() + g[0], parseFloat(g[1]), parseFloat(g[2]), parseFloat(g[3])))
			}
			return 1 > d.length ? p : R.La.create(d)
		},
		tza : function (a) {
			this.CN(this.CJ(a), 0)
		},
		uza : function (a, c) {
			this.CN(this.CJ(a), c)
		},
		CN : function (a, c) {
			c = c || 0;
			R.e(-1 != a, "Sequence id couldn't be found");
			this.rj.Bv();
			for (var d = this.Fx.vu(), e = 0, f = d.length; e < f; e++) {
				var g = d[e];
				g.Bv();
				var k = this.Fx.Jj(g).Jj(a),
				l,
				n = [];
				if (k) {
					var r = k.vu();
					for (l = 0; l < r.length; l++) {
						var s = r[l],
						t = k.Jj(s);
						n.push(s);
						this.Z5(g, t, c);
						this.L5(g, t, c)
					}
				}
				if (k = this.Zs.Jj(g)) {
					r = k.vu();
					for (l = 0; l < r.length; l++)
						s = r[l], -1 == n.indexOf(s) && (t = k.Jj(s), t != p && this.LK(s, g, t, c))
				}
			}
			d = this.uS(a);
			e = R.La.create(R.Bc.create(d.tf() + c), R.bc.create(this.O5, this));
			this.rj.ab(e);
			d.AB && (e = this.n9(d.AB)) && this.rj.ab(e);
			d.nD && (e = this.o9(d.nD)) && this.rj.ab(e);
			this.Mx = this.uS(a)
		},
		BN : function (a, c) {
			this.CN("string" === typeof a ? this.CJ(a) : a, c || 0)
		},
		yda : function (a, c) {
			this.w =
				a;
			this.AI = c
		},
		Vza : function (a, c) {
			this.yda(a, c)
		},
		zX : function (a, c) {
			this.RJ[c] = a
		},
		debug : x(),
		mx : function (a, c) {
			var d = this.Zs.Jj(a);
			return d ? d.Jj(c) : p
		},
		CJ : function (a) {
			for (var c = p, d = this.cu, e = 0, f = d.length; e < f; e++)
				if ((c = d[e]) && c.getName() === a)
					return c.eD;
			return -1
		},
		uS : function (a) {
			for (var c = p, d = this.cu, e = 0, f = d.length; e < f; e++)
				if ((c = d[e]) && c.eD === a)
					return c;
			return p
		},
		rS : function (a, c, d, e) {
			a = c.getTime() - (a ? a.getTime() : 0);
			var f;
			if ("rotation" === d)
				return R.wG.create(a, c.cb);
			if ("rotationX" === d)
				return R.CO.create(a, c.cb);
			if ("rotationY" === d)
				return R.DO.create(a, c.cb);
			if ("opacity" === d)
				return R.$v.create(a, c.cb);
			if ("color" === d)
				return e = c.cb.Lb(), R.fB.create(a, e.i, e.h, e.c);
			if ("visible" === d)
				return c.cb ? R.La.create(R.Bc.create(a), R.Uh.create()) : R.La.create(R.Bc.create(a), R.Sj.create());
			if ("displayFrame" === d)
				return R.La.create(R.Bc.create(a), R.yG.create(c.cb));
			if ("position" === d)
				return d = this.mx(e, d), d = d[2], f = c.cb, c = f[0], f = f[1], e = this.kE(e.getParent()), e = R.AJ(c, f, d, e), R.Es.create(a, e);
			if ("scale" === d)
				return d = this.mx(e, d),
				d = d[2], f = c.cb, c = f[0], f = f[1], d === mb && (e = R.zb.ip(), c *= e, f *= e), R.Ie.create(a, c, f);
			if ("skew" === d)
				return f = c.cb, c = f[0], f = f[1], R.Np.create(a, c, f);
			R.log("BuilderReader: Failed to create animation for property: " + d);
			return p
		},
		LK : function (a, c, d, e) {
			if (0 < e) {
				var f = new R.aA;
				f.ie(d);
				f.setTime(e);
				f.IX(1);
				d = this.rS(p, f, a, c);
				c.ab(d)
			} else
				"position" === a ? (a = this.mx(c, a), a = a[2], e = d[0], d = d[1], c.q(R.AJ(e, d, a, this.kE(c.getParent())))) : "scale" === a ? (a = this.mx(c, a), a = a[2], e = d[0], d = d[1], R.eY(c, e, d, a)) : "skew" === a ? (e = d[0], d = d[1],
					c.xv(e), c.yv(d)) : "rotation" === a ? c.he(d) : "opacity" === a ? c.U(d) : "displayFrame" === a ? c.fm(d) : "color" === a ? (d = d.Lb(), (255 !== d.i || 255 !== d.h || 255 !== d.c) && c.L(d)) : "visible" === a ? c.Aa(d || q) : (R.log("unsupported property name is " + a), R.e(q, "unsupported property now"))
		},
		Z5 : function (a, c, d) {
			var e = c.Qm;
			0 === e.length ? (e = this.mx(a, c.getName()), R.e(e, "No baseValue found for property"), this.LK(c.getName(), a, e, d)) : this.LK(c.getName(), a, e[0].cb, d)
		},
		U3 : function (a, c, d) {
			if (1 === c || 0 === c)
				return a;
			if (2 === c)
				return R.Xv.create(a,
					d);
			if (3 === c)
				return R.Un.create(a, d);
			if (4 === c)
				return R.vs.create(a, d);
			if (11 === c)
				return R.Ov.create(a);
			if (12 === c)
				return R.Qv.create(a);
			if (13 === c)
				return R.Pv.create(a);
			if (8 === c)
				return R.Rv.create(a);
			if (9 === c)
				return R.Tv.create(a);
			if (10 === c)
				return R.Sv.create(a);
			if (5 === c)
				return R.Uv.create(a, d);
			if (6 === c)
				return R.Wv.create(a, d);
			if (7 === c)
				return R.Vv.create(a, d);
			R.log("BuilderReader: Unkown easing type " + c);
			return a
		},
		L5 : function (a, c, d) {
			var e = c.Qm,
			f = e.length;
			if (1 < f) {
				var g = [];
				d = e[0].getTime() + d;
				0 < d && g.push(R.Bc.create(d));
				for (d = 0; d < f - 1; ++d) {
					var k = e[d],
					l = this.rS(k, e[d + 1], c.getName(), a);
					l && (l = this.U3(l, k.mJ, k.lJ), g.push(l))
				}
				c = R.La.create(g);
				a.ab(c)
			}
		},
		O5 : function () {
			var a = this.Mx;
			this.SJ != a.getName() && (this.SJ = a.getName());
			this.w && this.AI && this.AI.call(this.w);
			a = a.RI;
			this.Mx = p;
			-1 != a && this.BN(a, 0)
		}
	});
R.yG = R.Wf.extend({
		Qo : p,
		Md : function (a) {
			this.Qo = a;
			return m
		},
		update : function () {
			this.w.fm(this.Qo)
		}
	});
R.yG.create = function (a) {
	var c = new R.yG;
	return c && c.Md(a) ? c : p
};
R.wG = R.B.extend({
		Xq : 0,
		kS : 0,
		iS : 0,
		j : function (a, c) {
			return R.B.prototype.j.call(this, a) ? (this.kS = c, m) : q
		},
		update : function (a) {
			this.w.he(this.Xq + this.iS * a)
		},
		H : function (a) {
			R.B.prototype.H.call(this, a);
			this.Xq = this.w.Sy();
			this.iS = this.kS - this.Xq
		}
	});
R.wG.create = function (a, c) {
	var d = new R.wG;
	return d && d.j(a, c) ? d : p
};
R.CO = R.B.extend({});
R.CO.create = function () {
	R.e(q, "rotationX not implemented in cocos2d-html5");
	return p
};
R.DO = R.B.extend({});
R.DO.create = function () {
	R.e(q, "rotationY not implemented in cocos2d-html5");
	return p
};
R.zG = R.Wf.extend({
		m : function (a) {
			this.M3 = a;
			return m
		},
		update : function () {
			R.$e.d().pN(this.M3)
		}
	});
R.zG.create = function (a) {
	var c = new R.zG;
	return c && c.m(a) ? c : p
};
R.RGBA = function (a, c, d, e) {
	this.i = a;
	this.h = c;
	this.c = d;
	this.g = e
};
R.YG = function (a, c, d) {
	this.fe = a;
	this.Qi = c;
	this.ca = d
};
R.Df = {};
R.Df.sr = function (a, c, d, e) {
	a = R.t.Iy(a);
	if (!a)
		return p;
	a.q(d);
	a.R(e);
	c.I(a);
	return a
};
R.Df.n0 = function (a) {
	var c = new R.YG,
	d,
	e;
	d = a.i < a.h ? a.i : a.h;
	d = d < a.c ? d : a.c;
	e = a.i > a.h ? a.i : a.h;
	e = e > a.c ? e : a.c;
	c.ca = e;
	d = e - d;
	if (0 < e)
		c.Qi = d / e;
	else
		return c.Qi = 0, c.fe = -1, c;
	c.fe = a.i >= e ? (a.h - a.c) / d : a.h >= e ? 2 + (a.c - a.i) / d : 4 + (a.i - a.h) / d;
	c.fe *= 60;
	0 > c.fe && (c.fe += 360);
	return c
};
R.Df.yH = function (a) {
	var c,
	d,
	e,
	f,
	g = new R.RGBA;
	g.g = 1;
	if (0 >= a.Qi) {
		if (!a.fe)
			return g.i = a.ca, g.h = a.ca, g.c = a.ca, g;
		g.i = 0;
		g.h = 0;
		g.c = 0;
		return g
	}
	c = a.fe;
	360 <= c && (c = 0);
	c /= 60;
	f = 0 | c;
	e = c - f;
	c = a.ca * (1 - a.Qi);
	d = a.ca * (1 - a.Qi * e);
	e = a.ca * (1 - a.Qi * (1 - e));
	switch (f) {
	case 0:
		g.i = a.ca;
		g.h = e;
		g.c = c;
		break;
	case 1:
		g.i = d;
		g.h = a.ca;
		g.c = c;
		break;
	case 2:
		g.i = c;
		g.h = a.ca;
		g.c = e;
		break;
	case 3:
		g.i = c;
		g.h = d;
		g.c = a.ca;
		break;
	case 4:
		g.i = e;
		g.h = c;
		g.c = a.ca;
		break;
	default:
		g.i = a.ca,
		g.h = c,
		g.c = d
	}
	return g
};
R.Df.FO = function (a, c) {
	return R.rN(a, c)
};
R.HG = 9;
R.n_ = 1;
R.q_ = 2;
R.r_ = 4;
R.o_ = 8;
R.p_ = 16;
R.dP = 32;
R.s_ = 64;
R.m_ = 128;
R.Uk = 256;
R.af = 1;
R.Ep = 2;
R.Dp = 4;
R.jha = 8;
R.iha = 8;
R.nc = R.Tj.extend({
		IS : q,
		Kka : q,
		Ij : C("IS"),
		Rd : function (a) {
			this.IS = a;
			for (var c = this.k, d = 0, e = c.length; d < e; d++) {
				var f = c[d];
				f && f.Fc && f.Rd(a)
			}
		},
		Hd : R.af,
		Psa : C("Hd"),
		Kg : q,
		dD : q,
		Om : q,
		RB : p,
		Nc : function (a) {
			this.Hd = (this.Kg = a) ? R.af : R.Dp;
			this.ge()
		},
		isEnabled : C("Kg"),
		hs : function (a) {
			this.dD = a;
			this.ge()
		},
		LM : C("dD"),
		sp : function (a) {
			this.Om = a;
			this.ge()
		},
		Iua : C("Om"),
		w$ : function () {
			for (var a = this.getParent(); a != p; a = a.getParent())
				if (!a.Ua)
					return q;
			return m
		},
		ctor : function () {
			R.Tj.prototype.ctor.call(this);
			this.RB = {};
			this.Fa =
				R.Td()
		},
		m : function () {
			return R.Tj.prototype.m.call(this) ? (this.Hd = R.af, this.Kg = m, this.Om = this.dD = q, this.xka = 1, this.mY(1), m) : q
		},
		uz : function () {
			R.tF(this.cn, m, this)
		},
		xg : function (a) {
			for (var c = 0, d = R.HG; c < d; c++)
				if (a & 1 << c)
					for (var e = this.jJ(1 << c), f = 0, g = e.length; f < g; f++)
						e[f].V$(this)
		},
		Cy : function (a, c, d) {
			for (var e = 0, f = R.HG; e < f; e++)
				d & 1 << e && this.IR(a, c, 1 << e)
		},
		kza : function (a, c, d) {
			for (var e = 0, f = R.HG; e < f; e++)
				d & 1 << e && this.Yca(a, c, 1 << e)
		},
		Vl : function (a) {
			return this.Bk(a.Ic)
		},
		Hk : function (a) {
			a = a.Ic;
			a = this.getParent().Bk(a);
			return R.Yr(this.bd(), a)
		},
		Qka : M(p),
		jJ : function (a) {
			a = a.toString();
			this.RB.hasOwnProperty(a) || (this.RB[a] = []);
			return this.RB[a]
		},
		IR : function (a, c, d) {
			a = new R.u0(a, c, d);
			this.jJ(d).push(a)
		},
		Yca : function (a, c, d) {
			d = this.jJ(d);
			if (!a && !c)
				d.length = 0;
			else
				for (var e = 0; e < d.length; e++) {
					var f = d[e],
					g = m;
					a && (g = a == f.w);
					c && (g = g && c == f.mh);
					g && R.ke(d, f)
				}
		},
		ge : x()
	});
R.nc.create = function () {
	var a = new R.nc;
	return a && a.m() ? a : p
};
R.hP = 3435855873;
R.Wk = R.nc.extend({
		ax : q,
		yy : q,
		ok : p,
		wx : p,
		Rw : p,
		OB : p,
		fr : p,
		Hf : p,
		Hc : 0,
		Kt : q,
		yD : p,
		iy : p,
		zD : p,
		cq : p,
		XS : q,
		GC : 0,
		FC : 0,
		ctor : function () {
			R.nc.prototype.ctor.call(this);
			this.ok = new R.sm(0, 0);
			this.wx = new R.Dg(0, 0);
			this.Rw = "";
			this.OB = R.Td();
			this.yD = {};
			this.iy = {};
			this.zD = {};
			this.cq = {}

		},
		m : function () {
			return this.EE(R.ka.create("", "Arial", 12), R.Eg.create())
		},
		ge : function () {
			if (this.XS) {
				this.fr && this.fr.Aa(q);
				this.Hf && this.Hf.Aa(q);
				this.RX(this.wx);
				var a = this.Hd;
				this.Rw = this.nM(a);
				this.OB = this.i$(a);
				var c = this.fr = this.Ty(a);
				c && c.sc && c.sc(this.Rw);
				c && c.Fc && c.L(this.OB);
				var d = this.n();
				c && c.q(d.width / 2, d.height / 2);
				(a = this.Hf = this.q9(a)) && a.q(d.width / 2, d.height / 2);
				d = c ? c.bd().size : R.size(0, 0);
				if (this.ax)
					a && a.ma(R.size(d.width + 2 * this.FC, d.height + 2 * this.GC));
				else if (a) {
					var e = a.ok,
					e = R.size(e.width, e.height);
					0 >= e.width && (e.width = d.width);
					0 >= e.height && (e.height = d.height);
					a.ma(e)
				}
				d = c ? c.bd() : R.rect(0, 0, 0, 0);
				e = a ? a.bd() : R.rect(0, 0, 0, 0);
				d = R.rN(d, e);
				this.ma(R.size(d.width, d.height));
				d = this.n();
				c && (c.q(d.width / 2, d.height / 2), c.Aa(m));
				a && (a.q(d.width / 2, d.height / 2), a.Aa(m))
			}
		},
		EE : function (a, c) {
			return R.nc.prototype.m.call(this, m) ? (R.e(a != p, "node must not be nil"), R.e(a != p || a.Fc || c != p, ""), this.XS = m, this.yD = {}, this.iy = {}, this.zD = {}, this.cq = {}, this.xf(m), this.Kt = q, this.yy = m, this.Rw = p, this.uda(m), this.Hn(R.size(0, 0)), this.yy = m, this.Gi(q), this.R(R.b(0.5, 0.5)), this.fr = a, this.Hf = c, this.U(255), this.Rd(m), this.VF(a.pn(), R.af), this.UF(a.Lb(), R.af), this.VN(a, R.af), this.DF(c, R.af), this.Hd = R.af, this.FC = 24, this.GC = 12, this.wx = new R.Dg(0.5, 0.5),
				this.Hn(R.kd()), this.ge(), m) : q
		},
		Q$ : function (a, c, d) {
			a = R.ka.create(a, c, d);
			return this.EE(a, R.Eg.create())
		},
		OV : function (a) {
			var c = R.ka.create("", "Arial", 30);
			return this.EE(c, a)
		},
		$ma : C("ax"),
		uda : function (a) {
			this.ax = a;
			this.ge()
		},
		Qta : C("yy"),
		tY : function (a) {
			return this.yy = a
		},
		R9 : C("ok"),
		Hn : function (a) {
			if (0 === a.width && 0 === a.height)
				this.ax = m;
			else {
				this.ax = q;
				var c = this.cq,
				d;
				for (d in c)
					c[d].Hn(a)
			}
			this.ok = a;
			this.ge()
		},
		pqa : C("wx"),
		RX : function (a) {
			this.wx = a;
			this.fr && this.fr.R(a)
		},
		Cka : C("Rw"),
		Dka : C("OB"),
		rg : C("Hc"),
		U : function (a) {
			R.nc.prototype.U.call(a);
			var c = this.cq,
			d;
			for (d in c)
				c[d].U(a)
		},
		L : function (a) {
			R.nc.prototype.L.call(this, a);
			var c = this.cq,
			d;
			for (d in c)
				c[d].L(a)
		},
		Lb : C("Qc"),
		Xua : C("Kt"),
		Hka : C("GC"),
		Fka : C("FC"),
		JAa : function (a, c) {
			this.GC = c;
			this.FC = a;
			this.ge()
		},
		Nc : function (a) {
			R.nc.prototype.Nc.call(this, a);
			this.ge()
		},
		hs : function (a) {
			R.nc.prototype.hs.call(this, a);
			this.ge()
		},
		sp : function (a) {
			this.Hd = a ? R.Ep : R.af;
			R.nc.prototype.sp.call(this, a);
			(a = this.jE(R.hP)) && this.CY(a);
			this.ge();
			this.yy && (a = R.Ie.create(0.05,
						this.Om && this.isEnabled() && !this.LM() ? 1.1 : 1), a.up(R.hP), this.ab(a))
		},
		Lh : function (a) {
			if (!this.Hk(a) || !this.isEnabled() || !this.Ua || !this.w$())
				return q;
			this.Kt = m;
			this.sp(m);
			this.xg(R.n_);
			return m
		},
		bh : function (a) {
			!this.Kg || !this.Kt || this.dD ? this.Om && this.sp(q) : (a = this.Hk(a)) && !this.Om ? (this.sp(m), this.xg(R.o_)) : a && this.Om ? this.xg(R.q_) : !a && this.Om ? (this.sp(q), this.xg(R.p_)) : !a && !this.Om && this.xg(R.r_)
		},
		Mi : function (a) {
			this.Kt = q;
			this.sp(q);
			this.Hk(a) ? this.xg(R.dP) : this.xg(R.s_)
		},
		np : function () {
			this.Kt = q;
			this.sp(q);
			this.xg(R.m_)
		},
		nM : function (a) {
			var c = this.yD;
			return c ? c[a] ? c[a] : c[R.af] : ""
		},
		VF : function (a, c) {
			this.yD[c] = a || "";
			this.Hd == c && this.ge()
		},
		i$ : function (a) {
			return (a = this.iy[a]) ? a : (a = this.iy[R.af]) ? a : R.Td()
		},
		UF : function (a, c) {
			this.iy[c] = a;
			this.Hd == c && this.ge()
		},
		Ty : function (a) {
			var c = this.zD;
			return c.hasOwnProperty(a) && c[a] ? c[a] : c[R.af]
		},
		VN : function (a, c) {
			var d = this.zD;
			if (d.hasOwnProperty(c)) {
				var e = d[c];
				e && this.removeChild(e, m)
			}
			d[c] = a;
			a.Aa(q);
			a.R(R.b(0.5, 0.5));
			this.I(a, 1);
			this.Hd == c && this.ge()
		},
		WN : function (a,
			c) {
			var d = this.nM(c);
			d || (d = "");
			this.VN(R.ka.create(d, a, 12), c)
		},
		kta : function (a) {
			a = this.Ty(a);
			return a != p && a instanceof R.ka ? a.Bd : ""
		},
		XN : function (a, c) {
			var d = this.Ty(c);
			d != p && d instanceof R.ka && d.Az(a)
		},
		lta : function (a) {
			a = this.Ty(a);
			return a != p && a instanceof R.ka ? a.sd : 0
		},
		SBa : function (a, c) {
			var d = this.nM(c);
			d || (d = "");
			this.VN(R.Bg.create(d, a), c)
		},
		jta : function (a) {
			a = this.Ty(a);
			return a != p && a instanceof R.Bg ? a.yt : ""
		},
		q9 : function (a) {
			var c = this.cq;
			return c.hasOwnProperty(a) && c[a] ? c[a] : c[R.af]
		},
		DF : function (a, c) {
			var d =
				this.cq;
			if (d.hasOwnProperty(c)) {
				var e = d[c];
				e && this.removeChild(e, m)
			}
			d[c] = a;
			a.Aa(q);
			a.R(R.b(0.5, 0.5));
			this.I(a);
			d = this.ok;
			(0 !== d.width || 0 !== d.height) && a.Hn(d);
			this.Hd === c && this.ge()
		},
		FN : function (a, c) {
			var d = R.Eg.Cr(a);
			this.DF(d, c)
		}
	});
R.Wk.create = function (a, c) {
	var d;
	if (0 == arguments.length)
		return (d = new R.Wk) && d.m() ? d : p;
	1 == arguments.length ? (d = new R.Wk, d.OV(arguments[0])) : 2 == arguments.length ? (d = new R.Wk, d.EE(a, c)) : 3 == arguments.length && (d = new R.Wk, d.Q$(arguments[0], arguments[1], arguments[2]));
	return d
};
R.u0 = R.D.extend({
		mh : p,
		w : p,
		MB : p,
		ctor : function (a, c, d) {
			this.w = a;
			this.mh = c;
			this.MB = d
		},
		Jna : C("mh"),
		d$ : C("w"),
		Ooa : C("MB"),
		V$ : function (a) {
			if (this.w && this.mh)
				if ("string" == typeof this.mh)
					this.w[this.mh](a, this.MB);
				else
					this.mh.call(this.w, a, this.MB)
		}
	});
R.ZP = 0;
R.bQ = 1;
R.$P = 2;
R.aQ = 3;
R.XP = 4;
R.dQ = 5;
R.cQ = 6;
R.k1 = 7;
R.YP = 8;
R.Eg = R.r.extend({
		Fc : m,
		Yx : p,
		XR : p,
		$ka : q,
		Ym : p,
		Zo : p,
		gr : p,
		$o : p,
		yq : p,
		Am : p,
		Rq : p,
		lo : p,
		dq : p,
		eq : p,
		Dm : p,
		Ta : q,
		th : p,
		ok : p,
		Hc : 0,
		Fa : p,
		BB : p,
		qC : 0,
		sC : 0,
		rC : 0,
		pC : 0,
		AT : q,
		zT : q,
		DD : function () {
			var a;
			a = this.qC;
			var c = this.sC,
			d = this.rC,
			e = this.Yx,
			f = this.pC;
			a = 0 === a && 0 === c && 0 === d && 0 === f ? R.Oc() : this.zT ? R.rect(f, a, e.width - d - a, e.height - c - f) : R.rect(a, c, e.width - a - d, e.height - c - f);
			this.Hda(a)
		},
		U6 : function () {
			if (this.Zo && this.$o && this.eq && this.lo && this.Am) {
				var a = this.ea,
				c = this.Zo,
				d = this.$o,
				e = this.eq,
				f = this.Am,
				g = this.Am.n(),
				k = a.width - c.n().width -
					d.n().width,
				a = a.height - c.n().height - e.n().height,
				k = k / g.width,
				a = a / g.height,
				l = g.width * k,
				n = g.height * a,
				r = this.lo,
				s = r.n().width,
				t = r.n().height;
				if (!R.ua.tc) {
					var v = Math.round(l);
					l != v && (l = v, k = l / g.width);
					v = Math.round(n);
					n != v && (n = v, a = n / g.height)
				}
				f.fh(k);
				f.yg(a);
				var g = this.yq,
				v = this.Rq,
				w = this.gr,
				y = this.dq,
				A = R.b(0, 0);
				r.R(A);
				e.R(A);
				c.R(A);
				d.R(A);
				g.R(A);
				v.R(A);
				w.R(A);
				y.R(A);
				f.R(A);
				r.q(0, 0);
				e.q(s + l, 0);
				c.q(0, t + n);
				d.q(s + l, t + n);
				g.q(0, t);
				g.yg(a);
				v.q(s + l, t);
				v.yg(a);
				y.q(s, 0);
				y.fh(k);
				w.q(s, t + n);
				w.fh(k);
				f.q(s, t)
			}
		},
		ctor : function () {
			R.r.prototype.ctor.call(this);
			this.Yx = R.Oc();
			this.XR = R.Oc();
			this.Dm = R.Td();
			this.th = new R.sm(0, 0);
			this.ok = new R.sm(0, 0);
			this.Fa = R.Td();
			this.Hc = 255;
			this.BB = R.Oc()
		},
		Or : C("th"),
		R9 : C("ok"),
		Hn : function (a) {
			this.ma(a);
			this.ok = a
		},
		rg : C("Hc"),
		U : function (a) {
			this.Hc = a;
			for (var c = this.Ym.k, d = 0; d < c.length; d++) {
				var e = c[d];
				e && e.Fc && e.U(a)
			}
		},
		Lb : C("Fa"),
		L : function (a) {
			this.Fa = a;
			for (var c = this.Ym.k, d = 0; d < c.length; d++) {
				var e = c[d];
				e && e.Fc && e.L(a)
			}
		},
		soa : C("BB"),
		Hda : function (a) {
			var c = this.ea,
			c = new R.sm(c.width, c.height);
			this.iG(this.Ym, this.Yx, this.zT,
				a);
			this.ma(c)
		},
		fqa : C("qC"),
		sea : function (a) {
			this.qC = a;
			this.DD()
		},
		hqa : C("sC"),
		uea : function (a) {
			this.sC = a;
			this.DD()
		},
		gqa : C("rC"),
		tea : function (a) {
			this.rC = a;
			this.DD()
		},
		eqa : C("pC"),
		rea : function (a) {
			this.pC = a;
			this.DD()
		},
		ma : function (a) {
			R.r.prototype.ma.call(this, a);
			this.bF = m
		},
		Y : function () {
			this.bF && (this.U6(), this.bF = q);
			R.r.prototype.Y.call(this)
		},
		m : function () {
			return this.DE(p, R.Oc(), q, R.Oc())
		},
		DE : function (a, c, d, e) {
			3 === arguments.length && (e = d, d = q);
			a && this.iG(a, c, d, e);
			this.R(R.b(0.5, 0.5));
			return this.bF = m
		},
		wf : function (a,
			c, d) {
			a instanceof R.Xi ? (d = a = c, c = R.Oc()) : (c = c || R.Oc(), d = d || R.Oc());
			R.e(a != p, "Invalid file for sprite");
			a = R.Oa.create(a, 9);
			return this.DE(a, c, q, d)
		},
		Md : function (a, c) {
			c = c || R.Oc();
			R.e(a != p, "Sprite frame must not be nil");
			var d = a.ja();
			R.e(d != p, "Texture must be not nil");
			a.Qa || a.Uf(function (a) {
				var c = this.ok,
				c = R.size(c.width, c.height);
				this.iG(this.Ym, a.uf(), R.ua.tc ? a.Pf : q, this.BB);
				this.Hn(c);
				this.bF = m
			}, this);
			d = R.Oa.Fh(d, 9);
			return this.DE(d, a.uf(), R.ua.tc ? a.Pf : q, c)
		},
		Yy : function (a, c) {
			c = c || R.Oc();
			R.e(a != p, "Invalid spriteFrameName for sprite");
			var d = R.Ff.d().Ei(a);
			R.e(d != p, "cc.SpriteFrame must be non-NULL");
			return d == p ? q : this.Md(d, c)
		},
		nza : function (a) {
			var c = new R.Eg;
			return c && c.DE(this.Ym, this.Yx, q, a) ? c : p
		},
		Rd : function (a) {
			this.Ta = a;
			var c = this.Ym.k;
			if (c)
				for (var d = 0, e = c.length; d < e; d++)
					c[d].Rd(a)
		},
		Ij : C("Ta"),
		iG : function (a, c, d, e) {
			var f = this.rg(),
			g = this.Lb();
			this.wg(m);
			this.Ym != a && (this.Ym = a);
			a = this.Ym;
			a.wg(m);
			this.BB = e;
			var k = a.ja();
			R.Oq(c) && (c = k.n(), c = R.rect(0, 0, c.width, c.height));
			this.Yx = c;
			var l = c.size;
			this.th.width = l.width;
			this.th.height = l.height;
			var n = this.ok;
			0 === n.width && 0 === n.height && (n.width = l.width, n.height = l.height);
			n = this.XR;
			e || (n.x = e.x, n.y = e.y, n.width = e.width, n.height = e.height);
			var r = l.width;
			e = l.height;
			R.Oq(n) && (n.x = r / 3, n.y = e / 3, n.width = r / 3, n.height = e / 3);
			var s = n.x,
			t = n.width,
			v = r - (s + t),
			w = n.y,
			y = n.height,
			A = e - (w + y),
			D = 0,
			H = 0,
			n = R.rect(D, H, s, w),
			D = D + s;
			e = R.rect(D, H, t, w);
			var r = R.rect(D + t, H, v, w),
			D = 0,
			H = 0 + w,
			l = R.rect(D, H, s, y),
			D = D + s,
			J = R.rect(D, H, t, y),
			D = D + t,
			K = R.rect(D, H, v, y),
			D = 0,
			H = 0 + w + y,
			w = R.rect(D, H, s, A),
			D = D + s,
			s = R.rect(D, H, t, A),
			D = D + t,
			t = R.rect(D, H, v,
					A),
			v = {
				g : 1,
				c : 0,
				C : 0,
				F : 1,
				V : 0,
				W : 0
			};
			if (d) {
				d = J;
				var A = t,
				D = w,
				H = r,
				y = n,
				E = K,
				F = l,
				G = s,
				B = e,
				v = R.Wz(v, c.height + c.x, c.y),
				v = R.vZ(v),
				J = R.Yi(J, v),
				t = R.Yi(t, v),
				w = R.Yi(w, v),
				r = R.Yi(r, v),
				n = R.Yi(n, v),
				K = R.Yi(K, v),
				l = R.Yi(l, v),
				s = R.Yi(s, v);
				e = R.Yi(e, v);
				d.x = J.x;
				d.y = J.y;
				A.x = t.x;
				A.y = t.y;
				D.x = w.x;
				D.y = w.y;
				H.x = r.x;
				H.y = r.y;
				y.x = n.x;
				y.y = n.y;
				E.x = K.x;
				E.y = K.y;
				F.x = l.x;
				F.y = l.y;
				G.x = s.x;
				G.y = s.y;
				B.x = e.x;
				B.y = e.y;
				this.Am = new R.t;
				this.Am.ba(k, d, m);
				a.I(this.Am, 0, R.ZP);
				this.gr = new R.t;
				this.gr.ba(k, B, m);
				a.I(this.gr, 1, R.bQ);
				this.dq = new R.t;
				this.dq.ba(k,
					G, m);
				a.I(this.dq, 1, R.XP);
				this.yq = new R.t;
				this.yq.ba(k, F, m);
				a.I(this.yq, 1, R.$P);
				this.Rq = new R.t;
				this.Rq.ba(k, E, m);
				a.I(this.Rq, 1, R.aQ);
				this.Zo = new R.t;
				this.Zo.ba(k, y, m);
				a.I(this.Zo, 2, R.cQ);
				this.$o = new R.t;
				this.$o.ba(k, H, m);
				a.I(this.$o, 2, R.dQ);
				this.lo = new R.t;
				this.lo.ba(k, D, m);
				a.I(this.lo, 2, R.YP);
				this.eq = new R.t;
				this.eq.ba(k, A, m)
			} else
				v = R.Wz(v, c.x, c.y), R.hl(J, v), R.hl(t, v), R.hl(w, v), R.hl(r, v), R.hl(n, v), R.hl(K, v), R.hl(l, v), R.hl(s, v), R.hl(e, v), this.Am = new R.t, this.Am.ba(k, J), a.I(this.Am, 0, R.ZP), this.gr =
					new R.t, this.gr.ba(k, e), a.I(this.gr, 1, R.bQ), this.dq = new R.t, this.dq.ba(k, s), a.I(this.dq, 1, R.XP), this.yq = new R.t, this.yq.ba(k, l), a.I(this.yq, 1, R.$P), this.Rq = new R.t, this.Rq.ba(k, K), a.I(this.Rq, 1, R.aQ), this.Zo = new R.t, this.Zo.ba(k, n), a.I(this.Zo, 2, R.cQ), this.$o = new R.t, this.$o.ba(k, r), a.I(this.$o, 2, R.dQ), this.lo = new R.t, this.lo.ba(k, w), a.I(this.lo, 2, R.YP), this.eq = new R.t, this.eq.ba(k, t);
			a.I(this.eq, 2, R.k1);
			this.ma(c.size);
			this.I(a);
			this.AT && (this.U(f), (255 !== g.i || 255 !== g.h || 255 !== g.c) && this.L(g));
			return this.AT =
				m
		},
		gfa : function (a) {
			var c = R.Oa.Fh(a.ja(), 9);
			this.iG(c, a.uf(), R.ua.tc ? a.Pf : q, R.Oc());
			this.pC = this.rC = this.sC = this.qC = 0
		}
	});
R.Eg.create = function (a, c, d) {
	var e;
	if (2 === arguments.length)
		if ("string" == typeof a) {
			if ((e = new R.Eg) && e.wf(a, c))
				return e
		} else {
			if (a instanceof R.Xi && (e = new R.Eg) && e.wf(a, d))
				return e
		}
	else if (3 === arguments.length) {
		if ((e = new R.Eg) && e.wf(a, c, d))
			return e
	} else if (1 === arguments.length) {
		if ((e = new R.Eg) && e.wf(a))
			return e
	} else if (0 === arguments.length && (e = new R.Eg) && e.m())
		return e;
	return p
};
R.Eg.Cr = function (a, c) {
	var d = new R.Eg;
	return d && d.Md(a, c) ? d : p
};
R.Eg.Iy = function (a, c) {
	R.e(a != p, "spriteFrameName must be non-NULL");
	var d = new R.Eg;
	return d && d.Yy(a, c) ? d : p
};
R.BQ = 24;
R.qja = 8;
R.nP = R.nc.extend({
		cb : 0,
		mb : 0,
		Sb : 0,
		LC : 0,
		JC : 0,
		Tb : p,
		Io : p,
		Hf : p,
		uE : C("cb"),
		ie : function (a) {
			a = Math.max(a, this.mb);
			this.cb = a = Math.min(a, this.Sb);
			this.ge();
			this.xg(R.Uk)
		},
		M9 : C("mb"),
		UX : function (a) {
			this.LC = this.mb = a;
			this.mb >= this.Sb && (this.Sb = this.mb + 1);
			this.ie(this.cb)
		},
		L9 : C("Sb"),
		TX : function (a) {
			this.JC = this.Sb = a;
			this.Sb <= this.mb && (this.mb = this.Sb - 1);
			this.ie(this.cb)
		},
		Hk : function (a) {
			a = a.Ic;
			a = this.getParent().Bk(a);
			var c = this.bd();
			c.size.width += this.Tb.n().width;
			c.origin.x -= this.Tb.n().width / 2;
			return R.Yr(c,
				a)
		},
		Tr : function (a) {
			a = a.Ic;
			a = this.Bk(a);
			0 > a.x ? a.x = 0 : a.x > this.Hf.n().width && (a.x = this.Hf.n().width);
			return a
		},
		Qqa : C("LC"),
		NAa : z("LC"),
		Nqa : C("JC"),
		MAa : z("JC"),
		EV : C("Tb"),
		Kra : C("Io"),
		aoa : C("Hf"),
		N$ : function (a, c, d) {
			return R.nc.prototype.m.call(this) ? (this.Gi(q), this.xf(m), this.Hf = a, this.Io = c, this.Tb = d, a = R.Df.FO(a.bd(), d.bd()), a = R.size(a.width, a.height), this.ma(a), this.Hf.R(R.b(0.5, 0.5)), this.Hf.q(R.b(a.width / 2, a.height / 2)), this.I(this.Hf), this.Io.R(R.b(0, 0.5)), this.Io.q(R.b(0, a.height / 2)), this.I(this.Io),
				this.Tb.q(R.b(0, a.height / 2)), this.I(this.Tb), this.mb = 0, this.Sb = 1, this.ie(this.mb), m) : q
		},
		Nc : function (a) {
			R.nc.prototype.Nc.call(this, a);
			this.Tb && this.Tb.U(a ? 255 : 128)
		},
		Jfa : function (a) {
			this.hs(m);
			this.Tb.L(R.aw);
			this.ie(this.qO(a))
		},
		Lfa : function (a) {
			this.ie(this.qO(a))
		},
		Kfa : function () {
			this.LM() && this.ie(this.qO(this.Tb.rc()));
			this.Tb.L(R.Yf);
			this.hs(q)
		},
		rta : function (a) {
			a = a.Ic;
			a = this.Bk(a);
			0 > a.x ? a.x = 0 : a.x > this.Hf.n().width + R.BQ && (a.x = this.Hf.n().width + R.BQ);
			return a
		},
		Lh : function (a) {
			if (!this.Hk(a) || !this.isEnabled() ||
				!this.Ua)
				return q;
			a = this.Tr(a);
			this.Jfa(a);
			return m
		},
		bh : function (a) {
			a = this.Tr(a);
			this.Lfa(a)
		},
		Mi : function () {
			this.Kfa(R.Nb())
		},
		ge : function () {
			var a = (this.cb - this.mb) / (this.Sb - this.mb),
			c = this.Tb.rc();
			c.x = a * this.Hf.n().width;
			this.Tb.q(c);
			a = this.Io.tE();
			a = R.rect(a.x, a.y, c.x, a.height);
			this.Io.cd(a, this.Io.Ed, a.size)
		},
		qO : function (a) {
			a = a.x / this.Hf.n().width;
			return Math.max(Math.min(this.mb + a * (this.Sb - this.mb), this.JC), this.LC)
		}
	});
R.nP.create = function (a, c, d) {
	"string" == typeof a && (a = R.t.create(a), c = R.t.create(c), d = R.t.create(d));
	var e = new R.nP;
	e.N$(a, c, d);
	return e
};
R.pP = R.nc.extend({
		ae : p,
		BS : 0,
		Cx : q,
		Wt : q,
		ctor : function () {
			R.nc.prototype.ctor.call(this)
		},
		AM : function (a, c, d, e, f, g) {
			return this.m() ? (R.e(a, "Mask must not be nil."), R.e(c, "onSprite must not be nil."), R.e(d, "offSprite must not be nil."), R.e(e, "thumbSprite must not be nil."), this.xf(m), this.Wt = m, this.ae = new R.B_, this.ae.AM(a, c, d, e, f, g), this.ae.q(R.b(this.ae.n().width / 2, this.ae.n().height / 2)), this.I(this.ae), this.Gi(q), this.R(R.b(0.5, 0.5)), this.ma(this.ae.n()), m) : q
		},
		MF : function (a, c) {
			var d = (this.Wt = a) ? this.ae.Eo :
			this.ae.Fq;
			c || q ? this.ae.ab(R.os.create(0.2, "sliderXPosition", this.ae.Zm, d)) : this.ae.RN(d);
			this.xg(R.Uk)
		},
		Rua : C("Wt"),
		cua : C("Cx"),
		Nc : function (a) {
			this.Kg = a;
			this.ae.U(a ? 255 : 128)
		},
		Tr : function (a) {
			a = a.Ic;
			return a = this.Bk(a)
		},
		Lh : function (a) {
			if (!this.Hk(a) || !this.isEnabled() || !this.Ua)
				return q;
			this.Cx = q;
			this.BS = this.Tr(a).x - this.ae.Zm;
			this.ae.Tb.L(R.p$());
			this.ae.ge();
			return m
		},
		bh : function (a) {
			a = this.Tr(a);
			a = R.b(a.x - this.BS, 0);
			this.Cx = m;
			this.ae.RN(a.x)
		},
		Mi : function (a) {
			a = this.Tr(a);
			this.ae.Tb.L(R.Td());
			this.Cx ?
			this.MF(!(a.x < this.ae.n().width / 2), m) : this.MF(!this.Wt, m)
		},
		np : function (a) {
			a = this.Tr(a);
			this.ae.Tb.L(R.Td());
			this.Cx ? this.MF(!(a.x < this.ae.n().width / 2), m) : this.MF(!this.Wt, m)
		}
	});
R.pP.create = function (a, c, d, e, f, g) {
	var k = new R.pP;
	return k && k.AM(a, c, d, e, f, g) ? k : p
};
R.B_ = R.t.extend({
		Zm : 0,
		Eo : 0,
		Fq : 0,
		Bx : p,
		eL : 0,
		XJ : 0,
		nj : p,
		zl : p,
		Tb : p,
		Gq : p,
		Eq : p,
		ctor : function () {
			R.t.prototype.ctor.call(this);
			this.Fq = this.Eo = this.Zm = 0;
			this.Bx = p;
			this.XJ = this.eL = 0;
			this.Eq = this.Gq = this.Tb = this.zl = this.nj = p
		},
		AM : function (a, c, d, e, f, g) {
			return R.t.prototype.ba.call(this, a.ja()) ? (this.Eo = 0, this.Fq = -c.n().width + e.n().width / 2, this.Zm = this.Eo, this.Lea(c), this.Iea(d), this.UN(e), this.Kea(f), this.Hea(g), this.I(this.Tb), this.zea(a.ja()), this.ma(this.Bx.n()), this.ge(), m) : q
		},
		fa : function () {
			R.Ip(this)
		},
		ge : function () {
			this.nj.q(R.b(this.nj.n().width /
					2 + this.Zm, this.nj.n().height / 2));
			this.zl.q(R.b(this.nj.n().width + this.zl.n().width / 2 + this.Zm, this.zl.n().height / 2));
			this.Gq && this.Gq.q(R.b(this.nj.rc().x - this.Tb.n().width / 6, this.nj.n().height / 2));
			this.Eq && this.Eq.q(R.b(this.zl.rc().x + this.Tb.n().width / 6, this.zl.n().height / 2));
			var a = this.Bx.n();
			this.Tb.q(R.b(this.nj.n().width + this.Zm, a.height / 2));
			a = R.Db.create(a.width, a.height);
			a.Dh();
			this.nj.Y();
			this.zl.Y();
			this.Gq && this.Gq.Y();
			this.Eq && this.Eq.Y();
			a.end();
			this.Na(a.ta.ja());
			this.Nk(m)
		},
		RN : function (a) {
			a <=
			this.Fq ? a = this.Fq : a >= this.Eo && (a = this.Eo);
			this.Zm = a;
			this.ge()
		},
		Asa : C("Zm"),
		Oxa : function () {
			return this.nj.n().width
		},
		Kxa : function () {
			return this.zl.n().height
		},
		XY : function (a, c) {
			R.log("key \x3d " + c + ", value \x3d " + a);
			this.RN(a)
		},
		WAa : z("Eo"),
		gra : C("Eo"),
		UAa : z("Fq"),
		dra : C("Fq"),
		zea : z("Bx"),
		Gqa : C("Bx"),
		MBa : z("eL"),
		cta : C("eL"),
		KAa : z("XJ"),
		Fqa : C("XJ"),
		Lea : z("nj"),
		hra : C("nj"),
		Iea : z("zl"),
		era : C("zl"),
		UN : z("Tb"),
		EV : C("Tb"),
		Kea : z("Gq"),
		fra : C("Gq"),
		Hea : z("Eq"),
		cra : C("Eq")
	});
R.lP = R.nc.extend({
		hj : p,
		no : p,
		sq : p,
		od : p,
		y$ : function (a) {
			this.hj.fe = a.Ft;
			a = R.Df.yH(this.hj);
			R.nc.prototype.L.call(this, R.Gy(0 | 255 * a.i, 0 | 255 * a.h, 0 | 255 * a.c));
			this.xg(R.Uk);
			this.P6()
		},
		Y7 : function (a) {
			this.hj.Qi = a.IK;
			this.hj.ca = a.xB;
			a = R.Df.yH(this.hj);
			R.nc.prototype.L.call(this, R.Gy(0 | 255 * a.i, 0 | 255 * a.h, 0 | 255 * a.c));
			this.xg(R.Uk)
		},
		L : function (a) {
			R.nc.prototype.L.call(this, a);
			var c = new R.RGBA;
			c.i = a.i / 255;
			c.h = a.h / 255;
			c.c = a.c / 255;
			c.g = 1;
			this.hj = R.Df.n0(c);
			this.OT()
		},
		jV : C("od"),
		m : function () {
			if (R.nc.prototype.m.call(this)) {
				this.xf(m);
				R.Ff.d().By("res/extensions/CCControlColourPickerSpriteSheet.plist");
				var a = R.Oa.create("res/extensions/CCControlColourPickerSpriteSheet.png");
				this.I(a);
				this.hj = new R.YG(0, 0, 0);
				this.od = R.Df.sr("menuColourPanelBackground.png", a, R.Nb(), R.b(0.5, 0.5));
				var c = R.We(this.od.rc(), R.b(this.od.n().width / 2, this.od.n().height / 2));
				this.sq = R.OG.create(a, R.b(c.x + 8, c.y + 8));
				this.no = R.PG.create(a, R.b(c.x + 28, c.y + 28));
				this.sq.Cy(this, this.y$, R.Uk);
				this.no.Cy(this, this.Y7, R.Uk);
				this.OT();
				this.I(this.sq);
				this.I(this.no);
				this.ma(this.od.n());
				return m
			}
			return q
		},
		P6 : function () {
			this.sq.JN(this.hj.fe);
			this.no.YY(this.hj)
		},
		OT : function () {
			this.sq.JN(this.hj.fe);
			this.no.YY(this.hj);
			this.no.kga(this.hj)
		},
		Nc : function (a) {
			R.nc.prototype.Nc.call(this, a);
			this.sq != p && this.sq.Nc(a);
			this.no && this.no.Nc(a)
		},
		Lh : M(q)
	});
R.lP.create = function () {
	var a = new R.lP;
	a.m();
	return a
};
R.OG = R.nc.extend({
		Ft : 0,
		nx : 0,
		od : p,
		uj : p,
		Zc : p,
		Zpa : C("Ft"),
		JN : function (a) {
			this.Ft = a;
			this.pea(this.Ft / 360)
		},
		$pa : C("nx"),
		pea : function (a) {
			this.nx = a;
			this.Ft = 360 * this.nx;
			a = this.od.bd();
			var c = 0.5 * a.width - 15,
			d = R.Ud(360 * this.nx - 180);
			this.uj.q(R.b(this.Zc.x + 0.5 * a.width + c * Math.cos(d), this.Zc.y + 0.5 * a.height + c * Math.sin(d)))
		},
		Nc : function (a) {
			R.nc.prototype.Nc.call(this, a);
			this.uj && this.uj.U(a ? 255 : 128)
		},
		jV : C("od"),
		X9 : C("uj"),
		b$ : C("Zc"),
		EM : function (a, c) {
			return R.nc.prototype.m.call(this) ? (this.xf(m), this.od = R.Df.sr("huePickerBackground.png",
						a, c, R.b(0, 0)), this.uj = R.Df.sr("colourPicker.png", a, c, R.b(0.5, 0.5)), this.uj.q(R.b(c.x, c.y + 0.5 * this.od.bd().height)), this.Zc = c, this.nx = this.Ft = 0, m) : q
		},
		GD : function (a) {
			var c = this.od.bd();
			this.JN(R.Xn(Math.atan2(a.y - (this.Zc.y + 0.5 * c.height), a.x - (this.Zc.x + 0.5 * c.width))) + 180);
			this.xg(R.Uk)
		},
		Lw : function (a) {
			var c = Math.sqrt(Math.pow(a.x + 10, 2) + Math.pow(a.y, 2));
			return 80 > c && 59 < c ? (this.GD(a), m) : q
		},
		Lh : function (a) {
			if (!this.isEnabled() || !this.Ua)
				return q;
			a = this.Vl(a);
			return this.Lw(a)
		},
		bh : function (a) {
			a = this.Vl(a);
			this.Lw(a)
		}
	});
R.OG.create = function (a, c) {
	var d = new R.OG;
	d.EM(a, c);
	return d
};
R.PG = R.nc.extend({
		IK : 0,
		xB : 0,
		od : p,
		W4 : p,
		wT : p,
		uj : p,
		Zc : p,
		Zh : 0,
		ym : 0,
		jsa : C("IK"),
		joa : C("xB"),
		jV : C("od"),
		ora : C("xB"),
		tsa : C("wT"),
		X9 : C("uj"),
		b$ : C("Zc"),
		EM : function (a, c) {
			return R.nc.prototype.m.call(this) ? (this.xf(m), this.od = R.Df.sr("colourPickerBackground.png", a, c, R.b(0, 0)), this.W4 = R.Df.sr("colourPickerOverlay.png", a, c, R.b(0, 0)), this.wT = R.Df.sr("colourPickerShadow.png", a, c, R.b(0, 0)), this.uj = R.Df.sr("colourPicker.png", a, c, R.b(0.5, 0.5)), this.Zc = c, this.Zh = 35, this.ym = this.od.n().width / 2, m) : q
		},
		Nc : function (a) {
			R.nc.prototype.Nc.call(this,
				a);
			this.uj && this.uj.U(a ? 255 : 128)
		},
		YY : function (a) {
			var c = new R.YG;
			c.Qi = 1;
			c.fe = a.fe;
			c.ca = 1;
			a = R.Df.yH(c);
			this.od.L(R.Gy(0 | 255 * a.i, 0 | 255 * a.h, 0 | 255 * a.c))
		},
		kga : function (a) {
			a = R.b(this.Zc.x + this.Zh + this.ym * (1 - a.Qi), this.Zc.y + this.Zh + this.ym * a.ca);
			this.GD(a)
		},
		GD : function (a) {
			var c = this.Zc.x + 0.5 * this.od.bd().width,
			d = this.Zc.y + 0.5 * this.od.bd().height,
			e = a.x - c,
			f = a.y - d,
			g = Math.sqrt(e * e + f * f),
			e = Math.atan2(f, e),
			f = 0.5 * this.od.bd().width;
			g > f && (a.x = c + f * Math.cos(e), a.y = d + f * Math.sin(e));
			this.uj.q(a);
			a.x < this.Zc.x + this.Zh ?
			a.x = this.Zc.x + this.Zh : a.x > this.Zc.x + this.Zh + this.ym - 1 && (a.x = this.Zc.x + this.Zh + this.ym - 1);
			a.y < this.Zc.y + this.Zh ? a.y = this.Zc.y + this.Zh : a.y > this.Zc.y + this.Zh + this.ym && (a.y = this.Zc.y + this.Zh + this.ym);
			this.IK = 1 - Math.abs((this.Zc.x + this.Zh - a.x) / this.ym);
			this.xB = Math.abs((this.Zc.y + this.Zh - a.y) / this.ym)
		},
		Lw : function (a) {
			var c = this.Zc.x + 0.5 * this.od.bd().width,
			d = this.Zc.y + 0.5 * this.od.bd().height,
			c = a.x - c,
			d = a.y - d;
			return Math.sqrt(c * c + d * d) <= 0.5 * this.od.bd().width ? (this.GD(a), this.xg(R.Uk), m) : q
		},
		Lh : function (a) {
			if (!this.isEnabled() ||
				!this.Ua)
				return q;
			a = this.Vl(a);
			return this.Lw(a)
		},
		bh : function (a) {
			a = this.Vl(a);
			this.Lw(a)
		}
	});
R.PG.create = function (a, c) {
	var d = new R.PG;
	d.EM(a, c);
	return d
};
R.fP = 0;
R.gP = 1;
R.gA = 2;
R.Kv = R.ce(55, 55, 55);
R.IG = R.ce(147, 147, 147);
R.eP = "CourierNewPSMT";
R.wO = 0.15;
R.rZ = 12;
R.oP = R.nc.extend({
		kf : p,
		Sg : p,
		Bo : p,
		Go : p,
		cb : 0,
		Pw : q,
		Xs : q,
		nr : q,
		mb : 0,
		Sb : 0,
		ar : 0,
		ly : q,
		ir : R.gA,
		Ew : 0,
		ctor : function () {
			R.nc.prototype.ctor.call(this);
			this.Go = this.Bo = this.Sg = this.kf = p;
			this.cb = 0;
			this.nr = this.Xs = this.Pw = q;
			this.ar = this.Sb = this.mb = 0;
			this.ly = q;
			this.ir = R.gA;
			this.Ew = 0
		},
		I$ : function (a, c) {
			if (this.m()) {
				R.e(a, "Minus sprite must be not nil");
				R.e(c, "Plus sprite must be not nil");
				this.xf(m);
				this.Pw = this.Xs = m;
				this.mb = 0;
				this.Sb = 100;
				this.cb = 0;
				this.ar = 1;
				this.nr = q;
				this.Gi(q);
				this.Dea(a);
				this.kf.q(R.b(a.n().width /
						2, a.n().height / 2));
				this.I(this.kf);
				this.Cea(R.ka.create("-", R.eP, 40, R.size(40, 40), R.Uj, R.mB));
				this.Bo.L(R.IG);
				this.Bo.q(R.b(this.kf.n().width / 2, this.kf.n().height / 2));
				this.kf.I(this.Bo);
				this.Pea(c);
				this.Sg.q(R.b(a.n().width + c.n().width / 2, a.n().height / 2));
				this.I(this.Sg);
				this.Oea(R.ka.create("+", R.eP, 40, R.size(40, 40), R.Uj, R.mB));
				this.Go.L(R.Kv);
				this.Go.q(R.b(this.Sg.n().width / 2, this.Sg.n().height / 2));
				this.Sg.I(this.Go);
				var d = R.Df.FO(this.kf.bd(), this.Sg.bd());
				this.ma(R.size(this.kf.n().width + this.Sg.n().height,
						d.size.height));
				return m
			}
			return q
		},
		kCa : function (a) {
			if (this.nr = a)
				this.Bo.L(R.Kv), this.Go.L(R.Kv);
			this.ie(this.cb)
		},
		UX : function (a) {
			a >= this.Sb && R.e(0, "Must be numerically less than maximumValue.");
			this.mb = a;
			this.ie(this.cb)
		},
		TX : function (a) {
			a <= this.mb && R.e(0, "Must be numerically greater than minimumValue.");
			this.Sb = a;
			this.ie(this.cb)
		},
		ie : function (a) {
			this.$N(a, m)
		},
		uE : C("cb"),
		DBa : function (a) {
			0 >= a && R.e(0, "Must be numerically greater than 0.");
			this.ar = a
		},
		Bua : C("Pw"),
		$N : function (a, c) {
			a < this.mb ? a = this.nr ? this.Sb :
				this.mb : a > this.Sb && (a = this.nr ? this.mb : this.Sb);
			this.cb = a;
			this.nr || (this.Bo.L(a == this.mb ? R.IG : R.Kv), this.Go.L(a == this.Sb ? R.IG : R.Kv));
			c && this.xg(R.Uk)
		},
		BY : function () {
			this.Ew = -1;
			this.ds(this.update, R.wO, R.Is, 3 * R.wO)
		},
		FY : function () {
			this.yp(this.update)
		},
		update : function () {
			this.Ew++;
			this.Ew < R.rZ && 0 != this.Ew % 3 || (this.ir == R.fP ? this.$N(this.cb - this.ar, this.Pw) : this.ir == R.gP && this.$N(this.cb + this.ar, this.Pw))
		},
		UY : function (a) {
			a.x < this.kf.n().width && this.cb > this.mb ? (this.ir = R.fP, this.kf.L(R.aw), this.Sg.L(R.Yf)) :
			a.x >= this.kf.n().width && this.cb < this.Sb ? (this.ir = R.gP, this.kf.L(R.Yf), this.Sg.L(R.aw)) : (this.ir = R.gA, this.kf.L(R.Yf), this.Sg.L(R.Yf))
		},
		Lh : function (a) {
			if (!this.Hk(a) || !this.isEnabled() || !this.Ua)
				return q;
			a = this.Vl(a);
			this.UY(a);
			this.ly = m;
			this.Xs && this.BY();
			return m
		},
		bh : function (a) {
			this.Hk(a) ? (a = this.Vl(a), this.UY(a), this.ly || (this.ly = m, this.Xs && this.BY())) : (this.ly = q, this.ir = R.gA, this.kf.L(R.Yf), this.Sg.L(R.Yf), this.Xs && this.FY())
		},
		Mi : function (a) {
			this.kf.L(R.Yf);
			this.Sg.L(R.Yf);
			this.Xs && this.FY();
			this.Hk(a) && (a = this.Vl(a), this.ie(this.cb + (a.x < this.kf.n().width ? 0 - this.ar : this.ar)))
		},
		Dea : z("kf"),
		Sqa : C("kf"),
		Pea : z("Sg"),
		Bra : C("Sg"),
		Cea : z("Bo"),
		Rqa : C("Bo"),
		Oea : z("Go"),
		Ara : C("Go")
	});
R.oP.create = function (a, c) {
	var d = new R.oP;
	return d && d.I$(a, c) ? d : p
};
R.mP = R.nc.extend({
		Tb : p,
		au : p,
		$t : p,
		cb : 0,
		mb : 0,
		Sb : 1,
		R$ : function (a, c, d) {
			return this.m() ? (this.xf(m), this.Tea(c), this.UN(d), this.Tb.q(c.rc()), this.I(d, 2), this.I(c, 1), this.I(a), this.ma(a.n()), this.mb = 0, this.Sb = 1, this.ie(this.mb), m) : q
		},
		Nc : function (a) {
			this.Nc(a);
			this.Tb != NULL && this.Tb.U(a ? 255 : 128)
		},
		ie : function (a) {
			a < this.mb && (a = this.mb);
			a > this.Sb && (a = this.Sb);
			this.cb = a;
			a = (a - this.mb) / (this.Sb - this.mb);
			this.au.Pk(100 * a);
			this.Tb.he(360 * a);
			this.xg(R.Uk)
		},
		uE : C("cb"),
		UX : function (a) {
			this.mb = a;
			this.mb >= this.Sb && (this.Sb =
					this.mb + 1);
			this.ie(this.Sb)
		},
		M9 : C("mb"),
		TX : function (a) {
			this.Sb = a;
			this.Sb <= this.mb && (this.mb = this.Sb - 1);
			this.ie(this.mb)
		},
		L9 : C("Sb"),
		Hk : function (a) {
			a = this.Vl(a);
			return this.R8(this.au.rc(), a) < Math.min(this.n().width / 2, this.n().height / 2)
		},
		Lh : function (a) {
			if (!this.Hk(a) || !this.isEnabled() || !this.Ua)
				return q;
			this.$t = this.Vl(a);
			this.jca(this.$t);
			return m
		},
		bh : function (a) {
			a = this.Vl(a);
			this.lca(a)
		},
		Mi : function () {
			this.kca(R.b(0, 0))
		},
		R8 : function (a, c) {
			var d = a.x - c.x,
			e = a.y - c.y;
			return Math.sqrt(d * d + e * e)
		},
		C7 : function (a,
			c, d, e) {
			return 180 * (Math.atan2(c.x - a.x, c.y - a.y) - Math.atan2(e.x - d.x, e.y - d.y)) / Math.PI
		},
		jca : function () {
			this.hs(m);
			this.Tb.L(R.aw)
		},
		lca : function (a) {
			var c = this.C7(this.au.rc(), a, this.au.rc(), this.$t);
			180 < c ? c -= 360 : -180 > c && (c += 360);
			this.ie(this.cb + c / 360 * (this.Sb - this.mb));
			this.$t = a
		},
		kca : function () {
			this.Tb.L(R.Yf);
			this.hs(q)
		},
		UN : z("Tb"),
		EV : C("Tb"),
		Tea : z("au"),
		Lra : C("au"),
		hBa : z("$t"),
		S9 : C("$t")
	});
R.mP.create = function (a, c, d) {
	var e = new R.mP;
	return e && (a = R.t.create(a), d = R.t.create(d), c = R.vc.create(R.t.create(c)), e.R$(a, c, d)) ? e : p
};
R.RA = R.ne.extend({});
R.RA.ZCa = function (a) {
	var c = new R.RA;
	c.m();
	c.ma(R.size(0, a));
	return c
};
R.RA.dua = function (a) {
	var c = new R.RA;
	c.m();
	c.ma(R.size(a, 0));
	return c
};
R.BA = R.ne.extend({
		Fc : m,
		Fa : p,
		Hc : 0,
		ctor : x(),
		Lb : C("Fa"),
		L : function (a) {
			this.Fa = a;
			if (this.k && 0 < this.k.length)
				for (var c = 0; c < this.k.length; c++)
					this.k[c] && this.k[c].Fc && this.k[c].L(a)
		},
		rg : C("Hc"),
		U : function (a) {
			this.Hc = a;
			if (this.k && 0 < this.k.length)
				for (var c = 0; c < this.k.length; c++)
					this.k[c] && this.k[c].Fc && this.k[c].U(a)
		},
		Wu : function (a, c) {
			if (this.m()) {
				var d = R.o.d().$;
				this.Gi(m);
				this.R(R.b(0.5, 0.5));
				this.ma(d);
				this.q(R.b(d.width / 2, d.height / 2));
				d = 0;
				if (a) {
					this.I(a, d);
					for (var e = 0; e < c.length; e++)
						c[e] && (d++, this.I(c[e],
								d))
				}
				return m
			}
			return q
		},
		B7 : function () {
			this.FL(R.iA)
		},
		FL : function (a) {
			var c = -a,
			d;
			if (this.k && 0 < this.k.length)
				for (d = 0; d < this.k.length; d++)
					this.k[d] && (c += this.k[d].n().height * this.k[d].ra + a);
			var e = 0,
			f = c / 2;
			if (this.k && 0 < this.k.length)
				for (d = 0; d < this.k.length; d++)
					this.k[d] && (e = Math.max(e, this.k[d].n().width), this.k[d].q(R.b(0, f - this.k[d].n().height * this.k[d].ra / 2)), f -= this.k[d].n().height * this.k[d].ra + a);
			this.ma(R.size(e, c))
		},
		y7 : function () {
			this.EL(R.iA)
		},
		EL : function (a) {
			var c = -a,
			d;
			if (this.k && 0 < this.k.length)
				for (d =
						0; d < this.k.length; d++)
					this.k[d] && (c += this.k[d].n().width * this.k[d].ia + a);
			var e = 0,
			f = -c / 2;
			if (this.k && 0 < this.k.length)
				for (d = 0; d < this.k.length; d++)
					this.k[d] && (e = Math.max(e, this.k[d].n().height), this.k[d].q(R.b(f + this.k[d].n().width * this.k[d].ia / 2, 0)), f += this.k[d].n().width * this.k[d].ia + a);
			this.ma(R.size(c, e))
		},
		z7 : function (a) {
			var c = [],
			d;
			for (d = 1; d < arguments.length; d++)
				c.push(arguments[d]);
			var e = -5,
			f = 0,
			g = 0,
			k = 0,
			l,
			n;
			if (this.k && 0 < this.k.length)
				for (d = 0; d < this.k.length; d++)
					this.k[d] && (R.e(f < c.size(), ""), l = c[f],
						R.e(l, ""), n = this.k[d].n().height, g = 0 | (g >= n || n == p ? g : n), ++k, k >= l && (e += g + 5, g = k = 0, ++f));
			R.e(!k, "");
			var r = R.o.d().$,
			s = l = g = f = 0,
			t = 0,
			e = e / 2;
			if (this.k && 0 < this.k.length)
				for (d = 0; d < this.k.length; d++)
					this.k[d] && (0 == l && (l = c[f], t = s = r.width / (1 + l)), n = this.k[d].n().height, g = 0 | (g >= n || n == p ? g : n), this.k[d].q(R.b(t - r.width / 2, e - this.k[d].n().height / 2)), t += s, ++k, k >= l && (e -= g + 5, g = l = k = 0, ++f))
		},
		A7 : function (a) {
			var c = [],
			d;
			for (d = 1; d < arguments.length; d++)
				c.push(arguments[d]);
			var e = [],
			f = [],
			g = -10,
			k = -5,
			l = 0,
			n = 0,
			r = 0,
			s,
			t;
			if (this.k && 0 < this.k.length)
				for (d =
						0; d < this.k.length; d++)
					this.k[d] && (R.e(l < c.size(), ""), s = c[l], R.e(s, ""), t = this.k[d].n().width, n = 0 | (n >= t || t == p ? n : t), k += 0 | this.k[d].n().height + 5, ++r, r >= s && (e.push(n), f.push(k), g += n + 10, n = r = 0, k = -5, ++l));
			R.e(!r, "");
			k = R.o.d().$;
			n = l = 0;
			s = p;
			var g = -g / 2,
			v = 0;
			if (this.k && 0 < this.k.length)
				for (d = 0; d < this.k.length; d++)
					this.k[d] && (s == p && (s = c[l], v = f[l]), t = this.k[d].n().width, n = 0 | (n >= t || t == p ? n : t), this.k[d].q(R.b(g + e[l] / 2, v - k.height / 2)), v -= this.k[d].n().height + 10, ++r, r >= s && (g += n + 5, n = s = r = 0, ++l))
		},
		Rd : x(),
		Ij : M(q)
	});
R.BA.create = function (a) {
	0 == arguments.length && (a = p);
	for (var c = [], d = 1; d < arguments.length; d++)
		c.push(arguments[d]);
	return (d = new R.BA) && d.Wu(a, c) ? d : p
};
R.BA.Hma = function (a) {
	return R.BA.create(a, p)
};
R.Z1 = R.D.extend({
		LF : x(),
		Ek : M(0)
	});
R.a2 = R.Z1.extend({
		dK : 0,
		ctor : function () {
			this.dK = 0
		},
		LF : z("dK"),
		Ek : C("dK")
	});
function ub(a, c) {
	return a.Ek() - c.Ek()
}
R.sG = R.D.extend({
		tj : p,
		ctor : function () {
			this.tj = []
		},
		VV : function (a) {
			R.e(a instanceof R.D, "Invalid parameter.");
			this.U$(a, this.Uu(a))
		},
		Xca : function (a) {
			if (0 != this.count()) {
				var c = this.Uu(a);
				c < this.count() && c != R.Vn && this.Ur(c).Ek() == a.Ek() && this.uN(c)
			}
		},
		TAa : function (a, c) {
			var d = this.Uu(c);
			if (d < this.count() && d != R.Vn) {
				var e = this.Ur(d);
				e.Ek() == c.Ek() && (this.uN(d), e.LF(a), this.VV(e))
			}
		},
		IW : function (a) {
			if (0 == this.count())
				return p;
			var c = new R.a2;
			c.LF(a);
			var d = this.Uu(c);
			d < this.count() && d != R.Vn && (c = this.Ur(d), c.Ek() !=
				a && (c = p));
			return c
		},
		ara : M(p),
		Uu : function (a) {
			var c = 0;
			if (a) {
				var d = 0;
				a = a.Ek();
				for (var e = this.tj, f = 0; f < e.length; f++) {
					var g = e[f].Ek();
					if (a == g || a >= d && a < g)
						break;
					d = g;
					c++
				}
			} else
				c = R.Vn;
			return c
		},
		count : function () {
			return this.tj.length
		},
		axa : function () {
			var a = this.tj;
			return 0 == a.length ? p : a[a.length - 1]
		},
		Ur : function (a) {
			return this.tj[a]
		},
		PD : function (a) {
			this.tj.push(a);
			this.tj.sort(ub)
		},
		uN : function (a) {
			R.Qn(this.tj, a);
			this.tj.sort(ub)
		},
		U$ : function (a, c) {
			this.tj = R.Ui(this.tj, a, c);
			this.tj.sort(ub)
		}
	});
R.xQ = -1;
R.Mp = 0;
R.NA = 1;
R.MA = 2;
R.d8 = function (a) {
	var c = R.uc.d();
	return a * ((c.ia + c.ra) / 2) / 160
};
R.U1 = R.D.extend({
		lda : x(),
		mda : x()
	});
R.Zn = R.ne.extend({
		wla : 0,
		Xka : 0,
		Vka : 0,
		vb : p,
		ak : R.MA,
		sl : q,
		u3 : p,
		Sa : p,
		xj : q,
		HC : p,
		KC : p,
		Hw : q,
		Nw : q,
		Nx : p,
		qu : p,
		my : 0,
		yj : p,
		wk : p,
		TS : 0,
		RS : 0,
		Gx : p,
		JK : q,
		ET : p,
		ctor : function () {
			R.ne.prototype.ctor.call(this);
			this.u3 = new R.Dg(0, 0);
			this.HC = new R.Dg(0, 0);
			this.KC = new R.Dg(0, 0);
			this.Nx = new R.Dg(0, 0);
			this.qu = new R.Dg(0, 0);
			this.yj = [];
			this.wk = new R.sm(0, 0);
			this.Gx = new R.Xi(0, 0, 0, 0);
			this.ET = new R.Xi(0, 0, 0, 0)
		},
		m : function () {
			return this.$y(R.size(200, 200), p)
		},
		uz : function () {
			R.tF(this.cn, q, this)
		},
		$y : function (a, c) {
			var d = R.b(0, 0);
			return R.ne.prototype.m.call(this) ?
			(this.Sa = c, this.Sa || (this.Sa = R.ne.create(), this.Sa.Gi(q), this.Sa.R(d)), this.aO(a), this.xf(m), this.yj.length = 0, this.vb = p, this.Nw = this.Hw = m, this.ak = R.MA, this.Sa.q(d), this.my = 0, this.I(this.Sa), this.TS = this.RS = 1, m) : q
		},
		qv : function (a, c) {
			if (c)
				this.Oda(a, 0.15);
			else {
				if (!this.Hw) {
					var d = this.hz(),
					e = this.cF();
					a.x = Math.max(d.x, Math.min(e.x, a.x));
					a.y = Math.max(d.y, Math.min(e.y, a.y))
				}
				this.Sa.q(a)
			}
		},
		s9 : function () {
			return this.Sa.rc()
		},
		Oda : function (a, c) {
			var d = R.Es.create(c, a),
			e = R.bc.create(this.z6, this);
			this.Sa.ab(R.La.create(d,
					e));
			this.ds(this.kK)
		},
		uY : function (a, c) {
			if (c)
				this.Dfa(a, 0.15);
			else {
				var d = this.Sa;
				if (d.qE() != a) {
					var e,
					f;
					0 == this.my ? (f = this.wk, f = R.b(0.5 * f.width, 0.5 * f.height), f = this.hn(f)) : f = this.qu;
					e = d.Bk(f);
					d.jd(Math.max(this.TS, Math.min(this.RS, a)));
					e = d.hn(e);
					f = R.We(f, e);
					this.qv(R.ug(d.rc(), f))
				}
			}
		},
		GV : function () {
			return this.Sa.qE()
		},
		Dfa : function (a, c) {
			if (0 < c) {
				var d = this.Sa.qE();
				d != a && (d = R.os.create(c, "zoomScale", d, a), this.ab(d))
			} else
				this.uY(a)
		},
		hz : function () {
			var a = this.Sa,
			c = a.n(),
			d = this.wk;
			return R.b(d.width - c.width *
				a.ia, d.height - c.height * a.ra)
		},
		cF : function () {
			return R.b(0, 0)
		},
		Qua : function (a) {
			var c = this.s9(),
			d = this.wk,
			e = this.GV(),
			c = R.rect(-c.x / e, -c.y / e, d.width / e, d.height / e);
			return R.Jca(c, a.bd())
		},
		pause : function () {
			this.Sa.oF();
			for (var a = this.Sa.k, c = 0; c < a.length; c++)
				a[c].oF()
		},
		lv : function () {
			for (var a = this.Sa.k, c = 0, d = a.length; c < d; c++)
				a[c].wF();
			this.Sa.wF()
		},
		Eua : C("sl"),
		jva : C("xj"),
		wua : C("Hw"),
		Dda : z("Hw"),
		Lta : C("wk"),
		aO : function (a) {
			this.wk = a;
			R.r.prototype.ma.call(this, a)
		},
		Loa : C("Sa"),
		Nda : function (a) {
			a && (this.wg(m),
				this.Sa = a, a.Gi(q), a.R(R.b(0, 0)), this.I(a), this.aO(this.wk))
		},
		hpa : C("ak"),
		DX : z("ak"),
		$b : C("vb"),
		dh : z("vb"),
		Lh : function (a) {
			if (!this.Ua)
				return q;
			var c = this.FJ(),
			d = this.Sa,
			e = d.hn(d.Sl(a)),
			f = this.yj;
			if (2 < f.length || this.xj || !R.Yr(c, e))
				return q;
			f.push(a);
			1 == f.length ? (this.qu = this.Sl(a), this.xj = q, this.sl = m, this.Nx.x = 0, this.my = this.Nx.y = 0) : 2 == f.length && (this.qu = R.kN(this.Sl(f[0]), this.Sl(f[1])), this.my = R.RW(d.Sl(f[0]), d.Sl(f[1])), this.sl = q);
			return m
		},
		bh : function (a) {
			if (this.Ua)
				if (1 === this.yj.length && this.sl) {
					this.xj =
						m;
					var c = this.FJ(),
					d = this.Sl(a);
					a = R.We(d, this.qu);
					var e = 0,
					f = this.ak,
					e = f === R.NA ? a.y : f === R.Mp ? a.x : Math.sqrt(a.x * a.x + a.y * a.y);
					if (this.xj || !(0.04375 > Math.abs(R.d8(e))))
						if (this.xj || (a.x = 0, a.y = 0), this.qu = d, this.xj = m, R.Yr(c, this.hn(d))) {
							switch (f) {
							case R.NA:
								a.x = 0;
								break;
							case R.Mp:
								a.y = 0
							}
							d = this.Sa.rc();
							c = d.x + a.x;
							d = d.y + a.y;
							this.Nx = a;
							this.qv(R.b(c, d))
						}
				} else
					2 === this.yj.length && !this.sl && (a = R.RW(this.Sa.Sl(this.yj[0]), this.Sa.Sl(this.yj[1])), this.uY(this.GV() * a / this.my))
		},
		Mi : function () {
			this.Ua && (1 == this.yj.length &&
				this.xj && this.ds(this.aJ), this.yj.length = 0, this.xj = this.sl = q)
		},
		np : function () {
			this.Ua && (this.yj.length = 0, this.xj = this.sl = q)
		},
		ma : function (a) {
			this.Sa != p && (this.Sa.ma(a), this.TY())
		},
		n : function () {
			return this.Sa.n()
		},
		TY : function () {
			if (this.Sa != p) {
				var a = this.wk,
				c = this.cF();
				this.HC.x = c.x + 0.2 * a.width;
				this.HC.y = c.y + 0.2 * a.height;
				c = this.hz();
				this.KC.x = c.x - 0.2 * a.width;
				this.KC.y = c.y - 0.2 * a.height
			}
		},
		yua : C("Nw"),
		Lda : z("Nw"),
		Y : function (a) {
			if (this.Ua) {
				a = a || R.u;
				var c,
				d = this.k,
				e,
				f;
				if (R.T === R.Ab) {
					a.save();
					this.transform(a);
					this.PR(a);
					if (d && 0 < d.length) {
						f = d.length;
						this.Ee();
						for (c = 0; c < f; c++)
							if ((e = d[c]) && 0 > e.Ra)
								e.Y(a);
							else
								break;
						for (this.fa(a); c < f; c++)
							d[c].Y(a)
					} else
						this.fa(a);
					this.KR();
					a.restore()
				} else {
					R.tn();
					var g = this.se;
					g && g.tg() && (g.xu(), this.Oz());
					this.transform(a);
					this.PR(a);
					if (d && 0 < d.length) {
						f = d.length;
						for (c = 0; c < f; c++)
							if ((e = d[c]) && 0 > e.Ra)
								e.Y();
							else
								break;
						for (this.fa(a); c < f; c++)
							d[c].Y()
					} else
						this.fa(a);
					this.KR(a);
					g && g.tg() && g.uu(this);
					R.sn()
				}
			}
		},
		I : function (a, c, d) {
			a || b(Error("child must not nil!"));
			c = c || a.Ra;
			d = d ||
				a.ud;
			a.Gi(q);
			a.R(R.b(0, 0));
			this.Sa != a ? this.Sa.I(a, c, d) : R.ne.prototype.I.call(this, a, c, d)
		},
		xf : function (a) {
			R.ne.prototype.xf.call(this, a);
			a || (this.xj = this.sl = q, this.yj.length = 0)
		},
		Pka : M(p),
		z5 : function (a) {
			var c = this.hz(),
			d = this.cF(),
			e = this.ak,
			f = this.Sa.rc(),
			g = f.x,
			k = f.y;
			if (e === R.MA || e === R.Mp)
				g = Math.max(g, c.x), g = Math.min(g, d.x);
			if (e == R.MA || e == R.NA)
				k = Math.min(k, d.y), k = Math.max(k, c.y);
			(k != f.y || g != f.x) && this.qv(R.b(g, k), a)
		},
		aJ : function () {
			if (this.sl)
				this.yp(this.aJ);
			else {
				var a,
				c,
				d = this.Sa.rc(),
				e = this.Nx;
				this.Sa.q(d.x +
					e.x, d.y + e.y);
				this.Hw ? (a = this.HC, c = this.KC) : (a = this.cF(), c = this.hz());
				d.x = this.Sa.Gj();
				d.y = this.Sa.Hj();
				var f = d.x,
				d = d.y;
				e.x *= 0.95;
				e.y *= 0.95;
				this.qv(R.b(f, d));
				if (1 >= Math.abs(e.x) && 1 >= Math.abs(e.y) || d > a.y || d < c.y || f > a.x || f < c.x || f == a.x || f == c.x || d == a.y || d == c.y)
					this.yp(this.aJ), this.z5(m)
			}
		},
		kK : function () {
			this.sl && this.yp(this.kK)
		},
		z6 : function () {
			this.yp(this.kK)
		},
		PR : function (a) {
			if (this.Nw) {
				this.JK = q;
				var c = this.FJ(),
				d = this.ia,
				e = this.ra;
				a = a || R.u;
				if (R.T === R.Ab)
					c = this.wk.width * d, e *= this.wk.height, a.beginPath(),
					a.rect(0, 0, c, -e), a.clip(), a.closePath();
				else if (e = R.uc.d(), e.$$()) {
					if (this.JK = m, this.Gx = e.W9(), R.Ica(c, this.Gx)) {
						var f = this.Gx;
						a = Math.max(c.x, f.x);
						var d = Math.max(c.y, f.y),
						g = Math.min(c.x + c.width, f.x + f.width),
						c = Math.min(c.y + c.height, f.y + f.height);
						e.PN(a, d, g - a, c - d)
					}
				} else
					a.enable(a.SCISSOR_TEST), e.PN(c.x, c.y, c.width, c.height)
			}
		},
		KR : function (a) {
			this.Nw && R.T === R.Ya && (this.JK ? (a = this.Gx, R.uc.d().PN(a.x, a.y, a.width, a.height)) : (a = a || R.u, a.disable(a.SCISSOR_TEST)))
		},
		Jka : x(),
		FJ : function () {
			for (var a = this.hn(R.Nb()),
				c = this.wk, d = this.ia, e = this.ra, f = this.Cc; f != p; f = f.getParent())
				d *= f.ia, e *= f.ra;
			0 > d && (a.x += c.width * d, d = -d);
			0 > e && (a.y += c.height * e, e = -e);
			f = this.ET;
			f.x = a.x;
			f.y = a.y;
			f.width = c.width * d;
			f.height = c.height * e;
			return f
		}
	});
R.Zn.create = function (a, c) {
	var d = new R.Zn;
	if (2 == arguments.length) {
		if (d && d.$y(a, c))
			return d
	} else if (d && d.m())
		return d;
	return p
};
R.TH = 0;
R.b2 = 1;
R.Qja = R.r.extend({
		Pm : 0,
		cqa : C("Pm"),
		qea : z("Pm"),
		reset : function () {
			this.Pm = R.Vn
		},
		LF : z("Pm"),
		Ek : C("Pm")
	});
R.Sja = R.U1.extend({
		DCa : x(),
		BCa : x(),
		ECa : x(),
		FCa : x()
	});
R.Rja = R.D.extend({
		CCa : function (a) {
			return this.xr(a)
		},
		xr : function () {
			return R.Q1
		},
		ACa : M(p),
		Gxa : M(0)
	});
R.SQ = R.Zn.extend({
		mr : p,
		hb : p,
		it : p,
		qo : p,
		dL : p,
		NC : p,
		ctor : function () {
			R.Zn.prototype.ctor.call(this);
			this.NC = R.xQ
		},
		I2 : function (a) {
			var c = 0,
			c = this.qo.xr(this);
			switch (this.ak) {
			case R.Mp:
				c = a.x / c.width;
				break;
			default:
				c = a.y / c.height
			}
			return c
		},
		h4 : function (a) {
			var c = new R.Dg(a.x, a.y),
			d = this.qo.xr(this);
			this.mr == R.TH && (c.y = this.Sa.n().height - a.y - d.height);
			a = Math.max(0, this.I2(c));
			return a = Math.min(a, -1)
		},
		J2 : function (a) {
			var c;
			c = this.qo.xr(this);
			switch (this.ak) {
			case R.Mp:
				a = R.b(c.width * a, 0);
				break;
			default:
				a = R.b(0, c.height *
						a)
			}
			return a
		},
		S4 : function (a) {
			a = this.J2(a);
			var c = this.qo.xr(this);
			this.mr === R.TH && (a.y = this.Sa.n().height - a.y - c.height);
			return a
		},
		iL : function () {
			var a;
			a = this.qo.xr(this);
			switch (this.ak) {
			case R.Mp:
				a = R.size(0 * a.width, a.height);
				break;
			default:
				a = R.size(a.width, 0 * a.height)
			}
			this.ma(a);
			this.NC != this.ak && (this.ak == R.Mp ? this.qv(R.b(0, 0)) : this.qv(R.b(0, this.hz().y)), this.NC = this.ak)
		},
		DB : function (a) {
			var c = p;
			this.hb.b8(a) && (c = this.mo.IW(a));
			return c
		},
		US : function (a) {
			this.it.PD(a);
			this.mo.Xca(a);
			this.hb.kX(a.Pm);
			a.reset();
			a.getParent() == this.Sa && this.Sa.removeChild(a, m)
		},
		gD : function (a, c) {
			c.R(R.b(0, 0));
			c.q(this.S4(a));
			c.qea(a)
		},
		HR : function (a) {
			a.getParent() != this.Sa && this.Sa.I(a);
			this.mo.VV(a);
			this.hb.PD(a.Pm)
		},
		Yoa : C("qo"),
		Rda : z("qo"),
		$b : C("dL"),
		dh : z("dL"),
		iCa : function (a) {
			this.mr != a && (this.mr = a, 0 < this.mo.count() && this.Pca())
		},
		Ita : C("mr"),
		$y : function (a, c) {
			return R.Zn.prototype.$y.call(this, a, c) ? (this.mo = new R.sG, this.it = new R.sG, this.hb = new R.Ks, this.dL = p, this.mr = R.b2, this.DX(R.NA), R.Zn.prototype.dh.call(this, this), m) :
			q
		},
		QCa : function (a) {
			if (!(a == R.Vn || -1 < a)) {
				var c = this.DB(a);
				c && this.US(c);
				c = p;
				this.gD(a, c);
				this.HR(c)
			}
		},
		nua : function (a) {
			if (!(a == R.Vn || -1 < a)) {
				var c,
				d = this.mo;
				if (c = d.IW(a))
					for (var e = c = d.Uu(c); e < d.count(); e++)
						c = d.Ur(e), this.gD(c.Pm + 1, c);
				c = p;
				this.gD(a, c);
				this.HR(c);
				this.iL()
			}
		},
		$ya : function (a) {
			if (!(a == R.Vn || -1 < a)) {
				var c = this.DB(a);
				if (c) {
					var d = this.mo,
					e = d.Uu(c);
					this.US(c);
					this.hb.kX(a);
					for (a = d.count() - 1; a > e; a--)
						c = d.Ur(a), this.gD(c.Pm - 1, c)
				}
			}
		},
		Pca : function () {
			this.NC = R.xQ;
			for (var a = this.mo, c = this.it, d = this.Sa,
				e = 0; e < a.count(); e++) {
				var f = a.Ur(e);
				c.PD(f);
				f.reset();
				f.getParent() == d && d.removeChild(f, m)
			}
			this.hb = new R.Ks;
			this.mo = new R.sG;
			this.iL()
		},
		Nma : function () {
			if (0 == this.it.count())
				return p;
			var a = this.it.Ur(0);
			this.it.uN(0);
			return a
		},
		jma : function (a) {
			return this.DB(a)
		},
		lda : x(),
		mda : x(),
		Mi : function (a, c) {
			if (this.Ua) {
				if (1 == this.yj.length && !this.xj) {
					var d = this.Sa.Sl(a);
					this.mr === R.TH && (d.y -= this.qo.xr(this).height);
					d = 0 | this.h4(d);
					this.DB(d)
				}
				R.Zn.prototype.Mi.call(this, a, c)
			}
		}
	});
R.SQ.create = function (a, c, d) {
	var e = new R.SQ;
	e.$y(c, d);
	e.Rda(a);
	e.iL();
	return e
};
R.x0 = 0;
R.fia = 1;
R.iia = 2;
R.hia = 3;
R.gia = 4;
R.V_ = 0;
R.Gha = 1;
R.Hha = 2;
R.Iha = 3;
R.Kha = 4;
R.Fha = 5;
R.Jha = 6;
R.T_ = 0;
R.U_ = 1;
R.Eha = 2;
R.Dha = 3;
R.Cha = 4;
R.Pha = R.D.extend({
		hna : x(),
		ina : x(),
		kna : x(),
		jna : x()
	});
R.tA = R.Wk.extend({
		rl : p,
		vb : p,
		J3 : R.V_,
		I3 : R.U_,
		F4 : R.x0,
		pla : "",
		Dl : "",
		uD : p,
		Hx : p,
		PS : 50,
		U2 : 18,
		Bb : p,
		ZB : 14,
		nJ : "Arial",
		lK : "",
		mK : 14,
		qla : q,
		ctor : function (a) {
			R.Wk.prototype.ctor.call(this);
			this.uD = R.Yf;
			this.Hx = R.aw;
			this.ma(a);
			this.rl = new R.t;
			this.rl.fa = x();
			this.I(this.rl);
			var c = this;
			this.Bb = document.createElement("input");
			this.Bb.type = "text";
			this.Bb.style.fontSize = this.ZB + "px";
			this.Bb.style.color = "#000000";
			this.Bb.style.border = 0;
			this.Bb.style.background = "transparent";
			this.Bb.style.width = "100%";
			this.Bb.style.height =
				"100%";
			this.Bb.style.yla = 0;
			this.Bb.style.outline = "medium";
			this.Bb.addEventListener("input", x());
			this.Bb.addEventListener("keypress", function (a) {
				a.keyCode === R.zs.dM && (a.stopPropagation(), a.preventDefault(), R.canvas.focus())
			});
			this.Bb.addEventListener("focus", function () {
				this.value == c.Dl && (this.value = "", this.style.color = R.dp(c.uD))
			});
			this.Bb.addEventListener("blur", function () {
				"" == this.value && (this.value = c.Dl, this.style.color = R.dp(c.Hx))
			});
			R.Vc.YL(this.rl);
			this.rl.aa.appendChild(this.Bb);
			this.rl.aa.nCa =
				q;
			this.rl.aa.style.width = a.width - 6 + "px";
			this.rl.aa.style.height = a.height - 6 + "px";
			this.rl.canvas.remove()
		},
		kAa : function (a, c) {
			this.ZB = c;
			this.nJ = a;
			this.NK()
		},
		KF : function (a) {
			this.nJ = a;
			this.NK()
		},
		Az : function (a) {
			this.ZB = a;
			this.NK()
		},
		NK : function () {
			this.Bb.value != this.Dl && (this.Bb.style.fontFamily = this.nJ, this.Bb.style.fontSize = this.ZB + "px")
		},
		JBa : function (a) {
			a != p && ("" == a ? (this.Bb.value = this.Dl, this.Bb.style.color = R.dp(this.Hx)) : (this.Bb.value = a, this.Bb.style.color = R.dp(this.uD)))
		},
		lAa : function (a) {
			this.uD =
				a;
			this.Bb.value != this.Dl && (this.Bb.style.color = R.dp(a))
		},
		LAa : function (a) {
			!isNaN(a) && 0 < a && (this.PS = a, this.Bb.maxLength = a)
		},
		Iqa : C("PS"),
		NN : function (a) {
			if (a != p) {
				var c = this.Dl;
				this.Dl = a;
				this.Bb.value == c && (this.Bb.value = a, this.Bb.style.color = R.dp(this.Hx), this.hD())
			}
		},
		YX : function (a, c) {
			this.lK = a;
			this.mK = c;
			this.hD()
		},
		YX : function (a) {
			this.lK = a;
			this.hD()
		},
		YX : function (a) {
			this.mK = a;
			this.hD()
		},
		hD : function () {
			this.Bb.value == this.Dl && (this.Bb.style.fontFamily = this.lK, this.Bb.style.fontSize = this.mK + "px")
		},
		dBa : function (a) {
			this.Hx =
				a;
			this.Bb.value == this.Dl && (this.Bb.style.color = R.dp(a))
		},
		vAa : function (a) {
			this.I3 = a;
			this.Bb.type = a == R.T_ ? "password" : "text"
		},
		$sa : function () {
			return this.Bb.value
		},
		M$ : function (a, c) {
			return this.OV(c) ? (this.rl.q(3, 3), this.tY(q), this.Hn(a), this.q(0, 0), this.IR(this, this.Wfa, R.dP), m) : q
		},
		dh : z("vb"),
		Q9 : C("Dl"),
		wAa : z("J3"),
		rBa : z("F4"),
		NM : function (a) {
			var c = R.tA.uf(this);
			c.y -= 4;
			c.sua(a.end) ? this.U2 = a.end.Mqa() - c.Pqa() : R.log("needn't to adjust view layout.")
		},
		eW : x(),
		fW : x(),
		dW : x(),
		Wfa : x(),
		gua : function (a, c) {
			this.H3 =
				a.width;
			this.aa.style.width = this.H3.toString() + "px";
			this.G3 = a.height;
			this.aa.style.height = this.G3.toString() + "px";
			this.aa.style.backgroundColor = R.dp(c)
		}
	});
R.tA.uf = function (a) {
	var c = a.n(),
	c = R.rect(0, 0, c.width, c.height);
	return R.Yi(c, a.zn())
};
R.tA.create = function (a, c, d, e) {
	var f = new R.tA(a);
	c instanceof R.mc ? f.Lza(c) : f.M$(a, c) && (d && f.DF(d, R.Ep), e && f.DF(e, R.Dp));
	return f
};
R.Y0 = 5E6;
R.pZ = 50;
R.qZ = 100;
R.Dga = R.Y0 / R.pZ / R.qZ;
R.Ega = q;
R.kA = m;
R.Xla = M("0.4.0.0");
R.IA.TEXT.push("ExportJson");
R.cP = "version";
R.fA = 2;
R.Sn = 0.3;
R.GG = "skeleton";
R.JZ = "armatures";
R.HO = "armature";
R.Jv = "b";
R.d_ = "d";
R.HZ = "animations";
R.GO = "animation";
R.aP = "mov";
R.FG = "f";
R.j_ = "TextureAtlas";
R.bP = "SubTexture";
R.Ge = "name";
R.rs = "dr";
R.RZ = "fi";
R.OO = "to";
R.PO = "drTW";
R.TO = "lp";
R.AG = "sc";
R.UO = "dl";
R.NO = "dI";
R.eha = "vert";
R.aha = "frag";
R.VZ = "plist";
R.BG = "parent";
R.cA = "kX";
R.dA = "kY";
R.CG = "cX";
R.DG = "cY";
R.EG = "z";
R.QO = "evt";
R.XZ = "sd";
R.YZ = "sdE";
R.eA = "twE";
R.cha = "twR";
R.TZ = "isArmature";
R.QZ = "displayType";
R.UZ = "mov";
R.JO = "bd";
R.ss = "x";
R.ts = "y";
R.LO = "cocos2d_x";
R.MO = "cocos2d_y";
R.YO = "width";
R.SO = "height";
R.VO = "pX";
R.WO = "pY";
R.NZ = "cocos2d_pX";
R.OZ = "cocos2d_pY";
R.IO = "a";
R.XO = "r";
R.RO = "g";
R.KO = "b";
R.LZ = "aM";
R.WZ = "rM";
R.SZ = "gM";
R.MZ = "bM";
R.PZ = "colorTransform";
R.bha = "rotation";
R.dha = "uci";
R.ZO = "con";
R.c_ = "con_vt";
R.fha = "movementEventFrame";
R.hha = "soundFrame";
R.$O = "NaN";
R.f_ = "frame_data";
R.g_ = "mov_bone_data";
R.gha = "mov_frame_data";
R.h_ = "mov_data";
R.IZ = "animation_data";
R.e_ = "display_data";
R.i_ = "skin_data";
R.ZZ = "bone_data";
R.KZ = "armature_data";
R.b_ = "contour_data";
R.k_ = "texture_data";
R.l_ = "vertex";
R.$Z = "color";
R.a_ = "config_file_path";
R.Pa = R.Pa || {};
R.Pa.LB = [];
R.Pa.bC = R.fA;
R.Pa.GB = R.Sn;
R.Pa.Ho = 1;
R.Pa.jo = "";
R.Pa.Vs = 0;
R.Pa.bq = 0;
R.Pa.fBa = z("Ho");
R.Pa.Gra = C("Ho");
R.Pa.clear = function () {
	this.LB = [];
	this.jo = "";
	R.Pa.Vs = 0;
	R.Pa.bq = 0
};
R.Pa.ZT = function (a, c) {
	var d = R.cc.d().Kd(a);
	if (!R.mm(this.LB, d)) {
		this.LB.push(d);
		this.j4(a);
		var e = d.substring(d.lastIndexOf("."), d.length);
		".xml" == e ? this.n7(d) : (".json" == e || ".ExportJson" == e) && this.l7(d, c)
	}
};
R.Pa.k7 = function (a, c, d, e) {
	var f = R.cc.d().Kd(a);
	if (R.mm(this.LB, f))
		c && d && (0 == this.bq && 0 == this.Vs ? this.CI(c, d, 1) : this.CI(c, d, (this.bq - this.Vs) / this.bq));
	else {
		this.bq++;
		this.Vs++;
		var g = this;
		R.o.d().sg().pX(this, function () {
			g.ZT(a, e);
			g.Vs--;
			g.CI(c, d, (g.bq - g.Vs) / g.bq)
		}, 0.1, q)
	}
};
R.Pa.CI = function (a, c, d) {
	if (a && "string" == typeof c)
		a[c](d);
	else
		a && "function" == typeof c && c.call(a, d)
};
R.Pa.j4 = function (a) {
	this.jo = a;
	a = this.jo.lastIndexOf("/");
	this.jo = -1 < a ? this.jo.substr(0, a + 1) : ""
};
R.Pa.n7 = function (a) {
	(a = R.Zi.d().KY(a).documentElement) && this.j7(a)
};
R.Pa.j7 = function (a) {
	if (a) {
		this.bC = parseFloat(a.getAttribute(R.cP));
		for (var c = a.querySelectorAll(R.GG + " \x3e " + R.JZ + " \x3e  " + R.HO + ""), d = R.Ti.d(), e = 0; e < c.length; e++) {
			var f = this.q8(c[e]);
			d.BL(f.name, f)
		}
		c = a.querySelectorAll(R.GG + " \x3e " + R.HZ + " \x3e  " + R.GO + "");
		for (e = 0; e < c.length; e++)
			f = this.o8(c[e]), d.AL(f.name, f);
		a = a.querySelectorAll(R.GG + " \x3e " + R.j_ + " \x3e  " + R.bP + "");
		for (e = 0; e < a.length; e++)
			c = this.G8(a[e]), d.gU(c.name, c)
	} else
		R.log("XML error  or  XML is empty.")
};
R.Pa.q8 = function (a) {
	var c = a.getAttribute(R.Ge),
	d = new R.rG;
	d.name = c;
	a = a.querySelectorAll(R.HO + " \x3e " + R.Jv);
	for (c = 0; c < a.length; c++) {
		var e = a[c],
		f = e.getAttribute(R.BG);
		if (f)
			for (var g = 0; g < a.length && f != a[g].getAttribute(R.Ge); g++);
		e = this.s8(e);
		d.WT(e)
	}
	return d
};
R.Pa.s8 = function (a) {
	var c = a.getAttribute(R.Ge);
	if ("" != c) {
		var d = new R.AO;
		d.name = c;
		d.oz = a.getAttribute(R.BG) || "";
		d.Oj = parseInt(a.getAttribute(R.EG)) || 0;
		a = a.querySelectorAll(R.Jv + " \x3e " + R.d_);
		for (var e, c = 0; c < a.length; c++)
			e = a[c], e = this.t8(e), d.$T(e);
		return d
	}
};
R.Pa.t8 = function (a) {
	var c = p;
	1 == (parseFloat(a.getAttribute(R.TZ)) || 0) ? (c = new R.Yz, c.wd = CC_DISPLAY_ARMATURE) : (c = new R.Ls, c.wd = CC_DISPLAY_SPRITE);
	if (a = a.getAttribute(R.Ge) || "")
		c.sf = a;
	return c
};
R.Pa.o8 = function (a) {
	var c = a.getAttribute(R.Ge),
	d = new R.oG,
	e = R.Ti.d().Mr(c);
	d.name = c;
	a = a.querySelectorAll(R.GO + " \x3e " + R.aP);
	for (var f = p, c = 0; c < a.length; c++)
		f = a[c], f = this.A8(f, e), d.cU(f);
	return d
};
R.Pa.A8 = function (a, c) {
	var d = a.getAttribute(R.Ge),
	e = new R.OP;
	e.name = d;
	d = d = 0;
	d = parseFloat(a.getAttribute(R.rs)) || 0;
	e.duration = d;
	d = parseFloat(a.getAttribute(R.OO)) || 0;
	e.dE = d;
	d = parseFloat(a.getAttribute(R.PO)) || 0;
	e.eE = d;
	d = parseFloat(a.getAttribute(R.TO)) || 1;
	e.loop = Boolean(d);
	if (d = a.getAttribute(R.eA))
		d != R.$O ? (d = parseFloat(d) || 0, e.Nj = d) : e.Nj = R.Ma.Ns;
	for (var d = a.querySelectorAll(R.aP + " \x3e " + R.Jv), f = p, g = 0; g < d.length; g++) {
		var f = d[g],
		k = f.getAttribute(R.Ge);
		if (!e.iM(k)) {
			var k = c.Ou(k).oz,
			l = p;
			if ("" != k)
				for (var n =
						0; n < d.length && !(l = d[n], k == l.getAttribute(R.Ge)); n++);
			f = this.B8(f, l);
			e.dU(f)
		}
	}
	return e
};
R.Pa.B8 = function (a, c) {
	var d = new R.NP,
	e;
	a && (e = parseFloat(a.getAttribute(R.AG)) || 0, d.scale = e, e = parseFloat(a.getAttribute(R.UO)) || 0, 0 < e && (e -= 1), d.jn = e);
	var f = 0,
	g = e = 0,
	k = p,
	l = [];
	if (c != p) {
		for (var f = c.querySelectorAll(R.Jv + " \x3e " + R.FG), n = 0; n < f.length; n++)
			l.push(f[n]);
		f = l.length
	}
	var n = 0,
	r = a.getAttribute(R.Ge);
	d.name = r;
	for (var r = a.querySelectorAll(R.Jv + " \x3e " + R.FG), s = 0, t = 0; t < r.length; t++) {
		var v = r[t];
		if (c)
			for (; s < f && (k ? n < e || n >= e + g : 1); )
				k = l[s], e += g, g = parseFloat(k.getAttribute(R.rs)), s++;
		v = this.y8(v, k);
		d.CL(v);
		v.Hh = n;
		n += v.duration;
		d.duration = n
	}
	return d
};
R.Pa.y8 = function (a, c) {
	var d = new R.xs;
	d.bv = a.getAttribute(R.UZ) || "";
	d.event = a.getAttribute(R.QO) || "";
	d.zu = parseInt(a.getAttribute(R.JO)) || R.Qj.ew;
	d.ZF = a.getAttribute(R.XZ) || "";
	d.$F = a.getAttribute(R.YZ) || "";
	this.bC >= R.fA ? (d.x = parseFloat(a.getAttribute(R.LO)) || 0, d.y = -parseFloat(a.getAttribute(R.MO)) || 0) : (d.x = parseFloat(a.getAttribute(R.ss)) || 0, d.y = -parseFloat(a.getAttribute(R.ts)) || 0);
	d.x *= this.Ho;
	d.y *= this.Ho;
	d.Lc = parseFloat(a.getAttribute(R.CG)) || 0;
	d.Mc = parseFloat(a.getAttribute(R.DG)) || 0;
	d.ac = R.Ud(parseFloat(a.getAttribute(R.cA)) ||
			0);
	d.Vb = R.Ud(-parseFloat(a.getAttribute(R.dA)) || 0);
	d.duration = parseFloat(a.getAttribute(R.rs)) || 0;
	d.Zg = parseFloat(a.getAttribute(R.NO)) || 0;
	d.Oj = parseFloat(a.getAttribute(R.EG)) || 0;
	var e = a.querySelectorAll(R.FG + " \x3e " + R.PZ);
	if (0 < e.length) {
		var f = e[0],
		e = red = green = blue = 0,
		g = redOffset = greenOffset = blueOffset = 100,
		e = parseFloat(f.getAttribute(R.IO)) || e;
		red = parseFloat(f.getAttribute(R.XO)) || red;
		green = parseFloat(f.getAttribute(R.RO)) || green;
		blue = parseFloat(f.getAttribute(R.KO)) || blue;
		var k = f.getAttribute(R.LZ);
		k && (g = parseFloat(k));
		(k = f.getAttribute(R.WZ)) && (redOffset = parseFloat(k));
		var l = f.getAttribute(R.SZ);
		k && (greenOffset = parseFloat(l));
		(f = f.getAttribute(R.MZ)) && (blueOffset = parseFloat(f));
		d.g = 2.55 * g + e;
		d.i = 2.55 * redOffset + red;
		d.h = 2.55 * greenOffset + green;
		d.c = 2.55 * blueOffset + blue;
		d.Ik = m
	}
	-1 == d.Zg && (d.g = 0);
	if (e = a.getAttribute(R.eA))
		d.Nj = e != R.$O ? parseFloat(e) || 0 : R.Ma.Ns;
	c && (e = new R.Rn, this.bC >= R.fA ? (e.x = parseFloat(c.getAttribute(R.LO)) || 0, e.y = parseFloat(c.getAttribute(R.MO)) || 0) : (e.x = parseFloat(c.getAttribute(R.ss)) ||
				0, e.y = parseFloat(c.getAttribute(R.ts)) || 0), e.ac = parseFloat(c.getAttribute(R.cA)) || 0, e.Vb = parseFloat(c.getAttribute(R.dA)) || 0, e.y = -e.y, e.ac = R.Ud(e.ac), e.Vb = R.Ud(-e.Vb), R.lh.Yfa(d, e));
	return d
};
R.Pa.G8 = function (a) {
	var c = new R.TQ;
	a.getAttribute(R.Ge) && (c.name = a.getAttribute(R.Ge));
	var d,
	e,
	f,
	g = 0;
	this.bC >= R.fA ? (d = parseFloat(a.getAttribute(R.NZ)) || 0, e = parseFloat(a.getAttribute(R.OZ)) || 0) : (d = parseFloat(a.getAttribute(R.VO)) || 0, e = parseFloat(a.getAttribute(R.WO)) || 0);
	f = parseFloat(a.getAttribute(R.YO)) || 0;
	g = parseFloat(a.getAttribute(R.SO)) || 0;
	c.pF = d / f;
	c.qF = (g - e) / g;
	a = a.querySelectorAll(R.bP + " \x3e " + R.ZO);
	for (d = 0; d < a.length; d++)
		this.w8(a[d]);
	return c
};
R.Pa.w8 = function (a) {
	var c = new R.kP;
	a = a.querySelectorAll(R.ZO + " \x3e " + R.c_);
	for (var d, e = 0; e < a.length; e++) {
		d = a[e];
		var f = R.b(0, 0);
		f.x = parseFloat(d.getAttribute(R.ss)) || 0;
		f.y = parseFloat(d.getAttribute(R.ts)) || 0;
		c.ls.push(f)
	}
};
R.Pa.l7 = function (a, c) {
	var d = R.cc.d().rE(a);
	this.m7(d, c)
};
R.Pa.m7 = function (a, c) {
	for (var d = JSON.parse(a), e = d[R.KZ] || [], f, g = 0; g < e.length; g++)
		f = this.r8(e[g]), R.Ti.d().BL(f.name, f);
	e = d[R.IZ] || [];
	for (g = 0; g < e.length; g++)
		f = this.p8(e[g]), R.Ti.d().AL(f.name, f);
	e = d[R.k_] || [];
	for (g = 0; g < e.length; g++)
		f = this.H8(e[g]), R.Ti.d().gU(f.name, f);
	if (c) {
		d = d[R.a_] || [];
		for (g = 0; g < d.length; g++)
			e = d[g], f = e.lastIndexOf("."), e = e.substring(0, f), f = this.jo + e + ".plist", e = this.jo + e + ".png", R.Ti.d().Ay(f, e)
	}
	textData = p
};
R.Pa.r8 = function (a) {
	var c = new R.rG,
	d = a[R.Ge];
	d && (c.name = d);
	this.GB = c.Eu = a[R.cP] || 0.1;
	a = a[R.ZZ];
	for (d = 0; d < a.length; d++)
		c.WT(this.v8(a[d]));
	return c
};
R.Pa.v8 = function (a) {
	var c = new R.AO;
	this.GU(c, a);
	c.name = a[R.Ge] || "";
	c.oz = a[R.BG] || "";
	a = a[R.e_] || [];
	for (var d = 0; d < a.length; d++)
		c.$T(this.u8(a[d]));
	return c
};
R.Pa.u8 = function (a) {
	var c = a[R.QZ] || CC_DISPLAY_SPRITE,
	d = p;
	switch (c) {
	case CC_DISPLAY_SPRITE:
		d = new R.Ls;
		d.sf = a[R.Ge] || "";
		if (a = (a[R.i_] || [])[0])
			d.Qk.x = (a[R.ss] || 0) * this.Ho, d.Qk.y = (a[R.ts] || 0) * this.Ho, d.Qk.Lc = a[R.CG] || 1, d.Qk.Mc = a[R.DG] || 1, d.Qk.ac = a[R.cA] || 0, d.Qk.Vb = a[R.dA] || 0;
		break;
	case CC_DISPLAY_ARMATURE:
		d = new R.Yz;
		d.sf = a[R.Ge] || "";
		break;
	case CC_DISPLAY_PARTICLE:
		d = new R.sH;
		d.hv = this.jo + a[R.VZ] || "";
		break;
	default:
		d = new R.Ls
	}
	d.wd = c;
	return d
};
R.Pa.p8 = function (a) {
	var c = new R.oG;
	c.name = a[R.Ge] || "";
	a = a[R.h_] || [];
	for (var d = 0; d < a.length; d++)
		c.cU(this.D8(a[d]));
	return c
};
R.Pa.D8 = function (a) {
	var c = new R.OP;
	c.loop = a[R.TO] || q;
	c.eE = a[R.PO] || 0;
	c.dE = a[R.OO] || 0;
	c.duration = a[R.rs] || 0;
	c.scale = a[R.AG] || 1;
	c.Nj = a[R.eA] || R.Ma.Zk;
	c.name = a[R.Ge] || "";
	a = a[R.g_] || [];
	for (var d = 0; d < a.length; d++)
		c.dU(this.C8(a[d]));
	return c
};
R.Pa.C8 = function (a) {
	var c = new R.NP;
	c.jn = a[R.UO] || 0;
	c.scale = a[R.AG] || 1;
	c.name = a[R.Ge] || "";
	a = a[R.f_] || [];
	for (var d = 0; d < a.length; d++) {
		var e = this.z8(a[d]);
		c.CL(e);
		this.GB < R.Sn && (e.Hh = c.duration, c.duration += e.duration)
	}
	this.GB < R.Sn && 0 < c.Cj.length && (e = new R.xs, e.copy(c.Cj[c.Cj.length - 1]), c.CL(e), e.Hh = c.duration);
	return c
};
R.Pa.z8 = function (a) {
	var c = new R.xs;
	this.GU(c, a);
	c.duration = a[R.rs] || 1;
	c.Nj = a[R.eA] || R.Ma.Zk;
	c.Zg = a[R.NO] || 0;
	c.zu = a[R.JO] || 0;
	c.event = a[R.QO] || p;
	this.GB < R.Sn ? c.duration = a[R.rs] || 1 : c.Hh = a[R.RZ] || 0;
	return c
};
R.Pa.H8 = function (a) {
	var c = new R.TQ;
	c.name = a[R.Ge] || "";
	c.width = a[R.YO] || 0;
	c.height = a[R.SO] || 0;
	c.pF = a[R.VO] || 0;
	c.qF = a[R.WO] || 0;
	a = a[R.b_] || [];
	for (var d = 0; d < a.length; d++)
		c.Br.push(this.x8(a[d]));
	return c
};
R.Pa.x8 = function (a) {
	var c = new R.kP;
	a = a[R.l_] || [];
	for (var d = 0; d < a.length; d++) {
		var e = a[d],
		f = R.b(0, 0);
		f.x = e[R.ss] || 0;
		f.y = e[R.ts] || 0;
		c.ls.push(f)
	}
	return c
};
R.Pa.GU = function (a, c) {
	a.x = (c[R.ss] || 0) * this.Ho;
	a.y = (c[R.ts] || 0) * this.Ho;
	a.Oj = c[R.EG] || 0;
	a.ac = c[R.cA] || 0;
	a.Vb = c[R.dA] || 0;
	a.Lc = c[R.CG] || 1;
	a.Mc = c[R.DG] || 1;
	var d = c[R.$Z] || p;
	d && (a.g = d[R.IO] || 255, a.i = d[R.XO] || 255, a.h = d[R.RO] || 255, a.c = d[R.KO] || 255, a.Ik = m, delete d)
};
R.Op = R.D.extend({
		C6 : p,
		f4 : [],
		ctor : function () {
			this.C6 = {};
			this.f4 = []
		},
		Ay : function (a, c) {
			R.Ff.d().By(a, c)
		},
		DV : M(p)
	});
R.Op.d = function () {
	this.Da || (this.Da = new R.Op);
	return this.Da
};
R.Op.qN = function () {
	this.Da = p
};
R.lh = {};
R.lh.wE = R.Vz(1, 0, 0, 1, 0, 0);
R.lh.xE = R.Vz(1, 0, 0, 1, 0, 0);
R.lh.Xl = R.b(0, 0);
R.lh.Yl = R.b(0, 0);
R.lh.Yfa = function (a, c) {
	this.$M(a, this.wE);
	this.$M(c, this.xE);
	this.xE = R.nG(this.xE);
	this.wE = R.Cf(this.wE, this.xE);
	this.AW(this.wE, a)
};
R.lh.$M = function (a, c) {
	c.g = a.Lc * Math.cos(a.Vb);
	c.c = a.Lc * Math.sin(a.Vb);
	c.C = a.Mc * Math.sin(a.ac);
	c.F = a.Mc * Math.cos(a.Vb);
	c.V = a.x;
	c.W = a.y
};
R.lh.AW = function (a, c) {
	this.Xl.x = 0;
	this.Xl.y = 1;
	this.Xl = R.Lp(this.Xl, a);
	this.Xl.x -= a.V;
	this.Xl.y -= a.W;
	this.Yl.x = 1;
	this.Yl.y = 0;
	this.Yl = R.Lp(this.Yl, a);
	this.Yl.x -= a.V;
	this.Yl.y -= a.W;
	c.ac =  - (Math.atan2(this.Xl.y, this.Xl.x) - 1.5707964);
	c.Vb = Math.atan2(this.Yl.y, this.Yl.x);
	c.Lc = Math.sqrt(a.g * a.g + a.c * a.c);
	c.Mc = Math.sqrt(a.C * a.C + a.F * a.F);
	c.x = a.V;
	c.y = a.W
};
R.lh.Maa = function (a, c) {
	a.x += c.x;
	a.y += c.y;
	a.ac += c.ac;
	a.Vb += c.Vb;
	a.Lc += c.Lc;
	a.Mc += c.Mc
};
R.lh.Naa = function (a, c) {
	a.x -= c.x;
	a.y -= c.y;
	a.ac -= c.ac;
	a.Vb -= c.Vb;
	a.Lc -= c.Lc;
	a.Mc -= c.Mc
};
R.Ma = {
	Nja : -1,
	Zk : 0,
	W1 : 1,
	X1 : 2,
	Y1 : 3,
	p1 : 4,
	r1 : 5,
	q1 : 6,
	C_ : 7,
	E_ : 8,
	D_ : 9,
	s1 : 10,
	u1 : 11,
	t1 : 12,
	v1 : 13,
	x1 : 14,
	w1 : 15,
	Z_ : 16,
	a0 : 17,
	$_ : 18,
	t_ : 19,
	v_ : 20,
	u_ : 21,
	W_ : 22,
	Y_ : 23,
	X_ : 24,
	zZ : 25,
	BZ : 26,
	AZ : 27,
	CZ : 28,
	EZ : 29,
	DZ : 30,
	Ns : 1E4
};
R.Fb = R.Fb || {};
R.Fb.$fa = function (a, c) {
	var d = 0;
	switch (c) {
	case R.Ma.Zk:
		d = this.Baa(a);
		break;
	case R.Ma.W1:
		d = this.Hfa(a);
		break;
	case R.Ma.Y1:
		d = this.Ifa(a);
		break;
	case R.Ma.X1:
		d = this.yY(a);
		break;
	case R.Ma.p1:
		d = this.xca(a);
		break;
	case R.Ma.r1:
		d = this.zca(a);
		break;
	case R.Ma.q1:
		d = this.yca(a);
		break;
	case R.Ma.C_:
		d = this.k8(a);
		break;
	case R.Ma.E_:
		d = this.m8(a);
		break;
	case R.Ma.D_:
		d = this.l8(a);
		break;
	case R.Ma.s1:
		d = this.Aca(a);
		break;
	case R.Ma.u1:
		d = this.Cca(a);
		break;
	case R.Ma.t1:
		d = this.Bca(a);
		break;
	case R.Ma.v1:
		d = this.Dca(a);
		break;
	case R.Ma.x1:
		d =
			this.Fca(a);
		break;
	case R.Ma.w1:
		d = this.Eca(a);
		break;
	case R.Ma.Z_:
		d = this.c9(a);
		break;
	case R.Ma.a0:
		d = this.e9(a);
		break;
	case R.Ma.$_:
		d = this.d9(a);
		break;
	case R.Ma.t_:
		d = this.V7(a);
		break;
	case R.Ma.v_:
		d = this.X7(a);
		break;
	case R.Ma.u_:
		d = this.W7(a);
		break;
	case R.Ma.W_:
		d = this.X8(a);
		break;
	case R.Ma.Y_:
		d = this.Z8(a);
		break;
	case R.Ma.X_:
		d = this.Y8(a);
		break;
	case R.Ma.zZ:
		d = this.J7(a);
		break;
	case R.Ma.BZ:
		d = this.L7(a);
		break;
	case R.Ma.AZ:
		d = this.K7(a);
		break;
	case R.Ma.CZ:
		d = this.mU(a);
		break;
	case R.Ma.EZ:
		d = this.ML(a);
		break;
	case R.Ma.DZ:
		d =
			this.Q7(a);
		break;
	default:
		d = this.yY(a)
	}
	return d
};
R.Fb.Baa = function (a) {
	return 1 * a / 1 + 0
};
R.Fb.xca = function (a) {
	return 1 * (a /= 1) * a + 0
};
R.Fb.zca = function (a) {
	return -1 * (a /= 1) * (a - 2) + 0
};
R.Fb.yca = function (a) {
	return 1 > (a /= 0.5) ? 0.5 * a * a + 0 : -0.5 * (--a * (a - 2) - 1) + 0
};
R.Fb.k8 = function (a) {
	return 1 * (a /= 1) * a * a + 0
};
R.Fb.m8 = function (a) {
	return 1 * ((a = a / 1 - 1) * a * a + 1) + 0
};
R.Fb.l8 = function (a) {
	return 1 > (a /= 0.5) ? 0.5 * a * a * a + 0 : 0.5 * ((a -= 2) * a * a + 2) + 0
};
R.Fb.Aca = function (a) {
	return 1 * (a /= 1) * a * a * a + 0
};
R.Fb.Cca = function (a) {
	return -1 * ((a = a / 1 - 1) * a * a * a - 1) + 0
};
R.Fb.Bca = function (a) {
	return 1 > (a /= 0.5) ? 0.5 * a * a * a * a + 0 : -0.5 * ((a -= 2) * a * a * a - 2) + 0
};
R.Fb.Dca = function (a) {
	return 1 * (a /= 1) * a * a * a * a + 0
};
R.Fb.Fca = function (a) {
	return 1 * ((a = a / 1 - 1) * a * a * a * a + 1) + 0
};
R.Fb.Eca = function (a) {
	return 1 > (a /= 0.5) ? 0.5 * a * a * a * a * a + 0 : 0.5 * ((a -= 2) * a * a * a * a + 2) + 0
};
R.Fb.Hfa = function (a) {
	return -1 * Math.cos(a / 1 * (R.PI / 2)) + 1
};
R.Fb.Ifa = function (a) {
	return 1 * Math.sin(a / 1 * (R.PI / 2)) + 0
};
R.Fb.yY = function (a) {
	return -0.5 * (Math.cos(R.PI * a / 1) - 1) + 0
};
R.Fb.c9 = function (a) {
	return 0 == a ? 0 : 1 * Math.pow(2, 10 * (a / 1 - 1)) + 0
};
R.Fb.e9 = function (a) {
	return 1 == a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1) + 0
};
R.Fb.d9 = function (a) {
	return 0 == a ? 0 : 1 == a ? 1 : 1 > (a /= 0.5) ? 0.5 * Math.pow(2, 10 * (a - 1)) + 0 : 0.5 * (-Math.pow(2, -10 * --a) + 2) + 0
};
R.Fb.V7 = function (a) {
	return -1 * (Math.sqrt(1 - (a /= 1) * a) - 1) + 0
};
R.Fb.X7 = function (a) {
	return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a) + 0
};
R.Fb.W7 = function (a) {
	return 1 > (a /= 0.5) ? -0.5 * (Math.sqrt(1 - a * a) - 1) + 0 : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1) + 0
};
R.Fb.X8 = function (a) {
	var c,
	d,
	e = 0;
	if (0 == a)
		return 0;
	if (1 == (a /= 1))
		return 1;
	d || (d = 0.3);
	!c || c < Math.abs(1) ? (c = 1, e = d / 4) : e = d / (2 * R.PI) * Math.asin(1 / c);
	return  - (c * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - e) * 2 * R.PI / d)) + 0
};
R.Fb.Z8 = function (a) {
	var c,
	d,
	e = 0;
	if (0 == a)
		return 0;
	if (1 == (a /= 1))
		return 1;
	d || (d = 0.3);
	!c || c < Math.abs(1) ? (c = 1, e = d / 4) : e = d / (2 * R.PI) * Math.asin(1 / c);
	return c * Math.pow(2, -10 * a) * Math.sin((1 * a - e) * 2 * R.PI / d) + 1
};
R.Fb.Y8 = function (a) {
	var c,
	d,
	e = 0;
	if (0 == a)
		return 0;
	if (2 == (a /= 0.5))
		return 1;
	d || (d = 1 * 0.3 * 1.5);
	!c || c < Math.abs(1) ? (c = 1, e = d / 4) : e = d / (2 * R.PI) * Math.asin(1 / c);
	return 1 > a ? -0.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin((1 * a - e) * 2 * R.PI / d) + 0 : 0.5 * c * Math.pow(2, -10 * (a -= 1)) * Math.sin((1 * a - e) * 2 * R.PI / d) + 1
};
R.Fb.J7 = function (a) {
	var c;
	0 == c && (c = 1.70158);
	return 1 * (a /= 1) * a * ((c + 1) * a - c) + 0
};
R.Fb.L7 = function (a) {
	var c;
	0 == c && (c = 1.70158);
	return 1 * ((a = a / 1 - 1) * a * ((c + 1) * a + c) + 1) + 0
};
R.Fb.K7 = function (a) {
	var c;
	0 == c && (c = 1.70158);
	return 1 > (a /= 0.5) ? 0.5 * a * a * (((c *= 1.525) + 1) * a - c) + 0 : 0.5 * ((a -= 2) * a * (((c *= 1.525) + 1) * a + c) + 2) + 0
};
R.Fb.mU = function (a) {
	return 1 - this.ML(1 - a) + 0
};
R.Fb.ML = function (a) {
	return (a /= 1) < 1 / 2.75 ? 1 * 7.5625 * a * a + 0 : a < 2 / 2.75 ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + 0 : a < 2.5 / 2.75 ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + 0 : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + 0
};
R.Fb.Q7 = function (a) {
	return 0.5 > a ? 0.5 * this.mU(2 * a) + 0 : 0.5 * this.ML(2 * a - 1) + 0.5
};
R.ep = function (a, c) {
	for (; a >= c; )
		a -= c;
	return a
};
function $(a) {
	a && a.dm && a.dm()
}
R.bW = function (a, c, d) {
	var e = R.b(0, 0);
	d && (e = a.Bk(c));
	a = a.n();
	a = R.rect(0, 0, a.width, a.height);
	return R.Yr(a, e)
};
R.sja = R.bW;
R.S1 = R.bW;
R.nna = function (a, c, d, e, f) {
	var g = R.b(0, 0);
	e && !f && (g.x = Math.pow(1 - a, 2) * c.x + 2 * a * (1 - a) * d.x + Math.pow(a, 2) * e.x, g.y = Math.pow(1 - a, 2) * c.y + 2 * a * (1 - a) * d.y + Math.pow(a, 2) * e.y);
	f && (g.x = c.x * Math.pow(1 - a, 3) + 3 * a * d.x * Math.pow(1 - a, 2) + 3 * e.x * Math.pow(a, 2) * (1 - a) + f.x * Math.pow(a, 3), g.y = c.y * Math.pow(1 - a, 3) + 3 * a * d.y * Math.pow(1 - a, 2) + 3 * e.y * Math.pow(a, 2) * (1 - a) + f.y * Math.pow(a, 3));
	return g
};
R.ona = function (a, c, d, e, f) {
	var g = R.b(0, 0);
	g.x = c.x + d * Math.cos(e + f * a);
	g.y = c.y + d * Math.sin(e + f * a);
	return g
};
R.Ti = R.D.extend({
		um : p,
		vm : p,
		$m : p,
		ctor : function () {
			this.um = {};
			this.vm = {};
			this.$m = {}

		},
		m : x(),
		BL : function (a, c) {
			this.vm && (this.vm[a] = c)
		},
		Yya : function (a) {
			this.vm.hasOwnProperty(a) && delete this.vm[a]
		},
		Mr : function (a) {
			var c = p;
			this.vm && (c = this.vm[a]);
			return c
		},
		Xna : C("vm"),
		AL : function (a, c) {
			this.um && (this.um[a] = c)
		},
		Xya : function (a) {
			this.um.hasOwnProperty(a) && delete this.um[a]
		},
		iV : function (a) {
			var c = p;
			this.um[a] && (c = this.um[a]);
			return c
		},
		Pna : C("um"),
		gU : function (a, c) {
			this.$m && (this.$m[a] = c)
		},
		mza : function (a) {
			this.$m.hasOwnProperty(a) &&
			delete this.$m[a]
		},
		f$ : function (a) {
			var c = p;
			this.$m && (c = this.$m[a]);
			return c
		},
		bta : C("$m"),
		zla : function () {
			var a,
			c,
			d,
			e = q;
			1 == arguments.length ? (d = arguments[0], e = m) : 3 == arguments.length && (a = arguments[0], c = arguments[1], d = arguments[2], this.Ay(c, a));
			R.Pa.ZT(d, e)
		},
		Ala : function () {
			var a,
			c,
			d,
			e,
			f,
			g = q;
			3 == arguments.length ? (d = arguments[0], e = arguments[1], f = arguments[2], g = m) : 5 == arguments.length && (a = arguments[0], c = arguments[1], d = arguments[2], e = arguments[3], f = arguments[4], this.Ay(c, a));
			R.Pa.k7(d, e, f, g)
		},
		Ay : function (a, c) {
			R.Op.d().Ay(a,
				c)
		},
		vF : function () {
			this.$m = this.vm = this.um = p;
			R.Pa.clear()
		}
	});
R.Ti.Da = p;
R.Ti.d = function () {
	this.Da || (this.Da = new R.Ti, this.Da.m());
	return this.Da
};
R.Ti.qN = function () {
	R.Op.qN();
	R.Pa.clear();
	this.Da = p
};
R.Qj = {
	ew : 0,
	lia : 1,
	rha : 2,
	IP : 3,
	mia : 4,
	wQ : 5,
	Oia : 6,
	Wha : 7,
	vO : 8,
	tja : 9,
	yha : 10,
	INVERT : 11,
	ALPHA : 12,
	Nha : 13
};
CC_DISPLAY_SPRITE = 0;
CC_DISPLAY_ARMATURE = 1;
CC_DISPLAY_PARTICLE = 2;
CC_DISPLAY_MAX = 3;
R.Rn = R.D.extend({
		x : 0,
		y : 0,
		Oj : 0,
		ac : 0,
		Vb : 0,
		Lc : 1,
		Mc : 1,
		Dv : 0,
		Ik : q,
		i : 255,
		h : 255,
		c : 255,
		g : 255,
		ctor : function () {
			this.Vb = this.ac = this.Oj = this.y = this.x = 0;
			this.Mc = this.Lc = 1;
			this.Dv = 0;
			this.Ik = q;
			this.color = R.Ak(1, 1, 1, 1)
		},
		copy : function (a) {
			this.x = a.x;
			this.y = a.y;
			this.Oj = a.Oj;
			this.Lc = a.Lc;
			this.Mc = a.Mc;
			this.ac = a.ac;
			this.Vb = a.Vb;
			this.Dv = a.Dv;
			this.Ik = a.Ik;
			this.i = a.i;
			this.h = a.h;
			this.c = a.c;
			this.g = a.g
		},
		L : function (a) {
			this.i = a.i;
			this.h = a.h;
			this.c = a.c;
			this.g = a.g
		},
		Lb : function () {
			return R.Ak(this.i, this.h, this.c, this.g)
		},
		hO : function (a,
			c) {
			this.x = c.x - a.x;
			this.y = c.y - a.y;
			this.Lc = c.Lc - a.Lc;
			this.Mc = c.Mc - a.Mc;
			this.ac = c.ac - a.ac;
			this.Vb = c.Vb - a.Vb;
			this.Ik || a.Ik || c.Ik ? (this.g = c.g - a.g, this.i = c.i - a.i, this.h = c.h - a.h, this.c = c.c - a.c, this.Ik = m) : (this.g = this.i = this.h = this.c = 0, this.Ik = q);
			this.ac > R.PI && (this.ac -= 2 * R.PI);
			this.ac < -R.PI && (this.ac += 2 * R.PI);
			this.Vb > R.PI && (this.Vb -= 2 * R.PI);
			this.Vb < -R.PI && (this.Vb += 2 * R.PI);
			c.Dv && (this.ac += c.Dv, this.Vb += c.Dv)
		}
	});
R.Fp = R.D.extend({
		wd : CC_DISPLAY_SPRITE,
		ctor : function () {
			this.wd = CC_DISPLAY_MAX
		},
		mma : function (a) {
			var c = a.lastIndexOf(".");
			-1 != c && (a = a.substring(0, c));
			return a
		}
	});
R.Ls = R.Fp.extend({
		sf : "",
		Qk : p,
		ctor : function () {
			this.sf = "";
			this.Qk = new R.Rn;
			this.wd = CC_DISPLAY_SPRITE
		},
		MN : z("sf"),
		copy : function (a) {
			this.sf = a.sf;
			this.wd = a.wd;
			this.Qk = a.Qk
		}
	});
R.Eia = R.Fp.extend({
		ZM : p,
		ctor : function () {
			this.sf = "";
			this.wd = CC_DISPLAY_NODE;
			this.ZM = p
		},
		copy : function (a) {
			this.sf = a.sf;
			this.wd = a.wd;
			this.ZM = a.ZM
		}
	});
R.Yz = R.Fp.extend({
		sf : "",
		ctor : function () {
			this.sf = "";
			this.wd = CC_DISPLAY_ARMATURE
		},
		MN : z("sf"),
		copy : function (a) {
			this.sf = a.sf;
			this.wd = a.wd
		}
	});
R.sH = R.Fp.extend({
		hv : "",
		ctor : function () {
			this.hv = "";
			this.wd = CC_DISPLAY_PARTICLE
		},
		MN : z("hv"),
		copy : function (a) {
			this.hv = a.hv;
			this.wd = a.wd
		}
	});
R.wja = R.Fp.extend({
		kG : "",
		hE : "",
		ctor : function () {
			this.hE = this.kG = "";
			this.wd = CC_DISPLAY_SHADER
		},
		MN : function (a, c) {
			this.kG = a;
			this.hE = c
		},
		copy : function (a) {
			this.kG = a.kG;
			this.hE = a.hE;
			this.wd = a.wd
		}
	});
R.AO = R.Rn.extend({
		aE : p,
		name : "",
		oz : "",
		P7 : p,
		ctor : function () {
			this.aE = [];
			this.oz = this.name = "";
			this.P7 = p
		},
		m : x(),
		$T : function (a) {
			this.aE.push(a)
		},
		hp : function (a) {
			return this.aE[a]
		}
	});
R.rG = R.D.extend({
		Fy : p,
		name : "",
		Eu : 0,
		ctor : function () {
			this.Fy = {};
			this.name = "";
			this.Eu = 0
		},
		m : M(m),
		WT : function (a) {
			this.Fy[a.name] = a
		},
		eoa : C("Fy"),
		Ou : function (a) {
			return this.Fy[a]
		}
	});
R.xs = R.Rn.extend({
		duration : 0,
		Nj : 0,
		Zg : -1,
		bv : "",
		event : "",
		ZF : "",
		$F : "",
		zu : 0,
		Hh : 0,
		ctor : function () {
			R.Rn.prototype.ctor.call(this);
			this.duration = 1;
			this.Nj = R.Ma.Zk;
			this.Zg = 0;
			this.$F = this.ZF = this.event = this.bv = "";
			this.zu = R.Qj.ew;
			this.Hh = 0
		},
		copy : function (a) {
			R.Rn.prototype.copy.call(this, a);
			this.duration = a.duration;
			this.Nj = a.Nj;
			this.Zg = a.Zg;
			this.bv = a.bv;
			this.event = a.event;
			this.ZF = a.ZF;
			this.$F = a.$F;
			this.zu = a.zu
		}
	});
R.NP = R.D.extend({
		jn : 0,
		scale : 1,
		duration : 0,
		Cj : p,
		name : "",
		ctor : function () {
			this.jn = 0;
			this.scale = 1;
			this.duration = 0;
			this.Cj = [];
			this.name = ""
		},
		m : function () {
			this.Cj = []
		},
		CL : function (a) {
			this.Cj.push(a)
		},
		xV : function (a) {
			return this.Cj[a]
		}
	});
R.OP = R.D.extend({
		YM : p,
		duration : 0,
		scale : 0,
		dE : 0,
		eE : R.Ma.Zk,
		loop : m,
		Nj : 2,
		name : "",
		ctor : function () {
			this.name = "";
			this.duration = 0;
			this.scale = 1;
			this.eE = this.dE = 0;
			this.loop = m;
			this.Nj = R.Ma.Zk;
			this.YM = {}

		},
		dU : function (a) {
			this.YM[a.name] = a
		},
		iM : function (a) {
			return this.YM[a]
		}
	});
R.oG = R.D.extend({
		eF : p,
		fF : p,
		name : "",
		ctor : function () {
			this.eF = {};
			this.fF = []
		},
		cU : function (a) {
			this.eF[a.name] = a;
			this.fF.push(a.name)
		},
		yV : function (a) {
			return this.eF[a]
		},
		zV : function () {
			return Object.keys(this.eF).length
		}
	});
R.A_ = function (a, c) {
	this.x = a || 0;
	this.y = c || 0
};
R.kP = R.D.extend({
		ls : p,
		ctor : function () {
			this.ls = []
		},
		m : function () {
			this.ls = [];
			return m
		},
		Qla : function (a) {
			a = R.A_(a.x, a.y);
			this.ls.push(a)
		}
	});
R.TQ = R.D.extend({
		height : 0,
		width : 0,
		pF : 0,
		qF : 0,
		name : "",
		Br : p,
		ctor : function () {
			this.width = this.height = 0;
			this.qF = this.pF = 0.5;
			this.name = "";
			this.Br = []
		},
		m : function () {
			this.Br = []
		},
		YT : function (a) {
			this.Br.push(a)
		},
		lE : function (a) {
			return this.Br[a]
		}
	});
R.zO = R.r.extend({
		Cw : p,
		ctor : function () {
			this.Cw = p
		},
		m : function () {
			var a = R.r.prototype.m.call(this);
			this.Ye(R.Ad.d().Tc(R.jw));
			return a
		},
		I : function (a, c, d) {
			R.r.prototype.I.call(this, a, c, d);
			a instanceof R.Pn && a.Ec(this)
		},
		Y : function () {
			this.Ua && (this.tn(), this.se && this.se.tg() && this.se.xu(), this.transform(), this.Ee(), this.fa(), this.Pg = 0, this.se && this.se.tg() && this.se.uu(this), this.sn())
		},
		fa : function () {
			R.Ip(this);
			for (var a = p, c = 0; c < this.k.length; c++)
				a = this.k[c], a.Y(), a instanceof R.Pn && (this.Cw = a.S);
			this.Cw &&
			(this.Cw.aM(), this.Cw.sN())
		}
	});
R.zO.create = function () {
	var a = new R.zO;
	return a && a.m() ? a : p
};
R.jA = R.D.extend({
		Im : p,
		Yj : p,
		Zw : p,
		ctor : function () {
			this.Zw = this.Yj = this.Im = p
		},
		m : M(m),
		HF : z("Im"),
		kpa : C("Im"),
		Mda : z("Yj"),
		Joa : C("Yj"),
		yz : z("Zw"),
		hp : C("Zw"),
		dm : function () {
			$(this.Im);
			this.Im = p;
			$(this.Zw);
			this.Zw = p;
			$(this.Yj);
			this.Yj = p
		}
	});
R.jA.create = function () {
	var a = new R.jA;
	return a && a.m() ? a : p
};
R.cf = R.cf || {};
R.cf.LD = function (a, c, d) {
	switch (d.wd) {
	case CC_DISPLAY_SPRITE:
		this.v7(a, c, d);
		break;
	case CC_DISPLAY_PARTICLE:
		this.s7(c, d);
		break;
	case CC_DISPLAY_ARMATURE:
		this.h7(a, c, d)
	}
};
R.cf.j8 = function (a, c) {
	switch (c.hp().wd) {
	case CC_DISPLAY_SPRITE:
		this.AU(a, c);
		break;
	case CC_DISPLAY_PARTICLE:
		this.zU(c);
		break;
	case CC_DISPLAY_ARMATURE:
		this.xU(a, c)
	}
};
R.cf.jga = function (a, c, d, e) {
	if (c) {
		if (R.kA && e) {
			var f = c.Yj;
			if (f && f.Hb) {
				var g = c.Im,
				k = g.Ve(),
				g = g.Nu(),
				g = R.Lp(g, k);
				k.V = g.x;
				k.W = g.y;
				k = R.Cf(k, a.nd.Ve());
				f.Vf(k)
			}
		}
		f = c.Im;
		switch (c.hp().wd) {
		case CC_DISPLAY_SPRITE:
			this.oga(a, f, e);
			break;
		case CC_DISPLAY_PARTICLE:
			this.mga(a, f, d);
			break;
		case CC_DISPLAY_ARMATURE:
			this.hga(f, d, e);
			break;
		default:
			f.tda(a.yk)
		}
	}
};
R.cf.v7 = function (a, c, d) {
	var e = new R.Ls;
	e.copy(d);
	c.yz(e);
	this.AU(a, c)
};
R.cf.AU = function (a, c) {
	var d = p,
	e = c.hp(),
	d = e.sf,
	f = d.lastIndexOf(".");
	-1 != f && (d = d.substring(0, f));
	d = "" == d ? R.$n.create() : R.$n.Iy(d + ".png");
	this.KV(a, c, e.sf, d);
	d.xX(a);
	(f = a.nd) && (f.Mr().Eu >= R.Sn ? d.TF(e.Qk) : d.TF(a.Ou()));
	c.HF(d)
};
R.cf.KV = function (a, c, d, e) {
	var f = d.lastIndexOf(".");
	-1 != f && (d = d.substring(0, f));
	(d = R.Ti.d().f$(d)) && e.R(R.b(d.pF, d.qF));
	R.kA && (d && 0 < d.Br.length) && (a = R.MG.create(a), a.i7(d.Br), c.Mda(a))
};
R.cf.oga = function (a, c, d) {
	d && (c.RY(a.vB), c.iga())
};
R.cf.h7 = function (a, c, d) {
	var e = new R.Yz;
	e.copy(d);
	c.yz(e);
	this.xU(a, c)
};
R.cf.xU = function (a, c) {
	var d = R.Pn.create(c.hp().sf, a);
	d.sv(a.getName() + "_armatureChild");
	c.HF(d)
};
R.cf.hga = function (a, c, d) {
	d && a && (a.Ee(), a.update(c))
};
R.cf.s7 = function (a, c) {
	var d = new R.sH;
	d.copy(c);
	a.yz(d);
	this.zU(a)
};
R.cf.zU = function (a) {
	var c = R.kb.create(a.hp().hv);
	a.HF(c)
};
R.cf.mga = function (a, c, d) {
	var e = new R.Rn;
	R.lh.AW(a.yk, e);
	c.q(R.b(e.x, e.y));
	c.fh(e.Lc);
	c.yg(e.Mc);
	c.update(d)
};
R.QG = R.D.extend({
		ci : p,
		po : p,
		fd : p,
		ql : -1,
		cC : q,
		ic : p,
		Ua : m,
		ctor : function () {
			this.ci = [];
			this.fd = this.po = p;
			this.ql = -1;
			this.cC = q;
			this.ic = p;
			this.Ua = m
		},
		m : function (a) {
			this.ic = a;
			this.JV(a.Ou());
			return m
		},
		LD : function (a, c) {
			var d = p;
			0 <= c && c < this.ci.length ? d = this.ci[c] : (d = R.jA.create(), this.ci.push(d));
			a instanceof R.Fp ? R.cf.LD(this.ic, d, a) : this.P2(d, a);
			c == this.ql && (this.ql = -1, this.zr(c, q))
		},
		P2 : function (a, c) {
			var d = p;
			if (c instanceof R.$n) {
				c.xX(this.ic);
				d = new R.Ls;
				R.cf.KV(this.ic, a, c.$w, c);
				var e = a.hp();
				e instanceof R.Ls ?
				c.TF(e.Qk) : c.TF(new R.Rn)
			} else
				c instanceof R.kb ? d = new R.sH : c instanceof R.Pn ? (d = new R.Yz, c.NF(this.ic)) : d = new R.Fp;
			a.HF(c);
			a.yz(d)
		},
		cza : function (a) {
			this.ci[a] = p;
			a == this.ql && this.FF(p)
		},
		$oa : C("ci"),
		zr : function (a, c) {
			if (a >= this.ci.length)
				R.log("the index value is out of range");
			else if (this.cC = c, 0 > a)
				this.ql = a, this.fd && (this.fd.qp(m), this.FF(p), this.fd = p);
			else if (this.ql != a) {
				this.ql = a;
				var d = this.ci[this.ql];
				d && this.FF(d)
			}
		},
		FF : function (a) {
			var c = this.po;
			R.kA && c && c.Yj && c.Yj.setActive(q);
			c = this.po = a;
			R.kA &&
			c && c.Yj && c.Yj.setActive(m);
			a = c == p ? p : c.Im;
			this.fd && (this.fd instanceof R.Pn && this.ic.BX(p), this.fd.qp(m), this.fd.dm(), this.fd = p);
			(this.fd = a) && (a instanceof R.Pn ? this.ic.BX(a) : a instanceof R.kb && a.nX())
		},
		mE : C("fd"),
		Qoa : C("ql"),
		Poa : C("po"),
		Zoa : function (a) {
			return this.ci[a]
		},
		JV : function (a) {
			this.ci = [];
			if (a) {
				a = a.aE;
				for (var c = 0; c < a.length; c++) {
					var d = a[c],
					e = R.jA.create();
					e.yz(d);
					R.cf.j8(this.ic, e);
					this.ci.push(e)
				}
			}
		},
		sU : function (a) {
			if (!this.Ua || 0 > this.ql)
				return q;
			var c = q;
			switch (this.po.hp().wd) {
			case CC_DISPLAY_SPRITE:
				var c =
					R.b(0, 0),
				d = this.po.Im,
				d = d.Ej(0),
				c = R.S1(d, a, c)
			}
			return c
		},
		sU : function (a, c) {
			var d = R.b(a, c);
			return this.sU(d)
		},
		Aa : function (a) {
			this.fd && (this.Ua = a, this.fd.Aa(a))
		},
		baa : C("Ua"),
		n : function () {
			return !this.fd ? R.size(0, 0) : this.fd.n()
		},
		bd : function () {
			return !this.fd ? R.rect(0, 0, 0, 0) : this.fd.bd()
		},
		mn : function () {
			return !this.fd ? R.b(0, 0) : this.fd.mn()
		},
		Nu : function () {
			return !this.fd ? R.b(0, 0) : this.fd.Nu()
		},
		Ppa : C("cC"),
		dm : function () {
			this.ci = [];
			this.fd && (this.fd.qp(m), this.fd = p)
		}
	});
R.QG.create = function (a) {
	var c = new R.QG;
	return c && c.m(a) ? c : p
};
R.$n = R.t.extend({
		RK : p,
		ic : p,
		SK : p,
		$w : "",
		ctor : function () {
			R.t.prototype.ctor.call(this);
			this.ic = this.RK = p;
			this.$w = "";
			this.SK = {
				g : 1,
				c : 0,
				C : 0,
				F : 1,
				V : 0,
				W : 0
			}
		},
		Yy : function (a) {
			var c = R.t.prototype.Yy.call(this, a),
			d = R.Op.d().DV(this.G);
			this.In(d);
			this.$w = a;
			return c
		},
		wf : function (a) {
			var c = R.t.prototype.wf.call(this, a),
			d = R.Op.d().DV(this.G);
			this.In(d);
			this.$w = a;
			return c
		},
		TF : function (a) {
			this.RK = a;
			this.fh(a.Lc);
			this.yg(a.Mc);
			this.he(R.Xn(a.ac));
			this.q(a.x, a.y);
			this.SK = this.Ve()
		},
		zsa : C("RK"),
		xX : z("ic"),
		mV : C("ic"),
		iga : function () {
			this.$c =
				R.Cf(this.SK, this.ic.yk)
		},
		bd : function () {
			var a = R.rect(0, 0, this.ea.width, this.ea.height),
			c = this.Ve();
			return R.Yi(a, c)
		},
		mpa : C("$w"),
		zn : function () {
			return R.Cf(this.$c, this.ic.nd.zn())
		},
		rxa : function () {
			var a = this.$c,
			c = this.Gb,
			c = R.Lp(c, a);
			a.V = c.x;
			a.W = c.y;
			return R.Cf(a, this.ic.nd.zn())
		},
		RY : function (a) {
			var c = new R.Pj(R.Ac, R.zc);
			switch (a) {
			case R.Qj.ew:
				c.src = R.Ac;
				c.da = R.zc;
				break;
			case R.Qj.vO:
				c.src = 770;
				c.da = 1;
				break;
			case R.Qj.IP:
				c.src = 771;
				c.da = 775;
				break;
			case R.Qj.wQ:
				c.src = 1,
				c.da = 775
			}
			this.Qd(c.src, c.da)
		},
		Sz : x()
	});
R.$n.create = function (a, c) {
	var d = arguments.length,
	e = new R.$n;
	if (0 === d) {
		if (e.m())
			return e
	} else if (e && e.wf(a, c))
		return e;
	return p
};
R.$n.Iy = function (a) {
	var c = new R.$n;
	return c && c.Yy(a) ? c : p
};
CC_ANIMATION_TYPE_SINGLE_FRAME = -4;
CC_ANIMATION_TYPE_NO_LOOP = -3;
CC_ANIMATION_TYPE_TO_LOOP_FRONT = -2;
CC_ANIMATION_TYPE_TO_LOOP_BACK = -1;
CC_ANIMATION_TYPE_LOOP_FRONT = 0;
CC_ANIMATION_TYPE_LOOP_BACK = 1;
CC_ANIMATION_TYPE_MAX = 2;
R.cl = R.D.extend({
		Gl : 1,
		vl : m,
		Jt : m,
		vq : q,
		ol : 0,
		Hl : 0,
		ni : 0,
		oy : 0,
		ll : p,
		Xd : 0,
		ei : 0,
		Og : 0,
		NB : p,
		C4 : q,
		ctor : function () {
			this.Gl = 1;
			this.Jt = this.vl = m;
			this.vq = q;
			this.Hl = this.ei = this.ol = this.Xd = 0;
			this.ni = CC_ANIMATION_TYPE_LOOP_BACK;
			this.oy = R.Ma.Zk;
			this.ll = R.o.d().oh;
			this.ei = this.NB = 0;
			this.C4 = q
		},
		pause : function () {
			this.Jt = m;
			this.vq = q
		},
		lv : function () {
			this.Jt = q;
			this.vq = m
		},
		stop : function () {
			this.vl = m;
			this.vq = q;
			this.ol = this.Xd = 0
		},
		play : function (a, c, d, e, f) {
			this.Jt = this.vl = q;
			this.vq = m;
			this.Xd = 0;
			this.Og = c;
			this.oy = f
		},
		update : function (a) {
			if (this.vl ||
				this.Jt || 0 >= this.Hl || 1 < a)
				return q;
			var c = this.Og;
			0 >= c ? (this.ol = 1, this.Xd = 0) : (this.Xd += this.Gl * (a / this.ll), this.ol = this.Xd / c, this.Xd = R.ep(this.Xd, c));
			this.oO();
			return m
		},
		oO : x(),
		Xta : function (a) {
			this.NB = a;
			this.pause()
		},
		Roa : function () {
			return this.NB = this.Hl * this.ol
		},
		Tua : C("Jt"),
		zua : C("vl"),
		Uoa : C("ol"),
		Ura : C("Hl"),
		Bqa : C("ni"),
		wta : C("oy"),
		Qna : C("ll"),
		wz : z("ll"),
		Ira : C("Gl"),
		OF : z("Gl"),
		Uua : C("vq")
	});
CC_MovementEventType_START = 0;
CC_MovementEventType_COMPLETE = 1;
CC_MovementEventType_LOOP_COMPLETE = 2;
R.xO = R.D.extend({
		MR : p,
		Xj : p,
		Wg : p,
		ctor : function (a, c, d) {
			this.If = d;
			this.Xj = c;
			this.Wg = a
		},
		call : function () {
			this.Xj && this.Xj.apply(this.Wg, this.MR)
		},
		vX : z("MR")
	});
R.qG = R.cl.extend({
		Zp : p,
		St : p,
		nd : p,
		Dq : "",
		p5 : 0,
		Pl : 0,
		yi : p,
		kx : p,
		Dx : p,
		Po : 1,
		ctor : function () {
			R.cl.prototype.ctor.call(this);
			this.St = this.Zp = p;
			this.Dq = "";
			this.nd = p;
			this.Pl = this.p5 = 0;
			this.yi = [];
			this.Dx = this.kx = p;
			this.Po = 1
		},
		m : function (a) {
			this.nd = a;
			this.yi = [];
			return m
		},
		pause : function () {
			for (var a = 0; a < this.yi.length; a++)
				this.yi[a].pause();
			R.cl.prototype.pause.call(this)
		},
		lv : function () {
			for (var a = 0; a < this.yi.length; a++)
				this.yi[a].lv();
			R.cl.prototype.lv.call(this)
		},
		stop : function () {
			for (var a = 0; a < this.yi.length; a++)
				this.yi[a].stop();
			this.yi = [];
			R.cl.prototype.stop.call(this)
		},
		ffa : function (a) {
			if (a != this.Po) {
				this.Po = a;
				this.Gl = !this.St ? this.Po : this.Po * this.St.scale;
				a = this.nd.cj;
				for (var c in a) {
					var d = a[c];
					d.dn.OF(this.Gl);
					d.$h && d.$h.Dj().OF(this.Gl)
				}
			}
		},
		Esa : C("Po"),
		Vna : C("Po"),
		Gza : function (a) {
			return this.ffa(a)
		},
		wz : function (a) {
			if (a != this.ll) {
				this.ll = a;
				a = this.nd.cj;
				for (var c in a) {
					var d = a[c];
					d.dn.wz(this.ll);
					d.$h && d.$h.Dj().wz(this.ll)
				}
			}
		},
		play : function (a, c, d, e, f) {
			if (this.Zp == p)
				R.log("this._animationData can not be null");
			else if (this.St =
					this.Zp.yV(a), this.St == p)
				R.log("this._movementData can not be null");
			else {
				"undefined" == typeof c && (c = -1);
				"undefined" == typeof d && (d = -1);
				"undefined" == typeof e && (e = -1);
				"undefined" == typeof f && (f = R.Ma.Ns);
				var g = this.St;
				this.Hl = g.duration;
				this.Dq = a;
				this.Gl = this.Po * g.scale;
				c = -1 == c ? g.dE : c;
				d = -1 == d ? g.eE : d;
				d = 0 == d ? g.duration : d;
				f = f == R.Ma.Ns ? g.Nj : f;
				e = 0 > e ? g.loop : e;
				R.cl.prototype.play.call(this, a, c, d, e, f);
				0 == this.Hl ? this.ni = CC_ANIMATION_TYPE_SINGLE_FRAME : (e ? this.ni = CC_ANIMATION_TYPE_TO_LOOP_FRONT : (this.ni = CC_ANIMATION_TYPE_NO_LOOP,
								this.Hl--), this.ei = d);
				this.yi = [];
				var k = this.nd.cj,
				l;
				for (l in k) {
					var n = k[l];
					a = g.iM(n.getName());
					var r = n.dn;
					a && 0 < a.Cj.length ? (this.yi.push(r), a.duration = g.duration, r.play(a, c, d, e, f), r.OF(this.Gl), r.wz(this.ll), n.$h && (n.$h.Dj().OF(this.Gl), n.$h.Dj().wz(this.ll))) : n.nC || (n.re.zr(-1, q), r.stop())
				}
			}
		},
		qya : function (a, c, d, e, f) {
			"undefined" == typeof c && (c = -1);
			"undefined" == typeof d && (d = -1);
			"undefined" == typeof e && (e = -1);
			"undefined" == typeof f && (f = 1E4);
			var g = this.Zp.fF;
			-1 > a || a >= g.length || this.play(g[a], c, d, e, f)
		},
		zV : function () {
			return this.Zp.zV()
		},
		update : function (a) {
			if (R.cl.prototype.update.call(this, a))
				for (var c = 0; c < this.yi.length; c++)
					this.yi[c].update(a)
		},
		oO : function () {
			var a = this.ol;
			if (1 <= a) {
				switch (this.ni) {
				case CC_ANIMATION_TYPE_NO_LOOP:
					if (this.ni = CC_ANIMATION_TYPE_MAX, this.Xd = (a - 1) * this.Og, a = this.Xd / this.ei, 1 > a) {
						this.Og = this.ei;
						this.XD([this.nd, CC_MovementEventType_START, this.Dq]);
						break
					}
				case CC_ANIMATION_TYPE_MAX:
				case CC_ANIMATION_TYPE_SINGLE_FRAME:
					a = 1;
					this.vl = m;
					this.vq = q;
					this.XD([this.nd, CC_MovementEventType_COMPLETE,
							this.Dq]);
					break;
				case CC_ANIMATION_TYPE_TO_LOOP_FRONT:
					this.ni = CC_ANIMATION_TYPE_LOOP_FRONT;
					a = R.ep(a, 1);
					this.Xd = 0 == this.Og ? 0 : R.ep(this.Xd, this.Og);
					this.Og = 0 < this.ei ? this.ei : 1;
					this.XD([this, CC_MovementEventType_START, this.Dq]);
					break;
				default:
					a = R.ep(a, 1),
					this.Xd = R.ep(this.Xd, this.Og),
					this.Pl = 0,
					this.XD([this.nd, CC_MovementEventType_LOOP_COMPLETE, this.Dq])
				}
				this.ol = a
			}
		},
		Toa : function () {
			return this.vl ? "" : this.Dq
		},
		QAa : function (a, c) {
			this.Dx = new R.xO(c, a)
		},
		XD : function (a) {
			this.Dx && (this.Dx.vX(a), this.Dx.call())
		},
		nAa : function (a, c) {
			this.kx = new R.xO(c, a)
		},
		S7 : function (a) {
			this.kx && (this.kx.vX(a), this.kx.call())
		},
		sX : z("Zp"),
		iV : C("Zp")
	});
R.qG.create = function (a) {
	var c = new R.qG;
	return c && c.m(a) ? c : p
};
R.gI = R.cl.extend({
		Sc : p,
		be : p,
		pc : p,
		wm : p,
		sh : p,
		ic : p,
		At : 0,
		$s : 0,
		pu : 0,
		Pl : 0,
		qq : 0,
		ed : p,
		ctor : function () {
			R.cl.prototype.ctor.call(this);
			this.sh = this.ic = this.wm = this.pc = this.be = this.Sc = p;
			this.At = R.Ma.Zk;
			this.qq = this.Pl = 0;
			this.ed = p
		},
		m : function (a) {
			this.pc = new R.xs;
			this.wm = new R.xs;
			this.ic = a;
			this.Sc = this.ic.Sc;
			this.Sc.Zg = -1;
			this.ed = this.ic.nd != p ? this.ic.nd.Dj() : p;
			return m
		},
		play : function (a, c, d, e, f) {
			R.cl.prototype.play.call(this, p, c, d, e, f);
			this.ni = e;
			this.qq = this.Pl = this.$s = this.pu = 0;
			f = a != this.sh;
			this.sh = a;
			this.Hl =
				this.sh.duration;
			a = this.sh.xV(0);
			this.Sc.Zg = a.Zg;
			this.ic.nd.Mr().Eu >= R.Sn && (R.lh.Naa(this.Sc, this.ic.Ou()), this.Sc.Lc += 1, this.Sc.Mc += 1);
			0 == this.Hl ? (this.ni = CC_ANIMATION_TYPE_SINGLE_FRAME, 0 == c ? this.rp(a, a) : this.rp(this.Sc, a), this.At = R.Ma.Zk) : 1 < this.sh.Cj.length && (this.ni = e ? CC_ANIMATION_TYPE_TO_LOOP_BACK : CC_ANIMATION_TYPE_NO_LOOP, this.ei = d * this.sh.scale, e && 0 != this.sh.jn ? this.rp(this.Sc, this.nO(this.SY(1 - this.sh.jn), this.wm)) : !f || 0 == c ? this.rp(a, a) : this.rp(this.Sc, a));
			this.nO(0)
		},
		oO : function () {
			var a =
				this.ol,
			c = this.ni;
			if (1 <= a)
				switch (c) {
				case CC_ANIMATION_TYPE_SINGLE_FRAME:
					a = 1;
					this.vl = m;
					break;
				case CC_ANIMATION_TYPE_NO_LOOP:
					c = CC_ANIMATION_TYPE_MAX;
					a = 0 >= this.ei ? 1 : (a - 1) * this.Og / this.ei;
					1 <= a ? (a = 1, this.vl = m) : (this.Og = this.ei, this.Xd = a * this.Og, this.qq = this.Pl = this.$s = this.pu = 0);
					break;
				case CC_ANIMATION_TYPE_TO_LOOP_BACK:
					c = CC_ANIMATION_TYPE_LOOP_BACK;
					this.Og = 0 < this.ei ? this.ei : 1;
					0 != this.sh.jn ? (this.Xd = (1 - this.sh.jn) * this.Og, a = this.Xd / this.Og) : this.Xd = a = 0;
					this.qq = this.Pl = this.$s = this.pu = 0;
					break;
				case CC_ANIMATION_TYPE_MAX:
					a =
						1;
					this.vl = m;
					break;
				default:
					a = R.ep(a, 1),
					this.Xd = R.ep(this.Xd, this.Og),
					this.qq = this.Pl = this.$s = this.pu = 0
				}
			1 > a && c < CC_ANIMATION_TYPE_TO_LOOP_BACK && (a = Math.sin(a * R.PI / 2));
			this.ol = a;
			this.ni = c;
			c > CC_ANIMATION_TYPE_TO_LOOP_BACK && (a = this.SY(a, m));
			this.At != R.Ma.Ns && this.nO(a)
		},
		rp : function (a, c) {
			0 > a.Zg && 0 <= c.Zg ? (this.pc.copy(c), this.wm.hO(c, c)) : 0 > c.Zg && 0 <= a.Zg ? (this.pc.copy(a), this.wm.hO(c, c)) : (this.pc.copy(a), this.wm.hO(a, c));
			this.G7(a)
		},
		G7 : function (a) {
			if (a) {
				var c = this.ic,
				d = a.Zg,
				e = c.re;
				e.cC || e.zr(d, q);
				this.Sc.Oj =
					a.Oj;
				c.rga();
				c.Bda(a.zu);
				(c = c.$h) && "" != a.bv && c.Dj().play(a.bv)
			}
		},
		nO : function (a, c) {
			c || (c = this.Sc);
			var d = this.pc,
			e = this.wm;
			c.x = d.x + a * e.x;
			c.y = d.y + a * e.y;
			c.Lc = d.Lc + a * e.Lc;
			c.Mc = d.Mc + a * e.Mc;
			c.ac = d.ac + a * e.ac;
			c.Vb = d.Vb + a * e.Vb;
			this.ic.wfa(m);
			c && e.Ik && this.Zfa(a, c);
			return c
		},
		Zfa : function (a, c) {
			var d = this.pc,
			e = this.wm;
			c.g = d.g + a * e.g;
			c.i = d.i + a * e.i;
			c.h = d.h + a * e.h;
			c.c = d.c + a * e.c;
			this.ic.Ln()
		},
		SY : function (a) {
			1 < a && 0 != this.sh.jn && (a = R.ep(a, 1));
			var c = this.Hl * a,
			d,
			e,
			f = this.pu,
			g = this.$s,
			k = this.Pl;
			if (c < f || c >= f + g) {
				var g = this.sh.Cj.length,
				l = this.sh.Cj;
				if (c < l[0].Hh)
					return d = e = l[0], this.rp(d, e), a;
				if (c >= l[g - 1].Hh)
					return d = e = l[g - 1], this.rp(d, e), a;
				do
					if (d = l[this.qq], f = d.Hh, ++k >= g && (k = 0), this.qq = k, e = l[k], d.event && this.ed.S7([this.ic, d.event, d.Hh, c]), c == d.Hh)
						break;
				while (c < d.Hh || c >= e.Hh);
				g = e.Hh - d.Hh;
				this.At = d.Nj;
				this.rp(d, e);
				this.pu = f;
				this.$s = g;
				this.Pl = k
			}
			a = 0 == g ? 0 : (c - f) / g;
			c = p;
			d = R.Ma.Ns;
			this.At != d && (c = this.oy == d ? this.At : this.oy, c != d && c != R.Ma.Zk && (a = R.Fb.$fa(a, c)));
			return a
		},
		CF : z("ed"),
		Dj : C("ed"),
		dm : function () {
			this.wm = this.pc = p
		}
	});
R.gI.create = function (a) {
	var c = new R.gI;
	return c && c.m(a) ? c : p
};
R.x_ = R.D.extend({
		Vx : p,
		YI : p,
		ctor : z("YI"),
		lE : C("YI"),
		Zza : z("YI"),
		usa : C("Vx"),
		dfa : z("Vx")
	});
R.MG = R.D.extend({
		ph : p,
		ic : p,
		Hb : p,
		bj : q,
		ctor : function () {
			this.ph = []
		},
		m : function (a) {
			this.ph = [];
			a && (this.ic = a);
			return m
		},
		YT : function (a) {
			a = new R.x_(a);
			this.ph.push(a)
		},
		i7 : function (a) {
			for (var c = 0; c < a.length; c++)
				this.YT(a[c])
		},
		bza : function (a) {
			for (var c = this.ph, d = 0; d < c.length; d++)
				if (c[d].lE() == a) {
					c.splice(d, 1);
					break
				}
		},
		vF : function () {
			this.ph = []
		},
		Tza : x(),
		setActive : function (a) {
			if (this.bj != a) {
				this.bj = a;
				a = this.Hb;
				var c;
				if (a)
					if (c = p, this.bj)
						for (var d = 0; d < this.ph.length; d++)
							c = this.ph[d], c = c.Vx, a.Hz.t7(c);
					else
						for (d =
								0; d < this.ph.length; d++)
							c = this.ph[d], c = c.Vx, a.Hz.eza(c)
			}
		},
		Kna : C("bj"),
		Ioa : C("ph"),
		x$ : R.b(0, 0),
		Vf : function (a) {
			if (this.bj)
				for (var c = p, d = this.Hb, e = this.x$, f = 0; f < this.ph.length; f++) {
					var c = this.ph[f],
					g = c.lE(),
					k = p;
					if (d) {
						k = c.Vx;
						d.b.x = a.V;
						d.b.y = a.W;
						d.b.g = a.g;
						c = g.ls;
						for (f = 0; f < c.length; f++)
							e.x = c[f].x, e.y = c[f].y, e = R.Lp(e, a), k && (g = new cp.jka(0, 0), g.x = e.x, g.y = e.y, k.lG[2 * f] = e.x - a.V, k.lG[2 * f + 1] = e.y - a.W)
					}
				}
		},
		lV : C("Hb"),
		GN : function (a) {
			this.Hb = a;
			for (var c = 0; c < this.ph.length; c++) {
				a = this.ph[c];
				for (var d = [], e = a.lE().ls,
					c = 0; c < e.length; c++) {
					var f = e[c];
					d.push(f.x);
					d.push(f.y)
				}
				d = new cp.n1(this.Hb, d, cp.$Ca);
				d.zza = m;
				d.data = this.ic;
				this.Hb.Hz.t7(d);
				a.dfa(d)
			}
		}
	});
R.MG.create = function (a) {
	var c = new R.MG;
	return c && c.m(a) ? c : p
};
R.Pn = R.Wa.extend({
		ed : p,
		io : p,
		la : p,
		qc : "",
		S : p,
		Rg : p,
		cj : p,
		ou : p,
		a3 : p,
		Al : p,
		oL : 0,
		Us : q,
		Hb : p,
		ctor : function () {
			R.Wa.prototype.ctor.call(this);
			this.la = this.io = this.ed = p;
			this.qc = "";
			this.cj = this.Rg = this.S = p;
			this.ou = [];
			this.a3 = {};
			this.Al = R.b(0, 0);
			this.oL = 0;
			this.Us = q;
			this.Hb = p
		},
		m : function (a, c) {
			R.Wa.prototype.m.call(this);
			c && (this.Rg = c);
			this.wg();
			this.ed = new R.qG;
			this.ed.m(this);
			this.cj = {};
			this.h3 = [];
			this.qc = !a ? "" : a;
			var d = R.Ti.d();
			if ("" != a) {
				var e = d.iV(a);
				if (!e)
					return R.log("AnimationData not exist! "), q;
				this.ed.sX(e);
				this.io = d = d.Mr(a);
				var d = d.Fy,
				f;
				for (f in d) {
					var d = this.yU(String(f)),
					g = e.yV(e.fF[0]);
					if (g && (g = g.iM(d.getName())) && !(0 >= g.Cj.length))
						if (g = g.xV(0))
							d.Sc.copy(g), d.zr(g.Zg, q)
				}
				this.update(0);
				this.lga()
			} else
				this.qc = "new_armature", this.io = new R.rG, this.io.name = this.qc, e = new R.oG, e.name = this.qc, d.BL(this.qc, this.io), d.AL(this.qc, e), this.ed.sX(e);
			R.T === R.Ya && this.Ye(R.Ad.d().Tc(R.jw));
			this.gG();
			this.AF();
			this.Gn(m);
			this.Fn(m);
			return m
		},
		yU : function (a) {
			var c = this.mV(a);
			if (c)
				return c;
			var c = this.io.Ou(a),
			d = c.oz,
			e = p;
			"" != d ? (this.yU(d), e = R.ps.create(a), this.VT(e, d)) : (e = R.ps.create(a), this.VT(e, ""));
			e.Cda(c);
			e.re.zr(-1, q);
			return e
		},
		VT : function (a, c) {
			if (a)
				if (this.cj[a.getName()])
					R.log("bone already added. It can't be added again");
				else {
					if (c) {
						var d = this.cj[c];
						d ? d.KD(a) : this.Rg ? this.Rg.KD(a) : this.ou.push(a)
					} else
						this.Rg ? this.Rg.KD(a) : this.ou.push(a);
					a.wX(this);
					this.cj[a.getName()] = a;
					this.I(a)
				}
			else
				R.log("Argument must be non-nil")
		},
		Zya : function (a, c) {
			a ? (a.wX(p), a.qp(c), R.ke(this.h3, a), delete this.cj[a.getName()],
				this.removeChild(a, m)) : R.log("bone must be added to the bone dictionary!")
		},
		mV : function (a) {
			return this.cj[a]
		},
		lma : function (a, c) {
			if (a) {
				var d = a.Rg;
				d && (R.ke(d.ai, a), a.NF(p));
				c && ((d = this.cj[c]) ? (d.KD(a), R.ke(this.ou, a)) : this.ou.push(a))
			} else
				R.log("bone must be added to the bone dictionary!")
		},
		foa : C("cj"),
		lga : function () {
			var a = this.R7();
			this.ma(a.size);
			var c = this.Al;
			c.x = -a.x;
			c.y = -a.y;
			0 != a.width && 0 != a.height && this.R(R.b(c.x / a.width, c.y / a.height))
		},
		update : function (a) {
			this.ed.update(a);
			for (var c = this.ou,
				d = 0; d < c.length; d++)
				c[d].update(a);
			this.Us = q
		},
		Ve : function () {
			return R.ua.tc ? this.Paa() : this.Oaa()
		},
		Paa : function () {
			if (this.Bh) {
				this.Us = m;
				var a = this.Z.x,
				c = this.Z.y,
				d = this.Gb.x,
				e = -d,
				f = this.Gb.y,
				g = -f,
				k = this.ia,
				l = this.ra;
				this.ij && (a += d, c += f);
				var n = 1,
				r = 0,
				s = 1,
				t = 0;
				if (0 !== this.Ug || 0 !== this.sj)
					n = Math.cos(-this.si), r = Math.sin(-this.si), s = Math.cos(-this.Sq), t = Math.sin(-this.Sq);
				var a = a + (s * this.Al.x * this.ia + -r * this.Al.y * this.ra),
				c = c + (t * this.Al.x * this.ia + n * this.Al.y * this.ra),
				v = this.Fd || this.Gd;
				if (!v && (0 !== d || 0 !==
						f))
					a += s * e * k + -r * g * l, c += t * e * k + n * g * l;
				a = {
					g : s * k,
					c : t * k,
					C : -r * l,
					F : n * l,
					V : a,
					W : c
				};
				if (v && (a = R.Cf({
								g : 1,
								c : Math.tan(R.Ud(this.Gd)),
								C : Math.tan(R.Ud(this.Fd)),
								F : 1,
								V : 0,
								W : 0
							}, a), 0 !== d || 0 !== f))
					a = R.Wz(a, e, g);
				this.tm && (a = R.Cf(a, this.Rs), this.tm = q);
				this.$c = a;
				this.Bh = q
			}
			return this.$c
		},
		Oaa : function () {
			this.$c || (this.$c = {
					g : 1,
					c : 0,
					C : 0,
					F : 1,
					V : 0,
					W : 0
				});
			if (this.Bh) {
				this.Us = m;
				var a = this.$c;
				a.V = this.Z.x;
				a.W = this.Z.y;
				var c = 1,
				d = 0;
				this.Ug && (c = Math.cos(this.si), d = Math.sin(this.si));
				a.g = a.F = c;
				a.C = -d;
				a.c = d;
				var e = this.ia,
				f = this.ra,
				g = this.Gb.x,
				k = this.Gb.y,
				l = 1E-6 > e && -1E-6 < e ? 1E-6 : e,
				n = 1E-6 > f && -1E-6 < f ? 1E-6 : f;
				a.V += c * this.Al.x * e + -d * this.Al.y * f;
				a.W += d * this.Al.x * e + c * this.Al.y * f;
				if (this.Fd || this.Gd) {
					var r = Math.tan(-this.Fd * Math.PI / 180),
					s = Math.tan(-this.Gd * Math.PI / 180),
					t = k * r * l,
					v = g * s * n;
					a.g = c + -d * s;
					a.C = c * r + -d;
					a.c = d + c * s;
					a.F = d * r + c;
					a.V += c * t + -d * v;
					a.W += d * t + c * v
				}
				if (1 !== e || 1 !== f)
					a.g *= l, a.c *= l, a.C *= n, a.F *= n;
				a.V += c * -g * l + -d * k * n;
				a.W -= d * -g * l + c * k * n;
				this.ij && (a.V += g, a.W += k);
				this.tm && (this.$c = R.Cf(this.$c, this.Rs), this.tm = q);
				a.V |= 0;
				a.W |= 0;
				this.Bh = q
			}
			return this.$c
		},
		fa : x(),
		RY : function (a) {
			var c = new R.Pj(R.Ac, R.zc);
			switch (a) {
			case R.Qj.ew:
				c.src = R.Ac;
				c.da = R.zc;
				break;
			case R.Qj.vO:
				c.src = 770;
				c.da = 1;
				break;
			case R.Qj.IP:
				c.src = 771;
				c.da = 775;
				break;
			case R.Qj.wQ:
				c.src = 1,
				c.da = 775
			}
			this.Qd(c.src, c.da)
		},
		R7 : function () {
			for (var a, c, d, e = 0, f = m, e = R.rect(0, 0, 0, 0), g = 0; g < this.k.length; g++)
				if (a = this.k[g], a instanceof R.ps) {
					var k = a.re.bd();
					f ? (a = R.Oi(k), c = R.Pi(k), d = R.Lj(k), e = R.Mj(k), f = q) : (a = R.Oi(k) < R.Oi(e) ? R.Oi(k) : R.Oi(e), c = R.Pi(k) < R.Pi(e) ? R.Pi(k) : R.Pi(e), d = R.Lj(k) > R.Lj(e) ? R.Lj(k) : R.Lj(e),
						e = R.Mj(k) > R.Mj(e) ? R.Mj(k) : R.Mj(e));
					e = R.rect(a, c, d - a, e - c)
				}
			return e
		},
		Dj : C("ed"),
		CF : z("ed"),
		Mr : C("io"),
		Hza : z("io"),
		getName : C("qc"),
		sv : z("qc"),
		kV : C("la"),
		Ec : z("la"),
		Eta : C("oL"),
		setVersion : z("oL"),
		Yna : C("Us"),
		lV : C("Hb"),
		GN : function (a) {
			if (this.Hb != a) {
				this.Hb = a;
				this.Hb.data = this;
				var c,
				d;
				for (a = 0; a < this.k.length; a++)
					if (c = this.k[a], c instanceof R.ps) {
						c = c.re.ci;
						for (var e = 0; e < c.length; e++)
							d = c[e], (d = d.Yj) && d.GN(this.Hb)
					}
			}
		},
		vsa : function () {
			return this.Hb ? this.Hb.lCa : []
		}
	});
R.Pn.create = function (a, c) {
	var d = new R.Pn;
	return d && d.m(a, c) ? d : p
};
R.ps = R.Wa.extend({
		ko : p,
		nd : p,
		$h : p,
		re : p,
		nC : q,
		dn : p,
		Sc : p,
		qc : "",
		ai : p,
		Rg : p,
		xm : q,
		yk : p,
		vB : 0,
		ctor : function () {
			R.Wa.prototype.ctor.call(this);
			this.re = this.$h = this.nd = this.ko = p;
			this.nC = q;
			this.Sc = this.dn = p;
			this.qc = "";
			this.ai = [];
			this.Rg = p;
			this.xm = m;
			this.yk = R.Vz(1, 0, 0, 1, 0, 0);
			this.vB = R.Qj.ew
		},
		dm : function () {
			$(this.Sc);
			for (var a = 0; a < this.ai.length; a++)
				$(this.ai[a]);
			this.ai = [];
			$(this.dn);
			$(this.re);
			$(this.ko);
			$(this.$h)
		},
		m : function (a) {
			R.Wa.prototype.m.call(this);
			a && (this.qc = a);
			this.Sc = new R.xs;
			this.dn = new R.gI;
			this.dn.m(this);
			this.re = new R.QG;
			this.re.m(this);
			return m
		},
		Cda : function (a) {
			a ? (this.ko = a, this.qc = this.ko.name, this.Ra = this.ko.Oj, this.re.JV(a)) : R.log("boneData must not be null")
		},
		Ou : C("ko"),
		wX : function (a) {
			(this.nd = a) && this.dn.CF(this.nd.Dj())
		},
		Wna : C("nd"),
		update : function (a) {
			var c = this.Rg,
			d = this.nd,
			e = this.Sc,
			f = this.yk;
			c && (this.xm = this.xm || c.xm);
			this.xm && (d.Mr().Eu >= R.Sn && (R.lh.Maa(e, this.ko), e.Lc -= 1, e.Mc -= 1), R.lh.$M(e, f), this.yk = R.Cf(this.Ve(), f), c && (this.yk = R.Cf(this.yk, c.yk)));
			R.cf.jga(this, this.re.po, a, this.xm ||
				d.Us);
			c = this.ai;
			for (d = 0; d < c.length; d++)
				c[d].update(a);
			this.xm = q
		},
		Y : function (a) {
			var c = this.re.mE();
			c && c.Y(a)
		},
		Af : function (a) {
			this.Qc = R.ce(255, 255, 255);
			R.Wa.prototype.Af.call(this, a);
			this.Ln()
		},
		Bf : function (a) {
			this.nf = 255;
			R.Wa.prototype.Bf.call(this, a);
			this.Ln()
		},
		Ln : function () {
			var a = this.re.mE();
			a && a instanceof R.$n && (R.ua.tc ? a.U(this.bb * this.Sc.g / 255) : R.Wa.prototype.U.call(a, this.bb * this.Sc.g / 255))
		},
		rga : function () {
			this.nd.Mr().Eu >= R.Sn ? this.XF(this.Sc.Oj + this.ko.Oj) : this.XF(this.Sc.Oj)
		},
		KD : function (a) {
			a ?
			a.Rg ? R.log("child already added. It can't be added again") : 0 > R.Hv(this.ai, a) && (this.ai.push(a), a.NF(this)) : R.log("Argument must be non-nil")
		},
		iX : function (a, c) {
			for (var d = 0; d < this.ai.length; d++)
				if (this.ai[d] == a) {
					if (c)
						for (var e = a.ai, f = 0; f < e.length; f++)
							a.iX(e[f], c);
					a.NF(p);
					a.re.FF(p);
					R.ke(this.ai, a)
				}
		},
		qp : function (a) {
			this.Rg && this.Rg.iX(this, a)
		},
		NF : z("Rg"),
		ura : C("Rg"),
		BX : function (a) {
			this.$h != a && (this.$h = a)
		},
		zoa : C("$h"),
		Boa : C("ai"),
		uta : C("dn"),
		XF : function (a) {
			this.Ra != a && R.r.prototype.XF.call(this, a)
		},
		wfa : z("xm"),
		kva : C("xm"),
		qxa : C("yk"),
		zn : function () {
			return R.Cf(this.yk, this.nd.zn())
		},
		mE : function () {
			return this.re.mE()
		},
		LD : function (a, c) {
			return this.re.LD(a, c || 0)
		},
		u7 : function (a, c) {
			return this.re.u7(a, c || 0)
		},
		zr : function (a, c) {
			this.re.zr(a, c)
		},
		gAa : z("re"),
		lpa : C("re"),
		uAa : z("nC"),
		dqa : C("nC"),
		vta : C("Sc"),
		sv : z("qc"),
		getName : C("qc"),
		Bda : z("vB"),
		doa : C("vB")
	});
R.ps.create = function (a) {
	var c = new R.ps;
	return c && c.m(a) ? c : p
};
var vb = [{
		src : "girl1.jpg"
	}
];
var wb = R.ne.extend({
		Nua : q,
		tM : p,
		Kh : p,
		is : [],
		gF : 3,
		hF : 4,
		yr : 1,
		wr : 1,
		fp : 1,
		m : function () {
			this._super();
			var a = R.o.d().oM();
			this.tM = R.ka.create("Hello World", "Impact", 38);
			this.tM.q(R.b(a.width / 2, a.height - 70));
			this.I(this.tM, 5);
			this.AF();
			this.xf(m);
			var a = R.t.create("girl1.jpg"),
			c = a.bd().Su(),
			a = a.bd().Pu();
			this.yr = Math.ceil(c / this.gF);
			this.wr = Math.ceil(a / this.hF);
			for (c = 0; c < this.hF; c++)
				for (var d = 0; d < this.gF; d++)
					if (0 != c || d != this.gF - 1)
						a = R.oe.create("girl1.jpg", R.rect(d * this.yr, (this.hF - c - 1) * this.wr, this.yr, this.wr)),
						a = R.t.Cr(a), a.R(R.b(0, 0)), a.q(d * (this.yr + this.fp), c * (this.wr + this.fp)), a.setUserData({
							x : d,
							y : c
						}), this.I(a, 0), this.is.push(a);
			for (c = 0; 300 > c; c++) {
				var a = this.is[Math.floor(this.is.length * Math.random())],
				d = a.getUserData(),
				e = this.fZ(d.x, d.y);
				e != p && (d.x = e.x, d.y = e.y, a.q(d.x * (this.yr + this.fp), d.y * (this.wr + this.fp)))
			}
		},
		mz : function (a) {
			if (a[0] && this.Kh == p) {
				var c = a[0].Ic;
				R.log("begin" + c.x + ":" + c.y);
				a = Math.floor(c.x / (this.yr + this.fp));
				for (var d = Math.floor(c.y / (this.wr + this.fp)), e = 0; e < this.is.length; e++) {
					var f = this.is[e],
					c = f.getUserData();
					if (c.x == a && c.y == d) {
						this.Kh = f;
						break
					}
				}
				this.Kh && (a = this.fZ(a, d), a != p ? (c = this.Kh.getUserData(), c.x = a.x, c.y = a.y) : this.Kh = p)
			}
		},
		update : function () {
			if (this.Kh != p) {
				var a = this.Kh.getUserData(),
				c = a.x * (this.yr + this.fp),
				a = a.y * (this.wr + this.fp),
				d = this.Kh.Gj(),
				e = this.Kh.Hj();
				this.Kh.Bz(d + 0.3 * (c - d));
				this.Kh.Cz(e + 0.3 * (a - e));
				1 > Math.abs(d - c) && 1 > Math.abs(e - a) && (this.Kh.Bz(c), this.Kh.Cz(a), this.Kh = p)
			}
		},
		fZ : function (a, c) {
			for (var d = [[0, 1], [0, -1], [1, 0], [-1, 0]], e = 0; e < d.length; e++) {
				var f = a + d[e][0],
				g = c + d[e][1];
				if (0 <= f && 0 <= g && f < this.gF && g < this.hF) {
					for (var k = q, l = 0; l < this.is.length; l++) {
						var n = this.is[l].getUserData();
						if (n.x == f && n.y == g) {
							k = m;
							break
						}
					}
					if (!k)
						return {
							x : f,
							y : g
						}
				}
			}
			return p
		}
	}), xb = R.fl.extend({
		sa : function () {
			this._super();
			var a = new wb;
			this.I(a);
			a.m()
		}
	});
new(R.On.extend({
		Hy : document.ccConfig,
		ctor : function (a) {
			this._super();
			this.Ofa = a;
			R.qs = this.Hy.COCOS2D_DEBUG;
			R.z$();
			R.Efa(this.Hy.tag);
			R.pG.Gfa().O8()
		},
		E7 : function () {
			var a = R.o.d(),
			c = R.uc.d().Rc,
			d = R.size(480, 800),
			e = R.size(480, 800),
			f = [],
			g = [];
			f.push("res");
			R.cc.d().$ea(f);
			f = R.On.d().e$();
			f == R.TA.GP ? g.push("HD") : f == R.TA.UP && (800 <= c.height ? g.push("HD") : (d = R.size(320, 480), e = R.size(320, 480), g.push("Normal")));
			R.cc.d().afa(g);
			a.Pda(d.width / e.width);
			R.uc.d().HN(c.width, c.height, R.el.JH);
			a.Vda(this.Hy.showFPS);
			a.xz(1 / this.Hy.frameRate);
			R.hH.qz(vb, function () {
				a.wN(new this.Ofa)
			}, this);
			return m
		}
	}))(xb);
