import React, {Component} from 'react'

import Nav from './components/Nav.js'
import Sommaire from './components/Sommaire.js'
import Content from './components/Content.js'

import data from './ressources/structure.json'

import './App.css';

class App extends Component {
    state = {
      scrollPos : 0,
      data : data,
    }


  componentDidMount() {
  }

  render() {
   return (
      <div className="App">
       <Nav pages={data.axes} />




        <div className="corps">
          <p id="start">{data.axes[0].title}</p>
          <Sommaire data={data.axes[0]} mode />
    
          <Content data={data.axes[0]} />
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
                    <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
                    <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
                    <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p id="clap">CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
                    <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
                    <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>tips</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
          <p>CLAP CLAP</p>
        </div>
      </div>
    )
  }
}

export default App;