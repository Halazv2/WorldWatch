import { useGNewsQuery } from '../../store/api/apiGNewsSlice';
import { useNewsApiQuery } from '../../store/api/apiNewsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../../store/modules/newsSlice';

export async function useFetchNews() {
  const dispatch = useDispatch();
  const selectedSource = useSelector((state) => state.news.api);

  const { data: gNewsData, error: gNewsError, isLoading: gNewsIsLoading } = useGNewsQuery();
  const { data: newsApiData, error: newsApiError, isLoading: newsApiIsLoading } = useNewsApiQuery();

  useEffect(() => {
    let payload = [];
    if (gNewsData && newsApiData) {
      if (selectedSource === 'all') {
        payload = [...gNewsData.articles, ...newsApiData.articles];
      } else if (selectedSource === 'gnews') {
        payload = [...gNewsData.articles];
      } else if (selectedSource === 'newsapi') {
        payload = [...newsApiData.articles];
      }

      dispatch(setArticles(payload));
    }
  }, [selectedSource, newsApiData, gNewsData, dispatch]);
  return {
    isLoading: newsApiIsLoading || gNewsIsLoading,
    error: newsApiError || gNewsError
  };
}
