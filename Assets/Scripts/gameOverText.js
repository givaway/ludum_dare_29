﻿#pragma strict
var ourText : TextMesh;
var updateText : boolean = false;
var ourNum : float = 1;
var reduceScale : boolean = false;

function Start () {
	if(Random.Range(0,2)>=1){
	ourText.text = "You and your\nfriends are dead.\n\nClick to try again.";
	}
	else{
	ourText.text = "All of your\nbase are belong\nto us.\n\nClick to try again.";
	}
	StartCoroutine(doTimeScale());
	yield WaitForSeconds(8.5);
	updateText = true;
}

function doTimeScale(){
	while(true){
		if(ourNum >= 0.015){
			Time.timeScale = ourNum;
			ourNum-=0.015;
		}
		else{
			Time.timeScale = 0;
		}
		yield;
	}
}

function Update () {
	if(Input.GetMouseButtonDown(0)){
		if(!updateText){
			updateText = true;
    		Time.timeScale = 1;
    		Application.LoadLevel("exanosGoGo"); 
    		Destroy(transform.gameObject);
		}
	}
	
    if(updateText){
    	if(ourText.color.a >= 0){
    		ourText.color.a-=0.05;
    	}
    	else{
    		Time.timeScale = 1;
    		Application.LoadLevel("exanosGoGo"); 
    		Destroy(transform.gameObject);
    	}
    
    }

}

