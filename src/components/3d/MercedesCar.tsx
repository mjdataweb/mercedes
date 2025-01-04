import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, PointLight, MeshStandardMaterial } from 'three';
import { useHeadlights } from '../../hooks/useHeadlights';

export default function MercedesCar() {
  const car = useRef<Mesh>(null);
  const leftHeadlight = useRef<PointLight>(null);
  const rightHeadlight = useRef<PointLight>(null);
  const { isOn, intensity } = useHeadlights();

  useFrame(() => {
    if (leftHeadlight.current && rightHeadlight.current) {
      leftHeadlight.current.intensity = intensity;
      rightHeadlight.current.intensity = intensity;
    }
  });

  return (
    <group ref={car} position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
      {/* Car body */}
      <mesh castShadow>
        <boxGeometry args={[4, 0.8, 2]} />
        <meshStandardMaterial color="#1C1C1C" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Hood */}
      <mesh castShadow position={[0.8, 0.2, 0]}>
        <boxGeometry args={[2, 0.4, 1.8]} />
        <meshStandardMaterial color="#1C1C1C" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Roof */}
      <mesh castShadow position={[-0.5, 0.6, 0]}>
        <boxGeometry args={[2, 0.6, 1.6]} />
        <meshStandardMaterial color="#1C1C1C" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Headlights */}
      <HeadlightHousing position={[1.9, 0.3, 0.6]} isOn={isOn} />
      <HeadlightHousing position={[1.9, 0.3, -0.6]} isOn={isOn} />
      
      {/* Headlight beams */}
      <pointLight
        ref={leftHeadlight}
        position={[1.9, 0.3, 0.6]}
        intensity={0}
        distance={10}
        decay={2}
        color="#fff"
      />
      <pointLight
        ref={rightHeadlight}
        position={[1.9, 0.3, -0.6]}
        intensity={0}
        distance={10}
        decay={2}
        color="#fff"
      />

      {/* Wheels */}
      <Wheel position={[-1.2, -0.3, 0.8]} />
      <Wheel position={[1.2, -0.3, 0.8]} />
      <Wheel position={[-1.2, -0.3, -0.8]} />
      <Wheel position={[1.2, -0.3, -0.8]} />
    </group>
  );
}

function HeadlightHousing({ position, isOn }: { position: [number, number, number], isOn: boolean }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#FFFFFF"
        emissiveIntensity={isOn ? 1 : 0}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function Wheel({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
      <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}