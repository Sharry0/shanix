
import { useThree, useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function Bulb(props) {

  const { mouse } = useThree();
  const light = useRef();

  useFrame((state, delta) => (
    light?.current?.position?.set(mouse.x*50, mouse.y*50 , -3)

  ))

  return (
    <mesh {...props} ref={light} >
      <pointLight castShadow />
      <sphereGeometry args={[0.8, 20, 10]} />
      <meshPhongMaterial emissive={"red"} />
    </mesh>
  )
}
