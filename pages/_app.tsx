import { AppProps } from "next/app";
import React, { FC } from "react";

import "../styles/globals.css";

export const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// eslint-disable-next-line import/no-default-export
export default App;
