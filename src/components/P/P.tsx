import cn from "classnames";
import { PProps } from "./P.props";
import styles from "./P.module.scss";
import classNames from "classnames";

export const P = ({ children, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn("font-primary-color", styles.p, classNames)} {...props}>
      {children}
    </p>
  );
};
