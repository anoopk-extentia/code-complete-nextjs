import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ActionType } from "store/actions/action-types";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  errorMsg: "",
};
// create your reducer
export const ccWidget2Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case ActionType.INIT_CC_WIDGET_2:
      return { ...state, isLoading: true };

    case ActionType.CC_WIDGET_2_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case ActionType.CC_WIDGET_2_ERROR:
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
