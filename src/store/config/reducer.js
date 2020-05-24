import { handleActions } from "redux-actions";
import actions, { namespaceOptions } from "./actions";

const reducer = handleActions(
  {
    [actions.addType]: (state, action) => {
      debugger;
      return { counter: state.counter + action.payload };
    },
    [actions.removeType]: (state, action) => {
      return { counter: state.counter + action.payload };
    },
  },
  {
    types: [],
  },
  namespaceOptions
);

export default reducer;
