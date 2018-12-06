import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      domElement: ''
    }
  }

  componentDidMount() {
    this.renderCanvas()
  }

  renderCanvas() {
    // 场景
    var scene = new THREE.Scene()
    // 相机
    var camera = new THREE.PerspectiveCamera(88, window.innerWidth / window.innerHeight, 0.1, 999)
    // 渲染器
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(500, 350)
    document.querySelector('.game-scene').append(renderer.domElement)
    var geometry = new THREE.CubeGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({
      color: '#00ff00'
    })
    var cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5
    // render cube
    function renderCanvas() {
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
      requestAnimationFrame(renderCanvas)
    }
    renderCanvas()
  }

  render() {
    return (
      <div className="first-demo-warp">
        <Scene domElement={ this.state.domElement }></Scene>
      </div>
    )
  }
}

class Scene extends React.Component {
  render() {
    return (
      <div className="game-scene">
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)