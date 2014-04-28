using UnityEngine;
using System.Collections;

public class CameraFollow : MonoBehaviour {
	public GameObject follow;
	// Use this for initialization
	float z;
	Vector3 velocity_ref = Vector3.zero; 
	void Start () {
		z = this.transform.position.z;
	}
	
	// Update is called once per frame
	void Update () {
		Vector3 pos = this.transform.position;
		pos = Vector3.SmoothDamp(pos,follow.transform.position,ref velocity_ref,0.4f);
		pos.z = z;
		this.transform.position = pos;
	}
}
