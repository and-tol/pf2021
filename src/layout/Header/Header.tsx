import Link from 'next/link';
import React from 'react';
import { Languages, Logo, Navigation } from '../../components';
import { appLanguages, sections } from '../../utils/AppConfig';
import { HeaderProps } from './Header.props';

export const Header = ({
  className,
  isLogo,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
      {isLogo && <Logo />}

      <Navigation>
        {sections.map(({ id, sectionName }) => {
          return (
            <Link href={`#${id}`}>
              <a>{sectionName}</a>
            </Link>
          );
        })}
      </Navigation>

      {appLanguages.length > 1 && <Languages />}
    </header>
  );
};
