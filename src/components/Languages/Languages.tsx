import Link from 'next/link';
import React from 'react';
import { appLanguages } from '../../utils/AppConfig';
import { LanguagesProps } from './Languages.props';

export const Languages = ({ ...props }: LanguagesProps): JSX.Element => {
  return (
    <nav {...props}>
      {appLanguages.map(({lang, path}) => {
        return (
          <Link key={lang} href={path}>
            <a>{lang}</a>
          </Link>
        );
      })}
    </nav>
  );
};
