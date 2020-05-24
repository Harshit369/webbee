import { createActions } from "redux-actions";

export const namespaceOptions = {
  prefix: "CONFIG",
};

const actions = createActions(
  {
    addType: (payload) => {
      debugger;
      return payload;
    },
    removeType: (payload) => payload,
  },
  namespaceOptions
);

export default actions;
