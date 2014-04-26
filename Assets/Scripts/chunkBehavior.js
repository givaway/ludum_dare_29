#pragma strict
var characterPos : Transform;
var terrainGenerator : terrainGenerator;
var xDestructor : float; // where to destroy this chunk
var spawnArea : float;  // where to spawn the new chunk.
var xSpawnArea : float; //where this chunk is when it spawns a new chunk.
var haveSpawned : boolean = false;


function Start () { 
	spawnArea = transform.position.x - 20;
	xSpawnArea = transform.position.x + 20; 
	xDestructor = transform.position.x + 30; 
	Debug.LogError(characterPos.position.x);
	Debug.LogError(spawnArea+"\n"+xSpawnArea);
}


function Update(){
	if(characterPos.position.x >= xDestructor){
	Destroy(transform.gameObject);
	}
	if(characterPos.position.x >= spawnArea){
		if(!haveSpawned){
			terrainGenerator.createNewChunk(xSpawnArea);
			haveSpawned = true;
		}
	
	}
	 
}