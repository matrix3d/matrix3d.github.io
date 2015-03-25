---
layout: post
category : as3
tagline: ""
tags : [as3, flash]
---
{% include JB/setup %}

# flashdevelop flexjs编译as安装流程

## vpn
买一个翻墙vpn打开

##ant
下载ant，配置环境变量 ANT_HOME, 配置ant path % ANT_HOME %\b in

## flexjs
### 下载flexjs sdk，解压
进入flexjssdk目录，shift右键，打开命令窗口。
执行ant -f installer.xml.开始下载依赖路径。
现在完毕后提示安装成功

### 打开build.properties 
在最后添加

	env.PLAYERGLOBAL_HOME = E:\\sdk\\apache-flex-flexjs-0.0.2-bin\\frameworks\\libs\\player
	env.AIR_HOME = E:\\sdk\\apache-flex-flexjs-0.0.2-bin
	env.FLEX_HOME = E:\\sdk\\apache-flex-flexjs-0.0.2-bin
	env.FALCON_HOME = E:\\sdk\\apache-flex-flexjs-0.0.2-bin
	env.FALCONJX_HOME = E:\\sdk\\apache-flex-flexjs-0.0.2-bin\\js
	env.GOOG_HOME = E:\\sdk\\apache-flex-flexjs-0.0.2-bin\\js\\lib\\google\\closure-library

测试是否成功，进入examples文件夹 执行ant main

## flashdevelop
下载flashdevelop的ant插件。放入插件目录
新建flash as工程
复制examples的build_example.xml和flexjstest_basic文件夹的build.xml放入flashdevelop工程根目录
用flashdevelop的ant窗口添加build.xml
更改第24行的value为你想编译的文件名比如Main.as。
在build_example.xml中找到所有${example}.mxml更改为${example}

在ant窗口运行main即可编译成功

## 调用js代码
flexjs会把swc里的类去找js sdk中的js。flexjs不包含任何flash包中的内容。比如vector3d，matrix3d等，
所以如果as代码中包含flash包中的代码，要写上相应的js代码放到源文件夹中，比如TextField

	goog.provide('flash.text.TextField');
	flash.text.TextField = function() {
	};

而且还要把src添加到js编译目录
更改build_example.xml,搜索所有-sdk-js-lib,在下面加上一行

	<arg value="-sdk-js-lib=${basedir}/src" />

这样就把src添加到了编译目录。

如果自定义的as类，要用到本地js代码。需要将as类转成swc，再写对应的js类