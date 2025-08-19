import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useHelper , OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";

const Lights = () => {
  const pointLightRef = useRef<THREE.PointLight | null>(null);
  // useHelper hooks should be called inside useEffect to avoid React errors
  useHelper(pointLightRef, THREE.PointLightHelper, 1, "red");


  // Leva controls for lights positions and properties
  const {
    ambientIntensity,
    pointIntensity,
    pointColor,
    pointPosition,
    directionalIntensity,
    directionalPosition,
    pointPower,
    pointDecay,
    pointDistance
  } = useControls("Lights", {
    ambientIntensity: { value: 0.5, min: 0, max: 2 },
    pointIntensity: { value: 1, min: 0, max: 10 },
    pointColor: { value: "#00ff00" },
    pointPower: { value: 100, min: 0, max: 1000 },
    pointDistance: { value: 100, min: 0, max: 100},
    pointPosition: { value: [0, 0, 5], min: -20, max: 20, step: 0.1 },
    pointDecay: { value: 2, min: 0, max: 5, step:0.01 },
    directionalIntensity: { value: 1, min: 0, max: 10 },
    directionalPosition: { value: [0, 10, 0], min: -20, max: 20, step: 0.1 }
  });

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <pointLight
        ref={pointLightRef}
        position={pointPosition}
        intensity={pointIntensity}
        power={pointPower}
        decay={pointDecay}
        distance={pointDistance} 
        color={pointColor}
      />
      
      <directionalLight position={directionalPosition} intensity={directionalIntensity} />
    </>
  );
};

const Ball3D = () => {
  // Leva controls for sphere position and properties
  const { sphereColor, sphereRadius, spherePosition } = useControls("Sphere", {
    sphereColor: { value: "#ffa500" },
    sphereRadius: { value: 4, min: 1, max: 10 },
    spherePosition: { value: [0, -1, 0], min: -20, max: 20, step: 0.1 },
  });

  return (
    <Canvas
      className="w-full h-full bg-Bg-Primary"
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <OrbitControls />
      <Lights />
      <mesh position={spherePosition}>
        <sphereGeometry args={[sphereRadius, 32, 32]} />
        <meshStandardMaterial color={sphereColor} />
      </mesh>
    </Canvas>
  );
};

export default Ball3D;
