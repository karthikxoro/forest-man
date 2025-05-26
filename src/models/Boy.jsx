import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import boyScene from "../assets/3d/boy.glb";

export function Boy() {
  const boyRef = useRef();
  const { scene, animations } = useGLTF(boyScene);
  const { actions } = useAnimations(animations, boyRef);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimation = Object.keys(actions)[0]; // Get first animation name
      const action = actions[firstAnimation];

      if (action) {
        action.reset().play();
        action.clampWhenFinished = true;
      }
    }
  }, [actions]);

  
  return (
<mesh ref={boyRef} position={[0, 0.8, 0]} scale={[0.8, 1, 0.8]}>
{/* rotation={[0, Math.PI / 2, 0]} */}
      {/* Boy 3D Model */}
      <primitive object={scene} />
    </mesh>
  );
}


export default Boy;


