import React, { FC } from "react";

import Main from "../components/main";
import HeroImage from "../components/hero-image";
import WhyImRunning from "../components/why-im-running";
import SignUpForUpdates from "../components/sign-up-for-updates";
import WhatICareAbout from "../components/what-i-care-about";

const Index: FC = () => {
  return (
    <Main>
      <HeroImage />
      <WhyImRunning />
      <WhatICareAbout />
      <SignUpForUpdates />
    </Main>
  );
};

export default Index;
