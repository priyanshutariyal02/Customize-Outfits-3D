import React, { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import state from "../store";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

//Decal: use for some kind of a texture or a mesh
//useGlTF: to be able to use 3D models
//useTexture: to be able to apply texture

function Shirt() {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');
  const logoTexture = useTexture(snap.logoDecal);//logoTexture: texture which is go in the middle of screen
  const fullTexture = useTexture(snap.fullDecal);//fullTexture:  texture which is go over the entire shirt 

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));
  const stateString = JSON.stringify(snap);

  return (
    <group
      key={stateString}
    >
      <mesh
        castShadow //meaning: it cast shadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}// lambert1 : material used for the Shirt
        material-roughness={1}
        dispose={null}
      >
        {
          snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
            />
          )
        }
        {
          snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              anisotropy={16}
              depthTest={false} //ensure to render on top of  the other objects in the scene
              depthWrite={true}
            />
          )
        }
      </mesh>
    </group>
  )
};
export default Shirt;