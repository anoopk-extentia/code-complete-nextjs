/**
 * Filename: store.ts
 * Description: This file contains store.
 * Extentia: Copyright (c) 2022
 */

import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducers } from './reducers';
import { IAppStore } from './store.interface';

// create a makeStore function
export const initStore = (initialState = {}): Store => {
    return createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
};

export type RootState = ReturnType<typeof rootReducers>;

// export an assembled wrapper
export const wrapper = createWrapper<Store<IAppStore>>(initStore, {
    debug: true,
});
