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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

describe("Test sur Header", () => {
  it("Render du composant connecté sans erreur", () => {
    const wrapper = shallow(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    console.log(wrapper.debug());
  });
});
