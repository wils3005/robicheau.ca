import React, { FC } from "react";

const HeroImage: FC = () => {
  return (
    <section className="items-end">
      <img
        alt="Nicole wearing a blue button down shirt smiling on a street with a colourful mural in the background"
        src="nicole-robicheau-outdoor-headshot-2800x1869.jpg"
      />
      <div className="absolute flex flex-col items-end w-1/3 mt-1 md:mt-2 lg:mt-3 xl:mt-4">
        <div className="bg-primary">
          <p className=" font-black my-1 lg:my-2 text-lg md:text-4xl lg:text-5xl text-white w-full">
            Nicole
            <br />
            ROBICHEAU
          </p>
          <p className="font-bold text-md md:text-lg lg:text-xl text-secondary">
            FOR UNIVERSITY-ROSEDALE
          </p>
        </div>
        <p className="bg-primary text-shadow font-extrabold text-lg md:text-xl lg:text-2xl text-white mt-1 md:mt-2 lg:mt-3 xl:mt-4">
          Let&apos;s lead with humanity
        </p>
      </div>
    </section>
  );
};

export default HeroImage;
