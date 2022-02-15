import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface IProps {
  title: string;
}
export const Header: React.FC<IProps> = ({ title }) => {
  return (
    <header>
      <div className={clsx(styles.header__infor, 'div__header')}>
        <span>{title}</span>
      </div>
    </header>
  );
};
