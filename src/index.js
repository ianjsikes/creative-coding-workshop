import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from '@react-three/drei'

import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'
import { Colors } from './utils'
import './index.css'

softShadows()

const Floor = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]} />
      <shadowMaterial opacity={0.4} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas colorManagement shadowMap camera={{ position: [0, 8, 15] }}>
      <fog attach="fog" args={[Colors.fog, 8, 40]} />
      <Lights />
      <Floor />
      <mesh castShadow receiveShadow>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={Colors.shape} />
      </mesh>
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
