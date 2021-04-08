import React, { Component } from "react";
import "./styles/Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button onClick={this.props.handleClick}>{this.props.text}</button>;
  }
}

export default Button;
