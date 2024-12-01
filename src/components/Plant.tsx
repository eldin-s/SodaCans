import React from "react";
import { useGLTF } from "@react-three/drei";

export function Plant() {
  const { nodes, materials } = useGLTF("/plant.gltf") as any;
  return (
    <group dispose={null}>
      <group scale={0.006}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_Flowerpot5_0.geometry}
          material={materials.Flowerpot5}
          position={[0, 29.508, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_Soil_0.geometry}
          material={materials.Soil}
          position={[0, 29.508, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane079_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[6.759, 64.261, 0.198]}
          rotation={[0.001, 0.092, -0.021]}
          scale={9.764}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane080_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[7.775, 64.619, 0]}
          scale={9.764}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane081_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[10.86, 65.232, 2.26]}
          scale={9.764}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[12.104, 64.054, 3.318]}
          scale={9.764}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[5.971, 64.886, 1.901]}
          scale={9.764}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[4.304, 60.456, 1.74]}
          rotation={[0.016, -0.416, -0.023]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[1.782, 59.856, 0.724]}
          rotation={[0.031, -0.418, -0.005]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[2.36, 60.974, 9.754]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[1.282, 60.548, 2.534]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[3.086, 60.281, 0.633]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[3.086, 60.281, 0.633]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[-1.928, 62.186, -6.315]}
          rotation={[0.007, -0.197, -0.019]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[9.907, 60.932, 14.357]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[15.332, 61.042, 14.478]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[12.011, 62.956, 1.632]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_Haworthia_leaf_0.geometry}
          material={materials.Haworthia_leaf}
          position={[12.597, 63.01, 5.583]}
          rotation={[0.001, -0.343, -0.015]}
          scale={8.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks001_Stone_0.geometry}
          material={materials.Stone}
          position={[10.196, 53.726, -23.901]}
          rotation={[-0.24, -0.563, 1.988]}
          scale={6.939}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks002_Stone_0.geometry}
          material={materials.Stone}
          position={[-0.351, 53.53, -25.536]}
          rotation={[-1.56, 0.118, 1.406]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks003_Stone_0.geometry}
          material={materials.Stone}
          position={[21.253, 53.403, 13.344]}
          rotation={[0.03, -0.044, 0.016]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks004_Stone_0.geometry}
          material={materials.Stone}
          position={[19.155, 51.626, 18.031]}
          rotation={[-2.82, -1.068, -2.848]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks005_Stone_0.geometry}
          material={materials.Stone}
          position={[16.126, 52.881, 14.986]}
          rotation={[0.13, 0.327, 0.149]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks006_Stone_0.geometry}
          material={materials.Stone}
          position={[14.667, 52.39, 19.701]}
          rotation={[0.002, -0.747, -0.005]}
          scale={6.912}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks007_Stone_0.geometry}
          material={materials.Stone}
          position={[11.148, 52.524, 23.473]}
          rotation={[-0.065, -0.372, 0.217]}
          scale={5.188}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks008_Stone_0.geometry}
          material={materials.Stone}
          position={[-2.459, 52.117, -20.338]}
          rotation={[0.215, 0.81, -0.382]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks009_Stone_0.geometry}
          material={materials.Stone}
          position={[-5.792, 53.112, -26.013]}
          rotation={[0.075, 0.037, 2.074]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks010_Stone_0.geometry}
          material={materials.Stone}
          position={[-8.501, 53.06, -22.687]}
          rotation={[-0.127, 0.29, -0.131]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks011_Stone_0.geometry}
          material={materials.Stone}
          position={[25.289, 52.939, -3.428]}
          rotation={[0.019, -0.249, 0.001]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks012_Stone_0.geometry}
          material={materials.Stone}
          position={[-13.074, 53.108, -21.372]}
          rotation={[-1.405, -0.118, 0.265]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks013_Stone_0.geometry}
          material={materials.Stone}
          position={[-18.105, 52.221, -19.221]}
          rotation={[-0.538, 0.486, 2.492]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks014_Stone_0.geometry}
          material={materials.Stone}
          position={[-16.157, 52.547, -16.367]}
          rotation={[-2.877, -1.207, 2.378]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks015_Stone_0.geometry}
          material={materials.Stone}
          position={[-20.733, 52.31, -14.561]}
          rotation={[2.509, 1.188, -2.848]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks016_Stone_0.geometry}
          material={materials.Stone}
          position={[-24.626, 52.125, -9.581]}
          rotation={[-2.594, -0.932, -0.699]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks017_Stone_0.geometry}
          material={materials.Stone}
          position={[-23.537, 53.18, 4.546]}
          rotation={[0.205, 0.613, -0.331]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks018_Stone_0.geometry}
          material={materials.Stone}
          position={[-25.939, 52.293, -0.635]}
          rotation={[-0.227, -1.061, -1.057]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks019_Stone_0.geometry}
          material={materials.Stone}
          position={[-3.732, 54.027, -22.816]}
          rotation={[1.536, -0.486, -2.89]}
          scale={4.173}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks020_Stone_0.geometry}
          material={materials.Stone}
          position={[7.443, 52.771, -6.511]}
          rotation={[-0.041, -0.598, 0.128]}
          scale={5.321}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks021_Stone_0.geometry}
          material={materials.Stone}
          position={[-23.543, 52.952, 10.338]}
          rotation={[2.953, -0.627, 0.137]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks022_Stone_0.geometry}
          material={materials.Stone}
          position={[-18.849, 52.396, 15.223]}
          rotation={[0.806, -0.477, -0.414]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks023_Stone_0.geometry}
          material={materials.Stone}
          position={[-16.099, 52.646, 19.887]}
          rotation={[-0.081, 0.972, -1.365]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks024_Stone_0.geometry}
          material={materials.Stone}
          position={[-11.001, 52.444, 23.47]}
          rotation={[-0.331, 0.969, 0.133]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks025_Stone_0.geometry}
          material={materials.Stone}
          position={[-6.363, 51.319, 24.606]}
          rotation={[-1.501, -0.208, -0.37]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks026_Stone_0.geometry}
          material={materials.Stone}
          position={[0.95, 53.594, 15.457]}
          rotation={[-2.927, 0.81, -1.674]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks027_Stone_0.geometry}
          material={materials.Stone}
          position={[14.619, 53.405, 5.829]}
          rotation={[2.954, 1.271, -2.569]}
          scale={4.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks028_Stone_0.geometry}
          material={materials.Stone}
          position={[26.09, 52.291, 0.741]}
          rotation={[0.065, 1.18, 0.234]}
          scale={4.891}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks029_Stone_0.geometry}
          material={materials.Stone}
          position={[0.99, 52.032, 5.657]}
          rotation={[-2.782, -0.567, -3.031]}
          scale={4.39}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks030_Stone_0.geometry}
          material={materials.Stone}
          position={[-4.722, 51.538, -2.135]}
          rotation={[-2.941, 0.098, 2.952]}
          scale={4.871}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks031_Stone_0.geometry}
          material={materials.Stone}
          position={[-10.248, 53.226, 19.58]}
          rotation={[-3.132, 0.001, -3.04]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks032_Stone_0.geometry}
          material={materials.Stone}
          position={[-1.75, 52.036, 26.56]}
          rotation={[3.038, -0.191, -3.059]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks033_Stone_0.geometry}
          material={materials.Stone}
          position={[11.215, 52.034, 18.522]}
          rotation={[-1.854, -0.159, -0.743]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks034_Stone_0.geometry}
          material={materials.Stone}
          position={[-22.078, 53.627, 15.089]}
          rotation={[1.122, 0.413, -2.12]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks035_Stone_0.geometry}
          material={materials.Stone}
          position={[-26.194, 52.617, -5.961]}
          rotation={[1.082, 0.101, -1.323]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks036_Stone_0.geometry}
          material={materials.Stone}
          position={[2.057, 52.606, -22.283]}
          rotation={[2.442, 1.239, -2.832]}
          scale={3.447}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks037_Stone_0.geometry}
          material={materials.Stone}
          position={[24.014, 52.968, 10.074]}
          rotation={[0.519, -0.886, 0.307]}
          scale={4.485}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks038_Stone_0.geometry}
          material={materials.Stone}
          position={[15.68, 52.626, 3.14]}
          rotation={[-0.092, -0.719, 0.091]}
          scale={3.203}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks039_Stone_0.geometry}
          material={materials.Stone}
          position={[26.241, 52.262, 5.554]}
          rotation={[1.091, 0.137, 1.825]}
          scale={6.041}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks040_Stone_0.geometry}
          material={materials.Stone}
          position={[-25.664, 53.032, 6.488]}
          rotation={[1.842, -0.371, 0.786]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks041_Stone_0.geometry}
          material={materials.Stone}
          position={[-11.434, 52.835, 4.76]}
          rotation={[2.016, 0.005, 1.728]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks042_Stone_0.geometry}
          material={materials.Stone}
          position={[-10.204, 52.874, 9.621]}
          rotation={[1.957, -0.259, 1.164]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks043_Stone_0.geometry}
          material={materials.Stone}
          position={[-14.657, 52.621, -6.234]}
          rotation={[1.915, 0.251, 2.278]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks044_Stone_0.geometry}
          material={materials.Stone}
          position={[5.841, 54.106, -3.676]}
          rotation={[1.367, 0.388, -2.478]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks045_Stone_0.geometry}
          material={materials.Stone}
          position={[5.675, 54.052, 3.925]}
          rotation={[1.191, -0.21, -0.946]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks046_Stone_0.geometry}
          material={materials.Stone}
          position={[26.11, 52.546, -7.099]}
          rotation={[0.07, -0.3, 0.01]}
          scale={3.203}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks047_Stone_0.geometry}
          material={materials.Stone}
          position={[-20.003, 53.501, 17.794]}
          rotation={[1.122, 0.413, -2.12]}
          scale={4.88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks1002_Stone_0.geometry}
          material={materials.Stone}
          position={[15.578, 52.519, -19.684]}
          rotation={[0.156, 0.473, -0.219]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks1556_Stone_0.geometry}
          material={materials.Stone}
          position={[19.525, 53.06, -15.997]}
          rotation={[-1.473, 0.065, 0.554]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks2001_Stone_0.geometry}
          material={materials.Stone}
          position={[11.493, 52.949, -10.19]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks2626_Stone_0.geometry}
          material={materials.Stone}
          position={[23.129, 53.413, -11.933]}
          rotation={[-0.028, 0.602, 0.022]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks3021_Stone_0.geometry}
          material={materials.Stone}
          position={[17.763, 54.144, -13.528]}
          rotation={[-0.661, -0.819, 1.7]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks3583_Stone_0.geometry}
          material={materials.Stone}
          position={[22.496, 53.043, -8.055]}
          rotation={[0, -0.484, 0.001]}
          scale={6.566}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks536_Stone_0.geometry}
          material={materials.Stone}
          position={[5.023, 53.393, -25.18]}
          scale={6.566}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/plant.gltf");
