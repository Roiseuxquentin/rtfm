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

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pages : [{title : "Loading...", key : 42}],
			mode : true
		}
	}

	componentDidMount() {
			this.setState({ pages : this.props.axes })
	}

	hidden() {
		document.getElementById("header").style.opacity = 0
		document.getElementById("header").style.heigth = "3vh"
	}

	display() {
		document.getElementById("header").style.opacity = 1
		document.getElementById("header").style.heigth = "200px"
	}

	render() {
		return (<div className="header" id="header" 
					onMouseEnter={() => this.display()} 
					onMouseLeave={() => this.hidden()} >
			  		{ 	this.state.pages.map(page => <h1 id={page.key} key={page.key} onClick={(event) => this.props.onChange(event) } >{page.title}</h1>) }
			 	</div>)
	}
}

export default Header;