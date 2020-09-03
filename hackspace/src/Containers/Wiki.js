import React, {Component} from 'react'
import { AnimateOnChange } from 'react-animation'

import Nav from './Nav.js'
import Content from './Content.js'

import Sommaire from '../Components/Menu/Sommaire.js'
import Citation from '../Components/Citation.js'
import AddMe from '../Components/AddMe.js'
import Lycos from '../Components/Lycos.js'
import Footer from '../Components/Menu/Footer.js'

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
    home : true,
    data : {},
    page : 0,
    selected : false
  }

  componentDidMount() {
      this.setState({data : this.props.data , selected : false })
      document.getElementById("goTop").style.opacity = 0
  }

  onChangePage(event) {
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
        this.setState({page : 4, selected : false  })
        return
    }
  }

  render() {
    if (this.props.data) {
      return (
        <div className="App">
         
          <Nav pages={this.props.data.axes} selectedName={this.state.selected} selectedIndex={this.state.page} onChange={(event) => this.onChangePage(event)} />

          <AddMe /> 
          <Lycos /> 
         
          { (this.state.selected) ?
            (<div className="corps" >
              <AnimateOnChange><Sommaire data={this.props.data.axes[this.state.page]} mode /></AnimateOnChange>
              <hr/>
              <Content data={this.props.data.axes[this.state.page]} />
            </div> )
             : (<AnimateOnChange>
                  <Citation txt={this.props.data.citation} />
                  </AnimateOnChange>) 
          }

          <Footer display={this.state.selected}
                  stack={this.props.data.stack}
                  onSelected={(e) => {
                    this.onChangePage({target : { id : "coquille"}})
                    this.props.onSelected(e)}}  />
        </div>
      )
    } else {
      return <div />
    }
  }
}

export default Wiki;