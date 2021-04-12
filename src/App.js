import styles from "./App.module.css";
import React from "react";
import Todo from "@components/Todo";
import Biodata from "@components/Biodata";
import DadJokes from "@components/DadJokes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Todo />
        <Biodata />
        <DadJokes />
      </div>
    );
  }
}

export default App;
