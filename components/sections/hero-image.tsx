import Image from "next/image";
import React, { FC } from "react";

export const HeroImage: FC = () => {
  return (
    <section className="items-end">
      <Image
        alt="Nicole wearing a blue button down shirt smiling on a street with a colourful mural in the background"
        height={1869}
        src="/nicole-robicheau-outdoor-headshot-2800x1869.jpg"
        width={2800}
      />
    </section>
  );
};
