using UnityEngine;
using System.Collections;

public class ChunkBehavior : MonoBehaviour {

	// Use this for initialization
	public GameObject gemToMake;
	public int radius = 0;
	public GameObject follow; 
	private GameObject ourGem;
	void Start () {

		if(Random.Range(0,50)>=35){ 
			 ourGem = (GameObject)GameObject.Instantiate(gemToMake,new Vector3(0f,0f,0f),Quaternion.identity);
		   	 ourGem.transform.parent = transform;
			 ourGem.transform.localPosition = new Vector3(Random.Range(-10,10),Random.Range(-10,10),-0.45f);
		}
	}
	
	// Update is called once per frame
	void Update () {
		if(Mathf.Abs(this.transform.position.x - follow.transform.position.x)>radius ||  Mathf.Abs(this.transform.position.y - follow.transform.position.y)>radius)
		{
			Destroy(this.gameObject);
		}
	}
}
