package ui.tehui
{
	import UIControl.EventControl;
	import UIControl.UIopenManager;
	import com.net.manager.ConnectionManager;
	import flash.events.Event;
	import morn.core.components.Button;
	import morn.core.components.Button;
	import morn.core.components.Dialog;
	import morn.core.components.View;
	import morn.core.handlers.Handler;
	/**
	 * 特惠脚本
	 * @author lizhi
	 */
	public class TehuiScript2 
	{
		private var view:Dialog;
		public function TehuiScript2() 
		{
			view = new Dialog();
			View.createComp(getXML("game/ui/test/kaifumubiaoUI"), view, view);
			UIopenManager.getInstance().addDiaog("shouci", view);
			
			ConnectionManager.getConnection().addEventListener("800005", hand500104);
			
			var button:Button = view.getChildByName("close") as Button;
			if (button){
				button.clickHandler = new Handler(view.close,["close"]);
			}
		}
		
		private function hand500104(e:Event):void 
		{
			trace("处理",e.type);
		}
		
	}

}