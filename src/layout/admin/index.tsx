import React, { useState } from 'react';
import { NavBar } from 'components/nav-bar/index';
import styles from './index.module.scss';
import { Header } from 'components/header/index';

interface IProps {
  title: string;
  buttons?: string[];
}

export const LayoutAdmin: React.FC<IProps> = ({ title, buttons, children }) => {
  console.log('layout admin', buttons)
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.container__left}>
          <NavBar />
        </aside>
        <section className={styles.container__right}>
          <Header buttons={buttons} title={title} />
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>Powered by AI-FAQボット</div>
        </section>
      </div>
    </>
  );
};
