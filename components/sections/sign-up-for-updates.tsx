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
      method: "PUT",
    });

    const { errors } = (await res.json()) as {
      errors?: string[];
    };

    if (errors?.length) {
      setMessage(
        "Thanks for signing up, but something seems to have gone wrong, please contact nicole.robicheau@ndp.ca"
      );

      return;
    }

    firstNameInputElement.current.value = "";
    lastNameInputElement.current.value = "";
    emailInputElement.current.value = "";
    postalCodeInputElement.current.value = "";
    setMessage("Thanks for signing up!");
  };

  return (
    <section
      className="paddingz items-center justify-center bg-primary text-white"
      id="sign-up-for-updates"
    >
      <h2 className="text-white">Sign Up for Updates</h2>
      <form className="flex md:flex-row" onSubmit={onSubmit}>
        <input
          className="md:w-1/6"
          id="first-name"
          placeholder="First Name"
          ref={firstNameInputElement}
          required
          type="text"
        />

        <input
          className="md:w-1/6"
          id="last-name"
          placeholder="Last Name"
          ref={lastNameInputElement}
          required
          type="text"
        />

        <input
          className="md:w-1/6"
          id="email"
          placeholder="Email"
          ref={emailInputElement}
          required
          type="email"
        />

        <input
          className="md:w-1/6"
          id="postal-code"
          placeholder="Postal Code"
          ref={postalCodeInputElement}
          required
          type="text"
        />

        <button className="m-1 md:m-0 md:w-1/6" type="submit">
          Sign Up
        </button>
      </form>
      <p className="text-white">{message}</p>
      <div className="flex flex-col">
        <h3 className="text-center">Connect with Nicole</h3>
        <div className="flex flex-row justify-center">
          <a
            href="https://twitter.com/nicolerobicheau"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/people/Nicole-Robicheau/100067326921505"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              height="1em"
              stroke="currentColor"
              version="1.0"
              viewBox="0 0 50 50"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/nicolerobicheauto"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUpForUpdates;
