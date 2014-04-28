#pragma strict
var cameraToFollow : Transform;
var ourTransform : Transform;
var victoryGems : int;
var currentGems : int;
var currentOxygen : int;
var ourText : TextMesh;
var instantiated : boolean = false;
var deathMessage : GameObject;
var winMessage : GameObject;

function Start(){
	Time.timeScale = 1.0;
	currentOxygen = 500; 
	ourText.text = "Gems: " + currentGems.ToString() + "\nOxygen: " + currentOxygen.ToString();
}

function Update () {
	ourTransform.position.x = cameraToFollow.transform.position.x;
	ourTransform.position.y = cameraToFollow.transform.position.y;
}

function removeOxygen(amountToRemove : int){
	currentOxygen-= amountToRemove;
	ourText.text = "Gems: " + currentGems.ToString() + "\nOxygen: " + currentOxygen.ToString();
	if(currentOxygen <= 0){
		endGame();
	}

}

function addGems(amountToAdd : int){
	currentGems++;
	currentOxygen+= 60;
	ourText.text = "Gems: " + currentGems.ToString() + "\nOxygen: " + currentOxygen.ToString();
	if(currentGems >= victoryGems){
		winGame();
	}
}

function endGame(){
	if(!instantiated){
		var newMsg : GameObject = Instantiate(deathMessage,Vector3(0,0,0),Quaternion.identity);
		newMsg.transform.parent = transform;
		newMsg.transform.localPosition = Vector3(-1.35,0,0);
		//victory conditions have been met
		instantiated = true;
	}
}


function winGame(){
	var winMsg : GameObject = Instantiate(winMessage,Vector3(0,0,0),Quaternion.identity);
	winMsg.transform.parent = transform;
	winMsg.transform.localPosition = Vector3(-1.35,0,0);
	//victory conditions have been met
}



