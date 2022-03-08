import { ActionType } from "./action-types";

interface initGetDataAction {
  type: ActionType.INIT_GET_DATA;
}

interface getDataSuccessAction {
  type: ActionType.GET_DATA_SUCCESS;
  payload: [];
}

interface getDataErrorAction {
  type: ActionType.GET_DATA_ERROR;
  payload: string;
}

export type Action =
  | initGetDataAction
  | getDataSuccessAction
  | getDataErrorAction;
