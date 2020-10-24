import React from 'react'
import { Colors } from './utils'

const DirectionalLight = () => {
  return (
    <directionalLight
      castShadow
      position={[2.5, 8, 5]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
  )
}

export const Lights = () => {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <DirectionalLight />
      <pointLight
        position={[-10, 0, -20]}
        color={Colors.light}
        intensity={2.5}
      />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
    </group>
  )
}
