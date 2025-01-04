import React from 'react';

export default function Showroom() {
  return (
    <group>
      {/* Floor */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Ambient lighting */}
      <ambientLight intensity={0.1} />
      
      {/* Spotlights */}
      <SpotLight position={[-2, 5, -2]} />
      <SpotLight position={[2, 5, 2]} />
      <SpotLight position={[-2, 5, 2]} />
      <SpotLight position={[2, 5, -2]} />
    </group>
  );
}

function SpotLight({ position }: { position: [number, number, number] }) {
  return (
    <spotLight
      position={position}
      angle={0.3}
      penumbra={1}
      intensity={0.5}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
  );
}