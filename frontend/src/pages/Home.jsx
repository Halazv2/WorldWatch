import Banner from '../components/Banner';
import ArticlesList from '../components/ArticlesList';
import { useFetchNews } from '../hooks/articles/useFetchNews';
import FilterHeader from '../components/FilterHeader';
import { useSelector } from 'react-redux';

function Home() {
  const articles = useSelector((state) => state.news.articles);
  const { isLoading, isError } = useFetchNews();
  return (
    <div className="w-full h-full">
      <Banner />
      {isLoading ? <div className="flex justify-center items-center h-screen text-9xl text-gray-500">Loading...</div> : null}
      <FilterHeader />
      {isError ? <div className="flex justify-center items-center h-screen text-9xl text-gray-500">Something went wrong...</div> : <ArticlesList articles={articles} />}
    </div>
  );
}

export default Home;
