#pragma strict
var gemAmount : int;
var gemToMake : GameObject;	

function Start () {
	spawnGems(gemAmount);
}

function spawnGems(amountToSpawn : int){
	for(var i : int = 0;i<amountToSpawn;i++){
		Instantiate(gemToMake,Vector3(Random.Range(-2000,2000),Random.Range(-2000,2000),0),Quaternion.identity);
	}
}