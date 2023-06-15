import { useArticlesQuery } from '@/store/api/apiNewsSlice';
import { useDispatch } from 'react-redux';
import { fetchNewsSuccess } from '@/store/modules/newsSlice';

export function useNewsApi() {
  const { data, error, isLoading } = useArticlesQuery();

  const dispatch = useDispatch();

  try {
    dispatch(fetchNewsSuccess(data));
  } catch (err) {
    console.error(err);
  }

  return {
    data,
    error,
    isLoading
  };
}
