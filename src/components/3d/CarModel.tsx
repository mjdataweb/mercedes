import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function CarModel() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  // Fallback geometry when GLTF model is not available
  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1.5}>
      <boxGeometry args={[3, 1, 1]} />
      <meshStandardMaterial color="#silver" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}