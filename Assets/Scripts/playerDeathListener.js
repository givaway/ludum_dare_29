#pragma strict

var ourTransform : Transform;
var guiFollow : guiFollow; //also reports/stores gems.
var time : float; 

function Update(){
	time += 1*Time.deltaTime; 
	if(time >= 2){
		guiFollow.removeOxygen(1);
		time = 0; 
	}

}

function OnTriggerEnter(col:Collider){
	if(col.collider.tag == "Death"){
		if(ourTransform.position.y > col.collider.transform.position.y){
		//death doesnt happen, we're on top of death..so we conquer it or some bullshit.
		
		print("You avoided death by stepping above it.");
		}	
		else{
			print(col.collider.rigidbody.velocity.y);
			if(col.collider.rigidbody.velocity.y < -1){ // try to tweak with this 
				//WE DIED BITCH, PSYCHOSOCIAL Oo
				guiFollow.endGame();
				print("DEATH OCCURS HERE, play better n00b");
			}
		}
	}
	
	
	if(col.collider.tag == "Gem"){
		guiFollow.addGems(1);
		Destroy(col.collider.gameObject);
	
	}
}