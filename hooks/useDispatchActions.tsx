/**
 * Filename: useDispatchActions.tsx
 * Description: This hook hold the actions that is to be dispatched
 * Extentia: Copyright (c) 2022
 */

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'store/actions/actions';

export const useDispatchActions = (): typeof actionCreators => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
};
