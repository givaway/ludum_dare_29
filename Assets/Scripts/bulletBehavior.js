#pragma strict
var timerScript : timerScript;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col:Collider){
	if(col.collider.name == "1x1"){
print("I hit: " + col.collider.name);
	var newObject = Instantiate(col.collider.gameObject, col.collider.transform.position,Quaternion.identity);
	newObject.gameObject.AddComponent(Rigidbody);
	newObject.gameObject.AddComponent("timerScript");
	Destroy(col.collider.gameObject);
	Destroy(transform.gameObject);
//get the object
//clone the object with physics
//destroy the object
//destroy the bullet.
}

}