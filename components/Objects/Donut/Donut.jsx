
// rotation={[Math.PI / 2, 0, 0]}

export default function Donut(props) {
  return (
    <mesh {...props} receiveShadow={true} castShadow={true} >
       <torusBufferGeometry />
       <meshPhysicalMaterial color={"white"} />
    </mesh>
  )
}
