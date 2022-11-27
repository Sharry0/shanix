
import { useState, Suspense } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from "three";
import { Float, useCursor } from "@react-three/drei";



export  function Noodle(props) {
  const mesh = useRef()
  // const texture = useLoader(TextureLoader, "texture.jpg");
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(({ clock }) => (
    Object.assign(mesh.current.rotation, { x: 0, y: clock.getElapsedTime() / 7, z: clock.getElapsedTime() / 3 })
    
  ))


  const { nodes, materlias } = useGLTF("/noodle.glb")

  return (
      <mesh {...props} receiveShadow={true} castShadow={true} ref={mesh}  >
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath.geometry}
            material={nodes.NurbsPath.material}
          />
        </group>
      </mesh>
  )
}

export default function Noodles() {
  return Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)
}


useGLTF.preload("/noodle.glb")