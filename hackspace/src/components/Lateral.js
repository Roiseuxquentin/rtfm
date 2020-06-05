import React, {Component} from 'react';
import Sommaire from './Sommaire.js'

class Lateral extends Component {
	constructor(props) {
		super(props)
		this.state = {
			develop : false, 
		}
	}

	menu() {
		let boolean = (!this.state.develop)
		this.setState({develop : boolean}) 
		let a = document.getSelection()
			console.log('%c DebuGg : ', 'background: orange; color: red' , a )
	}

	render() {
		return (<div className="lateral" 
					style={{ width : `${this.state.develop ? "33vw" : "3vw" }`, transition : "0.5s" }}
					onMouseEnter={() => this.menu()} 
					onMouseLeave={() => this.menu()} >

					<div className="LOGO" style={{ opacity : `${this.state.develop ? 1 : 0 }`, transition : `${this.state.develop ?  "1.5s" : "0.1s" }` }} >
		         		<img id="LOGO"
							src="https://code-art.swiss/wp-content/uploads/2017/12/codeart.png" />
		         	</div>
					<Sommaire data={this.props.axe} mode={this.state.develop} />
		       </div>)
	}
}

export default Lateral;