import React from 'react'
import Header from './Header.js'
import Lateral from './Lateral.js'
import uPage from '../ressources/uPage.png'

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

const Nav = ({pages, selectedIndex, selectedName, onChange }) => {

	let scrollPosition = 0

	const goUp = (event) => {
 		event.preventDefault()
 		window.scroll(0, 0)
 		scrollPosition = 0
	}

	const scrollingButton = () => {
		if ( window.scrollY > 300 ) {
			document.getElementById("goTop").style.opacity = 1
		} else {
			document.getElementById("goTop").style.opacity = 0
		}

		scrollPosition = window.scrollY
	}

    window.addEventListener('scroll', scrollingButton )

	return (<div>
				
				<Header axes={pages} onChange={onChange} selected={selectedName} />
        		

        		{selectedName ? <Lateral axe={pages[selectedIndex]} /> : true}

				<div className="goTop" >
	         		<img id="goTop"
		         		onClick={goUp}
						src={uPage} />
	         	</div>
         	</div>)
}

export default Nav;