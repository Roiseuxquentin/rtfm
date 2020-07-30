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
  state = { horloge : '00 : 00 : 00' }

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
    return (<div>{this.state.horloge}</div>)
  }
}

export default Horloge;