
import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

export default function MainPlanet(props) {
  const mesh = useRef();
  useFrame(({ clock }) => (
      Object.assign(mesh.current.rotation, { y: clock.getElapsedTime(), x: clock.getElapsedTime() / 50 })
))
  return (
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh} >
        <sphereGeometry args={[1, 32, 16]}  />
        <meshPhysicalMaterial  color={"red"} />
      </mesh>

  )
}
