"use client";

import { Environment } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";
import { Lamp } from "./Lamp";

type FloatingLampProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingLamp = forwardRef<Group, FloatingLampProps>(
  (
    {
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group
        ref={ref}
        {...props}
        position={[0, 0, 0]}
        rotation-y={Math.PI}
        rotation-x={1.6}
      >
        <Lamp />

        <Environment files="/hdr/lobby.hdr" environmentIntensity={0.6} />
      </group>
    );
  }
);

FloatingLamp.displayName = "FloatingLamp";

export default FloatingLamp;
