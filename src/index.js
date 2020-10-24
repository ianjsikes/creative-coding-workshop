import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from '@react-three/drei'

import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'
import { Colors } from './utils'
import './index.css'

const App = () => {
  return (
    <Canvas colorManagement shadowMap camera={{ position: [0, 8, 15] }}>
      <mesh>
        <sphereBufferGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={Colors.shape} />
      </mesh>
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
