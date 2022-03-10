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

export type Action =
  | initGetSubscriberDashboardAction
  | getSubscriberDashboardSuccessAction
  | getSubscriberDashboardErrorAction;
