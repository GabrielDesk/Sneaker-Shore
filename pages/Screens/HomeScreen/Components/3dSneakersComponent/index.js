import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { CircularProgress } from "@mui/material";

const Model = ({
  ItemLoader = "3dModels/SneakerModel/hyperSneaker/scene.gltf",
}) => {
  const gltf = useLoader(GLTFLoader, ItemLoader);

  return (
    <>
      <Center>
        <mesh
          visible
          scale={0.65}
          rotation={[Math.SQRT2 / 11, Math.SQRT2 / 0.3, -Math.SQRT2 / 5.5]}
          // userData={{ hello: "world" }}
        >
          <primitive object={gltf.scene} scale={0.06} />
        </mesh>
      </Center>
    </>
  );
};

const SneakerComponent = ({
  Loader = "3dModels/SneakerModel/hyperSneaker/scene.gltf",
}) => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <div style={styles.SneakerConatiner}>
          <Canvas
            shadows
            gl={{ logarithmicDepthBuffer: true, antialias: false }}
            dpr={[1, 2.5]}
            //   camera={{ , fov: 115 }}
            camera={{
              position: [0.8, 0.1, 0.2],
              near: 0.1,
              far: 50,
              aspect: 100,
              fov: 115,
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
              <Model ItemLoader={Loader} />
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
      </Suspense>
    </>
  );
};
export default SneakerComponent;

const styles = {
  SneakerConatiner: {
    height: "40em",
    width: "100%",
    // backgroundColor: "#000",
  },
};
