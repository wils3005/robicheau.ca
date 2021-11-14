import React, { FC, ReactNode } from "react";
import Head from "next/head";

import Footer from "./footer";
import Header from "./header";
import SignUpForUpdates from "./sections/sign-up-for-updates";

const TITLE =
  " Nicole Robicheau | Let's lead with humanity | University-Rosedale, TO";

const Main: FC = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Head>
        <title>{TITLE}</title>
        <meta name="robots" content="index, follow" />
        <link href="favicon.ico" rel="icon" />
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
