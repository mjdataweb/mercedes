import React from 'react';

export default function Road() {
  return (
    <group>
      {/* Road surface */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[30, 4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Road markings */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
        <planeGeometry args={[30, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}