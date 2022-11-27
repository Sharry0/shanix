
import { useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Float } from "@react-three/drei";

function ContactBox(props) {
  const mesh = useRef();
  const { viewport, camera } = useThree();
  const position = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport]);

  useFrame(({ clock }) => (
    Object.assign(mesh.current.rotation, { x: 0, y: clock.getElapsedTime() / 7, z: clock.getElapsedTime() / 3 })

  ))
  return (
    <Float
      position={position}
      floatingRange={[-5, 5]} 
      floatIntensity={2}
      speed={0.5}
    >
      <mesh ref={mesh}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#C3DBE6" />
      </mesh>
    </Float>
    // <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>

    //     <boxBufferGeometry args={[1, 1, 1]} />
    //     <meshPhysicalMaterial  color={"white"} />
    // </mesh>
  )
}

export default function Boxes() {
  return Array.from({ length: 15 }, (_, i) => <ContactBox key={i} />)
}

