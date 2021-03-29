function main(): JSX.Element {
  return (
    <header style={{ backgroundColor: "#ee7cb7", display: "flex" }}>
      <nav
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-around",
          padding: "0.5rem",
          width: "100%",
        }}
      >
        <a href="#" style={{ fontWeight: "bold", color: "#373636" }}>
          Nicole
          <br />
          ROBICHEAU
        </a>
        <a href="#meet-nicole" style={{ color: "#fff" }}>
          Meet Nicole
        </a>
        <a href="#what-i-care-about" style={{ color: "#fff" }}>
          Action Items
        </a>
        <a href="#contact-me" style={{ color: "#fff" }}>
          Contact
        </a>
        <a href="#sign-up-for-updates" style={{ color: "#fff" }}>
          <div
            style={{
              backgroundColor: "#373636",
              borderRadius: "0.5rem",
              padding: "0.5rem 1.0rem",
            }}
          >
            Sign Up
          </div>
        </a>
      </nav>
    </header>
  );
}

export default main;
