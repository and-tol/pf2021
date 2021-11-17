import React from 'react';
import Head from 'next/head';
import { Hero } from '../components';
import { Layout } from '../layout/Layout';
import { AppConfig } from '../config/App.config';

export default function Home(): JSX.Element {
  return (
    <Layout className="bg-primary">
      <Head>
        <title> {AppConfig.title} | About</title>
      </Head>
      <Hero />
    </Layout>
  );
}
