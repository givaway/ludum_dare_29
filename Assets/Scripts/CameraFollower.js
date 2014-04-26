#pragma strict

	var ourPos : Transform;
	var charPos : Transform;
	
function Start () {
	ourPos = transform;
}

function Update () {
	ourPos.position.x = charPos.position.x;
}