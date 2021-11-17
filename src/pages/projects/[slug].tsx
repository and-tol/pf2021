import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Project } from '../../components';
import { AppConfig } from '../../config/App.config';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';

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
  const response = await fetch(`${process.env.API_HOST}/projects`);
  const projects: IProject[] = await response.json();

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.API_HOST}/projects/${context.params?.slug}`
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
