#pragma strict
var ourText : TextMesh;
var updateText : boolean = false;

function Start () {
	ourText.text = "How to play:\nA/D to move. Space/W to jump.\nClick to shoot.\n\n\nCollect 15 gems to win the game.\n\nBut beware, your oxygen will run out!\n\n...also avoid getting hit on your head.";
	yield WaitForSeconds(3.5);
	updateText = true;
}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		if(!updateText){
			updateText = true;
		}
	}
	
    if(updateText){
    	if(ourText.color.a >= 0){
    		ourText.color.a-=0.05;
    	}
    	else{
    		Destroy(transform.gameObject);
    	}
    
    }

}

