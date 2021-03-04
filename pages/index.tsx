import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robicheau.ca Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <hgroup>
          <h1 className={styles.title}>
            Welcome to <a href="https://robicheau.ca">robicheau.ca!</a>
          </h1>
          <h2>Secondary blah blah...</h2>
        </hgroup>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://robicheau.ca/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://robicheau.ca/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          ></a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>top level footer</p>
      </footer>
    </div>
  );
}

export default Home;
