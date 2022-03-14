/**
 * Filename: loader.reducer.ts\
 * Description: This is the loader reducer.\
 * Extentia: Copyright (c) 2022
 */
import { AppConstant } from 'common/app.constants';
import { ILoaderProps } from '../../components/loader/loader.interface';
import { ILoaderAction } from 'store/store.interface';
import { SHOW_LOADER, HIDE_LOADER } from '../actions/action-types';

/**
 * @exports
 * @constant initialState
 */
export const initialState: Readonly<ILoaderProps> = {
    isActive: false,
    label: AppConstant.LOADER_DEFAULT_LABEL,
};

/**
 * @exports
 * @param {Readonly<ILoaderProps>} state
 * @param {ILoaderAction} action
 * @returns {ILoaderProps}
 */
export const loaderReducer = (state = initialState, action: ILoaderAction): ILoaderProps => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                isActive: true,
                label: action.label ? action.label : AppConstant.LOADER_DEFAULT_LABEL,
            };
        case HIDE_LOADER:
            return {
                ...state,
                isActive: false,
            };
        default:
            return state;
    }
};
