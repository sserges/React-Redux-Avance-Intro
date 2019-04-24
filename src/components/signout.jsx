import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>Aurevoir !</div>;
  }
}

export default connect(
  null,
  actions
)(Signout);
