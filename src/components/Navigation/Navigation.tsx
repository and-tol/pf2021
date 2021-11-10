import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { IndexSectionsId, Page, pages } from '../../utils/App.config';
import { NavigationProps } from './Navigation.props';
import styles from '../../styles/Navigation.module.scss';
import NavItemDots from '../../assets/horDots.svg';

export const Navigation = ({
  appearance,
  ...props
}: NavigationProps): JSX.Element => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav} {...props}>
      {pages.map(({ id, page, path }: Page, idx: number): JSX.Element => {
        return (
          <React.Fragment key={id}>
            <Link href={path}>
              <a
                className={cn(
                  styles.navItem,
                  { [styles.secondColor]: appearance === 'white' },
                  pathname === path ? styles.active : undefined
                )}
              >
                {page}
              </a>
            </Link>
            {idx !== pages.length - 1 ? (
              <NavItemDots className={styles.dots} />
            ) : (
              <></>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
