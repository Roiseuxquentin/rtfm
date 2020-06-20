import React from 'react'
import GiveMeModal from './GiveMeModal.js'

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

const Link = ({element}) => {

	const handleClick = (e,elt) => {
		e.preventDefault();
		const url = e.target.href 
		// window.open()
		window.open(url,'_blank');
	}
	
	return ( <div id={element.key} key={element.key} >
			  	<GiveMeModal  type={element.type} id={element.key} data={element} title={element.title} />
				  <p className="codeDescription" >{element.description}</p>
				  
				  	{element.content.map((elt,index) => {

						  	if (index % 2) {
							    return (<a key={index + Math.random()} className="finger" href={elt} onClick={(event,elt)=> handleClick(event)} >
								    		{elt}
								    	</a>)
						  	} else {
					  			return <p key={index + Math.random()} className="ressource" >{elt}</p>
						  	}
						}) 
				  	}
				  
			</div> )
}

export default Link