import React, { Component } from "react";
import "./styles/Photo.css";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <img src={this.props.src} alt="" />;
  }
}

export default Photo;
