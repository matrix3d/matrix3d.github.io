---
layout: commentpage
title: Native3d 
header: Native3d
group: navigation
---
{% include JB/setup %}

<div id="swfs">aaa</div>
<script>
var names=["test1","test8"];
var swf= document.getElementById("swfs");
var base="assets/native3d/"
for each(var name in names){
	var cell=document.createElement("div");
	var img=document.createElement("img");
	img.src=base+name+"/icon.png";
	cell.appendChild(img);
	swf.appendChild(cell);
}
</script>
