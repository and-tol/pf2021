import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import router, { useRouter } from 'next/router';
import Link from 'next/link';
import { AppLanguage, appLanguages } from '../../utils/Locale.config';
import { LanguagesNavProps } from './LanguagesNav.props';
import styles from '../../styles/Navigation.module.scss';
import stylesDropdown from './LanguagesNav.module.scss';
import NavItemDots from '../../assets/horDots.svg';

export const LanguagesNav = ({ ...props }: LanguagesNavProps): JSX.Element => {
  const { pathname } = useRouter();
  const languages = Object.values(appLanguages);

  const [currentLang, setCurrentLang] = useState<string>('eng');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    languages.forEach((element: AppLanguage) => {
      if (element.path === pathname) {
        setCurrentLang(element.lang);
      }
    });
  }, [pathname]);

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
      {!visible && (
        <div className={stylesDropdown.navLang}>
          <button
            className={cn(
              'font-accent',
              styles.navItem,
              styles.active,
              // pathname === lang.path ? styles.active : undefined,
              stylesDropdown.btn
            )}
            onClick={handleVisible}
          >
            {currentLang}
          </button>
        </div>
      )}
      {visible && (
        <nav
          className={cn(stylesDropdown.navLang, stylesDropdown.dropdownNav)}
          {...props}
        >
          {languages.map((lang: AppLanguage, idx: number): JSX.Element => {
            return (
              <Link key={lang.lang} href={lang.path}>
                <>
                  <a
                    className={cn(
                      styles.navItem,
                      pathname === lang.path ? styles.active : undefined
                    )}
                    onClick={(e: React.MouseEvent) =>
                      handleLangPage(e, lang.path)
                    }
                  >
                    {lang.lang}
                  </a>
                  {idx !== Object.values(appLanguages).length - 1 ? (
                    <NavItemDots className={styles.dots} />
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
