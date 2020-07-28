import React, {Component} from 'react'

import Wiki from './Containers/Wiki.js'
import HomeMenu from './Components/Menu/HomeMenu.js'

import dataCode from './ressources/Data/structureCode.json'
import dataRed from './ressources/Data/structureRed.json'
import dataBlue from './ressources/Data/structureBlue.json'

import './styles/App.css';
import './styles/text.css';
import './styles/animate.css';
import './styles/pics.css';
import './styles/menu.css';
import './styles/phone.css';

// ################################################### 
// #*/=============================================\*# 
// # ||                      .__                  || #
// # ||   ____   ____   ____ |  |   ____   ____   || #
// # || _/ __ \_/ __ \ / ___\|  |  /  _ \ /  _ \  || #
// # || \  ___/\  ___// /_/  >  |_(  <_> |  <_> ) || #
// # ||  \___  >\___  >___  /|____/\____/ \____/  || #
// # ||      \/     \/_____/                  2020|| #
// #.\=============================================/.#
// ###################################################

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          select : ""
      }
  }

  onSelect(e) {
    const category = e.target.id
    this.setState({ select : category })
  }

  render() {
    switch (this.state.select) {
      case "code" :
        return <Wiki data={dataCode} select={this.state.select} />
        break
      case "armor" :
        return <Wiki data={dataBlue} select={this.state.select} />
        break
      case "hack" :
        return <Wiki data={dataRed} select={this.state.select} />
        break
      case "tools" :
        return <Wiki data={dataRed} select={this.state.select} />
        break
      default :
        return <HomeMenu onSelected={(e) => this.onSelect(e)} />
    }
  }
}

export default App;