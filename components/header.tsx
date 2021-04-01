function main(): JSX.Element {
  return (
    <header className="header">
      <nav className="menu">
        <a className="menu--brand" href="#">
          Nicole
          <br />
          ROBICHEAU
        </a>

        <div className="menu--links">
          <a href="#meet-nicole">Meet Nicole</a>
          <a href="#what-i-care-about">Action Items</a>
          <a href="mailto:nicole@robicheau.ca">Contact</a>
        </div>

        <a className="menu--cta button is-orphan" href="#sign-up-for-updates">
          Sign Up
        </a>
      </nav>
    </header>
  );
}

export default main;
