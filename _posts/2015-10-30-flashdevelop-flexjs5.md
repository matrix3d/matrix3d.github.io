---
layout: post
category : as3
tagline: ""
tags : [as3, flash]
---
{% include JB/setup %}

<img src="https://cloud.githubusercontent.com/assets/4150631/10839821/230a5586-7f13-11e5-8ec4-bf81315ec3ff.gif"></img>

1 download flexjs 0.5

2 change build.properties line 38 playerglobal.version = 19.0

3 new evn.properties file at root

<pre>
env.PLAYERGLOBAL_HOME = d:\\sdk\\flexjs5\\frameworks\\libs\\player
env.AIR_HOME = d:\\sdk\\flexjs5
env.FLEX_HOME = d:\\sdk\\flexjs5
env.FALCON_HOME = d:\\sdk\\flexjs5
env.FALCONJX_HOME = d:\\sdk\\flexjs5\\js
env.GOOG_HOME = d:\\sdk\\flexjs5\\js\\lib\\google
</pre>

4 download ant panel add to flashdevlop

5 new flashdevelop as3 project,

add js.swc to lib

copy examples build_example.xml and examples/native/ButtonExample/build.xml to fd project root

change build.xml 23 line location

change build.xml 24 line with Main

ant panel add and run the build.xml

