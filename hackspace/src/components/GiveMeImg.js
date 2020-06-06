import React from 'react'

import rabbitEggs from '../ressources/rabbitEggs.jpeg'
import syntaxImg from '../ressources/syntaxImg.png'
import methodesImg from '../ressources/methodesImg.jpg'
import ressourcesImg from '../ressources/ressourcesImg.jpg'

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

const GiveMeImg = ({source}) => {
	switch (source) {
		// case "syntax042":
		// 	return <img src={syntaxImg} width="auto" height="150px" className="categorieImg" />
		// 	break;
		case "Ressources042":
			return <img src={ressourcesImg} width="auto" height="350px" className="categorieImg" />
			break;
		// case "Methodes042":
		// 	return <img src={methodesImg} width="auto" height="150px" className="categorieImg" />
		// 	break;
		case "capsuleCorp":
			return <img src={rabbitEggs} width="100px" height="130px" className="rabbitEggs" />
			break;
		default : 
			// return <img src={ressourcesImg} width="auto" height="350px" className="categorieImg" />
			return <div/>
			break;
	}

}

export default GiveMeImg