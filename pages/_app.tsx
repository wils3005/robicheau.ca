import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";

function main({ Component, pageProps }: AppProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default main;
