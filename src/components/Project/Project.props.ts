import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IProject } from "../../interfaces";

export interface ProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  project: IProject;
}
