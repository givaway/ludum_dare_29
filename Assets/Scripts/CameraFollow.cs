using UnityEngine;
using System.Collections;

public class CameraFollow : MonoBehaviour {
	public GameObject follow;
	// Use this for initialization
	float velocity_ref = 0;
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		Vector3 pos = this.transform.position;
		pos.x = Mathf.SmoothDamp(pos.x,follow.transform.position.x,ref velocity_ref,0.4f);
		//pos.y = Mathf.SmoothDamp(pos.y,follow.transform.position.y,ref velocity_ref,0.2f);
		this.transform.position = pos;
	}
}
