import React from "react";
import Head from "next/head";
import { Projects } from "../../components";
import { Layout } from "../../layout/Layout";
import { AppConfig } from "../../utils/App.config";
import { GetStaticProps } from "next";
import { IProject } from "../../interfaces";

export default function Index({ projects }: ProjectsProps): JSX.Element {
  return (
    <Layout>
      <Head>
        <title> {AppConfig.title} | Projects</title>
      </Head>

      <Projects projects={projects} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/projects`);
  const projects = await response.json();

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
    },
  };
};

interface ProjectsProps extends Record<string, unknown> {
  projects: IProject[];
}
