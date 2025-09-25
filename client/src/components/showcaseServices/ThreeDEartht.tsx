// ThreeDEarth.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from './Earth';

const ThreeDEarth = () => {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}

        {/* Earth mesh */}
        <Earth />

        <OrbitControls dampingFactor={0.1} enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ThreeDEarth;
