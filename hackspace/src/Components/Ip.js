import React, { Component } from 'react'

class Ip extends Component {

	state = { ip : "127.0.0.1" }

	componentDidMount() {
	    fetch('https://api.ipify.org?format=json')
	    .then(req => req.json())
	    .then(res => this.setState({ip:res.ip}))
	    .catch(err => console.clear())
	}

	render() {
    	return (<div className="flex center white noMargin" ><p className="footerDuFooter" >{this.state.ip}</p></div>)
	}
}
export default Ip;
