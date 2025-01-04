import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import DrivingCar from './DrivingCar';
import Road from './Road';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MovingCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame((state) => {
    if (!cameraRef.current) return;
    
    // Camera follows car with smooth movement
    const time = state.clock.getElapsedTime();
    const carX = ((time * 2) % 20) - 10;
    
    cameraRef.current.position.x = carX + 3;
    cameraRef.current.position.y = 2 + Math.sin(time * 0.5) * 0.1;
    cameraRef.current.position.z = 4 + Math.cos(time * 0.5) * 0.5;
    
    // Camera looks at car
    cameraRef.current.lookAt(new THREE.Vector3(carX, 0.5, 0));
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[3, 2, 4]} />;
}

export default function Scene() {
  return (
    <Canvas shadows>
      <MovingCamera />
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Road />
      <DrivingCar />
      
      {/* Background elements */}
      <mesh position={[-10, 2, -10]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial color="#2c2c2c" />
      </mesh>
      <mesh position={[10, 1, -8]} rotation={[0, -Math.PI / 6, 0]}>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </Canvas>
  );
}