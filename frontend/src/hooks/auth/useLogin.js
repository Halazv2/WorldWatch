import { useLoginMutation, useCheckAuthQuery } from '@/store/api/apiAuthSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

function CheckAuth() {
  const { data, isLoading, isError, error } = useCheckAuthQuery();

  return {
    user: data,
    isLoading,
    isError,
    error
  };
}

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const { user: data } = CheckAuth();
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(state).unwrap();
      dispatch(loginSuccess(data));
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return {
    state,
    isLoading,
    isError,
    error,
    handleChange,
    handleSubmit
  };
}
