

export default function Floor(props) {
  return (
    <mesh {...props} receiveShadow={true}>
        <boxBufferGeometry args={[20,1,10]} />
        <meshPhysicalMaterial color="white" />
    </mesh>
  )
}
