import React from 'react';
import { UserPage } from 'pages/users-management/index';
import { QaPage } from 'pages/qa/index';
import { WidgetSettingPage } from 'pages/widget-setting/index';
import { InforPage } from 'pages/infor';
import { Login } from 'pages/login';
import 'antd/dist/antd.css';
import './App.scss';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import PublicRoute from 'router/publicRoute';
import { PrivateRoute } from 'router/privateRoute';
import { ProtectedRoutes } from 'router/protectedRoute';
import Error from 'pages/error';

function App() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoutes
              isAuthenticated={isAuthenticated}
              component={Login}
              authenPath='qa'
            />
          }
        />
        <Route path='*' element={<Error />} />
        <Route
          path='qa'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['admin']}
              component={QaPage}
            />
          }
        />
        <Route
          path='widget-setting'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['admin']}
              component={WidgetSettingPage}
            />
          }
        />
        <Route
          path='infor'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['admin']}
              component={InforPage}
            />
          }
        />
        <Route
          path='user'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['admin']}
              component={UserPage}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
