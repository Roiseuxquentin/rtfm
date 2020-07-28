import React from 'react'

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

const HomeMenu = ({onSelected}) => {

    return (<div className="vignetteContainer">
        
              <div id="code" className="vignette finger" onClick={(event) => onSelected(event)} >
                <h1>Code</h1>
              </div>
              
              <div id="hack" onClick={(event) => onSelected(event)} className="vignette finger">
                <h1>H4ck</h1>
              </div>
              
              <div id="armor" className="vignette finger" onClick={(event) => onSelected(event)}>
                <h1>Armure</h1>
              </div>

              <div id="tools" className="vignette finger lastVignette " onClick={(event) => onSelected(event)}>
                <h1>Tools</h1>
              </div>

            </div> )
}

export default HomeMenu