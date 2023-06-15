/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Container from './container';

export default function ArticlesList({ articles }) {
  return (
    <Container className="flex flex-col gap-4 h-full">
      {articles?.articles.map((article, index) => (
        <div key={index} className="flex items-stretch gap-3 lg:flex-row flex-col h-full">
          <img
            src={article.urlToImage}
            alt=""
            loading="lazy"
            className="pointer-events-none group-hover:opacity-75 object-cover max-h-96 lg:max-h-full w-full lg:w-[600px] lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
          <div className="flex flex-col gap-6 h-full">
            <div className="h-full gap-4 flex flex-col">
              <h1 className="text-3xl font-bold">{article.title}</h1>
              <p>
                <span className="text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>{' '}
                <span className="text-gray-500">·</span> <span className="text-gray-900 font-bold">{article.author ? article.author : article.source.name}</span>
              </p>
              <p className="mt-4 text-gray-500 ">{article.description}</p>
            </div>
            <div className="flex justify-end w-full h-full items-end">
              <Link to={`/article/${article.source.id}-${article.source.name}`} state={{ article: article }} className="text-sm font-medium text-secondary">
                Read more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}
