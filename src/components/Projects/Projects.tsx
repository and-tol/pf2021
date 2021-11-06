import cn from "classnames";
import React from "react";
import { Heading, ProjectLink } from "..";
import { IProject } from "../../interfaces";
import styles from "./Projects.module.scss";
import { ProjectsProps } from "./Projects.props";

export const Projects = ({
  projects,
  ...props
}: ProjectsProps): JSX.Element => {
  return (
    <section className={cn("wrapper", styles.projects)} {...props}>
      <Heading tag="h4" className="pb-1">
        My Projects
      </Heading>

      <nav>
        {projects &&
          projects.map((project: IProject): JSX.Element => {
            return <ProjectLink key={project._id} project={project} />;
          })}
      </nav>
    </section>
  );
};
