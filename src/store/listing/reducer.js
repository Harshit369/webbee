import { handleActions } from "redux-actions";
import actions, { namespaceOptions } from "./actions";

const reducer = handleActions(
  {
    [actions.addItem]: (state, action) => {
      return { counter: state.counter + action.payload };
    },
    [actions.removeItem]: (state, action) => {
      return { counter: state.counter + action.payload };
    },
  },
  {
    types: [],
  },
  namespaceOptions
);

export default reducer;
