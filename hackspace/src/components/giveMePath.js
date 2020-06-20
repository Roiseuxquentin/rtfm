import React from 'react'
import data from '../ressources/structure.json'

const giveMePath = ({key}) => {

	const recursiveMoiCa = (parent, index) => {
		const secure = (index + 1)
		if (parent && (secure < 10)) {
						if (parent.children){
							 parent.children.map( child => {
							 	if (child.content) 	console.log('%c BO GOSSSSSSSSSSSSSSSSSSS : ', 'background: orange; color: red'  )
								recursiveMoiCa(child.children, secure)
								console.log('%c OK : ', 'background: green; color: white' , child.children )

							})
						} else if (parent[0]) {
							recursiveMoiCa(parent, secure)
							console.log('%c NOK 								not array? ', 'background: white; color: red', parent )
						} else {
							console.log('%c C KOI ', 'background: pink; color: red', parent )

						}
				// recursiveMoiCa(parent.children)
		} 
	}



	recursiveMoiCa(data.axes[0], 0 )

	return "OK"
}

export default giveMePath