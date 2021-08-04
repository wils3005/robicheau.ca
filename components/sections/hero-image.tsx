import React, { FC } from "react";

const HeroImage: FC = () => {
  return (
    <section className="items-end">
      <img
        alt="Nicole wearing a blue button down shirt smiling on a street with a colourful mural in the background"
        src="nicole-robicheau-outdoor-headshot-2800x1869.jpg"
      />
      <div className="absolute flex flex-col items-end w-1/3">
        <p className="bg-primary font-black my-1 lg:my-2 text-lg md:text-4xl lg:text-5xl text-white w-full">
          Nicole
          <br />
          ROBICHEAU
        </p>

        <div className="bg-primary block my-1 lg:my-2 w-11/12">
          <p className="text-shadow font-extrabold text-lg md:text-xl lg:text-2xl text-white">
            Let&apos;s lead with humanity
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
