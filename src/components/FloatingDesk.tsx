"use client";

import { Environment } from "@react-three/drei";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";
import { Desk } from "./Desk";

type FloatingDeskProps = {
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const FloatingDesk = forwardRef<Group, FloatingDeskProps>(
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
      <group ref={ref} {...props} position-y={0.3} rotation-y={0.8}>
        <Desk />
        <Environment files="/hdr/lobby.hdr" environmentIntensity={0.6} />
      </group>
    );
  }
);

FloatingDesk.displayName = "FloatingDesk";

export default FloatingDesk;
