
import { useSpring, animated, config } from "@react-spring/three";
import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Donut(props) {

    const texture = useLoader(TextureLoader, "texture.jpg")

    const [active, setActive] = useState(false)
    const { scale } = useSpring({
         scale: active ? 3 : 1,
         config: config.wobbly 
    })



    return (
        <animated.mesh {...props} receiveShadow={true} castShadow={true} scale={scale} onClick={()=>setActive(!active)} >
            <torusBufferGeometry />
            <meshPhysicalMaterial color={"white"} map={texture} />
        </animated.mesh>
    )
}
