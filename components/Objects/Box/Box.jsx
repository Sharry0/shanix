
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { Float } from "@react-three/drei";

export default function Box(props) {
    const mesh = useRef()
    const texture = useLoader(TextureLoader, "texture.jpg")
    useFrame((state, delta) => (
        mesh.current.rotation.y += 0.01
    ))
    return (
        <Float floatIntensity={6} speed={3}>
            <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>

                <boxBufferGeometry />
                <meshPhysicalMaterial map={texture} color={"white"} />
            </mesh>
        </Float>
    )
}
