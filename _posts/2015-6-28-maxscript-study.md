---
layout: post
category : 3dmax
tagline: ""
tags : [3dmax]
---
{% include JB/setup %}

# 3dmax脚本学习

## 运行

打开菜单maxscript ，文件-新建脚本，输入，数字键盘的回车,运行一行。运行多行，需要选中全部文字，小键盘回车。将保存好的ms文件，拖到3dmax中，也可运行整个脚本

## 打印 输出

print ,"print 1"

## 代码注释

单行注释 --，多行注释 /*注释*/

##  循环

	for v = 1 to 10 do
	(
		print v
	)
	
## 函数

	function myadd x y = ( 
		x+y 
	)
	for i = 1 to 10 do (
		print (myadd i i)
	) 