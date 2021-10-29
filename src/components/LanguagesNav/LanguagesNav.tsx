import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { AppLanguage, appLanguages } from "../../utils/Locale.config";
import { LanguagesNavProps } from "./LanguagesNav.props";
import stylesLang from "./LanguagesNav.module.scss";
import styles from "../../styles/Navigation.module.scss";
import NavItemDots from "../../assets/horDots.svg";

export const LanguagesNav = ({ ...props }: LanguagesNavProps): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <nav className={cn(styles.nav, stylesLang.navLang)} {...props}>
      {Object.values(appLanguages).map(
        (lang: AppLanguage, idx: number): JSX.Element => {
          return (
            <Link key={lang.lang} href={lang.path}>
              <>
                <a
                  className={cn(
                    styles.navItem,
                    pathname === lang.path ? styles.active : undefined
                  )}
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
        }
      )}
    </nav>
  );
};
