import { incrementActionCount } from "../actions/index";
import { INCREMENT_ACTION_COUNT } from "../actions/action-types";

export const actionCounter = store => next => action => {
  if (action.type !== INCREMENT_ACTION_COUNT) {
    store.dispatch(incrementActionCount());
  }
  console.log(action);
  next(action);
};
