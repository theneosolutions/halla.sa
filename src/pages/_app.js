import Head from "next/head";
import "../styles/global.css";
import Template from "@/app/components/layouts/Template2";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const privateRoutes = [
    "/dashboard/profile",
    "/dashboard/earning",
    "/dashboard/favourite",
    "/dashboard/event-going",
    "/dashboard/change-password",
    "/dashboard/payment",
    "/dashboard/text-messages",
    "/dashboard/currency",
    "/dashboard/language",
    "/dashboard/linked-accounts",
    "/dashboard",
  ];

  const privateRoutesTemplate = privateRoutes.includes(router.pathname);
  return (
    <>
      <Head>
        <title>Halla</title>
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
        {privateRoutesTemplate && (
          <Template>
            <Component {...pageProps} />
          </Template>
        )}
        {!privateRoutesTemplate && <Component {...pageProps} />}
      </div>
    </>
  );
}
