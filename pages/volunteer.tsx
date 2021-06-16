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
      method: "PUT",
    });

    const { errors } = (await res.json()) as {
      errors?: string[];
    };

    if (errors?.length) {
      setMessage(
        "Thanks for putting yourself forward to affect change in Davenport, however something seems to have gone wrong, please contact nicole@robicheau.ca"
      );
      return;
    }

    setMessage(
      "Thanks for putting yourself forward to affect change in Davenport. Someone from my team will be in touch soon. Let’s lead with humanity!"
    );
  };

  return (
    <Main>
      <section>
        <h2>Volunteer</h2>
        <div className="flex flex-col w-11/12 md:w-10/12 lg:9/12 xl:8-12">
          <p>
            Thank you for your interest in volunteering to help me win the
            nomination to be the next federal NDP candidate in Davenport. Please
            complete this form and I’ll be in touch soon.
          </p>
          <h3 className="text-primary">Let&apos;s lead with humanity.</h3>
          <p className="text-xs">*required</p>
          <form className="form text-center" onSubmit={onSubmit}>
            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="first-name"
              placeholder="*FIRST NAME"
              ref={firstName}
              required
              type="text"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="last-name"
              placeholder="*LAST NAME"
              ref={lastName}
              required
              type="text"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="pronouns"
              placeholder="*PRONOUNS"
              ref={pronouns}
              required
              type="text"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="email"
              placeholder="*EMAIL"
              ref={email}
              required
              type="email"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="postal-code"
              placeholder="*POSTAL CODE"
              ref={postalCode}
              required
              type="text"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="phone-number"
              placeholder="*PHONE NUMBER"
              ref={phoneNumber}
              required
              type="text"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="availability"
              placeholder="AVAILABILITY"
              ref={availability}
              required
              type="text"
            />

            <input
              className="bg-primary mx-0 my-1 placeholder-white text-white"
              id="additional-information"
              placeholder="ADDITIONAL INFORMATION"
              ref={info}
              required
              type="text"
            />

            <button type="submit">Submit</button>
          </form>
          <p className="text-primary">{message}</p>
        </div>
      </section>
    </Main>
  );
};

export default Volunteer;
