import { useNewYorkTimesQuery } from '@/store/api/apiNewYorkTimesSlice';
import { useDispatch } from 'react-redux';
import { setArticleBanner } from '@/store/modules/newsSlice';
import React from 'react';

export function useNewYorkTimesApi(section) {
  const { data, error, isLoading } = useNewYorkTimesQuery(section);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data?.results?.length) {
      try {
        const articlesWithImages = data?.results.filter((article) => article.multimedia && article.multimedia.length > 0);
        dispatch(setArticleBanner(articlesWithImages));
      } catch (err) {
        console.error('Error dispatching setArticleBanner:', err);
      }
    }
  }, [data, dispatch]);

  return {
    data: data?.results.filter((article) => article.multimedia && article.multimedia.length > 0),
    error,
    isLoading
  };
}
