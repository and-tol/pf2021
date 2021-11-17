import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Contacts } from '../components';
import { Socials } from '../interfaces/socials.interface';
import { Layout } from '../layout/Layout';
import { AppConfig } from '../config/App.config';

export default function ContactPage({
  socials = null,
}: ContactPageProps): JSX.Element {
  return (
    <Layout className="bg-secondary font-secondary-color">
      <Head>
        <title> {AppConfig.title} | Contact</title>
      </Head>

      {socials && <Contacts socials={socials} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const socials = await response.json();

  if (!socials) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials },
  };
};

interface ContactPageProps {
  socials: Socials[] | null;
}
