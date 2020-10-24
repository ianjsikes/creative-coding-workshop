import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from '@react-three/drei'

import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'
import { Colors } from './utils'
import './index.css'

const App = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [0, 8, 15] }}
    ></Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
