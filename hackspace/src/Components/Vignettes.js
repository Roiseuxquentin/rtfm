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

  const url = "http://localhost:3000/"

  const vignettes = (categories) => {
    return categories.map( (vignette,index) => {
      return (
        <div key={index}
             className={`vignette vignette${index} finger`}
             id={vignette.title}
             onClick={(e) => onSelected(e)} >
          <img id={vignette.title} className="dontouch"
             onClick={(e) => onSelected(e)} src={`${url}${vignette.img}`} alt={vignette.title} />
          <h3 id={vignette.title}
             onClick={(e) => onSelected(e)} className="vignetteTitle dontouch finger">{vignette.title}</h3>
          <p id={vignette.title}
             onClick={(e) => onSelected(e)} className="vignetteTxt dontouch finger" >{vignette.txt}</p>
        </div>
      )}
    )
  }

  return (<div className="vignetteContainer">
            { vignettes(data.categories) }
          </div>)

}

export default Vignettes