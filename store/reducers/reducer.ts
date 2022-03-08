import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { State } from "./types";

// create your reducer
export const reducer = (state: State = { tick: "init" }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
