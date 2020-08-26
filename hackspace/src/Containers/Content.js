import React from 'react'

import Breek from '../Components/Breek.js'

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

const recursive = (parents) => {
  
	if (parents.type == "categorie" ) {

			return parents.children.map(child => {
				if ( child.children.length && ( child.type == "categorie" ) ) {
					return <div key={child.key} > <h3 className="codeTitle purple contentSpace" >{child.title}</h3>  {recursive(child.children)}</div>
				} else {
					return <div key={child.key} ><h3 className="codeTitle purple contentSpace" >{child.title}</h3>  {recursive(child.children)}</div>
				}
			 })
	}  else {
			return parents.map(element => {
								if (element.type == "categorie") {
									return ( 
										<div key={element.key} className="cursorDefault black ">
											<h3  className="codeTitle purple contentSpace" >{element.title}</h3> 
											{recursive(element.children)}
										</div>)

								} else {
									return <Breek element={element} key={element.key} />
								}
							})
		
	}
}

const Content = ({ data }) => {
	
	return (<div id="contents">
			 {recursive(data)}
		    </div>)

}

export default Content