import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Forest } from "../models/Forest";
import { Boy } from "../models/Boy"; // Import Boy model

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 2, 5], near: 0.1, far: 1000 }}>
        <Suspense>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 3, 1]} intensity={1.5} />
          <pointLight position={[0, 5, -2]} intensity={2} />
          <spotLight position={[0, 10, 5]} angle={0.2} intensity={3} penumbra={1} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#3a3a3a" intensity={1.2} />
          
          {/* Render Forest and Boy models */}
          <Forest />
          <Boy />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;