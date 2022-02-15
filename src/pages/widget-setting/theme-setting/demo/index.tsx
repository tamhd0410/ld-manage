import React from 'react';
import styled from 'styled-components';
import styles from './index.module.scss';

interface IProps {
  headerBackground: string;
  headerColor: string;
  headerFonsize: string;
  headerText?: string;
}

const DemoTitle = styled.div`
  background-color: ${(props: IProps) => props.headerBackground};
  color: ${(props: IProps) => props.headerColor};
  font-size: ${(props: IProps) => props.headerFonsize};
`;

export const DemoTheme: React.FC<IProps> = ({
  headerBackground,
  headerColor,
  headerFonsize,
  headerText,
}) => {
  console.log(headerText);
  return (
    <div className={styles.demo__chatbot}>
      <div className={styles.demo__header}>
        <div className={styles.demo__buble__title}></div>
        <DemoTitle
          headerBackground={headerBackground}
          headerColor={headerColor}
          headerFonsize={headerFonsize}
          className={styles.demo__title}
        >
          <span>{headerText}</span>
        </DemoTitle>
      </div>
      <div className={styles.demo__body}>
        <div className={styles.demo__body__chat}></div>
        <div className={styles.demo__body__input}>
          <input placeholder='please input' />
        </div>
      </div>
    </div>
  );
};
