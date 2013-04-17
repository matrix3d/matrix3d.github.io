---
layout: post
category : 
tagline: "tl"
tags : [as3, tutorial]
---
{% include JB/setup %}
### as3 socket httprequest  
as3 可以用urlloader请求http。也可以用socket模拟请求。 
	```  
	
	private var socket:Socket;
		
	private var url:String = "g.cn";
	private var ip:String;
	private var port:int;
	public function Test() 
	{
		var host:String = url.split("/")[0];
		ip = host.split(":")[0];
		port = int(host.split(":")[1]);
		if (port == 0) port = 80;
		trace(ip,port);
		socket = new Socket(ip,port);
		socket.addEventListener(Event.CONNECT, socket_connect);
		socket.addEventListener(ProgressEvent.SOCKET_DATA, socket_socketData);
		socket.addEventListener(Event.CLOSE, socket_close);
	}
	
	private function socket_connect(e:Event):void 
	{
		var i:int = url.indexOf("/");
		var req:String = i==-1?"":url.substr(i+1);
		var str:String = "GET /" + req + " HTTP/1.1\r\n";
		str += "Host:" + ip + ":" + port + "\r\n";
		trace(str);
		socket.writeUTFBytes(str+"\r\n");
		socket.flush();
	}
	
	private function socket_close(e:Event):void 
	{
		trace("close");
	}
	
	private function socket_socketData(e:ProgressEvent):void 
	{
		
		while (socket.bytesAvailable) {
			trace(socket.bytesAvailable);
			var line:String = socket.readUTFBytes(socket.bytesAvailable);
			trace(line);
		}
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







