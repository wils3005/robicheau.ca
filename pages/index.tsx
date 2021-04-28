import React, { FC } from "react";

import Main from "../components/main";
import SignUpForUpdates from "../components/sign-up-for-updates";
import WhatICareAbout from "../components/what-i-care-about";

const Index: FC = () => {
  return (
    <Main>
      <section className="hero">
        <img
          alt="Nicole wearing a blue button down shirt smiling on a street in Davenport with a colourful mural in the background"
          src="nicole-robicheau-outdoor-headshot-2800-1869.jpg"
        />

        <div className="hero--title">
          <div className="hero--name">
            Nicole
            <br />
            ROBICHEAU
          </div>

          <div className="hero--location">Davenport</div>
        </div>
      </section>

      <section className="section section-meet is-accent" id="meet-nicole">
        <h1 className="section--title">Why I&apos;m Running</h1>
        <div className="section--content offset-bottom-zero">
          <div className="section--columns">
            <div className="section--columns-left">
              <p>
                Why I’m running I’ve spent my life working hard to help people
                suffering from disasters. I’ve seen the massive gap between the
                people who have too much, and the people who don’t have enough.
                I’ve seen how gaping inequality makes life so much harder for
                people. I’ve seen that band aid solutions just can’t get us
                through.
              </p>

              <p>
                My experiences have inspired me to seek more robust solutions to
                the humanitarian challenges we face globally. I’ve decided to
                delve into politics and seek the NDP nomination for the next
                federal election because I’m determined to change and influence
                the way decisions are made. Like you, I want meaningful change -
                now and for the future.
              </p>

              <p>
                How long can we keep putting out fires when we need to address
                the causes of the climate crisis?
              </p>

              <p>
                How long can we keep housing folks in temporary shelters when
                what we need is secure, affordable and safe housing, a human
                right in this community and in every community?
              </p>

              <p>
                Let’s imagine a Davenport where everyone has access to the
                prescriptions and paid sick time they need, and where our loved
                ones are safe in not-for-profit long-term care.
              </p>

              <p>
                But let’s go beyond imagining and work together NOW for big and
                bold changes - where no one is left behind.
              </p>

              <p>
                I am passionate about working with you for the changes we need
                in our community, and I am actively engaged with different
                levels of grassroots organizing. My community activism includes
                enabling support for the integration of Fatima House by rallying
                a group of neighbours, sitting on the board of a non-profit
                providing layered support to at risk youth, and chairing an ONDP
                LGBTQ sub-committee that focusses on outreach, both in the
                community and in the provincial legislature.
              </p>

              <p>
                I believe our Davenport community can be a model for Canada and
                the world in demonstrating that fair and equitable humanitarian
                policies can positively affect outcomes for all, and especially
                for our most vulnerable.
              </p>

              <p>
                Let’s put our collective power together and stand together to do
                what’s right.
              </p>

              <p>
                Being a humanitarian to me means actively engaging in social
                reforms, working to save lives and alleviate suffering, while at
                the same time maintaining and protecting human dignity. This is
                what we need to do right now more than anything. Please join me
                and let’s put our heart and soul into winning this riding - our
                community Davenport.
              </p>

              <img
                alt="Nicole in Nepal crouched down taking notes while talking to a man and his son who were impacted by a typhoon"
                className="image image1 is-landscape image--source"
                src="nicole-robicheau-field-5184-3456.jpg"
              />
            </div>
            <div className="section--columns-right">
              <img
                alt="Nicole sitting casually on a blue couch smiling and leaning forward"
                className="image image2 is-portrait image--source"
                src="nicole-robicheau-indoor-headshot-1869-2800.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatICareAbout />
      <SignUpForUpdates />
    </Main>
  );
};

export default Index;
