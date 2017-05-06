import 'aframe'
import 'aframe-animation-component'
import 'aframe-particle-system-component'
import 'babel-polyfill'
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import ReactDOM from 'react-dom'
import Simulation from './simulation'
import Menu from './menu'
import Peer from 'simple-peer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inSim: false,
      isNavigator: false
    }
    this.setRole = this.setRole.bind(this)
  }

  setRole(isNavigator) {
    console.log('CALLED setRole WITH', isNavigator)
    this.setState({ isNavigator: isNavigator, inSim: true })
  }

  render() {
    return (<Scene>
      <a-assets>
        <img id="panelTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
        <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
        <audio id="alarm" src="assets/sound/alarmloop.mp3"/>
        <a-asset-item id="sunRaysOne" src="assets/sunrays/sun_rays1.dae" />
        <a-asset-item id="sunRaysTwo" src="assets/sunrays/sun_rays2.dae" />
        <a-asset-item id="cockpit" src="assets/cockpit/cockpit-05_obj.obj" />
        <a-asset-item id="cockpitMaterial" src="assets/cockpit/cockpit-05_obj.mtl" />
        {/* <a-asset-item id="moduleFont" src='https://cdn.aframe.io/fonts/Exo2Bold.fnt' /> */}
      </a-assets>
      { this.state.inSim ? <Simulation isNavigator={this.state.isNavigator} /> : <Menu setRole={this.setRole} /> }
    </Scene>)
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
