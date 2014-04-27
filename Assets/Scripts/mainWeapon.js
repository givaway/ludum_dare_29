var character : Transform;
var bullet : Transform; 
var canShoot : boolean = true;
private var spawnPt : GameObject;
 
function Update(){   
  if(Input.GetMouseButton(0) && canShoot){
    var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    var hit : RaycastHit;
    var projectile : Transform;
    if (Physics.Raycast (ray, hit, 100)){
      Debug.DrawLine (character.position, hit.point); //mmmEditor things
     
      if(hit.point.x < transform.position.x){
      projectile = Instantiate(bullet, Vector3(character.position.x - 1,character.position.y+.5,character.position.z), hit.transform.rotation); 
      }
      else{
 
      projectile = Instantiate(bullet, Vector3(character.position.x + 1,character.position.y+.5,character.position.z), hit.transform.rotation); 
      }
      // turn the projectile to hit.point
      projectile.transform.LookAt(hit.point); 
      // accelerate it
      projectile.rigidbody.velocity = projectile.transform.forward * 10;
      canShoot = false;
      reloadGun();
    }
  }
}

function reloadGun(){

	yield WaitForSeconds(0.15);
	canShoot = true;
}