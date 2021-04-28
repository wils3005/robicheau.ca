import React, { FC } from "react";
import NextHead from "next/head";

const TITLE = "robicheau.ca";

const Head: FC = () => {
  return (
    <NextHead>
      <title>{TITLE}</title>
      <link href="favicon.ico" rel="icon" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />

      <link
        href="//fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700|Roboto:300,400,400i,500,700"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Head;
