import cn from "classnames";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Footer, Header } from ".";
import styles from "./Layout.module.css";
import { LayoutProps, FooterAppearance } from "./Layout.props";

export const Layout = ({
  children,
  className,
  ...props
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  const router = useRouter();
  const [footerAppearance, setFooterAppearance] =
    useState<FooterAppearance>("primary");

  useEffect(() => {
    if (router.pathname.slice(1) === "contact") {
      setFooterAppearance("white");
    }
  }, [router.pathname]);

  return (
    <div className={cn(styles.contentContainer, className)} {...props}>
      <Header className={className} />
      <main className={cn(styles.main, className)}>{children}</main>
      <Footer className={className} appearance={footerAppearance} />
    </div>
  );
};
