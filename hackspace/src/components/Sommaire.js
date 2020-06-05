import React from 'react'

const recursive = (parents) => {

	if ( parents.type == "categorie" ) {
		return parents.children.map(child => {
			if ( child.children.length && ( child.type == "categorie" ) ) {
				return <div><a href={"#clap"} className="title" >{child.title} </a><br/> {recursive(child.children)}</div>
			} else {
				return <div><a href={"#clap"} >{child.title}</a><br/>{recursive(child.children)}</div>
			}
		 })
	} else {
	
		return  parents.map(element =>{
					if (element.type == "categorie") {
						return ( 
							<div>
								<a href={"#clap"} ><span className="subTitle" > {element.title}</span> </a>
								<br/>  
								{recursive(element.children)}
							</div>	) 
					} else {
						return  <a href={"#clap"} className="lasTitle" > {element.title}, </a>
					}
				})
	}

}


const Sommaire = ({ data, mode }) => {

	return (<div style={{ opacity : `${mode ?  1 : 0 }`, transition : `${mode ?  "1.5s" : "0.2s" }`, cursor : `${mode ?  "pointer" : "default" }` }} >
			 {recursive(data)}
		    </div>)

}

export default Sommaire