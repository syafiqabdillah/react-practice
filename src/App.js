import "./App.css";
import React from "react";
import Todo from "@components/Todo";
import Biodata from "@components/Biodata";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <Todo />
        <Biodata />
      </div>
    );
  }
}

export default App;
