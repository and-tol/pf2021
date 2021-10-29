import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { sections } from "../../utils/App.config";
import { NavigationProps } from "./Navigation.props";
import styles from "../../styles/Navigation.module.scss";
import NavItemDots from "./horDots.svg";

export const Navigation = ({ ...props }: NavigationProps): JSX.Element => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav} {...props}>
      {sections.map(({ id, sectionName }, idx) => {
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
      })}
    </nav>
  );
};
