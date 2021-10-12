import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface NavigationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
