import cn from 'classnames';
import { useRouter } from 'next/router';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Footer, Header } from '.';
import { PageBackgroundAppearance } from './Layout.props';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({
  children,
  className,
  ...props
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  const router = useRouter();
  const [footerAppearance, setFooterAppearance] =
    useState<PageBackgroundAppearance>('primary');
  const [headerAppearance, setHeaderAppearance] =
    useState<PageBackgroundAppearance>('primary');

  useEffect(() => {
    if (router.pathname.slice(1) === 'contact') {
      setFooterAppearance('white');
    }
  }, [router.pathname]);

  useEffect(() => {
    if (router.pathname.slice(1) === 'contact') {
      setHeaderAppearance('white');
    }
  }, [router.pathname]);

  return (
    <div className={cn(styles.contentContainer, className)} {...props}>
      <Header className={className} appearance={headerAppearance} />
      <main className={cn(styles.main, className)}>{children}</main>
      <Footer className={className} appearance={footerAppearance} />
    </div>
  );
};
