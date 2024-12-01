"use client";

import FloatingChair from "@/components/FloatingChair";
import FloatingDesk from "@/components/FloatingDesk";
import FloatingLamp from "@/components/FloatingLamp";
import FloatingPlant from "@/components/FloatingPlant";
import { useStore } from "@/hooks/useStore";
import { useGSAP } from "@gsap/react";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Group } from "three";

gsap.registerPlugin(useGSAP);

type Props = {};

const Scene = ({}: Props) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const isReady = useStore((state) => state.isReady);

  const deskRef = useRef<Group>(null);
  const chairRef = useRef<Group>(null);
  const lampRef = useRef<Group>(null);
  const plantRef = useRef<Group>(null);

  const deskGroupRef = useRef<Group>(null);
  const chairGroupRef = useRef<Group>(null);
  const lampGroupRef = useRef<Group>(null);
  const plantgroupref = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !deskRef.current ||
      !chairRef.current ||
      !lampRef.current ||
      !plantRef.current ||
      !deskGroupRef.current ||
      !chairGroupRef.current ||
      !lampGroupRef.current ||
      !plantgroupref.current ||
      !groupRef.current
    )
      return;

    isReady();

    // models starting location
    gsap.set(deskRef.current.position, {
      x: 1.2,
      y: -0.2,
    });
    gsap.set(deskRef.current.rotation, {
      z: 0,
      y: 0.6,
    });

    gsap.set(chairRef.current.position, {
      x: 1.4,
      y: -0.55,
    });
    gsap.set(chairRef.current.rotation, {
      z: 0,
      y: 0.6,
    });

    gsap.set(lampRef.current.position, {
      x: 1.1,
      y: -0.66,
      z: -1.7,
    });
    gsap.set(lampRef.current.rotation, {
      z: 0,
    });

    gsap.set(plantRef.current.position, {
      x: 0.7,
      y: -0.09,
      z: 2,
    });

    gsap.set(plantRef.current.scale, {
      x: 0.22,
      y: 0.2,
      z: 0.4,
    });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "circ",
      },
    });

    introTl
      .from(deskGroupRef.current.position, { y: 4 }, 0.5)
      .from(chairGroupRef.current.position, { y: 3 }, 0)
      .from(lampGroupRef.current.position, { y: 4 }, 1)
      .from(plantgroupref.current.position, { y: 3 }, 1.5);

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      // desk
      .to(deskRef.current.position, { x: 1, y: -0.7, z: -1 }, 0)
      .to(deskRef.current.rotation, { y: Math.PI }, 0)

      // chair
      .to(chairRef.current.position, { x: 0.4, y: -1, z: -1 }, 0)
      .to(chairRef.current.rotation, { y: Math.PI }, 0)

      // lamp
      .to(lampRef.current.position, { x: 1, y: -0.9, z: -1 }, 0)
      .to(lampRef.current.rotation, { y: Math.PI }, 0)

      // plant
      .to(plantRef.current.position, { y: -0.1, z: 1 }, 0)
      .to(plantRef.current.rotation, { y: -0.1 }, 0)

      // all cans
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.3
      );
  });

  return (
    <group ref={groupRef}>
      <group ref={deskGroupRef}>
        <FloatingDesk ref={deskRef} floatSpeed={FLOAT_SPEED} />
      </group>

      <group ref={chairGroupRef}>
        <FloatingChair ref={chairRef} floatSpeed={FLOAT_SPEED} />
      </group>

      <group ref={lampGroupRef}>
        <FloatingLamp ref={lampRef} floatSpeed={FLOAT_SPEED} />
      </group>

      <group ref={plantgroupref}>
        <FloatingPlant ref={plantRef} floatSpeed={FLOAT_SPEED} />
      </group>

      {/* <OrbitControls /> */}
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1} />
    </group>
  );
};

export default Scene;
