import React, { FC } from "react";

import Main from "../components/main";

const MeetNicole: FC = () => {
  return (
    <Main>
      <section className="section section-meet is-accent" id="meet-nicole">
        <h1 className="section--title">Meet Nicole</h1>
        <div className="section--content offset-bottom-zero">
          <div className="section--columns">
            <div className="section--columns-left">
              <p>
                Nicole Robicheau is a humanitarian worker with a background in
                journalism and human rights activism.
              </p>

              <p>
                She was born in Vancouver, grew up in a small community in Nova
                Scotia and now calls the Davenport riding in Toronto home. As a
                queer, French-speaking Canadian settler raised by a single
                mother, these intersections inform the work Nicole does and the
                way she engages with the world.
              </p>

              <p>
                Nicole has worked in coffee shops, movie theatres, arcades and
                in retail mall stores. She knows first-hand what it’s like to
                work minimum wage jobs in expensive cities and thinks all
                Canadians deserve to be paid a living wage. After many years
                working these jobs, Nicole went back to school to study
                journalism with a goal to shed light on underreported crises and
                human rights abuses.
              </p>

              <p>
                She spent time working with journalists in Zambia and Sierra
                Leone, supporting them to report more effectively on human
                rights abuses. She spent time volunteering at an independent
                newspaper in Moldova championing human rights as well as some
                time in Geneva volunteering for an organization that had her
                going to the UN Human Rights Council daily.
              </p>

              <p>
                For the past decade, Nicole has been engaged in humanitarian
                work, overseas and also in Canada, responding to countless
                natural disasters, mass migrations, protracted crises and
                epidemics, such as cholera and Ebola.
              </p>

              <p>
                She firmly believes in an equitable and just recovery from
                COVID-19, which has so clearly exposed the gaps in Canada’s
                healthcare system and has affected folks already most
                marginalized.
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
    </Main>
  );
};

export default MeetNicole;
