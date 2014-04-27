using UnityEngine;
using System.Collections;

public class zIndexer : MonoBehaviour {
	public int renderQueueIndex = 3000;
	void Start () {
		gameObject.renderer.material.renderQueue = renderQueueIndex;
	}
	
	
}
