#pragma strict

function Start () {
destroyMe();

}

function destroyMe () {
yield WaitForSeconds(3.5);
Destroy(transform.gameObject);

}