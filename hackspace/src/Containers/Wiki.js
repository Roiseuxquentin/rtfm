import React, {Component} from 'react'

import Nav from './Nav.js'
import Content from './Content.js'

import Sommaire from '../Components/Menu/Sommaire.js'
import Footer from '../Components/Menu/Footer.js'

import inProgress from '../ressources/inProgress.png'

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

class Wiki extends Component {
  state = {
    scrollPos : 0,
    data : {},
    page : 0,
    selected : false
  }

  componentDidMount() {
      this.setState({data : this.props.data })
      document.getElementById("goTop").style.opacity = 0
  }

  onChangePage(event) {
    let page
    const selected = event.target.id

    switch (selected) {
      case "syntax" :
        this.setState({page : 0, selected : selected })
        break;
      case "Methodes" :
        this.setState({page : 1, selected : selected  })
        break;
      case "Ressources" :
        this.setState({page : 2, selected : selected  })
        break;
      case "Scripts" :
        this.setState({page : 3, selected : selected  })
        break;
      default :
        return
    }
  }

  render() {
    if (this.props.data) {
      return (
        <div className="App">
         
         <Nav pages={this.props.data.axes} selectedName={this.state.selected} selectedIndex={this.state.page} onChange={(event) => this.onChangePage(event)} />

         { (this.state.selected) ?
            (<div className="corps fadeIn" >
              <Sommaire data={this.props.data.axes[this.state.page]} mode />
              <hr/>
              <Content data={this.props.data.axes[this.state.page]} />
            </div> ) : <div className="inMiddleScreen" ><img src={inProgress} /></div> }


            <Footer display={this.state.selected} />
        </div>
      )
    } else {
      return <div />
    }
  }
}

export default Wiki;