#pragma strict
var ourChunks : GameObject[];
var recentChunk : chunkBehavior;
var recentChunkObject : GameObject;
var characterPos : Transform;

function Start () {

}

function createNewChunk(xToSpawn : float){
	recentChunkObject = Instantiate(ourChunks[Random.Range(0,ourChunks.Length)],Vector3(xToSpawn,0,0),Quaternion.identity);
	recentChunk = recentChunkObject.GetComponent("chunkBehavior");
	recentChunk.terrainGenerator = this;
	recentChunk.characterPos = characterPos;
} 

function startSpawn(){
//handle default spawns, we'll deal with it later =)

}

 