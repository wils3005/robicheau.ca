import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>robicheau.ca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <hgroup>
          <h1 className={styles.title}>
            Welcome to <a href="https://robicheau.ca">robicheau.ca!</a>
          </h1>
          <h2>Secondary blah blah...</h2>
        </hgroup>
      </main>

      <footer className={styles.footer}>
        <p>top level footer</p>
      </footer>
    </div>
  );
}

export default Home;
