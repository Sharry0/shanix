
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import Moon from "./Moon"
import OuterPlanet from "./OuterPlanet"

export default function MainPlanet(props) {

  const texture = useLoader(TextureLoader, "earthTexture.jpeg");
  const mesh = useRef();
  console.log(texture)
  // useFrame(({ clock }) => (
  //   Object.assign(mesh.current.rotation, { y: clock.getElapsedTime(), x: clock.getElapsedTime() / 50 })
  // ))

  return (
    <>
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh} >
        <sphereGeometry args={[3, 32, 16]} />
        <meshPhysicalMaterial map={texture} color={"lightblue"} />
        <Moon position={[5, 5, 5]} />
        <OuterPlanet key={"moon"} orbitSpeed={0.8} planetOffset={[4, 0, 0]} planetSize={[0.2]} planetTexture={"moonTexture.jpeg"} />
        <OuterPlanet orbitSpeed={-2} planetOffset={[0, 3.4, 0]} planetSize={[0.6]} />
        {/* <OuterPlanet orbitSpeed={0.03} planetOffset={[0, 3.4, 0]} planetSize={[0.04]} /> */}
        {/* <OuterPlanet orbitSpeed={0.03} planetOffset={[0, 3.4, 0]} planetSize={[0.04]} /> */}
        {/* <OuterPlanet orbitSpeed={0.03} planetOffset={[0, 3.4, 0]} planetSize={[0.04]} /> */}
        {/* <OuterPlanet orbitSpeed={0.03} planetOffset={[0, 3.4, 0]} planetSize={[0.04]} /> */}
      </mesh>
    </>
  )
}
