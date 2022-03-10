import { Reducer, CombinedState, combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import { AppStore } from "./reducer.interface";

const reducers: Reducer<CombinedState<AppStore>> = combineReducers({
  widgetList: dashboardReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
