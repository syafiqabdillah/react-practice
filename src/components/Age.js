import React, { Component } from "react";
import "./styles/Age.css";

class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="age">{this.props.age} years old</div>;
  }
}

export default Age;
