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

class AddMe extends Component {

  state = {
  }

  render() { return (
              <div id="AddMe" >
                  <button className="icon-btn add-btn drop-shadow">
                    <div className="add-icon"></div>
                    <div className="btn-txt">ADD</div>
                  </button>
              </div>
    )  }
}

export default AddMe;