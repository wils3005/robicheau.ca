import React, { FC } from "react";

import { Main } from "../components/main";
import { HeroImage } from "../components/sections/hero-image";
import { MeetNicole } from "../components/sections/meet-nicole";
import { WhatICareAbout } from "../components/sections/what-i-care-about";

export const Index: FC = () => {
  return (
    <Main>
      <HeroImage />
      <MeetNicole />
      <WhatICareAbout />
    </Main>
  );
};

// eslint-disable-next-line import/no-default-export
export default Index;
