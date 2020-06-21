import React from 'react'
import Header from './Header.js'
import Lateral from './Lateral.js'

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

const Nav = ({pages, selected, onChange}) => {

	let scrollPosition = 0

	const goUp = (event) => {
 		event.preventDefault()
 		window.scroll(0, 0)
 		scrollPosition = 0
	}

	const scrollingButton = () => {
		if ( window.scrollY > 300 ) {
			document.getElementById("goTop").style.opacity = (0.7)
		} else {
			document.getElementById("goTop").style.opacity = 0
		}

		scrollPosition = window.scrollY
	}

    window.addEventListener('scroll', scrollingButton )

	return (<div>
				
				<Header axes={pages} onChange={onChange} />
        		
        		<Lateral axe={pages[selected]} />

				<div className="goTop" >
	         		<img id="goTop"
		         		onClick={goUp}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Circle-icons-arrow-up.svg/600px-Circle-icons-arrow-up.svg.png" />
	         	</div>
         	</div>)
}

export default Nav;