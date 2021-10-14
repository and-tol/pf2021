import { useRouter } from "next/router";
import Link from "next/link";
import { sections } from "../../utils/App.config";
import { NavigationProps } from "./Navigation.props";
import styles from "./Navigation.module.scss";

export const Navigation = ({ ...props }: NavigationProps): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <nav {...props}>
      {sections.map(({ id, sectionName }) => {
        return (
          <Link key={id} href={`#${id}`}>
            <a className={pathname === id ? styles.active : ""}>
              {sectionName}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};
