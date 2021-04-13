import styles from "./App.module.css";
import React from "react";
import Todo from "@components/Todo";
import Biodata from "@components/Biodata";
import DadJokes from "@components/DadJokes";
import {
  Switch,
  Route,
  Redirect,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const currentPath = this.props.location;
    const activeStyle = {
      fontWeight: "bold"
    }
    return (
      <Router>
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li>
              <NavLink to="/dadjokes" activeStyle={activeStyle}>
                Dad Jokes
              </NavLink>
            </li>
            <li>
              <NavLink to="/todo" activeStyle={activeStyle}>
                Not to-do
              </NavLink>
            </li>
            <li>
              <NavLink to="/biodata" activeStyle={activeStyle}>
                Biodata
              </NavLink>
            </li>
          </ul>
          <p>{currentPath}</p>
          <Switch>
            <Route exact path="/">
              <Redirect to="/dadjokes" />
            </Route>
            <Route exact path="/todo" component={Todo} />
            <Route exact path="/biodata" component={Biodata} />
            <Route exact path="/dadjokes" component={DadJokes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
