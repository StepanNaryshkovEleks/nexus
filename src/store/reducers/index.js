import { appInitialState, reducer as app } from "./app";

import { userInitialState, reducer as user } from "./user";

export const initialState = {
  app: appInitialState,
  user: userInitialState,
};

const reducers = {
  app,
  user,
};

export const combineReducers = (reducersObj) => {
  return (state, action) => {
    return Object.keys(reducersObj).reduce((nextState, key) => {
      nextState[key] = reducersObj[key](state[key], action);
      return nextState;
    }, {});
  };
};

export const reducer = combineReducers(reducers);
