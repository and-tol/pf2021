import React from "react";
import type { AppProps } from "next/app";
// import "sanitize.css";
import "../styles/globals.scss";
import { Meta } from "../layout";

import { config } from "@fortawesome/fontawesome-svg-core";
import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

// ?   Раскомментируйте этот метод только в том случае, если у вас есть требования к блокировке данных для каждой отдельной страницы в вашем приложении. Это отключает возможность автоматической статической оптимизации, в результате чего каждая страница в вашем приложении отображается на стороне сервера.
/*
MyApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
});
*/

export default MyApp;
