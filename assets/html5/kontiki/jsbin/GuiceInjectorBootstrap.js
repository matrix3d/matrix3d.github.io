/** Compiled by the Randori compiler v0.2.6.5_renaun on Fri May 29 18:25:02 CST 2015 */


GuiceInjectorBootstrap = function(mainClassName, dynamicClassBaseUrl) {
	this.mainClassName = mainClassName;
	this.dynamicClassBaseUrl = dynamicClassBaseUrl;
};

GuiceInjectorBootstrap.prototype.launch = function(bgcolor, width, height, frameRate) {
	var urlRewriter = new guice.loader.URLRewriterBase(false);
	var loader = new guice.loader.SynchronousClassLoader(new XMLHttpRequest(), urlRewriter, this.dynamicClassBaseUrl);
	var guiceJs = new guice.GuiceJs(loader);
	var injector = guiceJs.createInjector(null);
	var classBuilder = injector.getInstance(guice.InjectionClassBuilder);
	var obj2 = classBuilder.buildClass("flash.utils.FlashEmbed");
	var obj = classBuilder.buildClass(this.mainClassName);
	if (bgcolor && bgcolor.indexOf("#", 0) > -1)
		bgcolor = "0x" + bgcolor.substring(1, bgcolor.length);
	flash.utils.FlashTimingEngine.start(obj, frameRate, width, height, bgcolor);
};


GuiceInjectorBootstrap.className = "GuiceInjectorBootstrap";

GuiceInjectorBootstrap.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('guice.loader.SynchronousClassLoader');
	p.push('flash.utils.FlashTimingEngine');
	p.push('guice.loader.URLRewriterBase');
	p.push('guice.GuiceJs');
	p.push('guice.InjectionClassBuilder');
	return p;
};

GuiceInjectorBootstrap.getStaticDependencies = function(t) {
	var p;
	return [];
};

GuiceInjectorBootstrap.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 0:
			p = [];
			p.push({n:'mainClassName', t:'String'});
			p.push({n:'dynamicClassBaseUrl', t:'String'});
			break;
		default:
			p = [];
			break;
	}
	return p;
};

