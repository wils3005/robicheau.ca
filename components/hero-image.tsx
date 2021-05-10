import React, { FC } from "react";

// TODO: remove css classes: hero, hero--title
const HeroImage: FC = () => {
  return (
    <section className="hero">
      <img
        alt="Nicole wearing a blue button down shirt smiling on a street in Davenport with a colourful mural in the background"
        src="nicole-robicheau-outdoor-headshot-2800x1869.jpg"
      />
      <div className="hero--title flex flex-col items-end text-right w-1/3">
        <p className="bg-primary font-black my-1 p-1 sm:text-2xl md:text-4xl lg:text-5xl text-left text-white w-full">
          Nicole
          <br />
          ROBICHEAU
        </p>

        <div className="bg-primary my-1 p-1 pull-right text-left text-white w-11/12">
          <p className="font-bold p-1 sm:text-lg md:text-xl lg:text-2xl">
            Davenport
          </p>
          <p className="font-extrabold p-1 sm:text-xl md:text-2xl lg:text-3xl">
            Let&apos;s lead with humanity
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
