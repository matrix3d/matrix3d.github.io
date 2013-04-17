---
layout: post
category : lessons
tagline: "tl"
tags : [as3, tutorial]
---
{% include JB/setup %}
### as3 socket httprequest  
as3 可以用urlloader请求http。也可以用socket模拟请求。
	```
	var socket:Socket = new Socket("g.cn",80);
	socket.addEventListener(Event.CONNECT, socket_connect);
	socket.addEventListener(ProgressEvent.SOCKET_DATA, socket_socketData);

	function socket_socketData(e:ProgressEvent):void 
	{
		while (socket.bytesAvailable) {
			trace(socket.readUTFBytes(socket.bytesAvailable));
		}
	}

	function socket_connect(e:Event):void 
	{
		socket.writeUTFBytes("GET /index.html HTTP/1.1\r\nHost:g.cn\r\n\r\n");
		socket.flush();
	}

	//result
	HTTP/1.1 301 Moved Permanently
	Location: http://www.google.cn/index.html
	Date: Wed, 17 Apr 2013 03:12:07 GMT
	Expires: Wed, 17 Apr 2013 03:12:07 GMT
	Cache-Control: private, max-age=2592000
	Content-Type: text/html; charset=UTF-8
	Server: gws
	Content-Length: 228
	X-XSS-Protection: 1; mode=block
	X-Frame-Options: SAMEORIGIN

	<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
	<TITLE>301 Moved</TITLE></HEAD><BODY>
	<H1>301 Moved</H1>
	The document has moved
	<A HREF="http://www.google.cn/index.html">here</A>.
	</BODY></HTML>


	```







