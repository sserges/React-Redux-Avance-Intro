import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../containers/header";
import Home from "../components/home";
import Ressources from "../components/ressources";

require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ressources" component={Ressources} />
        </Switch>
      </div>
    );
  }
}
