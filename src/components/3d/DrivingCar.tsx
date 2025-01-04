import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';
import { useAnimationSpeed } from '../../hooks/useAnimationSpeed';

export default function DrivingCar() {
  const car = useRef<Mesh>(null);
  const speed = useAnimationSpeed(2);
  
  useFrame((state) => {
    if (!car.current) return;
    
    // Move car from left to right
    car.current.position.x = ((state.clock.getElapsedTime() * speed) % 20) - 10;
    
    // Add subtle up/down movement for suspension effect
    car.current.position.y = Math.sin(state.clock.getElapsedTime() * 4) * 0.02 + 0.5;
    
    // Add slight tilt when moving
    car.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.02;
  });

  return (
    <group ref={car}>
      {/* Car body */}
      <mesh castShadow position={[0, 0.4, 0]}>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="#1C1C1C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Car cabin */}
      <mesh castShadow position={[0, 0.7, 0]}>
        <boxGeometry args={[1.2, 0.4, 0.8]} />
        <meshStandardMaterial color="#1C1C1C" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      <Wheel position={[-0.7, 0.2, 0.5]} />
      <Wheel position={[0.7, 0.2, 0.5]} />
      <Wheel position={[-0.7, 0.2, -0.5]} />
      <Wheel position={[0.7, 0.2, -0.5]} />
    </group>
  );
}

function Wheel({ position }: { position: [number, number, number] }) {
  const wheel = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (!wheel.current) return;
    // Rotate wheels
    wheel.current.rotation.x = state.clock.getElapsedTime() * 4;
  });

  return (
    <mesh ref={wheel} position={position} castShadow>
      <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
  );
}