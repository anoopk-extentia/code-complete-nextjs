/**
 * Filename: loader.reducer.test.tsx \
 * Description: This is the loader test case file.\
 * Extentia: Copyright (c) 2022
 */
import { cleanup } from '@testing-library/react';

import { loaderReducer } from 'store/reducers/loader.reducer';
import { SHOW_LOADER, HIDE_LOADER } from 'store/actions/action-types';
import { AppConstant } from 'common/app.constants';

afterEach(cleanup);

describe('Loader reducer', () => {
    it('should return the initial state', () => {
        expect(
            loaderReducer(
                { isActive: false, label: AppConstant.LOADER_DEFAULT_LABEL },
                { type: '' },
            ),
        ).toEqual({ isActive: false, label: AppConstant.LOADER_DEFAULT_LABEL });
    });

    it('should handle SHOW_LOADER', () => {
        const showAction = {
            type: SHOW_LOADER,
        };
        expect(loaderReducer({ isActive: true }, showAction)).toEqual({
            isActive: true,
            label: AppConstant.LOADER_DEFAULT_LABEL,
        });
    });

    it('should handle HIDE_LOADER', () => {
        const hideAction = {
            type: HIDE_LOADER,
        };
        expect(loaderReducer({ isActive: false }, hideAction)).toEqual({
            isActive: false,
        });
    });
});
