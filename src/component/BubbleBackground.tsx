"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float, Environment, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

type Bubble = {
  color: THREE.Color;
  position: [number, number, number];
  size: number;
  emissiveColor: THREE.Color;
  animationType: 'float' | 'ellipse' | 'pulse';
};

function FloatingBubble({ color, position, size, emissiveColor, animationType }: Bubble) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      if (animationType === 'float') {
        ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5;
        ref.current.rotation.y += 0.002;
        ref.current.rotation.x += 0.0015;
      } else if (animationType === 'ellipse') {
        ref.current.position.x = position[0] + Math.cos(t * 0.5) * 1.5;
        ref.current.position.z = position[2] + Math.sin(t * 0.5) * 1.5;
        ref.current.rotation.y += 0.003;
      } else if (animationType === 'pulse') {
        const scale = 1 + Math.sin(t * 2) * 0.2;
        ref.current.scale.setScalar(scale);
        ref.current.rotation.y += 0.004;
      }
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere ref={ref} args={[size, 64, 64]} position={position}>
        <meshPhysicalMaterial
          color={color}
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
          envMapIntensity={1.2}
          emissive={emissiveColor}
          emissiveIntensity={0.2}
          transmission={0.1}
          thickness={0.5}
        />
      </Sphere>
    </Float>
  );
}

function BubbleScene() {
  const colors = useMemo(
    () => [
      new THREE.Color("#D4AF37"), // Gold
      new THREE.Color("#C0C0C0"), // Silver
      new THREE.Color("#1E3A8A"), // Royal Blue
    ],
    []
  );

  const bubbles = useMemo(() => {
    const arr: Bubble[] = [];
    const animationTypes: ('float' | 'ellipse' | 'pulse')[] = ['float', 'ellipse', 'pulse'];
    for (let i = 0; i < 40; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const position: [number, number, number] = [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10,
      ];
      const size = Math.random() * 0.5 + 0.2;
      const emissiveColor = new THREE.Color(color).multiplyScalar(0.3);
      const animationType = animationTypes[Math.floor(Math.random() * animationTypes.length)];
      arr.push({ color, position, size, emissiveColor, animationType });
    }
    return arr;
  }, [colors]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#FFD700" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#00FFFF"
      />
      <Environment preset="city" />
      <Lightformer
        intensity={3}
        color="#FFD700"
        position={[0, 2, 3]}
        scale={6}
      />
      <Lightformer
        intensity={2}
        color="#00FFFF"
        position={[-3, -2, -4]}
        scale={4}
      />

      {bubbles.map((b, i) => (
        <FloatingBubble key={i} color={b.color} position={b.position} size={b.size} emissiveColor={b.emissiveColor} animationType={b.animationType} />
      ))}

      {/* Bloom Effect */}
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.5}
          kernelSize={2}
          luminanceThreshold={0.8}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </>
  );
}

export default function BubbleBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #0F172A 0%, #1E3A8A 100%)", // Deep Navy to Royal Blue
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      >
        <BubbleScene />
      </Canvas>

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
