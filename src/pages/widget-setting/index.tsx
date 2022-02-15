import React from 'react';
import { ThemeWidget } from './theme-setting/index';
import { LayoutAdmin } from 'layout/admin';

export const WidgetSettingPage = () => {
  return (
    <LayoutAdmin>
      <div className='div__content'>
        <ThemeWidget />
      </div>
    </LayoutAdmin>
  );
};
