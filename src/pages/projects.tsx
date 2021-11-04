import React from "react";
import Head from "next/head";
import cn from "classnames";
import { Projects } from "../components";
import { Layout } from "../layout/Layout";
import { AppConfig } from "../utils/App.config";
import { GetStaticProps } from "next";
import { Project } from "../interfaces";

export default function Index({ projects }: ProjectsProps): JSX.Element {
  console.log("p", projects);
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
  const response = await fetch(`http://localhost:3005/api/projects`);
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
  projects: Project[];
}
