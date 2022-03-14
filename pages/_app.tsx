/**
 * Filename: _app.tsx \
 * Description: This is entry point for the website \
 * Extentia: Copyright (c) 2022
 */

import '../styles/globals.css';

import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store/store';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
