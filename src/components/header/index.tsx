import React from 'react';
import styles from './index.module.scss';
import { PageHeader, Button } from 'antd';

interface IProps {
  title: string;
  buttons?: string[];
}
export const Header: React.FC<IProps> = ({ title, buttons }) => {
  const buttonHeader: any[] = []
  buttons?.map((item, index) => {
    buttonHeader.push(
      <Button key={index} type="primary">
        {item}
      </Button>
    )
  })
  return (
    <PageHeader
      className={styles.dev__header}
      onBack={() => window.history.back()}
      title={title}
      extra={buttonHeader}
    >
    </PageHeader>
  );
};
