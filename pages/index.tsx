import React, { FC } from "react";

import Main from "../components/main";
import HeroImage from "../components/sections/hero-image";
import MeetNicole from "../components/sections/meet-nicole";
import WhatICareAbout from "../components/sections/what-i-care-about";

const Index: FC = () => {
  return (
    <Main>
      <HeroImage />
      <MeetNicole />
      <WhatICareAbout />
    </Main>
  );
};

export default Index;
