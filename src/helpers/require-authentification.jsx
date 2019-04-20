import React, { Component } from "react";

export default function(ChildComponent) {
  class RequireAuthentification extends Component {
    componentWillMount() {
      console.log("BLABLA");
    }
    render() {
      return <ChildComponent />;
    }
  }

  return RequireAuthentification;
}
