import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Layout } from "../layout/Layout";
import { AppConfig } from "../utils/App.config";
import { Contact } from "../components";
import { Socials } from "../interfaces/socials.interface";

export default function ContactPage({
  socials,
}: ContactPageProps): JSX.Element {
  return (
    <Layout className="bg-secondary font-secondary-color">
      <Head>
        <title> {AppConfig.title} | Contact</title>
      </Head>

      <Contact socials={socials} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const socials = await response.json();

  if (!socials) {
    return { notFound: true };
  }

  return {
    props: { socials },
  };
};

interface ContactPageProps {
  socials?: Socials[];
}
