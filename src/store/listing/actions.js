import { createActions } from "redux-actions";

export const namespaceOptions = {
  prefix: "LISTING",
};

const actions = createActions(
  {
    addItem: (payload) => payload,
    removeItem: (payload) => payload,
  },
  namespaceOptions
);

export default actions;
