import React from 'react'

import Code from './Code.js'
import Link from './Link.js'
import GiveMeModal from './GiveMeModal.js'
import Breek from './Breek.js'

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
					return <div key={child.key} > <GiveMeModal data={parents} id={child.key} title={child.title} />  {recursive(child.children)}</div>
				} else {
					return <div key={child.key} ><GiveMeModal data={parents} id={child.key} title={child.title} /> {recursive(child.children)}</div>
				}
			 })
	}  else {
			return parents.map(element => {
								if (element.type == "categorie") {
									return ( 
										<div key={element.key} className="cursorDefault black ">
											
											<GiveMeModal data={parents} id={element.key} title={element.title} code />
											{recursive(element.children)}
										
										</div>)

								} else if (element.type == "link") {
									return <Link element={element} key={element.key} /> 
								
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