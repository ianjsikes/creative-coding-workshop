import React from 'react'
import { useFrame } from 'react-three-fiber'
import { Shape } from './Shape'
import { times, randomRange, Ease } from './utils'

const randomPosition = () => {
  // Position vector in the form of [x, y, z]
  return [randomRange(-5, 5), randomRange(-1, 3), randomRange(-5, 5)]
}

const usePositions = (number) => {
  return React.useMemo(() => times(number, randomPosition), [number])
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
