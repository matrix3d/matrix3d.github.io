package 
{
	import com.adobe.utils.AGALMiniAssembler;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.display3D.Context3D;
	import flash.display3D.Context3DBlendFactor;
	import flash.display3D.Context3DProgramType;
	import flash.display3D.Context3DRenderMode;
	import flash.display3D.Context3DTextureFormat;
	import flash.display3D.Context3DTriangleFace;
	import flash.display3D.Context3DVertexBufferFormat;
	import flash.display3D.IndexBuffer3D;
	import flash.display3D.Program3D;
	import flash.display3D.textures.Texture;
	import flash.display3D.VertexBuffer3D;
	import flash.events.Event;
	import flash.geom.Matrix3D;
	import flash.geom.Vector3D;
	import flash.utils.getTimer;
	import flShader.FlShader;
	
	/**
	 * http://http.developer.nvidia.com/GPUGems/gpugems_ch07.html
	 * @author lizhi
	 */
	[SWF(frameRate=60,width=400,height=400)]
	public class TestGrassAgal1 extends Sprite 
	{
		private var ibuf:IndexBuffer3D;
		private var context:Context3D;
		private var modelMatr:Matrix3D = new Matrix3D;
		private var tempMatr:Matrix3D = new Matrix3D;
		private var light:V3D = new V3D(1,1,1);
		public function TestGrassAgal1():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			stage.stage3Ds[0].addEventListener(Event.CONTEXT3D_CREATE, stage_context3dCreate);
			stage.stage3Ds[0].requestContext3D(Context3DRenderMode.AUTO);
		}
		
		private function stage_context3dCreate(e:Event):void 
		{
			context = stage.stage3Ds[0].context3D;
			
			var program:Program3D = context.createProgram();
			var assembler:AGALMiniAssembler = new AGALMiniAssembler;
			var assembler2:AGALMiniAssembler = new AGALMiniAssembler;
		
			var vshader:FlShader = new VShader;
			var fshader:FlShader = new FShader;
			var vcode:String = vshader.code;
			var fcode:String = fshader.code;
			trace(vcode);
			trace(fcode);
			program.upload(
				assembler.assemble(Context3DProgramType.VERTEX,
					vcode
				),
				assembler2.assemble(Context3DProgramType.FRAGMENT,
					fcode
				)
			);
			//pos
			var posVData:Vector.<Number> = Vector.<Number>([]);
			var uvVData:Vector.<Number> = Vector.<Number>([]);
			var idata:Vector.<uint> = Vector.<uint>([]);
			var otVData:Vector.<Number> = Vector.<Number>([]);
			var normVData:Vector.<Number> = Vector.<Number>([]);
			var star:Node3D = Meshs.star();
			var index:int = 0;
			var c:int = 1000;
			while (c-->0) {
				var w:int = 30;
				var pos:Vector3D = new Vector3D(w * (Math.random()-.5), 0, w * (Math.random()-.5));
				var ot:Number = Math.random() * 1000;
				for each(var face:Face3D in star.fs) {
					for (var i:int = 0; i < face.ins.length; i+=3 ) {
						var v0:V3D = face.vs[face.ins[i]];
						var v1:V3D = face.vs[face.ins[i+1]];
						var v2:V3D = face.vs[face.ins[i + 2]];
						var uv0:V3D = face.uv[face.ins[i]];
						var uv1:V3D = face.uv[face.ins[i+1]];
						var uv2:V3D = face.uv[face.ins[i+2]];
						var n0:V3D = face.norm[face.ins[i]];
						var n1:V3D = face.norm[face.ins[i+1]];
						var n2:V3D = face.norm[face.ins[i + 2]];
						posVData.push(
						v0.x+pos.x,v0.y+pos.y,v0.z+pos.z,
						v1.x+pos.x,v1.y+pos.y,v1.z+pos.z,
						v2.x + pos.x, v2.y + pos.y, v2.z + pos.z);
						
						uvVData.push(
						uv0.x,uv0.y,
						uv1.x,uv1.y,
						uv2.x,uv2.y
						);
						
						normVData.push(
						n0.x,n0.y,n0.z,
						n1.x,n1.y,n1.z,
						n0.x,n0.y,n0.z
						);
						
						otVData.push(
							ot,
							ot,
							ot
							);
						idata.push(index++);
						idata.push(index++);
						idata.push(index++);
					}
				}
			}
			
			var posVBuf:VertexBuffer3D = context.createVertexBuffer(posVData.length/3, 3);
			posVBuf.uploadFromVector(posVData, 0, posVData.length/3);
			
			var uvVBuf:VertexBuffer3D = context.createVertexBuffer(uvVData.length/2, 2);
			uvVBuf.uploadFromVector(uvVData, 0, uvVData.length / 2);
			
			
			var otVBuf:VertexBuffer3D = context.createVertexBuffer(otVData.length, 1);
			otVBuf.uploadFromVector(otVData, 0, otVData.length);
			
			var normVBuf:VertexBuffer3D = context.createVertexBuffer(normVData.length/3, 3);
			normVBuf.uploadFromVector(normVData, 0, normVData.length/3);
			
			ibuf = context.createIndexBuffer(idata.length);
			ibuf.uploadFromVector(idata, 0, idata.length);
			
			context.configureBackBuffer(400, 400, 0);
			context.setCulling(Context3DTriangleFace.NONE);
			context.enableErrorChecking = true;
			context.setProgram(program);
			context.setVertexBufferAt(0, posVBuf, 0, Context3DVertexBufferFormat.FLOAT_3);
			context.setVertexBufferAt(1, uvVBuf, 0, Context3DVertexBufferFormat.FLOAT_2);
			context.setVertexBufferAt(2, otVBuf, 0, Context3DVertexBufferFormat.FLOAT_1);
			//context.setVertexBufferAt(3, normVBuf, 0, Context3DVertexBufferFormat.FLOAT_3);
			context.setProgramConstantsFromVector(Context3DProgramType.FRAGMENT, 0, Vector.<Number>([1, 2, 3, .01]));
			context.setBlendFactors(Context3DBlendFactor.SOURCE_ALPHA, Context3DBlendFactor.ONE_MINUS_SOURCE_ALPHA);
			
			//[Embed(source = "Grass.png")]var grassImageClass:Class;
			//[Embed(source = "Grass2.png")]var grassImageClass:Class;
			[Embed(source = "grass_strands.png")]var grassImageClass:Class;
			//[Embed(source = "grass_PNG4925.png")]var grassImageClass:Class;
			var bmd:BitmapData = (new grassImageClass as Bitmap).bitmapData;
			var texture:Texture = context.createTexture(bmd.width, bmd.height, Context3DTextureFormat.BGRA, false);
			texture.uploadFromBitmapData(bmd);
			context.setTextureAt(0, texture);
			
			addEventListener(Event.ENTER_FRAME, enterFrame);
		}
		
		private function enterFrame(e:Event):void 
		{
			light.nrm();
			context.setProgramConstantsFromVector(Context3DProgramType.VERTEX, 4, Vector.<Number>([getTimer()/100, .03, 0.5, 0]));
			context.setProgramConstantsFromVector(Context3DProgramType.FRAGMENT, 1, Vector.<Number>([light.x, light.y, light.z, light.w]));
			modelMatr.identity();
			modelMatr.appendRotation(mouseX*.1, Vector3D.Y_AXIS);
			modelMatr.appendRotation(-.1*mouseY, Vector3D.X_AXIS);
			tempMatr.identity();
			var scale:Number = .35;
			tempMatr.appendScale(scale, scale, scale);
			tempMatr.append(modelMatr);
			tempMatr.appendTranslation(0, 0, 1000);
			tempMatr.appendScale(1,1, 1 / 5000);
			context.setProgramConstantsFromMatrix(Context3DProgramType.VERTEX, 0, tempMatr, true);
			context.setProgramConstantsFromMatrix(Context3DProgramType.VERTEX, 5, modelMatr, true);
			context.clear();
			context.drawTriangles(ibuf);
			context.present();
		}
		
	}
	
}
import flash.display3D.Context3DProgramType;
import flShader.FlShader;
import flShader.Var;

class VShader extends FlShader {
	public function VShader() 
	{
		super(Context3DProgramType.VERTEX);
		var matr:Var = C();
		var pos:Var = VA();
		var uv:Var = VA(1);
		var ot:Var = VA(2);
		var norm:Var = VA(3);
		var time:Var = add(C(4).c("x"),ot);
		var scale:Var = C(4).c("y");
		var posAdder:Var =  mul(mul(slt(uv.c("y"), C(4).c("z")), sin(time)), scale);
		pos = m44(pos, matr);
		add(pos.c("x"), posAdder, pos.c("x"));
		mov(pos, null, op);
		mov(uv, null, V());
		/*var v1:Var = createTempVar();
		//v1 = v1.c("xyz");
		m44(norm, C(5),v1);
		v2 = createTempVar();
		var v2:Var = v2.c("xyz");
		nrm(v1, null, v2);
		mov(v2,null,V(1));*/
	}
}

class FShader extends FlShader {
	public function FShader() 
	{
		super(Context3DProgramType.FRAGMENT);
		var color:Var = tex(V(), FS());
		var kilC:Var = C().c("w");
		kil(sub(color.c("w"),C().c("w")).c("w"));
		//mul(color.c("w"),color.c("xyz"),color.c("xyz"));
		mov(color ,null, oc);
	}
}