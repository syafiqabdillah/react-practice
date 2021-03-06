import React from "react";
import { Helmet } from 'react-helmet'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styles from "../styles/Biodata.module.css";

import Photo from "./components/Photo";
import Name from "./components/Name";
import Age from "./components/Age";
import Address from "./components/Address";
import RandomizeButton from "./components/RandomizeButton";

import { randomize } from "./actions";
import makeSelectBiodata from "../selectors";

class Biodata extends React.Component {
  componentDidMount() {
    if (this.props.biodata.currentPerson.fullname === undefined)
      this.props.randomize();

    console.log('jontor')
  }

  render() {
    let content;
    if (this.props.biodata.currentPerson) {
      content = (
        <div className={styles.biodata}>
          <Photo src={this.props.biodata.currentPerson.src} />
          <Name fullname={this.props.biodata.currentPerson.fullname} />
          <Age age={this.props.biodata.currentPerson.age} />
          <Address address={this.props.biodata.currentPerson.address} />
          <RandomizeButton
            handleClick={this.props.randomize}
            theme={this.props.biodata.theme}
          >randomize</RandomizeButton>
        </div>
      );
    } else {
      content = null;
    }
    return (
      <>
      <Helmet>
        <title>Biodata</title>
      </Helmet>
      <div>{content}</div>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  biodata: makeSelectBiodata()
});

const mapDispatchToProps = (dispatch) => {
  return {
    randomize: () => dispatch(randomize()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Biodata);
