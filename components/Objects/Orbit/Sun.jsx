
import {  useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function Bulb(props) {

    const sunOrbitCenter = useRef()


      useFrame((state, delta) => (
        sunOrbitCenter.current.rotation.z -= 0.01

      ))

    return (
        <mesh position={[0, 0, -40]} ref={sunOrbitCenter}>
            <Sun />
        </mesh>
    )
}


function Sun() {

    return (
        <mesh position={[0, -200, 0]}>
            <pointLight castShadow />
            <sphereGeometry args={[5, 20, 20]} />
            <meshPhongMaterial emissive={"blue"} />
        </mesh>
    )
}