---
layout: post
category : 3dmax
tagline: ""
tags : [3dmax]
---
{% include JB/setup %}

### 运行

打开菜单maxscript ，文件-新建脚本，输入，数字键盘的回车,运行一行。运行多行，需要选中全部文字，小键盘回车。将保存好的ms文件，拖到3dmax中，也可运行整个脚本

### 打印 输出

print ,"print 1"

### 代码注释

单行注释 ```--```，多行注释 ```/*注释*/```

###  循环

	for v = 1 to 10 do
	(
		print v
	)
	
### 函数

	function myadd x y = ( 
		x+y 
	)
	for i = 1 to 10 do (
		print (myadd i i)
	) 
	
### 保存文件

	outputname = getSaveFileName caption:"save file" types:"all(*.*)|*.*|" filename:"test.txt"
	if outputname != undefined then(
		file = createfile outputname
		format "123" to:file
		close file
	)

### 遍历顶点，面

	for i = 1 to selection.count do (
		show selection[i]
		tmesh = snapshotAsMesh selection[i]
		if(tmesh != undefined) then(
			print ("顶点："+tmesh.numverts as String)
			for j = 1 to tmesh.numverts do(
				vert = getVert tmesh j
				print vert
			)
			
			print ("面："+tmesh.numfaces as String)
			for j = 1 to tmesh.numfaces do(
				face = getFace tmesh j
				print face
			)
		)
	)

### 递归遍历根节点

	function traversalNode pnode=(
		print pnode.name
		for c in pnode.children do(
			traversalNode c
		)
	)
	traversalNode rootNode
