#pragma strict
var objectToTrigger : Rigidbody[];
var triggered : boolean;
//just make this a looping statement, trigger multiple stallagtites. Also have boolean to turn it on/off in start method.

function OnCollisionEnter(Col : Collision){
	if(Col.collider.tag == "Player"){
	yield WaitForSeconds(1.5);
	triggerObject();
	}
}

function triggerObject(){

	if(!triggered){ 
	for(var i : int = 0;i<objectToTrigger.Length;i++){
		triggered = true;
		objectToTrigger[i].useGravity = true;
		objectToTrigger[i].collider.isTrigger = true;
		objectToTrigger[i].isKinematic = false;  
		objectToTrigger[i].tag = "Death";
		yield WaitForSeconds(0.25);
		objectToTrigger[i].collider.isTrigger = false;
		}	 
	}
}