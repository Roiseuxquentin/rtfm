import React from 'react'
import Code from './Code.js'

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
					return <div key={child.key} ><h1 id={child.key} className="categorie" >{child.title}</h1>{recursive(child.children)}</div>
				} else {
					return <div key={child.key} ><h5 id={child.key} >{child.title}</h5>{recursive(child.children)}</div>
				}
			 })
	}  else {
			return parents.map(element => {
								if (element.type == "categorie") {
									return ( 
										<h2 id={element.key} key={element.key} className="cursorDefault">
											{element.title} <br/>  {recursive(element.children)}
										</h2>	) 
								} else {
									return <Code element={element} key={element.key} />
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