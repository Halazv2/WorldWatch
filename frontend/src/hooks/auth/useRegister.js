import { useRegisterMutation } from '@/store/api/apiAuthSlice';
import { useState } from 'react';

export function useRegister() {
  const [register, { isLoading, isError, error }] = useRegisterMutation();
  const [state, setState] = useState({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: ''
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
      await register(state).unwrap();
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
