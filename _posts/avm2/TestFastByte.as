package  
{
	import avm2.intrinsics.memory.*;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.system.ApplicationDomain;
	import flash.text.TextField;
	import flash.utils.ByteArray;
	import flash.utils.Endian;
	import net.hires.debug.Stats;
	/**
	 * ...
	 * @author lizhi http://matrix3d.github.io/
	 */
	public class TestFastByte extends Sprite
	{
		private var bytes:ByteArray = new ByteArray;
		private var w:int = 465;
		private var h:int = 465;
		private var c:int = w*h;
		private var bmd:BitmapData;
		private var time:int = 0;
		private var label:TextField = new TextField;
		private var useFastOpCode:int = 0;
		private var infos:Array = ["avm2", "bytearray", "vector"];
		private var vs:Vector.<uint> = new Vector.<uint>(c);
		public function TestFastByte() 
		{
			addEventListener(Event.ENTER_FRAME, enterFrame);
			bytes.length = c * 4;
			bmd = new BitmapData(w,h);
			addChild(new Bitmap(bmd));
			addChild(new Stats);
			bytes.endian = Endian.LITTLE_ENDIAN;
			addChild(label);
			stage.addEventListener(MouseEvent.CLICK, stage_click);
			label.autoSize = "left";
			label.x = 70;
		}
		
		private function stage_click(e:MouseEvent):void 
		{
			useFastOpCode++;
			useFastOpCode = useFastOpCode % 3;
		}
		
		private function enterFrame(e:Event):void 
		{
			ApplicationDomain.currentDomain.domainMemory = bytes;
			var p:Number = 100 / (time % 1000);
			if(useFastOpCode==0){
				for (var i:int = 0; i < c;i++ ) {
					var v:Number = Math.sin((i + time) * p);
					var pi:int = i * 4;
					sf32(v, pi);
				}
			}else if(useFastOpCode==1){
				for (i = 0; i < c;i++ ) {
					v = Math.sin((i + time) * p);
					pi = i * 4;
					bytes.position = pi;
					bytes.writeFloat(v);
				}
			}else {
				for (i = 0; i < c;i++ ) {
					v = Math.sin((i + time) * p);
					vs[i] = v * 0xffffffff;
				}
			}
			if(useFastOpCode<2){
				bytes.position = 0;
				bmd.setPixels(bmd.rect, bytes);
			}else {
				bmd.setVector(bmd.rect, vs);
			}
			time++;
			label.text = "useFastOpCode:" + infos[useFastOpCode];
		}
	}
}