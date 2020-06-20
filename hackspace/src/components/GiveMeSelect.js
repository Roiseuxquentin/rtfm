import React, {Component} from 'react';
// jsonpath

class GiveMeSelect extends Component {
	constructor(props) {
		super(props)
		this.state = {
			  selected : "",
		  }
	}

	componentDidUpdate() {
		if ((this.props.select) && (this.props.select != this.state.selected)) {
			this.setState({selected : this.props.select})
		}
	}

	GiveMeOption() {
		if (typeof this.props.data == "object") {
			if ((this.props.data) && (this.props.data.children != undefined )){
				if (this.props.data.content){
					return <option value={this.props.data.key}>{this.props.data.title}</option> 
				} else {
		 			 return this.props.data.children.map((elt,i) => <option key={i} value={elt.key} >{elt.title}</option> )
				}
			} else {
				if (this.props.data.length) {

		 			 return this.props.data.map((elt,i) => <option key={i}  value={elt.key} >{elt.title}</option> )
				} else {
			 		return
				}
			}
	 	}
	}

 	render() {
		return (	<select value={this.state.selected} >
						{this.GiveMeOption()}
					</select>)
 	}
}

export default GiveMeSelect;