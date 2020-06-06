import React from 'react'

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

const recursive = (parents, lateral) => {

	let marginSubTitle, marginLastTitle, indexage  

	if (lateral) marginSubTitle = {marginLeft : "40px"}


	if ( parents.type == "categorie" ) {
		return parents.children.map((child, index) => {
			if (lateral) indexage =`${index + 1}-`
			if ( child.children.length && ( child.type == "categorie" ) ) {
				return <h2 key={child.key} ><a href={`#${child.key}`} ><span className="title" >{indexage}{child.title}</span> </a><br/> {recursive(child.children, lateral)}</h2>
			} else {
				return <h2 key={child.key} ><a href={`#${child.key}`} ><span className="title" >{indexage}{child.title}</span></a><br/>{recursive(child.children, lateral)}</h2>
			}
		 })
	} else {
	
		return  parents.map((element,index) =>{
				if (!index && lateral) marginLastTitle =  {marginLeft : "60px"}
				else marginLastTitle =  {marginLeft : "0px"}
					if (element.type == "categorie") {
						return ( 
							<h3 key={element.key} >
								<a href={`#${element.key}`} ><span className="subTitle" style={marginSubTitle} > {element.title}</span> </a>
								<br/>  
								{recursive(element.children, lateral)}
							</h3>	) 
					} else {
						return  <a key={element.key} href={`#${element.key}`} ><span className="lasTitle" style={marginLastTitle} > {element.title},</span> </a>
					}
				})
	}

}



const Sommaire = ({ data, mode, lateral }) => {

	let styling = { opacity : `${mode ?  1 : 0 }`,
					transition : `${mode ?  "1.5s" : "0.2s" }`, 
					cursor : `${mode ?  "pointer" : "default" }`,
					textAlign : `${lateral ?  "start" : "center" }`,
					marginLeft : `${lateral ?  "15px" : "0px" }` }
	let categorieTitle = {visibility : `${lateral ? "visible" : "hidden" }` }
	
	return (<div style={styling} >
	  	      <h1 style={categorieTitle} className="cursorDefault" >{data.title}</h1>
			 {recursive(data, lateral)}
		    </div>)

}

export default Sommaire