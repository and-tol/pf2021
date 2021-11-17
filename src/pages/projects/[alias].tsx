import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Project } from '../../components';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';
import { AppConfig } from '../../config/App.config';

export default function ProjectAlias({
  project = null,
}: ProjectAliasProps): JSX.Element {
  return (
    <Layout className="bg-primary">
      <Head>
        <title> {AppConfig.title} | Project</title>
      </Head>

      <Project project={project} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/projects`);
  const projects: IProject[] = await response.json();

  const paths = projects.map((project) => ({
    params: { alias: project.alias },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/projects/${context.params?.alias}`
  );
  const project = await response.json();

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};

export interface ProjectAliasProps {
  project: IProject | null;
}
