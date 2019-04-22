import React from "react";
import { shallow, mount } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "../containers/header";
import { setAuthentification } from "../actions/index";
import AuthentificationReducer from "../reducers/authentification";
import { SET_AUTHENTIFICATION } from "../actions/action-types";
import RootTest from "./root-test";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

describe("Test sur Header", () => {
  it("Render du composant connecté sans erreur", () => {
    const wrapper = shallow(
      <RootTest>
        <Header />
      </RootTest>
    );
    console.log(wrapper.debug());
  });
});
