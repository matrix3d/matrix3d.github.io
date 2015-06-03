/** Compiled by the Randori compiler v0.2.6.5_renaun on Wed Jun 03 10:44:52 CST 2015 */

if (typeof flash == "undefined")
	var flash = {};
if (typeof flash.utils == "undefined")
	flash.utils = {};

flash.utils.FlashTimingEngine = function() {
	this.framePerSecond = 0;
	this.startFrameTime = 0;
	this.ENTER_EVENT = new flash.events.Event("enterFrame", false, false);
	this.stopFlag = false;
	this.frameTime = 0;
	this.lastID = 0;
	this.currentTimers = new flash.utils.Dictionary(false);
	this.TIMER_COMPLETE_EVENT = new flash.events.TimerEvent("timerComplete", false, false);
	this.availableObjects = [];
	this.lastFrameTime = 0;
	this.TIMER_EVENT = new flash.events.TimerEvent("timer", false, false);
	
};

flash.utils.FlashTimingEngine.stageInstance;

flash.utils.FlashTimingEngine.frameHandler;

flash.utils.FlashTimingEngine.embedLoadingObjects = [];

flash.utils.FlashTimingEngine.embedBitmapDatas = [];

flash.utils.FlashTimingEngine.embedSounds = [];

flash.utils.FlashTimingEngine.getEmbed = function(source) {
	if (!flash.utils.FlashTimingEngine.embedBitmapDatas[source]) {
		var bitmapData = new flash.display.BitmapData(0, 0, true, 0);
		bitmapData.embedImage(source);
		flash.utils.FlashTimingEngine.embedBitmapDatas[source] = bitmapData;
	}
	return flash.utils.FlashTimingEngine.embedBitmapDatas[source];
};

flash.utils.FlashTimingEngine.getSoundEmbed = function(source) {
	if (!flash.utils.FlashTimingEngine.embedSounds[source]) {
		var snd = new flash.media.Sound(new flash.net.URLRequest(source));
		flash.utils.FlashTimingEngine.embedLoadingObjects.push(snd);
		flash.utils.FlashTimingEngine.embedSounds[source] = snd;
	}
	return flash.utils.FlashTimingEngine.embedSounds[source];
};

flash.utils.FlashTimingEngine.setupStageInteractionEvents = function(canvas) {
	canvas.addEventListener("mousedown", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	canvas.addEventListener("mousemove", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	canvas.addEventListener("mouseup", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureEventHandler), true);
	if ("ontouchstart" in document.documentElement) {
		canvas.addEventListener("touchstart", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
		canvas.addEventListener("touchmove", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
		canvas.addEventListener("touchend", $createStaticDelegate(flash.utils.FlashTimingEngine, flash.utils.FlashTimingEngine.captureTouchEventHandler), true);
	}
};

flash.utils.FlashTimingEngine.captureEventHandler = function(event) {
	if (!flash.utils.FlashTimingEngine.stageInstance)
		return;
	var type = "mouseDown";
	if (event.type == "mousedown")
		type = "mouseDown";
	else if (event.type == "mousemove")
		type = "mouseMove";
	else if (event.type == "mouseup")
		type = "mouseUp";
	var me = new flash.events.MouseEvent(type, false, false, event.offsetX, event.offsetY, null, false, false, false, false, 0, false, false, 0);
	flash.utils.FlashTimingEngine.stageInstance.dispatchEvent(me);
};

flash.utils.FlashTimingEngine.captureTouchEventHandler = function(event) {
	if (!flash.utils.FlashTimingEngine.stageInstance)
		return;
	var type = "touchBegin";
	if (event.type == "touchstart")
		type = "touchBegin";
	else if (event.type == "touchmove")
		type = "touchMove";
	else if (event.type == "touchend")
		type = "touchEnd";
};

flash.utils.FlashTimingEngine.start = function(root, framePerSecond, stageWidth, stageHeight, color) {
	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win", 0) != -1)
		OSName = "Windows";
	else if (navigator.appVersion.indexOf("Mac", 0) != -1)
		OSName = "Macintosh";
	else if (navigator.appVersion.indexOf("X11", 0) != -1)
		OSName = "UNIX";
	else if (navigator.appVersion.indexOf("Linux", 0) != -1)
		OSName = "Linux";
	flash.system.Capabilities.manufacturer = OSName;
	try {
		flash.utils.FlashTimingEngine.frameHandler = new flash.utils.RequestAnimationFrame();
	} catch (error) {
	}
	if (!flash.utils.FlashTimingEngine.stageInstance)
		flash.utils.FlashTimingEngine.stageInstance = new flash.display.Stage();
	flash.utils.FlashTimingEngine.stageInstance.stageWidth = stageWidth;
	flash.utils.FlashTimingEngine.stageInstance.stageHeight = stageHeight;
	flash.utils.FlashTimingEngine.stageInstance.color = color;
	flash.utils.FlashTimingEngine.root = root;
	root.root = root;
	flash.utils.FlashTimingEngine.stopFlag = false;
	flash.utils.FlashTimingEngine.framePerSecond = framePerSecond;
	flash.utils.FlashTimingEngine.frameTime = ~~(1000 / framePerSecond);
	flash.utils.FlashTimingEngine.currentTime = new Date().getTime();
	if (flash.utils.FlashTimingEngine.embedLoadingObjects.length == 0) {
		flash.utils.FlashTimingEngine.tick();
		root.dispatchEvent(new flash.events.Event("addedToStage", false, false));
	}
	else
		flash.utils.FlashTimingEngine.embedWait();
};

flash.utils.FlashTimingEngine.embedWait = function() {
	var allComplete = true;
	for (var i = 0; i < flash.utils.FlashTimingEngine.embedLoadingObjects.length; i++) {
		allComplete = allComplete && flash.utils.FlashTimingEngine.embedLoadingObjects[i].isLoaded;
	}
	trace("allComplete: " + allComplete);
	if (allComplete) {
		flash.utils.FlashTimingEngine.tick();
		flash.utils.FlashTimingEngine.root.dispatchEvent(new flash.events.Event("addedToStage", false, false));
	}
	else
		setTimeout($createStaticDelegate(this, flash.utils.FlashTimingEngine.embedWait), 50);
};

flash.utils.FlashTimingEngine.tick = function() {
	flash.utils.FlashTimingEngine.startFrameTime = new Date().getTime();
	flash.events.EventDispatcher.fireGlobalEvent(flash.utils.FlashTimingEngine.ENTER_EVENT);
	var timerObject;
	var $n0;
	for (var $v0 in ($n0 = flash.utils.FlashTimingEngine.currentTimers)) {
		timerObject = $n0[$v0];
		if (!timerObject)
			continue;
		if (timerObject.timeLeft - flash.utils.FlashTimingEngine.lastFrameTime < 0) {
			if (timerObject.repeat >= 0)
				timerObject.repeat--;
			timerObject.timeLeft = timerObject.time;
			timerObject.callBack.dispatchEvent(flash.utils.FlashTimingEngine.TIMER_EVENT);
			if (timerObject.repeat == -1) {
				timerObject.callBack.dispatchEvent(flash.utils.FlashTimingEngine.TIMER_COMPLETE_EVENT);
				flash.utils.FlashTimingEngine.addToPool(timerObject);
				flash.utils.FlashTimingEngine.currentTimers[timerObject.id] = null;
				delete flash.utils.FlashTimingEngine.currentTimers[timerObject.id];
			}
		} else {
			timerObject.timeLeft -= flash.utils.FlashTimingEngine.lastFrameTime;
		}
	}
	flash.utils.FlashTimingEngine.lastFrameTime = (new Date().getTime() - flash.utils.FlashTimingEngine.startFrameTime);
	if (flash.utils.FlashTimingEngine.frameTime - flash.utils.FlashTimingEngine.lastFrameTime > 0) {
		setTimeout($createStaticDelegate(this, flash.utils.FlashTimingEngine.tick), (flash.utils.FlashTimingEngine.frameTime - flash.utils.FlashTimingEngine.lastFrameTime));
		return;
	}
	if (flash.utils.FlashTimingEngine.lastFrameTime < flash.utils.FlashTimingEngine.frameTime)
		flash.utils.FlashTimingEngine.lastFrameTime = flash.utils.FlashTimingEngine.frameTime;
	if (!flash.utils.FlashTimingEngine.stopFlag)
		flash.utils.FlashTimingEngine.frameHandler.request($createStaticDelegate(this, flash.utils.FlashTimingEngine.tick));
};

flash.utils.FlashTimingEngine.stop = function() {
	flash.utils.FlashTimingEngine.stopFlag = true;
};

flash.utils.FlashTimingEngine.createTimer = function(time, repeat, callBack) {
	flash.utils.FlashTimingEngine.lastID++;
	if (flash.utils.FlashTimingEngine.availableObjects.length == 0)
		flash.utils.FlashTimingEngine.availableObjects.push(new flash.utils.FlashTimingEngine$TimerObject(flash.utils.FlashTimingEngine.lastID, time, repeat, callBack));
	var t = flash.utils.FlashTimingEngine.availableObjects.pop();
	t.id = flash.utils.FlashTimingEngine.lastID;
	t.time = time;
	t.timeLeft = time;
	t.repeat = repeat;
	t.callBack = callBack;
	flash.utils.FlashTimingEngine.currentTimers[flash.utils.FlashTimingEngine.lastID] = t;
	return flash.utils.FlashTimingEngine.lastID;
};

flash.utils.FlashTimingEngine.addToPool = function(timerObject) {
	flash.utils.FlashTimingEngine.availableObjects.push(timerObject);
};

flash.utils.FlashTimingEngine.stopTimer = function(key) {
	flash.utils.FlashTimingEngine.addToPool(flash.utils.FlashTimingEngine.currentTimers[key]);
	flash.utils.FlashTimingEngine.currentTimers[key] = null;
	delete flash.utils.FlashTimingEngine.currentTimers[key];
};

flash.utils.FlashTimingEngine.logAPIWarning = function(msg) {
	if (flash.utils.FlashTimingEngine.showAPIWarnings) {
		console.log(msg + "\n" + new Error("", 0).stack);
	}
};

flash.utils.FlashTimingEngine.ENTER_EVENT = new flash.events.Event("enterFrame", false, false);

flash.utils.FlashTimingEngine.TIMER_EVENT = new flash.events.TimerEvent("timer", false, false);

flash.utils.FlashTimingEngine.TIMER_COMPLETE_EVENT = new flash.events.TimerEvent("timerComplete", false, false);

flash.utils.FlashTimingEngine.root;

flash.utils.FlashTimingEngine.frameTime;

flash.utils.FlashTimingEngine.framePerSecond;

flash.utils.FlashTimingEngine.startFrameTime = 0;

flash.utils.FlashTimingEngine.lastFrameTime = 0;

flash.utils.FlashTimingEngine.currentTimers = new flash.utils.Dictionary(false);

flash.utils.FlashTimingEngine.stopFlag = false;

flash.utils.FlashTimingEngine.lastID = 0;

flash.utils.FlashTimingEngine.availableObjects = [];

flash.utils.FlashTimingEngine.currentTime = 0;

flash.utils.FlashTimingEngine.showAPIWarnings = true;


flash.utils.FlashTimingEngine.className = "flash.utils.FlashTimingEngine";

flash.utils.FlashTimingEngine.getRuntimeDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.events.MouseEvent');
	p.push('trace');
	p.push('flash.media.Sound');
	p.push('flash.utils.FlashTimingEngine');
	p.push('flash.utils.RequestAnimationFrame');
	p.push('flash.display.Stage');
	p.push('flash.net.URLRequest');
	p.push('flash.system.Capabilities');
	p.push('flash.display.BitmapData');
	p.push('flash.events.EventDispatcher');
	p.push('flash.events.Event');
	return p;
};

flash.utils.FlashTimingEngine.getStaticDependencies = function(t) {
	var p;
	p = [];
	p.push('flash.utils.Dictionary');
	p.push('flash.events.Event');
	p.push('flash.events.TimerEvent');
	return p;
};

flash.utils.FlashTimingEngine.injectionPoints = function(t) {
	return [];
};
flash.utils.FlashTimingEngine$TimerObject = function(id, time, repeat, callBack) {
	this.timeLeft = 0;
	this.time = time;
	this.timeLeft = time;
	this.repeat = repeat;
	this.callBack = callBack;
};

