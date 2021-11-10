import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLogo?: boolean;
  appearance?: FooterAppearance;
}

export type FooterAppearance = 'primary' | 'white';
