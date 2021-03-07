import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";

function main(): JSX.Element {
  return (
    <main className={styles.main}>
      <Head>
        <title>robicheau.ca</title>
        <link rel="icon" href="/robicheau.ca/favicon.ico" />
      </Head>

      <header>main header</header>
      <section>main section</section>

      <footer className={styles.footer}>
        <p>main footer</p>
      </footer>
    </main>
  );
}

export default main;
