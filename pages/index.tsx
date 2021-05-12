import React, { FC } from "react";

import Main from "../components/main";
import HeroImage from "../components/sections/hero-image";
import WhyImRunning from "../components/sections/why-im-running";
import WhatICareAbout from "../components/sections/what-i-care-about";

const Index: FC = () => {
  return (
    <Main>
      <HeroImage />
      <WhyImRunning />
      <WhatICareAbout />
    </Main>
  );
};

export default Index;
