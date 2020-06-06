import React from 'react'

import syntaxImg from './ressources/syntaxImg.png'
import methodesImg from './ressources/methodesImg.jpg'
import ressourcesImg from './ressources/ressourcesImg.jpg'

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

const GiveMeImg = ({page}) => {
	switch (page) {
		case "syntax042":
			return <img src={ressourcesImg} width="auto" height="350px" />
			break;
		case "Ressources042":
			return <img src={ressourcesImg} width="auto" height="350px" />
			break;
		case "Methodes042":
			return <img src={ressourcesImg} width="auto" height="350px" />
			break;
		default : 
			return <img src={ressourcesImg} width="auto" height="350px" />
			break;
	}

}

export default GiveMeImg