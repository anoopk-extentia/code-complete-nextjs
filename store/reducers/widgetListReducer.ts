import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { IState } from "./types";
import { ActionType } from "store/actions/action-types";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  errorMsg: "",
};
// create your reducer
export const widgetListReducer = (
  state: IState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case ActionType.INIT_GET_WIDGET_LIST:
      return { ...state, isLoading: true };

    case ActionType.GET_WIDGET_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case ActionType.GET_WIDGET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
        isError: true,
      };

    default:
      return state;
  }
};
