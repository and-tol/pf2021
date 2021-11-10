// import { useEffect } from "react";
// import { useRouter } from "next/router";
import Head from 'next/head';
// import Heading from '../components/Heading';
// import styles from '../styles/404.module.scss';

const Error = (): JSX.Element => {
  // const router = useRouter();

  // useEffect(() => {
  //   let timerId = setTimeout(() => {
  //     router.push("/");
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [router]);

  return (
    <div className="wrapper">
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <h1>404</h1>
        <h2>Something is going wrong...</h2>
        {/* <Heading text='404' />
        <Heading tag='h2' text='Something is going wrong...' /> */}
      </div>
    </div>
  );
};

export default Error;
