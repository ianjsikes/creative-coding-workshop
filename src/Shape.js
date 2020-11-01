import React from 'react'
import { useSpring, animated, config } from 'react-spring/three'
import { useFrame } from 'react-three-fiber'
import { Ease, useRandomRange, Colors } from './utils'

export const Shape = ({ position = [0, 0, 0] }) => {
  const meshRef = React.useRef()
  const factor = useRandomRange(0.5, 1.5)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const t = Math.sin(time * factor)
    meshRef.current.position.y = t
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <sphereBufferGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={Colors.shape} />
    </mesh>
  )
}
