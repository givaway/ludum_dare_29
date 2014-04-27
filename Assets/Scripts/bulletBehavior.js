#pragma strict
var timerScript : timerScript;
var instantiated : boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col:Collider){
	if(col.collider.name == "1x1" && !instantiated){ //make this layer based in the future, name based wont work for all the cool things we're adding.
	//instantiate the new object
	instantiated = true;
	var newObject = Instantiate(col.collider.gameObject, col.collider.transform.position,Quaternion.identity);
	//set up its name and physics plox
	newObject.gameObject.AddComponent(Rigidbody);
	newObject.gameObject.AddComponent("timerScript");
	newObject.name = "cloneTerrain";
	newObject.tag = "Death";
	//good job, now apply constraints =p 	
	newObject.rigidbody.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY;
	//And destroy all the shit.
	Destroy(col.collider.gameObject);
	Destroy(transform.gameObject);
	//dont accidently spawn another one, now! 
	
//IF I code it right, this method should:
//get the object
//clone the object with physics
//destroy the OG object
//destroy the bullet.
}
else{//destroy bullet
	Destroy(transform.gameObject);
	if(col.collider.name == "cloneTerrain"){
	col.transform.position.z-=0.1;
	}
}

}