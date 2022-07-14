
import { Float } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

export default function PlanetOne(props) {
  const texture = useLoader(TextureLoader, "earthTexture.jpeg");
  const mesh = useRef();
//   useFrame((state, delta) => (
//     // mesh.current.rotation.y += 0.001
//     mesh.current.rotation.x += 0.001

// ))
  return (
    <Float rotation={[0,0,0]} speed={1}>
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh} >
        <sphereGeometry args={[3,32,16]} />
        <meshPhysicalMaterial map={texture} color={"white"} />
      </mesh>
    </Float>
  )
}
