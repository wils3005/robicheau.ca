import React, { BaseSyntheticEvent, useRef, useState } from "react";

function Subscribe(): JSX.Element {
  const inputElement = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const onSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputElement.current.value,
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

    inputElement.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email-input">{"Email Address"}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputElement}
        required
        type="email"
      />

      <div>
        {message ??
          `I'll only send emails when new content is posted. No spam.`}
      </div>
      <button type="submit">{"SUBSCRIBE"}</button>
    </form>
  );
}

export default Subscribe;
