---
layout: post
category : h5
tagline: ""
tags : [laya,h5]
---

腊鸭基于导航网格的寻路。看官方有个寻路例子。但是进去一看，还是2d基于格子的寻路。这个明显不是3d的寻路。3d都是用navmesh导航网格寻路的。用三角形寻路。
首先写个unity3d插件，导出navmesh数据给腊鸭用。然后腊鸭再加载这个文件进行寻路。

u3d插件代码

```cs
using System.IO;
using UnityEditor;
using UnityEngine.SceneManagement;
using UnityEngine;
using UnityEngine.AI;


//navmesh导出数据
public class NavMeshExport : MonoBehaviour
{
	[MenuItem("NavMesh/Export")]
	static void Export()
	{
		Debug.Log("NavMesh Export Start");

		NavMeshTriangulation navMeshTriangulation = NavMesh.CalculateTriangulation();

		//文件路径 路径文件夹不存在会报错 
		string path = Application.dataPath + "/obj/" + SceneManager.GetActiveScene().name + ".obj";

		//新建文件
		StreamWriter streamWriter = new StreamWriter(path);

		//顶点  
		for (int i = 0; i < navMeshTriangulation.vertices.Length; i++)
		{
			streamWriter.WriteLine("v  " + (-1*navMeshTriangulation.vertices[i].x) + " " + navMeshTriangulation.vertices[i].y + " " + navMeshTriangulation.vertices[i].z);
		}

		streamWriter.WriteLine("g pPlane1");

		//索引  
		for (int i = 0; i < navMeshTriangulation.indices.Length;)
		{
			streamWriter.WriteLine("f " + (navMeshTriangulation.indices[i] + 1) + " " + (navMeshTriangulation.indices[i + 1] + 2) + " " + (navMeshTriangulation.indices[i + 1] + 1));
			i = i + 3;
		}

		streamWriter.Flush();
		streamWriter.Close();


		AssetDatabase.Refresh();

		Debug.Log("NavMesh Export Success");
	}
}
```

<a href='https://matrix3d.github.io/assets/html5/layanav/'>测试demo</a>

