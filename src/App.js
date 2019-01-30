import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Link } from "react-router-dom";
import { history } from "../src/history/history";
import Home from "./components/AddUser"

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
