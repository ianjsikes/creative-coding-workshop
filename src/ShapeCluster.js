import React from 'react'
import { useFrame } from 'react-three-fiber'
import { Shape } from './Shape'
import { times, randomRange, Ease } from './utils'

const randomPosition = () => {
  // Position vector in the form of [x, y, z]
  return [randomRange(-5, 5), randomRange(-1, 3), randomRange(-5, 5)]
}

export const ShapeCluster = () => {
  return null
}
