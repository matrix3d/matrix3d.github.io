var MyLayer = cc.Layer.extend({
    isMouseDown:false,
    helloLabel:null,
	nowMoveingSp:null,
	sprites:[],
	numCols:3,
	numRows:4,
	cellW:1,
	cellH:1,
	gap:1,
    init:function () {
        this._super();
        var size = cc.Director.getInstance().getVisibleSize();
        this.helloLabel = cc.LabelTTF.create("Hello World", "Impact", 38);
        this.helloLabel.setPosition(cc.p(size.width / 2, size.height - 70));
        this.addChild(this.helloLabel, 5);

		//var scaleTo =cc.ScaleTo.create(2,10,10);
		//this.helloLabel.runAction(scaleTo);
		this.scheduleUpdate();
		this.setTouchEnabled(true);

        var sp = cc.Sprite.create(s_girl1);
		var imageW=sp.getBoundingBox().getWidth();
		var imageH=sp.getBoundingBox().getHeight();
		this.cellW=Math.ceil(imageW/this.numCols);
		this.cellH=Math.ceil(imageH/this.numRows);
		for(var y=0;y<this.numRows;y++){
			for(var x=0;x<this.numCols;x++){
				if(y!=0||x!=(this.numCols-1)){
					var frame=cc.SpriteFrame.create(s_girl1,cc.rect(x*this.cellW,(this.numRows-y-1)*this.cellH,this.cellW,this.cellH));
					sp=cc.Sprite.createWithSpriteFrame(frame);
					sp.setAnchorPoint(cc.p(0,0));
					sp.setPosition(x*(this.cellW+this.gap),y*(this.cellH+this.gap));
					sp.setUserData({x:x,y:y});
					this.addChild(sp, 0);
					this.sprites.push(sp);
				}
			}
		}
		for(var i=0;i<300;i++){
			var sp=this.sprites[Math.floor(this.sprites.length*Math.random())];
			var userData=sp.getUserData();
			var txy=this.xy2txy(userData.x,userData.y);
			if(txy!=null){
				userData.x=txy.x;
				userData.y=txy.y;
				sp.setPosition(userData.x*(this.cellW+this.gap),userData.y*(this.cellH+this.gap));
			}
		}
		//this.setPosition(cc.p(200,200));
    },
	onTouchesBegan:function (pTouch,e){
		if(pTouch[0]&&this.nowMoveingSp==null){
			var pos=pTouch[0].getLocation();
			cc.log("begin"+pos.x+":"+pos.y);
			var x=Math.floor(pos.x/(this.cellW+this.gap));
			var y=Math.floor(pos.y/(this.cellH+this.gap));
			for(var i=0;i<this.sprites.length;i++){
				var sp=this.sprites[i];
				var userData=sp.getUserData();
				if(userData.x==x&&userData.y==y){
					this.nowMoveingSp=sp;
					break;
				}
			}
			if(this.nowMoveingSp){
				var txy=this.xy2txy(x,y);
				if(txy!=null){
					var userData=this.nowMoveingSp.getUserData();
					userData.x=txy.x;
					userData.y=txy.y;
				}else{
					this.nowMoveingSp=null;
				}
			}
		}
	},
	update:function(dt){
		if(this.nowMoveingSp!=null){
			var userData=this.nowMoveingSp.getUserData();
			var tx=userData.x*(this.cellW+this.gap);
			var ty=userData.y*(this.cellH+this.gap);
			var x=this.nowMoveingSp.getPositionX();
			var y=this.nowMoveingSp.getPositionY();
			this.nowMoveingSp.setPositionX(x+(tx-x) *0.3);
			this.nowMoveingSp.setPositionY(y+(ty-y) *0.3);
			if((Math.abs(x-tx)<1)&&(Math.abs(y-ty)<1)){
				this.nowMoveingSp.setPositionX(tx);
				this.nowMoveingSp.setPositionY(ty);
				this.nowMoveingSp=null;
			}
		}
	},
	xy2txy:function(x,y){
		var offsets=[[0,1],[0,-1],[1,0],[-1,0]];
		for(var i=0;i<offsets.length;i++){
			var tx=x+offsets[i][0];
			var ty=y+offsets[i][1];
			if(tx>=0&&ty>=0&&tx<this.numCols&&ty<this.numRows){
				var have=false;
				for(var j=0;j<this.sprites.length;j++){
					var sp=this.sprites[j];
					var userData=sp.getUserData();
					if(userData.x==tx&&userData.y==ty){
						have=true;
						break;
					}
				}
				if(!have){
					return {x:tx,y:ty};
				}
			}
		}
		return null;
	}
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
        layer.init();
    }
});
