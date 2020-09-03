  import React, {Component} from 'react'

import Wiki from './Containers/Wiki.js'

import dataCode from './ressources/Data/structureCode.json'
import dataRed from './ressources/Data/structureRed.json'
import dataBlue from './ressources/Data/structureBlue.json'

import './styles/App.css';
import './styles/text.css';
import './styles/animate.css';
import './styles/icones.css';
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
          select : "code",
          data : dataCode
      }
  }

  onSelect(e) {
    let data 
    const category = e.target.id

    switch (category) {
      case "code" :
        data = dataCode
        break
      case "securite" :
        data = dataBlue
        break
      case "audit" :
        data = dataRed
        break
      default :
        break
    }

    this.setState({ select : category, data : data })
  }

  render() {
    return <Wiki data={this.state.data} select={this.state.select}  onSelected={(e) => this.onSelect(e)} />
  }
}

export default App;