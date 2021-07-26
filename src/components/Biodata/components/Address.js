import React, { Component } from "react";
import "../styles/Address.css";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="address">{this.props.address}</div>;
  }
}

export default Address;
