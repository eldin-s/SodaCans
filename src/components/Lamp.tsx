import React from "react";
import { useGLTF } from "@react-three/drei";

export function Lamp() {
  const { nodes, materials } = useGLTF("/lamp.gltf") as any;
  return (
    <group dispose={null} scale={0.007}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.IkeaLamp}
        position={[0, 0, 0]}
        rotation={[Math.PI * 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/lamp.glb");
