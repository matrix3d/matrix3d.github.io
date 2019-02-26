---
layout: post
category : h5
tagline: ""
tags : [laya,h5]
---

如果使用腊鸭提供的timer，然后自己写的函数报错。腊鸭就会完全黑屏。
腊鸭是一个引擎，这样就太不稳定了。虽然程序员不应该写出bug。但是如果一个项目大了，写的人多了。还是会偶尔出现bug的。
所以我想了一个腊鸭timer的优化方案。

腊鸭的timer是这么写的

```js
Browser.window.requestAnimationFrame(loop);
function loop (stamp){
	Laya.stage._loop();
	Browser.window.requestAnimationFrame(loop);
}
```

只需要交换2行的位置，就能使腊鸭变的非常稳定。改动如下

```js
Browser.window.requestAnimationFrame(loop);
function loop (stamp){
	Browser.window.requestAnimationFrame(loop);
	Laya.stage._loop();
}
```

因为原版的腊鸭是先执行loop再请求循环。一旦loop函数报错，腊鸭的主循环就废了。渲染也不执行了。所以改成先请求动画，再loop。不管loop里面报什么错，腊鸭都会稳定的执行

