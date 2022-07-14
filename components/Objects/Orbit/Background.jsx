
import { Sparkles, Stars, Cloud } from "@react-three/drei"

export default function Background() {

    return (
        <Sparkles
            noise={1}
            speed={0.3}
            count={400}
            size={10}
            position={[0, 0, -2]}
            color="white"
            scale={400}
        >

        </Sparkles>
        // <Stars ></Stars>
        // <Cloud></Cloud>
    )
}

