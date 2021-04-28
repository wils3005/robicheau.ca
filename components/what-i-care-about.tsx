import React, { FC } from "react";

const WhatICareAbout: FC = () => {
  return (
    <section className="section section-care" id="what-i-care-about">
      <h1 className="section--title">What I Care About</h1>

      <div className="section--content">
        <h2>Climate Action</h2>

        <p>
          I have seen first-hand the devastating impacts of natural disasters,
          increasing year after year, while responding to earthquakes,
          hurricanes and floods. No matter where the disaster, it’s always the
          same people impacted over and over, those already living in precarious
          conditions, struggling long before the disaster strikes. We can’t keep
          reacting to disasters as they happen, we need to proactively put
          systems in place that protect those most impacted, and also take
          strong actions on reducing emissions and investing in renewable
          energy.
        </p>

        <h2>Affordable Housing</h2>

        <p>
          If there is one thing the COVID-19 pandemic has exposed even further,
          it’s the homelessness crisis we’re facing in Toronto. We need to put
          into action plans that have been in works for years and promised by
          governments but not implemented. Governments are putting money into
          temporary housing, but what we really need is to take that money and
          put it into long-term, sustainable, affordable, and supportive housing
          solutions. We also need to take a step back and work with communities
          to identify what they need, and work with them on creating this.
        </p>

        <p>
          There are also a large number of folks in Davenport and across the
          city of Toronto who are underhoused and being pushed out of the city.
          This can’t continue to happen; we have to make it harder to raise
          rents and close loopholes around evictions.
        </p>

        <h2>Equitable Access to Healthcare</h2>

        <p>
          I’ve worked in field hospitals sent to support folks affected by
          disasters in last mile contexts, where I’ve seen inequitable access to
          healthcare magnified. I believe in a healthcare system that
          prioritizes mental health along with physical health, and where eyes
          and teeth are taken care of just like the rest of the body. We also
          must remove barriers to access and acknowledge the systemic racism and
          transphobia that exists in healthcare, and work to do more to ensure
          everyone in Davenport has access to the healthcare and medications
          they need, at no cost.
        </p>

        <div className="image is-landscape image--wrap">
          <img
            alt="Nicole in a park in Davenport sitting down speaking to a pregnant woman with her partner and dog"
            className="image--source"
            src="nicole-robicheau-conversation-2800-1906.jpg"
          />
        </div>

        <h2>Welcoming Refugees</h2>

        <p>
          I have worked in refugee camps and spoken to folks who’ve travelled
          for years, sometimes with young children, escaping horrific situations
          in their home countries. We need to make sure Canada welcomes more
          refugees, and we need to work to remove the barriers and bureaucracy
          around this process. Once they’re in our community, we need to do more
          to support their integration into Davenport, and ensure they have
          access to all the services they need.
        </p>

        <h2>Indigenous Rights</h2>
        <p>
          I grew up in Saint Mary’s Bay, in Nova Scotia, where recently
          Mi&apos;kmaw fishers have been exercising their right to fish for a
          moderate livelihood. I stand firmly with the Mi&apos;kmaw and all
          other Indigenous peoples across Turtle Island asserting their rights
          to land and resources.
        </p>

        <h2>2SLGBTQIA+ Rights</h2>
        <p>
          I work to support 2SLGBTQIA+ rights in my community and as part of the
          Ontario NDP LGBTQ Committee. We need to do more, especially for trans
          people of colour, both in Canada, and abroad. Canada should play a
          greater role on the world stage supporting and championing 2SLGBTQIA+
          rights.
        </p>
      </div>
    </section>
  );
};

export default WhatICareAbout;
