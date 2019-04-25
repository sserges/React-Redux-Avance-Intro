import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../containers/header";
import Home from "./home";
import TodoApp from "./todo-app";
import Ressources from "./ressources";
import Signin from "./signin";
import Signout from "./signout";
import Signup from "./signup";
import Errors from "./errors";
import RequireAuthentification from "../helpers/require-authentification";

require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container body_content">
          <Errors />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/ressources"
              component={RequireAuthentification(Ressources)}
            />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/todo" component={TodoApp} />
          </Switch>
        </div>
      </div>
    );
  }
}
