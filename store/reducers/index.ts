import { Reducer, CombinedState, combineReducers } from "redux";
import { dashboardReducer } from "./dashboardReducer";
import { ccWidget1Reducer } from "./ccWidget";
import { ccWidget2Reducer } from "./ccWidget2";
import { AppStore } from "./reducer.interface";

const reducers: Reducer<CombinedState<AppStore>> = combineReducers({
  widgetList: dashboardReducer,
  ccWidget1: ccWidget1Reducer,
  ccWidget2: ccWidget2Reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
