import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import { Heading, P } from '..';
import LineDots from './line-dots.svg';
import styles from './Project.module.scss';
import { ProjectProps } from './Project.props';

export const Project = ({ project, ...props }: ProjectProps): JSX.Element => {
  if (!project) {
    return (
      <section className="wrapper">
        <Heading tag="h2">Empty Project</Heading>;
      </section>
    );
  }
  const { name, path, url, image, technologies, description } = project;

  return (
    <section className={cn('wrapper', styles.section)} {...props}>
      <Heading tag="h4" className="pb-1">
        Project
      </Heading>
      <article className={styles.content}>
        <figure className={styles.image}>
          <Image
            src={`${path}${image}`}
            sizes="50vw"
            width="450"
            objectFit="contain"
            objectPosition="left top"
            layout="fill"
          />
        </figure>
        <section className={styles.text}>
          <div className={styles.titleContainer}>
            <LineDots className={styles.lineDots} />
            <h3 className={styles.title}>{name}</h3>
          </div>
          <ul className={styles.tagsContainer}>
            {technologies.map((technology: string, idx: number) => {
              return (
                <li key={idx} className={styles.tag}>
                  {technology}
                </li>
              );
            })}
          </ul>
          <P className="mt-1">{description}</P>
          <a
            href={url}
            className={cn('button', 'btn-bg-primary', 'mt-2')}
            target="_blank"
          >
            Open Project
          </a>
        </section>
      </article>
    </section>
  );
};
