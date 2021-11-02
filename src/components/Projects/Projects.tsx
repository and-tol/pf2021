import cn from "classnames";
import React from "react";
import { GetStaticProps } from "next";
import { Heading, ProjectLink } from "..";
import { ProjectsProps } from "./Projects.props";
import styles from "./Projects.module.scss";

export const Projects = ({
  projects,
  ...props
}: ProjectsProps): JSX.Element => {
  console.log("projects:", projects);

  const project = {
    _id: "0",
    name: "Артём Пицца",
    alias: "artem-pizza",
    path: "",
    imageSmall: "artem-pizza.png",
    image: "artem-pizza.png",
    technologies: ["React", "Redux"],
    description: "SPA",
  };

  return (
    <section className={cn("wrapper", styles.projects)} {...props}>
      <Heading tag="h2" className={styles.title}>
        My Projects{" "}
      </Heading>
      <nav {...props}>
        <ProjectLink project={project} />
        {/* <ProjectLink project={project} /> */}
      </nav>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`http://localhost:3005/data`);
  const data = (await response.json()) || [];

  return {
    props: {
      projects: data,
    },
  };
};
