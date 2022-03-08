import "../styles/globals.css";

import React, { FC } from "react";
import { AppProps } from "next/app";
import { wrapper } from "../store/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
