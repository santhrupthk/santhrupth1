"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const RAY_COUNT = 10;

function Rays() {
  const rays = useMemo(() => {
    return Array.from({ length: RAY_COUNT }, (_, i) => {
      const angle = (i / RAY_COUNT) * Math.PI * 2;
      const radius = 1.55;
      return {
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number],
        rotation: [0, 0, angle + Math.PI / 2] as [number, number, number],
      };
    });
  }, []);

  return (
    <>
      {rays.map((r, i) => (
        <mesh key={i} position={r.position} rotation={r.rotation}>
          <capsuleGeometry args={[0.045, 0.42, 4, 8]} />
          <meshStandardMaterial color="#a683f2" emissive="#601bc0" emissiveIntensity={0.4} roughness={0.35} />
        </mesh>
      ))}
    </>
  );
}

function TerminalCore({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.18;
    }
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    const targetX = reduceMotion ? 0 : pointer.current.y * 0.15;
    const targetZ = reduceMotion ? 0 : -pointer.current.x * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetZ, 0.04);
  });

  const scale = Math.min(viewport.width / 6, 1.15);

  return (
    <group ref={group} scale={scale}>
      <RoundedBox args={[1.5, 1.5, 0.55]} radius={0.28} smoothness={4}>
        <meshStandardMaterial color="#601bc0" roughness={0.4} metalness={0.15} />
      </RoundedBox>
      <mesh position={[0, 0, 0.29]}>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial color="#601bc0" transparent opacity={0} />
      </mesh>
      <Rays />
    </group>
  );
}

export function HeroScene3D({
  reduceMotion,
  paused = false,
}: {
  reduceMotion: boolean;
  paused?: boolean;
}) {
  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        frameloop={paused ? "never" : "always"}
      >
        <ambientLight intensity={0.65} />
        <directionalLight position={[3, 3, 4]} intensity={1.1} color="#c9b7ff" />
        <pointLight position={[-3, -2, 2]} intensity={0.4} color="#571ebc" />
        <TerminalCore reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
