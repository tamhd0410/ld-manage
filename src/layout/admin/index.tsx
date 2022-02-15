import React, { useState } from 'react';
import { NavBar } from 'components/nav-bar/index';
import styles from './index.module.scss';
import { Header } from 'components/header/index';

export const LayoutAdmin: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.container__left}>
          <NavBar />
        </aside>
        <section className={styles.container__right}>
          <Header title='Title bla bla'/>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>Powered by AI-FAQボット</div>
        </section>
      </div>
    </>
  );
};
