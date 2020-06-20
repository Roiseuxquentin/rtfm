import React, {Component} from 'react';
import ModalHeader from './ModalHeader.js'
import AddLink from './AddLink.js'
import AddCode from './AddCode.js'

class GiveMeModal extends Component {
		state = {
		  display : false,
		  data : [],
		  id : false,
		  type : "categorie"
		}


	componentDidMount() {
		this.setState({data : this.props.data})
	}

	open(e) {
		e.preventDefault()

		let key = e.target.id
		let type

		(this.props.code) ? type = "code" : type = e.target.title;

		this.setState({display : true, id : key, type : type })

		document.getElementById("header").style.opacity = 0
		document.getElementById("header").style.height = "25px"
	}

	close(e) {
		e.preventDefault()
		this.setState({display : false})
	}

 render() {
   return (
            <div className="" >
	            <h5 className="codeTitle purple contentSpace"
	            	 id={this.props.id}
	            	 title={this.props.type}
	            	 onClick={(event) => this.open(event)} >
	            	
						{this.props.title}
            		 </h5>
		   			
		   			<div style={this.state.display ? {display : "flex"} : {display : "none"}} >	           
			            <div onClick={(event) => this.close(event)} className="modalContainer" />
			            <div className="modal" >
								<ModalHeader data={this.state.data} type={this.state.type} id={this.state.id} />		            		
								<AddCode data={this.state.data} type={this.state.type} id={this.state.id} />		            		
		            	</div>
		   			</div>
   			</div>)
 }
}

export default GiveMeModal;