import React, {Component} from 'react';

class AddLink extends Component {
	constructor(props) {
		super(props)
		this.state = {
			lnkTitle : "Description du lien",
			url1 : "https://www.url.web",
			url2 : "And ...",
			url3 : "More ...",
 			selected : ["lnkTitle"] 
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
								 id="lnkTitle" className="lnkTitle center" 
								 onClick={e => this.setState({ lnkTitle : "" }) } value={this.state.lnkTitle} />
						
						<input onChange={event => this.handleChange(event)}
								 id="url1" className="lnkStyle"
								  style={(this.state.selected.includes("url1")) ? {opacity : 1} : {opacity : 0.2}} 
								  onClick={e => this.activMe(e) } value={this.state.url1} />
						
						<input onChange={event => this.handleChange(event)}
								 id="url2" className="lnkStyle"
								  style={(this.state.selected.includes("url2")) ? {opacity : 1} : {opacity : 0.2}} 
								  onClick={e => this.activMe(e) } value={this.state.url2} />
						
						<input onChange={event => this.handleChange(event)}
								 id="url3" className="lnkStyle"
								  style={(this.state.selected.includes("url3")) ? {opacity : 1} : {opacity : 0.2}} 
								  onClick={e => this.activMe(e) } value={this.state.url3} />
					
						<div className="aDroite finger marginT" ><button className="" >AJOUTER</button></div>
					
					</div>
				</div>	)
	}
}

export default AddLink;