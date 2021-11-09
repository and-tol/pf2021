import React from "react";
import cn from "classnames";
import { FooterProps } from "./Footer.props";
import { Navigation } from "../../components";
import styles from "./Footer.module.scss";

export const Footer = ({
  appearance = "primary",
  className,
  ...props
}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className="wrapper">
        <Navigation />
      </div>
      <div
        className={cn(styles.hidingBlock, className, {
          [styles.primary]: appearance === "primary",
          [styles.white]: appearance === "white",
        })}
      ></div>
    </footer>
  );
};
