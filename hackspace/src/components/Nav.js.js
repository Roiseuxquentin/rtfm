import React from 'react'
import Lateral from './Lateral.js'

const Header = ({pages}) => {

	let scrollPosition = 0

	const goUp = (e) => {
 		e.preventDefault()
 		window.scroll(0, 0)
	}

	const hiddenScrollingDown = () => {
	    let windowY = window.scrollY;
		
		if ( windowY > scrollPosition ) {
			document.getElementById("header").style.opacity = 0
		}
		else {
			document.getElementById("header").style.opacity = 1
		}
		if ( window.scrollY > 300 ) {
			document.getElementById("goTop").style.opacity = (0.7)
		} else {
			document.getElementById("goTop").style.opacity = 0
		}

		scrollPosition = window.scrollY
	}

    window.addEventListener('scroll', hiddenScrollingDown )

	return (<div>
				<div className="header" id="header" >
	          		{ pages.map(e => <h1>{e.title.toUpperCase()}</h1>) } 
	         	</div>
        		
        		<Lateral axe={pages[1]} />

				<div className="goTop"  >
	         		<img id="goTop"
		         		onClick={goUp}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Circle-icons-arrow-up.svg/600px-Circle-icons-arrow-up.svg.png" />
	         	</div>
         	</div>)
}

export default Header