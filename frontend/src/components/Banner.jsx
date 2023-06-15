import { useNewYorkTimesApi } from '../hooks/articles/useNewYorkTimes';
import Container from './container';
import { useSelector } from 'react-redux';

function Banner() {
  const section = useSelector((state) => state.news.section);
  const { data, error, isLoading } = useNewYorkTimesApi(section);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;
  console.log(data);
  return (
    <Container className="flex flex-col gap-3">
      <div>
        <a href={data?.url} target="_blank" rel="noreferrer">
          <h1 className="text-3xl font-bold">{data ? data?.title : ''}</h1>
        </a>
        <p className="mt-4 text-gray-500 ">{data && data?.abstract}</p>
      </div>
      <img
        src={data?.multimedia[1].url}
        alt={data?.multimedia[1].caption}
        loading="lazy"
        className="pointer-events-none group-hover:opacity-75 object-cover max-h-96 lg:max-h-full w-full lg:w-full lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
      />

      <div className="flex justify-center">
        <p>
          <span className="font-bold">photo {data && data?.multimedia[1].copyright}</span> | {data?.section} | {data?.byline} |{' '}
          <span>
            {data && data?.published_date ? new Date(data?.published_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}
          </span>
        </p>
      </div>
    </Container>
  );
}

export default Banner;
