import React, {Component} from 'react';
import Sommaire from './Sommaire.js'

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
		const contents = document.getElementById("contents")
		const code = contents.querySelectorAll("code")

		if (boolean) {
			code.forEach(elt => elt.style.marginLeft = "20vw")
			document.getElementById("header").style.zIndex = "1"
			document.getElementById("header").style.opacity = 0
			document.getElementById("lycos").style.zIndex = "-1"
		} else {
			code.forEach(elt => elt.style.marginLeft = "10px")
			document.getElementById("lycos").style.zIndex = "0"
		}
	}

	render() {
		return (<div className="lateral" 
						style={{ width : `${this.state.develop ? "33vw" : "2vw" }`, transition : "0.5s" }}
						onMouseEnter={() => this.menu()} 
						onMouseLeave={() => this.menu()} >

					<Sommaire data={this.props.axe} mode={this.state.develop} lateral />
		       </div>)
	}
}

export default Lateral;