import React, {Component} from 'react'

import Nav from './components/Nav.js'
import Footer from './components/Footer.js'
import Sommaire from './components/Sommaire.js'
import Content from './components/Content.js'
import GiveMeImg from './components/GiveMeImg.js'
import GiveMeModal from './components/GiveMeModal.js'

import data from './ressources/structureCode.json'
import Lycos from './components/Lycos.js'

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
    data : data,
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
       
       <Nav pages={data.axes} selectedName={this.state.selected} selectedIndex={this.state.page} onChange={(event) => this.onChangePage(event)} />

       {
        (this.state.selected) ?
        (<div className="corps fadeIn" >
          <GiveMeImg source={data.axes[this.state.page].key} />
          <Sommaire data={data.axes[this.state.page]} mode />
          <hr/>
          <Content data={data.axes[this.state.page]} />
        </div> ) : <Lycos />
       }


          <Footer display={this.state.selected} />
      </div>
    )
  }
}

export default App;