---
layout: post
category : h5
tagline: ""
tags : [laya,h5]
---

腊鸭支持unity场景导出unity3d能用的格式。但是用起来发现问题很多。
首先导入插件的时候要选择no thanks。而且必须用unity5.6版本。
这个插件支持整个场景导出，和所有场景上的gameobject独立导出。这2个方案都感觉不太好用。
因为常用的是导出所有prefab，但是腊鸭是不支持的，所以自己修改了一个版本，替换LayaAir3D.cs文件即可。
增加的代码如下


```cs
if (GUILayout.Button("prefab导出", GUILayout.Height(26)))
		{
			exportResourcePrefab(false);
		}
```

```cs
private static void exportResourcePrefab(bool isDebug)
	{
		exportResource(false);
		List<string> paths = new List<string>();
		doFiles(Application.dataPath,paths);
		Dictionary<string, GameObject> path2gameobject = new Dictionary<string, GameObject>();
		foreach(string path in paths)
		{
			string rpath = path.Replace(Application.dataPath, "Assets");
			GameObject go = (GameObject)AssetDatabase.LoadAssetAtPath(rpath, typeof(GameObject));
			path2gameobject.Add(rpath,go);
		}

		Debug.Log(" -- LayaAir3D UnityPlugin 修改版" + version + " -- ");

		if (SAVEPATH != null && SAVEPATH.Length != 0 || isDebug)
		{
			LayaExport.DataManager.SAVEPATH = SAVEPATH;
			
			Scene activeScene = SceneManager.GetActiveScene();
			var sceneName = activeScene.name;
			sceneName = LayaExport.DataManager.cleanIllegalChar(sceneName, heightLevel: true);
			if (sceneName == "")
			{
				sceneName = "layaScene";
			}
			string text = "";
			if (CustomizeDirectory && CustomizeDirectoryName != "")
			{
				CustomizeDirectoryName = LayaExport.DataManager.cleanIllegalChar(CustomizeDirectoryName, heightLevel: true);
				text = "/" + CustomizeDirectoryName;
			}
			else
			{
				text = "/LayaScene_prefab_" + sceneName;
			}
			LayaExport.DataManager.SAVEPATH += text;
			Dictionary<KeyValuePair<string, GameObject>, JSONObject> dictionary = new Dictionary<KeyValuePair<string, GameObject>, JSONObject>();
			
			foreach(KeyValuePair<string,GameObject> pair in path2gameobject)
			{
				Dictionary<GameObject, string> item = new Dictionary<GameObject, string>();
				List<LayaExport.DataManager.ComponentType> list = LayaExport.DataManager.componentsOnGameObject(pair.Value);
				checkChildIsLegal(pair.Value, isTopNode: true);
				if (((!OptimizeGameObject && !IgnoreNullGameObject) || list.Count > 1 || curNodeHasLegalChild))
				{
					JSONObject jSONObject = new JSONObject(JSONObject.Type.OBJECT);
					jSONObject.AddField("type", "Sprite3D");
					JSONObject jSONObject2 = new JSONObject(JSONObject.Type.OBJECT);
					JSONObject jSONObject3 = jSONObject2;
					activeScene = SceneManager.GetActiveScene();
					jSONObject3.AddField("name", activeScene.name);
					jSONObject.AddField("props", jSONObject2);
					JSONObject jSONObject4 = new JSONObject(JSONObject.Type.OBJECT);
					Vector3 val = new Vector3();
					Quaternion val2 = new Quaternion();
					Vector3 val3 = new Vector3(1, 1, 1);
					JSONObject jSONObject5 = new JSONObject(JSONObject.Type.ARRAY);
					jSONObject5.Add(val.x);
					jSONObject5.Add(val.y);
					jSONObject5.Add(val.z);
					jSONObject4.AddField("translate", jSONObject5);
					JSONObject jSONObject6 = new JSONObject(JSONObject.Type.ARRAY);
					jSONObject6.Add(val2.x);
					jSONObject6.Add(val2.y);
					jSONObject6.Add(val2.z);
					jSONObject6.Add(val2.w);
					jSONObject4.AddField("rotation", jSONObject6);
					JSONObject jSONObject7 = new JSONObject(JSONObject.Type.ARRAY);
					jSONObject7.Add(val3.x);
					jSONObject7.Add(val3.y);
					jSONObject7.Add(val3.z);
					jSONObject4.AddField("scale", jSONObject7);
					jSONObject.AddField("customProps", jSONObject4);
					JSONObject jSONObject8 = new JSONObject(JSONObject.Type.ARRAY);
					jSONObject.AddField("child", jSONObject8);
					string gameObjectPath = sceneName;
					LayaExport.DataManager.getGameObjectData(pair.Value.gameObject, gameObjectPath, jSONObject8);
					dictionary.Add(pair, jSONObject);
				}
			}

			
			foreach(KeyValuePair<KeyValuePair<string, GameObject>, JSONObject> item in dictionary)
			{
				string keypath = item.Key.Key;
				string[] patharr = keypath.Split("\\".ToCharArray());
				keypath = string.Join("_", patharr, 1, patharr.Length - 2);
				if (keypath.Length>0)
				{
					keypath += "_";
				}
				text = LayaExport.DataManager.SAVEPATH + "/" + keypath +LayaExport.DataManager.cleanIllegalChar(item.Key.Value.name, heightLevel: true) + ".lh";
				Util.FileUtil.saveFile(text, item.Value);
			}
			Debug.Log(1);
		}
		else
		{
			Debug.LogWarning("LayaUnityPlugin : Please check exporting path !");
		}
	}

	public static bool curNodeHasLegalChild = false;
	public static void checkChildIsLegal(GameObject gameObject, bool isTopNode)
	{
		if (isTopNode)
		{
			curNodeHasLegalChild = false;
		}
		if (gameObject.transform.childCount <= 0)
		{
			return;
		}
		for (int i = 0; i < gameObject.transform.childCount; i++)
		{
			GameObject gameObject2 = gameObject.transform.GetChild(i).gameObject;
			if (LayaExport.DataManager.componentsOnGameObject(gameObject2).Count > 1)
			{
				curNodeHasLegalChild = true;
			}
			checkChildIsLegal(gameObject2, isTopNode: false);
		}
	}
```

