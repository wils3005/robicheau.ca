import React, { FC, ReactNode } from "react";

import Footer from "./footer";
import Head from "./head";
import Header from "./header";

const { location } = globalThis;

const Main: FC = ({ children }: { children: ReactNode }) => {
  if (location && location.hostname !== "localhost") {
    return null;
  }

  return (
    <main className="xl:mx-2">
      <Head />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Main;
