import React from 'react'
import { useSpring, animated, config } from 'react-spring/three'
import { useFrame } from 'react-three-fiber'
import { Ease, useRandomRange, Colors } from './utils'

export const Shape = ({ position = [0, 0, 0] }) => {
  const [active, setActive] = React.useState(false)
  const meshRef = React.useRef()
  const factor = useRandomRange(0.5, 1.5)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    let t = Math.sin(time * factor)
    t = Ease.inOutCubic((1 + t) / 2)

    meshRef.current.position.y = position[1] + t * 4
    meshRef.current.scale.y = 1 + t * 3
  })

  const { color } = useSpring({
    color: active ? Colors.activeShape : Colors.shape,
    config: config.wobbly,
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
    >
      <sphereBufferGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0} metalness={0.2} />
    </mesh>
  )
}
