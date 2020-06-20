import React from 'react'
import GiveMeSelect from './GiveMeSelect.js'

const ModalHeader = ({data,type,id}) => {

	return (<div >
				<h2>ADD NEW {"\t"}
					<GiveMeSelect data={[{key : "link",title :"link"},{key : "code",title :"code"},{key : "categorie",title :"categorie"}]} select={type} />
					{"\t"}TO{"\t"}
					<GiveMeSelect data={data} select={id} />
				</h2>
			</div>)
}

export default ModalHeader