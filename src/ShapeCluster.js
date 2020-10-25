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
  const positions = usePositions(number)
  return (
    <group>
      {positions.map((position, index) => (
        <Shape key={index} position={position} />
      ))}
    </group>
  )
}
