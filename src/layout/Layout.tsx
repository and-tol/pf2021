import React, { PropsWithChildren } from 'react';
import { LayoutProps } from './Layout.props';
// import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Head } from 'next/document';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '.';

export const Layout = ({
  children,
}: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <>
      <Meta />
      <main>
        <Header isLogo={false} />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
};
