
import { useThree, useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function Bulb(props) {

  const { mouse } = useThree();
  const light = useRef();

  useFrame((state, delta) => (
    light?.current?.position?.set(mouse.x, mouse.y , -7)

  ))

  return (
    <mesh {...props} ref={light} >
      <pointLight castShadow />
      <sphereGeometry args={[0.5, 10, 10]} />
      <meshPhongMaterial emissive={"red"} />
    </mesh>
  )
}
