using UnityEngine;
using System.Collections;

public class CharacterMovement : MonoBehaviour {
	Animator animation;
	public float movementSpeed;
	public float jumpForce;
	bool left = false;
	bool right = false; 
	Vector3 velocity_ref = Vector3.zero;
	Vector3 velocity = Vector3.zero;
	public bool jumping = true;
	public float stamina = 10; 

	// Update is called once per frame
	void Start()
	{ 
		animation = GetComponent<Animator>();
	}
	void Update () {
		if(Time.timeScale >= 0.99){

		//handle movement left/right.
		if(Input.GetKey(KeyCode.A)){
			//move left
			Vector3 scale = this.transform.localScale;
			scale.x = -1;
			this.transform.localScale = scale;
			stamina -= Input.GetKey(KeyCode.LeftShift) && stamina>0?1*Time.deltaTime:0;
			animation.SetFloat("speed",Input.GetKey(KeyCode.LeftShift)?stamina>0?1.5f:1f:1f);
			this.transform.position -= Vector3.SmoothDamp(velocity,new Vector3(Input.GetKey(KeyCode.LeftShift)?stamina>0?movementSpeed*1.5f:movementSpeed:movementSpeed,0,0),ref velocity_ref,0.9f);
			left = false;
		}
		else if(Input.GetKey(KeyCode.D)){
			//move right
			Vector3 scale = this.transform.localScale;
			scale.x = 1;
			stamina -= Input.GetKey(KeyCode.LeftShift) && stamina>0?1*Time.deltaTime:0;
			this.transform.localScale = scale;
			animation.SetFloat("speed",Input.GetKey(KeyCode.LeftShift)?stamina>0?1.5f:1f:1f);
			this.transform.position += Vector3.SmoothDamp(velocity,new Vector3(Input.GetKey(KeyCode.LeftShift)?stamina>0?movementSpeed*1.5f:movementSpeed:movementSpeed,0,0),ref velocity_ref,0.9f);
			right = false;
		}
		else
		{
			stamina += stamina<10?1*Time.deltaTime:0;
			animation.SetFloat("speed",0);
		}
		if((Input.GetKeyDown(KeyCode.Space) || Input.GetKeyDown(KeyCode.W))&& !jumping){
			//jump bitch! 
			jumping = true;
			this.rigidbody.AddForce(new Vector3(0,Input.GetKey(KeyCode.LeftShift) && (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.D))?jumpForce/2:jumpForce,0),ForceMode.Impulse);
		}
	}
}
	
	void OnCollisionEnter(Collision e)
	{
		Vector3 normal = e.contacts[0].normal;
		//Debug.Log(normal);
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
	void OnCollisionExit(Collision e)
	{
		Vector3 normal = e.contacts[0].normal;
		if(jumping)
		{
			left = false;
			right = false;
			if(normal.x > 0f )
			{
				right = true;
			}
			else if(normal.x < -0f )
			{
				left = true;
			}
		}
	}
	
}
