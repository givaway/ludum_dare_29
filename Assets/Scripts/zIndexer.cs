using UnityEngine;
using System.Collections;

public class zIndexer : MonoBehaviour {
	public int renderQueueIndex = 3000;
	public int ourType = 0;
	void Start () {
		if(ourType != 1){
		gameObject.renderer.material.renderQueue = renderQueueIndex;
		}
		if(ourType == 1){
			particleSystem.renderer.sortingLayerName = "Foreground";
		}
	}
	
	
}
