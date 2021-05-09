import React, { BaseSyntheticEvent, FC, useRef, useState } from "react";

const SignUpForUpdates: FC = () => {
  const firstNameInputElement = useRef<HTMLInputElement>(null);
  const lastNameInputElement = useRef<HTMLInputElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);
  const postalCodeInputElement = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        firstName: firstNameInputElement.current.value,
        lastName: lastNameInputElement.current.value,
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

    firstNameInputElement.current.value = "";
    lastNameInputElement.current.value = "";
    emailInputElement.current.value = "";
    postalCodeInputElement.current.value = "";
    setMessage("Success! 🎉 You are now subscribed!");
  };

  return (
    <section
      className="section section-signup is-accent-full"
      id="sign-up-for-updates"
    >
      <h1 className="section--title">Sign Up for Updates</h1>
      <div className="section--content text-center">
        <form className="form" onSubmit={onSubmit}>
          <div className="form--columns">
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
              id="postal-code"
              placeholder="Postal Code"
              ref={postalCodeInputElement}
              required
              type="text"
            />

            <button type="submit">Sign Up</button>
          </div>
          {message ??
            `I'll only send emails when new content is posted. No spam.`}
        </form>
      </div>

      <div className="text-center">
        <span className="icon-link">
          <a
            href="https://twitter.com/nicorobot"
            target="_blank"
            rel="noreferrer"
          >
            Follow me on Twitter
          </a>
          <svg
            className="inline"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default SignUpForUpdates;
