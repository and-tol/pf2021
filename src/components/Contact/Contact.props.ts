import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Socials } from "../../interfaces/socials.interface";

export interface ContactProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  socials: Socials[];
}
