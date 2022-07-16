
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { Float } from "@react-three/drei";

export default function Box(props) {
    const mesh = useRef()
    const texture = useLoader(TextureLoader, "texture.jpg")
    useFrame(({clock}) => (
        Object.assign(mesh.current.rotation, { x: 0, y: clock.getElapsedTime() / 3 , z: clock.getElapsedTime() / 1 })
    ))
    return (
            <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>

                <boxBufferGeometry />
                <meshPhysicalMaterial map={texture} color={"white"} />
            </mesh>
    )
}
