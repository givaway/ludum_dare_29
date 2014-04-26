using UnityEngine;
using System.Collections;

public class CharacterMovement : MonoBehaviour {

	public float movementSpeed;
	public Transform ourCharacter;
	private Vector3 ourPos;
	private Vector3 newPos;
	public float jumpForce;

	// Update is called once per frame
	void Update () {

		//handle movement left/right.
		if(Input.GetKey(KeyCode.A)){
			//move left
			ourPos = transform.position;
			transform.position = new Vector3(ourPos.x - movementSpeed,ourPos.y,ourPos.z);  
		}
		if(Input.GetKey(KeyCode.D)){
			//move right	 
			ourPos = transform.position;
			transform.position = new Vector3(ourPos.x + movementSpeed,ourPos.y,ourPos.z);  
		}

		if(Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W)){
			//jump bitch! 
			rigidbody.AddForce (new Vector3(0,jumpForce*100,0));
		}

	}
}
