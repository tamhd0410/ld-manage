import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface IProps {
  label?: string;
  className?: string;
}

export const FormItem: React.FC<IProps> = ({ label, children, className }) => {
  return (
    <div className={clsx(styles.form__item, className)}>
      {label && <label>{label}</label>}
      <div className={styles.form__item__input}>{children}</div>
    </div>
  );
};
