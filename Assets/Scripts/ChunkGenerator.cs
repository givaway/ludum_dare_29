using UnityEngine;
using System.Collections;

public class ChunkGenerator : MonoBehaviour {
	public int seed = 0;
	public int chunkSize = 10;
	public int chunkLoadRadius = 5;
	public GameObject[] chunks;
	public GameObject follow;
	Vector2 lastchunk,currentchunk;
	// Use this for initialization
	void Start () {
		Vector2 chunk_position = new Vector2(Mathf.FloorToInt(follow.transform.position.x/chunkSize),Mathf.FloorToInt(follow.transform.position.y/chunkSize));
		GameObject.Instantiate(chunks[Random.Range(0,chunks.GetLength(0))],new Vector3((chunk_position.x)*chunkSize,chunk_position.y,0),Quaternion.identity);
		GameObject.Instantiate(chunks[Random.Range(0,chunks.GetLength(0))],new Vector3((chunk_position.x+1)*chunkSize,chunk_position.y,0),Quaternion.identity);
		GameObject.Instantiate(chunks[Random.Range(0,chunks.GetLength(0))],new Vector3((chunk_position.x-1)*chunkSize,chunk_position.y,0),Quaternion.identity);
	}
	
	// Update is called once per frame
	void Update () {
		Vector2 chunk_position = new Vector2(Mathf.FloorToInt(follow.transform.position.x/chunkSize),Mathf.FloorToInt(follow.transform.position.y/chunkSize));
		currentchunk = chunk_position;
		if(currentchunk != lastchunk)
		{
			Debug.Log("new Chunk");
			Random.seed = (int)(chunk_position.x+chunk_position.y)+seed;
			if(lastchunk.x>chunk_position.x)
			{
				GameObject.Instantiate(chunks[Random.Range(0,chunks.GetLength(0))],new Vector3((chunk_position.x-1)*chunkSize,lastchunk.y,0),Quaternion.identity);
			}
			if(lastchunk.x<chunk_position.x)
			{
				GameObject.Instantiate(chunks[Random.Range(0,chunks.GetLength(0))],new Vector3((chunk_position.x+1)*chunkSize,chunk_position.y,0),Quaternion.identity);
			}
		}
		lastchunk = currentchunk;
		

	}
}
