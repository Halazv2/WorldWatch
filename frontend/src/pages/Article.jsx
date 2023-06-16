import { Link, useLocation } from 'react-router-dom';
import Container from '../components/container';

const Article = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <Container className="flex flex-col gap-4 h-full">
      <Link to="/" className=" text-sm font-medium text-secondary cursor-pointer hover:underline w-fit">
        <span aria-hidden="true">←</span> Back to articles
      </Link>
      <article className="flex items-stretch gap-3 lg:flex-row flex-col h-full">
        <img
          src={article.urlToImage || article.image || 'https://via.placeholder.com/720x400'}
          className="pointer-events-none group-hover:opacity-75 object-cover max-h-96 lg:max-h-full w-full lg:w-[400px] lg:h-[600px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
        <div className="flex flex-col gap-6 h-full lg:w-[100%]">
          <div className="h-full gap-4 flex flex-col">
            <h1 className="text-5xl font-bold">{article.title}</h1>
            <p className="flex items-end justify-between gap-1">
              <span>
                <span className="text-gray-500">
                  {' '}
                  {new Date(article.publishedAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>{' '}
              </span>
            </p>
            <p className="mt-4 text-gray-500 text-xl">
              {article.description} + {article.content.split('[')[0]}
            </p>
          </div>

          <span className="text-md flex items-end justify-end gap-1">
            by <span className="text-gray-900 font-bold">{article.author ? article.author : article.source.name || 'Unknown'}</span>
          </span>
        </div>
      </article>
    </Container>
  );
};

export default Article;
