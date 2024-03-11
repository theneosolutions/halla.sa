import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Seulah - Easy Financing</title>
        <meta
          name="description"
          content="Sauleh is a forward-thinking fintech organization commited to advancing financial inclusion in saudi Arabia"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Sarala:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}
