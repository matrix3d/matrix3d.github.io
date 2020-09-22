---
layout: post
category : github
tagline: ""
tags : [github]
---

github推出了一个新功能actions，就是提供了主机，可以在某些时候的时候执行一些程序。所以我想可不可以提交代码的时候，执行编译java，或者用airsdk打包apk，然后上传到服务上的功能呢？然后试了下还真可以。

因为airsdk打包需要在windows上执行所以要加上这一行 ```runs-on: windows-latest```

而且需要把airsdk上传到仓库，然后体积有点大，所以做一下精简，把一个g的内容压缩到了几十m，主要要删除aot相关的东西。

然后window不支持zip命令，需要替换成 ```tar -a -c -f my-artifact.zip HelloWorld.class HelloWorld.java```

然后看完整的例子吧

<a href='https://github.com/matrix3d/testactionpri/blob/master/.github/workflows/blank.yml'>https://github.com/matrix3d/testactionpri/blob/master/.github/workflows/blank.yml</a>

效果还不错，每次提交代码自动编译java，生成apk
