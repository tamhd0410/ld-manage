import React, { useState } from 'react';
import { NavBar } from 'components/nav-bar/index';
import styles from './index.module.scss';
import { Header } from 'components/header/index';

interface IProps {
  title: string;
}

export const LayoutAdmin: React.FC<IProps> = ({ title, children }) => {
  console.log('layout admin', children)
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.container__left}>
          <NavBar />
        </aside>
        <section className={styles.container__right}>
          <Header title={title} />
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>Powered by AI-FAQボット</div>
        </section>
      </div>
    </>
  );
};
