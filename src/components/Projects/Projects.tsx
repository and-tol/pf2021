import cn from "classnames";
import React from "react";
import { Heading, ProjectLink } from "..";
import { ProjectsProps } from "./Projects.props";
import styles from "./Projects.module.scss";

export const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  return (
    <section className={cn("wrapper", styles.projects)}>
      <Heading tag="h2" className={styles.title}>
        My Projects
      </Heading>
      <nav>
        {projects &&
          projects.map((project) => {
            console.log("project", project);
            return <ProjectLink key={project._id} project={project} />;
          })}
      </nav>
    </section>
  );
};
