import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal, Project } from '../../components';
import { AppConfig } from '../../config/App.config';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';
import { getServerData } from '../../utils/getServerData';
import styles from '../../styles/ModalPicture.module.scss';

export default function ProjectSlugPage({
  project = null,
}: ProjectAliasProps): JSX.Element {
  const { path, image } = project || {};
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Layout className="bg-primary">
      <Head>
        <title> {AppConfig.title} | Project</title>
      </Head>

      <Project project={project} handleShowModal={setShowModal} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Image
          src={`${path}${image}`}
          // layout="responsive"
          // sizes="50vw"
          // width={450}
          // height={450}
          // height={300}
          // objectFit="contain"
          // objectPosition="left top"
          // layout="fill"
          layout="fill"
          className={styles.picture}
          // priority
          loading="eager"
          placeholder="blur"
          blurDataURL={`${path}${image}`}
          // onLoadingComplete={(sizes) => handleImageLoader(sizes)}
        />
      </Modal>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: IProject[] = await getServerData('data', 'projects.json');

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = await context.params?.slug;
  const projects: IProject[] = await getServerData('data', 'projects.json');
  const project =
    projects && projects.filter((p): boolean => p.slug === slug)[0];

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
