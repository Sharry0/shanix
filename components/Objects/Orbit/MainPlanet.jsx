
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

export default function MainPlanet(props) {

  const texture = useLoader(TextureLoader, "textures/earthTexture.jpeg");
  const mesh = useRef();

  useFrame(({ clock }) => (
    Object.assign(mesh.current.rotation, { y: clock.getElapsedTime(), x: clock.getElapsedTime() / 20 })
  ))

  return (
    <>
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh} >
        <sphereGeometry args={[3, 32, 16]} />
        <meshPhysicalMaterial map={texture}  />
      </mesh>
    </>
  )
}
