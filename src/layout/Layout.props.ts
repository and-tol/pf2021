import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { FooterAppearance } from './Footer/Footer.props';

export interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  bgColor?: string;
  footerAppearance?: FooterAppearance;
}
