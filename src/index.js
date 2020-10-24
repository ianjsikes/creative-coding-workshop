import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import { softShadows, OrbitControls } from '@react-three/drei'

import { Lights } from './Lights'
import { ShapeCluster } from './ShapeCluster'
import { Colors } from './utils'
import './index.css'

const App = () => {
  return <h1>Hello World</h1>
}

ReactDOM.render(<App />, document.getElementById('root'))
