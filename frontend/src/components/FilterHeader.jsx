import Container from './container';
import { useFilter } from '../hooks/articles/useFilter';

export default function FilterHeader() {
  const { handleApi, handleSection, handleSearch } = useFilter();

  return (
    <Container className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4 w-full">
          <form className="flex flex-row gap-4 w-full">
            <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Search" onChange={(e) => handleSearch(e)} />
            <select
              className="w-1/4 p-2 border border-gray-300 rounded-md"
              onChange={(e) => handleApi(e.target.value === 'NewsApi' ? 'https://newsapi.org/v2/everything?q=' : 'https://bing-news-search1.p.rapidapi.com/news/search?q=')}
            >
              <option value="NewsApi">NewsApi</option>
              <option value="GNews">GNews</option>
            </select>
            <select className="w-1/4 p-2 border border-gray-300 rounded-md" onChange={(e) => handleSection(e.target.value === 'home' ? '' : e.target.value)}>
              <option value="science">science</option>
              <option value="us">us</option>
              <option value="world">world</option>
            </select>
            <button className="p-2 text-white bg-dark rounded-md" type="submit">
              Search
            </button>
          </form>
          <div className="flex flex-row gap-4">
            <button
              className="flex w-full justify-center items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-blacktransition ease-in-out duration-150"
              onClick={() => {}}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
