#pragma strict
var cameraToFollow : Transform;
var ourTransform : Transform;
var victoryGems : int;
var currentGems : int;
var currentOxygen : int;
var ourText : TextMesh;

function Start(){
	currentOxygen = 500;
	ourText.text = "Gems: " + currentGems.ToString() + "\nOxygen: " + currentOxygen.ToString();
}

function Update () {
	ourTransform.position = cameraToFollow.transform.position;
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
		endGame();
	}
}

function endGame(){
	//victory conditions have been met

}

