import React, { PropsWithChildren } from "react";
import cn from "classnames";
import { LayoutProps } from "./Layout.props";
import { Header, Footer } from ".";
import styles from "./Layout.module.css";

export const Layout = ({
  children,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <div className={styles.contentContainer}>
      <Header />
      <main className={cn("bg-primary", styles.main)}>{children}</main>
      <Footer />
    </div>
  );
};
