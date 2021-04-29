import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
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
        </div>

        <a className="menu--cta button is-orphan" href="/volunteer">
          Volunteer
        </a>
      </nav>
    </header>
  );
};

export default Header;
