import React, { FC } from "react";

import Main from "../components/main";

const Endorsements: FC = () => {
  return (
    <Main>
      <section className="section">
        <h1 className="section--title">Endorsements</h1>
        <div className="flex">
          <img
            alt="todo"
            className="object-cover px-2 py-1 w-1/3"
            src="chris-houston-and-jagmeet-singh-960x960.jpg"
          />

          <div className="flex flex-col px-2 py-1">
            <div className="bg-pink-400 px-2 py-1">
              <h2 className="px-2 py-1 text-white">
                Chris Houston, logistician, humanitarian, activist, and
                Davenport resident
              </h2>
            </div>

            <blockquote className="px-2 py-1">
              “I have lived in Davenport for over 5 years and been an NDP member
              since the proud day I became a citizen in 2019, about 2 and a half
              years ago. My background is in both local and international
              humanitarian emergency response, I’ve worked at the Canadian Red
              Cross, World Health Organisation, Doctors without Borders, Grand
              Challenges Canada and the University of Toronto. Of course, this
              endorsement is written in my personal capacity.
            </blockquote>

            <blockquote className="px-2 py-1">
              I’ve known Nicole for about 5 years, we both work in emergency
              humanitarian response, supporting people in disasters, conflict
              and disease outbreaks. I know and appreciate that Nicole has a
              strong commitment to ensuring Canada does more to provide refuge
              to people fleeing violence.
            </blockquote>

            <blockquote className="px-2 py-1">
              I never thought I’d see the day that Canada experienced a
              humanitarian crisis, but here we are, and I know very well how a
              humanitarian background is relevant to the reality we are living
              right now, and to the work we must do in preventing emergencies
              like this occurring again. A strong progressive voice like
              Nicole’s is needed to push Canada to do better, to use our
              reputation and influence to speak out against violence,
              oppression, inequality and to be a sensible voice in a chaotic
              world, and an advocate for peace.
            </blockquote>

            <blockquote className="px-2 py-1">
              I proudly endorse Nicole Robicheau as the NDP candidate for
              Davenport.”
            </blockquote>
          </div>
        </div>

        <div className="flex">
          <img
            alt="todo"
            className="object-cover px-2 py-1 w-1/6"
            src="robert-hampsey-960×957.jpg"
          />

          <img
            alt="todo"
            className="object-cover px-2 py-1 w-1/6"
            src="stefanie-pest-2209x2756.jpg"
          />

          <div className="flex flex-col px-2 py-1">
            <div className="bg-pink-400 px-2 py-1">
              <h2 className="text-white px-2 py-1">
                Robert Hampsey and Stefanie Pest, co-chairs of the Ontario NDP
                LGBTQ Committee
              </h2>
            </div>

            <blockquote className="px-2 py-1">
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
          </div>
        </div>

        <div className="flex">
          <img
            alt="todo"
            className="object-contain px-2 py-1 w-1/3"
            src="erika-wybourn-400x400.jpg"
          />

          <div className="flex flex-col px-2 py-1">
            <div className="bg-pink-400 px-2 py-1">
              <h2 className="px-2 py-1 text-white">
                Erika Wybourn, decades-long resident of Davenport
              </h2>
            </div>

            <blockquote className="px-2 py-1">
              “I’m glad Nicole is running: Davenport needs a representative who
              cares and will do the work.”
            </blockquote>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Endorsements;
