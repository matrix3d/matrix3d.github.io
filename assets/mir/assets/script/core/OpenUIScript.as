package core
{
	import UIControl.EventControl;
	import UIControl.UIopenManager;
	import flash.events.Event;
	import flash.events.NetStatusEvent;
	/**
	 * 打开ui脚本
	 * @author lizhi
	 */
	public class OpenUIScript 
	{
		private var uis:Object = {};
		private var type2script:Object = {};
		public function OpenUIScript() 
		{
			trace("OpenUIScript");
			EventControl.pushMeagss("scriptopenui", openui);
			
			//注册脚本对应的ui
			//type2script["kaifumubiao"] = "ui/tehui/TehuiScript";
			type2script["shouci"] = "ui/tehui/TehuiScript2";
		}
		
		private function openui(type:String):void 
		{
			trace(type);
			var nowui:Object = uis[type];
			if (nowui==null){
				var script:String = type2script[type];
				if (script){
					nowui=runScript(script);
					uis[type] = nowui;
				}
			}
			if (nowui){
				nowui.show();
			}
		}
		
	}

}