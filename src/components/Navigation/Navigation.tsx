import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { Section, sections } from "../../utils/App.config";
import { NavigationProps } from "./Navigation.props";
import styles from "../../styles/Navigation.module.scss";
import NavItemDots from "../../assets/horDots.svg";

export const Navigation = ({ ...props }: NavigationProps): JSX.Element => {
  const { pathname } = useRouter();
  console.log("pathname", pathname);
  return (
    <nav className={styles.nav} {...props}>
      {sections.map(
        ({ id, sectionName }: Section, idx: number): JSX.Element => {
          return (
            <Link key={id} href={`#${id}`}>
              <>
                <a
                  className={cn(
                    styles.navItem,
                    pathname === id ? styles.active : undefined
                  )}
                >
                  {sectionName}
                </a>
                {idx !== sections.length - 1 ? (
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
