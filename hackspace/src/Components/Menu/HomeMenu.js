import React from 'react'
import Horloge from '../Horloge.js'

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

return (<div class="body">
  <Horloge />
          <div class="card1 finger" onClick={(e) => onSelected(e)} >
            <img src="https://image.flaticon.com/icons/svg/3221/3221631.svg" alt="hack" />
            <h3 class="vignetteTitle">H4ck</h3>
            <p class="vignetteTxt" >The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt. As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.</p>
          </div>

          <div class="card2 finger" id="code" onClick={(event) => onSelected(event)} >
            <img src="https://www.ultrasmarttech.com/wp-content/uploads/2020/03/download.png" alt="code" />
            <h3 class="vignetteTitle">K0d3</h3>
            <p class="vignetteTxt" >The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>
          </div>

          <div class="card3 finger" >
            <img src="https://image.flaticon.com/icons/svg/1065/1065435.svg" alt="" />
            <h3 class="vignetteTitle">Armor</h3>
            <p class="vignetteTxt" >The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.</p>
          </div>

        </div>)

}

export default HomeMenu