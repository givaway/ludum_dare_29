using UnityEngine;
using System.Collections;

public class CharacterMovement : MonoBehaviour {

	public float movementSpeed;
	public float jumpForce;
	bool left = false;
	bool right = false;
	Vector3 velocity_ref = Vector3.zero;
	Vector3 velocity = Vector3.zero;
	public bool jumping = true;
	// Update is called once per frame
	void Update () {

		//handle movement left/right.
		if(Input.GetKey(KeyCode.A) && !right){
			//move left
			Vector3 scale = this.transform.localScale;
			scale.x = -1;
			this.transform.localScale = scale;
			this.transform.position -= Vector3.SmoothDamp(velocity,new Vector3(movementSpeed,0,0),ref velocity_ref,0.9f);
			left = false;
		}
		if(Input.GetKey(KeyCode.D) && !left){
			//move right
			Vector3 scale = this.transform.localScale;
			scale.x = 1;
			this.transform.localScale = scale;
			this.transform.position += Vector3.SmoothDamp(velocity,new Vector3(movementSpeed,0,0),ref velocity_ref,0.9f);
			right = false;
		}

		if((Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W))&& !jumping){
			//jump bitch! 
			jumping = true;
			this.rigidbody.AddForce(new Vector3(0,jumpForce,0),ForceMode.Impulse);
		}

	}
	
	void OnCollisionEnter(Collision e)
	{
		Vector3 normal = e.contacts[0].normal;
		Debug.Log(normal);
		if(normal.x > 0f && Mathf.Abs(normal.y)<0.5)
		{
			right = true;
		}
		else if(normal.x < -0f && Mathf.Abs(normal.y)<0.5)
		{
			left = true;
		}
		
		if(jumping && normal.y>0.5)
		{
			jumping = false;
		}
	}
	
}
