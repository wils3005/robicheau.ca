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
      <section className="section flex flex-col items-center mx-auto md:w-11/12 lg:w-10/12 xl:w-9/12">
        <h1 className="section--title text-3xl">Volunteer</h1>

        <p className="m-1 md:w-10/12 lg:w-9/12 xl:w-8/12">
          Thank you for your interest in volunteering to help me win the
          nomination to be the next federal NDP candidate in Davenport. Please
          complete this form and I’ll be in touch soon.
        </p>

        <p className="font-medium text-primary sm:text-lg md:text-xl lg:text-2xl">
          Let&apos;s lead with humanity.
        </p>

        <div className="section--content w-full">
          <p className="text-xs">*required</p>

          <form className="form text-center" onSubmit={onSubmit}>
            <div className="flex flex-col">
              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="first-name"
                placeholder="*FIRST NAME"
                ref={firstName}
                required
                type="text"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="last-name"
                placeholder="*LAST NAME"
                ref={lastName}
                required
                type="text"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="pronouns"
                placeholder="*PRONOUNS"
                ref={pronouns}
                required
                type="text"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="email"
                placeholder="*EMAIL"
                ref={email}
                required
                type="email"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="postal-code"
                placeholder="*POSTAL CODE"
                ref={postalCode}
                required
                type="text"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="phone-number"
                placeholder="*PHONE NUMBER"
                ref={phoneNumber}
                required
                type="text"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="availability"
                placeholder="AVAILABILITY"
                ref={availability}
                required
                type="text"
              />

              <input
                className="bg-primary my-1 placeholder-white text-white"
                id="additional-information"
                placeholder="ADDITIONAL INFORMATION"
                ref={info}
                required
                type="text"
              />
            </div>

            <button type="submit">Submit</button>
            {message}
          </form>
        </div>
      </section>
    </Main>
  );
};

export default Volunteer;
