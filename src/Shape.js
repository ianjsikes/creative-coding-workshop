import React from 'react'
import { useSpring, animated, config } from 'react-spring/three'
import { useFrame } from 'react-three-fiber'
import { Ease, useRandomRange, Colors } from './utils'

export const Shape = () => {
  return (
    <mesh castShadow receiveShadow>
      <sphereBufferGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={Colors.shape} />
    </mesh>
  )
}
