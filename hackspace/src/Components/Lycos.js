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

// LOAD JSON DATA
// FILTER KEY ON CODE OBJECT WITH HASTAG INPUT

class Lycos extends Component {

  state = {
    displayBar : true,
    mounted : true
  }
  
  vaChercher() {
    this.setState({displayBar : !this.state.displayBar})
  }

  render() {
    return (
      <div className="lycos" > 
        <form id="lycosForm">
          <input  type="text" id="lycosBar"
                  className={(this.state.displayBar) ? "" : "square" } />
          <button type="reset"  id="lycosBtn"
                  className={(this.state.displayBar) ? "search" : "search close" }
                  onClick={() => this.vaChercher()} ></button>
        </form>
      </div>
    )
  }
}

export default Lycos;