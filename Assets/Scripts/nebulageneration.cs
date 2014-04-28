using UnityEngine;
using System.Collections;

public class nebulageneration : MonoBehaviour {

	public Texture[] textures;
	public int density = 3;
	GameObject[] g;
	// Use this for initialization
	void Start () { 
		density = 15;
		Random.seed = Random.Range(0,53500);
		g = new GameObject[density];
		for(int i = 0; i<density; i++)
		{
			g[i] = (GameObject)GameObject.Instantiate(Resources.Load("NebulaTemp",typeof(GameObject)));
			g[i].transform.eulerAngles = Random.insideUnitSphere*360;
			g[i].renderer.material.mainTexture = textures[(int)Mathf.Floor(Random.Range(0,textures.GetLength(0)))];
			Vector3 position = this.transform.position + (Random.insideUnitSphere*(this.transform.localScale.x/2));
			g[i].transform.position = position;
			g[i].transform.localScale = this.transform.localScale + new Vector3(10,-3,0);
			g[i].transform.parent = this.transform;
		}
	}
	
	// Update is called once per frame
	void Update () {
		foreach(GameObject go in g)
		{
			go.transform.rotation = Quaternion.LookRotation(Camera.main.transform.forward);
			Color sc = go.renderer.material.color;
			sc.a = (Vector3.Distance(Camera.main.transform.position,this.transform.position)-Vector3.Distance(Camera.main.transform.position,go.transform.position))/this.transform.localScale.x;
			go.renderer.material.color = sc;
			
		}
	}
}
