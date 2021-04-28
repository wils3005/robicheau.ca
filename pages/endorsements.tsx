import React, { FC } from "react";

import Main from "../components/main";

const Endorsements: FC = () => {
  return (
    <Main>
      <section className="section is-accent">
        <h1 className="section--title">Endorsements</h1>
        <div className="section--content offset-bottom-zero">
          <div className="section--columns">
            <blockquote>
              We were very pleased and excited to hear that Nicole has decided
              to run as a candidate for the NDP in the riding of Davenport.
              Nicole has been serving as our chairperson for our Outreach
              Sub-Committee, which has been highly successful in bringing
              2SLGBTQIA issues forward and bringing community awareness to the
              public. We are very proud of the work she has accomplished. This
              same passion and commitment will be brought to the table as an MP
              in Ottawa. We enthusiastically endorse Nicole Robicheau as
              candidate for the NDP in Davenport Riding.
            </blockquote>
            <p>
              Robert Hampsey and Stefanie Pest, co-chairs of the Ontario NDP
              LGBTQ Committee
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Endorsements;
