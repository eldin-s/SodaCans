"use client";

import { forwardRef, ReactNode } from "react";
import { Group } from "three";
import { Plant } from "./Plant";

type FloatingPlantProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingPlant = forwardRef<Group, FloatingPlantProps>(
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
      <group ref={ref} {...props}>
        <Plant />
      </group>
    );
  }
);

FloatingPlant.displayName = "FloatingPlant";

export default FloatingPlant;
