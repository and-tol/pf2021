import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import { Heading } from '../components';

const ComingSoonPage = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    let timerId = setTimeout(() => {
      router.push('/');
    }, 4000);
    return () => {
      clearTimeout(timerId);
    };
  }, [router]);

  return (
    <div className="wrapper center">
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div>
        <Heading tag="h1">Coming Soon</Heading>
        <Heading tag="h2">In Developing</Heading>
      </div>
    </div>
  );
};

export default ComingSoonPage;
