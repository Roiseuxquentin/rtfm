import React, {Component} from 'react'

import Nav from './Containers/Nav.js'
import Sommaire from './Components/Menu/Sommaire.js'
import Footer from './Components/Menu/Footer.js'

import Lycos from './Components/Search/Lycos.js'
import Content from './Containers/Content.js'

import GiveMeImg from './Components/GiveMeImg.js'

import dataCode from './ressources/Data/structureCode.json'
import dataRed from './ressources/Data/structureCode.json'
import dataBlue from './ressources/Data/structureCode.json'

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
  state = {
    scrollPos : 0,
    data : dataCode,
    page : 0,
    selected : false
  }

  componentDidMount() {
      document.getElementById("goTop").style.opacity = 0
  }

  onChangePage(event) {
    let page
    const selected = event.target.id

    switch (selected) {
      case "syntax042" :
        this.setState({page : 0, selected : selected })
        break;
      case "Methodes042" :
        this.setState({page : 1, selected : selected  })
        break;
      case "Ressources042" :
        this.setState({page : 2, selected : selected  })
        break;
      case "Scripts042" :
        this.setState({page : 3, selected : selected  })
        break;
      default :
        return
    }
  }

  render() {
   return (
      <div className="App">
       
       <Nav pages={dataCode.axes} selectedName={this.state.selected} selectedIndex={this.state.page} onChange={(event) => this.onChangePage(event)} />

       {
        (this.state.selected) ?
        (<div className="corps fadeIn" >
          <GiveMeImg source={dataCode.axes[this.state.page].key} />
          <Sommaire data={dataCode.axes[this.state.page]} mode />
          <hr/>
          <Content data={dataCode.axes[this.state.page]} />
        </div> ) : <Lycos />
       }


          <Footer display={this.state.selected} />
      </div>
    )
  }
}

export default App;