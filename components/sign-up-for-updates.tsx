import React, { BaseSyntheticEvent, useRef, useState } from "react";
import { FaTwitterSquare } from "react-icons/fa";

function main(): JSX.Element {
  const nameInputElement = useRef<HTMLInputElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);
  const postalCodeInputElement = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        name: nameInputElement.current.value,
        email: emailInputElement.current.value,
        postalCode: postalCodeInputElement.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = (await res.json()) as { error?: string };

    if (error) {
      setMessage(error);
      return;
    }

    nameInputElement.current.value = "";
    emailInputElement.current.value = "";
    postalCodeInputElement.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <section
      id="sign-up-for-updates"
      style={{
        alignItems: "center",
        backgroundColor: "#ee7cb7",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1 style={{ color: "white" }}>Sign Up for Updates</h1>
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          id="name"
          placeholder="Name"
          ref={nameInputElement}
          required
          style={{ borderRadius: "0.5rem", margin: "1rem", padding: "0.5rem" }}
          type="text"
        />

        <input
          id="email"
          placeholder="Email"
          ref={emailInputElement}
          required
          style={{ borderRadius: "0.5rem", margin: "1rem", padding: "0.5rem" }}
          type="email"
        />

        <input
          id="postal-code"
          placeholder="Postal Code"
          ref={postalCodeInputElement}
          required
          style={{ borderRadius: "0.5rem", margin: "1rem", padding: "0.5rem" }}
          type="text"
        />

        <div>
          {message ??
            `I'll only send emails when new content is posted. No spam.`}
        </div>
        <button
          style={{
            backgroundColor: "#373636",
            borderRadius: "0.5rem",
            color: "white",
            margin: "1rem",
            padding: "0.5rem",
          }}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p style={{ color: "white" }}>
        Follow me on Twitter <FaTwitterSquare />
      </p>
    </section>
  );
}

export default main;
