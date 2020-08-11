import React from 'react'

import data from '../ressources/Data/categories.json'

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

const Vignettes = ({onSelected}) => {

  const url = "http://127.0.0.1:3000/"
  // const url = "http://88.127.234.194/"

  const vignettes = (categories) => {
    return categories.map( (vignette,index) => {
      return (
        <div key={index}
             className={`vignette vignette${index} ${(index == 1) ? 'finger' : 'cursorInterdit'}`}
             id={vignette.title}
             onClick={(e) => onSelected(e)} >
          <img id={vignette.title} className="dontouch"
             onClick={(e) => onSelected(e)} src={`${url}${vignette.img}`} alt={vignette.title} />
          <h3 id={vignette.title}
             onClick={(e) => onSelected(e)} className={`vignetteTitle dontouch ${(index == 1) ? 'finger' : 'cursorInterdit'}`} >{vignette.title}</h3>
          <p id={vignette.title}
             onClick={(e) => onSelected(e)} className={`vignetteTxt dontouch ${(index == 1) ? 'finger' : 'cursorInterdit'}`} >&nbsp;
             {vignette.txt.split("[R]").map(e => <span>&nbsp;&nbsp;&nbsp;{e}<br/><br/></span>)}</p>
        </div>
      )}
    )
  }

  return (<div className="vignetteContainer">
            { vignettes(data.categories) }
          </div>)

}

export default Vignettes