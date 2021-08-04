import React, { FC } from "react";

const WhyImRunning: FC = () => {
  return (
    <section className="bg-primary" id="why-im-running">
      <div className="bg-white block w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <h2>Why I&apos;m Running</h2>
        <div className="relative pt-vid">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 p-2"
            frameBorder="0"
            height="100%"
            src="https://www.youtube.com/embed/5W0yPFC9SMk"
            title="YouTube video player"
            width="100%"
          />
        </div>

        <p>
          How long can we keep putting out fires when we need to address the
          causes of the climate crisis?
        </p>
        <p>
          How long can we keep housing folks in temporary shelters when secure,
          affordable and safe housing should be a human right in this community
          and in every community?
        </p>
        <p>
          As a humanitarian worker, I’ve seen the massive gap between the people
          who have too much and the people who don’t have enough. I’ve seen how
          growing inequality makes life so much harder for people. I’ve also
          seen that band aid solutions just can’t get us through.
        </p>
        <p>
          My experiences have shown me that human well-being is fragile, and
          that’s inspired me to seek better solutions to the challenges we face
          in our local communities and around the globe. I’m determined to
          change the way decisions are made, and that’s why I’m seeking the NDP
          nomination for the next federal election. Like you, I want meaningful
          change - now and for the future.
        </p>
        <p>
          I am actively engaged with different levels of grassroots community
          activism. I rallied a group of neighbours garnering support for the
          integration of Fatima House. I sit on the board of a non-profit
          providing layered support to at risk youth and also chair an ONDP
          LGBTQ sub-committee that focuses on outreach, both in the community
          and in the provincial legislature. I am passionate about working with
          you for the changes we need in our community, and the influence I can
          bring to Parliament Hill as your representative.
        </p>
        <p>
          Let’s imagine a community where everyone has access to the
          prescriptions and paid sick time they need, and where our loved ones
          are safe in not-for-profit long-term care. But let’s go beyond
          imagining and work together NOW for big and bold changes - where no
          one is left behind.
        </p>
        <p>
          I believe our community can be a model for Canada and the world in
          demonstrating that fair and equitable humanitarian policies can
          positively affect outcomes for everyone, and that changes we make to
          protect our most vulnerable will make life better for us all.
        </p>
        <p>
          To me, being a humanitarian means protecting human dignity, which
          requires actively engaging in social reforms, working to save lives
          and to alleviate suffering. I’m here now to harness our collective
          power to do what’s right for our community, our country and our
          planet. Please join me and let’s put our hearts and souls into winning
          this riding, our community.
        </p>
      </div>
    </section>
  );
};

export default WhyImRunning;
