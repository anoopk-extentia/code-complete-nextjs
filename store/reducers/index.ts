/**
 * Filename: index.ts\
 * Description: This is the root reducer.\
 * Extentia: Copyright (c) 2022
 */
import { combineReducers, Reducer, CombinedState } from 'redux';
import { IAppStore } from 'store/store.interface';
import { loaderReducer } from './loader.reducer';

/**
 * @exports
 * @constant rootReducer
 * @returns {Reducer<CombinedState<IAppStore>>}
 */
export const rootReducers: Reducer<CombinedState<IAppStore>> = combineReducers({
    loader: loaderReducer,
});
