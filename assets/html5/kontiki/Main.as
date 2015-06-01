package {
	import com.adobe.utils.AGALMiniAssembler;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Loader;
	import flash.display.Sprite;
	import flash.display.Stage3D;
	import flash.display3D.Context3D;
	import flash.display3D.Context3DCompareMode;
	import flash.display3D.Context3DProgramType;
	import flash.net.URLRequest;
	import flash.system.Capabilities;
	import flash.utils.ByteArray;
	import flash.utils.getTimer;
	//import flash.display3D.Context3DStencilAction;
	import flash.display3D.Context3DTriangleFace;
	import flash.display3D.Context3DVertexBufferFormat;
	import flash.display3D.IndexBuffer3D;
	import flash.display3D.Program3D;
	import flash.display3D.textures.Texture;
	import flash.display3D.VertexBuffer3D;
	import flash.events.Event;
	import flash.geom.Matrix3D;
	import flash.geom.Vector3D;
	/**
	 * ...
	 * @author lizhi
	 */
	public class Main extends Sprite
	{
		private var stage3D:Stage3D;
		private var context3D:Context3D;
		private var vertexBuffer:VertexBuffer3D;
		private var indexBuffer:IndexBuffer3D;
		private var program:Program3D;
		private var texture:Texture;
		private var ss:Vector.<Sprite3D> = new Vector.<Sprite3D>;
		private var shape:Sprite;
		private var loader:Loader;
		
		/*[Factory(factoryClass="flash.utils.FlashEmbed.getEmbed",type="flash.display.Bitmap")]
		[Embed(source="../assets/rockman.png")]
		public static const rockmanAsset:Class;*/
		
		public function Main() 
		{
			super();
			if (stage) {
				init(null);
			}else {
				addEventListener(Event.ADDED_TO_STAGE, init);
			}
		}
		
		private function init(e:Event):void {
			removeEventListener(Event.ADDED_TO_STAGE, init);
			stage3D = stage.stage3Ds[0];
			stage3D.addEventListener(Event.CONTEXT3D_CREATE, stage3D_context3dCreate);
			stage3D.requestContext3D();
			
			
			shape = new Sprite;
			shape.graphics.beginFill(0xff0000);
			shape.graphics.drawRect( -50, -50, 100, 100);
			addChild(shape);
			
			loader = new Loader;
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE, loader_complete);
			loader.load(new URLRequest("../assets/rockman.png"));
			/*var bitmap:Bitmap = new Bitmap(new rockmanAsset as BitmapData);
			addChild(bitmap);*/
			
			addEventListener(Event.ENTER_FRAME, enterFrame);
		}
		
		private function loader_complete(e:Event):void 
		{
			addChild(loader.content);
		}
		
		private function stage3D_context3dCreate(e:Event):void 
		{
			context3D = stage3D.context3D;
			context3D.enableErrorChecking = true;
			context3D.configureBackBuffer(400, 400, 0, true);
			
			
			program = context3D.createProgram();
			if(Capabilities.playerType!="js"){
				var minia:AGALMiniAssembler = new AGALMiniAssembler
				program.upload(minia.assemble(Context3DProgramType.VERTEX, 
				"m44 op, va0, vc0"),
				minia.assemble(Context3DProgramType.FRAGMENT, 
				"mov oc,fc0"
				));
			}else {
				var vsh:Array = ["attribute vec4 va0;void main(){gl_Position = va0;}"];
				var fsh:Array = ["void main(){gl_FragColor=vec4(1.,0.,0.,1.);}"];
				program.upload(vsh as ByteArray, fsh as ByteArray);
			}
			
			vertexBuffer = context3D.createVertexBuffer(4, 3);
			vertexBuffer.uploadFromVector(new <Number>[
				-.5, -.5, 0,
				.5, -.5, 0,
				-.5,.5,0,
				.5,.5,0]
				, 0, 4);
			
			indexBuffer = context3D.createIndexBuffer(6);
			indexBuffer.uploadFromVector(new <uint>[0, 1, 2, 1, 3, 2], 0, 6);
			
			var s:Sprite3D = new Sprite3D;
			ss.push(s);
			s.color = new <Number>[1,0,0,1];
			
			s = new Sprite3D;
			s.x = 50;
			ss.push(s);
			
			
		}
		
		private function enterFrame(e:Event) :void
		{
			//return;
			shape.x = 200*(Math.sin(getTimer()/3000)+1);
			shape.y = 200 * (Math.cos(getTimer() / 1000)+1);
			shape.rotation++;
			if(context3D){
				context3D.clear(0,0,0,0,1,0);
				for (var i:int = 0; i < ss.length;i++ ) {
					var s:Sprite3D = ss[i];
					s.rotation++;
					
					context3D.setDepthTest(true, Context3DCompareMode.LESS_EQUAL);
					if (i == 0) {
						//context3D.setStencilActions(Context3DTriangleFace.FRONT_AND_BACK, Context3DCompareMode.ALWAYS, Context3DStencilAction.SET, Context3DStencilAction.KEEP, Context3DStencilAction.KEEP);
						//context3D.setStencilReferenceValue(1,0xff,0xff);
					}else {
						//context3D.setStencilActions(Context3DTriangleFace.FRONT_AND_BACK, Context3DCompareMode.EQUAL, Context3DStencilAction.KEEP, Context3DStencilAction.KEEP, Context3DStencilAction.KEEP);
						//context3D.setStencilReferenceValue(1,0xff,0xff);
					}
					
					context3D.setProgram(program);
					context3D.setVertexBufferAt(0, vertexBuffer,0,Context3DVertexBufferFormat.FLOAT_3);
					draw(s);
				}
				context3D.present();
			}
		}
		
		private function draw(s:Sprite3D):void {
			var matr:Matrix3D = new Matrix3D;
			//matr.appendScale(s.width / 400, -s.height / 400, 1);
			//matr.appendRotation( -s.rotation ,new Vector3D(0,0,1));
			//matr.appendTranslation(s.x/200,-s.y/200,0);
			context3D.setProgramConstantsFromVector(Context3DProgramType.FRAGMENT, 0,s.color);
			context3D.setProgramConstantsFromMatrix(Context3DProgramType.VERTEX, 0, matr, true);
			context3D.drawTriangles(indexBuffer);
			
		}
	}
}
class Sprite3D {
	public var x:Number = 0;
	public var y:Number = 0;
	public var rotation:Number = 0;
	public var width:Number = 100;
	public var height:Number = 100;
	public var color:Vector.<Number> = new <Number>[1,1,1,1];
}
