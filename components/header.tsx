import Link from "next/link";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <header>
      <nav className="paddingz content-center flex flex-col items-center justify-center w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <Link href="/" passHref>
            <h1 className="inline-block">
              Nicole
              <br />
              ROBICHEAU
            </h1>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full">
          <Link href="/#meet-nicole">Meet Nicole</Link>
          <Link href="/#what-i-care-about">My Priorities</Link>
          <Link href="mailto:nicole@robicheau.ca">Contact</Link>
          <Link href="/#sign-up-for-updates">Subscribe</Link>
        </div>
      </nav>
    </header>
  );
};
