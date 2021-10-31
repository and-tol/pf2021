import cn from "classnames";
import { PProps } from "./P.props";
import styles from "./P.module.scss";

export const P = ({ children, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn("font-primary-color", styles.p)} {...props}>
      {children}
    </p>
  );
};
