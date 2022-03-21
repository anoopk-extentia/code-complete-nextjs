/**
 * Filename: loader.test.tsx \
 * Description: This is the loader test case file.\
 * Extentia: Copyright (c) 2022
 */

import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import { LoaderComponent } from 'components';
import { show, hide } from 'store/actions/actions';
import { MockConstants } from '../__mock__/mock.constants';
import { initStore } from 'store/store';

const store = initStore();

const LoadingText = /loading/i;

afterEach(cleanup);

it('loader rendered correctly', () => {
    store.dispatch(show(MockConstants.LOADER_LABEL));
    const loaderShowState = store.getState().loader.isActive;
    expect(loaderShowState).toBeTruthy();

    const { getByText } = render(
        <Provider store={store}>
            <LoaderComponent isActive={loaderShowState} />
        </Provider>,
    );
    const LoaderRendered = getByText(LoadingText);
    expect(LoaderRendered).toBeTruthy();
});

it('loader rendered correctly without passing label', () => {
    store.dispatch(show());
    const loaderShowState = store.getState().loader.isActive;
    expect(loaderShowState).toBeTruthy();

    const { getByText } = render(
        <Provider store={store}>
            <LoaderComponent isActive={loaderShowState} />
        </Provider>,
    );
    const LoaderRendered = getByText(MockConstants.LOADER_DEFAULT_LABEL);
    expect(LoaderRendered).toBeTruthy();
});

it('loader is not active', () => {
    store.dispatch(hide());
    const loaderShowState = store.getState().loader.isActive;
    expect(loaderShowState).toBeFalsy();
    const { container } = render(
        <Provider store={store}>
            <LoaderComponent isActive={loaderShowState} />
        </Provider>,
    );
    expect(container.firstChild).toBeNull();
});
