import React, { Component } from 'react'

class Ip extends Component {

	state = { ip : "127.0.0.1" }

	componentDidMount() {
		
	}
	render() {
    	return (<div className="flex center white noMargin" ><p className="footerDuFooter" >{this.state.ip}</p></div>)
	}
}
export default Ip;
