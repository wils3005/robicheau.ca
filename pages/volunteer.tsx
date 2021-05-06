import React, { FC, FormEventHandler, useRef, useState } from "react";

import Main from "../components/main";

const Volunteer: FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);
  const postalCode = useRef<HTMLInputElement>(null);
  const pronouns = useRef<HTMLInputElement>(null);
  const availability = useRef<HTMLInputElement>(null);
  const info = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/volunteer", {
      body: JSON.stringify({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        phoneNumber: phoneNumber.current.value,
        postalCode: postalCode.current.value,
        pronouns: pronouns.current.value,
        availability: availability.current.value,
        info: info.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    setMessage(
      ((await res.json()) as {
        [index: string]: unknown;
        message: string;
      }).message
    );
  };

  return (
    <Main>
      <section className="section is-accent">
        <h1 className="section--title">Volunteer</h1>

        <div className="section--content text-center">
          <form className="form" onSubmit={onSubmit}>
            <div className="form--columns">
              <input
                id="first-name"
                placeholder="First Name"
                ref={firstName}
                required
                type="text"
              />

              <input
                id="last-name"
                placeholder="Last Name"
                ref={lastName}
                required
                type="text"
              />

              <input
                id="pronouns"
                placeholder="Pronouns"
                ref={pronouns}
                required
                type="text"
              />

              <input
                id="email"
                placeholder="Email"
                ref={email}
                required
                type="email"
              />

              <input
                id="postal-code"
                placeholder="Postal Code"
                ref={postalCode}
                required
                type="text"
              />

              <input
                id="phone-number"
                placeholder="Phone Number"
                ref={phoneNumber}
                required
                type="text"
              />

              <input
                id="availability"
                placeholder="Availability"
                ref={availability}
                required
                type="text"
              />

              <input
                id="additional-information"
                placeholder="Additional Information"
                ref={info}
                required
                type="text"
              />

              <button type="submit">Submit</button>
            </div>

            {message}
          </form>
        </div>
      </section>
    </Main>
  );
};

export default Volunteer;
