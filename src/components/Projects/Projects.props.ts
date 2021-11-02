import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Project } from "../../interfaces";

export interface ProjectsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  projects: Project[];
}
