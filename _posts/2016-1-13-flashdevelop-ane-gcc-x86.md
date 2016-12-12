---
layout: post
category : as3
tagline: ""
tags : [as3]
---
{% include JB/setup %}

#gcc将c生成dll
gcc可以用mingw的

	set path=%path%;D:\Program Files (x86)\CodeBlocks\MinGW\bin
	gcc -c hello.c
	gcc -shared -o hello.dll hello.o FlashRuntimeExtensions.lib
	
#ant将as3生成swc
fd新建swc工程，as中调用c中的注册的函数

	context= ExtensionContext.createExtensionContext("WinANE", ""); 
	public function print():String
	{
		return context.call("test") as String;
	} 

需要更改fd自动生成的build.xml
	<project name="testswc" default="build">
	
		<property environment="env" />
		<fail unless="env.FLEX_HOME" message="FLEX_HOME needs to be defined as an environment variable or in the Ant build." />
		<property name="FLEX_HOME" location="${env.FLEX_HOME}" />
		
		<property name="OUTPUT" location="lib/testswc.swc"/>
	
		<taskdef resource="flexTasks.tasks" classpath="${FLEX_HOME}/ant/lib/flexTasks.jar"/>
	
		<target name="build">
	
			<mkdir dir="lib" />
	
			<!-- compile SWC -->
			<compc output="${OUTPUT}" target-player="11.0" swf-version="13">
				<load-config filename="${FLEX_HOME}/frameworks/air-config.xml" />
				<sp path-element="src" />
				<include-sources dir="src" includes="*"  />
			</compc>
			<!-- generate documentation -->
			<exec executable="${FLEX_HOME}/bin/asdoc.bat" failonerror="true">
				<arg line="-load-config '${FLEX_HOME}/frameworks/air-config.xml'"/>
				<arg line="-source-path 'src'"/>
				<arg line="-doc-sources 'src'"/>
				<arg line="-output 'lib/tempDoc'"/>
				<arg line="-keep-xml='true'"/>
				<arg line="-skip-xsl='true'"/>
			</exec>
	
			<!-- inject documentation inside SWC -->
			<zip destfile="${OUTPUT}" update="true">
				<zipfileset dir="lib/tempDoc/tempdita" prefix="docs">
					<include name="*.*"/>
					<exclude name="ASDoc_Config.xml"/>
					<exclude name="overviews.xml"/>
				</zipfileset>
			</zip>
		</target>
	</project>
#adt将swc,dll生成ane
写extension.xml文件

定义id，和初始化，完成函数名,用到的dll

	<extension xmlns="http://ns.adobe.com/air/extension/2.5">
	<id>winane</id>
	<versionNumber>1</versionNumber>
	<platforms>
			<platform name="Windows-x86">
				<applicationDeployment>
					<nativeLibrary>hello.dll</nativeLibrary>
					<initializer>ExtInitializer</initializer>
					<finalizer>ExtFinalizer</finalizer>
				</applicationDeployment>
			</platform>
	</platforms>
	</extension>

将生成好的swc解压到当前文件夹（需用用swc里面的library.swf）,执行以下命令，生成ane

	set SDK_PATH=E:\sdk\apache-flex-sdk-4.12.1-bin
	%SDK_PATH%\bin\adt.bat -package -storetype pkcs12 -keystore test.p12 -storepass test -target ane winane.ane extension.xml -swc hello.swc -platform Windows-x86 library.swf hello.dll

#flashdevelop使用ane

建立fd air工程

将生成的ane复制到lib文件夹中，添加到库，解压，命名为 xxx_.ane

点击air属性设置，添加ane id

编辑runapp.bat 找到adl 后面添加 -extdir lib。

编辑packager.bat 找到adt 后面添加 -extdir lib。

lib文件夹即为放置解压后ane文件夹的路径

(如需打包ane要放到不同的路径，在adt后添加-extdir ext)
