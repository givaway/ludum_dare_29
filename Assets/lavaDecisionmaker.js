#pragma strict

function Start () {
	if(Random.Range(0,5)>=4){
		Destroy(transform.gameObject);
	}
	else{
		if(Random.Range(0,5)>=4){
			transform.localPosition.z = -2;
		}
	}
	
	
}
