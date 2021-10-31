import React from "react";
import Head from "next/head";
import { Hero } from "../components";
import { Layout } from "../layout/Layout";
import { AppConfig } from "../utils/App.config";

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title> {AppConfig.title} | Projects</title>
      </Head>
    </Layout>
  );
}
