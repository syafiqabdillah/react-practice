import React, { Component } from 'react'
import './styles/RandomizeButton.css'

class RandomizeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <button onClick={this.props.handleClick}>randomize</button>
     );
  }
}
 
export default RandomizeButton;