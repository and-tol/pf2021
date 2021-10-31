import React from "react";
import cn from "classnames";
import { FooterProps } from "./Footer.props";
import { Navigation } from "../../components";
import styles from "./Footer.module.scss";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, "bg-primary")} {...props}>
      <div className="wrapper">
        <Navigation />
      </div>
      <div className={styles.hidingBlock}></div>
    </footer>
  );
};
