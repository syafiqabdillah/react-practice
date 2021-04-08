import React, { Component } from "react";
import "./styles/Age.css";
import PropTypes from 'prop-types'


class Age extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="age">{this.props.age} years old</div>;
  }
}

Age.propTypes = {
  age: PropTypes.number
}

export default Age;
