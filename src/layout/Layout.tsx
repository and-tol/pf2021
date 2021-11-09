import cn from "classnames";
import React, { PropsWithChildren } from "react";
import { Footer, Header } from ".";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

export const Layout = ({
  children,
  className = "bg-primary",
  ...props
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <div className={cn(styles.contentContainer, className)} {...props}>
      <Header className={className} />
      <main className={cn(styles.main, className)}>{children}</main>
      <Footer className={className} />
    </div>
  );
};
