import React, { FC, ReactNode } from "react";

import Footer from "./footer";
import Head from "./head";
import Header from "./header";

const Main: FC = ({ children }: { children: ReactNode }) => {
  return (
    <main className="xl:mx-1">
      <Head />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Main;
