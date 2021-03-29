function main(): JSX.Element {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        width: "100vw",
      }}
    >
      <img
        alt="TODO"
        src="nicole-robicheau-outdoor-headshot-2800-1869.jpg"
        style={{ maxWidth: "100%" }}
      ></img>

      <div style={{ position: "absolute", right: "0", top: "10%" }}>
        <div
          style={{
            backgroundColor: "#ee7cb7",
            color: "white",
            fontSize: "2.5rem",
            fontWeight: "bolder",
            margin: "1rem 0rem",
            padding: "0.5rem",
          }}
        >
          Nicole
          <br />
          ROBICHEAU
        </div>

        <div
          style={{
            backgroundColor: "#ee7cb7",
            color: "white",
            fontSize: "2rem",
            margin: "1rem 0px",
            padding: "0.5rem",
          }}
        >
          Davenport
        </div>
      </div>
    </section>
  );
}

export default main;
