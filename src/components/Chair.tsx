import { useGLTF } from "@react-three/drei";

export function Chair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/chair.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.6}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chair_Chair_0.geometry}
            material={materials.Chair}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={113.46}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chair.gltf");
