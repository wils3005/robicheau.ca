import React, { FC, ReactNode } from "react";

const P: FC = ({ children }: { children: ReactNode }) => {
  return <p className="m-1 md:m-2 lg:m-3 xl:m-4">{children}</p>;
};

const WhyImRunning: FC = () => {
  return (
    <section className="section section-meet bg-primary" id="why-im-running">
      <div className="bg-white mx-auto px-2 py-1 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <h1 className="section--title text-3xl">Why I&apos;m Running</h1>
        <P>
          How long can we keep putting out fires when we need to address the
          causes of the climate crisis?
        </P>

        <P>
          How long can we keep housing folks in temporary shelters when secure,
          affordable and safe housing should be a human right in this community
          and in every community?
        </P>

        <P>
          As a humanitarian worker, I’ve seen the massive gap between the people
          who have too much and the people who don’t have enough. I’ve seen how
          growing inequality makes life so much harder for people. I’ve also
          seen that band aid solutions just can’t get us through.
        </P>

        <P>
          My experiences have shown me that human well-being is fragile, and
          that’s inspired me to seek better solutions to the challenges we face
          in our local communities and around the globe. I’m determined to
          change the way decisions are made, and that’s why I’m seeking the NDP
          nomination for the next federal election. Like you, I want meaningful
          change - now and for the future.
        </P>

        <P>
          I am actively engaged with different levels of grassroots community
          activism. I rallied a group of neighbours garnering support for the
          integration of Fatima House. I sit on the board of a non-profit
          providing layered support to at risk youth and also chair an ONDP
          LGBTQ sub-committee that focuses on outreach, both in the community
          and in the provincial legislature. I am passionate about working with
          you for the changes we need in our community, and the influence I can
          bring to Parliament Hill as your representative.
        </P>

        <P>
          Let’s imagine a Davenport where everyone has access to the
          prescriptions and paid sick time they need, and where our loved ones
          are safe in not-for-profit long-term care. But let’s go beyond
          imagining and work together NOW for big and bold changes - where no
          one is left behind.
        </P>

        <P>
          I believe our Davenport community can be a model for Canada and the
          world in demonstrating that fair and equitable humanitarian policies
          can positively affect outcomes for everyone, and that changes we make
          to protect our most vulnerable will make life better for us all.
        </P>

        <P>
          To me, being a humanitarian means protecting human dignity, which
          requires actively engaging in social reforms, working to save lives
          and to alleviate suffering. I’m here now to harness our collective
          power to do what’s right for our community, our country and our
          planet. Please join me and let’s put our hearts and souls into winning
          this riding, our community Davenport.
        </P>
      </div>
    </section>
  );
};

export default WhyImRunning;
