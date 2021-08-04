import React, { FC } from "react";

import Main from "../components/main";

const MeetNicole: FC = () => {
  return (
    <Main>
      <section id="meet-nicole">
        <img
          alt="Nicole in Nepal crouched down taking notes while talking to a man and his son who were impacted by a typhoon"
          src="nicole-robicheau-field-5184x3456.jpg"
        />
        <h2>Meet Nicole</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-2/3">
            <p>
              Hi, I’m Nicole, a humanitarian worker with a background in
              journalism and human rights activism.
            </p>
            <p>
              I was born in Vancouver, grew up in a small community in Nova
              Scotia, and now call Toronto home. I’m a queer, non-binary,
              Acadian settler raised by a single mother, and these intersections
              inform the work I do, and the way I engage with the world.
            </p>
            <p>
              I’ve worked in coffee shops, movie theatres, arcades and in retail
              mall stores. I know first-hand what it’s like to work minimum wage
              jobs in expensive cities and think all Canadians deserve to be
              paid a living wage. After many years working these jobs, I went
              back to school to study journalism with a goal to shed light on
              underreported crises and human rights abuses.
            </p>
            <p>
              I spent time working with journalists in Zambia and Sierra Leone,
              supporting them to report more effectively on human rights abuses.
              I spent time volunteering at an independent newspaper in Moldova
              championing human rights as well as some time in Geneva
              volunteering for an organization that had me going to the UN Human
              Rights Council daily.
            </p>
            <p>
              For the past decade, I have been engaged in humanitarian work,
              overseas and also in Canada, responding to countless natural
              disasters, mass migrations, protracted crises and epidemics. My
              first humanitarian mission was to Haiti after the 2010 earthquake,
              and I returned several years later to respond to Hurricane
              Matthew. I have also supported responses to cholera in Sierra
              Leone, and to the 2014 West Africa Ebola outbreak. I was in Nepal
              after the earthquake in 2015, in the Philippines after Typhoon
              Haiyan, and in Bosnia recently for a mass migration response. In
              Canada, I supported a BC wildfire operation, as well as the
              Alberta floods response in 2012.
            </p>
            <p>
              Most recently, I have been supporting COVID-19 responses abroad
              remotely. I firmly believe in an equitable and just recovery from
              COVID-19, which has so clearly exposed the gaps in Canada’s
              healthcare system and has affected folks already most
              marginalized.
            </p>
          </div>
          <img
            alt="Nicole sitting casually on a blue couch smiling and leaning forward"
            className="lg:w-1/3"
            src="nicole-robicheau-indoor-headshot-1869x2800.jpg"
          />
        </div>
      </section>
    </Main>
  );
};

export default MeetNicole;
