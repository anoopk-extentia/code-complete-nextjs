import { ActionType } from "./action-types";
import { IWidgetList } from "utils/types";

interface initGetSubscriberDashboardAction {
  type: ActionType.INIT_GET_SUBSCRIBER_DASHBOARD;
}

interface getSubscriberDashboardSuccessAction {
  type: ActionType.GET_SUBSCRIBER_DASHBOARD_SUCCESS;
  payload: IWidgetList;
}

interface getSubscriberDashboardErrorAction {
  type: ActionType.GET_SUBSCRIBER_DASHBOARD_ERROR;
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
  | initGetSubscriberDashboardAction
  | getSubscriberDashboardSuccessAction
  | getSubscriberDashboardErrorAction
  | initGetWiget1Action
  | getWidget1SuccessAction
  | getWidget1ErrorAction
  | initGetWiget2Action
  | getWidget2SuccessAction
  | getWidget2ErrorAction;
