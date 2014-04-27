#pragma strict


///All this script is responsible for is deciding wether or not the background elemts load. This can NOT go on the very last backgrounds, only BG 1 and 2.
function Start () {
	if(Random.Range(0,3)==1){
		transform.renderer.enabled = false;
	}
}
