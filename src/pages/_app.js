import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import "../../src/Scss/main.css";
import { createCustomTheme } from "../../src/Themes/index";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const theme = createCustomTheme();
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const getLayout = Component.getLayout || ((page) => page);

  
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", stopLoading);
    router.events.on("routeChangeError", stopLoading);

    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", stopLoading);
      router.events.off("routeChangeError", stopLoading);
    };
  }, [router]);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  return (
    <>
      <Head>
      <title>Gadget gallery</title>
        <meta name="description" content="gadget-gallery" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8" 
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {loading && "Loading..."}
      {!loading && isClientLoaded && (
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
