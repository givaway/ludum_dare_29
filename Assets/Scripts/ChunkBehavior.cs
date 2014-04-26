using UnityEngine;
using System.Collections;

public class ChunkBehavior : MonoBehaviour {

	// Use this for initialization
	public int radius = 0;
	public GameObject follow; 
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Mathf.Abs(this.transform.position.x - follow.transform.position.x)>radius ||  Mathf.Abs(this.transform.position.y - follow.transform.position.y)>radius)
		{
			Destroy(this.gameObject);
		}
	}
}
