import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ActionType } from "store/actions/action-types";

export const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  errorMsg: "",
};
// create your reducer
export const dashboardReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case ActionType.INIT_GET_SUBSCRIBER_DASHBOARD:
      return { ...state, isLoading: true };

    case ActionType.GET_SUBSCRIBER_DASHBOARD_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case ActionType.GET_SUBSCRIBER_DASHBOARD_SUCCESS:
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
