import axios from "axios";

import {
  SET_AUTHENTIFICATION,
  INCREMENT_ACTION_COUNT,
  ADD_RESSOURCE
} from "./action-types";

const BASE_URL = "http://localhost:3090";

export function setAuthentification(isLoggedIn) {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn
  };
}

export function incrementActionCount() {
  return {
    type: INCREMENT_ACTION_COUNT
  };
}

export function addRessource() {
  return {
    type: ADD_RESSOURCE
  };
}

export function signinUser({ email, password }, history) {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/signin`, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch(setAuthentification(true));
        history.push("/ressources");
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function signoutUser() {
  return function(dispatch) {
    dispatch(setAuthentification(false));
    localStorage.removeItem("token");
  };
}

export function signupUser({ email, password }, history) {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/signup`, {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch(setAuthentification(true));
        history.push("/ressources");
      })
      .catch(error => {
        console.log(error);
      });
  };
}
