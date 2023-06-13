import { useLoginMutation } from '@/store/api/apiAuthSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/store/modules/authSlice';

export function useLogin() {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, error }] = useLoginMutation();
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
      dispatch(loginSuccess());
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
