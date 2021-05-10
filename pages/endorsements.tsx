import React, { FC, ReactNode } from "react";

import Main from "../components/main";

const Endorsement: FC = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col lg:flex-row my-4">{children}</div>;
};

const Endorsements: FC = () => {
  return (
    <Main>
      <section className="section">
        <h1 className="section--title">Endorsements</h1>
        <Endorsement>
          <img
            alt="todo"
            className="object-cover w-full lg:w-1/3"
            src="chris-houston-and-jagmeet-singh-960x960.jpg"
          />

          <div className="flex flex-col w-full lg:w-2/3">
            <div className="bg-primary">
              <h2 className="text-white">
                Chris Houston, logistician, humanitarian, activist, and
                Davenport resident
              </h2>
            </div>

            <blockquote>
              “I have lived in Davenport for over 5 years and been an NDP member
              since the proud day I became a citizen in 2019, about 2 and a half
              years ago. My background is in both local and international
              humanitarian emergency response, I’ve worked at the Canadian Red
              Cross, World Health Organisation, Doctors without Borders, Grand
              Challenges Canada and the University of Toronto. Of course, this
              endorsement is written in my personal capacity.
            </blockquote>

            <br />

            <blockquote>
              I’ve known Nicole for about 5 years, we both work in emergency
              humanitarian response, supporting people in disasters, conflict
              and disease outbreaks. I know and appreciate that Nicole has a
              strong commitment to ensuring Canada does more to provide refuge
              to people fleeing violence.
            </blockquote>

            <br />

            <blockquote>
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

            <br />

            <blockquote>
              I proudly endorse Nicole Robicheau as the NDP candidate for
              Davenport.”
            </blockquote>
          </div>
        </Endorsement>
        <hr />
        <Endorsement>
          <img
            alt="todo"
            className="object-cover w-full lg:w-1/3"
            src="ann-kim-720x868.jpg"
          />

          <div className="flex flex-col w-full lg:w-2/3">
            <div className="bg-primary">
              <h2 className="px-2 py-1 text-white">
                Ann Kim, parent and local restaurant owner
              </h2>
            </div>

            <blockquote>
              “I am happy to hear that Nicole is running for the NDP nomination
              in my riding. I have lived in the Davenport riding for over 5
              years - our family runs a small business here and our kids go to
              school in the riding as well. Nicole will put in the work to
              support families like ours who make our living in industries that
              have been devastated by the pandemic. She is committed to showing
              up for her community.”
            </blockquote>
          </div>
        </Endorsement>
        <hr />
        <Endorsement>
          <div className="flex w-full lg:w-1/3">
            <img
              alt="todo"
              className="object-cover w-1/2"
              src="robert-hampsey-960×957.jpg"
            />

            <img
              alt="todo"
              className="object-cover w-1/2"
              src="stefanie-pest-2209x2756.jpg"
            />
          </div>

          <div className="flex flex-col w-full lg:w-2/3">
            <div className="bg-primary">
              <h2 className="text-white">
                Robert Hampsey and Stefanie Pest, co-chairs of the Ontario NDP
                LGBTQ Committee
              </h2>
            </div>

            <blockquote>
              “We were very pleased and excited to hear that Nicole has decided
              to run as a candidate for the NDP in the riding of Davenport.
              Nicole has been serving as our chairperson for our Outreach
              Sub-Committee, which has been highly successful in bringing
              2SLGBTQIA issues forward and bringing community awareness to the
              public. We are very proud of the work she has accomplished. This
              same passion and commitment will be brought to the table as an MP
              in Ottawa. We enthusiastically endorse Nicole Robicheau as
              candidate for the NDP in Davenport Riding.”
            </blockquote>
          </div>
        </Endorsement>
        <hr />
        <Endorsement>
          <img
            alt="todo"
            className="object-cover w-full lg:w-1/3"
            src="erika-wybourn-400x400.jpg"
          />

          <div className="flex flex-col w-full lg:w-2/3">
            <div className="bg-primary">
              <h2 className="px-2 py-1 text-white">
                Erika Wybourn, decades-long resident of Davenport
              </h2>
            </div>

            <blockquote>
              “I’m glad Nicole is running: Davenport needs a representative who
              cares and will do the work.”
            </blockquote>
          </div>
        </Endorsement>
      </section>
    </Main>
  );
};

export default Endorsements;
