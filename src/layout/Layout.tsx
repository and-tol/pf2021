import React, { PropsWithChildren } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header, Footer, Meta } from ".";

export const Layout = ({
  children,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <>
      <Meta />
      <Header isLogo={false} />
      <main className={"bg-primary"}>{children}</main>
      <Footer />
    </>
  );
};
