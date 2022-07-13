

export default function Bulb(props) {
  return (
    <mesh {...props}>
        <pointLight castShadow />
        <sphereGeometry args={[0.5, 10, 10]} />
        <meshPhongMaterial emissive={"red"} />
    </mesh>
  )
}
