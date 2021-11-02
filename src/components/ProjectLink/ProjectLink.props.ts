import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { Project } from "../../interfaces";

export interface ProjectLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  project: Project;
}
