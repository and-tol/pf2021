import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { Projects } from "../../components";
import { IProject } from "../../interfaces/project.interface";
import { Layout } from "../../layout/Layout";
import { AppConfig } from "../../utils/App.config";

export default function ProjectsPage({ projects }: ProjectsProps): JSX.Element {
  return (
    <Layout className="bg-primary">
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
