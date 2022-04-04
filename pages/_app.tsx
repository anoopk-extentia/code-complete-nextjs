/**
 * Filename: _app.tsx \
 * Description: This is entry point for the website \
 * Extentia: Copyright (c) 2022
 */

import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from 'common/client';

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import { LayoutContainerComponent } from 'components';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
    <ApolloProvider client={client}>
        <LayoutContainerComponent>
            <Component {...pageProps} />
        </LayoutContainerComponent>
    </ApolloProvider>
);

export default wrapper.withRedux(MyApp);
