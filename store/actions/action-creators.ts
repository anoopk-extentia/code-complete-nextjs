import { Dispatch } from "redux";
import { ActionType } from "./action-types";
import { Action } from "./actions";

export const initGetData = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INIT_GET_DATA,
    });

    try {
      dispatch({
        type: ActionType.GET_DATA_SUCCESS,
        payload: [],
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_DATA_ERROR,
        payload: "",
      });
    }
  };
};
