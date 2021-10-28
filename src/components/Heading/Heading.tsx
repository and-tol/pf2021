import cn from "classnames";
import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.scss";

export const Heading = ({
  tag,
  children,
  ...props
}: HeadingProps): JSX.Element => {
  const Tag = tag || "h1";
  switch (tag) {
    case "h1":
    case "h2":
      return (
        <Tag className={cn(styles[tag], "font-primary-color")} {...props}>
          {children}
        </Tag>
      );

    case "h3":
      return (
        <Tag className={cn(styles[tag], "font-third-color")} {...props}>
          {children}
        </Tag>
      );

    default:
      return <></>;
  }
};
