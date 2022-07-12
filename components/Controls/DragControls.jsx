
import { useEffect, useRef, useState } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { DragControls } from "three/examples/jsm/controls/DragControls"

extend({ DragControls })

export default function Draggable(props) {

    const groupRef = useRef();
    const controlsRef = useRef();
    const [objects, setObjects] = useState();
    const { camera, gl, scene } = useThree()

console.log(groupRef)

    useEffect(() => {
        setObjects(groupRef.current.children)
    }, [groupRef])

    // useEffect(()=>{
    //     controlsRef.current.addEventlistener("dragstart", ()=>{
    //         scene.orbitControls.enabled = false;
    //     })
    //     controlsRef.current.addEventlistener("dragend", ()=>{
    //         scene.orbitControls.enabled = true;
    //     })
    // }, [objects])


    return (
        <group ref={groupRef}>
            <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
            {props.children}
        </group>
    )
}
