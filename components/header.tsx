import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header px-2 py-1 ">
      <nav className="menu">
        <a className="menu--brand" href="/">
          Nicole
          <br />
          ROBICHEAU
        </a>

        <div className="menu--links">
          <a href="/meet-nicole">Meet Nicole</a>
          <a href="/#what-i-care-about">My Priorities</a>
          <a href="/endorsements">Endorsements</a>
          <a href="mailto:nicole@robicheau.ca">Contact</a>
          <a href="/#sign-up-for-updates">Subscribe</a>
          <a href="/volunteer">Volunteer</a>
        </div>

        <a
          className="menu--cta button is-orphan"
          href="https://act.ndp.ca/donate/membership-en"
          rel="noreferrer noopener"
          target="_blank"
        >
          Join the NDP
        </a>
      </nav>
    </header>
  );
};

export default Header;
