import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Project } from '../../components';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';
import { AppConfig } from '../../utils/App.config';

export default function ProjectAlias({
  project,
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.API_HOST}/projects/${context.params?.alias}`
  );
  const project = await response.json();

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
};

export interface ProjectAliasProps {
  project: IProject;
}
