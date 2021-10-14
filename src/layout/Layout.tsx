import React, { PropsWithChildren } from "react";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import { Meta } from ".";

export const Layout = ({
  children,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <>
      <Meta />
      <Header isLogo={false} />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};
