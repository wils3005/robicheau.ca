import React, { FC } from "react";

const HeroImage: FC = () => {
  return (
    <section className="hero">
      <img
        alt="Nicole wearing a blue button down shirt smiling on a street in Davenport with a colourful mural in the background"
        src="nicole-robicheau-outdoor-headshot-2800x1869.jpg"
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
  );
};

export default HeroImage;
