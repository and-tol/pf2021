import Head from "next/head";
import { AppConfig } from "../../utils/AppConfig";

export const Meta = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <title>{AppConfig.title}</title>
        <meta name="keywords" content={AppConfig.keywords} />
        <meta name="description" content={AppConfig.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
