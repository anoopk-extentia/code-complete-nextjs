import { Reducer, CombinedState, combineReducers } from "redux";
import { reducer } from "./reducer";
import { AppStore } from "./reducer.interface";

const reducers: Reducer<CombinedState<AppStore>> = combineReducers({
  data: reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
