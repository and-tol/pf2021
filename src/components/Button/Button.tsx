import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  className,
  appearance,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn("button", className, {
        "btn-bg-primary": appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
