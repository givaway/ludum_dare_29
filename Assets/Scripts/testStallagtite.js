#pragma strict
var objectToTrigger : GameObject;
var triggered : boolean;
//just make this a looping statement, trigger multiple stallagtites. Also have boolean to turn it on/off in start method.

function OnCollisionEnter(Col : Collision){
	if(Col.collider.tag == "Player"){
	triggerObject();
	}
}

function triggerObject(){
	if(!triggered){
		triggered = true;
		objectToTrigger.rigidbody.useGravity = true;
		objectToTrigger.rigidbody.isKinematic = false; 
		 
	}
}