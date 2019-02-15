import React from 'react'
import ReactDOM from 'react-dom'
import * as THREE from 'three'
class Geometry extends React.Component {
  componentDidMount() {
    // 渲染器
    let renderer
    let wrapDom = document.getElementsByClassName('canvas-wrap')
    const width = wrapDom.clientWidth
    const height = wrapDom.clientHeight
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      width: width,
      height: height
    })
    wrapDom.appendChild(renderer.domElement)
    renderer.setClearColor('#fff', 1)
    // 相机
    let camera = new THREE.PerspectiveCamera()
  }
  render() {
    return (
      <div className="canvas-wrap"></div>
    )
  }
}

ReactDOM.render(
  <Geometry />,
  document.getElementById('root')
)