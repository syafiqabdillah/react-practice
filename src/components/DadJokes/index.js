import styles from "./styles.module.css";
import React from "react";
import { connect } from "react-redux";
import { fetchDadJoke } from "../../redux/DadJokes/dadjokes.actions";
import { Helmet } from "react-helmet";

class DadJokes extends React.Component {
  componentDidMount() {
    this.props.fetchDadJoke();
  }

  render() {
    return (
      <>
      <Helmet>
        <title>Dad Jokes</title>
      </Helmet>
      <div
        className={styles.dadJokes}
        onClick={() => {
          this.props.fetchDadJoke();
        }}
      >
        <h1 className={styles.title}>👴 Daily Dose of Dad Jokes</h1>
        <hr />
        <div className="joke">{this.props.joke}</div>
        {this.props.loadingJoke && "Loading..."}
        {this.props.showJokeError && (
          <small className={styles.error}>Error loading joke</small>
        )}
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    joke: state.dadjokes.joke,
    loadingJoke: state.dadjokes.loadingJoke,
    showJokeError: state.dadjokes.showJokeError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDadJoke: () => dispatch(fetchDadJoke()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DadJokes);
