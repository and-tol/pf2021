import cn from "classnames";
import { ButtonProps } from "./Button.props";

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
      })}
      {...props}
    >
      {children}
    </button>
  );
};
