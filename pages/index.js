
import css from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber"
import Floor from '../components/Objects/Floor/Floor'
import Box from '../components/Objects/Box/Box'
import Bulb from '../components/Objects/Lightbulb/Bulb'
import {OrbitControls} from "@react-three/drei"
// import OrbitControls from '../components/OrbitControls/OrbitControls'


export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        carmera={{ position: [-6, 7, 7] }}
      >
        <OrbitControls />
        <ambientLight color={"white"} intensity={0.3} />
        <Bulb position={[-5, 2, -7]} />
        <Floor position={[0, -5, -5]} />
        <Box rotateX={3} rotateY={0.2} position={[0, -4, -5]}/>
      </Canvas>

    </div>
  )
}
