import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Halla - Invitations</title>
        <meta
          name="description"
          content="Effortlessly plan events and manage guests with Halla. Whether it's gatherings, parties, meetings, or more, our app simplifies the entire process, making event organization seamless and stress-free."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
