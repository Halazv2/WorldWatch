import { useLogoutMutation } from '@/store/api/apiAuthSlice';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '@/store/modules/authSlice';

export function useLogout() {
  const dispatch = useDispatch();
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logoutSuccess());
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
