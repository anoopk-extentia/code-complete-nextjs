import { createStore, Store, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducers from "./reducers";
import { AppStore } from "./reducers/reducer.interface";

// create a makeStore function
export const initStore = (initialState = {}) => {
  return createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<AppStore>>(initStore, {
  debug: true,
});
