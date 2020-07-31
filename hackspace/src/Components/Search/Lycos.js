import React, {Component} from 'react';

class Lycos extends Component {

  state = {
    displayBar : true,
    mounted : true
  }
  
  componentDidMount() {
    // updated 2019
    const input = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    const expand = () => {
      searchBtn.classList.toggle("close");
      input.classList.toggle("square");
    };

    searchBtn.addEventListener("click", expand);
  }

  vaChercher() {
    // this.setState({displayBar : !this.state.displayBar})
  }
/*
      <div>
      <form id="content">
        <input  id="lycosBar" type="text" name="input" 
              className={(this.state.displayBar) ? "" : "square" } />
        <button className={(this.state.displayBar) ? 'close' : "" }
                onClick={() => this.vaChercher() }
                type="reset" id="lycosBtn"></button>
      </form>
      </div> */

  render() {
    return (
      <div className="div" > 
            <form id="content">
        <input type="text" name="input" class="input" id="search-input" />
        <button type="reset" class="search" id="search-btn"></button>
      </form>
      </div>
    )
  }
}

export default Lycos;