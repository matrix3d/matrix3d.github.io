/**
 * ...
 * @author lizhi
 */

function Tetris(canvas) {
	this.canvas=canvas;
	this.numRows = 20;
	this.numCols = 20;
	this.data = [];
	this.groups = [];
	this.xadder=0;
	this.yadder=0;
	this.rotadder=0;
	this.frame = 0;
	this.cxt = canvas.getContext("2d");
	
	Tetris.prototype.keyDown=function(e) 
	{
		this.xadder = 0;
		this.yadder = 0;
		this.rotadder = 0;
		if (e.keyCode==40) {
			this.yadder = 1;
		}else if (e.keyCode==37) {
			this.xadder = -1;
		}else if (e.keyCode==39) {
			this.xadder = 1;
		}else if (e.keyCode==38) {
			this.rotadder = 1;
		}else if (e.keyCode==38) {
			this.rotadder = -1;
		}
	}
	
	Tetris.prototype.newGroup = function(){
		var g = new CubeGroup();
		g.x = Math.floor(this.numRows / 2);
		this.groups.push(g);
		var r = Math.floor(Math.random() * 5);
		if (r == 0) {//土
			g.color = 0xaa0000;
			g.createCube(0, 0);
			g.createCube(1, 0);
			g.createCube(-1, 0);
			g.createCube(0, 1);
		}else if (r==1) {//方块
			g.color = 0xaa00;
			g.createCube(0, 0);
			g.createCube(1, 1);
			g.createCube(1, 0);
			g.createCube(0, 1);
		}else if (r==2) {//直线
			g.color = 0xaa;
			g.createCube(0, -1);
			g.createCube(0, 0);
			g.createCube(0, 1);
			g.createCube(0, 2);
		}else if (r==3) {//曲线1
			g.color = 0xaaaa00;
			g.createCube(0, -1);
			g.createCube(0, 0);
			g.createCube(1, 0);
			g.createCube(1, 1);
		}else if (r==4) {//曲线2
			g.color = 0xaaaa;
			g.createCube(1, -1);
			g.createCube(0, 0);
			g.createCube(1, 0);
			g.createCube(0, 1);
		}
	}
	
	Tetris.prototype.enterFrame = function(){
		var g = this.groups[this.groups.length - 1];
		if (g) {
			if (this.xadder||this.yadder||this.rotadder) {
				
			}else {
				if ((this.frame%12)==0) {
					this.yadder = 1;
				}
				this.frame++;
			}
			if(this.xadder||this.yadder||this.rotadder){
				g.x += this.xadder;
				g.y += this.yadder;
				g.rotation += this.rotadder;
				
				var collision = false;
				for (var i=0;i<g.cubes.length;i++) {
					var c = g.cubes[i];
					c.updateRotation();
					var x = g.x + c.x;
					var y = g.y + c.y;
					if (this.data[y]&&this.data[y][x]) {
						collision = true;
					}
				}
				if (collision) {
					g.x -= this.xadder;
					g.y -= this.yadder;
					g.rotation -= this.rotadder;
					for (var i=0;i<g.cubes.length;i++) {
						var c = g.cubes[i];
						c.updateRotation();
					}
						
					if (this.yadder>0) {
						for (var i=0;i<g.cubes.length;i++) {
							var c = g.cubes[i];
							c.updateRotation();
							x = g.x + c.x;
							y = g.y + c.y;
							if (this.data[y]) {
								var cr=0xff
								this.data[y][x] = c;
								var color = new Color;
								color.fromHex(c.color);
								color.r *= .5;
								color.g *= .5;
								color.b *= .5;
								c.color = color.toHex();
							}
						}
						
						for (y = this.numRows-2; y >= 0; y-- ) {
							var full = true;
							for (x = 1; x < this.numCols-1;x++ ) {
								if (this.data[y][x]==null) {
									full = false;
									break;
								}
							}
							if (full) {
								for (var y2 = y; y2 > 0; y2-- ) {
									for (x = 1; x < numCols - 1; x++ ) {
										this.data[y2][x] = this.data[y2 - 1][x];
									}
								}
								y++;
							}
						}
						
						this.groups.pop();
						this.newGroup();
					}
				}
				
				this.xadder = 0;
				this.yadder = 0;
				this.rotadder = 0;
			}
		}
		
		var cubeWidth = 20;
		this.cxt.clearRect(0,0,500,500);
				
		for (x = 0; x < this.numCols;x++ ) {
			for (y = 0; y < this.numRows; y++ ) {
				if (this.data[y][x]) {
					var color = new Color();
					color.fromHex(this.data[y][x].color);
					this.cxt.fillStyle=color.toHTMLRGB();
					this.cxt.fillRect(x*cubeWidth,y*cubeWidth,cubeWidth,cubeWidth);
				}else {
					this.cxt.strokeStyle= "#eeeeee";
					this.cxt.strokeRect(x*cubeWidth+.5,y*cubeWidth+.5,cubeWidth,cubeWidth);
				}
			}
		}
		for (var i=0;i<this.groups.length;i++) {
			var g = this.groups[i];
			for (var j=0;j<g.cubes.length;j++) {
				var c = g.cubes[j];
				var color = new Color();
				color.fromHex(c.color);
				this.cxt.fillStyle=color.toHTMLRGB();
				this.cxt.fillRect((g.x+c.x)*cubeWidth,(g.y+c.y)*cubeWidth,cubeWidth,cubeWidth);
			}
		}
	}
	
	Tetris.prototype.init = function(){
		for (var y = 0; y < this.numRows; y++ ) {
			var arr = [];
			this.data[y] = arr;
			for (var x = 0; x < this.numCols; x++ ) {
				if ((y==(this.numRows-1))||(x==0)||(x==(this.numCols-1))) {
					this.data[y][x] = new Cube;
				}
			}
		}
		this.newGroup();
		var self = this;
		this.intervalID=
		setInterval(
			function(){self.enterFrame();}
		,1000/60);
		onkeydown = function(e){ self.keyDown(e)};
	}
	
	this.init();
	
}

function Cube() {
	this.x = 0;
	this.y = 0;
	this.ox = 0;
	this.oy = 0;
	this.groupGroup;
	this.color = 0x999999;
	Cube.prototype.updateRotation=function() {
		var stats = this.group.rotation%4;
		if (stats<0) {
			stats = 4+stats;
		}
		if (stats==0) {
			this.x = this.ox;
			this.y = this.oy;
		}else if (stats==1) {
			this.x = -this.oy;
			this.y = this.ox;
		}else if (stats==2) {
			this.x = -this.ox;
			this.y = -this.oy;
		}else {
			this.x = this.oy;
			this.y = -this.ox;
		}
	}
}

function CubeGroup() {
	this.x = 0;
	this.y = 0;
	this.rotation = 0;
	this.cubes = [];
	this.color = 0xff0000;
	CubeGroup.prototype.createCube=function(x, y) {
		var cube = new Cube;
		cube.x=cube.ox = x;
		cube.y =cube.oy= y;
		cube.group = this;
		cube.color = this.color;
		this.cubes.push(cube);
	}
}

function Color() {
	this.r;
	this.g;
	this.b;
	Color.prototype.fromHex=function(hex) {
		this.r = (hex >> 16) & 0xff;
		this.g = (hex >> 8) & 0xff;
		this.b = hex & 0xff;
	}
	
	Color.prototype.toHex=function() {
		return (Math.round(this.r) << 16) | (Math.round(this.g) << 8) | Math.round(this.b);
	}
	
	Color.prototype.toHTMLRGB=function() {
		return "rgb("+this.r+","+this.g+","+this.b+")";
	}
}

