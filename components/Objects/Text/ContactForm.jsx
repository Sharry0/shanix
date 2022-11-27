
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export default function ContactForm({ children }) {

  const { width } = useThree((state) => state.viewport)

  return (
    <Text
      fontSize={0.6}
      position={[0, 3.5, 0]}
    >
      {children}
    </Text>
  )
}