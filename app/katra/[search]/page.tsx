// import Image from "next/image";
// import styles from "./page.module.css";

async function getData(search: string) {
  const rs = await fetch(`https://api.katra.web.id/kata/dengan/${search}`);
  return await rs.json();
}

export default async function Home({ params }: { params: { search: string } }) {
  const data = await getData(params.search);
  return (
    <div className="">
      <main className="">
        <h1 className="x">Next.js 13 on CF Pages!</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}
