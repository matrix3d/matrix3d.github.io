---
layout: post
category : cocos
tagline: ""
tags : [cocos,lua]
---

cocos游戏引擎，是一个老牌的2d游戏引擎。50%的手机游戏都是使用cocos2d开发的。很多大公司也会选择cocos开发。所以这个引擎品质是有保障的。

cocos提供了c++，js，lua语言开发，lua也是比较简单流行的一个语言。

cocos的命令行提供了最基本的，项目模版创建，编译，运行，打包等功能。首先要熟悉一下命令行的运行方式。然后再用官方提供vs编辑器运行项目。最后还是选择了用vscode运行项目。因为vscode提供了lua debug的功能，还是比较好用的。

cocos的可视化编辑器是cocoscreate，基础版本只支持js。但是可以通过插件让lua和c++使用。

首先去 <a href='https://www.cocos.com/download'>https://www.cocos.com/download</a> 下载sdk。然后需要安装python2.7和vside。安装vs的时候选择c++，cocos2d游戏开发。

几个命令

```bat
set path=D:\Python27;%path%
cocos new test -p test.mygame -l lua -d test
cocos compile -s test/test -p win32 -m release -o bin
cocos run -s test/test -p win32
```

这几个命令就可以运行基本的项目了

嫌命令行麻烦可以在用vside打开工程项目

```
testc\test\test\frameworks\runtime-src\proj.win32\test.sln
```

更改src里的 app/views/MainScene.lua即可立即看到更改效果

如果想调试可以用vscode安装luaide-lite插件，打开工程目录，去插件官网下载LuaDebug.lua放到根目录，然后main.lua第一行添加 `require("LuaDebug")("localhost", 7003)`,新建launch配置文件,更改Cocos-Launch里的exePath指向 simulator/win32/test.exe

这样就可以用vscode debug lua了。

官方的模版用的是mvc结构。默认生成了一个MainScene.lua。新建一个NewScene.lua 复制MainScene.lua的大部分代码，稍作修改。然后在MainScene里添加按钮事件，点击切换到NewScene

```lua
local btn=ccui.Button:create( "HelloWorld.png","HelloWorld.png","HelloWorld.png")
btn:addTo(self)
btn:move(display.center)
btn:addClickEventListener(function(sender)
	 print("click")
	 local app=self:getApp()
	 app:run("NewScene")
end)
```

