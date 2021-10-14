import Link from "next/link";
import { AppLanguage, appLanguages } from "../../utils/Locale.config";
import { LanguagesNavProps } from "./LanguagesNav.props";

export const LanguagesNav = ({ ...props }: LanguagesNavProps): JSX.Element => {
  return (
    <nav {...props}>
      {Object.values(appLanguages).map((lang: AppLanguage): JSX.Element => {
        return (
          <Link key={lang.lang} href={lang.path}>
            <a>{lang.lang}</a>
          </Link>
        );
      })}
    </nav>
  );
};
