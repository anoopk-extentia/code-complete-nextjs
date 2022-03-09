import { ActionType } from "./action-types";
import { IWidgetList } from "utils/types";

interface initGetWigetListAction {
  type: ActionType.INIT_GET_WIDGET_LIST;
}

interface getWidgetListSuccessAction {
  type: ActionType.GET_WIDGET_SUCCESS;
  payload: IWidgetList;
}

interface getWidgetListErrorAction {
  type: ActionType.GET_WIDGET_ERROR;
  payload: string;
}

interface initGetWiget1Action {
  type: ActionType.INIT_CC_WIDGET_1;
}

interface getWidget1SuccessAction {
  type: ActionType.CC_WIDGET_1_SUCCESS;
  payload: IWidgetList;
}

interface getWidget1ErrorAction {
  type: ActionType.CC_WIDGET_1_ERROR;
  payload: string;
}

interface initGetWiget2Action {
  type: ActionType.INIT_CC_WIDGET_2;
}

interface getWidget2SuccessAction {
  type: ActionType.CC_WIDGET_2_SUCCESS;
  payload: IWidgetList;
}

interface getWidget2ErrorAction {
  type: ActionType.CC_WIDGET_2_ERROR;
  payload: string;
}

export type Action =
  | initGetWigetListAction
  | getWidgetListSuccessAction
  | getWidgetListErrorAction
  | initGetWiget1Action
  | getWidget1SuccessAction
  | getWidget1ErrorAction
  | initGetWiget2Action
  | getWidget2SuccessAction
  | getWidget2ErrorAction;
