#pragma strict

var ourTransform : Transform;

function OnTriggerEnter(col:Collider){
	if(col.collider.tag == "Death"){
		if(ourTransform.position.y > col.collider.transform.position.y){
		//death doesnt happen, we're on top of death..so we conquer it or some bullshit.
		print("You avoided death by stepping above it.");
		}	
		else{
		//WE DIED BITCH, PSYCHOSOCIAL Oo
		print("DEATH OCCURS HERE, play better n00b");
		}
	}
}