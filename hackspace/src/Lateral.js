import React, {Component} from 'react';

class Lateral extends Component {
	constructor(props) {
		super(props)
		this.state = {
			titles : []
		}

		this.action = this.action.bind()
	}

	componentDidMount() {
		if (this.props != null) {
			if (this.props.titles != null) {
				this.setState({ titles : this.props })
			}
		}
	}

	action() {
	const text = "je lis"
	return text
	}

	render() {
		return (<div>
					<h1>{this.state.titles[0]}</h1>
		       </div>)
	}
}

export default Lateral;