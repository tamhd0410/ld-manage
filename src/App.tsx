import React from 'react';
import { UserPage } from 'pages/users-management/index';
import 'antd/dist/antd.css';
import './App.scss';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { PrivateRoute } from 'router/privateRoute';
import { ProtectedRoutes } from 'router/protectedRoute';
import Error from 'pages/error';

function App() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error />} />
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
