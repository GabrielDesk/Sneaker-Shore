import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    "3dModels/SneakerModel/hyperSneaker/scene.gltf"
  );

  return (
    <>
      <mesh
        visible
        scale={0.7}
        // scale={0.07}
        rotation={[Math.SQRT2 / 91, Math.SQRT2 / 0.3, -Math.SQRT2 / 3.5]}
        userData={{ hello: "world" }}
      >
        <primitive object={gltf.scene} scale={0.06} />
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
          //   camera={{ , fov: 115 }}
          camera={{
            // position: [-0.2, 0.5, 1],
            // position: [0.6, 0.4, 2],
            position: [0.8, 0.1, 0.2],
            near: 0.1,
            far: 50,
            aspect: 16 / 9,
            fov: 100,
          }}
          style={{
            alignContent: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <ambientLight intensity={0.1} />
          <spotLight
            intensity={0.2}
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
            // enablePan={true}
            enableZoom={false}
            minDistance={0.1}

            // minPolarAngle={1}
            // maxPolarAngle={2.5}
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
    height: "30em",
    width: "30em",

    // backgroundColor: "#000",
  },
};
