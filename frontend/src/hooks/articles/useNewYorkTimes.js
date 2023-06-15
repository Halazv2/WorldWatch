import { useNewYorkTimesQuery } from '@/store/api/apiNewYorkTimesSlice';
import { useDispatch } from 'react-redux';
import { fetchNewsSuccess } from '@/store/modules/newsSlice';

export function useNewYorkTimesApi(section) {
  const { data, error, isLoading } = useNewYorkTimesQuery(section);

  const dispatch = useDispatch();

  try {
    dispatch(fetchNewsSuccess(data.results[0]));
  } catch (err) {
    console.error(err);
  }

  return {
    data: data?.results[6],
    error,
    isLoading
  };
}
