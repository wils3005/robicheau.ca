import React, { FC, ReactNode } from "react";
import Head from "next/head";

import Footer from "./footer";
import Header from "./header";
import SignUpForUpdates from "./sections/sign-up-for-updates";

const TITLE = "robicheau.ca";

const Main: FC = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Head>
        <title>{TITLE}</title>
        <link href="favicon.ico" rel="icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
      </Head>
      <Header />
      {children}
      <SignUpForUpdates />
      <Footer />
    </main>
  );
};

export default Main;
