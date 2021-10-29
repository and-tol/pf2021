import React, { PropsWithChildren } from "react";
import { LayoutProps } from "./Layout.props";
import { Header, Footer, Meta } from ".";

export const Layout = ({
  children,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <>
      <Header />
      <main className={"bg-primary"}>{children}</main>
      <Footer />
    </>
  );
};
