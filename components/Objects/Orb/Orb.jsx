
import { useState } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from "three";
import { Float, useCursor } from "@react-three/drei";

export default function Box(props) {
  const mesh = useRef()
  // const texture = useLoader(TextureLoader, "texture.jpg")
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  // useFrame(({ clock }) => (
  //   Object.assign(mesh.current.rotation, { x: 0, y: clock.getElapsedTime() / 7, z: clock.getElapsedTime() / 3 }),
  //   mesh.current.distort = THREE.MathUtils.lerp(mesh.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
  // ))
  return (
    <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}>

      <sphereGeometry args={[0.5, 20, 10]} />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  )
}
