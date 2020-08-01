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

class TextAnimated extends Component {

	state = {
		typing : '',
		compteur : 0,
		blink : ""
  	}

  	componentDidMount() {
	  setTimeout(() => this.type(), 1000)
  	}

	type() {

	  if(this.state.compteur < this.props.string.length){
	    let typing = this.state.typing + this.props.string.charAt(this.state.compteur)
	    this.setState({typing : typing.toUpperCase() })
	  }else{
	    this.setState({blink : "blinkingCursor"})
	    return false
	  }
	  const randomNb = Math.floor(Math.random() * 150) + 75

	  setTimeout(() => this.type(), randomNb)
	  this.setState({compteur : (this.state.compteur + 1) })

	}

	blinking() {
		return <span className={this.state.blink} >{(this.state.typing) ? "_" : ""}</span>
	}

	render() {
		return (
		  <div className="typingCase"><h1 className="textTyping dontouch">{this.state.typing}{this.blinking()}</h1></div>
		)
 	}
}

export default TextAnimated