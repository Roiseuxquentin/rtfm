
import React, {Component} from 'react';

class AddCode extends Component {
	constructor(props) {
		super(props)
		this.state = {
			KodeTitle : "Titre du Code",
			KodeTitle : "Description du lien",
			code1 : "Copis ton snippet",
 			selected : ["KodeTitle"] 
	  	}
	}


	handleChange(event) {
		const id = event.target.id
		this.setState({ [id] : event.target.value })  
	}

	activMe(e) {
		const id = e.target.id
		if (!this.state.selected.includes(id)) {
			this.setState({ [id] : "", selected : [...this.state.selected, id ]  })
		}
	}

	render() {
		return (<div className="flex">
					<div className="max grid">
						
						<input onChange={event => this.handleChange(event)}
								 id="KodeTitle" className="KodeTitle center" 
								 onClick={e => this.setState({ KodeTitle : "" }) } value={this.state.KodeTitle} />
						
						<textarea onChange={event => this.handleChange(event)}
								  id="code1" className="KodeStyle"
								  style={(this.state.selected.includes("code1")) ? {opacity : 1} : {opacity : 0.2}} 
								  onClick={e => this.activMe(e) } value={this.state.code1} />
						
						<div className="aDroite finger marginT" ><button className="" >AJOUTER</button></div>
					
					</div>
				</div>	)
	}
}

export default AddCode;