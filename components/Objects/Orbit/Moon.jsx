
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

export default function Moon(props) {
    const texture = useLoader(TextureLoader, "moonTexture.jpeg");

  const mesh = useRef();
  useFrame(({ clock }) => (
      Object.assign(mesh.current.rotation, { y: clock.getElapsedTime(), x: clock.getElapsedTime() / 50 })
))
  return (
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh} >
        <sphereGeometry args={[1, 32, 16]}  />
        <meshPhysicalMaterial map={texture} color={"white"} />
      </mesh>

  )
}
