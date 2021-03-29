import Head from "next/head";

const TITLE = "robicheau.ca";

function main(): JSX.Element {
  return (
    <Head>
      <title>{TITLE}</title>
      <link href="favicon.ico" rel="icon" />

      <link
        href="//fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,700|Roboto:300,400,400i,500,700"
        rel="stylesheet"
      />
    </Head>
  );
}

export default main;
