import { useCheckAuthQuery } from './store/api/apiAuthSlice';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginSuccess, logoutSuccess } from './store/modules/authSlice';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ element }) => {
  const { data, isLoading, isError, isSuccess } = useCheckAuthQuery();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentPath = window.location.pathname;

  useEffect(() => {
    dispatch(isError ? logoutSuccess() : loginSuccess(data));
  }, [dispatch, data, isError, isLoggedIn]);

  isLoading ? <div>Loading...</div> : null;
  isError ? <Navigate to="/login" /> : null;

  if (!isSuccess && currentPath !== '/login') {
    return <Navigate to="/login" />;
  }
  if (isSuccess && currentPath === '/login') {
    return <Navigate to="/" />;
  }

  return element;
};
