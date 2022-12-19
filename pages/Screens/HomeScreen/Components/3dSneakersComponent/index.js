import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    "3dModels/SneakerModel/hyperSneaker/scene.gltf"
  );

  return (
    <>
      <mesh visible scale={2} userData={{ hello: "world" }}>
        <primitive
          object={gltf.scene}
          scale={0.07}
          position={[-0.1, -0.33, 0.5]}
          rotation={[-Math.PI / 19, 21.7, -Math.PI / 15]}
        />
      </mesh>
    </>
  );
};

const SneakerComponent = () => {
  return (
    <>
      <div style={styles.SneakerConatiner}>
        <Canvas
          shadows
          gl={{ logarithmicDepthBuffer: true, antialias: false }}
          dpr={[1, 2.5]}
          camera={{ position: [-0.8, 1.2, 3], fov: 115 }}
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          <ambientLight intensity={0.1} />
          <spotLight
            intensity={0.1}
            angle={0.6}
            penumbra={0.0}
            position={[10, 10, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.6}
            maxPolarAngle={Math.PI / 2.6}
          />
        </Canvas>
      </div>
    </>
  );
};
export default SneakerComponent;

const styles = {
  SneakerConatiner: {
    alignItems: "center",
    justifyContent: "center",
    right: 1,
    height: "100%",
    width: "100%",
    // backgroundColor: '#000',
  },
};
