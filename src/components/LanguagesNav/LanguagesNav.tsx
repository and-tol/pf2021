import Link from "next/link";
import { appLanguages } from "../../utils/AppConfig";
import { LanguagesNavProps } from "./LanguagesNav.props";

export const LanguagesNav = ({ ...props }: LanguagesNavProps): JSX.Element => {
  return (
    <nav {...props}>
      {appLanguages.map(({ lang, path }) => {
        return (
          <Link key={lang} href={path}>
            <a>{lang}</a>
          </Link>
        );
      })}
    </nav>
  );
};
