import Head from "next/head";
import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <Head>
        <title>MiPergamino</title>
        <meta property="og:title" content="MiPergamino" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:px-8 px-4 mt-32">{children}</div>
    </div>
  );
}
