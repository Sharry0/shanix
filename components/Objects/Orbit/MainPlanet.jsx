
import { Float } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

export default function MainPlanet(props) {
  const texture = useLoader(TextureLoader, "earthTexture.jpeg");
  const mesh = useRef();
  useFrame(({ clock }) => (
    // mesh.current.rotation.y += 0.003
    // console.log(mesh.current.rotation)
//     mesh.current.rotation{
      Object.assign(mesh.current.rotation, { y: clock.getElapsedTime(), x: clock.getElapsedTime() / 50 })

    // console.log(clock.getElapsedTime())


  ))
  return (
    <Float rotation={[0, 0, 0]} speed={1}>
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh} >
        <sphereGeometry args={[3, 32, 16]}  />
        <meshPhysicalMaterial map={texture} color={"white"} />
      </mesh>
    </Float>
  )
}
