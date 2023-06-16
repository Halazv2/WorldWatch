/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Container from './container';
import { useState } from 'react';

export default function ArticlesList({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="flex flex-col gap-4 h-full">
      {currentArticles.length > 0 &&
        currentArticles.map((article, index) => (
          <div key={index} className="flex items-stretch gap-3 lg:flex-row flex-col h-full">
            <img
              src={article?.urlToImage || article?.image || 'https://via.placeholder.com/720x400'}
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

      {/* Pagination */}
      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Container>
  );
}
