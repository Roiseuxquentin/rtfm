import React, {Component} from 'react';

class Horloge extends Component {

  constructor(props) {
      super(props)
      
      this.state = {
        horloge : 'cLheur'
      }
  }

 componentDidMount() {
  setTimeout(() => this.chronos() , 1000)
 }

 chronos() {
  const date = new Date()
  const heures = date.getHours()
  const minutes = date.getMinutes()
  const secondes = date.getSeconds()
  
  const horloge = `${heure}:${minutes}:${secondes}`
  
  this.setState({horloge : horloge})
 }

 render() {
   return (<div>
             {this.state.horloge}
           </div>)
 }
}

export default Horloge;