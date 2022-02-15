import { UserPage } from 'pages/users-management/index';
import { QaPage } from 'pages/qa/index';
import { WidgetSettingPage } from 'pages/widget-setting/index';
import { InforPage } from 'pages/infor';

const routes = [
  {
    path: 'users-management',
    component: UserPage,
    exact: true,
  },
  {
    path: 'qa',
    component: QaPage,
    exact: true,
  },
  {
    path: 'widget-setting',
    component: WidgetSettingPage,
    exact: true,
  },
  { path: 'infor', component: InforPage, exact: true },
];

export default routes;
