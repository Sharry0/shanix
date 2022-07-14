
import { useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default function OrbitCenter({ orbitSpeed, planetOffset, planetSize, planetTexture = "black" }) {

    const orbitCenter = useRef()

    const rndOrbitSpeed = Math.random() * 0.01
    console.log(rndOrbitSpeed)



    useFrame((state, delta) => (
        orbitCenter.current.rotation.z -= orbitSpeed
    ))
    return (
        <mesh ref={orbitCenter}>
            <sphereGeometry />
            <meshPhongMaterial emissive={"blue"} />
            <Planet planetOffset={planetOffset} planetSize={planetSize} planetTexture={planetTexture} />
        </mesh>
    )
}


function Planet({ planetOffset, planetSize, planetTexture }) {

    return (
        <mesh position={planetOffset}>

            <sphereGeometry args={planetSize} />
            <meshStandardMaterial emissive={planetTexture} />
        </mesh>
    )
}