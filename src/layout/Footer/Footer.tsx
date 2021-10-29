import React from "react";
import cn from "classnames";
import { FooterProps } from "./Footer.props";
import { Navigation, Logo } from "../../components";
import styles from "./Footer.module.scss";

export const Footer = ({ isLogo, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, "bg-primary")} {...props}>
      <div className="wrapper">
        {isLogo && <Logo />}
        <Navigation />
      </div>
    </footer>
  );
};
