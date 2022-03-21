/**
 * Filename: action.test.tsx \
 * Description: This is the action test case file.\
 * Extentia: Copyright (c) 2022
 */

import * as actions from 'store/actions/actions';
import { MockConstants } from '__mock__/mock.constants';

describe('actions', () => {
    it('should create an action to show loader', () => {
        const expectedAction = {
            type: 'SHOW_LOADER',
            label: MockConstants.LOADER_LABEL,
        };
        expect(actions.show(MockConstants.LOADER_LABEL)).toEqual(expectedAction);
    });

    it('should create an action to hide loader', () => {
        const expectedAction = {
            type: 'HIDE_LOADER',
        };
        expect(actions.hide()).toEqual(expectedAction);
    });
});
