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
  });

  it("Test que le libéllé du bouton connexion est bien 'connexion' puis 'déconnexion' après clique", () => {
    const wrapper = mount(
      <RootTest>
        <Header />
      </RootTest>
    );

    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Connexion");
    wrapper
      .find("a")
      .at(2)
      .simulate("click");

    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Déconnexion");
    // console.log(wrapper.debug());
  });
});
