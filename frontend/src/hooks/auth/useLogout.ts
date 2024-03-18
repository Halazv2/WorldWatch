import { useLogoutMutation } from '@/store/api/apiAuthSlice';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '@/store/modules/authSlice';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutSuccess());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return {
    isLoading,
    isError,
    error,
    handleLogout
  };
}
