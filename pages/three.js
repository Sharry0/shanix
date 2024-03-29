
// __________ Objects ___________________________________
// import Floor from '../components/Objects/Floor/Floor'
// import Box from '../components/Objects/Box/Box'
// import Bulb from '../components/Objects/Lightbulb/Bulb'
// import Donut from '../components/Objects/Donut/Donut'
import Caption from '../components/Objects/Text/Caption'
import Solarsystem from '../components/Objects/Orbit/Solarsystem'

// __________ Controls __________________________________
import { OrbitControls } from "@react-three/drei"
// import Draggable from '../components/Controls/DragControls'

import css from '../styles/Three.module.css'
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'

export default function three() {
  return (
    <div className={css.scene_container}>

      <div className={css.scene}>
        <Canvas
          shadows={true}
          className={css.canvas}
          carmera={{ position: [-6, 7, 7] }}
        >
          {/* <Draggable> */}
          <Suspense>
            {/* <Box position={[0, -1, -1]} /> */}
            {/* <Donut position={[-4, -1, -6]} rotateX={9} rotateY={4} /> */}
            <Solarsystem />
            <Caption>{`this is \n not a test...`} </Caption>
          </Suspense>
          {/* </Draggable> */}
          {/* <Bulb  /> */}
          <OrbitControls />
          <ambientLight color={"white"} intensity={0.3} />
          {/* <Floor position={[0, -5, -5]} /> */}
        </Canvas>
        <a href="https://google.com" className={css.link}>to google</a>

      </div>
    </div>
  )
}
