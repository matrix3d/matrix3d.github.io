/** Compiled by the Randori compiler v0.2.6.5_renaun on Sat May 30 16:40:58 CST 2015 */


Main = function() {
	this.context3D = null;
	this.ss = [];
	this.shape = null;
	this.texture = null;
	this.indexBuffer = null;
	this.stage3D = null;
	this.program = null;
	this.vertexBuffer = null;
	flash.display.Sprite.call(this);
	if (this.get_stage()) {
		this.init(null);
	} else {
		this.addEventListener("addedToStage", $createStaticDelegate(this, this.init), false, 0, false);
	}
};

Main.rockmanAsset = flash.utils.FlashEmbed.getEmbed("flash.display.Bitmap", {source:"../assets/rockman.png"});

Main.prototype.init = function(e) {
	this.removeEventListener("addedToStage", $createStaticDelegate(this, this.init), false);
	this.stage3D = this.get_stage().get_stage3Ds()[0];
	this.stage3D.addEventListener("context3DCreate", $createStaticDelegate(this, this.stage3D_context3dCreate), false, 0, false);
	this.stage3D.requestContext3D("auto", "baseline");
	this.shape = new flash.display.Sprite();
	this.shape.get_graphics().beginFill(0xff0000, 1.0);
	this.shape.get_graphics().moveTo(-50, -50);
	this.shape.get_graphics().lineTo(50, -50);
	this.shape.get_graphics().lineTo(50, 50);
	this.shape.get_graphics().lineTo(-50, 50);
	this.shape.get_graphics().lineTo(-50, -50);
	this.addChild(this.shape);
	var bitmap = new flash.display.Bitmap(new Main.rockmanAsset(), "auto", false);
	this.addChild(bitmap);
	this.addEventListener("enterFrame", $createStaticDelegate(this, this.enterFrame), false, 0, false);
};

Main.prototype.stage3D_context3dCreate = function(e) {
	this.context3D = this.stage3D.get_context3D();
	this.context3D.enableErrorChecking = true;
	this.context3D.configureBackBuffer(400, 400, 0, true, false);
	this.program = this.context3D.createProgram();
	if (flash.system.Capabilities.playerType != "js") {
		var minia = new com.adobe.utils.AGALMiniAssembler(false);
		this.program.upload(minia.assemble("vertex", "m44 op, va0, vc0"), minia.assemble("fragment", "mov oc,fc0"));
	} else {
		var vsh = ["attribute vec4 va0;void main(){gl_Position = va0;}"];
		var fsh = ["void main(){gl_FragColor=vec4(1.,0.,0.,1.);}"];
		this.program.upload(vsh, fsh);
	}
	this.vertexBuffer = this.context3D.createVertexBuffer(4, 3);
	this.vertexBuffer.uploadFromVector([-.5, -.5, 0, .5, -.5, 0, -.5, .5, 0, .5, .5, 0], 0, 4);
	this.indexBuffer = this.context3D.createIndexBuffer(6);
	this.indexBuffer.uploadFromVector([0, 1, 2, 1, 3, 2], 0, 6);
	var s = new Main$Sprite3D();
	this.ss.push(s);
	s.color = [1, 0, 0, 1];
	s = new Main$Sprite3D();
	s.x = 50;
	this.ss.push(s);
};

Main.prototype.enterFrame = function(e) {
	this.shape.set_x(200 * (Math.sin(flash.utils.getTimer() / 3000) + 1));
	this.shape.set_y(200 * (Math.cos(flash.utils.getTimer() / 1000) + 1));
	this.shape.set_rotation(this.shape.get_rotation() + 1);
	if (this.context3D) {
		this.context3D.clear(0, 0, 0, 0, 1, 0, 16777215);
		for (var i = 0; i < this.ss.length; i++) {
			var s = this.ss[i];
			s.rotation++;
			this.context3D.setDepthTest(true, "lessEqual");
			if (i == 0) {
			} else {
			}
			this.context3D.setProgram(this.program);
			this.context3D.setVertexBufferAt(0, this.vertexBuffer, 0, "float3");
			this.draw(s);
		}
		this.context3D.present();
	}
};

Main.prototype.draw = function(s) {
	var matr = new flash.geom.Matrix3D();
	this.context3D.setProgramConstantsFromVector("fragment", 0, s.color, -1);
	this.context3D.setProgramConstantsFromMatrix("vertex", 0, matr, true);
	this.context3D.drawTriangles(this.indexBuffer, 0, -1);
};


$inherit(Main, flash.display.Sprite);

Main.className = "Main";

Main.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('com.adobe.utils.AGALMiniAssembler');
	p.push('flash.display.Bitmap');
	p.push('flash.display3D.Context3DCompareMode');
	p.push('flash.display.Sprite');
	p.push('flash.system.Capabilities');
	p.push('flash.display3D.Context3DProgramType');
	p.push('flash.utils.getTimer');
	p.push('flash.events.Event');
	p.push('flash.display3D.Context3DVertexBufferFormat');
	p.push('flash.geom.Matrix3D');
	return p;
};

Main.getStaticDependencies = function(t) {
	var p;
	return [];
};

Main.injectionPoints = function(t) {
	var p;
	switch (t) {
		case 1:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 2:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		case 3:
			p = flash.display.Sprite.injectionPoints(t);
			break;
		default:
			p = [];
			break;
	}
	return p;
};

Main$Sprite3D = function() {
	this.color = [1, 1, 1, 1];
	this.rotation = 0;
	this.x = 0;
	this.width = 100;
	this.y = 0;
	this.height = 100;
	
};

