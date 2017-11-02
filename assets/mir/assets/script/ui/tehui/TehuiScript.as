package ui.tehui
{
	import Module.achievement.KaiFuMubiao;
	import Module.achievement.KaifuTeHuiView;
	import Module.achievement.KaifuZhutiView;
	import Module.achievement.KaifumubiaoSC;
	import Module.achievement.TehuiDengluView;
	import Module.alert.ErrAlert;
	import UIControl.EventControl;
	import UIControl.UIopenManager;
	import com.net.data.SimpleCmd;
	import com.net.manager.ConnectionManager;
	import flash.display.Sprite;
	import flash.events.Event;
	import game.ui.test.kaifumubiao_jinrimubiaoUI;
	import game.ui.test.kaifumubiao_jinritehuiUI;
	import game.ui.test.kaifumubiao_jinrushouchongUI;
	import game.ui.test.kaifumubiao_meiridengluUI;
	import hx.GlobalVar;
	import hx.TabPane;
	import hx.Util.DateUtil;
	import hx.effect.JionPanel;
	import lib3d.air.AIRUtils;
	import lib3d.events.GLTouchEvent;
	import morn.core.components.Button;
	import morn.core.components.Component;
	import morn.core.components.Dialog;
	import morn.core.components.Image;
	import morn.core.components.List;
	import morn.core.components.View;
	import morn.core.handlers.Handler;
	/**
	 * 特惠脚本
	 * @author lizhi
	 */
	public class TehuiScript 
	{
		private var denglu:TehuiDengluView;
		private var zhuti:KaifuZhutiView;
		private var tehui:KaifuTeHuiView;
		private var kaich:KaifumubiaoSC;
		private var tab:TabPane;
		private var kindType:int =0;
		private var shouId:int = 11002;
		
		public var list_anniu:List = null;
		private var view:Dialog;
		public function TehuiScript() 
		{
			trace("new tehui");
			
			ConnectionManager.getConnection().addEventListener("800005", hand500104);
			view = new Dialog();
			
			UIopenManager.getInstance().addDiaog("kaifumubiao", view);
			View.createComp(getXML("game/ui/test/kaifumubiaoUI"), view, view);
			list_anniu = view.getComp("list_anniu") as List;
			
			
			//new KaifuMubiaoCotrol(this);
			
			EventControl.pushMeagss(EventControl.R_KAIFUMUBIAO,rekaifu);
			EventControl.pushMeagss(EventControl.UPKAIFUMUBIAO_AWARD, upAwardData);
			
			
			view.getComp("meiridenglu").visible = false;
			view.getComp("jirishouchong").visible = false;
			view.getComp("jinritehui").visible = false;
			view.getComp("jirimubiao").visible = false;
			tab = new TabPane();
			denglu = new TehuiDengluView();
			zhuti = new KaifuZhutiView();
			tehui = new KaifuTeHuiView();
			tab.additem(view.getComp("btn_meiridenglu") as Button,denglu);
			tab.additem(view.getComp("btn_jinrimubiao") as Button,zhuti);
			tab.additem(view.getComp("btn_tehuilibao") as Button,tehui);
			view.addChild(tab);
			
			kaich = new KaifumubiaoSC();
			kaich.visible = false;
			view.addChild(kaich);
			
			tab.setClickHandler(new Handler(setViewIndex));
			
			list_anniu.selectHandler = new Handler(setListIndex);
			tab.setindex(0);
		}
		
		private function touchTab(e:Event):void 
		{
			var cmd:SimpleCmd = new SimpleCmd(100);
			cmd.write(1);
			ConnectionManager.getConnection().Send(cmd);
			trace("click from script");
			view.close();
		}
		
		private function hand500104(e:Event):void 
		{
			trace("处理",e.type);
		}
		
		public function show():void{
			trace("show");
			
			var ond:int = DateUtil.openday();
			if(DateUtil.isHeOrOpen()||ond>=7){
				EventControl.SendEvent(EventControl.REMOVEYOUSHANGBUT,"btn_kaifumubiao");
				view.close();
				return;
			}
			
			
			EventControl.SendEvent(EventControl.SENDAWARDGIFTDATA,GlobalVar.LUA_ACTIVITY[4]);
		}
		
		private var dataArr:Array = [11000,11010,11001];
		private function setViewIndex(index:int):void{
			var view:Component = tab.getSelectComponent();
			kindType = dataArr[index];
			
			setAnniu(getShowObj(kindType));
		}
		
		//  更新 是否有奖励 可领取
		public function upAwardData(_typeId:int,isA:Boolean):void{
			switch(_typeId){
				case dataArr[0]:// 每日登陆
					kaich.visible = false;
					denglu.awardState(isA);
					break;
				case dataArr[1]:// 今日目标
					kaich.visible = false;
					zhuti.setAwardState();
					break;
				case dataArr[2]: // 今日特惠
					tehui.setAwar_State();
					break;
			}
			
			if(kindType==dataArr[2]){
				setShou();
			}
			if(KaiFuMubiao.z_awardId.indexOf(_typeId)!=-1){
				zhuti.setAwardState();
			}
			if(isA){
				ErrAlert.Alert("领取成功！");
			}
		}
		
		public function rekaifu():void{
			
		}
		
		private function setListIndex(index:int):void{
			switch(kindType){
				case dataArr[0]:// 每日登陆
					setDeng(index);//登陆天数
					break;
				case dataArr[1]:// 今日目标
					setDayAim(index);
					break;
				case dataArr[2]: // 今日特惠
					setShou();
					setTehui(index);
					break;
			}
			
		}
		
		// 开服登陆 活动
		private function setDeng(index:int):void{
			denglu.setData(index);
		}
		
		// 开服 今日目标活动
		private function setDayAim(index:int):void{
			var ond:int = DateUtil.openday();
			if (ond < index){
				
			}else{
			var arrrr:Array = list_anniu.array;
			var vo:Object = list_anniu.array[index];
			if (vo != null) {zhuti.setData(vo.kid); }
			}
		}
		
		// 开服 今日特惠活动
		private function setTehui(index:int):void{
			var ond:int = DateUtil.openday();
			if(ond==index){
				tehui.setdata(index);
			}
				
			
		}
		
		// 开服 目标 充值
		private function setShou():void{
			var arr:Array = KaiFuMubiao.getAwardData(shouId);
			kaich.visible = true;
			if(arr[0]>=2){
				kaich.visible = false;
				return;
			}
			
			kaich.setData();
		}
		
		// 设置按钮
		private function setAnniu(os:Object):void{
			if(os!=null){
			if(kindType==11010){
				zhutiAnniu(os);
			}else{
			var pp:Array = [];
			list_anniu.array = null;
			var leng:int = os.daylength
			for(var i:int = 0;i<leng;i++){
				var _vo:Object = {};
				_vo.kid = kindType;
				_vo.day = i+1;
				pp.push(_vo);
			}
			list_anniu.array = pp;
			list_anniu.selectedIndex = 0;
			}
			}
		}
		private function zhutiAnniu(os:Object):void{
			var kIdArr:Array = [];
			var keys:Array = getObectKeys(os);
			for each(var kd:String in keys){
				kIdArr.push(int(kd));
			}
			kIdArr.sort();
			list_anniu.array = null;
			
			var pp:Array = [];
			list_anniu.array = null;
			var leng:int = os.daylength
			for(var i:int = 0;i<kIdArr.length;i++){
				var _vo:Object = {};
				_vo.kid = kIdArr[i];
				_vo.day = i+1;
				pp.push(_vo);
			}
			list_anniu.array = pp;
			list_anniu.selectedIndex = 0;
			
		}
		
		private function getShowObj(kid:int):Object{
			var son:Object = JionPanel.getInstance().getOpenFunction(GlobalVar.LUA_ACTIVITY[4]);
			if(son){
				return son[kid];
			}
			return null;
		}
		
	}

}