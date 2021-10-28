import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AppLanguage, appLanguages } from "../../utils/Locale.config";
import { LanguagesNavProps } from "./LanguagesNav.props";
import styles from "./LanguagesNav.module.scss";

export const LanguagesNav = ({ ...props }: LanguagesNavProps): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <nav {...props}>
      {Object.values(appLanguages).map((lang: AppLanguage): JSX.Element => {
        return (
          <Link key={lang.lang} href={lang.path}>
            <a className={pathname === lang.path ? styles.active : undefined}>
              {lang.lang}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
