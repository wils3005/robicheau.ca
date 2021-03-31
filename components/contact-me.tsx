import React, { BaseSyntheticEvent, useRef } from "react";

function main(): JSX.Element {
  const messageInputElement = useRef<HTMLInputElement>(null);
  const firstNameInputElement = useRef<HTMLInputElement>(null);
  const lastNameInputElement = useRef<HTMLInputElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);
  const phoneNumberInputElement = useRef<HTMLInputElement>(null);

  const onSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact-me"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <h1 style={{ color: "#ee7cb7" }}>Contact Me</h1>
      <p>
        You can reach me by email at nicole@robicheau.ca or by completing this
        form. Please feel free to get in touch with any issues you’d like to
        discuss- I look forward to hearing from you.
      </p>
      <form onSubmit={onSubmit}>
        <input
          id="message"
          placeholder="Message"
          ref={messageInputElement}
          required
          type="textarea"
        />

        <input
          id="first-name"
          placeholder="First Name"
          ref={firstNameInputElement}
          required
          type="text"
        />

        <input
          id="last-name"
          placeholder="Last Name"
          ref={lastNameInputElement}
          required
          type="text"
        />

        <input
          id="email"
          placeholder="Email"
          ref={emailInputElement}
          required
          type="email"
        />

        <input
          id="phone-number"
          placeholder="Phone Number"
          ref={phoneNumberInputElement}
          required
          type="text"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default main;
