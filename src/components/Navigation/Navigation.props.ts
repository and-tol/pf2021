import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FooterAppearance } from '../../layout/Footer/Footer.props';

export interface NavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance?: FooterAppearance;
}
