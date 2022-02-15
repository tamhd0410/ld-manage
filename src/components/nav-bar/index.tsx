import React, { useEffect, useState } from 'react';
import { Menu, Avatar } from 'antd';
import { LogoutIcon } from 'assets/icons/exit';
import {
  AppstoreOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  UserOutlined,
  LineChartOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [current, setCurrent] = useState<string>('mail');
  const navigate = useNavigate();

  let currentPage = window.location.pathname.substring(1);
  console.log(currentPage);
  const handleClick = (e: any) => {
    console.log('click ', e);
    navigate(`/${e.key}`);
  };

  useEffect(() => {
    setCurrent(currentPage);
  }, [currentPage]);

  return (
    <nav className={styles.nav__container}>
      <Menu
        className={styles.nav__menu}
        onClick={handleClick}
        selectedKeys={[current]}
        mode='inline'
        style={{ width: 100 }}
      >
        <Menu.Item
          key='qa'
          icon={<AppstoreOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='widget-setting'
          icon={<WechatOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='analysis'
          icon={<LineChartOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
      </Menu>

      <div>
        <Menu
          className={clsx(styles.nav__menu, styles.bottom)}
          onClick={handleClick}
          selectedKeys={[current]}
          mode='inline'
          style={{ width: 100 }}
        >
          <Menu.Item
            key='user'
            icon={<UserOutlined className={styles.nav__menuItem__icon} />}
            className={styles.nav__menuItem}
          ></Menu.Item>
          <Menu.Item
            key='infor'
            icon={<InfoCircleOutlined className={styles.nav__menuItem__icon} />}
            className={styles.nav__menuItem}
          ></Menu.Item>
          <Menu.Item
            key='home'
            icon={<HomeOutlined className={styles.nav__menuItem__icon} />}
            className={styles.nav__menuItem}
          ></Menu.Item>
        </Menu>

        <div className={styles.logout}>
          <div className={styles.logout__inner}>
            <Avatar
              size={40}
              style={{ backgroundColor: 'var(--color-blue-70)' }}
            >
              N
            </Avatar>
          </div>
          <div className={styles.logout__inner}>
            <LogoutIcon />
            <span>ログアウト</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
