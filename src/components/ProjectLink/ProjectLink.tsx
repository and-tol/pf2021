import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./ProjectLink.module.scss";
import ArrowIcon from "./arrow.svg";
import { ProjectLinkProps } from "./ProjectLink.props";

export const ProjectLink = ({
  project,
  ...props
}: ProjectLinkProps): JSX.Element => {
  return (
    <>
      <Link href="">
        <a className={styles.link} {...props}>
          <span className={styles.name}>{project.name}</span>
          <ArrowIcon className={styles.icon} />
          <div className={styles.image}>
            <Image
              src={`/assets/images/${project.imageSmall}`}
              width="170"
              height="170"
              layout="intrinsic"
              className={styles.image}
            />
          </div>
        </a>
      </Link>
    </>
  );
};
