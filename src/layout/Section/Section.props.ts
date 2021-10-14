import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  description?: string;
  children: ReactNode;
}
