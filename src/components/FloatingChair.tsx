"use client";

import { Environment } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";
import { Chair } from "./Chair";

type FloatingChairProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingChair = forwardRef<Group, FloatingChairProps>(
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
      <group ref={ref} {...props} scale={1.2} position-y={-0.07}>
        <Chair />
        <Environment files="/hdr/lobby.hdr" environmentIntensity={0.6} />
      </group>
    );
  }
);

FloatingChair.displayName = "FloatingChair";

export default FloatingChair;
