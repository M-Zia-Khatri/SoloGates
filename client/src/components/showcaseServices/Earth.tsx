import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

const Earth = () => {
  const colorMap = useLoader(THREE.TextureLoader, '/textures/earth_daymap.jpg');
  const earthRef = useRef<THREE.Mesh>(null);

  const EarthTill = -(23.5 * Math.PI) / 180;

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.2 * delta; // Adjust speed as needed
    }
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]} rotation={[0, 0, EarthTill]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Earth;