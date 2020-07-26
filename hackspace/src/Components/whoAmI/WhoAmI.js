import React, {Component} from 'react';

class WhoAmI extends Component {

  constructor(props) {
      super(props)
      this.state = {
      clef : 'valeur'
  }

      this.action = this.action.bind()
  }

 action() {
  const text = 'je lis'
  return text
 }

 render() {
   return (<div>
             <h1>Ping!</h1>
           </div>)
 }
}

export default WhoAmI;