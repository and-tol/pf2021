import cn from "classnames";
import React from "react";
import { Heading, ProjectLink } from "..";
import { ProjectsProps } from "./Projects.props";
import styles from "./Projects.module.scss";

export const Projects = ({ ...props }: ProjectsProps): JSX.Element => {
  return (
    <section className={cn("wrapper", styles.projects)} {...props}>
      <Heading tag="h2" className={styles.title}>
        My Projects{" "}
      </Heading>
      <nav {...props}>
        <ProjectLink />
        <ProjectLink />
      </nav>
    </section>
  );
};
