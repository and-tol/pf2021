import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import router, { useRouter } from 'next/router';
import Link from 'next/link';
import { AppLanguage, appLanguages } from '../../config/Locale.config';
import { LanguagesNavProps } from './LanguagesNav.props';
import styles from '../../styles/Navigation.module.scss';
import stylesDropdown from './LanguagesNav.module.scss';
import NavItemDots from '../../assets/horDots.svg';

export const LanguagesNav = ({
  appearance,
  ...props
}: LanguagesNavProps): JSX.Element => {
  const { pathname } = useRouter();
  const languages = Object.values(appLanguages);

  const [currentLang, setCurrentLang] = useState<string>('eng');
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisible = (): void => {
    setVisible(!visible);
  };

  const handleLangPage = (e: React.MouseEvent, path: string): void => {
    e.preventDefault();
    setVisible(!visible);
    router.push(path);
  };

  return (
    <>
      {languages.length > 1 && !visible && (
        <div className={stylesDropdown.navLang}>
          <button
            className={cn(
              'font-accent',
              styles.navItem,
              styles.active,
              // pathname === language.path ? styles.active : undefined,
              stylesDropdown.btn
            )}
            onClick={handleVisible}
          >
            {currentLang}
          </button>
        </div>
      )}
      {languages.length > 1 && visible && (
        <nav
          className={cn(stylesDropdown.navLang, stylesDropdown.dropdownNav)}
          {...props}
        >
          {languages.map((language: AppLanguage, idx: number): JSX.Element => {
            return (
              <Link key={language.lang} href={language.path}>
                <>
                  <a
                    className={cn(
                      styles.navItem,
                      { [styles.secondColor]: appearance === 'white' },
                      pathname === language.path ? styles.active : undefined
                    )}
                    onClick={(e: React.MouseEvent) =>
                      handleLangPage(e, language.path)
                    }
                  >
                    {language.lang}
                  </a>
                  {idx !== Object.values(appLanguages).length - 1 ? (
                    <NavItemDots
                      className={cn(styles.dots, {
                        [styles.secondColor]: appearance === 'white',
                      })}
                    />
                  ) : (
                    <></>
                  )}
                </>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
};
