import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { IProject } from "../../interfaces";

export interface ProjectLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  project: IProject;
}
