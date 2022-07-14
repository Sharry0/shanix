
// __________ Objects ___________________________________
import Floor from '../components/Objects/Floor/Floor'
import Box from '../components/Objects/Box/Box'
import Bulb from '../components/Objects/Lightbulb/Bulb'
import Donut from '../components/Objects/Donut/Donut'
// __________ Controls __________________________________
import { OrbitControls } from "@react-three/drei"
import Draggable from '../components/Controls/DragControls'

import css from '../styles/Home.module.css'
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Home() {
  return (
    <div className={css.scene_container}>

      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
          carmera={{ position: [-6, 7, 7] }}
        >
          <Draggable>
            <Suspense>
              <Box position={[0, -3, -5]} />
              <Donut position={[-4, -1, -6]} rotateX={9} rotateY={4} />
            </Suspense>
          </Draggable>
          <Bulb />
          <OrbitControls />
          <ambientLight color={"white"} intensity={0.3} />
          <Floor position={[0, -5, -5]} />
        </Canvas>

      </div>
    </div>
  )
}
