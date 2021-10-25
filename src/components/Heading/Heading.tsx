import cn from "classnames";
import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.scss";

export const Heading = ({ tag, children }: HeadingProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.h1, "font-primary-color")}>{children} </h1>
      );

    default:
      return <></>;
  }
};
