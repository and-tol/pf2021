import React from "react";
import Head from "next/head";
import { Layout } from "../layout/Layout";
import { AppConfig } from "../utils/App.config";
import { Contact } from "../components";

export default function ContactPage(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title> {AppConfig.title} | Contact</title>
      </Head>

      <Contact />
    </Layout>
  );
}
