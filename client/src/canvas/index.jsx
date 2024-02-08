import React, { Suspense, useRef } from 'react';
import { OrbitControls, Environment, Center, Stage, Html } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from './Shirt';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 26 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full max-w-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />

      <Stage environment={null}>
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Stage>

    </Canvas>
  );
}

export default CanvasModel;
