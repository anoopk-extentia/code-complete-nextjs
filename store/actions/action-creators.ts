import { Dispatch } from "redux";
import { axiosInstance } from "services/axiosInstance";
import { ActionType } from "./action-types";
import { Action } from "./actions";

export const getWidgetList = ({ subscriberId }: { [x: string]: number }) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INIT_GET_WIDGET_LIST,
    });

    try {
      const {
        data: { data },
      } = await axiosInstance.get(`/subscribers/${subscriberId}/widgets`);
      dispatch({
        type: ActionType.GET_WIDGET_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_WIDGET_ERROR,
        payload: error?.message || "SOME THING WENT WRONG",
      });
    }
  };
};

export const getWidget1 = ({
  widgetId,
  subscriberId,
}: {
  [x: string]: number;
}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INIT_CC_WIDGET_1,
    });

    try {
      const { data } = await axiosInstance.get(
        `/subscribers/${subscriberId}/widget/${widgetId}`
      );
      console.log(data);
      dispatch({
        type: ActionType.CC_WIDGET_1_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.CC_WIDGET_1_ERROR,
        payload: error?.message || "SOME THING WENT WRONG",
      });
    }
  };
};

export const getWidget2 = ({
  widgetId,
  subscriberId,
}: {
  [x: string]: number;
}) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INIT_CC_WIDGET_2,
    });

    try {
      const { data } = await axiosInstance.get(
        `/subscribers/${subscriberId}/widget/${widgetId}`
      );
      console.log(data);
      dispatch({
        type: ActionType.CC_WIDGET_2_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.CC_WIDGET_2_ERROR,
        payload: error?.message || "SOME THING WENT WRONG",
      });
    }
  };
};
