import { PropsWithChildren } from 'react';
import { NavigationProps } from './Navigation.props';

export const Navigation = ({
  children,
}: PropsWithChildren<NavigationProps>): JSX.Element => {
  return <nav>{children}</nav>;
};
