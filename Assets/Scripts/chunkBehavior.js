#pragma strict
var characterPos : Transform;
var terrainGenerator : terrainGenerator;
var xDestructor : float; // where to destroy this chunk
var spawnArea : float;  // where to spawn the new chunk.
var xSpawnArea : float; //where this chunk is when it spawns a new chunk.
var haveSpawned : boolean = false;
var caveInArea : GameObject;


function Start () { 
	caveInArea.rigidbody.active = false;
	caveInArea.renderer.enabled = false;
	//all caveInArea is debug code temp
	spawnArea = transform.position.x - 20;
	xSpawnArea = transform.position.x + 20;
	xDestructor = transform.position.x + 60;  
}


function Update(){
//simulate cave in
	if(characterPos.position.x >= xDestructor - 35){
		startCaveIn();
	}
	
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

function startCaveIn(){
	//
	caveInArea.rigidbody.active = true;
	caveInArea.renderer.enabled = true;


}