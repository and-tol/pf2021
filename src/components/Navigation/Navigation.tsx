import Link from 'next/link';
import { NavigationProps } from './Navigation.props';

export const Navigation = (props: NavigationProps): JSX.Element => {
  return <nav>{props.children}</nav>;
};
