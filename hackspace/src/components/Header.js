import React, {Component} from 'react';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pages : [{title : "Loading..."}], 
		}
	}

	componentDidMount() {
			this.setState({ pages : this.props.axes })
	}

	render() {
		return (<div className="header" id="header" >
			  		{ 	this.state.pages.map(page => <a href="#" >{page.title}</a>) }
			 	</div>)
	}
}

export default Header;