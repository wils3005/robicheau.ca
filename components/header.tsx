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
          <a href="/about">About Nicole</a>
          <a href="/#what-i-care-about">Action Items</a>
          <a href="/endorsements">Endorsements</a>
          <a href="mailto:nicole@robicheau.ca">Contact</a>
        </div>

        <a className="menu--cta button is-orphan" href="#sign-up-for-updates">
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Header;
