import React, {Component} from 'react';

class ComponentClass extends Component {

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
   return (<div className="lycosContainer center grid" >
             <h1>Born2Cod</h1>            
             <input type="text" id="lycos" />
           </div>)
 }
}

export default ComponentClass;