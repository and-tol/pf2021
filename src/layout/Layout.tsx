import React, { PropsWithChildren } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = (children: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main role='main'>
        {children}
      </main>
      <Footer />
    </div>
  )
}