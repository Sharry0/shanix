

export default function Box(props) {
    return (
        <mesh {...props} receiveShadow={true} castShadow={true}>
            <boxBufferGeometry />
            <meshPhysicalMaterial color={"red"} />
        </mesh>
    )
}
