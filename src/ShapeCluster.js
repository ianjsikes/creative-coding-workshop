import React from 'react'
import { useFrame } from 'react-three-fiber'
import { Shape } from './Shape'
import { randomRange, Ease } from './utils'

const usePositions = (number) => {
  return React.useMemo(
    () =>
      [...Array(number)].map(() => [
        randomRange(-5, 5),
        randomRange(-1, 3),
        randomRange(-5, 5),
      ]),
    [number]
  )
}

export const ShapeCluster = ({ number = 10 }) => {
  const groupRef = React.useRef()
  const positions = usePositions(number)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    let t = Math.sin(time * 0.5)

    groupRef.current.rotation.y = t * Math.PI
  })

  return (
    <group ref={groupRef}>
      {positions.map((position, index) => (
        <Shape key={index} position={position} />
      ))}
    </group>
  )
}
