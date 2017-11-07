package 
{
	import flash.utils.getDefinitionByName;
	public function runScript(name:String):Object{
		var ns:Array = name.split("/");
		var cname:String = ns.pop();
		var clzName:String = ns.join(".") + "::" + cname;
		var clz:Class = getDefinitionByName(clzName) as Class;
		return new clz;
	}

}