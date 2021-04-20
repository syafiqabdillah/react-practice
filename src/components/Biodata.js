import React from "react";
import styles from "./styles/Biodata.module.css";
import Photo from "@components/Photo";
import Name from "@components/Name";
import Age from "@components/Age";
import Address from "@components/Address";
import RandomizeButton from "@components/RandomizeButton";
import { connect } from "react-redux";
import { randomize } from "../redux/Biodata/biodata.actions";
import makeSelectBiodata from "./selectors";
import { createStructuredSelector } from "reselect";

class Biodata extends React.Component {
  componentDidMount() {
    if (this.props.biodata.currentPerson.fullname === undefined)
      this.props.randomize();
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
    return <div>{content}</div>;
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
