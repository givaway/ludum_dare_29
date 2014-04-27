using UnityEngine;
using System.Collections;

public class Billboard : MonoBehaviour {

	// Use this for initialization
	void Start () {
		this.transform.forward = this.transform.right;
	}
	
	// Update is called once per frame
	void Update () {
		transform.LookAt(Camera.main.transform.position);
		transform.eulerAngles = new Vector3(transform.eulerAngles.x+180,transform.eulerAngles.y,transform.eulerAngles.z);
	}
}
