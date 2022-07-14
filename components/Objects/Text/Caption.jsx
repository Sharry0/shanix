
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export default function Caption({ children }) {
  const { width } = useThree((state)=> state.viewport)
  return (
    <Text
    color={"purple"}
    fontSize={width/20}
    font="/Ki-Medium.ttf"
    >
      {children}
    </Text>
  )
}
