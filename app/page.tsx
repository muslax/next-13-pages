import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const rs = await fetch("https://chinook.muslax.workers.dev/api/customers");
  return await rs.json();
}

export default async function Home() {
  console.log("Runtime:", process.env.NEXT_RUNTIME);
  const data = await getData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
