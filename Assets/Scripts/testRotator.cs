﻿using UnityEngine; using System.Collections;

public class testRotator : MonoBehaviour {
	
	public Transform myTransform; public float rotationSpeed = 100.0f; public int dir = 1;
	
	// Use this for initialization 
	
	void Start () { myTransform = transform; }
	
	// Update is called once per frame
	
	void Update () { 
		myTransform.Rotate(0, Time.deltaTime *rotationSpeed * dir, Time.deltaTime *rotationSpeed * dir, Space.World); }
	
}