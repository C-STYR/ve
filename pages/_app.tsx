import type { AppProps } from "next/app";
import "../styles/_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
