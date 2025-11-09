"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stars,
  Float,
  Sphere,
  Box,
  Cylinder,
  Cone,
  Torus,
  EffectComposer,
  Bloom,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// ---- Animated Objects ----

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={[0, 0, -5]}>
        <meshStandardMaterial
          color="#1E3A8A" // Royal Blue
          metalness={0.8}
          roughness={0.2}
          emissive="#00FFFF" // Neon Cyan glow
          emissiveIntensity={0.1}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedBox() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <Box ref={meshRef} args={[1, 1, 1]} position={[3, 1, -3]}>
        <meshStandardMaterial
          color="#C0C0C0" // Metallic Silver
          metalness={1}
          roughness={0}
        />
      </Box>
    </Float>
  );
}

function AnimatedCylinder() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.z += 0.01;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
      <Cylinder ref={meshRef} args={[0.5, 0.5, 2, 32]} position={[-3, -1, -4]}>
        <meshStandardMaterial
          color="#FF4500" // Orange Red
          metalness={0.6}
          roughness={0.3}
          emissive="#FFA500" // Orange glow
          emissiveIntensity={0.05}
        />
      </Cylinder>
    </Float>
  );
}

function AnimatedCone() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    meshRef.current.rotation.x += 0.008;
    meshRef.current.rotation.y += 0.008;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.6}>
      <Cone ref={meshRef} args={[0.8, 1.5, 32]} position={[2, -2, -6]}>
        <meshStandardMaterial
          color="#8A2BE2" // Blue Violet
          metalness={0.7}
          roughness={0.2}
          emissive="#DA70D6" // Orchid glow
          emissiveIntensity={0.08}
        />
      </Cone>
    </Float>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.6) * 0.2;
    meshRef.current.rotation.z += 0.003;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.7} floatIntensity={0.7}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={[-2, 2, -7]}>
        <meshStandardMaterial
          color="#FFD700" // Gold
          metalness={0.9}
          roughness={0.1}
          emissive="#FFFF00" // Yellow glow
          emissiveIntensity={0.06}
        />
      </Torus>
    </Float>
  );
}

function DynamicParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const positions = useRef<Float32Array>(new Float32Array(1000 * 3));

  for (let i = 0; i < 1000; i++) {
    positions.current[i * 3] = (Math.random() - 0.5) * 20;
    positions.current[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions.current[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    pointsRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    for (let i = 0; i < 1000; i++) {
      positions.current[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00FFFF" size={0.05} />
    </points>
  );
}

// ---- Main 3D Scene ----

export default function BackgroundAnimation() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "linear-gradient(to bottom, #0F172A, #1E3A8A)",
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#C0C0C0" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#FFFFFF" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.15}
        penumbra={1}
        intensity={0.5}
        color="#FFD700"
      />

      {/* Elements */}
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <AnimatedSphere />
      <AnimatedBox />
      <AnimatedCylinder />
      <AnimatedCone />
      <AnimatedTorus />
      <DynamicParticles />

      {/* Subtle bloom effect for luxury glow */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          kernelSize={3}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
        />
      </EffectComposer>
    </Canvas>
  );
}
