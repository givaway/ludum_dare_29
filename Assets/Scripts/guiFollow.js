#pragma strict
var cameraToFollow : Transform;
var ourTransform : Transform;
var victoryGems : int;
var currentGems : int;
var ourText : TextMesh;

function Start(){
	ourText.text = currentGems.ToString();
}

function Update () {
	ourTransform.position = cameraToFollow.transform.position;
}

function addGems(amountToAdd : int){
	currentGems++;
	ourText.text = currentGems.ToString();
	if(currentGems >= victoryGems){
		endGame();
	}
}

function endGame(){
	//victory conditions have been met

}

