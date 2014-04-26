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
		if(Vector3.Distance(follow.transform.position,this.transform.position)>radius)
		{
			Destroy(this.gameObject);
		}
	}
}
