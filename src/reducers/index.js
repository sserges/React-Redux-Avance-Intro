import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import AuthentificationReducer from "./authentification";
import ActionInfoReducer from "./action-info";
import RessourceReducer from "./ressources";

const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressource: RessourceReducer
});

export default rootReducer;
