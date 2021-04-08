import React from "react";
import "./styles/Biodata.css";
import Photo from "@components/Photo";
import Name from "@components/Name";
import Age from "@components/Age";
import Address from "@components/Address";
import Button from "@components/Button";
import { connect } from "react-redux";
import { randomize } from "../redux/Biografi/biografi.actions";

class Biodata extends React.Component {
  componentDidMount() {
    this.props.randomize();
  }

  render() {
    let content;
    if (this.props.currentPerson) {
      content = (
        <div className="biodata">
          <Photo src={this.props.currentPerson.src} />
          <Name fullname={this.props.currentPerson.fullname} />
          <Age age={this.props.currentPerson.age} />
          <Address address={this.props.currentPerson.address} />
          <Button handleClick={this.props.randomize} text="randomize" />
        </div>
      );
    } else {
      content = null;
    }
    return <div className="container">{content}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentPerson: state.biografi.currentPerson,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    randomize: () => dispatch(randomize()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Biodata);
