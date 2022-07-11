
import css from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber"
import Floor from '../components/Floor/Floor'

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        carmera={{ position: [-6, 7, 7] }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <Floor position={[0, -5, -10]} />

      </Canvas>

    </div>
  )
}
