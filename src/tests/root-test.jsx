import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class RootTest extends Component {
  render() {
    return (
      <Provider store={store}>
        <MemoryRouter>{this.props.children}</MemoryRouter>
      </Provider>
    );
  }
}

export default RootTest;
