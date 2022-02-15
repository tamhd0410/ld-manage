import { Routes, Route, Navigate } from 'react-router-dom';

interface IProps {
  isAuthenticated: boolean;
  authenPath: string;
  component: React.ComponentType;
}

export const ProtectedRoutes: React.FC<IProps> = ({
  isAuthenticated,
  authenPath,
  component: RouteComponent,
}) => {
  if (isAuthenticated) {
    return <Navigate to={authenPath} />;
  }
  return <RouteComponent />;
};
