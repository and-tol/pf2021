import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement, useState } from 'react';
import { Modal, Project } from '../../components';
import { AppConfig } from '../../config/App.config';
import { IProject } from '../../interfaces/project.interface';
import { Layout } from '../../layout/Layout';
import { getServerData } from '../../utils/getServerData';
import styles from '../../styles/ModalPicture.module.scss';

type PropsType = {
  children?: never;
  project: IProject | null;
};

const ProjectSlugPage: NextPage<PropsType> = ({
  project = null,
}): ReactElement => {
  const { path, image } = project ?? {};
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Layout className='bg-primary'>
      <Head>
        <title> {AppConfig.title} | Project</title>
      </Head>

      <Project project={project} handleShowModal={setShowModal} />
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Image
          src={`${path}${image}`}
          layout='fill'
          className={styles.picture}
          loading='eager'
          placeholder='blur'
          blurDataURL={`${path}${image}`}
        />
      </Modal>
    </Layout>
  );
};

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

export default ProjectSlugPage;
