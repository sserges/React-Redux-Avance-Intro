import { combineReducers } from "redux";

import AuthentificationReducer from "./authentification";
import ActionInfoReducer from "./action-info";
import RessourceReducer from "./ressources";

const rootReducer = combineReducers({
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressource: RessourceReducer
});

export default rootReducer;
