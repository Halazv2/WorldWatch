import { useCheckAuthQuery } from './store/api/apiAuthSlice';
import { Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { React } from 'react';
import { loginSuccess } from './store/modules/authSlice';

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ element }) => {
  const { data: isAuthenticated, isLoading } = useCheckAuthQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};
