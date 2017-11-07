
package
{
	import parser.Script;
	public class ScriptMain
	{
		public function ScriptMain()
		{			
			trace("from ascript");
			var scripts:Array = ["core/LoadScript", "core/OpenUIScript"];
			for (var i:int = 0; i < scripts.length;i++ ){
				runScript(scripts[i]);
			}
		}
	}
}

