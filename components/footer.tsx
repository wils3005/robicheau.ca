import React, { FC } from "react";

import SignUpForUpdates from "./sign-up-for-updates";

const Footer: FC = () => {
  return (
    <footer>
      <SignUpForUpdates />

      <div className="bg-secondary flex p-7 justify-center text-white">
        <svg
          className="inline"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>

        <a href="mailto:nicole@robicheau.ca">nicole@robicheau.ca</a>
      </div>
    </footer>
  );
};

export default Footer;
