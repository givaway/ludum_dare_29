#pragma strict
var lavaToSpawn : GameObject;
var triggered : boolean;
var lava : GameObject;
//just make this a looping statement, trigger multiple stallagtites. Also have boolean to turn it on/off in start method.
function Start(){
	triggered = false;
}
function OnCollisionEnter(Col : Collision){
	if(Col.collider.tag == "Player"){
	triggerObject();
	}
}

function triggerObject(){

		if(!triggered){ 
			triggered = true;
			spawnLava();
	}
}

function spawnLava(){
	Instantiate(lava, lavaToSpawn.transform.position, Quaternion.Euler(-90,0,0));
}