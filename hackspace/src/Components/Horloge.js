import React, {Component} from 'react';

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

class Horloge extends Component {
  state = { horloge : false }

  componentDidMount() {
    setTimeout(() => this.chronos() , 1000)
  }

  chronos() {
    const date = new Date()
    const time = [ this.format(date.getHours()),
                   this.format(date.getMinutes()),
                   this.format(date.getSeconds())]

    const horloge = time.join(" : ")

    this.setState({horloge : horloge})
    setTimeout(() => this.chronos() , 1000)
  }

  format(nb) {
    if (nb < 10) return `0${nb}`
    else return nb
  }

  render() {
    if (this.state.horloge)
      return (<div className="flex center white noMargin" ><p className="footerDuFooter textTyping" ><span>{this.state.horloge}</span></p></div>)
    else return (<div />)
  }
}

export default Horloge;