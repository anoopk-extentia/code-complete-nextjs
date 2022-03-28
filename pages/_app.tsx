/**
 * Filename: _app.tsx \
 * Description: This is entry point for the website \
 * Extentia: Copyright (c) 2022
 */

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import { LayoutContainer } from 'components';
import '../styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
    <LayoutContainer Component={Component} {...pageProps} />
);

export default wrapper.withRedux(MyApp);
