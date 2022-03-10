import { Dispatch } from "redux";
import { axiosInstance } from "services/axiosInstance";
import { ActionType } from "./action-types";
import { Action } from "./actions";

export const getSubscribersDashboard = ({
	subscriberId,
}: {
	[x: string]: number;
}) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.INIT_GET_SUBSCRIBER_DASHBOARD,
		});

		try {
			const {
				data: { data },
			} = await axiosInstance.get(`/subscribers/${subscriberId}/dasboard`);

			dispatch({
				type: ActionType.GET_SUBSCRIBER_DASHBOARD_SUCCESS,
				payload: data,
			});
		} catch (error) {
			if (error instanceof Error)
				dispatch({
					type: ActionType.GET_SUBSCRIBER_DASHBOARD_ERROR,
					payload: error?.message || "SOME THING WENT WRONG",
				});
		}
	};
};
