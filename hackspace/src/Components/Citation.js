import React, {Component} from 'react';

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


class Citation extends Component {

	state = {
		position : "center"
	}

	format() {
		let citationSplited = this.props.txt.split("[R]")

		if ((citationSplited > 1 ) && this.state.position != 'start' ) this.setState({position : "start"})
		else if ( this.state.position != 'center' ) this.setState({position : "center"})

		const formatCitation = citationSplited.map((elt,index) => { 
					console.log(citationSplited.length)
					return ( <p id="citation" 
								className={(index == (citationSplited.length - 1)) ? "homeAuteur purple" : "homeCitations" } >{elt}<br/><br/></p>)
				})
		return formatCitation
	}

	render() {
	return <div className="inMiddleScreen" 
				style={{textAlign : this.state.position, paddingTop : "50px"}} >{this.format()}</div> 
	}
}

export default Citation;