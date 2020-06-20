import React from 'react'
import data from '../ressources/structure.json'

const GiveMePath = ({key}) => {


	const recursiveMoiCa = (parent, index) => {
		const secure = (index + 1)

		if (parent[0] && (secure < 10)) {
				console.log('%c object : ', 'background: orange; color: red', parent[0]  )
						if (parent[0].children){
							if ( !parent[0].children.length)  console.log('%c NOK 								: ', 'background: red; color: black' )
							else parent[0].children.map( child => {





								recursiveMoiCa(parent, secure)

								console.log('%c OK																		 : ', 'background: orange; color: red' , child )




							})
						} else {
							console.log('%c NOK 								: ', 'background: red; color: black' )
						}
				// recursiveMoiCa(parent.children)
		}
	}



	recursiveMoiCa(data.axes[0].children, 0 )

	return (<div>
           <h1>Ping!</h1>
         </div>)
}

export default GiveMePath