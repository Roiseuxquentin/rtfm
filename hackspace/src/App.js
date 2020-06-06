import React, {Component} from 'react'

import Nav from './components/Nav.js'
import Sommaire from './components/Sommaire.js'
import Content from './components/Content.js'
import GiveMeImg from './components/GiveMeImg.js'

import data from './ressources/structure.json'

import './App.css';

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
  state = {
    scrollPos : 0,
    data : data,
    page : 0,
    image : "syntax042"
  }

  onChangePage(event) {
    let page
    const selected = event.target.id
    switch (selected) {
      case "syntax042" :
        this.setState({page : 0, image : selected })
        break;
      case "Methodes042" :
        this.setState({page : 1, image : selected  })
        break;
      case "Ressources042" :
        this.setState({page : 2, image : selected  })
        break;
      default :
        return
    }
  }  

  render() {
   return (
      <div className="App">
       
       <Nav pages={data.axes} selected={this.state.page} onChange={(event) => this.onChangePage(event)} />

        <div className="corps">
          <GiveMeImg source="capsuleCorp" />
          <GiveMeImg source={data.axes[this.state.page].key} />
          <Sommaire data={data.axes[this.state.page]} mode />
          <Content data={data.axes[this.state.page]} />
        </div>
      </div>
    )
  }
}

export default App;