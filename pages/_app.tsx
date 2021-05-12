import "../styles/globals.css";
import React, { FC } from "react";
import { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;
