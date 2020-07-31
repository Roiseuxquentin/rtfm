import React from 'react'

import Horloge from '../Horloge.js'
import Lycos from '../Search/Lycos.js'

import data from './categories.json'

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

  const url = "http://localhost:3000/"
  const vignettes = (categories) => {
    return categories.map( (vignette,index) => {
      return (
        <div key={index}
             className={`vignette vignette${index} finger`}
             id={vignette.title}
             onClick={(e) => onSelected(e)} >
          <img src={`${url}${vignette.img}`} alt={vignette.title} />
          <h3 className="vignetteTitle">{vignette.title}</h3>
          <p className="vignetteTxt" >{vignette.txt}</p>
        </div>
      )}
    )
  }



  return (<div className="body grid">
            <Horloge />
            { vignettes(data.categories) }
            <Lycos />
          </div>)

}

export default HomeMenu