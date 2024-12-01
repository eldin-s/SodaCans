import React from "react";
import { useGLTF } from "@react-three/drei";

export function Desk({ scale = 0.6, ...props }) {
  const { nodes, materials } = useGLTF("/desk.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group scale={scale}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.MetalBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.DeskWood}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/desk.gltf");
