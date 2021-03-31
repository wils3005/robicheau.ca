import { MdEmail } from "react-icons/md";

function main(): JSX.Element {
  return (
    <footer
      style={{
        alignItems: "center",
        backgroundColor: "#373636",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          color: "white",
          display: "flex",
          padding: "1rem",
        }}
      >
        <MdEmail />
        <p>nicole@robicheau.ca</p>
      </div>
    </footer>
  );
}

export default main;
