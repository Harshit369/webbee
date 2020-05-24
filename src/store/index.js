import { createStore, combineReducers, applyMiddleware } from "redux";

import { reducer as configReducer } from "./config";
import { reducer as listReducer } from "./listing";

const rootReducer = combineReducers({
  list: listReducer,
  config: configReducer,
});

const configureStore = () => {
  const middlewares = [];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
};

export default configureStore();
