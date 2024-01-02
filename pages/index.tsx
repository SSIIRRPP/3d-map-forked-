import { Canvas } from "@react-three/fiber";

export default function Hola() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="canvas-container">
        <Canvas>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </main>
  );
}
