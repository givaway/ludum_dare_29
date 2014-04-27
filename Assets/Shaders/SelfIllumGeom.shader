Shader "My Shaders/AlphaSelfIllum with zwrite" {
	Properties {
		_Color ("Color Tint", Color) = (1,1,1,1)
		_MainTex ("SelfIllum Color (RGB) Alpha (A)", 2D) = "white"
	}
	Category {
	   Lighting On
	   ZWrite on
	   Cull Back
	   Blend SrcAlpha OneMinusSrcAlpha
	   SubShader {
            Material {
	           Emission [_Color]
            }
            Pass {
	           SetTexture [_MainTex] {
	                  Combine Texture * Primary, Texture * Primary
                }
            }
        } 
    }
}