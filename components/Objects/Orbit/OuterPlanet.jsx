
import { useFrame, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three";
import { useRef } from "react";

export default function OrbitCenter({ orbitSpeed, planetOffset, planetSize, planetTexture }) {

    const orbitCenter = useRef()

    useFrame(({ clock }) => (
        orbitCenter.current.rotation.y = clock.getElapsedTime() / orbitSpeed
    ));

    return (
        <mesh ref={orbitCenter}>
            <sphereGeometry />
            <meshPhongMaterial emissive={"blue"} />
                <Planet planetOffset={planetOffset} planetSize={planetSize} planetTexture={planetTexture} />
        </mesh>
    )
};


function Planet({ planetOffset, planetSize, planetTexture }) {
    
    const texture = planetTexture ? useLoader(TextureLoader, planetTexture) : false
    return (
        <mesh position={planetOffset}>
            <sphereGeometry args={planetSize} />
            <meshPhysicalMaterial map={texture}  />
        </mesh>
    )
};