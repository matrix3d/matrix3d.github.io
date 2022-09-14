---
layout: post
category : antlr
tagline: ""
tags : [antlr]
---

###  下载 antlr-4.7.2-complete.jar

###  根据g4生成java

```
java -jar antlr-4.7.2-complete.jar Hello.g4
```

###  编译java

```
javac -cp antlr-4.7.2-complete.jar *.java
```

###  gui测试

```
java -cp antlr-4.11.1-complete.jar;. org.antlr.v4.gui.TestRig Hello init -gui
```

输入代码 ctrl+z结束 回车

	
### g4 例子

```g4
grammar Hello;
init : '{' value (',' value)* '}' ;
value : init
		| INT
		;
		
INT : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;
```
