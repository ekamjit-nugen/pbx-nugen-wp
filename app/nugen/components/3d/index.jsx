import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  ScrollControls,
  Text,
  useScroll,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";

const Cubic = () => {
  return (
    <Canvas className="!h-screen">
      <ScrollControls pages={10}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={4} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </ScrollControls>
    </Canvas>
  );
};

export default Cubic;

const Cube = () => {
  const mesh = useRef(null);
  const data = useScroll();
  useFrame((state, delta) => {
    const { offset } = data;
    mesh.current.rotation.x = offset * 4;
    mesh.current.rotation.y = offset * 2;
    mesh.current.rotation.z = offset * 0;
    mesh.current.rotation.x = offset * 2;
  });

  const textures = [
    "Testing 2",
    "Testing 3",
    "Testing 4",
    "Testing 5",
    "Home",
    "Testing 6",
  ];
  // const color2 = new Color("rgb(140, 235, 52)");
  return (
    <motion.mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          color="white"
          map={texture}
          attach={`material-${index}`}
        >
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera
              makeDefault
              manual
              aspect={1 / 1}
              position={[0, 0, 5]}
            />
            <color attach={"background"} args={["rgb(140, 235, 52)"]} />
            <Text fontSize={0.8} color="#000" className="!font-bold">
              {texture}
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      ))}
    </motion.mesh>
  );
};
