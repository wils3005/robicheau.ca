import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <nav className="paddingz content-center flex flex-col items-center justify-center w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <a href="/">
            <h1>
              Nicole
              <br />
              ROBICHEAU
            </h1>
          </a>
          <a
            className="bg-secondary h-fit paddingz rounded w-fit"
            href="https://act.ndp.ca/donate/membership-en"
            rel="noreferrer noopener"
            target="_blank"
          >
            Join the NDP
          </a>
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full">
          <a href="/meet-nicole">Meet Nicole</a>
          <a href="/#what-i-care-about">My Priorities</a>
          <a href="/endorsements">Endorsements</a>
          <a href="mailto:nicole@robicheau.ca">Contact</a>
          <a href="/#sign-up-for-updates">Subscribe</a>
          <a href="/volunteer">Volunteer</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
