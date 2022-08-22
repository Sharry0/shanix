import Background from "./Background"
import MainPlanet from "./MainPlanet"
import OuterPlanet from "./OuterPlanet"
import Sun from "./Sun"

export default function Solarsystem() {
  return (
    <>
        <Background />
            <MainPlanet position={[5, 0, -3]} />
            <OuterPlanet orbitCenterPos={[5, 0, -3]} key={"moon"} orbitSpeed={0.8}
              planetOffset={[4, 0, 0]} planetSize={[0.4]} planetTexture={"textures/moonTexture.jpeg"}
            />
            <OuterPlanet orbitCenterPos={[5, 0, -3]} key={"neptune"} orbitSpeed={1}
              planetOffset={[0, 0, 6]} planetSize={[0.6]} planetTexture={"textures/neptuneTexture.jpeg"}
            />
            <OuterPlanet orbitCenterPos={[5, 0, -3]} key={"mars"} orbitSpeed={1.4}
              planetOffset={[10, 0, 0]} planetSize={[0.5]} planetTexture={"textures/marsTexture.jpeg"}
            />
            <OuterPlanet orbitCenterPos={[5, 0, -3]} key={"venus"} orbitSpeed={1.8}
              planetOffset={[0, 0, 14]} planetSize={[0.3]} planetTexture={"textures/venusTexture.jpeg"}
            />
            <Sun />
    </>
  )
}
