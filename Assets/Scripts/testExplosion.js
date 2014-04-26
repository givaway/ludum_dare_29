#pragma strict
var objectToTrigger : Rigidbody[];
var triggered : boolean;
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
	 
	for(var i : int = 0;i<objectToTrigger.Length;i++){
		triggered = true;
		objectToTrigger[i].useGravity = true;
		objectToTrigger[i].isKinematic = false; 
		objectToTrigger[i].AddForce(Vector3(Random.Range(-5,5),Random.Range(-5,5),Random.Range(-5,5)));
		}	 
	}
}

