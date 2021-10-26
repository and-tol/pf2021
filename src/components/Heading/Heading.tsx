import cn from "classnames";
import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.scss";

export const Heading = ({ tag, children }: HeadingProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1, "font-primary-color")}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.h3, "font-primary-color")}>{children}</h2>
      );
    case "h3":
      return <h3 className={cn(styles.h3, "font-third-color")}>{children}</h3>;

    default:
      return <></>;
  }
};
