import { createStore, Store, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { State } from "./reducers/types";
import { reducer } from "./reducers/reducer";

// create a makeStore function
const initStore = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(initStore, { debug: true });
