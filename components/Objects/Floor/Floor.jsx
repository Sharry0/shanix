

export default function Floor(props) {
  return (
    <mesh {...props} receiveShadow={true}>
        <boxBufferGeometry args={[200,1,100]} />
        <meshPhysicalMaterial color="white" />
    </mesh>
  )
}
