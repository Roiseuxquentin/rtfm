import React from 'react'
import gist from '../ressources/gist.png'

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

const Footer = (obj) => {

	const handleClick = (e) => {
		e.preventDefault();
		const url = e.target.name
		window.open(url,'_blank');
	}
    return (<div className={!obj.display ? "firstFooter endStick" : "footer endStick"} >
    	<div className="flex center">
    		<img onClick={(event) => handleClick(event) } 
    				id="codepen"
					name = "https://codepen.io/"
    				className="footerItem" 
    				src="https://assets.codepen.io/t-1/internal/avatars/teams/default.png?format=auto&height=256&version=100000&width=256"/>
    		<img onClick={(event) => handleClick(event) } 
    				id="shell"
					name = "http://roiseux.fr"
    				className="footerItem" 
    				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWoH1mBpYI0W9koIPeZi1X477y4ppIRjNJWg&usqp=CAU" />
    		<img onClick={(event) => handleClick(event) } 
    				id="back"
    				name={window.location.hostname}
    				className="footerBack" 
    				src="https://www.shareicon.net/data/256x256/2015/12/17/688997_arrows_512x512.png" />
    		<img onClick={(event) => handleClick(event) } 
    				id="github"
					name = "http://github.com/roiseuxquentin"
    				className="footerItem" 
    				src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"/>
    		<img onClick={(event) => handleClick(event) } 
    				id="Gist"
    				name="https://gist.github.com/Roiseuxquentin"
    				className="footerItem" 
    				src={gist} />
    	<div className={!obj.display ? "firstFooterLine" : "footerLine"} />
    	</div>
         </div>)
}

export default Footer