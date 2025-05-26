import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import forestScene from "../assets/3d/forest.glb";

export function Forest() {
  const forestRef = useRef();
  const { scene, animations } = useGLTF(forestScene);
  const { actions } = useAnimations(animations, forestRef);


  useEffect(() => {
  console.log("Available animations:", animations.map((anim) => anim.name));
}, [animations]);

    useEffect(() => {
     //Log all animation names in console
    console.log("Available animations:", Object.keys(actions));

     if (actions && Object.keys(actions).length > 0) {
       const firstAnimation = Object.keys(actions)[0]; // Get first animation name
       const action = actions[firstAnimation];

      if (action) {
        action.reset().play(); // Start animation from beginning
         action.clampWhenFinished = true; // Stop at the last frame
  
      }
    }
  }, [actions]);


  return (
    <mesh ref={forestRef} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Forest;